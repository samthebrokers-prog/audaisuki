// Sends a custom event to Vercel Web Analytics (the script is loaded in app/layout.tsx).
// Events show under Analytics → Events in the Vercel dashboard.
// Never send personal details (names, emails, exact pay) — only simple labels.
type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    va?: (...args: unknown[]) => void;
    vaq?: unknown[][];
  }
}

export function track(name: string, data?: EventData) {
  if (typeof window === 'undefined') return;
  try {
    window.va =
      window.va ||
      function (...args: unknown[]) {
        (window.vaq = window.vaq || []).push(args);
      };
    window.va('event', { name, data });
  } catch {
    // Analytics must never break the page.
  }
}
