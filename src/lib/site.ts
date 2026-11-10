import "server-only";

export const site = {
  title: "Malikai · Robotics & AI Trail",
  description:
    "A private, hands-on 20-day journey into artificial intelligence, robotics, reasoning models, and mental models for Aitazaz.",
  /** Learner name on the letter. Configured via LEARNER_NAME or falls back to "Aitazaz". */
  learnerName: process.env.LEARNER_NAME?.trim() || "Aitazaz",
  friendNote:
    process.env.FRIEND_NOTE?.trim() ||
    "Congratulations on reaching the end of the trail, Aitazaz! You worked through every lesson, built real mental models, and proved how capable you are. Keep building, stay curious, and shape the future of robotics and intelligence.",
  /** Nameless sign-off or customizable friend signature. */
  friendSign: process.env.FRIEND_SIGN?.trim() || "Your friend",
  finaleFun:
    "The robot companion is doing a victory spin! Its servos are humming, its core is glowing bright, and it saved this quiet workshop for the day you finished.",
  finaleNext:
    "You are in a great position now to explore robotics, physical computing, and modern AI on your own. Take them one project at a time. You already know how to learn.",
  trailNotice:
    process.env.TRAIL_NOTICE?.trim() ||
    "bhai roz aik session complete kr liya kr total 30 minute lagain ge",
};

export function learnerLabel() {
  const name = site.learnerName.trim();
  return name || "Aitazaz";
}
