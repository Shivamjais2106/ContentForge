"use client";
import { useState } from "react";
import { Copy, Check, Trash2, Star } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export default function OutputDisplay({ output, loading, onClear }) {
  const [copied, setCopied] = useState(false);
  const { toggleFavorite } = useContent();

  const handleCopy = async () => {
    if (!output?.output) return;
    await navigator.clipboard.writeText(output.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Loading state — ChatGPT jaisa typing effect
  if (loading) {
    return (
      <div className="h-full bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          <span className="text-gray-400 text-sm ml-1">AI likh raha hai...</span>
        </div>
        <div className="space-y-3 flex-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-800 rounded animate-pulse"
              style={{ width: `${Math.random() * 40 + 60}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (!output) {
    return (
      <div className="h-full bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center text-center p-8">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-lg font-semibold text-white mb-2">
          AI Output yahan aayega
        </h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Left side mein content type choose karo, prompt likho aur Generate dabao
        </p>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900 border border-gray-800 rounded-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full capitalize font-medium">
            {output.type}
          </span>
          {output.platform && (
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full capitalize">
              {output.platform}
            </span>
          )}
          <span className="text-xs text-gray-600 capitalize">{output.tone}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(output._id)}
            className={`p-2 rounded-lg transition-all ${
              output.isFavorite
                ? "text-yellow-400 bg-yellow-500/10"
                : "text-gray-500 hover:text-yellow-400 hover:bg-gray-800"
            }`}
          >
            <Star className="w-4 h-4" fill={output.isFavorite ? "currentColor" : "none"} />
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
          <button
            onClick={onClear}
            className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-gray-800 transition-all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Output Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose prose-invert prose-sm max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-200 text-sm leading-relaxed">
            {output.output}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-800 flex items-center justify-between">
        <p className="text-xs text-gray-600 truncate max-w-xs">
          Prompt: {output.prompt}
        </p>
        <p className="text-xs text-gray-600">
          {new Date(output.createdAt).toLocaleDateString("en-IN")}
        </p>
      </div>
    </div>
  );
}