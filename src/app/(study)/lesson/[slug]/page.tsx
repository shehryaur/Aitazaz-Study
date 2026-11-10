import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { days, getLesson, lessonDay, lessonNeighbors, lessons, parts } from "@/content/trail";
import { LessonCheck } from "@/components/lesson-check";
import { LessonQuiz } from "@/components/lesson-quiz";
import { LessonVideo } from "@/components/lesson-video";
import { SourceLink } from "@/components/source-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { Brain, BookOpen, Wrench, CheckCircle2, Clock } from "lucide-react";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lesson/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson?.title ? `${lesson.title} · Day ${lessonDay(slug)?.id ?? ""}` : "Module" };
}

async function LessonBody({ params }: { params: PageProps<"/lesson/[slug]">["params"] }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const part = parts.find((item) => item.id === lesson.part);
  const day = lessonDay(lesson.slug);
  const { previous, next } = lessonNeighbors(lesson.slug);

  return (
    <article className="space-y-7">
      <p>
        <Link href="/" className="inline-flex min-h-11 items-center font-semibold text-[#a56b2b] underline-offset-4 hover:underline">
          ← Back to Trail Map
        </Link>
      </p>

      <header className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold bg-[#e4c07a]/40 text-[#8a5a32] px-3 py-1 rounded-full uppercase">
            {day ? `Day ${day.id} of ${days.length}` : part?.title}
            {day?.tag ? ` · ${day.tag}` : ""}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            <Clock className="size-3" /> 30-Minute Daily Module
          </span>
        </div>

        <h1 className="mt-2 text-3xl leading-tight text-balance break-words sm:text-5xl font-heading">
          {lesson.title}
        </h1>
        <p className="mt-3 text-base leading-7 break-words text-foreground/80 sm:text-lg sm:leading-8">
          {lesson.summary}
        </p>

        {/* 30-Minute Session Breakdown */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-2xl bg-card/70 border border-border/80 p-3 text-xs">
          <div className="flex items-center gap-2 p-1">
            <BookOpen className="size-4 text-cyan-600 shrink-0" />
            <div>
              <p className="font-bold text-foreground">10 Mins</p>
              <p className="text-muted-foreground">Core AI &amp; Robotics</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <Brain className="size-4 text-indigo-600 shrink-0" />
            <div>
              <p className="font-bold text-foreground">6 Mins</p>
              <p className="text-muted-foreground">How to Learn &amp; Mindset</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <Wrench className="size-4 text-amber-600 shrink-0" />
            <div>
              <p className="font-bold text-foreground">8 Mins</p>
              <p className="text-muted-foreground">Hands-on Practice</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold text-foreground">6 Mins</p>
              <p className="text-muted-foreground">Interactive Test</p>
            </div>
          </div>
        </div>
      </header>

      {/* Part 1: Core AI & Robotics Concept */}
      <section className="min-w-0 space-y-4 text-base leading-7 break-words sm:leading-8 text-foreground/90">
        <div className="flex items-center gap-2 border-b border-border/60 pb-2">
          <BookOpen className="size-5 text-[#a56b2b]" />
          <h2 className="text-xl font-heading font-bold text-foreground">Part 1: The Core Concept</h2>
        </div>
        {lesson.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {/* Golden Takeaway */}
      <aside className="rounded-[1.6rem] bg-[#fff4dd] border border-[#e4c07a]/60 px-5 py-4 shadow-2xs">
        <p className="text-xs font-bold tracking-wider text-[#a56b2b] uppercase">Engineering Rule</p>
        <p className="mt-1 text-lg font-heading leading-7 break-words text-[#422915]">{lesson.remember}</p>
      </aside>

      {/* Part 2: Life Learning & How to Learn Section */}
      {lesson.lifeLesson ? (
        <section className="min-w-0 space-y-4 rounded-[1.6rem] border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-sky-50/50 to-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
            <div className="flex items-center gap-2">
              <Brain className="size-5 text-indigo-600" />
              <div>
                <p className="text-[11px] font-bold tracking-wider text-indigo-700 uppercase">Part 2: How to Learn &amp; Life Wisdom</p>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">{lesson.lifeLesson.title}</h2>
              </div>
            </div>
            <span className="font-mono text-xs text-indigo-600 bg-indigo-100/70 px-2 py-0.5 rounded-full font-semibold">
              ~6 min
            </span>
          </div>

          <p className="text-sm font-semibold text-indigo-900 italic">
            Mental Model: {lesson.lifeLesson.concept}
          </p>

          <div className="space-y-3 text-base leading-7 text-slate-800">
            {lesson.lifeLesson.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="rounded-xl bg-white/90 border border-indigo-200/80 p-3.5 text-sm text-indigo-950 font-medium">
            <span className="font-bold text-indigo-700 uppercase tracking-wide text-xs block mb-1">
              🔑 Life Takeaway:
            </span>
            {lesson.lifeLesson.takeaway}
          </div>
        </section>
      ) : null}

      {/* Video Deep Dive */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-wider text-[#a56b2b] uppercase">Watch &amp; Absorb</p>
          <span className="font-mono text-xs text-muted-foreground">{lesson.video.title}</span>
        </div>
        <p className="text-sm leading-6 break-words text-muted-foreground">{lesson.watch}</p>
        <LessonVideo id={lesson.video.id} title={lesson.video.title} />
      </div>

      {/* Part 3: Hands-on Practice */}
      <section className="min-w-0 space-y-3 overflow-x-clip rounded-[1.6rem] border border-border bg-card/90 p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
          <div className="flex items-center gap-2">
            <Wrench className="size-5 text-amber-600" />
            <div>
              <p className="text-xs font-bold tracking-wider text-[#a56b2b] uppercase">Part 3: 8-Minute Build Lab</p>
              <h2 className="text-2xl font-heading">Do this hands-on</h2>
            </div>
          </div>
          <span className="font-mono text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            ~8 mins
          </span>
        </div>
        <ol className="list-decimal space-y-3 pl-5 text-base leading-7 text-foreground/90">
          {lesson.practice.map((step) => (
            <li key={step} className="break-words whitespace-pre-wrap">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Part 4: Interactive Test (Mcq + Open prompt) */}
      <LessonQuiz quiz={lesson.quiz} />

      {/* Source Reference */}
      <div className="grid gap-3">
        <SourceLink source={lesson.source} primary />
        {lesson.deeper ? <SourceLink source={lesson.deeper} /> : null}
      </div>

      {/* Completion Check */}
      <LessonCheck slug={lesson.slug} />

      {/* Navigation */}
      <nav className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        {previous ? (
          <Link
            href={`/lesson/${previous.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), "h-12 w-full justify-center rounded-full bg-white/80 px-5 text-base sm:w-auto")}
          >
            ← Previous: {previous.title}
          </Link>
        ) : null}
        <Link
          href={next ? `/lesson/${next.slug}` : "/finale"}
          className={cn(buttonVariants(), "h-12 w-full justify-center rounded-full px-6 text-base sm:w-auto", !previous && "sm:ml-auto")}
        >
          {next ? `Next: Day ${day ? day.id + 1 : 2} →` : "Enter the Robotics Workshop 🏆"}
        </Link>
      </nav>
    </article>
  );
}

export default function LessonPage({ params }: PageProps<"/lesson/[slug]">) {
  return (
    <Suspense
      fallback={
        <div className="rounded-[2rem] border border-border bg-card/80 p-8 text-center">
          <p className="font-heading text-2xl">Loading robotics module…</p>
        </div>
      }
    >
      <LessonBody params={params} />
    </Suspense>
  );
}
