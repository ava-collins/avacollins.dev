"use client";

import React, {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./chat-widget.css";

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export type ChatWidgetResponse = {
  messages: Array<Omit<ChatMessage, "id"> & { id?: string }>;
};

export interface ChatWidgetProps {
  title?: string;
  greeting?: string;
  launcherLabel?: string;
  placeholder?: string;
  initialOpen?: boolean;
  initialInput?: string;
  initialMessages?: ChatMessage[];
  initialIsLoading?: boolean;
  initialError?: string;
  onSendMessage?: (message: string) => Promise<ChatWidgetResponse>;
}

const DEFAULT_GREETING =
  "Hi, I am Ava's interview assistant. Ask me about her JavaScript, React, Node, or AWS experience.";

const defaultAssistantReply: ChatWidgetProps["onSendMessage"] = async (
  message,
) => ({
  messages: [
    {
      role: "assistant",
      content: `I heard: "${message}". Lex integration will answer this once the API route is connected.`,
    },
  ],
});

const createMessageId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `message-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const ChatWidget = ({
  title = "Interview assistant",
  greeting = DEFAULT_GREETING,
  launcherLabel = "Chat",
  placeholder = "Ask a question",
  initialOpen = false,
  initialInput = "",
  initialMessages,
  initialIsLoading = false,
  initialError,
  onSendMessage = defaultAssistantReply,
}: ChatWidgetProps) => {
  const seededMessages = useMemo<ChatMessage[]>(
    () =>
      initialMessages ?? [
        {
          id: "initial-greeting",
          role: "assistant",
          content: greeting,
        },
      ],
    [greeting, initialMessages],
  );
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [inputValue, setInputValue] = useState(initialInput);
  const [messages, setMessages] = useState<ChatMessage[]>(seededMessages);
  const [isLoading, setIsLoading] = useState(initialIsLoading);
  const [error, setError] = useState<string | undefined>(initialError);
  const messageListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const messageList = messageListRef.current;

    if (!messageList) {
      return;
    }

    messageList.scrollTop = messageList.scrollHeight;
  }, [messages, isLoading, error, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const nextMessage = inputValue.trim();

    if (!nextMessage || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: nextMessage,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await onSendMessage(nextMessage);
      const assistantMessages = response.messages.map((message) => ({
        ...message,
        id: message.id ?? createMessageId(),
      }));

      setMessages((currentMessages) => [
        ...currentMessages,
        ...assistantMessages,
      ]);
    } catch {
      setError("I could not reach the assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit();
    }
  };

  return (
    <aside className="chat-widget" aria-label={title}>
      {isOpen ? (
        <section className="chat-widget__panel" aria-live="polite">
          <header className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Lex chatbot</p>
              <h2>{title}</h2>
            </div>
            <button
              className="chat-widget__icon-button"
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
          </header>

          <div className="chat-widget__messages" ref={messageListRef}>
            {messages.map((message) => (
              <article
                className={`chat-widget__message chat-widget__message--${message.role}`}
                key={message.id}
              >
                <span className="chat-widget__message-label">
                  {message.role === "assistant" ? "Assistant" : "You"}
                </span>
                <p>{message.content}</p>
              </article>
            ))}
            {isLoading ? (
              <article className="chat-widget__message chat-widget__message--assistant chat-widget__message--typing">
                <span className="chat-widget__message-label">Assistant</span>
                <p>Typing...</p>
              </article>
            ) : null}
            {error ? (
              <p className="chat-widget__error" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          <form className="chat-widget__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-widget-message">
              Message
            </label>
            <textarea
              id="chat-widget-message"
              ref={inputRef}
              className="chat-widget__input"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder={placeholder}
              rows={2}
              disabled={isLoading}
            />
            <button
              className="chat-widget__send"
              type="submit"
              disabled={!inputValue.trim() || isLoading}
            >
              Send
            </button>
          </form>
        </section>
      ) : (
        <button
          className="chat-widget__launcher"
          type="button"
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
        >
          {launcherLabel}
        </button>
      )}
    </aside>
  );
};
