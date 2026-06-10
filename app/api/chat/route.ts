import {
  LexRuntimeV2Client,
  RecognizeTextCommand,
} from "@aws-sdk/client-lex-runtime-v2";
import { NextRequest, NextResponse } from "next/server";

import { awsCredentialsProvider } from "@vercel/oidc-aws-credentials-provider";

// Tells Next.js to run this API route in the Node.js runtime, not the Edge runtime
export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 1024;
const SESSION_ID_PATTERN = /^[A-Za-z0-9._:-]{2,100}$/;

type ChatRequestBody = {
  message?: unknown;
  sessionId?: unknown;
};

type LexConfig = {
  region: string;
  botId: string;
  botAliasId: string;
  localeId: string;
};

const getLexConfig = (): LexConfig => {
  const config = {
    region: process.env.AWS_REGION,
    botId: process.env.LEX_BOT_ID,
    botAliasId: process.env.LEX_BOT_ALIAS_ID,
    localeId: process.env.LEX_LOCALE_ID,
  };
  const missingConfig = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingConfig.length > 0) {
    throw new Error(`Missing Lex configuration: ${missingConfig.join(", ")}`);
  }

  return config as LexConfig;
};

const parseRequestBody = async (
  request: NextRequest,
): Promise<ChatRequestBody | undefined> => {
  try {
    return (await request.json()) as ChatRequestBody;
  } catch {
    return undefined;
  }
};

export async function POST(request: NextRequest) {
  const body = await parseRequestBody(request);

  if (!body) {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (typeof body.message !== "string") {
    return NextResponse.json(
      { error: "Request body must include a message string." },
      { status: 400 },
    );
  }

  if (typeof body.sessionId !== "string") {
    return NextResponse.json(
      { error: "Request body must include a sessionId string." },
      { status: 400 },
    );
  }

  const message = body.message.trim();
  const sessionId = body.sessionId.trim();

  if (!message) {
    return NextResponse.json(
      { error: "Message cannot be empty." },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
      },
      { status: 400 },
    );
  }

  if (!SESSION_ID_PATTERN.test(sessionId)) {
    return NextResponse.json(
      { error: "Session ID is invalid." },
      { status: 400 },
    );
  }

  try {
    const { region, botId, botAliasId, localeId } = getLexConfig();
    const lexClient = new LexRuntimeV2Client({
      region,
      credentials: awsCredentialsProvider({
        roleArn: process.env.AWS_LEX_READ_ROLE!,
      }),
    });
    const lexResponse = await lexClient.send(
      new RecognizeTextCommand({
        botId,
        botAliasId,
        localeId,
        sessionId,
        text: message,
      }),
    );
    const messages =
      lexResponse.messages
        ?.map((lexMessage) => lexMessage.content?.trim())
        .filter((content): content is string => Boolean(content))
        .map((content) => ({
          role: "assistant" as const,
          content,
        })) ?? [];

    return NextResponse.json({
      messages:
        messages.length > 0
          ? messages
          : [
              {
                role: "assistant",
                content: "I did not receive a response. Please try again.",
              },
            ],
      sessionId,
    });
  } catch (error) {
    console.error("Failed to send message to Lex.", error);

    return NextResponse.json(
      { error: "Unable to reach the assistant right now." },
      { status: 502 },
    );
  }
}
