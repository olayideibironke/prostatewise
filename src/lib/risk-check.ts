/**
 * Data model and scoring logic for the interactive Risk Check.
 *
 * IMPORTANT (medical safety): this is an educational awareness tool. It does
 * NOT diagnose, detect, or rule out any condition. Scoring maps answers to a
 * responsible "next step" category that always points the user toward a
 * licensed clinician. Red-flag symptoms short-circuit to an urgent-care
 * recommendation regardless of other answers.
 */

export type OptionId = string;

export type Question = {
  id: string;
  title: string;
  helper?: string;
  options: {
    id: OptionId;
    label: string;
    /** Points contributed toward the awareness score. */
    points: number;
    /** Marks a serious symptom that should escalate to urgent care. */
    redFlag?: boolean;
  }[];
};

export const questions: Question[] = [
  {
    id: "age",
    title: "What is your age range?",
    helper: "Age is the biggest single factor in prostate cancer risk.",
    options: [
      { id: "under40", label: "Under 40", points: 0 },
      { id: "40to49", label: "40 – 49", points: 1 },
      { id: "50to59", label: "50 – 59", points: 2 },
      { id: "60to69", label: "60 – 69", points: 3 },
      { id: "70plus", label: "70 or older", points: 3 },
    ],
  },
  {
    id: "family",
    title: "Has a close relative had prostate cancer?",
    helper: "A father, brother, or son counts as a close (first-degree) relative.",
    options: [
      { id: "none", label: "No, or not that I know of", points: 0 },
      { id: "one", label: "Yes — one close relative", points: 2 },
      {
        id: "multiple",
        label: "Yes — more than one, or one diagnosed young",
        points: 3,
      },
      {
        id: "breastovarian",
        label: "Family history of breast/ovarian cancer (BRCA)",
        points: 2,
      },
    ],
  },
  {
    id: "ancestry",
    title: "Which best describes your ancestry?",
    helper:
      "Black men and men of African ancestry face higher risk and are often diagnosed younger.",
    options: [
      { id: "african", label: "Black / African ancestry", points: 2 },
      { id: "other", label: "Another background", points: 0 },
      { id: "prefer-not", label: "Prefer not to say", points: 0 },
    ],
  },
  {
    id: "urinary",
    title: "Any ongoing urinary symptoms?",
    helper:
      "For example: weak stream, going more often, urgency, or trouble emptying.",
    options: [
      { id: "no", label: "No noticeable symptoms", points: 0 },
      { id: "mild", label: "Mild or occasional symptoms", points: 1 },
      { id: "persistent", label: "Persistent or worsening symptoms", points: 2 },
    ],
  },
  {
    id: "blood",
    title: "Have you noticed blood in your urine or semen?",
    helper: "This should always be checked by a doctor, whatever the cause.",
    options: [
      { id: "no", label: "No", points: 0 },
      { id: "yes", label: "Yes", points: 0, redFlag: true },
    ],
  },
  {
    id: "pain",
    title: "Any new or ongoing pelvic, lower back, or hip pain?",
    helper: "Especially pain that is unexplained and does not go away.",
    options: [
      { id: "no", label: "No", points: 0 },
      { id: "occasional", label: "Occasional, explainable aches", points: 0 },
      {
        id: "persistent",
        label: "Persistent, unexplained pain",
        points: 0,
        redFlag: true,
      },
    ],
  },
  {
    id: "psa",
    title: "Have you ever had a PSA blood test?",
    helper: "PSA is a common starting point for prostate screening.",
    options: [
      { id: "recent", label: "Yes — within the last 2 years", points: 0 },
      { id: "old", label: "Yes — but more than 2 years ago", points: 1 },
      { id: "never", label: "Never", points: 1 },
      { id: "unsure", label: "I am not sure", points: 1 },
    ],
  },
  {
    id: "lastvisit",
    title: "When did you last see a doctor for a check-up?",
    helper: "Regular check-ups make screening conversations easier.",
    options: [
      { id: "recent", label: "Within the last year", points: 0 },
      { id: "1to3", label: "1 – 3 years ago", points: 1 },
      { id: "3plus", label: "More than 3 years ago", points: 2 },
      { id: "never", label: "I rarely or never go", points: 2 },
    ],
  },
];

