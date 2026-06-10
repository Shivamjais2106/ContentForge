// "use client";
// import { useState, useRef, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import { SendHorizontal, Paperclip, Mic, Plus } from "lucide-react";

// export default function ChatUI() {
//   const [shareChat, setShareChat] = useState(null);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [chats, setChats] = useState([]);
//   const [currentChatId, setCurrentChatId] = useState(null);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const bottomRef = useRef(null);

//   // 🔽 Auto scroll
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     const handleClick = () => setActiveMenu(null);
//     window.addEventListener("click", handleClick);

//     return () => window.removeEventListener("click", handleClick);
//   }, []);

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const res = await fetch("/api/getChats"); // ✅ pehle fetch karo

//         if (!res.ok) throw new Error("API failed");

//         const data = await res.json();

//         setChats(data.chats || []);

//         if (data.length > 0) {
//           setCurrentChatId(data[0]._id);
//           setMessages(data[0].messages || []);
//         }
//       } catch (err) {
//         console.log("Error:", err);
//       }
//     };

//     fetchChats();
//   }, []);

//   // 🎤 Voice Input
//   const startListening = () => {
//     if (!window.webkitSpeechRecognition) return;

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-IN";

//     recognition.onresult = (e) => {
//       setInput(e.results[0][0].transcript);
//     };

//     recognition.start();
//   };

//   // 🚀 Send Message
//   const handleSend = async () => {
//     if (!input.trim() || loading) return;

//     const userMessage = { role: "user", content: input };

//     setMessages((prev) => [...prev, userMessage]); // ✅ IMPORTANT
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt: input,
//           chatId: currentChatId,
//         }),
//       });

//       const reader = res.body.getReader();
//       const decoder = new TextDecoder();

//       let aiMessage = { role: "assistant", content: "" };

//       setMessages((prev) => [...prev, aiMessage]);

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value);

//         aiMessage.content += chunk;

//         setMessages((prev) => {
//           const updated = [...prev];
//           updated[updated.length - 1] = { ...aiMessage };
//           return updated;
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }

//     setLoading(false);
//     if (messages.length <= 1) {
//       setChats((prev) =>
//         prev.map((chat) =>
//           chat._id === currentChatId
//             ? { ...chat, title: input.slice(0, 20) }
//             : chat,
//         ),
//       );
//     }
//   };
//   const createNewChat = async () => {
//     const res = await fetch("/api/createChat", {
//       method: "POST",
//     });

//     const newChat = await res.json();

//     setChats((prev) => [newChat, ...prev]);
//     setCurrentChatId(newChat._id);
//     setMessages([]);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`/api/deleteChat?id=${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Delete failed");

//       setChats((prev) => prev.filter((chat) => chat._id !== id));

