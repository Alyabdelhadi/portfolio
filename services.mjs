// Builds one static, crawlable page per service into dist/services/<slug>.html (served at /services/<slug> via vercel.json cleanUrls).
// Edit the `services` array to change copy; every claim here must stay true to the real projects in src/data/catalog.ts.
import { mkdirSync, writeFileSync } from "node:fs";

const SITE = "https://aliabedelhadi.com";
const WA = "https://wa.me/96176618326";

const services = [
  {
    slug: "flutter-app-development",
    name: "Flutter & Mobile App Development",
    title: "Flutter & Mobile App Developer in Beirut, Lebanon — Ali Abdelhadi",
    description: "Freelance Flutter and Kotlin developer in Beirut. iOS and Android apps from one codebase, built from architecture through store release.",
    h1: "Flutter & mobile app development",
    lede: "iOS and Android apps from a single Flutter codebase, or native Android with Kotlin and Jetpack Compose, taken from architecture to the store.",
    build: [
      "Cross-platform apps for iOS and Android with Flutter",
      "Native Android apps with Kotlin and Jetpack Compose",
      "Apps connected to your own API, database and payments",
      "Real-time features: live updates, multiplayer, notifications",
      "Store release on Google Play and the App Store",
    ],
    work: [
      ["MedVault", "Healthcare app connecting patients with clinics to view lab results securely. Flutter, iOS + Android.", "https://play.google.com/store/apps/details?id=com.gtonics.medvault"],
      ["AiPoker", "Real-time mobile game built with Flutter.", "https://ai9poker.com/install"],
      ["Linkled", "Social app built with Flutter.", "https://play.google.com/store/apps/details?id=com.linkled.app"],
      ["Yerker", "Music streaming app for Android.", "https://play.google.com/store/apps/details?id=com.nascode.yerker"],
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Ionic", "MVVM", "Clean Architecture", "REST APIs"],
    faq: [
      ["Flutter or native: which should I choose?", "Flutter is usually the better choice when you need iOS and Android at once with one budget. Native Kotlin makes sense when the app is Android-only or depends heavily on platform-specific features. I build both and recommend based on the product, not the tool."],
      ["Can you build the backend too?", "Yes. I build the API, database and admin side with .NET or Laravel, and integrate payments, so the app and the system behind it come from one developer."],
      ["Do you publish the app to the stores?", "Yes. I handle the Google Play and App Store release, including builds, listings and review requirements."],
      ["How much does a mobile app cost?", "It depends on the screens, integrations and backend involved. Send a short description of what the app needs to do and I'll reply with a scoped, fixed quote."],
    ],
  },
  {
    slug: "payment-integration",
    name: "Payment Gateway Integration",
    title: "Payment Integration Developer (Stripe, Areeba, Monty) in Lebanon — Ali Abdelhadi",
    description: "Freelance developer for Stripe, Areeba and Monty payment integration in Lebanon. One-time and recurring payments, webhooks and reliable transaction flows.",
    h1: "Payment gateway integration",
    lede: "Stripe, Areeba and Monty integrated into your website or app, with one-time and recurring payments, webhooks and transaction records you can trust.",
    build: [
      "Card payments with Stripe, Areeba (Lebanon) and Monty",
      "One-time and recurring (subscription) payments",
      "Webhooks that confirm every payment server-side",
      "Transaction records, receipts and confirmations",
      "Checkout flows for stores, donations and bookings",
    ],
    work: [
      ["CCCL", "Donation platform with one-time and recurring giving across Stripe, Areeba and Monty, with webhook-driven transaction workflows. .NET + Angular.", "https://www.cccl.org.lb/"],
      ["Unipak The Shop", "Complete e-commerce store: catalog, cart, checkout and orders, with an API and database behind every step.", "https://www.unipaktheshop.com/"],
    ],
    stack: ["Stripe", "Areeba", "Monty", ".NET", "ASP.NET", "Angular", "SQL Server", "Webhooks", "REST APIs"],
    faq: [
      ["Which payment gateways work in Lebanon?", "Areeba is a common choice for Lebanese cards and banks, Monty is another local option, and Stripe works for international payments where the business is eligible. I've integrated all three."],
      ["Can you add payments to my existing website or app?", "Yes. I add the payment flow to your current system, whether it's .NET, Angular, Laravel or a mobile app, without rebuilding what already works."],
      ["Do you support recurring payments?", "Yes. Recurring giving and subscriptions, with webhooks so each renewal is recorded and confirmed on the server."],
      ["How do you make sure no payment is lost?", "Payments are confirmed by the gateway's webhook on the server, not just by the browser redirect, and every transaction is stored so it can be reconciled."],
    ],
  },
  {
    slug: "web-development",
    name: "Web & Backend Development",
    title: "Web & .NET Developer in Beirut, Lebanon (ASP.NET, Angular) — Ali Abdelhadi",
    description: "Freelance web developer in Beirut. ASP.NET, .NET Core, Angular and Laravel systems: e-commerce, dashboards, CRMs and real-time platforms.",
    h1: "Web & backend development",
    lede: "Business systems, platforms and stores built with .NET, Angular and Laravel, designed around the process they replace and the data behind them.",
    build: [
      "Custom web platforms with ASP.NET / .NET Core and Angular",
      "E-commerce stores with catalog, cart, checkout and orders",
      "Dashboards, CMS and CRM systems for internal teams",
      "Real-time systems that stay accurate under load",
      "REST APIs and databases (SQL Server, MySQL, PostgreSQL)",
    ],
    work: [
      ["GS1 Lebanon", "Replaced a manual process for issuing barcodes, invoices and certificates with an ASP.NET system.", "https://www.gs1lebanon.org/"],
      ["YMP", "Real-time voting system with live voting windows, built to stay accurate when many voters act at once.", "https://www.ymplebanon.com/"],
      ["Mohamad Elhabib Real Estate", "Property platform with business logic, calculators and lead integrations exposed through APIs.", "https://alhabib.37-187-35-120.plesk.page/"],
      ["Unipak The Shop", "Full e-commerce store for a packaging manufacturer.", "https://www.unipaktheshop.com/"],
    ],
    stack: ["ASP.NET", ".NET Core", "VB.NET", "Angular", "TypeScript", "Laravel", "PHP", "SignalR", "SQL Server", "MySQL", "PostgreSQL", "Docker"],
    faq: [
      ["Can you replace our manual process with software?", "Yes. That's what the GS1 system did: barcode, invoice and certificate issuing moved from manual work into one ASP.NET system with a database behind it."],
      ["Do you build real-time systems?", "Yes. YMP's voting platform handles many voters acting in the same window and still produces accurate results, using SignalR-style live updates."],
      ["Can you take over or extend an existing system?", "Yes. I work with existing .NET, Angular and Laravel codebases, add features, and fix what's slowing the business down."],
      ["Do you also host and deploy?", "Yes. I set up deployment with Git, CI/CD pipelines and Docker so updates ship reliably."],
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Integration & Workflow Automation",
    title: "AI Integration & n8n Automation Developer in Lebanon — Ali Abdelhadi",
    description: "Freelance developer for AI integrations and n8n workflow automation in Lebanon. Connect AI APIs to your systems and automate repetitive business work.",
    h1: "AI integration & workflow automation",
    lede: "AI APIs and n8n workflows connected to the systems you already use, so repetitive work runs on its own and your data does more.",
    build: [
      "AI features inside your web or mobile app (ChatGPT API and similar)",
      "n8n workflows that move data between your tools automatically",
      "Automated reports, notifications and follow-ups",
      "Document and message processing with AI",
      "Integrations between your CRM, database and third-party services",
    ],
    work: [
      ["Custom CRM & dashboards", "Internal client-management and dashboard systems where automation removes manual steps. Links available upon request.", ""],
    ],
    stack: ["ChatGPT API", "Claude Code", "n8n", "REST APIs", ".NET", "Webhooks"],
    faq: [
      ["What can be automated?", "Anything that follows the same steps every time: moving data between tools, sending follow-ups, generating reports, sorting incoming requests. If you can describe the steps, it can usually be automated."],
      ["Do I need to replace my current tools?", "No. n8n and AI APIs connect to what you already use, so the automation fits around your existing systems."],
      ["Is my data safe with AI tools?", "Integrations are designed so only the data a task needs is sent, using the provider's API rather than consumer chat apps."],
      ["How do we start?", "Describe one repetitive task that takes your team time. I'll propose how to automate it and quote it as a small first project."],
    ],
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const page = (s) => {
  const url = `${SITE}/services/${s.slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url,
        serviceType: s.name,
        areaServed: [{ "@type": "Country", name: "Lebanon" }, "Worldwide"],
        provider: { "@type": "Person", "@id": `${SITE}/#person`, name: "Ali Abdelhadi", url: `${SITE}/` },
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: s.name, item: url },
        ],
      },
    ],
  };
  const others = services.filter((o) => o.slug !== s.slug);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6Q155F66F8"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6Q155F66F8');</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(s.title)}</title>
