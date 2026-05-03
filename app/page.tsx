export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl">ChurnIQ</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For SaaS Founders &amp; Customer Success Teams
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop guessing why customers{" "}
          <span className="text-[#58a6ff]">cancel</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          ChurnIQ connects to Stripe or Paddle, detects cancellations in real time, and automatically sends exit interview surveys — then surfaces the patterns killing your MRR.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-xl text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔗", title: "Webhook Integration", desc: "Plug into Stripe or Paddle in minutes. No code required." },
            { icon: "📧", title: "Automated Surveys", desc: "Customizable email surveys sent the moment a customer cancels." },
            { icon: "📊", title: "Churn Analytics", desc: "Visual dashboards reveal top cancellation reasons and trends." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, flat pricing</h2>
        <p className="text-[#8b949e] mb-12">Everything you need to understand and reduce churn.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited exit surveys",
              "Stripe & Paddle webhooks",
              "Customizable survey templates",
              "Churn analytics dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-xl hover:bg-[#79b8ff] transition-colors text-center"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does ChurnIQ detect cancellations?",
              a: "ChurnIQ listens to webhooks from Stripe or Paddle. When a subscription is cancelled, it triggers an automated survey email to that customer within minutes."
            },
            {
              q: "Can I customize the survey questions?",
              a: "Yes. You get a full survey editor to add, remove, or reorder questions. You can also customize the email template and branding."
            },
            {
              q: "What insights does the analytics dashboard provide?",
              a: "The dashboard groups cancellation reasons, tracks trends over time, and highlights the top factors driving churn so you can take targeted action."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} ChurnIQ. All rights reserved.</p>
      </footer>
    </main>
  )
}
