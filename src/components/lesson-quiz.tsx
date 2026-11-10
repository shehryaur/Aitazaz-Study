"use client";

import { useId, useState } from "react";
import type { Lesson, Mcq } from "@/content/trail";
import { playQuizSpark } from "@/lib/sound";
import { cn } from "cn";

type Check = {
  picks: (number | null)[];
  note: string;
};

function choiceResult(question: Mcq, pick: number | null) {
  if (pick == null || question.choices[pick] == null) {
    return { tone: "wait" as const, text: "Please select an answer to check your understanding." };
  }
  const chosen = question.choices[pick];
  const right = question.choices[question.answer] ?? "";
  const explanation = question.explanation ? ` ${question.explanation}` : "";

  if (pick === question.answer) {
    return { 
      tone: "right" as const, 
      text: `✓ Correct! “${chosen}”.${explanation}` 
    };
  }
  return {
    tone: "miss" as const,
    text: `✕ Not quite. You selected “${chosen}”. The correct concept: “${right}”.${explanation}`,
  };
}

function writtenResult(prompt: string, note: string) {
  const text = note.trim();
  if (!text) {
    return {
      empty: true,
      shown: "",
      reminder: "An empty box is not a finished reflection. Write 1–3 thoughtful sentences to lock in the lesson.",
    };
  }
  const shown = text.length > 480 ? `${text.slice(0, 480).trimEnd()}…` : text;
  return { empty: false, shown, reminder: prompt };
}

