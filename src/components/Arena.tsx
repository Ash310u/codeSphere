import { useState } from "react";
import {
  ArrowRight,
  Braces,
  Check,
  Code2,
  Lightbulb,
  Play,
  Trophy,
} from "lucide-react";
import { problems } from "../data/event";
import type { Problem } from "../data/event";
import Dialog from "./Dialog";
import { Reveal } from "./Effects";

function Challenge({
  problem,
  onClose,
  onSolve,
}: {
  problem: Problem;
  onClose: () => void;
  onSolve: (id: string) => void;
}) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"pass" | "fail" | null>(null);
  const [hint, setHint] = useState(false);
  return (
    <Dialog title={problem.title} onClose={onClose}>
      <div className="problem-badges">
        <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
          {problem.difficulty}
        </span>
        <span className="mono muted small">{problem.topic} / warm-up</span>
      </div>
      <p>{problem.description}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const correct =
            answer.toLowerCase().replace(/[\s\[\]]/g, "") === problem.answer ||
            (problem.id === "two-sum" &&
              answer.replace(/[\s\[\]]/g, "") === "1,0");
          setResult(correct ? "pass" : "fail");
          if (correct) onSolve(problem.id);
        }}
      >
        <label htmlFor="answer">Your answer</label>
        <input
          id="answer"
          required
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setResult(null);
          }}
          placeholder={problem.placeholder}
        />
        <div className="form-actions">
          <button className="button button-primary" type="submit">
            <Play size={15} /> Run answer
          </button>
          <button
            className="text-button"
            type="button"
            onClick={() => setHint(!hint)}
          >
            <Lightbulb size={16} />
            {hint ? "Hide hint" : "Get a hint"}
          </button>
        </div>
      </form>
      {hint && <div className="notice">{problem.hint}</div>}
      {result && (
        <div
          role="status"
          className={`notice ${result === "pass" ? "notice-success" : ""}`}
        >
          {result === "pass" ? (
            <>
              <strong>Accepted. +100 practice points.</strong>
              <br />
              {problem.explanation}
            </>
          ) : (
            "Not quite. Check the input, try the hint, and run your answer again."
          )}
        </div>
      )}
    </Dialog>
  );
}

export default function Arena() {
  const [selected, setSelected] = useState<Problem | null>(null);
  const [topic, setTopic] = useState("All problems");
  const [solved, setSolved] = useState<string[]>([]);
  const visible =
    topic === "All problems"
      ? problems
      : problems.filter((p) => p.difficulty === topic);
  return (
    <section className="section arena-section" id="arena">
      <Reveal>
        <div className="section-top">
          <div>
            <p className="eyebrow">
              <span className="cyan-dot" /> 03 / THE CODING ARENA
            </p>
            <h2>
              Your next <span className="serif">aha!</span> moment
              <br />
              <span className="muted">starts here.</span>
            </h2>
          </div>
          <p className="section-description">
            Find the pattern. Trust your logic.
            <br />A little practice goes a long way.
          </p>
        </div>
        <div className="arena-layout">
          <div className="problem-panel">
            <div
              className="arena-tabs"
              role="group"
              aria-label="Filter by difficulty"
            >
              {["All problems", "Easy", "Medium"].map((t) => (
                <button
                  key={t}
                  className={topic === t ? "active" : ""}
                  aria-pressed={topic === t}
                  onClick={() => setTopic(t)}
                >
                  {t}
                </button>
              ))}
              <span className="mono small muted">WARM-UP MODE</span>
            </div>
            {visible.map((p, i) => (
              <button
                className="problem-row"
                key={p.id}
                onClick={() => setSelected(p)}
              >
                <span className="problem-number mono">0{i + 1}</span>
                <span className="problem-icon">
                  {solved.includes(p.id) ? (
                    <Check size={20} />
                  ) : (
                    <Braces size={20} />
                  )}
                </span>
                <span className="problem-name">
                  {p.title}
                  <small>{p.topic}</small>
                </span>
                <span className={`difficulty ${p.difficulty.toLowerCase()}`}>
                  {p.difficulty}
                </span>
                <ArrowRight size={17} />
              </button>
            ))}
            <div className="arena-foot">
              <Code2 size={15} />
              <span>Three quick challenges. One sharper you.</span>
              <span>{solved.length}/3 solved</span>
            </div>
          </div>
          <div className="score-panel">
            <Trophy size={24} />
            <p className="eyebrow">YOUR PRACTICE SCORE</p>
            <div className="score-number">
              {solved.length * 100}
              <span>pts</span>
            </div>
            <div className="score-meter">
              <span style={{ width: `${(solved.length / 3) * 100}%` }} />
            </div>
            <p>
              {solved.length === 3
                ? "All warm-ups solved. You’re ready for the next challenge."
                : "Every solve is a step forward. Open a challenge to get started."}
            </p>
            <span className="mono small muted">
              THIS SESSION / PERSONAL BEST
            </span>
          </div>
        </div>
      </Reveal>
      {selected && (
        <Challenge
          key={selected.id}
          problem={selected}
          onClose={() => setSelected(null)}
          onSolve={(id) => setSolved((s) => (s.includes(id) ? s : [...s, id]))}
        />
      )}
    </section>
  );
}
