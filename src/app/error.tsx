"use client";

import { Button } from "@/components/ui/button";
import { Robot } from "@/components/robot";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-lg flex-1 flex-col justify-center px-4 py-16 pb-40">
      <section className="rounded-[2rem] border border-border bg-card/90 p-8 text-center">
        <Robot className="mx-auto mb-4 w-20 opacity-80" />
        <h1 className="text-4xl">A glitch occurred</h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          The system stumbled, but your progress nodes are safely saved on this browser.
        </p>
        <Button type="button" onClick={reset} className="mt-6 h-12 rounded-full px-5 text-base">
          Reboot system
        </Button>
      </section>
    </main>
  );
}
