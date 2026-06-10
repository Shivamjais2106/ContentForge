"use client";
import { useRef, useState } from "react";
import { Paperclip, X, Wand2, Loader2 } from "lucide-react";

const tones = ["professional", "casual", "funny", "formal", "persuasive"];

const platforms = {
  social: ["instagram", "twitter", "linkedin", "facebook"],
};

export default function PromptInput({ formData, setFormData, onGenerate, loading }) {
  const fileRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file) => {
    if (file) setFormData({ ...formData, file });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      onGenerate();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tone Selector */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <p className="text-sm font-medium text-gray-400 mb-3">Tone</p>
        <div className="flex flex-wrap gap-2">
          {tones.map((tone) => (
            <button
              key={tone}
              onClick={() => setFormData({ ...formData, tone })}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                formData.tone === tone
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      {/* Platform — sirf social ke liye */}
      {formData.type === "social" && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm font-medium text-gray-400 mb-3">Platform</p>
          <div className="flex flex-wrap gap-2">
            {platforms.social.map((p) => (
              <button
                key={p}
                onClick={() => setFormData({ ...formData, platform: p })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  formData.platform === p
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* File Upload */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
          dragOver
            ? "border-purple-500 bg-purple-500/10"
            : "border-gray-700 hover:border-gray-500 bg-gray-900"
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept=".txt,.pdf,.doc,.docx,image/*"
          onChange={(e) => handleFile(e.target.files[0])}
        />
        {formData.file ? (
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <Paperclip className="w-4 h-4" />
              <span className="truncate max-w-[200px]">{formData.file.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFormData({ ...formData, file: null });
              }}
              className="text-gray-500 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="text-gray-500">
            <Paperclip className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">File drop karo ya click karo</p>
            <p className="text-xs mt-0.5 text-gray-600">PDF, DOC, TXT, Images</p>
          </div>
        )}
      </div>

      {/* Prompt Textarea */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <textarea
          value={formData.prompt}
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
          onKeyDown={handleKeyDown}
          placeholder="Kya generate karna hai? Describe karo...&#10;&#10;Example: Write a blog post about the future of AI in healthcare"
          rows={6}
          className="w-full bg-transparent text-white text-sm p-4 resize-none outline-none placeholder-gray-600"
        />
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800">
          <span className="text-xs text-gray-600">
            Ctrl+Enter to generate
          </span>
          <button
            onClick={onGenerate}
            disabled={loading || !formData.prompt.trim()}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm px-4 py-2 rounded-lg transition-all font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                Generate
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}