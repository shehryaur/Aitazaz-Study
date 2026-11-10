import { Suspense } from "react";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { DenSwitch } from "@/components/den-switch";
import { LockDenButton } from "@/components/lock-den";
import { PasswordForm } from "@/components/password-form";
import { GearMark, Robot } from "@/components/robot";
import { cookieMatches, FINALE_COOKIE, FINALE_HEADER } from "@/lib/auth";
import { learnerLabel, site } from "@/lib/site";

export const metadata = {
  title: "The Robotics Workshop",
};

const soloConcepts = [
  { title: "API", body: "A programmatic doorway where one system requests services or data from another." },
  { title: "REST & JSON", body: "The standard language of the web. Structured objects and keys sent over HTTP endpoints." },
  { title: "MCP (Model Context Protocol)", body: "The open standard enabling AI agents to connect to local tools, databases, and robot interfaces." },
  { title: "Reasoning Models & Thinking Tokens", body: "Modern models (o-series, Claude 3.7, DeepSeek R1) that spend compute thinking before committing to an answer." },
  { title: "Multimodal Embeddings", body: "Converting text, images, sensor telemetry, and physical states into geometric vector spaces for comparison." },
  { title: "Sensors & Perception", body: "How robots perceive: LiDAR for depth, IMUs for orientation, and stereo vision for spatial awareness." },
  { title: "Actuators & Servos", body: "The muscles of robotics: brushless motors, stepper drivers, and servo loops translating digital commands into torque." },
  { title: "Kinematics & Motion Planning", body: "Forward and inverse kinematics: calculating exact joint angles needed to position a robot gripper in 3D space." },
  { title: "Embodied AI", body: "Physical AI models that learn policies to interact with real-world objects through sensorimotor feedback loops." },
  { title: "ROS 2 (Robot Operating System)", body: "The industry middleware for robotics, managing publish/subscribe nodes, action servers, and hardware drivers." },
  { title: "RAG & Knowledge Grounding", body: "Retrieving verified documents before answering, anchoring predictions to ground-truth documentation." },
  { title: "Feedback Loops & Guardrails", body: "Active verification layers that detect hallucinations, validate parameters, and maintain safety before execution." },
];

function LockedDoor({ denied }: { denied: boolean }) {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-bold tracking-wider text-[#a56b2b] uppercase">Final Milestone</p>
        <h1 className="mt-2 text-3xl leading-tight text-balance break-words sm:text-5xl">The Robotics Workshop is Locked</h1>
        <p className="mt-3 text-lg leading-8 text-foreground/80">
          This workshop unlocks once you have completed all twenty days, and your friend gives you the secret access key. Until then, stay focused on today&apos;s build.
        </p>
      </header>
      
      {/* High-tech Vault Door SVG / Graphic */}
      <div className="mx-auto w-full max-w-xs overflow-x-clip py-4" aria-hidden="true">
        <div className="relative mx-auto h-64 w-52 rounded-t-[3rem] rounded-b-2xl border-4 border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <span className="flex gap-1.5">
              <span className="size-2 rounded-full bg-red-500 animate-pulse" />
              <span className="size-2 rounded-full bg-amber-500" />
              <span className="size-2 rounded-full bg-slate-600" />
            </span>
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">Airlock Secured</span>
          </div>

          {/* Central Vault Wheel */}
          <div className="my-auto mx-auto size-28 rounded-full border-4 border-dashed border-slate-600 bg-slate-950/80 flex items-center justify-center shadow-inner relative">
            <GearMark className="size-16 text-slate-500 animate-[spin_12s_linear_infinite]" />
            <span className="absolute font-mono text-[11px] font-bold text-amber-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              LOCKED
            </span>
          </div>

          <div className="border-t border-slate-700 pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>TERMINAL 01</span>
            <span className="text-amber-400 font-semibold">STATUS: WAITING</span>
          </div>
        </div>
      </div>

      <section className="rounded-[2rem] border border-border bg-card/90 p-5 shadow-sm">
        <h2 className="text-2xl">Access Key for the Workshop</h2>
        <div className="mt-4">
          <PasswordForm
            kind="finale"
            label="Authorize Access"
            hint="This is the final secret phrase given after completing all modules."
            denied={denied}
          />
        </div>
      </section>

      <p>
        <Link href="/" className="inline-flex min-h-12 items-center font-semibold text-[#a56b2b] underline-offset-4 hover:underline">
          Return to the trail
        </Link>
      </p>
    </div>
  );
}

