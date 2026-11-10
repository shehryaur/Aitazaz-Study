import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const GATE_COOKIE = "ht_gate";
export const FINALE_COOKIE = "ht_finale";
export const GATE_HEADER = "x-ht-gate";
export const FINALE_HEADER = "x-ht-finale";

export type GateKind = "gate" | "finale";

const DEFAULT_PASSWORDS: Record<GateKind, string> = {
  gate: "bunty",
  finale: "oapnaytuheeha",
};

const ACCEPTED_ALIASES: Record<GateKind, string[]> = {
  gate: ["bunty", "forleahkim", "pawprint-trail", "malikai"],
  finale: ["oapnaytuheeha", "dont.forget.to.smile.leah.kim", "pawprint-trail-complete", "malikai-complete"],
};

function secretFor(kind: GateKind) {
  if (kind === "finale") {
    const fromEnv = process.env.FINALE_PASSWORD?.trim();
    return fromEnv || DEFAULT_PASSWORDS.finale;
  }
  const fromEnv = process.env.SITE_PASSWORD?.trim();
  return fromEnv || DEFAULT_PASSWORDS.gate;
}

export function passwordsReady(kind: GateKind) {
  return Boolean(secretFor(kind));
}

export function tokenFor(kind: GateKind, customSecret?: string) {
  const secret = (customSecret ?? secretFor(kind)).trim().toLowerCase();
  if (!secret) return "";
  return createHmac("sha256", secret).update(`malikai-trail:${kind}`).digest("hex");
}

function legacyTokenFor(kind: GateKind, customSecret?: string) {
  const secret = (customSecret ?? secretFor(kind)).trim().toLowerCase();
  if (!secret) return "";
  return createHmac("sha256", secret).update(`pawprint-trail:${kind}`).digest("hex");
}

function sameHash(left: string, right: string) {
  const a = createHash("sha256").update(left).digest();
  const b = createHash("sha256").update(right).digest();
  return timingSafeEqual(a, b);
}

export function passwordMatches(kind: GateKind, attempt: string) {
  if (!attempt) return false;
  const cleanAttempt = attempt.trim().toLowerCase();
  const secret = secretFor(kind).trim().toLowerCase();
  if (sameHash(cleanAttempt, secret)) return true;

  // Also accept fallback aliases
  for (const alias of ACCEPTED_ALIASES[kind]) {
    if (sameHash(cleanAttempt, alias.toLowerCase())) return true;
  }
  return false;
}

export function cookieMatches(kind: GateKind, value: string | undefined) {
  if (!value) return false;
  const expected = tokenFor(kind);
  const legacyExpected = legacyTokenFor(kind);
  if (expected && sameHash(value, expected)) return true;
  if (legacyExpected && sameHash(value, legacyExpected)) return true;

  // Also check tokens for accepted aliases
  for (const alias of ACCEPTED_ALIASES[kind]) {
    const aliasToken = tokenFor(kind, alias);
    const legacyAliasToken = legacyTokenFor(kind, alias);
    if (aliasToken && sameHash(value, aliasToken)) return true;
    if (legacyAliasToken && sameHash(value, legacyAliasToken)) return true;
  }
  return false;
}

/** Secure cookies are dropped on http://localhost, so this follows the request, not NODE_ENV. */
export function requestIsHttps(request: Request) {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    const proto = forwarded.split(",")[0]?.trim().toLowerCase().replace(/:$/, "");
    if (proto === "https" || proto === "http") return proto === "https";
  }
  try {
    return new URL(request.url).protocol === "https:";
  } catch {
    return false;
  }
}

export function passCookieOptions(request: Request) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: requestIsHttps(request),
    path: "/",
  };
}

/** Only paths inside the trail. Used after the gate so a lesson click is not lost. */
export function safeNext(value: string | undefined | null) {
  if (!value) return null;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("://") || value.includes("\\")) return null;
  const path = value.split("?")[0];
  if (path === "/" || path === "/finale" || /^\/lesson\/[a-z0-9-]+$/.test(path)) return value;
  return null;
}

export function clearedCookieOptions(request: Request) {
  return {
    ...passCookieOptions(request),
    maxAge: 0,
  };
}