//       if (currentChatId === id) {
//         setMessages([]);
//         setCurrentChatId(null);
//       }
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   const handleRename = (id) => {
//   const newName = prompt("Enter new name");
//   if (!newName) return;

//   setChats((prev) =>
//     Array.isArray(prev)
//       ? prev.map((chat) =>
//           chat._id === id ? { ...chat, title: newName } : chat
//         )
//       : []
//   );

//   setActiveMenu(null);
// };

//   const handlePin = (id) => {
//     setChats((prev) => {
//       const chatToPin = prev.find((c) => c._id === id);
//       const others = prev.filter((c) => c._id !== id);

//       return [{ ...chatToPin, pinned: true }, ...others];
//     });

//     setActiveMenu(null);
//   };

//   const handleShare = (chat) => {
//     setShareChat(chat);
//     alert("Chat copied!");
//     setActiveMenu(null);
//   };

//   return (
//     <div className="h-screen w-screen flex overflow-hidden bg-[#0b0f19] text-white">
//       {/* 🔥 SIDEBAR (Fixed) */}
//       <div className="w-64 bg-[#020617] border-r border-gray-800 flex flex-col">
//         <div className="p-4">
//           <button
//             onClick={createNewChat}
//             className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
//           >
//             {" "}
//             New Chat
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-3 space-y-2">
//           <p className="text-xs text-gray-400 mb-2">Chats</p>

//           {Array.isArray(chats) &&
//             chats.map((chat) => (
//               <div
//                 key={chat._id || Math.random()}
//                 className="relative flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 group"
//               >
//                 {/* CHAT CLICK */}
//                 <div
//                   onClick={() => {
//                     setCurrentChatId(chat._id);
//                     setMessages(
//                       Array.isArray(chat.messages) ? chat.messages : [],
//                     );
//                   }}
//                   className="flex-1 cursor-pointer text-sm text-gray-300"
//                 >
//                   {chat.title || "Untitled Chat"}
//                 </div>

//                 {/* THREE DOTS */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setActiveMenu(activeMenu === chat._id ? null : chat._id);
//                   }}
//                   className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded"
//                 >
//                   ⋮
//                 </button>

//                 {/* DROPDOWN */}
//                 {activeMenu === chat._id && (
//                   <div className="absolute right-2 top-10 bg-[#1e293b] border border-gray-700 rounded-lg shadow-lg w-40 z-50">
//                     <button
//                       onClick={() => handleRename(chat._id)}
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm"
//                     >
//                       ✏ Rename
//                     </button>

//                     <button
//                       onClick={() => handleDelete(chat._id)}
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm text-red-400"
//                     >
//                       🗑 Delete
//                     </button>

//                     <button
//                       onClick={() => handlePin(chat._id)}
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm"
//                     >
//                       📌 Pin
//                     </button>

//                     <button
//                       onClick={() => handleShare(chat)}
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm"
//                     >
//                       🔗 Share
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//       {/* 💬 MAIN */}
//       <div className="flex-1 flex flex-col h-full">
//         {/* 🧠 CHAT AREA (ONLY THIS SCROLLS) */}
//         <div className="flex-1 overflow-y-auto">
//           {/* CENTER HERO */}
//           {messages.length === 0 && (
//             <div className="h-full flex flex-col items-center justify-center text-center">
//               <h1 className="text-4xl font-semibold mb-3">Hi Shivam</h1>
//               <p className="text-gray-400 text-lg">Where should we start?</p>
//             </div>
//           )}

//           {/* MESSAGES */}
//           <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
//             {messages.map((msg, i) => (
//               <div key={i} className="flex gap-3">
//                 {/* Avatar */}
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
//                     msg.role === "user" ? "bg-blue-600" : "bg-green-600"
//                   }`}
//                 >
//                   {msg.role === "user" ? "U" : "AI"}
//                 </div>

//                 {/* Message */}
//                 <div className="flex-1">
//                   <p className="text-xs text-gray-400 mb-1">
//                     {msg.role === "user" ? "You" : "AI"}
//                   </p>

//                   <div className="bg-[#1e293b] p-3 rounded-lg text-sm leading-relaxed">
//                     <ReactMarkdown skipHtml>{msg.content}</ReactMarkdown>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="text-sm text-gray-400 animate-pulse">
//                 AI is thinking...
//               </div>
//             )}

//             <div ref={bottomRef} />
//           </div>
//         </div>

//         {/* ✨ INPUT FIXED BOTTOM */}
//         <div className="border-t border-gray-800 bg-[#020617] p-4">
//           <div className="max-w-3xl mx-auto flex items-center gap-2 bg-[#1e293b] rounded-xl p-2">
//             <button className="p-2 hover:bg-gray-700 rounded-lg">
//               <Paperclip size={18} />
//             </button>

//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Ask anything..."
//               className="flex-1 bg-transparent outline-none text-sm px-2"
//             />

//             <button
//               onClick={startListening}
//               className="p-2 hover:bg-gray-700 rounded-lg"
//             >
//               <Mic size={18} />
//             </button>

//             <button
//               onClick={handleSend}
//               className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
//             >
//               <SendHorizontal size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//       {shareChat && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-[#111827] w-[500px] rounded-2xl p-6 relative">
//             {/* CLOSE */}
//             <button
//               onClick={() => setShareChat(null)}
//               className="absolute right-4 top-4 text-gray-400"
//             >
//               ✕
//             </button>

//             {/* TITLE */}
//             <h2 className="text-xl font-semibold mb-4">{shareChat.title}</h2>

//             {/* PREVIEW */}
//             <div className="bg-[#1e293b] p-4 rounded-lg text-sm max-h-40 overflow-y-auto">
//               {shareChat?.messages?.slice(0, 3).map((msg, i) => (
//                 <p key={i} className="mb-2 text-gray-300">
//                   {msg.content}
//                 </p>
//               ))}
//             </div>

//             {/* ACTIONS */}
//             <div className="flex justify-around mt-6">
//               {/* COPY */}
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(
//                     shareChat.messages.map((m) => m.content).join("\n"),
//                   );
//                   alert("Copied!");
//                 }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 🔗
//                 <span className="text-xs">Copy</span>
//               </button>

//               {/* WHATSAPP */}
//               <button
//                 onClick={() => {
//                   const text = encodeURIComponent(
//                     shareChat.messages.map((m) => m.content).join("\n"),
//                   );
//                   window.open(`https://wa.me/?text=${text}`);
//                 }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 🟢
//                 <span className="text-xs">WhatsApp</span>
//               </button>

//               {/* LINKEDIN */}
//               <button
//                 onClick={() => {
//                   window.open("https://www.linkedin.com/feed/");
//                 }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 💼
//                 <span className="text-xs">LinkedIn</span>
//               </button>

//               {/* TWITTER */}
//               <button
//                 onClick={() => {
//                   const text = encodeURIComponent(
//                     shareChat.messages.map((m) => m.content).join("\n"),
//                   );
//                   window.open(`https://twitter.com/intent/tweet?text=${text}`);
//                 }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 🐦
//                 <span className="text-xs">Twitter</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import PromptInput from "@/components/generator/PromptInput";
import OutputDisplay from "@/components/generator/OutputDisplay";
import TemplateSelector from "@/components/generator/TemplateSelector";
import { useContent } from "@/context/ContentContext";

export default function GeneratorPage() {
  const { generate, loading, currentOutput, clearOutput } = useContent();
  const [formData, setFormData] = useState({
    type: "blog",
    prompt: "",
    platform: null,
    tone: "professional",
    file: null,
  });
const searchParams = useSearchParams();
useEffect(() => {
  const type = searchParams.get("type");
  const prompt = searchParams.get("prompt");
  const tone = searchParams.get("tone");
  const platform = searchParams.get("platform");

  if (type || prompt) {
    setFormData((prev) => ({
      ...prev,
      type: type || prev.type,
      prompt: prompt || prev.prompt,
      tone: tone || prev.tone,
      platform: platform || prev.platform,
    }));
  }
}, []);

  const handleGenerate = async () => {
    if (!formData.prompt.trim()) return;

    const payload = new FormData();
    payload.append("type", formData.type);
    payload.append("prompt", formData.prompt);
    payload.append("tone", formData.tone);
    if (formData.platform) payload.append("platform", formData.platform);
    if (formData.file) payload.append("file", formData.file);

    await generate(formData);
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-4rem)]">
      {/* Left Panel — Input */}
      <div className="w-[420px] flex-shrink-0 flex flex-col gap-4 overflow-y-auto pr-2">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">AI Generator</h1>
          <p className="text-gray-400 text-sm mt-1">
            Describe karo, file upload karo — AI content banayega
          </p>
        </div>

        {/* Template Selector */}
        <TemplateSelector
          selected={formData.type}
          onChange={(type) => setFormData({ ...formData, type, platform: null })}
        />

        {/* Prompt Input + File Upload */}
        <PromptInput
          formData={formData}
          setFormData={setFormData}
          onGenerate={handleGenerate}
          loading={loading}
        />
      </div>

      {/* Right Panel — Output */}
      <div className="flex-1 overflow-y-auto">
        <OutputDisplay
          output={currentOutput}
          loading={loading}
          onClear={clearOutput}
        />
      </div>
    </div>
  );
}