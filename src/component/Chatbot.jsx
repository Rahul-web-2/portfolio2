import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ, QUICK_REPLIES, CHATBOT_META } from "../data/chatbotData.js";
import { fadeUp, scaleIn, panelVariants } from "../animation/animations.js";
import "../css/chatbot.css";
import "../css/media_css/chatbot.css";


function getResponse(input) {
  const norm = input.toLowerCase().trim();
  if (!norm) return null;
  for (const entry of FAQ) {
    for (const kw of entry.keywords) {
      if (norm.includes(kw)) return entry.response;
    }
  }
  return null;
}

let msgCounter = 0;
function makeMsg(role, text) {
  return { id: ++msgCounter, role, text };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasOpened, setHasOpened] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setMessages([makeMsg("bot", CHATBOT_META.welcomeMessage)]);
      setHasOpened(true);
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text = input) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const rawResponse = getResponse(trimmed);
    const botMsg = makeMsg("bot", rawResponse ?? CHATBOT_META.fallbackMessage);
    const userMsg = makeMsg("user", trimmed);

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setShowChips(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      <motion.button
        className="chatbot-toggle-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-panel"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-label="Chat assistant"
            aria-modal="false"
          >
            <div className="chatbot-header">
              <p className="chatbot-header-title">Ask Rahul&apos;s Assistant</p>
              <button
                className="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages" role="log" aria-live="polite">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`chatbot-message chatbot-message--${msg.role}`}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {showChips && (
              <div className="chatbot-chips">
                {QUICK_REPLIES.map((chip) => (
                  <motion.button
                    key={chip.id}
                    className="chatbot-chip"
                    variants={scaleIn}
                    initial="hidden"
                    animate="show"
                    onClick={() => handleSend(chip.query)}
                  >
                    {chip.label}
                  </motion.button>
                ))}
              </div>
            )}

            <div className="chatbot-input-row">
              <input
                className="chatbot-input"
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Type your question"
              />
              <button
                className="chatbot-send-btn"
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
