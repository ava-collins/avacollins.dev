"use client";

import { ChatWidget } from "../stories/modules/chat/ChatWidget";
import { useSyncExternalStore } from "react";

const CHATBOT_QUERY_PARAM = "chatbot";
const ENABLED_QUERY_VALUES = new Set(["1", "true", "yes"]);

export interface ChatWidgetGateProps {
  isEnabled: boolean;
}

const subscribeToUrlChanges = () => () => undefined;

const isChatbotQueryEnabled = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const queryValue = searchParams.get(CHATBOT_QUERY_PARAM)?.toLowerCase();

  return queryValue ? ENABLED_QUERY_VALUES.has(queryValue) : false;
};

export const ChatWidgetGate = ({ isEnabled }: ChatWidgetGateProps) => {
  const shouldShowChatWidget = useSyncExternalStore(
    subscribeToUrlChanges,
    () => isEnabled && isChatbotQueryEnabled(),
    () => false,
  );

  if (!shouldShowChatWidget) {
    return null;
  }

  return <ChatWidget />;
};
