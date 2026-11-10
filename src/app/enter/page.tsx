import { Suspense } from "react";
import type { Metadata } from "next";
import { Robot } from "@/components/robot";
import { PasswordForm } from "@/components/password-form";
import { safeNext } from "@/lib/auth";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Initialize Gate",
};

async function Gate({ searchParams }: { searchParams: Promise<{ denied?: string; next?: string }> }) {
  const params = await searchParams;
  const returnTo = safeNext(params.next);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-1 flex-col justify-center overflow-x-clip px-4 py-8">
      <section className="w-full min-w-0 rounded-[2rem] border border-border bg-card/90 p-5 shadow-sm sm:p-8">
        <Robot waving className="mx-auto w-28 sm:w-32" />
        <p className="mt-3 text-center text-xs font-bold tracking-widest text-[#a56b2b] uppercase">
          Robotics &amp; AI Trail
        </p>
        <h1 className="mt-1 text-center text-3xl sm:text-4xl leading-tight text-balance break-words">{site.title}</h1>
        <p className="mt-2 text-center text-sm font-semibold text-[#a56b2b]">Built for {site.learnerName}</p>
        <div className="mt-3 rounded-2xl border border-amber-300/70 bg-amber-50/80 px-4 py-2.5 text-center shadow-2xs">
          <p className="text-sm font-semibold text-amber-950">
            💬 bhai roz aik session complete kr liya kr total 30 minute lagain ge
          </p>
        </div>
        <p className="mt-3 text-center leading-7 text-foreground/80">
          Enter the access key to boot up your system and start today&apos;s session.
        </p>
        <div className="mt-6">
          <PasswordForm
            kind="gate"
            label="Enter the Trail"
            denied={params.denied === "1"}
            returnTo={returnTo}
          />
        </div>
      </section>
    </main>
  );
}

export default function EnterPage({ searchParams }: PageProps<"/enter">) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-1 flex-col justify-center overflow-x-clip px-4 py-8">
          <p className="text-center font-heading text-2xl">Initializing robotics terminal…</p>
        </main>
      }
    >
      <Gate searchParams={searchParams} />
    </Suspense>
  );
}
