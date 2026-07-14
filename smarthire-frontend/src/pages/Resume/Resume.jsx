import { useState } from "react";
import { Sparkles } from "lucide-react";

import AppShell from "../../layouts/AppShell";

import ResumeUpload from "../../components/resume/ResumeUpload";
import ResumeAnalysis from "../../components/resume/ResumeAnalysis";
import ATSScoreCard from "../../components/resume/ATSScoreCard";
import GrammarCard from "../../components/resume/GrammarCard";
import SuggestionsCard from "../../components/resume/SuggestionsCard";
import ResumeStrength from "../../components/resume/ResumeStrength";
import JobDescriptionInput from "../../components/resume/JobDescriptionInput";
import JobMatchCard from "../../components/resume/JobMatchCard";
import MissingSkills from "../../components/resume/MissingSkills";

export default function Resume() {
  const [analysis, setAnalysis] = useState(null);

  const [jobDescription, setJobDescription] = useState("");
  const [jobAnalysis, setJobAnalysis] = useState(null);
  const [loadingJob, setLoadingJob] = useState(false);

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <section className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Resume AI
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Boost your Resume with AI ✨
          </h1>

          <p className="max-w-3xl mt-5 text-lg leading-8 text-gray-400">
            Upload your resume and let SmartHire AI analyze it for ATS
            compatibility, grammar, strengths and personalized improvements.
          </p>

        </section>

        {/* BEFORE UPLOAD */}

        {!analysis && (
          <>
            <ResumeUpload onAnalysis={setAnalysis} />

            <section className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Sparkles className="text-white" size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  ATS Score
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Check how ATS-friendly your resume is.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500">
                  <Sparkles className="text-white" size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  Grammar Review
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Improve grammar, readability and professionalism.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  <Sparkles className="text-white" size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  Resume Strength
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Discover what recruiters will like the most.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500">
                  <Sparkles className="text-white" size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  AI Suggestions
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Receive personalized recommendations to improve your resume.
                </p>
              </div>

            </section>
          </>
        )}

        {/* AFTER UPLOAD */}

        {analysis && (
          <div className="mt-12 space-y-8">

            <ResumeAnalysis
              analysis={analysis}
              onReset={() => {
                setAnalysis(null);
                setJobDescription("");
                setJobAnalysis(null);
              }}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <ATSScoreCard analysis={analysis} />
              <GrammarCard analysis={analysis} />
            </div>

            <ResumeStrength analysis={analysis} />

            <SuggestionsCard analysis={analysis} />

            {/* =========================
                Resume vs Job
            ========================== */}

            <JobDescriptionInput
              jobDescription={jobDescription}
              setJobDescription={setJobDescription}
              loading={loadingJob}
              setLoading={setLoadingJob}
              resumeAnalysis={analysis}
              onAnalysis={setJobAnalysis}
            />

            {jobAnalysis && (
              <div className="grid gap-6 lg:grid-cols-2">

                <JobMatchCard analysis={jobAnalysis} />

                <MissingSkills
                  skills={jobAnalysis.missingSkills}
                />

              </div>
            )}

          </div>
        )}

      </div>
    </AppShell>
  );
}