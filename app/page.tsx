export const dynamic = "force-dynamic";

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

const deploySteps = [
  {
    step: 1,
    title: "Pull latest code",
    command: "git pull origin master",
  },
  {
    step: 2,
    title: "Install dependencies",
    command: "npm install",
  },
  {
    step: 3,
    title: "Build the app",
    command: "npm run build",
  },
  {
    step: 4,
    title: "Restart with PM2",
    command: "pm2 restart nextjs-vps-deploy-demo",
  },
  {
    step: 5,
    title: "Reload Nginx",
    command: "sudo nginx -t && sudo systemctl reload nginx",
  },
];

const architecture = [
  { label: "User", detail: "HTTPS request" },
  { label: "Nginx", detail: "Port 443 · SSL" },
  { label: "PM2", detail: "Keeps app alive" },
  { label: "Next.js", detail: "Port 3000" },
];

export default function Home() {
  const environment = process.env.NODE_ENV ?? "development";
  const serverTime = new Date().toISOString();

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
            href="#status"
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

      {/* Server Status Section */}
      <section id="status" className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Server Status
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">
            If you can see this page on your VPS, the deployment is working.
          </p>

          <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 font-mono text-sm">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-zinc-400">Status</span>
              <span className="inline-flex items-center gap-2 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800 py-4">
              <span className="text-zinc-400">Environment</span>
              <span className="text-white">{environment}</span>
            </div>
            <div className="flex flex-col gap-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-zinc-400">Server Time (UTC)</span>
              <span className="break-all text-emerald-400">{serverTime}</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Architecture Section */}
      <section id="architecture" className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Architecture
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">
            How a request travels from the browser to your Next.js app.
          </p>

          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
            {architecture.map((node, index) => (
              <div key={node.label} className="flex flex-col items-center gap-3 sm:flex-row">
                <div className="w-full min-w-[140px] rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 text-center sm:w-auto">
                  <p className="font-semibold text-white">{node.label}</p>
                  <p className="mt-1 font-mono text-xs text-emerald-400">
                    {node.detail}
                  </p>
                </div>
                {index < architecture.length - 1 && (
                  <span className="font-mono text-zinc-600 sm:px-1">
                    <span className="hidden sm:inline">→</span>
                    <span className="sm:hidden">↓</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-mono text-xs text-zinc-500">
            User → Nginx (443) → PM2 → Next.js (3000)
          </p>
        </div>
      </section>

      {/* Deploy Steps Section */}
      <section id="deploy-guide" className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Deploy Steps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">
            Run these commands on your VPS every time you deploy a new version.
          </p>

          <ol className="mt-12 space-y-4">
            {deploySteps.map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-sm font-bold text-emerald-400">
                    {item.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <code className="mt-2 block overflow-x-auto rounded-lg bg-zinc-900 px-3 py-2 font-mono text-xs text-emerald-400 sm:text-sm">
                      {item.command}
                    </code>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center font-mono text-xs text-zinc-500">
        nextjs-vps-deploy-demo · PM2 + Nginx
      </footer>
    </div>
  );
}
