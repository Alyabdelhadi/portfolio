/** One solved problem and the system built for it. Array order is page order. */
export type Project = {
  id: string;
  category: string;
  question: string;
  name: string;
  kind: string;
  description: string;
  flow: string[];
  focus: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
  /** Real-time system: the flow shows a moving marker. */
  live?: boolean;
  /** Many actors entering at once (YMP). */
  fanIn?: boolean;
  /** The image is an app mark, not a screenshot. */
  mark?: boolean;
  /** The image is a portrait phone screenshot. */
  phone?: boolean;
  /** Several phone screenshots shown as a swiper (used instead of image). */
  images?: string[];
};

export const problems: Project[] = [
  {
    id: "cccl", category: "Payments",
    question: "How do you turn a donation into a reliable transaction?",
    name: "CCCL", kind: "Donation platform",
    description: "Built a donation platform supporting one-time and recurring giving with integrated payment providers and transaction workflows.",
    flow: ["Problem", "Payment", "Webhook", "Database", "Confirmation"],
    focus: [".NET", "Angular", "Stripe", "Areeba", "Monty", "SQL"],
    image: "/img/cccl.webp", imageAlt: "The CCCL donation platform homepage", link: "https://www.cccl.org.lb/",
  },
  {
    id: "medvault", category: "Healthcare",
    question: "How do you put a patient's lab results in their pocket, securely?",
    name: "MedVault", kind: "Healthcare app",
    description: "A healthcare app connecting patients with trusted clinics, so lab results can be viewed, tracked and managed securely from anywhere. One Flutter codebase for iOS and Android.",
    flow: ["Patient", "Mobile app", "API", "Clinic", "Results"],
    focus: ["Healthcare", "Lab results", "Clinic connection", "Secure records", "Flutter", "iOS + Android"],
    images: ["/img/medvault-1.webp", "/img/medvault-2.webp", "/img/medvault-3.webp"], imageAlt: "MedVault app screens", link: "https://play.google.com/store/apps/details?id=com.gtonics.medvault",
  },
  {
    id: "unipak", category: "E-commerce",
    question: "How do you turn a product catalog into a complete shopping experience?",
    name: "Unipak", kind: "The Shop",
    description: "A complete store for a packaging manufacturer: catalog, cart, checkout and orders, with an API and a database behind every step.",
    flow: ["Product", "Catalog", "Cart", "Checkout", "Order"],
    focus: ["E-commerce", "Catalog", "Cart", "Checkout", "Orders", "API", "Database"],
    image: "/img/unipak.webp", imageAlt: "Unipak The Shop homepage", link: "https://www.unipaktheshop.com/",
  },
  {
    id: "ymp", category: "Real-time",
    question: "How do you make thousands of actions count in real time?",
    name: "YMP", kind: "Voting system",
    description: "Live voting windows where many voters act at the same moment. The system has to stay accurate under concurrency and show results people can trust.",
    flow: ["Voters", "System", "Validate", "Count", "Result"],
    focus: ["Real-time voting", "High-concurrency integrity", "Live voting windows", "Accurate results"],
    image: "/img/ymp.webp", imageAlt: "The YMP voting platform homepage", link: "https://www.ymplebanon.com/", live: true, fanIn: true,
  },
  {
    id: "gs1", category: "Business systems",
    question: "How do you replace a manual business process with software?",
    name: "GS1", kind: "Barcode system",
    description: "Replaced a manual process for issuing barcodes, invoices and certificates with an ASP.NET system and a database behind it.",
    flow: ["Data", "Barcode", "Invoice", "Certificate"],
    focus: ["Barcode generation", "Invoices", "Certificates", "ASP.NET", "Database"],
    image: "/img/gs1.webp", imageAlt: "The GS1 Lebanon barcode search", link: "https://www.gs1lebanon.org/",
  },
  {
    id: "elhabib", category: "Real estate",
    question: "How do you turn complex property data into a simple digital experience?",
    name: "Mohamad Elhabib", kind: "Real estate platform",
    description: "Property listings with the business logic, calculators and lead integrations behind them, exposed through APIs and presented simply.",
    flow: ["Property", "Business logic", "Calculator", "API", "Lead"],
    focus: ["Real estate", "Business logic", "Property systems", "APIs", "Calculators", "Lead integrations"],
    image: "/img/alhabib.webp", imageAlt: "The Mohamad Elhabib Real Estate platform homepage", link: "https://alhabib.37-187-35-120.plesk.page/",
  },
];

