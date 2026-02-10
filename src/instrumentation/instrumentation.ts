export async function register(): Promise<void> {
  // Next.js runs instrumentation in both Node.js and Edge runtimes.
  // IMPORTANT: Do not use Node-only APIs (process.on, process.exit, fs, path, etc.) here at module scope,
  // because this file is evaluated for Edge too.

  if (process.env.NEXT_RUNTIME === "nodejs") {
    const mod = await import("./instrumentation.node");
    mod.register();
    return;
  }

  // Edge runtime: no-op
}
