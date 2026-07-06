import { Lightbulb } from "lucide-react";

export default function SuggestionsCard({ analysis }) {
  const suggestions = analysis?.analysis?.suggestions || [];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center gap-3 mb-6">
        <Lightbulb
          className="text-yellow-400"
          size={28}
        />

        <h2 className="text-2xl font-bold text-white">
          AI Suggestions
        </h2>
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
              className="p-5 border rounded-2xl border-yellow-500/20 bg-yellow-500/5"
            >
              <p className="leading-7 text-gray-300">
                💡 {item}
              </p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}