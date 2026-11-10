export type PartId = "start" | "how" | "push";

export type Source = {
  title: string;
  url: string;
  why: string;
  access: string;
};

export type Mcq = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation?: string;
};

export type LifeLesson = {
  title: string;
  concept: string;
  paragraphs: string[];
  takeaway: string;
};

export type Lesson = {
  slug: string;
  title: string;
  part: PartId;
  minutes: number;
  coding: boolean;
  fresh?: boolean;
  summary: string;
  paragraphs: string[];
  remember: string;
  lifeLesson: LifeLesson;
  watch: string;
  practice: string[];
  video: { id: string; title: string };
  quiz: { mcq: Mcq[]; open: string };
  source: Source;
  deeper?: Source;
};

export type DayPlan = {
  id: number;
  title: string;
  blurb: string;
  optional?: boolean;
  tag?: "harder" | "explain";
  slugs: string[];
};

export const parts: { id: PartId; title: string; kicker: string; blurb: string }[] = [
  { id: "start", title: "Start", kicker: "Days 1–6", blurb: "Foundations: understand how intelligence and robots make predictions without being fooled." },
  { id: "how", title: "How", kicker: "Days 7–10", blurb: "Mechanics: context windows, neural weights, sensors, and reasoning tokens." },
  { id: "push", title: "Push", kicker: "Days 11–20", blurb: "Engineering: briefs, verification, agents, robotics, physical computing, and explaining your work." },
];

const free = "Free.";

