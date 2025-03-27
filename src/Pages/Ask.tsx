import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

const Ask = () => {
  const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessageParam[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: newMessages,
      });
      
      const botReply = response.choices[0]?.message?.content || "Sorry, I didn't understand that.";
      setMessages([...newMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 mt-20 lg:max-w-2xl lg:mx-auto rounded-3xl shadow-xs ">
      {/* Chat Header */}
      <div className="p-4 bg-white text-center font-semibold text-lg">Ask Konoha GPT</div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(100vh - 110px)" }}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg max-w-[75%] lg:max-w-[45%] text-sm sm:text-base ${msg.role === "user" ? "bg-kOrange text-white ml-auto" : "bg-white text-gray-800"}`}
          >
            {Array.isArray(msg.content) 
              ? msg.content.map((part, idx) => <span key={idx}>{part.toString()}</span>) 
              : msg.content?.toString() || ""}
          </div>
        ))}
        {loading && <p className="text-gray-500 text-sm text-center">AI is thinking...</p>}
        <div ref={chatRef} />
      </div>
      
      {/* Input Bar */}
      <div className="flex items-center p-2 bg-white shadow-md fixed bottom-0 w-full lg:max-w-2xl max-w-lg mx-auto px-4 py-3 rounded-t-lg">
        <input
          type="text"
          className="flex-1 border rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-kOrange text-sm sm:text-base"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 bg-kOrange hover:bg-orange-500 text-white p-3 rounded-2xl">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Ask;