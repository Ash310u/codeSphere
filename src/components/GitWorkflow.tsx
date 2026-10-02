import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  FileCode2,
  GitCommitHorizontal,
  Github,
  RotateCcw,
  Terminal,
} from "lucide-react";
import { Reveal } from "./Effects";

const stages = [
  "Working directory",
  "Staging area",
  "Local repository",
  "GitHub",
];
const commands = [
  "git add .",
  'git commit -m "hello world"',
  "git push origin main",
];
const outputs = [
  "Your next idea starts here. Make a change, then stage it.",
  "Changes staged. Ready to make it part of your history.",
  "Commit a83f92d created. Your work now has a checkpoint.",
  "Pushed to origin/main. Your idea is out in the world.",
];

export default function GitWorkflow() {
  const [step, setStep] = useState(0);
  const reduced = useReducedMotion();
  return (
    <section className="section workflow-section" id="workflow">
      <Reveal>
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / LEARN BY DOING</p>
            <h2>
              Small commands.
              <br />
              <span className="muted">Big possibilities.</span>
            </h2>
          </div>
          <p className="section-description">
            Don’t just read about Git. Try it.
            <br />
            Take an idea from your laptop to the world.
          </p>
        </div>
        <div className="workflow-panel">
          <div className="panel-top">
            <span>
              <Terminal size={15} /> interactive-playground
            </span>
            <span className="mono small muted">NO INSTALL REQUIRED</span>
          </div>
          <div className="workflow-stages">
            {stages.map((stage, i) => (
              <div
                className={`workflow-stage ${step === i ? "current" : ""} ${step > i ? "complete" : ""}`}
                key={stage}
              >
                <div className="stage-box">
                  {step > i ? (
                    <Check size={25} />
                  ) : i === 3 ? (
                    <Github size={27} />
                  ) : i === 2 ? (
                    <GitCommitHorizontal size={29} />
                  ) : (
                    <FileCode2 size={26} />
                  )}
                  <AnimatePresence>
                    {step === i && (
                      <motion.span
                        className="stage-file"
                        layoutId="file"
                        transition={{ duration: reduced ? 0 : 0.45 }}
                      >
                        hello-world.ts
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <span>{stage}</span>
                {i < 3 && <ArrowRight className="stage-arrow" size={19} />}
              </div>
            ))}
          </div>
          <div className="workflow-terminal">
            <p>
              <span className="terminal-dollar">$</span>{" "}
              {step === 0 ? (
                <span className="muted">// ready when you are</span>
              ) : (
                commands[step - 1]
              )}
              <span className="cursor-block" />
            </p>
            <p className="terminal-output" aria-live="polite">
              {outputs[step]}
            </p>
          </div>
          <div className="workflow-controls">
            {step < 3 ? (
              <button
                className="button button-primary"
                onClick={() => setStep((s) => s + 1)}
              >
                <span className="mono">{commands[step]}</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <span className="success-message">
                <Check size={17} /> First workflow complete. Nicely done.
              </span>
            )}
            <button
              className="text-button"
              onClick={() => setStep(0)}
              disabled={step === 0}
            >
              <RotateCcw size={14} /> Start over
            </button>
            <span className="step-count mono">
              0{step + 1} <span>/ 04</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
