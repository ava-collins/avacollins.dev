import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { ChatWidget, ChatWidgetResponse } from "./ChatWidget";

const sampleMessages = [
  {
    id: "sample-greeting",
    role: "assistant" as const,
    content:
      "Hi, I am Ava's interview assistant. Ask me about her JavaScript, React, Node, or AWS experience.",
  },
  {
    id: "sample-user",
    role: "user" as const,
    content: "How many years of React experience do you have?",
  },
  {
    id: "sample-assistant",
    role: "assistant" as const,
    content:
      "Ava has worked with React across production web applications, design systems, component libraries, and interactive product experiences.",
  },
];

const mockSendMessage = async (message: string): Promise<ChatWidgetResponse> =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        messages: [
          {
            role: "assistant",
            content: `Mock response for: "${message}"`,
          },
        ],
      });
    }, 700);
  });

const meta = {
  title: "modules/chat/ChatWidget",
  component: ChatWidget,
  decorators: [
    (Story) => (
      <div
        style={{
          background: "#edf0f2",
          minHeight: "720px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    onSendMessage: mockSendMessage,
  },
} satisfies Meta<typeof ChatWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const Open: Story = {
  args: {
    initialOpen: true,
    initialMessages: sampleMessages,
  },
};

export const Loading: Story = {
  args: {
    initialOpen: true,
    initialMessages: sampleMessages,
    initialInput: "What AWS services has Ava used?",
    initialIsLoading: true,
  },
};

export const Error: Story = {
  args: {
    initialOpen: true,
    initialMessages: sampleMessages,
    initialError: "I could not reach the assistant. Please try again.",
  },
};

export const Mobile: Story = {
  args: {
    initialOpen: true,
    initialMessages: sampleMessages,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
