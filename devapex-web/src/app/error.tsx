"use client";

import { useEffect } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="font-mono text-sm text-brand">Error</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Something went wrong</h1>
      <p className="mt-4 text-muted">
        Sorry, this page failed to load. Please try again. If it keeps happening, reach us on{" "}
        <a href={whatsappLink()} className="text-brand underline" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Try again
        </button>
        <Link href="/" className="rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-brand">
          Go home
        </Link>
      </div>
    </div>
  );
}
