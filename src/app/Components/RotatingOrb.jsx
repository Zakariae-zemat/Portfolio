"use client";
import { useState, useEffect, useRef } from "react";

export default function MiniTerminal() {
  const [history, setHistory] = useState([
    "✨ Welcome to Zakariae's terminal.",
    "Type 'help' to begin.",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();

      if (command === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const response = getCommandResponse(command);
      setHistory([...history, `> ${input}`, response]);
      setInput("");
    }
  };

  const getCommandResponse = (cmd) => {
    switch (cmd) {
      case "help":
        return "Available: about, skills, contact, clear";
      case "about":
        return "Creative software engineer fueled by caffeine ☕ and curiosity.";
      case "skills":
        return "React | Next.js | Tailwind | Node.js | Three.js";
      case "contact":
        return "📬 zakariae.dev@example.com";
      default:
        return "Command not found. Try 'help'.";
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  return (
    <div className="backdrop-blur-lg bg-black/40 border border-[#4ee4c1]/30 rounded-2xl p-4 h-[420px] w-full shadow-[0_0_15px_#00ffc2aa] flex flex-col font-mono text-sm text-[#00ffc2]">
      <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>
      <div className="mt-2 flex items-center">
        <span className="mr-1 text-[#00ffc2]">&gt;</span>
        <input
          className="bg-transparent flex-1 text-[#00ffc2] border-none outline-none placeholder-[#00ffc280]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          placeholder="type a command..."
        />
        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
}
