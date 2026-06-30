"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Привет! Я ИИ-помощник Genova Helper. Спрашивай про документы, учреждения и жизнь в Генуе — отвечу на русском или украинском 🇮🇹",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Произошла ошибка. Попробуй ещё раз." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">ИИ-помощник</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Спроси ИИ-помощника</h1>
        <p className="text-gray-400 text-sm mb-6">Задай любой вопрос про документы и жизнь в Генуе</p>

        {/* Quick questions */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Как получить Codice Fiscale?",
            "Что нужно для Permesso di Soggiorno?",
            "Как записаться к врачу?",
            "Где находится Questura?",
          ].map((q) => (
            <button
              key={q}
              onClick={() => setInput(q)}
              className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-full text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 mb-4 overflow-y-auto min-h-96 max-h-[500px] space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm mr-2 flex-shrink-0 mt-0.5">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-800 border border-gray-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm mr-2 flex-shrink-0">
                🤖
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-gray-400 text-sm">
                Думаю...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Напиши вопрос... (Enter для отправки)"
            rows={1}
            className="flex-1 bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 resize-none focus:outline-none focus:border-orange-300 placeholder-gray-400"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="bg-orange-500 text-white px-5 py-3 rounded-2xl hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-sm"
          >
            →
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-3">
          ИИ может ошибаться. Важные вопросы уточняй в официальных учреждениях.
        </p>

        {/* Telegram bot promo */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#29A8EB" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 14.028l-2.95-.924c-.64-.203-.658-.64.136-.954l11.57-4.46c.536-.194 1.004.131.998.531z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-800 text-sm">Telegram-бот @genova_helper_bot</div>
            <div className="text-gray-400 text-xs">Тот же ИИ-помощник прямо в Telegram — удобно с телефона</div>
          </div>
          <a
            href="https://t.me/genova_helper_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-xl text-white transition-colors"
            style={{ background: "#29A8EB" }}
          >
            Открыть →
          </a>
        </div>
      </div>
    </div>
  );
}
