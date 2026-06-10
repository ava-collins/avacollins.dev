import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

const PORT = 3210;
const BASE_URL = `http://localhost:${PORT}`;
const STARTUP_TIMEOUT_MS = 15000;

let nextServer;

const waitForServer = async () => {
  const startedAt = Date.now();

  while (Date.now() - startedAt < STARTUP_TIMEOUT_MS) {
    try {
      const response = await fetch(BASE_URL);

      if (response.status < 500) {
        return;
      }
    } catch {
      await new Promise((resolve) => {
        setTimeout(resolve, 250);
      });
    }
  }

  throw new Error("Timed out waiting for Next.js dev server.");
};

const postChat = async (body) =>
  fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

before(async () => {
  nextServer = spawn("yarn", ["start", "--port", String(PORT)], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
    },
    stdio: "ignore",
  });

  await waitForServer();
});

after(() => {
  nextServer?.kill("SIGTERM");
});

test("POST /api/chat rejects invalid JSON", async () => {
  const response = await postChat("{");
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Request body must be valid JSON.");
});

test("POST /api/chat requires a message string", async () => {
  const response = await postChat(JSON.stringify({ sessionId: "test-session" }));
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Request body must include a message string.");
});

test("POST /api/chat requires a sessionId string", async () => {
  const response = await postChat(JSON.stringify({ message: "hello" }));
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Request body must include a sessionId string.");
});

test("POST /api/chat rejects empty messages", async () => {
  const response = await postChat(
    JSON.stringify({ message: "   ", sessionId: "test-session" }),
  );
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Message cannot be empty.");
});

test("POST /api/chat rejects overlong messages", async () => {
  const response = await postChat(
    JSON.stringify({ message: "x".repeat(1025), sessionId: "test-session" }),
  );
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Message must be 1024 characters or fewer.");
});

test("POST /api/chat rejects invalid session IDs", async () => {
  const response = await postChat(
    JSON.stringify({ message: "hello", sessionId: "invalid session" }),
  );
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.error, "Session ID is invalid.");
});

test("GET /api/chat is not allowed", async () => {
  const response = await fetch(`${BASE_URL}/api/chat`);

  assert.equal(response.status, 405);
});
