const features = [
  {
    title: "Next.js App Router",
    description:
      "Modern routing with React Server Components — fast, flexible, and production-ready.",
  },
  {
    title: "PM2 Process Manager",
    description:
      "Keep your Node.js app running 24/7 with auto-restart, logs, and zero-downtime reloads.",
  },
  {
    title: "Nginx Reverse Proxy",
    description:
      "Route traffic to your app, terminate SSL, and serve static assets efficiently on your VPS.",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          VPS Deploy Demo
        </div>

        <h1 className="max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Next.js VPS Deploy Demo
        </h1>

        <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg">
          A simple demo site for testing Next.js deployment on a VPS using{" "}
          <span className="font-mono text-emerald-400">PM2</span> and an{" "}
          <span className="font-mono text-emerald-400">Nginx</span> reverse
          proxy.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-500 px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 sm:w-auto"
          >
            View Demo
          </a>
          <a
            href="#deploy-guide"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-8 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto"
          >
            Deploy Guide
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Stack Features
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">
            Everything you need to run a Next.js app on your own server.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-emerald-500/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-sm text-emerald-400">
                  $
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Guide Section */}
      <section id="deploy-guide" className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Deploy Guide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Build the app with{" "}
            <code className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-emerald-400">
              npm run build
            </code>
            , start it with PM2, and point Nginx to your Node.js port. If this
            page loads on your VPS — your deployment is working.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center font-mono text-xs text-zinc-500">
        nextjs-vps-deploy-demo · PM2 + Nginx
      </footer>
    </div>
  );
}
