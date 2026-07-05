"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  questions,
  scoreAnswers,
  type Answers,
  type ScoredResult,
} from "@/lib/risk-check";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import {
  ArrowRightIcon,
  CheckIcon,
  AlertIcon,
  ShieldCheckIcon,
} from "@/components/ui/Icon";

type Stage = "intro" | "questions" | "result";

const resultToneStyles = {
  positive: {
    band: "from-sky-600 to-medical-600",
    chip: "bg-sky-100 text-sky-800",
    Icon: CheckIcon,
  },
  info: {
    band: "from-medical-600 to-navy-700",
    chip: "bg-medical-100 text-medical-800",
    Icon: ShieldCheckIcon,
  },
  caution: {
    band: "from-gold-500 to-gold-700",
    chip: "bg-gold-100 text-gold-800",
    Icon: AlertIcon,
  },
  alert: {
    band: "from-navy-800 to-navy-950",
    chip: "bg-gold-100 text-gold-800",
    Icon: AlertIcon,
  },
} as const;

export function RiskCheck() {
  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<ScoredResult | null>(null);

  const total = questions.length;
  const question = questions[current];
  const progress = Math.round((current / total) * 100);
  const allAnswered = useMemo(
    () => questions.every((q) => answers[q.id]),
    [answers]
  );

  const start = () => {
    setStage("questions");
    setCurrent(0);
  };

  const choose = (optionId: string) => {
    const updated = { ...answers, [question.id]: optionId };
    setAnswers(updated);

    // Advance after a brief beat so the selection is visible.
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setResult(scoreAnswers(updated));
      setStage("result");
    }
  };

  const back = () => {
    if (current > 0) setCurrent((c) => c - 1);
    else setStage("intro");
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setResult(null);
    setStage("intro");
  };

  /* ---------------- Intro ---------------- */
  if (stage === "intro") {
    return (
      <Card className="mx-auto max-w-2xl">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-medical-50 text-medical-600">
          <ShieldCheckIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-navy-900 sm:text-3xl">
          Understand your risk in about 5 minutes
        </h2>
        <p className="mt-3 leading-relaxed text-navy-600">
          Answer {total} short, private questions about your age, history, and
          any symptoms. You will get a responsible, easy-to-understand next step
          — never a diagnosis. Nothing you enter is stored or sent anywhere.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Private — your answers stay in your browser",
            "Quick — about five minutes, no sign-up",
            "Actionable — a clear next step you can take",
          ].map((point) => (
            <li key={point} className="flex items-center gap-3 text-navy-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <CheckIcon className="h-4 w-4" />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button size="lg" onClick={start}>
            Start the risk check
            <ArrowRightIcon />
          </Button>
        </div>
        <Disclaimer className="mt-8" />
      </Card>
    );
  }

  /* ---------------- Questions ---------------- */
  if (stage === "questions") {
    const selected = answers[question.id];
    return (
      <Card className="mx-auto max-w-2xl">
        {/* Progress */}
        <div className="flex items-center justify-between text-sm font-medium text-navy-500">
          <span>
            Question {current + 1} of {total}
          </span>
          <span>{progress}% complete</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-medical-600 transition-all duration-500"
            style={{ width: `${Math.max(progress, 6)}%` }}
            role="progressbar"
            aria-valuenow={current + 1}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label="Risk check progress"
          />
        </div>

        <fieldset className="mt-7">
          <legend className="text-xl font-semibold text-navy-900 sm:text-2xl">
            {question.title}
          </legend>
          {question.helper && (
            <p className="mt-2 text-sm leading-relaxed text-navy-500">
              {question.helper}
            </p>
          )}

          <div className="mt-6 space-y-3">
            {question.options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => choose(option.id)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all",
                    isSelected
                      ? "border-medical-600 bg-medical-50"
                      : "border-navy-100 bg-white hover:border-medical-300 hover:bg-navy-50"
                  )}
                >
                  <span className="font-medium text-navy-800">
                    {option.label}
                  </span>
                  <span
                    className={cn(
                      "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                      isSelected
                        ? "border-medical-600 bg-medical-600 text-white"
                        : "border-navy-300"
                    )}
                  >
                    {isSelected && <CheckIcon className="h-4 w-4" />}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="ghost" onClick={back}>
            Back
          </Button>
          <p className="text-xs text-navy-400">
            Select an option to continue
          </p>
        </div>
      </Card>
    );
  }

  /* ---------------- Result ---------------- */
  if (stage === "result" && result) {
    const { category, score, maxScore, hasRedFlag } = result;
    const styles = resultToneStyles[category.tone];
    const ResultIcon = styles.Icon;
    const meter = Math.round((score / maxScore) * 100);

    return (
      <div className="mx-auto max-w-2xl">
        <Card className="overflow-hidden p-0">
          <div
            className={cn(
              "bg-gradient-to-br px-7 py-8 text-white sm:px-9",
              styles.band
            )}
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80">
              <ResultIcon className="h-5 w-5" />
              Your result
            </div>
            <h2 className="mt-3 text-3xl font-bold">{category.label}</h2>
            <p className="mt-1 text-lg text-white/90">{category.tagline}</p>
          </div>

          <div className="p-7 sm:p-9">
            {!hasRedFlag && (
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm font-medium text-navy-500">
                  <span>Awareness score</span>
                  <span>
                    {score} of {maxScore}
                  </span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-navy-100">
                  <div
                    className="h-full rounded-full bg-medical-600 transition-all duration-700"
                    style={{ width: `${Math.max(meter, 4)}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-navy-400">
                  A higher score means more factors worth discussing with a
                  doctor — it is not a measure of whether cancer is present.
                </p>
              </div>
            )}

            <p className="leading-relaxed text-navy-700">{category.summary}</p>

            <h3 className="mt-7 text-lg font-semibold text-navy-900">
              Suggested next steps
            </h3>
            <ul className="mt-4 space-y-3">
              {category.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-50 text-medical-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/psa-and-visit-prep" className="flex-1">
                Prepare for a doctor visit
              </Button>
              <Button
                href="/risk-and-screening"
                variant="secondary"
                className="flex-1"
              >
                Read the screening guide
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <button
                type="button"
                onClick={restart}
                className="font-semibold text-medical-700 hover:text-medical-800"
              >
                Retake the check
              </button>
              <Link
                href="/for-families"
                className="font-semibold text-medical-700 hover:text-medical-800"
              >
                Share with someone you love
              </Link>
            </div>

            <Disclaimer className="mt-8">
              <span className="font-semibold text-navy-900">
                This is not a diagnosis.
              </span>{" "}
              This result is an educational suggestion based only on your
              answers. It cannot detect, confirm, or rule out prostate cancer or
              any condition. Please discuss your health with a licensed
              clinician, who can give advice specific to you.
            </Disclaimer>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