export function LessonQuiz({ quiz }: { quiz: Lesson["quiz"] }) {
  const baseId = useId();
  const [picked, setPicked] = useState<(number | null)[]>(() => quiz.mcq.map(() => null));
  const [note, setNote] = useState("");
  const [check, setCheck] = useState<Check | null>(null);

  const stale =
    check != null &&
    (note !== check.note || picked.some((value, index) => value !== check.picks[index]));
  const checked = check != null && !stale;
  const written = check ? writtenResult(quiz.open, check.note) : null;

  const correctCount = checked
    ? quiz.mcq.reduce(
        (count, q, idx) => (check.picks[idx] === q.answer ? count + 1 : count),
        0,
      )
    : 0;
  const allCorrect = checked && correctCount === quiz.mcq.length;

  function choose(questionIndex: number, choiceIndex: number) {
    setPicked((current) => current.map((value, index) => (index === questionIndex ? choiceIndex : value)));
  }

  function seeHowIDid() {
    setCheck({ picks: [...picked], note });
    playQuizSpark();
  }

  return (
    <section className="relative z-10 min-w-0 space-y-6 overflow-x-clip rounded-[1.6rem] border border-border bg-card/90 p-4 shadow-sm sm:p-6">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div>
          <p className="text-xs font-bold tracking-wider text-[#a56b2b] uppercase">Interactive Knowledge Check</p>
          <h2 className="text-2xl font-heading">Mastery Test ({quiz.mcq.length} Questions)</h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
          ~5 mins
        </span>
      </div>

      {quiz.mcq.map((question, questionIndex) => {
        const choice = picked[questionIndex];
        const result = check ? choiceResult(question, check.picks[questionIndex] ?? null) : null;
        const promptId = `${baseId}-q-${questionIndex}`;
        return (
          <div key={question.prompt} className="space-y-3 rounded-2xl bg-background/50 p-3 sm:p-4 border border-border/50">
            <div className="flex items-start gap-2">
              <span className="font-mono text-xs font-bold bg-[#e4c07a]/40 text-[#8a5a32] px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                Q{questionIndex + 1}
              </span>
              <p id={promptId} className="text-base font-semibold text-foreground">
                {question.prompt}
              </p>
            </div>
            
            <div role="group" aria-labelledby={promptId} className="flex flex-col gap-2 pt-1">
              {question.choices.map((label, choiceIndex) => {
                const selected = choice === choiceIndex;
                const isCorrect = choiceIndex === question.answer;

                let buttonStyle = "border-[#e4d0b0] bg-[#fffdf8] text-[#3a2416] hover:bg-[#fff6e8]";
                let badge = null;

                if (checked) {
                  if (isCorrect) {
                    buttonStyle = "border-[#4e8c3a] bg-[#f0f8ec] text-[#244618]";
                    badge = <span className="ml-auto shrink-0 text-xs font-bold text-[#356b24]">✓ Correct Answer</span>;
                  } else if (selected) {
                    buttonStyle = "border-[#d96748] bg-[#fdf2ee] text-[#6d2714]";
                    badge = <span className="ml-auto shrink-0 text-xs font-bold text-[#b54628]">✕ Selected</span>;
                  } else {
                    buttonStyle = "border-[#e4d0b0]/50 bg-[#fffdf8]/50 text-[#3a2416]/50";
                  }
                } else if (selected) {
                  buttonStyle = "border-[#1e293b] bg-[#1e293b] text-white shadow-xs";
                }

                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(questionIndex, choiceIndex)}
                    className={cn(
                      "pointer-events-auto relative z-10 flex min-h-11 w-full cursor-pointer items-center justify-between rounded-xl border-2 px-4 py-2.5 text-left text-sm sm:text-base leading-snug font-medium break-words whitespace-normal transition",
                      "focus-visible:ring-2 focus-visible:ring-[#e2a33a] focus-visible:ring-offset-2 focus-visible:outline-none",
                      buttonStyle,
                    )}
                  >
                    <span>{label}</span>
                    {badge}
                  </button>
                );
              })}
            </div>

            {result ? (
              <div
                role="status"
                className={cn(
                  "rounded-xl border p-3 text-sm leading-relaxed break-words",
                  result.tone === "right" && "border-[#b7d4a8] bg-[#f3faec] text-[#24331c]",
                  result.tone === "miss" && "border-[#efc7b0] bg-[#fff4ec] text-[#3a2416]",
                  result.tone === "wait" && "border-[#e4d0b0] bg-[#fff8ee] text-[#3a2416]",
                )}
              >
                {result.text}
              </div>
            ) : null}
          </div>
        );
      })}

      {/* Reflection Open Prompt */}
      <div className="space-y-2 pt-2 border-t border-border/60">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">
            Synthesis
          </span>
          <label htmlFor={`${baseId}-note`} className="block text-base font-semibold">
            {quiz.open}
          </label>
        </div>
        <textarea
          id={`${baseId}-note`}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={3}
          placeholder="Synthesize in your own words (e.g., using the Feynman technique)..."
          className="w-full max-w-full rounded-2xl border-2 border-[#e4d0b0] bg-[#fffdf8] px-4 py-3 text-base leading-6 text-[#3a2416] outline-none focus-visible:ring-2 focus-visible:ring-[#e2a33a] focus-visible:ring-offset-2"
        />
        {written ? (
          <div role="status" className="rounded-2xl border border-[#e4d0b0] bg-[#fff8ee] p-4 text-sm sm:text-base leading-relaxed text-[#3a2416]">
            {written.empty ? (
              <p className="text-amber-800 font-medium">{written.reminder}</p>
            ) : (
              <div className="space-y-1.5">
                <p className="font-semibold text-xs tracking-wider uppercase text-[#8a5a32]">Your synthesis recorded:</p>
                <p className="font-medium italic break-words whitespace-pre-wrap bg-white/60 p-2.5 rounded-xl border border-[#e4d0b0]/50">
                  “{written.shown}”
                </p>
                <p className="text-xs text-muted-foreground pt-1">
                  Active recall locked! Putting concepts into your own words creates lasting synaptic connections.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {checked ? (
        <div
          role="status"
          className={cn(
            "rounded-2xl border p-4 transition",
            allCorrect ? "border-[#b7d4a8] bg-[#f3faec] text-[#24331c]" : "border-[#e4c07a] bg-[#fff8ee] text-[#5c3a1e]",
          )}
        >
          {allCorrect ? (
            <div>
              <p className="font-heading text-lg font-bold">🎉 Perfect Score: {quiz.mcq.length}/{quiz.mcq.length} Correct!</p>
              <p className="mt-1 text-sm text-[#314a24]">
                Outstanding! You have mastered the core mental models for this session. Mark the module finished below!
              </p>
            </div>
          ) : (
            <div>
              <p className="font-heading text-lg font-bold">
                {correctCount} of {quiz.mcq.length} questions correct
              </p>
              <p className="mt-1 text-sm text-[#7a5430]">
                Review the concept notes above, update your selections, and check again to reinforce your learning.
              </p>
            </div>
          )}
        </div>
      ) : null}

      {stale ? (
        <p className="text-sm leading-6 text-[#6b4a2e]">You modified your answers. Click Check Answers when ready.</p>
      ) : null}

      <button
        type="button"
        onClick={seeHowIDid}
        className="pointer-events-auto relative z-10 h-12 w-full cursor-pointer rounded-full bg-primary px-6 text-base font-semibold whitespace-normal text-primary-foreground shadow-sm hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#e2a33a] focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
      >
        {stale ? "Re-evaluate Answers" : "Check Test Answers"}
      </button>
    </section>
  );
}
