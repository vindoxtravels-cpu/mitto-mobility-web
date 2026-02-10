type AbortishError = {
  code?: string;
  name?: string;
  message?: string;
};

function isAbortedConnReset(err: unknown): boolean {
  const e = err as AbortishError | null | undefined;
  const msg = (e?.message ?? "").toLowerCase();
  return e?.code === "ECONNRESET" || msg.includes("econnreset") || msg.includes("aborted");
}

function attachProcessHandlersOnce(): void {
  const g = globalThis as unknown as { __mittoProcessHandlersRegistered?: boolean };
  if (g.__mittoProcessHandlersRegistered) return;
  g.__mittoProcessHandlersRegistered = true;

  process.on("unhandledRejection", (reason) => {
    if (isAbortedConnReset(reason)) return;
    // eslint-disable-next-line no-console
    console.error("Unhandled promise rejection:", reason);
  });

  process.on("uncaughtException", (err) => {
    if (isAbortedConnReset(err)) return;
    // eslint-disable-next-line no-console
    console.error("Uncaught exception:", err);

    // Preserve default crash behavior for real exceptions (Node runtime only)
    process.exit(1);
  });
}

export function register(): void {
  attachProcessHandlersOnce();
}
