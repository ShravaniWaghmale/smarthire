import { Lightbulb } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function SuggestionsCard({ analysis }) {
  const suggestions = (analysis?.suggestions || []).slice(0, 3);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <Lightbulb
            className="text-yellow-400"
            size={28}
          />

          <h2 className="text-2xl font-bold text-white">
            AI Suggestions
          </h2>
        </div>

        <span className="text-sm text-yellow-400 font-medium">
          Top 3 Suggestions
        </span>

      </div>

      {suggestions.length === 0 ? (
        <p className="text-gray-400">
          No suggestions available.
        </p>
      ) : (
        <div className="space-y-4">

          {suggestions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 transition hover:border-yellow-400/40"
            >
              <div className="leading-7 text-gray-300 prose prose-invert max-w-none">
                <ReactMarkdown>
                  {item}
                </ReactMarkdown>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}