<meta name="description" content="${esc(s.description)}" />
<link rel="canonical" href="${url}" />
<link rel="icon" href="/favicon.png" type="image/png" />
<meta name="theme-color" content="#F5F5F3" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Ali Abdelhadi" />
<meta property="og:title" content="${esc(s.title)}" />
<meta property="og:description" content="${esc(s.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/img/og.png?v=2" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..800&family=Geist+Mono:wght@400;500&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>
  :root { --bg: #F5F5F3; --ink: #111; --muted: #6A6A6A; --line: #DAD9D4; --blue: #045AC9; --sans: "Geist", system-ui, -apple-system, sans-serif; --mono: "Geist Mono", ui-monospace, "Cascadia Mono", monospace; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 1.05rem/1.6 var(--sans); }
  a { color: inherit; }
  .wrap { max-width: 880px; margin: 0 auto; padding: 0 16px; }
  @media (min-width: 640px) { .wrap { padding: 0 32px; } }
  header { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; }
  header img { height: 28px; width: auto; display: block; }
  header nav { display: flex; gap: 18px; font: 13px var(--mono); }
  header nav a { text-decoration: none; color: var(--muted); }
  header nav a:hover { color: var(--blue); }
  .crumb { font: 12px var(--mono); color: var(--muted); margin: 40px 0 16px; letter-spacing: .06em; text-transform: uppercase; }
  .crumb a { text-decoration: none; }
  h1 { font-size: clamp(2.2rem, 6vw, 3.8rem); line-height: 1.03; letter-spacing: -.035em; color: var(--blue); margin: 0; font-weight: 600; text-wrap: balance; }
  .lede { font-size: clamp(1.1rem, 2vw, 1.3rem); color: var(--muted); max-width: 46ch; margin: 20px 0 0; }
  h2 { font-size: 1.5rem; letter-spacing: -.02em; margin: 64px 0 16px; font-weight: 600; }
  ul.list { padding: 0; margin: 0; list-style: none; border-top: 1px solid var(--line); }
  ul.list li { padding: 12px 0; border-bottom: 1px solid var(--line); }
  .work { display: grid; gap: 12px; }
  .work article { background: #fff; border: 1px solid var(--line); padding: 18px 20px; }
  .work h3 { margin: 0 0 4px; font-size: 1.1rem; }
  .work p { margin: 0; color: var(--muted); }
  .work a { color: var(--blue); }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0; list-style: none; }
  .tags li { font: 12px var(--mono); border: 1px solid var(--line); padding: 6px 10px; background: #fff; }
  details { border-bottom: 1px solid var(--line); padding: 14px 0; }
  details:first-of-type { border-top: 1px solid var(--line); }
  summary { cursor: pointer; font-weight: 600; }
  details p { color: var(--muted); margin: 10px 0 0; }
  .cta { margin: 72px 0 0; padding: 32px; background: #fff; border: 1px solid var(--line); }
  .cta h2 { margin: 0 0 8px; }
  .cta p { margin: 0 0 20px; color: var(--muted); }
  .btn { display: inline-block; padding: 13px 20px; background: var(--blue); color: #fff; text-decoration: none; font: 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; margin: 0 8px 8px 0; }
  .btn--ghost { background: transparent; color: var(--blue); border: 1px solid var(--blue); }
  .btn:focus-visible, a:focus-visible, summary:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
  .more { display: flex; flex-wrap: wrap; gap: 8px 20px; padding: 0; list-style: none; }
  .more a { color: var(--blue); }
  footer { margin: 72px 0 40px; font: 12px var(--mono); color: var(--muted); }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <a href="/" aria-label="Ali Abdelhadi, home"><img src="/img/logo.webp" alt="ALI." width="122" height="56" /></a>
    <nav aria-label="Main"><a href="/#work">Work</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
  </header>
  <main>
    <p class="crumb"><a href="/">Home</a> / Services</p>
    <h1>${esc(s.h1)}</h1>
    <p class="lede">${esc(s.lede)}</p>

    <h2>What I build</h2>
    <ul class="list">${s.build.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>

    <h2>Related work</h2>
    <div class="work">${s.work.map(([n, d, l]) => `<article><h3>${l ? `<a href="${l}" target="_blank" rel="noopener">${esc(n)}</a>` : esc(n)}</h3><p>${esc(d)}</p></article>`).join("")}</div>

    <h2>Stack</h2>
    <ul class="tags">${s.stack.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>

    <h2>Questions</h2>
    ${s.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n    ")}

    <section class="cta" aria-labelledby="cta-title">
      <h2 id="cta-title">Have something that needs to be built?</h2>
      <p>Ali Abdelhadi, freelance senior software developer in Beirut, Lebanon. Tell me the problem and I'll reply with how I'd build it.</p>
      <a class="btn" href="${WA}" target="_blank" rel="noopener">Message on WhatsApp</a>
      <a class="btn btn--ghost" href="/#contact">Other ways to reach me</a>
    </section>

    <h2>Other services</h2>
    <ul class="more">${others.map((o) => `<li><a href="/services/${o.slug}">${esc(o.name)}</a></li>`).join("")}</ul>
  </main>
  <footer>© ${new Date().getFullYear()} Ali Abdelhadi · Freelance Software Developer · Beirut, Lebanon</footer>
</div>
</body>
</html>
`;
};

mkdirSync("dist/services", { recursive: true });
for (const s of services) writeFileSync(`dist/services/${s.slug}.html`, page(s));
console.log("services:", services.map((s) => s.slug).join(", "));
