import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 flex flex-col items-center px-6">

      {/* Hero */}
      <section className="mt-20 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-cyan-400">Short links</span> for a{" "}
          <span className="text-cyan-400">fast</span> web
        </h1>

        <p className="text-slate-400 text-lg mb-10">
          urlX helps you transform long, cluttered URLs into clean,
          reliable short links — simple, secure, and lightning fast.
        </p>

        <Link
          href="/shorten"
          className="inline-block px-8 py-3 rounded-lg font-semibold
            bg-cyan-500 text-slate-900
            hover:bg-cyan-400 transition
            shadow-lg shadow-cyan-500/25"
        >
          Try Now
        </Link>
      </section>

      {/* Value Proposition */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">

        <div className="p-6 rounded-xl bg-slate-900 border border-cyan-500/10
          hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            ⚡ Fast
          </h3>
          <p className="text-slate-400 text-sm">
            Generate and redirect links instantly with optimized performance.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-cyan-500/10
          hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            🔐 Secure
          </h3>
          <p className="text-slate-400 text-sm">
            Built with safety in mind to ensure trustworthy redirects.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-cyan-500/10
          hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            📱 Responsive
          </h3>
          <p className="text-slate-400 text-sm">
            Designed to look and feel great on every device.
          </p>
        </div>

      </section>

     

     

    </main>
  );
}