function OpenDen() {
  const name = learnerLabel();
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-wide text-emerald-700 uppercase">
        <span className="size-2.5 rounded-full bg-emerald-500 animate-ping" />
        Robotics Workshop Access Granted
      </div>

      <div className="overflow-clip px-2 py-4 sm:px-3">
        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute inset-x-3 top-3 bottom-1 rotate-[0.8deg] rounded-[4px] bg-[#e2e8f0] shadow-sm motion-reduce:rotate-0"
          />
          <article
            aria-label={`A letter for ${name}`}
            className="relative -rotate-[0.45deg] rounded-[4px] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_50%,#f1f5f9_100%)] p-4 text-[#1e293b] shadow-[0_16px_36px_-16px_rgba(15,23,42,0.35)] motion-reduce:rotate-0 sm:p-8 border-2 border-slate-300"
          >
            <div className="border-2 border-dashed border-slate-300 p-6 sm:p-10 rounded-sm">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono tracking-widest text-cyan-600 uppercase">COMMISSION COMPLETE</p>
                  <h1 className="font-heading text-3xl leading-tight break-words sm:text-4xl">For {name}</h1>
                  <p className="mt-1 text-sm text-slate-500">The day you completed the robotics &amp; AI trail</p>
                </div>
                <Robot celebrating waving className="size-16 shrink-0 sm:size-20" />
              </header>

              <div className="mt-6 space-y-4">
                <p className="font-heading text-2xl leading-relaxed text-pretty break-words sm:text-3xl text-slate-900">
                  {site.friendNote}
                </p>
                <p className="font-sans text-base leading-7 text-slate-700 sm:text-lg">
                  {site.finaleFun}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-end gap-3 text-slate-800">
                <p className="font-heading text-2xl sm:text-3xl">{site.friendSign}</p>
                <GearMark className="size-8 text-cyan-600" />
              </div>
            </div>
          </article>
        </div>
      </div>

      <section>
        <h2 className="text-2xl text-foreground/90 sm:text-3xl">What You Can Build Next</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
          {site.finaleNext}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {soloConcepts.map((concept) => (
            <article key={concept.title} className="min-w-0 rounded-2xl border border-border/80 bg-card/80 p-4 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-cyan-500" />
                <h3 className="text-lg font-bold break-words">{concept.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 break-words text-foreground/75">{concept.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link href="/" className="inline-flex min-h-12 items-center justify-center text-base font-semibold text-[#a56b2b] underline-offset-4 hover:underline sm:justify-start">
          Back to the trail
        </Link>
        <LockDenButton />
      </div>
    </div>
  );
}

async function FinaleBody({
  searchParams,
}: {
  searchParams: Promise<{ denied?: string }>;
}) {
  const [headerStore, jar, params] = await Promise.all([headers(), cookies(), searchParams]);
  const open = cookieMatches(
    "finale",
    headerStore.get(FINALE_HEADER) ?? jar.get(FINALE_COOKIE)?.value,
  );
  return (
    <DenSwitch
      open={open}
      openView={<OpenDen />}
      lockedView={<LockedDoor denied={!open && params.denied === "1"} />}
    />
  );
}

export default function FinalePage({ searchParams }: PageProps<"/finale">) {
  return (
    <Suspense
      fallback={
        <div className="rounded-[2rem] border border-border bg-card/80 p-8 text-center">
          <p className="font-heading text-2xl">Scanning authorization codes…</p>
        </div>
      }
    >
      <FinaleBody searchParams={searchParams} />
    </Suspense>
  );
}