export const more: { name: string; kind: string; platform: string; link?: string }[] = [
  { name: "AiPoker", kind: "Real-time mobile game", platform: "Flutter", link: "https://ai9poker.com/install" },
  { name: "THD", kind: "Dress rental", platform: "Android", link: "https://play.google.com/store/apps/details?id=com.nascode.thehourdress" },
  { name: "Piscover", kind: "Places guide", platform: "Android", link: "https://play.google.com/store/apps/details?id=com.nascode.placebook" },
  { name: "Yerker", kind: "Music streaming", platform: "Android", link: "https://play.google.com/store/apps/details?id=com.nascode.yerker" },
  { name: "Nascode App", kind: "Client app", platform: "Flutter", link: "https://play.google.com/store/apps/details?id=com.nascode.app" },
  { name: "Linkled", kind: "Social", platform: "Flutter", link: "https://play.google.com/store/apps/details?id=com.linkled.app" },
  { name: "This Is Lebanon", kind: "News", platform: "Mobile", link: "https://play.google.com/store/apps/details?id=com.herelebanon.gtonics.mobile" },
  { name: "CarryOn", kind: "Services", platform: "Ionic", link: "https://play.google.com/store/apps/details?id=com.sushMartionic.App" },
  { name: "Custom dashboard", kind: "Internal tool · link available upon request", platform: "Web" },
  { name: "Custom CMS", kind: "Content management · link available upon request", platform: "Web" },
  { name: "Custom CRM", kind: "Client management · link available upon request", platform: "Web" },
  { name: "Swah Design", kind: "Website", platform: "Web", link: "https://swah.51-77-214-141.plesk.page/" },
  { name: "Vernate Group", kind: "Website", platform: "Web", link: "https://www.vernategroup.com/" },
  { name: "YallaPlay", kind: "Reservation system · link available upon request", platform: "Web" },
];

export const approach: { key: string; stack: string }[] = [
  { key: "Mobile", stack: "Flutter / Kotlin" },
  { key: "Web", stack: "Angular / ASP.NET" },
  { key: "Backend", stack: ".NET / APIs" },
  { key: "Data", stack: "MSSQL / MySQL / PostgreSQL" },
  { key: "Payments", stack: "Stripe / Areeba / Monty" },
  { key: "Real-time", stack: "SignalR / live systems" },
  { key: "AI", stack: "AI APIs / n8n" },
  { key: "Automation", stack: "n8n / workflows" },
];

export const process: { name: string; line: string }[] = [
  { name: "Understand", line: "Start with the actual problem, not the technology." },
  { name: "Architect", line: "Design the system before building the pieces." },
  { name: "Build", line: "Turn the architecture into maintainable software." },
  { name: "Integrate", line: "Connect APIs, payments, services and data." },
  { name: "Test", line: "Break it before anyone else can." },
  { name: "Ship", line: "Move from development to production." },
  { name: "Improve", line: "Software doesn't end at release." },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Ionic"] },
  { group: "Web", items: ["Angular", "TypeScript", "ASP.NET", ".NET Core", "VB.NET", "Laravel", "PHP"] },
  { group: "Data", items: ["MSSQL", "MySQL", "PostgreSQL", "SQL"] },
  { group: "AI", items: ["Claude Code", "ChatGPT API", "n8n"] },
  { group: "Architecture", items: ["MVVM", "Clean Architecture", "REST APIs"] },
  { group: "Delivery", items: ["Git", "GitHub Actions", "CI/CD pipelines", "Docker"] },
];