export const lessons: Lesson[] = [
  {
    slug: "what-is-ai",
    title: "What people mean by AI",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "AI is software that learned from patterns in data to make a statistical guess. There is no conscious person inside the machine.",
    paragraphs: [
      "You are starting from zero. Nothing earlier is assumed.",
      "At its core, Artificial Intelligence is software that adjusts its internal mathematical dials using examples, and then calculates a likely prediction for new inputs. A spam filter, a face detector on a camera, a robotic vacuum finding a wall, and a large language model answering questions all share this exact foundation.",
      "A prediction can be remarkably helpful, but it remains a mathematical guess. It does not possess common sense, it does not experience the physical world like you do, and it cannot feel when it is completely wrong.",
      "In modern 2025/2026 systems, models have expanded from predicting simple text to reasoning across images, voice, and robotics sensor streams. Yet the golden rule never changes: the machine generates possibilities; you provide the discernment.",
    ],
    remember: "A statistical prediction is not the same as conscious understanding.",
    lifeLesson: {
      title: "The Feynman Technique (Learning by Explaining Simply)",
      concept: "True understanding is the ability to explain complex ideas without jargon.",
      paragraphs: [
        "Nobel physicist Richard Feynman noticed that many students and engineers used sophisticated technical jargon as a mask to hide the fact that they did not truly understand the underlying mechanism.",
        "To test if you truly understand a concept: try explaining it to a curious 10-year-old child using simple everyday words and clear analogies. The moment you catch yourself using a buzzword you cannot define on the spot, you have found a hole in your mental model.",
        "When studying AI, robotics, or engineering, don't memorize high-level slogans. Strip the concept down to plain mechanical verbs: what goes in, what moves or calculates, and what comes out.",
      ],
      takeaway: "If you cannot explain a concept in simple, plain language, you do not truly understand it yet. Strip away jargon to find the truth.",
    },
    watch: "Watch the video (approx. 12 minutes). Notice how every AI application maps back to inputs, training patterns, and outputs. Then do the 8-minute build lab.",
    practice: [
      "Select one AI or automated tool you interacted with recently: a navigation map, a camera filter, an email sorter, a chatbot, or a robotic appliance.",
      "In your study log, write four concise lines: 1) What sensor data or text did it receive? 2) What output did it produce? 3) Which part was a statistical guess? 4) What physical check would you perform before relying on it?",
      "Apply the Feynman Technique: read your four lines aloud to yourself. If you used buzzwords or anthropomorphic phrases ('the robot felt' or 'the AI thought'), rewrite them to describe software mathematics.",
      "Keep this note. Tomorrow you will untangle the three most confused terms in technology.",
    ],
    video: { id: "a0_lo_GDcFw", title: "What Is Artificial Intelligence? Crash Course AI #1" },
    quiz: {
      mcq: [
        {
          prompt: "When an AI model generates an answer or classifies a sensor reading, what is it fundamentally executing?",
          choices: [
            "Retrieving a pre-verified human truth stored in a permanent database",
            "Calculating a probable output based on patterns learned from training data",
            "Executing a handwritten list of fixed IF-THEN rules for this exact scenario",
          ],
          answer: 1,
          explanation: "AI models do not have conscious knowledge; they calculate the highest probability response based on pattern weights learned during training.",
        },
        {
          prompt: "Why is a confident-sounding answer from a machine not proof of correctness?",
          choices: [
            "Because models generate statistically likely tokens, which can sound completely fluent while being factually wrong",
            "Because machines are intentionally programmed to mislead users when unsure",
            "Because only open-source models make factual errors, while proprietary models are guaranteed",
          ],
          answer: 0,
          explanation: "Fluency is a measure of grammatical coherence, not factual truth. A model can construct a grammatically flawless hallucination.",
        },
        {
          prompt: "According to the Feynman Technique, how do you verify your own understanding of an engineering concept?",
          choices: [
            "By memorizing the official definition word-for-word from a textbook",
            "By explaining the mechanism in simple, everyday language without relying on jargon",
            "By agreeing with whatever explanation an AI model generates",
          ],
          answer: 1,
          explanation: "Simplifying complex mechanics without losing accuracy forces your brain to identify and fix gaps in comprehension.",
        },
      ],
      open: "Pick one automated tool you use. In 2–3 plain sentences, state what it is guessing and what outside verification you would require before trusting it in a high-stakes situation.",
    },
    source: { title: "Elements of AI", url: "https://www.elementsofai.com/", why: "The premier beginner course explaining core concepts without overwhelming math.", access: free },
  },
  {
    slug: "three-ideas",
    title: "Three words, untangled: AI, ML, and Deep Learning",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "AI is the broad ambition. Machine Learning is the method of learning from data. Deep Learning is the modern engine using layered neural networks.",
    paragraphs: [
      "Headlines use the acronym 'AI' for everything, but engineers distinguish between three concentric circles.",
      "Artificial Intelligence (AI) is the broad umbrella: any system or machine capable of performing a task that typically requires human cognition. A chess algorithm from 1990 is AI, even if it is just thousands of hardcoded search rules.",
      "Machine Learning (ML) is the specific subset and method where software learns patterns directly from data rather than following human-written IF-THEN instructions. You show the computer 10,000 photos of motors, and it discovers the mathematical features that distinguish healthy motors from damaged ones.",
      "Deep Learning (DL) is a specialized, powerful subset of Machine Learning that uses multi-layered artificial neural networks. Deep learning is what powers modern LLMs, autonomous driving, humanoid robot balance, and speech recognition.",
    ],
    remember: "AI is the goal, Machine Learning is the method, and Deep Learning is the deep neural architecture.",
    lifeLesson: {
      title: "First-Principles Thinking (Reasoning from the Ground Up)",
      concept: "Do not reason by analogy; break problems down to their fundamental physical truths.",
      paragraphs: [
        "Most people reason by analogy: they do things because 'that is how it has always been done' or because 'everyone else is doing it.' This leads to copycat thinking and expensive mistakes.",
        "First-principles thinking (championed by Aristotle, Feynman, and Elon Musk) demands that you boil a problem down to its most basic, undeniable physical truths, and then reason upwards from there.",
        "In robotics and AI, when someone says 'building an autonomous robot is impossible for a beginner,' a first-principles thinker asks: What are the fundamental components? A microcontroller, sensors to read distance, actuators to turn wheels, and control logic. None of those are magic. Each is solvable.",
      ],
      takeaway: "Break complex challenges into basic building blocks. Solve the components from first principles rather than copying the crowd.",
    },
    watch: "Watch this concise 5-minute breakdown. Observe how the concentric circles fit together. Then proceed to your first-principles practice.",
    practice: [
      "On paper or in your study log, sketch three concentric circles: an outer circle (AI), a middle circle (Machine Learning), and an inner core (Deep Learning).",
      "Write one clear sentence inside each circle explaining its role in your own words.",
      "Take two tools you know (for example: an automatic thermostat that clicks on at 68°F vs. a facial recognition phone unlock). Identify which circle each belongs to and why.",
      "Apply first-principles thinking to a robotics problem: write down the 3 basic physical elements a robot needs to navigate a room without hitting a chair (Sensing, Computing, Actuating).",
    ],
    video: { id: "2ePf9rue1Ao", title: "What is Artificial Intelligence? In 5 minutes." },
    quiz: {
      mcq: [
        {
          prompt: "How does Machine Learning differ from traditional rule-based programming?",
          choices: [
            "In traditional code, humans write the explicit rules; in ML, the algorithm infers rules and patterns from data",
            "Machine Learning systems are completely free of bugs and never make errors once compiled",
            "Traditional programming requires internet access, whereas ML never needs external data",
          ],
          answer: 0,
          explanation: "Traditional software uses explicit IF/THEN rules written by engineers. Machine Learning infers the statistical relationships directly from training datasets.",
        },
        {
          prompt: "Where does Deep Learning sit in relation to AI and Machine Learning?",
          choices: [
            "Deep Learning is a separate discipline that has completely replaced AI and ML",
            "Deep Learning is a specialized branch of Machine Learning that utilizes multi-layered neural networks",
            "Deep Learning only refers to robotics hardware, not software algorithms",
          ],
          answer: 1,
          explanation: "Deep Learning is the subset of Machine Learning characterized by deep architectures (many stacked layers of artificial neurons).",
        },
        {
          prompt: "Why is First-Principles Thinking critical for robotics and technical learning?",
          choices: [
            "It allows you to bypass all safety precautions and build hardware instantly",
            "It prevents you from blindly copying surface analogies by decomposing problems into verifiable physical fundamentals",
            "It forces you to agree with established industry consensus without question",
          ],
          answer: 1,
          explanation: "First-principles thinking strips away false assumptions, enabling you to build real understanding and novel engineering solutions.",
        },
      ],
      open: "Using first principles, explain how a robotic vacuum cleaner works: what are its basic inputs (sensors), processing (logic/patterns), and outputs (motors)?",
    },
    source: { title: "AI for Everyone by Andrew Ng", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", why: "Clear, authoritative breakdown of technical terminology for builders.", access: "Free to start." },
  },
  {
    slug: "already-there",
    title: "Where you already meet it: Sensors, Predictions & Daily Automation",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "Long before chatbots existed, quiet statistical models were predicting routes, filtering noise, and calibrating sensors in everyday machines.",
    paragraphs: [
      "The massive public excitement around AI started with chat windows, but the real power of machine learning has been running quietly in the background for over a decade.",
      "When your phone's camera balances lighting in a dark room, a neural network is predicting photon values. When a GPS reroutes you around traffic, a graph model is predicting congestion. When a keyboard suggests your next word, an n-gram or transformer model is predicting the most likely syllable.",
      "In robotics, sensors (cameras, ultrasonic rangefinders, gyroscopes) are constantly flooded with noisy, imperfect physical measurements. Machine learning filters that raw sensor noise into meaningful state estimates: 'the obstacle is 1.2 meters ahead, moving at 0.5 m/s.'",
      "Understanding that modern AI is an evolution of quiet predictive automation helps demystify it. It isn't an alien intelligence; it is an optimization engine.",
    ],
    remember: "If a system anticipates your action or cleans a sensor reading, it is running a prediction model.",
    lifeLesson: {
      title: "Active Recall over Passive Recognition",
      concept: "Re-reading feels like learning, but only retrieval creates durable memory.",
      paragraphs: [
        "Cognitive psychology shows that the single most common learning trap is passive re-reading. Highlighting a book or watching an educational video feels effortless because your brain recognizes the information as familiar. But familiarity is an illusion of mastery.",
        "Durable learning requires 'retrieval practice' (Active Recall). When you close the book, look away from the screen, and force your brain to pull the concept out of memory, your brain strengthens the synaptic pathways associated with that knowledge.",
        "In engineering, testing your code is what reveals bugs; in learning, quizzing yourself is what reveals faulty assumptions.",
      ],
      takeaway: "Close the notes and force your brain to retrieve the concept. Real learning happens during the effort of recall, not during passive reading.",
    },
    watch: "Watch the first 8 minutes of this introduction. Focus on how predictive models operate across different media. Then do the active recall exercise.",
    practice: [
      "Perform an 'AI Audit' of your morning: list 3 predictive systems you interacted with (e.g. keyboard autocomplete, recommendation feed, navigation map, auto-exposure camera).",
      "For one of those systems, write down: 1) What physical sensor or data input did it use? 2) What was the prediction? 3) How could an unexpected real-world change make that prediction fail?",
      "Active Recall Drill: Close this page. On a blank sheet of paper, write from memory the distinction between AI, Machine Learning, and Deep Learning without looking back.",
      "Check your recall against yesterday's notes. Notice where your memory hesitated; that hesitation is where genuine learning occurs.",
    ],
    video: { id: "G2fqAlgmoPo", title: "Introduction to Generative AI" },
    quiz: {
      mcq: [
        {
          prompt: "How does a smartphone's camera use machine learning when taking a night photograph?",
          choices: [
            "It calls a human photographer at cloud headquarters to manually edit the snapshot",
            "It runs a trained neural model to predict and denoise pixel values from low-light sensor data",
            "It replaces the entire camera lens with a simulated digital rendering",
          ],
          answer: 1,
          explanation: "Computational photography uses neural networks trained on millions of images to predict true color and remove sensor noise in low light.",
        },
        {
          prompt: "Why does passive reading often fool learners into thinking they have mastered technical material?",
          choices: [
            "Because human brains automatically memorize text upon a single visual glance",
            "Because visual recognition feels smooth and effortless, disguising the lack of true retrieval capability",
            "Because technical textbooks are intentionally written to induce hypnosis",
          ],
          answer: 1,
          explanation: "Cognitive psychologists call this the 'illusion of competence'—recognizing an idea is vastly easier than actively explaining or reproducing it.",
        },
        {
          prompt: "In robotics, what is the primary role of predictive models when handling sensor streams?",
          choices: [
            "Filtering noisy physical sensor signals into reliable environmental state estimates",
            "Disabling all physical motors to prevent power consumption",
            "Generating conversational dialogue to entertain the user while driving",
          ],
          answer: 0,
          explanation: "Real-world sensors produce noise and drift; predictive algorithms (like Kalman filters and neural state estimators) infer the true physical state.",
        },
      ],
      open: "Identify one predictive tool you rely on daily. Explain what sensor or input it reads, what prediction it makes, and what active recall question you would ask yourself to test your grasp of it.",
    },
    source: { title: "Google AI Essentials", url: "https://grow.google/ai-essentials/", why: "Practical everyday implementations of AI across modern tools.", access: "Free to start." },
  },
  {
    slug: "limits",
    title: "Fluent is not the same as true: Hallucinations & The Skeptic's Calibration",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "Large language models optimize for plausible language flow, not truth. Confidence in tone is a stylistic byproduct, not a factual verification.",
    paragraphs: [
      "Yesterday you saw how models predict. Today you confront the biggest trap in modern AI: hallucination.",
      "A language model is trained to predict the most probable sequence of tokens given the prior text. Because human academic, medical, and technical papers are written in a confident, authoritative tone, the model learns to reproduce that authoritative tone whenever it generates text.",
      "When the model lacks knowledge about an obscure fact, it does not naturally pause, scratch its head, or say 'I don't know' unless specifically tuned to do so. Instead, it generates words that mathematically sound like a plausible answer. It can invent nonexistent scientific citations, fictitious legal precedents, or false robotic pinouts with absolute poise.",
      "In modern 2025/2026 systems, newer reasoning models (like OpenAI o1/o3 or Claude 3.7 Thinking) reduce hallucinations by generating internal verification chains before speaking. However, the fundamental rule stands: fluency is zero guarantee of truth.",
    ],
    remember: "Smooth, confident language is a stylistic pattern, never a factual guarantee.",
    lifeLesson: {
      title: "The Skeptic's Calibration (Truth vs. Fluency)",
      concept: "In life and engineering, persuasive confidence is often uncorrelated with factual accuracy.",
      paragraphs: [
        "In human society, charismatic people with deep voices and unshakeable confidence often persuade audiences, regardless of whether their claims are true. We are biologically wired to trust confidence.",
        "Master engineers develop 'epistemic calibration.' They train themselves to decouple tone from truth. When someone makes a bold claim—whether it's an AI model, a coworker, or an executive—the calibrated thinker asks: 'What is the ground-truth evidence? Where is the telemetry? Can we verify the raw data?'",
        "Never confuse fluency with accuracy. In robotics, a beautifully polished aluminum chassis is useless if the wiring inside is reversed.",
      ],
      takeaway: "Calibrate your mind to demand empirical evidence. Never accept a claim simply because the speaker sounded polished and confident.",
    },
    watch: "Watch the first 10 minutes of this video explaining generative models and their failure modes. Observe how token prediction produces hallucinations.",
    practice: [
      "Open any modern AI assistant (ChatGPT, Claude, or Gemini).",
      "Ask it a hyper-specific, obscure factual question (e.g. 'What was the exact serial number and launch date of the third prototype Mars Rover test wheel in 1996?').",
      "Read the response carefully. Notice how authoritative and definitive the tone sounds.",
      "Now verify the claim using an authoritative primary source (NASA archives or verified documentation). Document in your log: did the model state reality, or did it construct a plausible-sounding fiction?",
    ],
    video: { id: "2IK3DFHRFfw", title: "Generative AI in a Nutshell" },
    quiz: {
      mcq: [
        {
          prompt: "What is an AI 'hallucination'?",
          choices: [
            "A temporary hardware glitch that causes the computer screen to flicker",
            "A generated statement that sounds coherent and confident but is factually false or ungrounded",
            "A security protocol where the model encrypts its thoughts for privacy",
          ],
          answer: 1,
          explanation: "Hallucinations occur when statistical word association generates grammatically fluent content that does not correspond to real-world facts.",
        },
        {
          prompt: "Why do AI models often sound most confident when they are making things up?",
          choices: [
            "Because the training data rewards authoritative, formal syntax, which the model mimics regardless of factual certainty",
            "Because models are designed to win arguments by bluffing against human users",
            "Because an internal fact-checking engine verified the data before outputting it",
          ],
          answer: 0,
          explanation: "The model mimics the confident tone of reference texts without possessing an internal barometer of objective real-world truth.",
        },
        {
          prompt: "What is the core principle of 'The Skeptic's Calibration' in engineering and life?",
          choices: [
            "Reject all new technologies and refuse to use automated tools",
            "Decouple persuasive tone from empirical truth, demanding verifiable evidence and data",
            "Trust any output that uses formal academic terminology",
          ],
          answer: 1,
          explanation: "Calibrated thinkers evaluate claims based on verifiable facts, experiments, and primary sources, not smooth rhetoric.",
        },
      ],
      open: "Describe a situation where trusting a fluent but unchecked statement could cause a catastrophic engineering or life failure. How would you verify it?",
    },
    source: { title: "Elements of AI on Limits", url: "https://www.elementsofai.com/", why: "Clear examination of computational limits and failure boundaries.", access: free },
  },
  {
    slug: "prompts",
    title: "Ask for a real task: Specifications, Constraints & Intent",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "Vague questions yield generic fluff. High-leverage prompts specify the role, the known facts, explicit constraints, and the definition of done.",
    paragraphs: [
      "Now that you understand that models generate based on probability, you can control the probability space.",
      "If you type 'Write about robots,' the model samples from the most average, generic text on the internet. You get a middle-school essay filled with clichés. But if you provide a clear specification—who the reader is, the exact technical constraints, and what the final format must be—you force the model into a narrow, high-value distribution.",
      "An engineering-grade prompt requires four pillars: 1) Role & Objective (who is doing what), 2) Known Context & Data (the raw facts to operate on), 3) Negative Constraints (what to avoid or reject), and 4) Output Schema (the exact structure of 'done').",
      "Treat a prompt like an engineering blueprint or a technical contract. You are not chatting with a friend; you are programming a probabilistic processor.",
    ],
    remember: "Role, Context, Constraints, and Output Format. Specify what to reject.",
    lifeLesson: {
      title: "The Power of Clear Specifications (Input-Process-Output)",
      concept: "Vague intentions produce chaotic results; clarity of specification creates predictable execution.",
      paragraphs: [
        "In life, people often complain about bad outcomes: 'My project failed,' 'My partner didn't understand me,' or 'My contractor did the wrong thing.' In 90% of cases, the root cause was ambiguous specification.",
        "Whether you are directing an AI, delegating to a team member, or setting personal goals, clarity is your highest-leverage skill. If you cannot describe what 'Done' looks like in measurable terms, nobody can deliver it.",
        "In mechanical engineering, a blueprint without tolerances results in parts that do not fit. In cognitive work, a task without constraints results in wasted effort.",
      ],
      takeaway: "Garbage in, garbage out. Define exact constraints, inputs, and the definition of success before starting any project.",
    },
    watch: "Watch this 8-minute masterclass on prompt engineering structure. Notice how constraint boundaries transform the output quality.",
    practice: [
      "Select a real engineering or daily chore: e.g. drafting a technical summary of a motor specification, or summarizing a complex article.",
      "Write a 'lazy prompt' (1 line): e.g. 'Summarize this motor spec.'",
      "Now write an 'engineered prompt' using the 4 pillars: 1) Role: Senior Robotics Hardware Specialist. 2) Context: [Paste 3 motor specs: torque, voltage, weight]. 3) Constraints: Zero fluff, max 4 bullet points, include power-to-weight ratio. 4) Done: Table format with comparison.",
      "Execute both in your model. Compare the outputs side by side. Notice how the engineered prompt eliminates hallucination and generic filler.",
    ],
    video: { id: "jC4v5AS4RIM", title: "Master the Perfect Prompt Formula (in just 8 minutes)" },
    quiz: {
      mcq: [
        {
          prompt: "Why does adding explicit negative constraints ('do not include X', 'limit to Y') improve AI output quality?",
          choices: [
            "It penalizes the model's server compute time",
            "It narrows the statistical probability distribution, pruning generic and undesirable token paths",
            "It converts the language model into a classical relational database",
          ],
          answer: 1,
          explanation: "Constraints eliminate high-probability clichés and guide the model's generation toward specific, high-density outputs.",
        },
        {
          prompt: "What are the four pillars of a robust technical prompt specification?",
          choices: [
            "Polite greetings, exclamation marks, broad topics, and emojis",
            "Role & Objective, Context/Data, Negative Constraints, and Output Format",
            "Lengthy essays, ambiguous instructions, rapid typing, and repeated questions",
          ],
          answer: 1,
          explanation: "Specifying who, with what data, under what boundaries, and in what exact shape produces reproducible, high-quality results.",
        },
        {
          prompt: "How does the 'Power of Clear Specifications' apply to human leadership and life?",
          choices: [
            "If you leave expectations vague, collaborators can read your mind accurately",
            "Defining measurable inputs and definitions of 'Done' prevents misunderstandings and wasted effort",
            "Specifications are only useful for computers, whereas human projects thrive on chaos",
          ],
          answer: 1,
          explanation: "Clear definitions of success and boundaries are essential for effective collaboration, engineering, and personal goal execution.",
        },
      ],
      open: "Take a task you need to accomplish this week. Write a 4-pillar specification for it: Role, Context, Constraints, and Output Schema.",
    },
    source: { title: "AI Prompting for Everyone", url: "https://www.deeplearning.ai/courses/ai-prompting-for-everyone/", why: "Learn disciplined, prompt-specification engineering.", access: "Free to start." },
  },
  {
    slug: "careful",
    title: "What you must not paste: Privacy, Data Security & Threat Modeling",
    part: "start",
    minutes: 30,
    coding: false,
    summary: "When you paste text into a commercial chat or cloud API, it leaves your machine. Passwords, API keys, private customer records, and hardware credentials stay out.",
    paragraphs: [
      "Yesterday you learned how to instruct a model with context. Today you establish non-negotiable security boundaries.",
      "A commercial AI interface is someone else's computer across the internet. When you submit text, that payload is transmitted across networks, processed on remote GPUs, and may be stored in access logs or retained for model fine-tuning unless enterprise zero-retention agreements are active.",
      "Never paste: 1) API keys, passwords, or encryption tokens, 2) Personally Identifiable Information (PII) like national IDs or phone numbers, 3) Proprietary trade secrets, source code with credentials, or unpublished intellectual property.",
      "Deleting a chat conversation from your sidebar deletes your local view; it does not un-broadcast data across the internet. Professional developers use dummy variables and sanitized mock data.",
    ],
    remember: "The chat box is someone else's server. Never paste credentials, private keys, or real personal identities.",
    lifeLesson: {
      title: "Information Diet & Cognitive Security",
      concept: "What you allow into your systems—and what you let leak out—defines your security posture.",
      paragraphs: [
        "In computer security, the concept of 'Attack Surface' refers to all the points where an unauthorized user can try to enter or extract data. The simplest way to keep a secret safe is to never upload it in the first place.",
        "Similarly, your personal mind has an information diet. If you feed your mind constant outrage, rumors, and noise, your thoughts will produce anxiety and distraction. If you feed it deep technical books, first-principles logic, and verified data, your output will be clarity and capability.",
        "Protect your personal attention and your private data with equal vigilance. Treat both as high-value assets.",
      ],
      takeaway: "Guard your private data and your cognitive attention like an impenetrable fortress. Once information leaks, it cannot be recalled.",
    },
    watch: "Watch the first 8 minutes of this Responsible AI overview. Note how data stewardship and risk boundaries form the backbone of modern tech systems.",
    practice: [
      "Identify 3 categories of sensitive information on your computer (e.g. passwords/tokens, bank/tax documents, personal chat history).",
      "Create a 'Sanitization Rule': Write a mock template where real names are replaced with 'User_Alpha', addresses with '123 Test St', and API keys with 'sk-TEST-KEY-0000'.",
      "Take an actual question you might want to ask an AI about your career or a project. Audit it: did you mention your company, specific colleagues, or confidential metrics? Sanitize it before running it.",
      "Repeat the developer oath: 'I will never paste real API credentials or personal secrets into a web prompt.'",
    ],
    video: { id: "3-xhMXeYIcg", title: "Introduction to Responsible AI" },
    quiz: {
      mcq: [
        {
          prompt: "What happens when you submit sensitive proprietary text into a standard cloud AI chat?",
          choices: [
            "The text is processed entirely inside your local monitor and never reaches the internet",
            "The text is sent over networks to remote servers, where it may be logged or retained according to the provider's terms",
            "The AI automatically detects secrets and permanently deletes them from all internet servers",
          ],
          answer: 1,
          explanation: "Unless using local offline models or enterprise zero-data-retention APIs, submitted prompts transit cloud infrastructure and are logged.",
        },
        {
          prompt: "What is the professional engineering method for getting AI help on sensitive code or data?",
          choices: [
            "Pasting the real credentials but typing 'please keep this secret' at the beginning",
            "Sanitizing the input: replacing real secrets, API keys, and names with generic placeholders and mock data",
            "Deleting the chat immediately after receiving the response",
          ],
          answer: 1,
          explanation: "Sanitizing data with mock placeholders ensures that even if logs are compromised, no actual credentials or private identities are exposed.",
        },
        {
          prompt: "How does the concept of 'Attack Surface' apply to personal productivity and life?",
          choices: [
            "By minimizing unnecessary distractions, information noise, and credential exposure, you protect your focus and privacy",
            "By sharing every thought on public forums to see what attackers do",
            "By avoiding all computers and never writing software",
          ],
          answer: 0,
          explanation: "Reducing your attack surface—both digitally and mentally—protects your highest-leverage resources: your security and focus.",
        },
      ],
      open: "Write down 2 types of confidential data you handle regularly, and write the exact sanitized placeholder format you will use whenever asking an AI for assistance.",
    },
    source: { title: "OWASP Top 10 for Large Language Models", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", why: "The global security benchmark for AI threat modeling and data leakage.", access: free },
  },
  {
    slug: "context",
    title: "What it can actually see: Context Windows, Attention & Working Memory",
    part: "how",
    minutes: 30,
    coding: false,
    summary: "A model has no ongoing awareness of your life. It only knows what is present inside its active context window at the exact moment of execution.",
    paragraphs: [
      "Yesterday you learned what to keep out. Today you learn the physical boundaries of what the model can see: the Context Window.",
      "An AI model does not have a persistent stream of consciousness. It is a mathematical function: when you hit Enter, it receives a packet of text (the context window), calculates output tokens, and immediately resets its state. If a file, a previous conversation, or a line of code is not inside that current packet, it does not exist to the model.",
      "In early models, the context window was small (2,000 words). In modern 2025/2026 architectures (Gemini 2.0/3.0, Claude 3.5/3.7, GPT-4o), context windows can handle hundreds of thousands of words or entire codebases. But larger context windows introduce 'needle-in-a-haystack' retrieval decay: models attend more accurately to information at the very beginning and end of the context than in the messy middle.",
      "If you forget to provide a sensor reading or file, the model will not wait; it will guess based on generic training patterns.",
    ],
    remember: "If it is not explicitly in the active context window, the model cannot see it.",
    lifeLesson: {
      title: "Working Memory & The Art of Chunking",
      concept: "Human working memory holds only 4–7 items; learn to offload and chunk information.",
      paragraphs: [
        "In 1956, cognitive psychologist George Miller discovered 'The Magical Number Seven, Plus or Minus Two.' Humans can only hold about 4 to 7 items in conscious working memory at any given second. When you try to juggle 15 tasks in your head, your brain drops them.",
        "Master engineers survive complex systems not by having bigger working memories, but by 'externalizing' their brains: using checklists, architecture diagrams, and clear modular abstractions. They group low-level details into conceptual 'chunks.'",
        "Just like an AI model needs an organized context window to produce coherent code, your brain needs an externalized workspace (paper, notes, whiteboards) to think clearly.",
      ],
      takeaway: "Do not store project state in your biological working memory. Offload notes onto paper and systems so your brain is free to reason.",
    },
    watch: "Watch the first 10 minutes of this lecture on large language model architectures. Notice how attention mechanisms scan the context window.",
    practice: [
      "Run an experiment in your chat tool: Ask it a question about a fictitious robotics part you just invented: 'What is the torque rating of the Apex-9000 Actuator?' Observe how it either hallucinates or admits ignorance.",
      "Now supply the context: 'Here is the spec sheet: Apex-9000 Actuator has a stall torque of 45 Nm at 24V. Question: What is the torque rating of the Apex-9000 Actuator?' Observe how the presence of context transforms the output into a grounded answer.",
      "Externalization Drill: Take the 5 most pressing tasks currently floating in your head. Write them down on paper in order of priority. Notice how your mental clarity immediately increases.",
    ],
    video: { id: "zizonToFXDs", title: "Introduction to Large Language Models" },
    quiz: {
      mcq: [
        {
          prompt: "What is an AI model's 'context window'?",
          choices: [
            "The physical glass monitor on your desk",
            "The maximum token payload (text, files, history) the model can process in a single generation step",
            "The webcam feed watching the user's facial expressions",
          ],
          answer: 1,
          explanation: "The context window defines the finite boundary of tokens the attention mechanism can cross-reference during computation.",
        },
        {
          prompt: "What happens if you reference a file on your desktop without pasting or attaching it to the prompt?",
          choices: [
            "The model silently accesses your hard drive through your operating system",
            "The model generates an answer based on statistical patterns about similar filenames, having never seen your file",
            "The model pauses the request until you physically upload the file",
          ],
          answer: 1,
          explanation: "Without direct inclusion in the context window, the model has no knowledge of local files and will invent plausible content.",
        },
        {
          prompt: "How can human engineers overcome the biological limit of working memory (4–7 items)?",
          choices: [
            "By refusing to write anything down to force the brain to adapt",
            "By externalizing thoughts onto paper, diagrams, and structured notes, chunking complex ideas into units",
            "By multitasking on 10 screens simultaneously",
          ],
          answer: 1,
          explanation: "Externalizing information onto physical or digital media frees cognitive bandwidth for deep reasoning rather than raw data retention.",
        },
      ],
      open: "What critical piece of technical context would you need to include if you were asking an AI to diagnose an error in a robotic motor controller?",
    },
    source: { title: "How Large Language Models Work by 3Blue1Brown", url: "https://www.youtube.com/watch?v=5sLYAQS9sWQ", why: "Visual, intuitive breakdown of attention mechanisms and context processing.", access: free },
  },
  {
    slug: "check-the-link",
    title: "A link is not proof: Citations, Grounding & Primary Source Verification",
    part: "how",
    minutes: 30,
    coding: false,
    summary: "Search-augmented models cite links, but citations can point to irrelevant, dead, or contradictory pages. You must open the source and verify the claim.",
    paragraphs: [
      "Yesterday you saw that models only see what is in context. To overcome this, modern models connect to search engines.",
      "When a model performs web search or cites a footnote, users assume the claim is verified. But watch closely: a model can cite a legitimate URL from NASA or Wikipedia while completely misinterpreting what the page says, or citing a page that contradicts its own summary.",
      "A citation is an address, not an endorsement. It proves that the model retrieved a document containing overlapping keywords; it does not guarantee that the generated claim accurately represents the author's findings.",
      "In robotics and hardware engineering, checking the link means opening the actual manufacturer's datasheet and reading the pinout diagram with your own eyes before applying voltage.",
    ],
    remember: "A footnote is an address, not proof. Open the link and read the source data.",
    lifeLesson: {
      title: "Primary Sources vs. Second-Hand Noise",
      concept: "Never trust a summary of a summary; always navigate to the root experimental data.",
      paragraphs: [
        "In the digital age, information flows through distortion filters. A research team publishes a nuanced scientific paper. A science journalist writes an exaggerated headline. A social media influencer tweets a distorted takeaway. By the time you read it, the claim is inverted.",
        "High-caliber thinkers cultivate the habit of tracing claims back to the 'Primary Source'—the original paper, the raw financial 10-K filing, the manufacturer datasheet, or the direct git commit.",
        "Whenever a decision has high consequences, refuse to rely on hearsay. Look at the primary source with your own eyes.",
      ],
      takeaway: "The further you get from the primary source, the more noise you consume. Always inspect the ground truth yourself.",
    },
    watch: "Watch this visual guide to transformers and search augmentation. Pay attention to how external data is integrated into model context.",
    practice: [
      "In a search-connected model, ask for a sourced answer to a technical question: e.g. 'What is the operating voltage range of the Raspberry Pi 5 USB-C power supply, and cite the official documentation?'",
      "Do not just read the answer. Click the link provided.",
      "Locate the exact specification on the official manufacturer page. Compare the model's claim to the actual text on the page.",
      "Record in your study log: did the model accurately reflect the primary source, or did it round, omit, or misstate an important constraint?",
    ],
    video: { id: "5sLYAQS9sWQ", title: "How Large Language Models Work" },
    quiz: {
      mcq: [
        {
          prompt: "What does an AI citation or footnote link fundamentally indicate?",
          choices: [
            "A legal certification that the claim has been independently verified by peer review",
            "That the model queried a page containing matching keywords, which you must inspect to verify the claim",
            "That the page was automatically generated by the AI model itself",
          ],
          answer: 1,
          explanation: "Citations indicate which external documents were pulled into context; only a human reading the source can verify that the claim was represented faithfully.",
        },
        {
          prompt: "What is a 'Primary Source' in technical research and engineering?",
          choices: [
            "A viral social media post summarizing what someone else said",
            "The original experimental paper, official manufacturer datasheet, or raw data file",
            "An anonymous blog post with opinions about a product",
          ],
          answer: 1,
          explanation: "Primary sources represent the original, unadulterated evidence or technical specification directly from the creators or researchers.",
        },
        {
          prompt: "If an AI gives you a link that is broken or completely unrelated to its claim, what should you do?",
          choices: [
            "Accept the claim anyway because the model meant well",
            "Reject or discard the claim until verified against an authentic, functional primary source",
            "Ask the AI to generate 10 more links until one looks pretty",
          ],
          answer: 1,
          explanation: "An invalid or mismatched citation is evidence of ungrounded hallucination; the claim must be discarded until independently verified.",
        },
      ],
      open: "Name one technical claim you encountered recently. Where would you go to find its absolute primary source, and what would you verify on that page?",
    },
    source: { title: "The Batch by DeepLearning.AI", url: "https://www.deeplearning.ai/the-batch/", why: "A calm, reliable weekly briefing grounded in primary AI research.", access: free },
  },
  {
    slug: "patterns",
    title: "Patterns, not magic: Neural Networks & Stacked Weights",
    part: "how",
    minutes: 30,
    coding: false,
    summary: "A neural network is not a digital brain; it is an interconnected stack of weighted mathematical equations adjusting parameters until patterns emerge.",
    paragraphs: [
      "You have checked predictions and links. Today you look directly inside the engine.",
      "Despite the biological metaphor, an 'artificial neural network' does not contain organic neurons. It is a mathematical structure consisting of layers of numbers ('weights' and 'biases'). Inputs enter as numbers, undergo millions of matrix multiplications and non-linear transformations, and emerge as output probabilities.",
      "During 'training,' the network makes predictions on millions of examples. When its guess is incorrect, an optimization algorithm (gradient descent and backpropagation) adjusts the weights slightly to reduce the error. Over billions of iterations, the network learns to recognize intricate patterns.",
      "It learned the mathematical geometry of the data. It did not learn conscious reality. Demystifying the math gives you control: you are not dealing with sorcery, but with high-dimensional statistical curve fitting.",
    ],
    remember: "A neural net is layered matrix multiplication adjusted by error feedback. It is geometry, not magic.",
    lifeLesson: {
      title: "Moravec's Paradox & The Humility of the Physical World",
      concept: "What is hard for humans is easy for computers; what is easy for humans is immensely hard for robots.",
      paragraphs: [
        "In the 1980s, roboticist Hans Moravec made a profound observation: It is comparatively easy to make computers exhibit adult-level performance on intelligence tests or playing grandmaster chess, but difficult or impossible to give them the physical skills of a one-year-old child when it comes to perception and mobility.",
        "Playing chess requires a tiny set of formal rules. Walking across an uneven muddy field, catching a dropped wrench, or feeling how tightly to hold an egg without crushing it requires billions of years of biological sensory-motor evolution.",
        "In robotics and life, appreciate the sheer engineering marvel of the physical world. Software is neat and clean; the physical realm requires feedback loops, tactile sensing, and deep respect for physics.",
      ],
      takeaway: "Never underestimate the complexity of physical mechanics. Pure logic is easy; physical interaction with the real world is where the true engineering challenge lives.",
    },
    watch: "Watch the first 10 minutes of Grant Sanderson's legendary 3Blue1Brown visual introduction to neural networks. Observe how handwritten digits activate mathematical layers.",
    practice: [
      "In your study log, draw a diagram of a 3-layer network: Input Layer (Sensor Data) → Hidden Layer (Pattern Weights) → Output Layer (Decision/Action).",
      "Label each arrow with the word 'Weight' (a dial that amplifies or dampens a signal).",
      "Contemplate Moravec's Paradox: list two things that an AI model can do in seconds (e.g. write a 14-line sonnet, solve a calculus integral), and two physical things that a multi-million-dollar robot still struggles to do reliably (e.g. untie a knot, fold a pile of laundry).",
      "Write a 1-sentence mechanical summary: 'A neural net is a stack of mathematical weights that transforms input numbers into output probabilities.'",
    ],
    video: { id: "aircAruvnKk", title: "But what is a neural network? | 3Blue1Brown" },
    quiz: {
      mcq: [
        {
          prompt: "What physically happens during the 'training' of an artificial neural network?",
          choices: [
            "A person writes millions of new code files by hand every minute",
            "Mathematical weights and biases are iteratively adjusted using calculus to minimize prediction errors",
            "The computer's hard drive physically expands in diameter",
          ],
          answer: 1,
          explanation: "Training is the mathematical optimization of internal numerical weights via backpropagation and gradient descent.",
        },
        {
          prompt: "What is 'Moravec's Paradox' in robotics and artificial intelligence?",
          choices: [
            "Computers consume less electricity when thinking about complex games than simple arithmetic",
            "High-level reasoning (chess, logic) requires very little computation, while low-level sensorimotor skills (walking, grasping) require immense computational and physical effort",
            "Robots will always prefer working in cold environments over warm environments",
          ],
          answer: 1,
          explanation: "Moravec proved that tasks humans find effortless (like walking or grasping) are computationally harder to engineer than abstract logical reasoning.",
        },
        {
          prompt: "Why is it dangerous to think of an artificial neural network as an emotional, conscious being?",
          choices: [
            "Because treating statistical matrix math as human consciousness leads to unwarranted trust and catastrophic oversight",
            "Because the computer will get offended if you talk to it like a machine",
            "Because neural networks are legally classified as biological species",
          ],
          answer: 0,
          explanation: "Anthropomorphizing software clouds engineering judgment. Models calculate weights; they do not have moral agency, consciousness, or accountability.",
        },
      ],
      open: "In your own words, explain how Moravec's Paradox applies when building a mobile robot: why is obstacle avoidance harder than calculating math?",
    },
    source: { title: "3Blue1Brown Neural Network Series", url: "https://www.3blue1brown.com/topics/neural-networks", why: "The gold standard of visual mathematical intuition for neural networks.", access: free },
  },
  {
    slug: "chatbot",
    title: "How modern models generate: Autoregressive Tokens & Reasoning Chains",
    part: "how",
    minutes: 30,
    coding: false,
    summary: "Models break text into tokens and predict the next token iteratively. Modern reasoning models use internal 'thinking tokens' before answering.",
    paragraphs: [
      "Yesterday you saw the weights. Today you see how those weights generate sentences.",
      "Language models do not process whole sentences or concepts at once. They process 'tokens'—chunks of characters (roughly 4 characters or 0.75 words). The model takes the input tokens, passes them through transformer attention layers, and calculates a probability score for every possible next token in its vocabulary.",
      "It samples one token, appends it to the sequence, and repeats the entire calculation for the next token. This step-by-step loop is called 'autoregression.'",
      "Crucial 2025/2026 update: Earlier models generated answers immediately, guessing token-by-token without planning. Modern 'Reasoning Models' (like OpenAI o1/o3, DeepSeek R1, or Claude 3.7 Thinking) generate hundreds of internal 'thinking tokens' first. They critique their own steps, test alternative hypotheses, and correct mistakes before showing you the final answer. This test-time compute dramatically elevates logic and engineering capability.",
    ],
    remember: "Autoregressive models predict token-by-token. Reasoning models use test-time compute to verify logic before responding.",
    lifeLesson: {
      title: "Deliberate Practice & The Edge of Failure",
      concept: "Practicing what you already know is comfortable; practicing at your edge of failure is where growth occurs.",
      paragraphs: [
        "Psychologist K. Anders Ericsson studied elite performers across chess, violin, surgery, and programming. He found that years of experience alone do not make someone a master. Most people plateau because they repeat what is already easy for them.",
        "Mastery requires 'Deliberate Practice': intentionally operating at the edge of your current ability, where you fail roughly 15-20% of the time, and receiving immediate feedback on why you made the error.",
        "Just as reasoning models spend compute cycles searching and verifying difficult steps before producing a solution, your brain must spend deliberate cognitive effort wrestling with difficult problems to expand its capability.",
      ],
      takeaway: "Do not hide in comfort. True skill acquisition only happens when you push to the boundary where you make mistakes and actively correct them.",
    },
    watch: "Watch the first 10 minutes of this breakdown of Transformers. Notice how self-attention weights connections across tokens.",
    practice: [
      "Tokenizer Experiment: Visit an online tokenizer (like tiktoken or OpenAI tokenizer). Paste the sentence: 'Robotics requires motors, sensors, and microcontrollers.' Observe how it splits into distinct color-coded tokens.",
      "Test a Reasoning Model: Open a modern reasoning model (ChatGPT o1/o3-mini, Claude 3.7 with Thinking, or DeepSeek R1). Ask it a complex logic puzzle or robotics kinematic problem.",
      "Inspect the 'Thinking' dropdown: Notice how many tokens the model generated internally to critique its hypotheses before presenting the final text.",
      "Deliberate Practice Check: Identify one technical skill (in coding, electronics, or robotics) that currently intimidates you. Schedule 15 minutes this week to tackle it directly at your edge of comfort.",
    ],
    video: { id: "wjZofJX0v4M", title: "Transformers, the tech behind LLMs | 3Blue1Brown" },
    quiz: {
      mcq: [
        {
          prompt: "What is a 'token' in the context of Large Language Models?",
          choices: [
            "A cryptocurrency coin used to pay server electrical bills",
            "A numerical chunk of text (typically 3–4 characters) that the model's vocabulary uses as its atomic unit",
            "A physical USB dongle plugged into the user's computer",
          ],
          answer: 1,
          explanation: "Tokens are the numerical representations of characters and subwords processed by the transformer architecture.",
        },
        {
          prompt: "How do 2025/2026 'Reasoning Models' differ from traditional autoregressive models?",
          choices: [
            "They utilize test-time compute to generate internal reasoning tokens, verifying logic and exploring alternatives before generating the final output",
            "They completely eliminate all neural networks in favor of human call centers",
            "They never require prompts and can read user minds wirelessly",
          ],
          answer: 0,
          explanation: "Reasoning models allocate extra computation at inference time to 'think,' plan, and critique intermediate reasoning steps.",
        },
        {
          prompt: "What defines 'Deliberate Practice' according to cognitive science?",
          choices: [
            "Mindlessly repeating tasks you are already proficient at while listening to music",
            "Targeting the edge of your current capability with focused attention and immediate error feedback",
            "Reading about a skill for years without ever executing it practically",
          ],
          answer: 1,
          explanation: "Deliberate practice requires focused effort at the boundary of your current skill level, coupled with immediate feedback.",
        },
      ],
      open: "Why does allowing an AI model (or human brain) time to 'think' and verify steps produce significantly better engineering solutions than demanding an instant answer?",
    },
    source: { title: "The Illustrated Transformer by Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", why: "The classic visual explanation of attention mechanisms and token generation.", access: free },
  },
  {
    slug: "brief",
    title: "Write a brief an engineer could follow",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "Move from casual prompting to engineering briefs. Write an unambiguous specification containing role, objective, inputs, constraints, and rejection criteria.",
    paragraphs: [
      "The first ten days gave you mental models to understand and evaluate AI. Days 11 to 20 demand that you build.",
      "In professional engineering teams, nobody uses one-line casual prompts. High-performing engineers author 'Technical Briefs' or 'Work Specifications.' A brief is a contract that leaves no room for ambiguity.",
      "A complete brief includes five distinct sections: 1) Executive Objective (what problem are we solving), 2) Target Audience / System (who or what receives this), 3) Inputs & Constraints (exact data, power limits, software dependencies), 4) Rejection Criteria (explicit conditions that make a submission unacceptable), and 5) Output Schema.",
      "When you author an engineering brief, you take ownership of the solution. You are no longer wishing for magic; you are architecting a deliverable.",
    ],
    remember: "Write a technical brief, not a wish. Define the rejection criteria explicitly.",
    lifeLesson: {
      title: "Problem Framing is 80% of the Solution",
      concept: "If you have an hour to solve a problem, spend 50 minutes defining the problem accurately.",
      paragraphs: [
        "Albert Einstein famously observed: 'If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.'",
        "Amateurs rush to implement solutions immediately, only to realize days later that they solved the wrong problem or failed to account for basic constraints. Senior engineers spend their time framing the exact boundary conditions.",
        "When designing a robot or writing software, the clearer your problem statement, the simpler your implementation becomes. Complexity is often just disguised ambiguity.",
      ],
      takeaway: "Never start building until you can define the exact problem and boundary conditions with surgical precision.",
    },
    watch: "Review the prompt formula video (8 minutes) with an engineer's eye. Focus on how rejection criteria eliminate hours of revision.",
    practice: [
      "Select a real engineering challenge: for example, specifying an automated script that monitors sensor temperature on a Raspberry Pi and alerts if it exceeds 75°C.",
      "Draft a 5-part Engineering Brief: 1. Objective, 2. Target System, 3. Context & Parameters, 4. Rejection Criteria (e.g. 'Reject any solution requiring heavy cloud dependencies; reject solutions without exception handling'), 5. Expected Output Format.",
      "Submit this brief to your model. Evaluate the generated code or design against your rejection criteria.",
      "Mark one place where the model attempted to violate a constraint, and see how your explicit rejection criteria caught it.",
    ],
    video: { id: "jC4v5AS4RIM", title: "Master the Perfect ChatGPT Prompt Formula (in just 8 minutes)!" },
    quiz: {
      mcq: [
        {
          prompt: "What is the primary role of 'Rejection Criteria' in an engineering brief?",
          choices: [
            "To insult the developer so they work faster",
            "To establish non-negotiable failure boundaries upfront, preventing wasted time on invalid solutions",
            "To hide the true objective from the project manager",
          ],
          answer: 1,
          explanation: "Explicit rejection criteria define what constitutes an unacceptable deliverable, drastically pruning bad solutions early.",
        },
        {
          prompt: "Why did Einstein recommend spending the vast majority of time understanding the problem?",
          choices: [
            "Because an accurately framed problem reveals its own solution, while an ambiguous problem leads to wasted effort",
            "Because thinking takes zero energy compared to writing equations",
            "Because he wanted to delay the project deadline as long as possible",
          ],
          answer: 0,
          explanation: "Deeply understanding the boundary conditions and root causes makes finding and implementing the right solution straightforward.",
        },
        {
          prompt: "What distinguishes an amateur prompt from a professional technical brief?",
          choices: [
            "Amateur prompts use all capital letters",
            "Professional briefs provide comprehensive context, exact system constraints, and formal output specifications",
            "Professional briefs never exceed four words in length",
          ],
          answer: 1,
          explanation: "Professional technical briefs treat the model as a programmable processor, specifying inputs, system limits, and output schemas.",
        },
      ],
      open: "Write the Rejection Criteria section for a robotic battery charger design: list 3 specific conditions that would make a design immediately unacceptable.",
    },
    source: { title: "AI Prompting for Everyone", url: "https://www.deeplearning.ai/courses/ai-prompting-for-everyone/", why: "Practical frameworks for structured prompting.", access: "Free to start." },
  },
  {
    slug: "editor",
    title: "You are the editor: Verification, Rigor & Code Review",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "Generated drafts are raw proposals. You are the editor, auditor, and signing engineer. Shipping unverified work is negligence.",
    paragraphs: [
      "Yesterday you created a brief. Today you step into the role that defines seniority: The Editor.",
      "When an AI generates code, a schematic proposal, or a technical report, it has zero skin in the game. It does not go to jail if an autonomous rover crashes into a person; it does not pay for scorched circuit boards when polarity is reversed. You do.",
      "The editor's mindset is fundamentally adversarial: assume the draft contains at least one subtle, plausible mistake until proven otherwise. Check the variable types, inspect edge cases (what happens when a sensor returns null?), and verify math.",
      "A senior engineer's value is not typing speed; it is verification rigor. You do not celebrate generating 500 lines of code in 3 seconds; you inspect those 500 lines line-by-line before allowing them into production.",
    ],
    remember: "Your name is on the final deliverable. You are the editor, auditor, and responsible engineer.",
    lifeLesson: {
      title: "The Discipline of Subtraction (Less is More)",
      concept: "Perfection is achieved not when there is nothing more to add, but when nothing can be removed.",
      paragraphs: [
        "French writer and aviator Antoine de Saint-Exupéry wrote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.'",
        "Novices love adding complexity. They add extra dependencies, redundant moving parts, complicated jargon, and unnecessary features. Every extra part in a robot is another part that can break; every extra line of code is another place for bugs to hide.",
        "Great editing—in writing, robotics, and life—is the art of subtraction. Remove the fluff, delete unused code, simplify mechanical linkages, and protect yourself from unnecessary complexity.",
      ],
      takeaway: "Simplicity is the ultimate sophistication. Regularly prune unnecessary parts, words, and tasks to leave only what is essential.",
    },
    watch: "Review Generative AI in a Nutshell (first 8 minutes). Focus on why verification must remain in human hands.",
    practice: [
      "Take a generated draft or code snippet from yesterday's session.",
      "Perform a 'Red Pen Audit': identify and strike out at least 2 sentences or code lines that do not earn their place (unnecessary fluff, redundant explanations).",
      "Fact-Check: Identify one technical parameter or claim in the text. Look it up in an official manual or documentation. Confirm whether the draft got it right.",
      "Read the cleaned version aloud. If there is any sentence you would feel uncomfortable defending before a panel of senior engineers, rewrite or delete it.",
    ],
    video: { id: "2IK3DFHRFfw", title: "Generative AI in a Nutshell" },
    quiz: {
      mcq: [
        {
          prompt: "What is the primary responsibility of an engineer when reviewing AI-generated output?",
          choices: [
            "Accepting the output immediately to maximize speed metrics",
            "Adversarially inspecting the proposal for factual inaccuracies, edge-case failures, and safety risks",
            "Hiding that AI was used so nobody asks for verification",
          ],
          answer: 1,
          explanation: "The engineer is solely responsible for verifying correctness, safety, and operational reliability before shipping.",
        },
        {
          prompt: "According to Saint-Exupéry, when is engineering or architectural design truly perfected?",
          choices: [
            "When every possible feature on the market has been crammed into the product",
            "When nothing more can be subtracted without impairing functionality",
            "When the design is so complex that only one person understands it",
          ],
          answer: 1,
          explanation: "True elegance and reliability come from subtraction—eliminating unnecessary failure points while preserving essential function.",
        },
        {
          prompt: "Why is shipping unverified AI code or hardware schematics considered professional negligence?",
          choices: [
            "Because models do not carry legal or physical accountability for real-world failures; the human author does",
            "Because AI code is legally prohibited from running on computers",
            "Because editors are paid by the number of words they delete",
          ],
          answer: 0,
          explanation: "Software and physical systems carry real-world consequences; accountability always rests with the human who approved and deployed the work.",
        },
      ],
      open: "Name one subtle bug or failure mode that an automated generator might introduce into a robot's motor control code that only a human editor would catch.",
    },
    source: { title: "Google AI Essentials", url: "https://grow.google/ai-essentials/", why: "Workplace standards for reviewing and validating automated drafts.", access: "Free to start." },
  },
  {
    slug: "one-tool",
    title: "Learn one tool properly: Depth over Distraction",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "ChatGPT, Claude, and Gemini are different wrappers around foundation models. Stop hopping between apps every day; achieve deep mastery in one.",
    paragraphs: [
      "There is an illusion of productivity that comes from downloading every new AI tool, visiting ProductHunt daily, and constantly tweaking your software stack. It feels like work, but it is procrastination.",
      "The major foundation models (Anthropic Claude, OpenAI GPT, Google Gemini) share identical underlying transformer principles. While their interfaces and benchmarks fluctuate slightly every few months, mastering the core mechanics of one tool gives you 95% transferability to all others.",
      "Depth with one tool beats a shallow tour of ten. When you stick with one environment, you learn its exact failure modes: you know how many tokens it handles before forgetting, how it formats code, where its spatial reasoning falters, and how to steer it.",
      "Pick your primary engine, learn its keyboard shortcuts, study its API and system parameters, and build real projects.",
    ],
    remember: "Depth with one reliable tool beats a superficial tour of ten. Master the limits of your primary workbench.",
    lifeLesson: {
      title: "Mastery vs. Shiny Object Syndrome",
      concept: "Novices constantly switch tools; masters extract extraordinary results from standard tools.",
      paragraphs: [
        "In woodworking, an apprentice blames their chisel and buys five new ones; a master craftsman sharpens one blade and carves a masterpiece. This phenomenon is known as 'Shiny Object Syndrome.'",
        "Whenever work gets difficult, the human brain seeks novelty as an escape. We tell ourselves: 'If I just switch to this other productivity app, or this new programming language, or this different AI tool, everything will become effortless.' It is a lie.",
        "Real breakthroughs come from staying through the plateau of difficulty. Pick one capable set of tools and refuse to switch until you have built something tangible with it.",
      ],
      takeaway: "Beware the trap of endless tool switching. True leverage comes from deep, unconscious mastery of a few reliable instruments.",
    },
    watch: "Revisit the generative AI overview (first 8 minutes) if needed. Spend the majority of today's 30 minutes inside your chosen primary workbench.",
    practice: [
      "Declare your primary AI workbench for the remainder of this curriculum (e.g. Claude, ChatGPT, or Gemini). Write the name at the top of your engineering log.",
      "Explore its advanced settings: locate its system prompt / custom instructions, its file upload limits, and its reasoning toggles.",
      "Execute a multi-turn engineering task entirely inside this one tool: provide an initial brief, critique its first draft, supply constraints, and refine the output to completion.",
      "Identify two specific quirks or tendencies of your chosen tool: e.g. 'tends to write overly verbose summaries' or 'defaults to Python over C++ unless explicitly commanded.'",
    ],
    video: { id: "G2fqAlgmoPo", title: "Introduction to Generative AI" },
    quiz: {
      mcq: [
        {
          prompt: "Why is constantly switching between new AI tools every morning counterproductive?",
          choices: [
            "Because each tool uses a completely different alphabet",
            "Because it wastes cognitive bandwidth on novelty rather than building deep intuition for model limits and workflows",
            "Because modern web browsers can only open one website per week",
          ],
          answer: 1,
          explanation: "App-hopping provides an illusion of progress while preventing the user from understanding underlying limits, prompt steering, and deep workflows.",
        },
        {
          prompt: "What is 'Shiny Object Syndrome' in engineering and learning?",
          choices: [
            "A defect where metal robot chassis reflect too much sunlight into optical sensors",
            "The distraction of constantly pursuing new tools, gadgets, or frameworks instead of mastering fundamentals",
            "A cleaning technique for maintaining electronic cleanrooms",
          ],
          answer: 1,
          explanation: "Shiny Object Syndrome is the habit of chasing novelty to escape the friction of deliberate practice and deep execution.",
        },
        {
          prompt: "How transferable are prompting and engineering skills across Claude, ChatGPT, and Gemini?",
          choices: [
            "Completely non-transferable; learning one teaches you zero about the others",
            "Highly transferable (90%+), because all rely on transformer attention, context windows, and clear specification principles",
            "Only transferable if you hold an official certification from all three companies",
          ],
          answer: 1,
          explanation: "Because all major frontier models operate on similar transformer foundations, principles of clear constraints and grounding apply universally.",
        },
      ],
      open: "Which primary tool did you select? State two specific strengths and two failure modes you have observed in it so far.",
    },
    source: { title: "AI for Everyone", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", why: "Core timeless principles of applying machine intelligence.", access: "Free to start." },
  },
  {
    slug: "at-work",
    title: "How an engineering team expects you to use it: Ownership & Extreme Accountability",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "In professional environments, the AI is a junior drafter; you are the engineer of record. Never blame the tool for an error you deployed.",
    paragraphs: [
      "You have mastered your primary tool. Today you bring it into a high-stakes engineering environment.",
      "In serious companies and engineering teams, nobody cares how fast you generated something if it fails in the field. When a mistake slips into production, saying 'Well, the AI generated that line' is an instant confession of incompetence.",
      "Treat the AI as an eager, tireless intern who has read every book on Earth but has never touched a physical machine, has zero common sense, and occasionally hallucinates with total confidence. You assign the task with strict guidelines, you audit the output, and you verify every calculation.",
      "The moment you copy-paste an output into a git commit, an email to an executive, or a hardware build document, that output becomes 100% yours.",
    ],
    remember: "The AI is the junior drafter; you are the signing engineer. You own 100% of what you ship.",
    lifeLesson: {
      title: "Extreme Ownership (Jocko Willink's Principle)",
      concept: "Blaming external tools or teammates yields helplessness; owning the entire outcome creates total leverage.",
      paragraphs: [
        "In his book 'Extreme Ownership', Navy SEAL commander Jocko Willink outlines a foundational leadership law: there are no bad teams, only bad leaders. When a mission stumbles, the leader does not blame the equipment, the weather, or subordinates. They examine what they failed to communicate, verify, or prepare.",
        "In technical work, adopting Extreme Ownership transforms you. When code crashes, you don't say 'Python had a bug' or 'The AI lied to me.' You say: 'I failed to write an automated test that caught that edge case. I will fix the pipeline now.'",
        "Taking full responsibility for everything in your sphere eliminates victimhood and gives you total agency to solve problems.",
      ],
      takeaway: "Never blame the tool, the weather, or circumstance. Own the outcome end-to-end, and you will always possess the power to fix it.",
    },
    watch: "Review Responsible AI (first 8 minutes). Reflect on the legal, ethical, and professional duties of deploying automated systems.",
    practice: [
      "Simulate an Engineering Standup: Draft a concise, 4-sentence update for a team lead describing an automated system or script you built.",
      "Include the 4 professional checkpoints: 1) What was asked, 2) What the tool drafted, 3) Exactly what checks/tests you executed, 4) What you explicitly refused to trust without physical telemetry.",
      "Say the 4 checkpoints aloud in one breath. If you stumble on #3 (what you checked), your work is incomplete.",
      "Audit your mindset: identify one past mistake where you were tempted to blame a tool or circumstance. Re-frame it using Extreme Ownership: what could you have prepared or verified differently?",
    ],
    video: { id: "3-xhMXeYIcg", title: "Introduction to Responsible AI" },
    quiz: {
      mcq: [
        {
          prompt: "What is an engineering team's reaction when someone explains a production bug by saying 'The AI wrote that code'?",
          choices: [
            "They praise the engineer for leveraging modern technology",
            "They recognize that the engineer failed to perform their fundamental duty of verification and ownership",
            "They sue the AI company for damages",
          ],
          answer: 1,
          explanation: "In engineering, the human who commits and deploys code is solely responsible for its behavior; blaming the drafting tool demonstrates an absence of professional ownership.",
        },
        {
          prompt: "What is the core premise of Jocko Willink's 'Extreme Ownership'?",
          choices: [
            "Purchasing 100% of the equity in your employer's company",
            "Refusing to make excuses or blame tools/others, taking total personal responsibility for outcomes within your sphere",
            "Working 24 hours a day without sleeping",
          ],
          answer: 1,
          explanation: "Extreme Ownership demands that you own all problems and solutions in your domain without blaming external variables.",
        },
        {
          prompt: "How should an engineer conceptualize frontier AI models in their workflow?",
          choices: [
            "As an infallible senior architect who requires no oversight",
            "As a hyper-fast, tireless junior drafter with vast memorized knowledge but zero physical intuition or real-world accountability",
            "As an entertainment toy with no professional utility",
          ],
          answer: 1,
          explanation: "Viewing AI as a capable junior drafter correctly sets expectations: you provide the direction, you audit the work, and you sign the outcome.",
        },
      ],
      open: "Write the 4-point standup update you would give to an engineering lead regarding a technical task you completed this week.",
    },
    source: { title: "Google AI Essentials", url: "https://grow.google/ai-essentials/", why: "Enterprise engineering practices for automated workflows.", access: "Free to start." },
  },
  {
    slug: "sheets",
    title: "Ask questions of structured data & telemetry",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "Real engineering lives in tabular telemetry, sensor logs, and databases. Never trust an LLM's mental arithmetic; recompute totals with code.",
    paragraphs: [
      "A vast majority of robotics, hardware testing, and enterprise work does not consist of prose; it consists of structured telemetry, tables, and sensor matrices.",
      "When you give an LLM a table of numbers (e.g. motor current over 50 test runs) and ask 'What was the average current?', the model is predicting tokens. Unless it explicitly invokes a Python code interpreter sandbox, its answer is an approximation, not a calculated mathematical sum.",
      "In modern 2025/2026 systems, tools like ChatGPT Advanced Data Analysis or Claude Artifacts execute real Python code in a container to calculate stats. But as the engineer, you must verify the script: did it handle null readings? Did it divide by zero? Did it drop outlier sensor spikes?",
      "Always inspect the code that computed the numbers. Real arithmetic requires calculation, not token prediction.",
    ],
    remember: "Never rely on token prediction for mathematical totals. Inspect the code or compute the numbers directly.",
    lifeLesson: {
      title: "Empirical Reality vs. Narrative (Data Speaks)",
      concept: "Humans fall in love with persuasive stories; empirical counts and physical data settle arguments.",
      paragraphs: [
        "In human organizations, people tell persuasive stories: 'Our robot is practically finished,' 'The battery lasts all day,' or 'Users love the new design.' These are subjective narratives.",
        "An engineer cuts through narrative with empirical measurement. What does the multimeter say? What is the mean time between failures (MTBF)? How many milliamps did the board draw under peak load? How many test units failed in thermal cycling?",
        "Do not argue about opinions when you can run a measurement. In life and engineering, anchor your conclusions in reproducible, physical data.",
      ],
      takeaway: "Opinions and narratives are cheap. Measure the physical parameters, log the telemetry, and let the data speak.",
    },
    watch: "Watch this rapid 100-second breakdown of Python. Python is the universal language of data science and robotics scripting.",
    practice: [
      "Copy this mock telemetry dataset into your notes:\nMotor_1: 24.1V, 1.8A, OK\nMotor_2: 23.9V, 2.2A, OK\nMotor_3: 20.4V, 4.8A, WARNING_OVERHEAT\nMotor_4: 24.0V, 1.9A, OK",
      "Calculate by hand: What is the total current draw of the healthy (OK) motors? (Answer: 1.8 + 2.2 + 1.9 = 5.9A).",
      "Paste the table into your AI tool and ask: 'Calculate the total current draw of only the motors marked OK.'",
      "Check whether it computed the math correctly or invoked a Python code environment. Verify that its answer matches your verified 5.9A hand calculation.",
    ],
    video: { id: "x7X9w_GIm1s", title: "Python in 100 Seconds" },
    quiz: {
      mcq: [
        {
          prompt: "When an LLM answers a math question without using a code interpreter tool, what is it doing?",
          choices: [
            "Executing low-level assembly ALU instructions inside the GPU",
            "Predicting the most likely next numbers based on mathematical patterns in its training text",
            "Checking an internal calculator app on its phone",
          ],
          answer: 1,
          explanation: "Pure language models generate numbers through token probability; genuine mathematical computation requires code execution or deterministic tools.",
        },
        {
          prompt: "Why should an engineer inspect the Python code an AI writes to analyze a sensor dataset?",
          choices: [
            "To verify that the code handles null values, correct units, and filtering logic accurately rather than masking errors",
            "Because Python code written by AI is legally required to be published on the web",
            "Because Python cannot run on computers unless reviewed by two humans",
          ],
          answer: 0,
          explanation: "Code execution is deterministic, but the logic written by the model can have subtle filtering bugs (e.g. wrong column headers, dropping valid rows).",
        },
        {
          prompt: "What is the principle of 'Empirical Reality vs. Narrative' in engineering?",
          choices: [
            "Writing longer prose stories makes hardware more durable",
            "Replacing subjective opinions and optimistic claims with measurable, reproducible data and physical telemetry",
            "Believing whatever marketing brochures state about component performance",
          ],
          answer: 1,
          explanation: "Empirical reality is determined by direct physical measurement and verified telemetry, not compelling stories.",
        },
      ],
      open: "Provide an example of a telemetry metric you would measure on a robot to determine if a motor is failing before it physically burns out.",
    },
    source: { title: "AI Python for Beginners by Andrew Ng", url: "https://www.deeplearning.ai/courses/ai-python-for-beginners/", why: "Accessible, practical scripting for data analysis and automation.", access: "Free to start." },
  },
  {
    slug: "agents",
    title: "A tool that takes steps: Autonomous Loops, Tool Calling & MCP",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "An agent is a model, plus tools, plus an autonomous feedback loop. More autonomy means more leverage, but also compounding failure modes.",
    paragraphs: [
      "So far, you asked a question, received a draft, and evaluated it yourself. Today you step into autonomous systems: AI Agents.",
      "An AI Agent is a foundation model embedded in an execution loop equipped with tools. It does not just output text to a screen; it can call an API, query a database, write and execute code, observe the result, make a decision, and take the next step automatically.",
      "Crucial 2025/2026 standard: Model Context Protocol (MCP) and tool-calling schemas now allow models to connect to file systems, web scrapers, and robotics control buses (like ROS 2). An agent can read a sensor, plan a trajectory, check for collisions, and issue actuator motor commands in a closed loop.",
      "However, autonomy multiplies risk. If an agent loops on a flawed assumption, it can burn through compute credits, wipe database rows, or drive a robot into a wall with great speed. The engineer's job is defining 'Human-in-the-Loop' safeguards.",
    ],
    remember: "An agent = Model + Tools + Execution Loop. Always define explicit human approval gates for high-consequence actions.",
    lifeLesson: {
      title: "The OODA Loop (Observe, Orient, Decide, Act)",
      concept: "The faster and more accurately you cycle through feedback, the more effective you are in dynamic environments.",
      paragraphs: [
        "Military strategist John Boyd formulated the OODA Loop: Observe (gather raw sensory data), Orient (filter that data through your mental models), Decide (choose the best hypothesis), and Act (execute).",
        "The person or system that cycles through an accurate OODA loop fastest wins. If you take 3 months to plan an experiment that your competitor tests and invalidates in 3 days, they will out-learn you.",
        "In robotics and autonomous agents, the OODA loop is the perception-action cycle. In your own life, do not stay paralyzed in 'analysis paralysis.' Observe, make a decision, act, and let real-world feedback guide your next move.",
      ],
      takeaway: "Embrace fast feedback loops. Planning without action is daydreaming; action without feedback is recklessness. Cycle through the OODA loop continuously.",
    },
    watch: "Watch this primer on AI Agents. Observe how agents plan, select tools, and iterate on intermediate outputs.",
    practice: [
      "Map out a 4-step autonomous agent workflow for a robotics task: 1. Observe (read ultrasonic distance sensor), 2. Orient (check if obstacle < 30 cm), 3. Decide (plan 45° left turn), 4. Act (send PWM pulse to left/right motors).",
      "Identify the 'Blast Radius': what is the worst thing that could happen if Step 4 executes with a reversed motor sign?",
      "Define a 'Human-in-the-Loop' safeguard: Write down one action an autonomous software or hardware agent should NEVER be permitted to take without explicit human confirmation (e.g. wiping a database, sending an external payment, or overriding a physical emergency stop).",
    ],
    video: { id: "F8NKVhkZZWI", title: "What are AI Agents?" },
    quiz: {
      mcq: [
        {
          prompt: "What three elements constitute an AI Agent?",
          choices: [
            "A monitor, a keyboard, and an optical mouse",
            "A foundation model, a set of executable tools/APIs, and an autonomous evaluation loop",
            "A search engine, a printer, and a camera",
          ],
          answer: 1,
          explanation: "Agents combine intelligence (model), environmental interaction (tools), and iterative state management (execution loop).",
        },
        {
          prompt: "Why must engineers implement 'Human-in-the-Loop' boundaries in autonomous agent systems?",
          choices: [
            "Because agents can repeat and compound errors in rapid loops, requiring human approval for high-consequence actions (payments, deletion, physical motion)",
            "Because computers get tired if they run more than three steps in a row",
            "Because agents are legally required to chat with humans every 5 minutes",
          ],
          answer: 0,
          explanation: "Without guardrails and human authorization on dangerous actions, compounding errors can cause irreversible digital or physical damage.",
        },
        {
          prompt: "What is the core lesson of John Boyd's OODA Loop for learners and builders?",
          choices: [
            "Never take any action until you have 100% certainty and zero risk",
            "Rapid iteration through Observe-Orient-Decide-Act allows you to adapt and out-learn static competitors",
            "Only military pilots can understand feedback loops",
          ],
          answer: 1,
          explanation: "Fast, accurate feedback loops enable continuous adaptation to dynamic, uncertain real-world conditions.",
        },
      ],
      open: "Describe an autonomous agent you would like to build for your personal work or a robot. Name the 3 tools it would need and the 1 safeguard you would enforce.",
    },
    source: { title: "Agentic AI by DeepLearning.AI", url: "https://www.deeplearning.ai/courses/agentic-ai/", why: "Deep architectural principles for building multi-step agentic workflows.", access: "Free to start." },
  },
  {
    slug: "documents",
    title: "Answer from a document you trust: RAG & Grounding Architectures",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "Retrieval-Augmented Generation (RAG) searches trusted documentation, injects the exact passages into the prompt, and forces the model to cite that evidence.",
    paragraphs: [
      "On Day 8, you checked links manually. Today you inspect the enterprise architecture that automates this: Retrieval-Augmented Generation (RAG).",
      "Instead of training or fine-tuning a massive model on your private data (which is slow, expensive, and risks hallucination), RAG pairs the model with a search engine or vector database. When a question arrives, the system retrieves the top 3 relevant paragraphs from your verified documentation, pastes them into the context window, and commands the model: 'Answer using ONLY the provided text.'",
      "This grounds the output in verified truth. If the documentation does not contain the answer, a well-engineered RAG pipeline refuses to answer rather than guessing.",
      "In robotics, RAG is how an assistant references complex technical repair manuals, schematic pinouts, or safety standards without hallucinating non-existent voltages.",
    ],
    remember: "RAG = Retrieve verified source documents → Inject into context → Generate strictly from that evidence.",
    lifeLesson: {
      title: "Anchor to Ground Truth (Epistemic Hygiene)",
      concept: "Protect yourself from misinformation by anchoring beliefs directly to verifiable ground truth.",
      paragraphs: [
        "In our culture of rapid information velocity, rumors and false narratives spread ten times faster than verified facts. People repeat claims simply because they heard them three times.",
        "Practicing 'Epistemic Hygiene' means treating your mind's belief system like a RAG pipeline. When someone presents a shocking claim, do not integrate it into your world model immediately. Ask: 'What is the grounding source? Can we retrieve the raw document or experimental measurement?'",
        "If a belief cannot be grounded in empirical observation or verified documentation, treat it as an unproven hypothesis. Protect the integrity of your mind.",
      ],
      takeaway: "Maintain rigorous epistemic hygiene. Only anchor your beliefs to verified evidence and primary documentation.",
    },
    watch: "Watch this clear explanation of Retrieval-Augmented Generation (RAG). Notice how semantic search and vector embeddings locate relevant passages.",
    practice: [
      "Select a technical document: a 1-page user manual, a robotic datasheet, or an official API reference.",
      "Simulate a manual RAG system: 1. User Question: 'What is the maximum operating temperature?' 2. Retrieval: Locate the exact sentence in the manual. 3. Grounded Prompt: 'Context: [Paste the exact sentence]. Question: What is the maximum operating temperature? Rule: Rely ONLY on the context.'",
      "Now ask an 'out-of-bounds' question that the manual does NOT answer (e.g. 'What is the CEO's favorite breakfast?'). Confirm that the model responds: 'The provided document does not contain this information.'",
      "Reflect on Epistemic Hygiene: identify one rumor or assumption you accepted recently, and check if you can find the primary grounding document for it.",
    ],
    video: { id: "T-D1OfcDW1M", title: "What is Retrieval-Augmented Generation (RAG)?" },
    quiz: {
      mcq: [
        {
          prompt: "What is the sequence of steps in a standard RAG (Retrieval-Augmented Generation) pipeline?",
          choices: [
            "Generate an answer → Search the web → Change your mind",
            "Retrieve relevant passages from a verified database → Inject passages into model context → Generate answer strictly from those passages",
            "Re-train the entire foundation model from scratch for every user query",
          ],
          answer: 1,
          explanation: "RAG retrieves specific grounded documents first, provides them in context, and generates an answer anchored to that evidence.",
        },
        {
          prompt: "What is the primary engineering advantage of RAG over model fine-tuning?",
          choices: [
            "RAG provides instant updating of knowledge without retraining, eliminates hallucination by grounding in citations, and respects document access permissions",
            "RAG deletes the need for internet access and computer hardware",
            "RAG makes models 100% conscious and emotional",
          ],
          answer: 0,
          explanation: "RAG enables dynamic updates, transparent auditability, and verifiable citations without expensive re-training cycles.",
        },
        {
          prompt: "What does 'Epistemic Hygiene' require when evaluating claims in daily life?",
          choices: [
            "Washing your hands before typing code on a keyboard",
            "Anchoring beliefs to verifiable evidence and refusing to adopt claims lacking grounding documentation",
            "Believing everything you read on social media if it has more than 1,000 likes",
          ],
          answer: 1,
          explanation: "Epistemic hygiene is the deliberate habit of validating beliefs against primary evidence and ground truth.",
        },
      ],
      open: "Explain how you would use RAG to help an engineering team maintain a fleet of robots with complex service manuals.",
    },
    source: { title: "Retrieval Augmented Generation Course", url: "https://www.deeplearning.ai/courses/retrieval-augmented-generation/", why: "Comprehensive engineering guide to modern RAG systems.", access: "Free to start." },
  },
  {
    slug: "make-one",
    title: "Make one small thing: The Builder's Artifact",
    part: "push",
    minutes: 30,
    coding: true,
    summary: "Theory without building is daydreaming. Ship a small, working technical artifact: a reusable prompt brief or 10 lines of code you can explain with the tool closed.",
    paragraphs: [
      "You have studied concepts, reasoning models, verification, data, and agents. Today you build your artifact.",
      "A project does not need to be 10,000 lines long to be legitimate. A small, tightly scoped tool that you built, tested, and can defend line-by-line is infinitely more valuable than a massive, bloated codebase generated by an AI that you do not understand.",
      "You have two paths today: Path A (The Systems Engineer): Build a complete, reusable 5-part engineering brief for a task in your life or work, with documented test runs and rejection criteria. Path B (The Code / Hardware Builder): Write 10 to 20 lines of Python or robotics microcontroller code (e.g. reading a sensor or calculating a motor duty cycle) with comprehensive comments.",
      "The test of ownership is simple: Close the AI assistant. Can you walk up to a whiteboard and explain every single line to another human? If yes, it is yours.",
    ],
    remember: "If you cannot explain every line with the AI closed, the work is not yours yet.",
    lifeLesson: {
      title: "The Bias for Action (Build to Learn)",
      concept: "Reading ten books on swimming will never teach you to swim; build a scrappy prototype today.",
      paragraphs: [
        "Many intelligent people fall into the trap of perpetual preparation: they watch tutorials for six months, buy equipment, read forum posts, and plan endlessly. But they never ship anything. This is fear disguised as thoroughness.",
        "World-class builders have a 'Bias for Action.' They know that real learning only happens when you push a scrappy prototype into the physical world and observe how it breaks. Reality provides lessons that no textbook can anticipate.",
        "Build a v1 today. Let it be simple. Let it fail in small ways. Iterate rapidly based on what physical reality teaches you.",
      ],
      takeaway: "Stop planning and start building. A flawed prototype running in the real world teaches you more than a thousand hours of passive theory.",
    },
    watch: "Watch Grant Sanderson's breakdown of Gradient Descent (first 8 minutes). Observe how systems learn by making small adjustments toward an objective.",
    practice: [
      "Choose your track: Path A (Engineering Brief) or Path B (Microcontroller/Python Code).",
      "Build your artifact: spend 15 focused minutes writing, testing, and debugging it.",
      "The Whiteboard Audit: Close all chat windows and tabs. Take a sheet of paper. Write down: 1) What problem it solves, 2) The exact mechanism, 3) Two potential failure modes, 4) How you verified it.",
      "Save your artifact in your project repository where you can open it on Day 20 for your final defence.",
    ],
    video: { id: "IHZwWFHWa-w", title: "Gradient descent, how neural networks learn | 3Blue1Brown" },
    quiz: {
      mcq: [
        {
          prompt: "When does an engineering artifact or piece of code truly belong to you?",
          choices: [
            "The moment an AI completes generating it on your screen",
            "When you understand its operation so thoroughly that you can explain and defend every line with the AI closed",
            "When you purchase an expensive copyright license for it",
          ],
          answer: 1,
          explanation: "True ownership requires intellectual mastery: the ability to explain, debug, and defend the solution independently.",
        },
        {
          prompt: "What is the primary danger of 'Perpetual Preparation' in technical learning?",
          choices: [
            "It consumes very little electricity",
            "It disguises fear of failure as diligence, preventing the learner from gaining crucial real-world feedback",
            "It makes textbooks too expensive",
          ],
          answer: 1,
          explanation: "Endless passive reading avoids the discomfort of making mistakes, stalling practical competence.",
        },
        {
          prompt: "Why is a 15-line script you understand completely superior to a 500-line script you cannot explain?",
          choices: [
            "Because when the 15-line script encounters an edge case or failure, you possess the capability to diagnose, debug, and repair it",
            "Because computer operating systems refuse to run files longer than 20 lines",
            "Because shorter code is always free of bugs",
          ],
          answer: 0,
          explanation: "Maintainability, reliability, and security depend on human understanding. Code you cannot explain is technical debt waiting to explode.",
        },
      ],
      open: "Describe the artifact you built today: what does it do, how did you verify it, and how would you explain its core mechanism with the computer screen turned off?",
    },
    source: { title: "Hugging Face Open Source Learning", url: "https://huggingface.co/learn", why: "Hands-on tutorials for practical, open-source model building.", access: free },
  },
  {
    slug: "judgment",
    title: "Explain one idea: Engineering Judgment & Ethical Boundaries",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "True seniority is knowing when NOT to use AI. Explain when high-stakes decisions—safety, medical, legal, and kinetic robotics—must stay in qualified human hands.",
    paragraphs: [
      "You built a small thing yesterday. Today you develop the highest tier of engineering wisdom: Judgment.",
      "Just because a model can generate something fast does not mean it should be deployed. High-stakes domains—weapons systems, criminal justice sentencing, autonomous surgical incisions, structural bridge load calculations, and pediatric medical diagnosis—must never be delegated to an unchecked statistical guess.",
      "Bias enters AI models not through magical malice, but through the historical blindspots, prejudices, and omissions present in the training datasets. If you train a model on past hiring data from an era where certain demographics were excluded, the model will mathematically optimize to exclude them again.",
      "A master engineer is not someone who automates everything. A master engineer is someone who has the ethical backbone and technical discernment to say: 'This task carries too high a blast radius. The machine stays closed; a qualified human must inspect and sign this.'",
    ],
    remember: "High-stakes decisions require human accountability. Knowing when NOT to automate is the mark of senior engineering judgment.",
    lifeLesson: {
      title: "Developing Taste & Intellectual Courage",
      concept: "Anyone can follow the crowd; it takes courage and taste to say 'No' to bad ideas.",
      paragraphs: [
        "Steve Jobs noted that innovation is not saying yes to everything; it is saying NO to 1,000 other good ideas so you can focus on the few that truly matter.",
        "In the AI hype cycle, executives and novices rush to slap AI onto every product. Most of these implementations are clumsy, fragile, and unnecessary. Having 'Taste' means knowing what is elegant, durable, and genuinely helpful versus what is mere gimmick.",
        "Cultivate the intellectual courage to push back against hype. When everyone around you is rushing into an unverified trend, stand firmly on first principles, safety, and human values.",
      ],
      takeaway: "Cultivate refined engineering taste and moral courage. The most valuable people in any organization are those who know when to say 'No.'",
    },
    watch: "Watch the concluding chapter of Responsible AI. Pay attention to how bias propagates and where human accountability is non-negotiable.",
    practice: [
      "Select a high-stakes scenario: e.g. An algorithm deciding which hospital patients receive emergency ICU beds during a crisis.",
      "Draft a 4-point Ethical Assessment: 1) What data did it learn from? 2) Where could hidden historical bias skew the scoring? 3) What is the physical consequence of a false-positive or false-negative? 4) Why must a human doctor retain ultimate authority?",
      "The Teach-Back: Find a friend or record a 3-minute voice memo explaining why high-stakes kinetic or medical systems must never run on unchecked AI predictions. Avoid buzzwords; use clear ethical and mechanical logic.",
      "Review your voice memo: did you speak with clarity and conviction? Refine any sentence that sounded like generic PR speak.",
    ],
    video: { id: "3-xhMXeYIcg", title: "Introduction to Responsible AI" },
    quiz: {
      mcq: [
        {
          prompt: "How does demographic or historical bias primarily enter modern AI models?",
          choices: [
            "Through microscopic dust particles settling on GPU circuit boards",
            "Through historical prejudices, exclusions, and imbalances present in the human training data that the model learns to reproduce",
            "Through computer viruses downloaded from the internet",
          ],
          answer: 1,
          explanation: "Models mirror the statistical distributions of their training corpora; historical inequities in training data become mathematical biases in generation.",
        },
        {
          prompt: "What characterizes true senior engineering judgment in automated systems?",
          choices: [
            "Automating every single task in a company regardless of safety or consequences",
            "Knowing when NOT to use AI, and having the courage to keep high-stakes decisions under human control",
            "Using the most expensive model available for every problem",
          ],
          answer: 1,
          explanation: "Senior engineers evaluate risk, blast radius, and failure modes, knowing that certain critical domains require strict human accountability.",
        },
        {
          prompt: "Why is 'Taste' in engineering described as the ability to say 'No'?",
          choices: [
            "Because saying yes to every feature dilutes focus, increases complexity, and introduces fragile failure points",
            "Because engineers are naturally grumpy and dislike work",
            "Because saying no reduces software licensing costs to zero",
          ],
          answer: 0,
          explanation: "Elegance and reliability require ruthless prioritization; pruning bad or superfluous ideas protects the integrity of the core system.",
        },
      ],
      open: "Name one application where you believe AI automation should be strictly prohibited by law or ethical standards. Defend your reasoning using first principles.",
    },
    source: { title: "Introduction to Responsible AI", url: "https://www.youtube.com/watch?v=3-xhMXeYIcg", why: "Authoritative framework on accountability and systemic bias.", access: free },
  },
  {
    slug: "show-your-work",
    title: "Explain your project: The Final Defence & Lifelong Compounding",
    part: "push",
    minutes: 30,
    coding: false,
    summary: "Today you defend your work in plain words to someone who was not here. Then the door to the Robotics Workshop awaits your access code.",
    paragraphs: [
      "You have traveled twenty days from zero. Today is your final defence.",
      "A complete engineer can articulate four clean answers: 1) What problem was tackled, 2) What tools were used and what was asked, 3) What was verified against primary ground truth, and 4) What was explicitly rejected as untrustworthy.",
      "If you cannot explain your artifact without pointing to brand names or relying on jargon, the knowledge is still superficial. Speak with the calm, grounded authority of someone who built the thing with their own hands and tested its limits.",
      "The locked Robotics Workshop after this is not a generic certificate of completion. It is a private commission, a personal letter, and a shelf of next horizons (APIs, ROS 2, physical computing, motor drivers, and reasoning loops). Complete your defence. The workshop awaits your code.",
    ],
    remember: "Show the check, not just the draft. Defend your work in plain words.",
    lifeLesson: {
      title: "The Compound Effect & Lifelong Mastery",
      concept: "30 minutes of daily deliberate practice compounds exponentially into world-class competence.",
      paragraphs: [
        "In finance, compound interest is called the eighth wonder of the world. In human learning, daily intellectual compounding is even more powerful. If you improve your understanding by just 1% every day for a year, you are 37 times more capable by the end of that year.",
        "Most people overestimate what they can accomplish in a weekend of manic cramming, and vastly underestimate what they can achieve through 30 minutes of calm, disciplined, daily curiosity over five years.",
        "You proved this over these 20 days. You took small, daily bites. You wrestled with mental models, built artifacts, and sharpened your judgment. This trail is not the end of your education; it is Day 1 of your lifelong engineering journey.",
      ],
      takeaway: "Never stop compounding. Thirty minutes of daily curiosity, building, and verification will take you further than any degree or shortcut.",
    },
    watch: "Watch this crisp 3-minute explanation of APIs (Application Programming Interfaces). This is the exact doorway to your next phase of software and robotics development.",
    practice: [
      "Open your artifact from Day 18.",
      "Deliver your Final Defence: Speak out loud for 3 continuous minutes (to a friend, mentor, or voice memo). Cover: 1) The goal, 2) The architecture, 3) The checks you performed, 4) The failure modes you rejected.",
      "Have your listener summarize your project back to you in one sentence. If they cannot, your explanation was too cluttered. Simplify and deliver it again.",
      "Record your completion in your study log. You have earned the right to unlock the Robotics Workshop.",
    ],
    video: { id: "s7wmiS2mSXY", title: "What is an API? (in 3 minutes)" },
    quiz: {
      mcq: [
        {
          prompt: "What are the four pillars of defending an engineering project?",
          choices: [
            "The logo, the color scheme, the price, and the font",
            "What was asked, what was generated, what was verified, and what was refused/rejected",
            "How fast you typed, who you copied it from, how long it took, and how many lines it has",
          ],
          answer: 1,
          explanation: "A credible defence articulates the objective, the methodology, the verification checks, and the explicit safety/failure boundaries.",
        },
        {
          prompt: "What is an API (Application Programming Interface) in software and robotics?",
          choices: [
            "A physical screwdriver used to tighten chassis bolts",
            "A structured programmatic doorway allowing one software program to request data or actions from another",
            "A legal document that prohibits programmers from sharing code",
          ],
          answer: 1,
          explanation: "APIs are the standard contracts that allow distinct software systems, models, and microcontrollers to communicate reliably.",
        },
        {
          prompt: "How does the 'Compound Effect' govern long-term engineering mastery?",
          choices: [
            "By pulling all-nighters once every six months to cram information",
            "Consistent daily investments (e.g. 30 minutes a day) multiply exponentially over years into deep, irreplaceable expertise",
            "Mastery is purely genetic and cannot be developed through daily practice",
          ],
          answer: 1,
          explanation: "Daily deliberate practice compounds knowledge and skill exponentially over time, outperforming sporadic bursts of effort.",
        },
      ],
      open: "Deliver your final defence in 3–4 sentences: What did you build, what did you verify, and what is the single most valuable mental model you will carry forward into your robotics journey?",
    },
    source: { title: "What is an API? by Plain Concepts", url: "https://www.youtube.com/watch?v=s7wmiS2mSXY", why: "The essential bridge connecting models to real-world software and robots.", access: free },
  },
];

export const days: DayPlan[] = [
  { id: 1, title: "What people mean by AI", blurb: "Start from zero. A statistical guess, not a person.", slugs: ["what-is-ai"] },
  { id: 2, title: "Three names, untangled", blurb: "AI, Machine Learning, and Deep Learning.", slugs: ["three-ideas"] },
  { id: 3, title: "Where you already meet it", blurb: "Sensors, cameras, and quiet everyday predictions.", slugs: ["already-there"] },
  { id: 4, title: "Fluent is not the same as true", blurb: "Hallucinations & the skeptic's calibration.", slugs: ["limits"] },
  { id: 5, title: "Ask for a real task", blurb: "Role, context, constraints, and definition of done.", slugs: ["prompts"] },
  { id: 6, title: "What you must not paste", blurb: "Privacy, security, and threat modeling.", slugs: ["careful"] },
  { id: 7, title: "What it can actually see", blurb: "Context windows, attention, and working memory.", slugs: ["context"] },
  { id: 8, title: "A link is not proof", blurb: "Primary source verification and evidence.", slugs: ["check-the-link"] },
  { id: 9, title: "Patterns, not magic", blurb: "Neural networks, weights, and Moravec's paradox.", slugs: ["patterns"] },
  { id: 10, title: "How modern models generate", blurb: "Autoregressive tokens & reasoning chains.", slugs: ["chatbot"] },
  { id: 11, title: "Write an engineering brief", blurb: "Specifications, not wishes. Problem framing is 80%.", tag: "harder", slugs: ["brief"] },
  { id: 12, title: "You are the editor", blurb: "Fact-checking, rigor, and subtraction.", tag: "harder", slugs: ["editor"] },
  { id: 13, title: "Learn one tool properly", blurb: "Depth over distraction. Beware shiny objects.", tag: "harder", slugs: ["one-tool"] },
  { id: 14, title: "How a team expects you to use it", blurb: "Extreme ownership & professional accountability.", tag: "harder", slugs: ["at-work"] },
  { id: 15, title: "Structured data & telemetry", blurb: "Empirical reality vs narrative. Arithmetic counts.", tag: "harder", slugs: ["sheets"] },
  { id: 16, title: "Autonomous steps & agents", blurb: "Loops, tool use, MCP, and safeguards.", tag: "harder", slugs: ["agents"] },
  { id: 17, title: "Answer from a trusted document", blurb: "RAG architectures & epistemic hygiene.", tag: "harder", slugs: ["documents"] },
  { id: 18, title: "Make one small thing", blurb: "Bias for action. Build your artifact.", tag: "harder", slugs: ["make-one"] },
  { id: 19, title: "Explain one idea", blurb: "Engineering judgment & ethical boundaries. Teach it simply.", tag: "explain", slugs: ["judgment"] },
  { id: 20, title: "Explain your project", blurb: "Final defence & lifelong compounding. Then the Workshop.", tag: "explain", slugs: ["show-your-work"] },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function lessonsIn(part: PartId): Lesson[] {
  return lessons.filter((lesson) => lesson.part === part);
}

export function lessonDay(slug: string): DayPlan | undefined {
  return days.find((day) => day.slugs.includes(slug));
}

export function lessonNeighbors(slug: string) {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: lessons[index - 1],
    next: lessons[index + 1],
  };
}
