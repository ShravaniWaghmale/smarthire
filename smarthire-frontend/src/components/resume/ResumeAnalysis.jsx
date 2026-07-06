import { motion } from "framer-motion";

import ATSScoreCard from "./ATSScoreCard";
import GrammarCard from "./GrammarCard";
import MissingSkills from "./MissingSkills";
import ResumeStrength from "./ResumeStrength";
import SuggestionsCard from "./SuggestionsCard";

export default function ResumeAnalysis() {
  // Mock AI Result (Later comes from backend)
  const analysis = {
    atsScore: 84,

    grammarScore: 96,

    strengths: [
      "Excellent React Projects",
      "Good Technical Skills",
      "Clean Resume Formatting",
      "Relevant Education",
    ],

    missingSkills: [
      "Docker",
      "AWS",
      "TypeScript",
      "REST APIs",
      "Unit Testing",
    ],

    suggestions: [
      "Add measurable achievements instead of generic descriptions.",
      "Improve your Professional Summary.",
      "Mention internship accomplishments with numbers.",
      "Use stronger action verbs like Built, Optimized and Designed.",
      "Include ATS keywords from job descriptions.",
    ],
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="mt-12 space-y-8"
    >
      {/* Top Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        <ATSScoreCard score={analysis.atsScore} />

        <GrammarCard score={analysis.grammarScore} />

      </div>

      {/* Middle */}

      <div className="grid gap-6 lg:grid-cols-2">

        <MissingSkills
          skills={analysis.missingSkills}
        />

        <ResumeStrength
          strengths={analysis.strengths}
        />

      </div>

      {/* Bottom */}

      <SuggestionsCard
        suggestions={analysis.suggestions}
      />
    </motion.div>
  );
}