"use client";

import { useEffect, useState } from "react";

export function TrailNotice({ message }: { message: string }) {
  const [visible, setVisible] = useState(false);

  // Key tied to the message content so any future new message will show up once
  const storageKey = `malikai-notice-${message.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`;

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(storageKey);
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, [storageKey]);

  function handleDismiss() {
    setVisible(false);
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
  }

  if (!visible || !message) return null;

  return (
    <aside
      aria-label="Note from the builder"
      className="relative flex items-start justify-between gap-3 rounded-2xl border-2 border-[#e4cc9f] bg-gradient-to-r from-[#fffdfa] via-[#fffbf2] to-[#fbf4e4] p-4 text-[#53361a] shadow-md sm:items-center sm:rounded-3xl sm:p-5"
    >
      <div className="flex items-start gap-3 sm:items-center">
        <span className="text-2xl select-none sm:text-3xl" aria-hidden="true">
          🤖
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#a56b2b]">
            Note from builder
          </p>
          <p className="mt-0.5 text-base font-semibold leading-snug sm:text-lg text-slate-900">
            {message}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-full bg-[#f0deb8] px-3.5 py-1.5 text-xs font-bold text-[#825424] transition-colors hover:bg-[#e7d1a3] active:scale-95 sm:text-sm shadow-2xs cursor-pointer"
      >
        Got it 👍
      </button>
    </aside>
  );
}