export type ResultCategory = {
  key: "routine" | "discuss" | "prioritize" | "urgent";
  label: string;
  tagline: string;
  summary: string;
  steps: string[];
  tone: "positive" | "info" | "caution" | "alert";
};

const RESULTS: Record<ResultCategory["key"], ResultCategory> = {
  routine: {
    key: "routine",
    label: "Routine awareness",
    tagline: "Keep prostate health on your radar",
    summary:
      "Based on your answers, there are no standout risk factors right now. That is good news — but prostate health is still worth revisiting as you age.",
    steps: [
      "Learn the general age to start screening conversations for your risk level.",
      "Mention prostate health at your next routine check-up.",
      "Revisit this check every year or if anything changes.",
      "Encourage the men in your family to check their risk too.",
    ],
    tone: "positive",
  },
  discuss: {
    key: "discuss",
    label: "Talk to a doctor about screening",
    tagline: "It is a good time to start the conversation",
    summary:
      "You have one or more factors that make a screening conversation worthwhile. This does not mean anything is wrong — it means a doctor can help you decide whether and how to screen.",
    steps: [
      "Book a routine appointment and raise prostate screening.",
      "Bring your family history and any symptoms to the visit.",
      "Ask about the benefits and downsides of a PSA test for you.",
      "Use our visit-prep checklist so nothing gets missed.",
    ],
    tone: "info",
  },
  prioritize: {
    key: "prioritize",
    label: "Prioritize a medical appointment",
    tagline: "Do not put this visit off",
    summary:
      "Your answers point to several risk factors or ongoing symptoms. None of this is a diagnosis, but it is a clear signal to see a clinician soon rather than waiting.",
    steps: [
      "Schedule an appointment in the coming days, not months.",
      "Clearly describe your symptoms and how long you have had them.",
      "Share your full family history of prostate and related cancers.",
      "Ask specifically about PSA testing and next steps.",
    ],
    tone: "caution",
  },
  urgent: {
    key: "urgent",
    label: "Seek urgent medical care",
    tagline: "Please get checked promptly",
    summary:
      "You reported a symptom that should always be evaluated by a medical professional promptly — such as blood in the urine or semen, or persistent unexplained pain. This is not a diagnosis, and these symptoms often have non-cancer causes, but they should be checked without delay.",
    steps: [
      "Contact a doctor or urgent care promptly to be evaluated.",
      "Do not wait to see if the symptom goes away on its own.",
      "Describe exactly what you noticed and when it began.",
      "If symptoms are severe, call your local emergency number.",
    ],
    tone: "alert",
  },
};

export type Answers = Record<string, OptionId>;

export type ScoredResult = {
  category: ResultCategory;
  score: number;
  maxScore: number;
  hasRedFlag: boolean;
};

/** Maximum achievable points, used to render the score meter. */
export const MAX_SCORE = questions.reduce(
  (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
  0
);

/**
 * Convert a complete set of answers into a responsible result category.
 * Any red-flag answer forces the "urgent" category regardless of score.
 */
export function scoreAnswers(answers: Answers): ScoredResult {
  let score = 0;
  let hasRedFlag = false;

  for (const question of questions) {
    const chosen = answers[question.id];
    const option = question.options.find((o) => o.id === chosen);
    if (!option) continue;
    score += option.points;
    if (option.redFlag) hasRedFlag = true;
  }

  let key: ResultCategory["key"];
  if (hasRedFlag) {
    key = "urgent";
  } else if (score >= 8) {
    key = "prioritize";
  } else if (score >= 4) {
    key = "discuss";
  } else {
    key = "routine";
  }

  return {
    category: RESULTS[key],
    score,
    maxScore: MAX_SCORE,
    hasRedFlag,
  };
}
