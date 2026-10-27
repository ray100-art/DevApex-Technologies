export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: "code" | "brain" | "server" | "graduation";
  headline: string;
  intro: string;
  problems: string[];
  deliverables: { title: string; body: string }[];
  packages: { name: string; price: string; summary: string; includes: string[] }[];
  stack: string[];
  faqs: { q: string; a: string }[];
};

// Prices are starting points ("from") for planning conversations, not quotes.
export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software & Web Development",
    short: "Custom web systems, mobile apps and websites built around how your organisation actually works.",
    icon: "code",
    headline: "Systems that replace spreadsheets, paperwork and guesswork",
    intro:
      "We design and build web platforms, mobile apps and business websites for Kenyan organisations. Every build starts from your real process, integrates M-Pesa where money moves, and is handed over with documentation and training.",
    problems: [
      "Records live in Excel files, notebooks and WhatsApp chats",
      "M-Pesa payments are matched to customers by hand at month end",
      "Off-the-shelf software forces you to change how you work",
      "A previous developer disappeared and nobody can maintain the system",
    ],
    deliverables: [
      { title: "Custom web platforms", body: "Management systems, portals and dashboards with role-based access for your team." },
      { title: "Mobile apps", body: "Android and cross-platform apps for staff, members or customers, including offline use." },
      { title: "Business websites", body: "Fast, search-friendly websites you can update yourself, with enquiry tracking." },
      { title: "M-Pesa & payments", body: "Daraja STK Push, C2B and automatic reconciliation, plus card payments." },
    ],
    packages: [
      { name: "Website", price: "From KES 60,000", summary: "A professional site that brings in enquiries.", includes: ["Up to 8 pages", "Mobile-first design", "Enquiry form and WhatsApp", "Basic SEO and analytics"] },
      { name: "Business system", price: "From KES 250,000", summary: "A custom system for one core process.", includes: ["Discovery workshop", "Web app with user roles", "M-Pesa integration", "Training and 30 days support"] },
      { name: "Platform", price: "Custom quote", summary: "Multi-module platforms and mobile apps.", includes: ["Product strategy", "Web and mobile apps", "Integrations and APIs", "Ongoing support plan"] },
    ],
    stack: ["Java / Spring Boot", "Python / FastAPI", "React", "Next.js", "TypeScript", "PostgreSQL", "MySQL", "Android", "M-Pesa Daraja", "Docker"],
    faqs: [
      { q: "Who owns the code?", a: "You do. On final payment, ownership of the custom code and your data transfers to you, as written in the contract." },
      { q: "How long does a typical system take?", a: "A focused business system usually takes 6 to 10 weeks from signed scope to launch. We agree a timeline after the discovery workshop." },
      { q: "Can you take over an existing system?", a: "Yes. We start with a paid technical audit, then give you a written plan to stabilise, improve or replace it." },
    ],
  },
  {
    slug: "ai-data-solutions",
    name: "AI & Data Solutions",
    short: "Dashboards, analytics and practical AI that turn the data you already have into decisions.",
    icon: "brain",
    headline: "Turn the data you already collect into decisions you can defend",
    intro:
      "Most organisations sit on years of records they never use. We clean and connect that data, build dashboards your managers will actually open, and apply AI only where it measurably saves time or money.",
    problems: [
      "Reports take days to compile and are out of date when they arrive",
      "Data sits in different systems that do not talk to each other",
      "You suspect AI could help but do not know where to start safely",
      "Decisions rely on instinct because the numbers are hard to trust",
    ],
    deliverables: [
      { title: "Dashboards & reporting", body: "Live dashboards for collections, sales, performance or operations, built on clean data." },
      { title: "Data pipelines", body: "Automated collection and cleaning from your systems, M-Pesa statements and spreadsheets." },
      { title: "Applied AI", body: "Document processing, prediction, computer vision and assistants, scoped to a measurable result." },
      { title: "AI readiness review", body: "A short, practical assessment of where AI fits your organisation and where it does not." },
    ],
    packages: [
      { name: "Readiness review", price: "From KES 40,000", summary: "Know where data and AI can pay off.", includes: ["Stakeholder interviews", "Data audit", "Prioritised use cases", "Written roadmap"] },
      { name: "Dashboard", price: "From KES 150,000", summary: "One reliable source of truth.", includes: ["Data cleaning and modelling", "Interactive dashboard", "Automated refresh", "Team training"] },
      { name: "AI solution", price: "Custom quote", summary: "A model or assistant in production.", includes: ["Proof of concept", "Accuracy evaluation", "Integration", "Monitoring"] },
    ],
    stack: ["Python", "LLMs (Llama via Groq)", "Structured AI outputs", "Computer vision", "pandas", "scikit-learn", "PostgreSQL", "Power BI"],
    faqs: [
      { q: "Do we need a lot of data to use AI?", a: "Not always. The readiness review tells you honestly whether your data is enough, and what to start collecting if it is not." },
      { q: "Is our data safe with you?", a: "We sign a data processing agreement, follow Kenya's Data Protection Act 2019, and only access the data a project needs." },
    ],
  },
  {
    slug: "it-support-networking",
    name: "IT Support & Networking",
    short: "Reliable networks, devices, cloud and security, with a support line that answers.",
    icon: "server",
    headline: "IT that stays up, so your team can get on with their work",
    intro:
      "We set up and look after the networks, devices, email and cloud services your organisation depends on. Clear monthly plans, documented systems and a named contact replace the scramble every time something breaks.",
    problems: [
      "The internet or network goes down and nobody knows why",
      "Staff share passwords and nobody controls who has access to what",
      "There is no backup, or nobody has tested the backup",
      "Every IT problem means calling a different person",
    ],
    deliverables: [
      { title: "Network setup", body: "Structured cabling, Wi-Fi, firewalls and secure remote access for offices and schools." },
      { title: "Cloud & email", body: "Google Workspace or Microsoft 365 setup, migration and administration." },
      { title: "Security & backup", body: "Access control, antivirus, tested backups and basic security training for staff." },
      { title: "Managed support", body: "Monthly support plans with response times, maintenance visits and an asset register." },
    ],
    packages: [
      { name: "IT health check", price: "From KES 15,000", summary: "Find the risks before they cost you.", includes: ["Network and device review", "Backup and security check", "Written findings", "Prioritised fixes"] },
      { name: "Managed support", price: "From KES 20,000 / month", summary: "A dependable IT department on call.", includes: ["Remote and on-site support", "Agreed response times", "Monthly maintenance", "Asset register"] },
      { name: "Office setup", price: "Custom quote", summary: "New office or full network upgrade.", includes: ["Site survey", "Equipment sourcing", "Installation", "Documentation"] },
    ],
    stack: ["Cisco / MikroTik", "Ubiquiti", "Microsoft 365", "Google Workspace", "Linux", "Windows Server"],
    faqs: [
      { q: "Do you support organisations outside Nairobi?", a: "Remote support works anywhere. On-site visits outside Nairobi are planned in advance and billed for travel." },
      { q: "Can you work with our existing equipment?", a: "Usually yes. The health check tells you what to keep, what to fix and what to replace." },
    ],
  },
  {
    slug: "training-consultancy",
    name: "Training & Consultancy",
    short: "Practical digital skills for your team and clear advice before you invest in technology.",
    icon: "graduation",
    headline: "Make better technology decisions, and give your team the skills to use them",
    intro:
      "We train teams on the systems they use every day and advise leaders before they spend on technology. Training is hands-on and built around your tools; advice is independent and written down.",
    problems: [
      "You bought a system but staff still work around it",
      "Vendors give conflicting advice and you cannot judge who is right",
      "Your team needs data, Excel or digital skills to do their jobs well",
      "You are planning a digital project and want to avoid expensive mistakes",
    ],
    deliverables: [
      { title: "Team training", body: "Hands-on sessions on your systems, Excel and data skills, cybersecurity awareness and AI tools." },
      { title: "Public workshops", body: "Short practical courses for professionals, online or in Nairobi." },
      { title: "Technology advisory", body: "Independent advice on vendor selection, project scoping and digital strategy." },
      { title: "Project oversight", body: "We sit on your side of the table during a vendor-led project to protect scope and quality." },
    ],
    packages: [
      { name: "Workshop seat", price: "From KES 5,000", summary: "Practical skills in a half-day or one-day session.", includes: ["Hands-on exercises", "Course materials", "Certificate of attendance"] },
      { name: "Team training", price: "From KES 45,000", summary: "On-site training built around your tools.", includes: ["Needs assessment", "Custom materials", "Up to 20 participants", "Follow-up session"] },
      { name: "Advisory", price: "From KES 25,000", summary: "Independent advice before you commit.", includes: ["Requirements review", "Vendor comparison", "Written recommendation"] },
    ],
    stack: ["Microsoft Excel", "Power BI", "Google Workspace", "Cybersecurity basics", "Generative AI tools"],
    faqs: [
      { q: "Can training be done at our premises?", a: "Yes. Team training is usually delivered on-site; public workshops run online or at a Nairobi venue." },
      { q: "Do you give certificates?", a: "Every participant who completes a course receives a DevApex certificate of attendance." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type CaseStudy = {
  slug: string;
  title: string;
  name: string;
  sector: string;
  kind: "Product" | "Working prototype" | "In development";
  summary: string;
  challenge: string[];
  solution: string[];
  engineering: string[];
  note?: string;
  stack: string[];
  services: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

// Self-initiated products built by the DevApex founder. Every claim here is
// backed by the linked source code; nothing is presented as client work.
const gh = (repo: string) => `https://github.com/ray100-art/${repo}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "parknairobi",
    name: "ParkNairobi",
    title: "ParkNairobi: smart parking with live bays and M-Pesa payments",
    sector: "Transport & smart cities",
    kind: "Working prototype",
    featured: true,
    summary:
      "A smart-parking platform for Kenyan towns. Drivers find a free bay on a live map, reserve it and pay with M-Pesa; operators watch occupancy update in real time from bay sensors.",
    challenge: [
      "Drivers in busy town centres circle for parking with no idea where a free bay is.",
      "Parking revenue is collected manually, which is slow, hard to audit and easy to leak.",
      "Operators have no live view of occupancy across their parking areas.",
    ],
    solution: [
      "Live map of bays (Leaflet and OpenStreetMap) with nearest free bays found by GPS.",
      "Bookings that reserve a bay for 15 minutes, then payment by M-Pesa STK Push with live status.",
      "Entry and exit sensor events keep every bay's status accurate, broadcast instantly over WebSockets.",
      "Admin dashboard for occupancy, all bookings, users and manually freeing bays.",
      "Demo data covering Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Meru, Embu and Chuka.",
    ],
    engineering: [
      "Idempotent, authenticated M-Pesa callback: a payment settles only once, and the amount is checked against the booking price.",
      "Stateless JWT authentication with Driver and Admin roles enforced at both the filter chain and method level.",
      "Database schema versioned with Flyway migrations; request rate limiting and no credentials in code.",
      "Packaged with Docker and Nginx, including a reverse proxy for the API and WebSocket traffic.",
    ],
    stack: ["Java 21", "Spring Boot 3", "MySQL", "Flyway", "Spring Security + JWT", "WebSocket (STOMP)", "M-Pesa Daraja", "Leaflet", "Docker"],
    services: ["software-development"],
    links: [
      { label: "Live demo", href: "https://ray100-art.github.io/Park-Nairobi-Frontend/" },
      { label: "Backend code", href: gh("Park-Nairobi-Backend") },
      { label: "Frontend code", href: gh("Park-Nairobi-Frontend") },
    ],
  },
  {
    slug: "trainsmart",
    name: "TrainSMART",
    title: "TrainSMART: a national registry for healthcare-worker training",
    sector: "Healthcare & public sector",
    kind: "Working prototype",
    featured: true,
    summary:
      "A registry for running healthcare-worker training across Kenya: sessions, attendance and test scores, a certificate approval pipeline, and public certificate verification that also covers legacy certificates.",
    challenge: [
      "Training records for health workers are spread across counties, sites and legacy systems.",
      "Certificates are hard to verify, so employers cannot easily confirm a worker's training.",
      "National and county officers need reliable reporting without exposing data outside their scope.",
    ],
    solution: [
      "Session management: register participants, record attendance and pre and post-test scores, submit and approve reports.",
      "Deduplicated people registry with facility and sponsor catalogues and CSV import.",
      "Certificate pipeline from issue to signature, with printable certificates and legacy imports.",
      "Public verification page: anyone can check a certificate serial without signing in.",
      "Dashboards, analytics and CSV exports at national and county level.",
    ],
    engineering: [
      "Six roles from trainer to system admin, with county and site roles scoped to their own data.",
      "Cookie-based JWT auth with CSRF protection, session revocation and TOTP multi-factor authentication for privileged roles.",
      "Rate limiting, a full audit log, no default credentials, and a data integrity checker.",
      "Tuned for national scale: composite and trigram indexes, N+1 query fixes, caching and statement timeouts.",
      "11 Alembic migrations, a 28-test pytest suite and CI on every push.",
    ],
    note: "Independently designed and built as a proposed replacement for a legacy national registry. It is not an official Ministry of Health deployment; the live instance is a demo.",
    stack: ["Python 3.12", "FastAPI", "SQLAlchemy 2", "PostgreSQL", "Alembic", "React 19", "TypeScript", "TanStack Query", "Tailwind CSS", "GitHub Actions"],
    services: ["software-development", "ai-data-solutions"],
    links: [
      { label: "Live demo", href: "https://trainsmart-fronted.vercel.app" },
      { label: "Backend code", href: gh("trainsmart-backend") },
      { label: "Frontend code", href: gh("trainsmart-fronted") },
    ],
  },
  {
    slug: "daktariassist",
    name: "DaktariAssist",
    title: "DaktariAssist: an AI clinical second opinion for Kenyan clinicians",
    sector: "Healthcare",
    kind: "Working prototype",
    featured: true,
    summary:
      "A decision-support tool where a clinician enters a patient's presentation, vitals and proposed diagnosis, and receives a structured, collegial second opinion that accounts for the local disease burden.",
    challenge: [
      "Clinicians in busy or remote facilities often have no colleague to sense-check a diagnosis.",
      "Conditions common in the region, such as malaria, typhoid, TB and brucellosis, can present alike.",
      "Generic AI chat tools give unstructured answers that are hard to act on in a consultation.",
    ],
    solution: [
      "A consistency rating (green, amber or red) showing how well the proposed diagnosis fits the evidence.",
      "Red flags in vitals or symptoms, two or three differential diagnoses with reasons, and three to five recommended tests.",
      "One follow-up question worth asking the patient.",
      "Tone designed for clinicians: supportive suggestions, never \"the diagnosis is wrong\".",
    ],
    engineering: [
      "Llama 3.3 70B via the Groq API, constrained by a system prompt with Kenyan clinical context and a strict JSON schema.",
      "Low temperature (0.2) for consistent answers between similar cases.",
      "Model output is cleaned, parsed into typed Java objects and validated before it reaches the user.",
      "CI build on every push.",
    ],
    note: "A decision-support prototype. It is not a medical device and has not been clinically validated; clinical judgement always rests with the treating clinician.",
    stack: ["Java 21", "Spring Boot 3", "Groq API", "Llama 3.3 70B", "Structured outputs", "JavaScript"],
    services: ["ai-data-solutions", "software-development"],
    links: [{ label: "Source code", href: gh("DaktariAssist") }],
  },
  {
    slug: "scoutbridge-ai",
    name: "ScoutBridge AI",
    title: "ScoutBridge AI: evidence-based football talent identification",
    sector: "Sports analytics",
    kind: "In development",
    summary:
      "A talent intelligence platform that turns ordinary match footage into evidence-backed player profiles, so players in under-scouted East African leagues can be discovered on merit.",
    challenge: [
      "Players in leagues such as the Uganda Premier League and lower Kenyan tiers generate little verifiable performance data.",
      "Recruitment relies on subjective, in-person scouting and on data platforms that mainly cover top competitions.",
      "Young players depend on intermediaries, some of whom exploit them.",
    ],
    solution: [
      "Computer vision detects and tracks players in match video and links each detection to a registered player.",
      "Every metric is stored with its context: role, pitch zone, phase of play, pressure, sample size and a confidence tier.",
      "Every claim about a player links to the video clips that prove it.",
      "Separate portals for players, scouts, clubs, federations and administrators, with age-gating to protect minors.",
    ],
    engineering: [
      "Three-plane architecture: an in-country edge box processes raw footage and syncs only structured data and clips to the cloud.",
      "Risky assumptions are tested with time-boxed spikes, such as edge throughput, before the architecture is committed.",
      "Invitation-only accounts with one-time links, each bound to exactly the data its role needs.",
      "FastAPI and PostgreSQL core with Alembic migrations; React and TypeScript dashboard.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Computer vision", "Multi-object tracking", "React", "TypeScript"],
    services: ["ai-data-solutions", "software-development"],
    links: [],
  },
  {
    slug: "drip-store",
    name: "DRIP Store",
    title: "DRIP Store: fashion e-commerce with M-Pesa checkout",
    sector: "Retail & e-commerce",
    kind: "Working prototype",
    summary:
      "An online fashion store with a full storefront and REST API: catalogue, search, wishlist, cart, order management and mobile-money checkout through M-Pesa STK Push.",
    challenge: [
      "Small Kenyan retailers sell through Instagram and WhatsApp, with orders and payments tracked by hand.",
      "Customers expect to pay with M-Pesa, not cards.",
    ],
    solution: [
      "Storefront with catalogue by category and brand, product pages, search, wishlist and a persistent cart.",
      "Checkout that sends an M-Pesa STK Push prompt straight to the customer's phone.",
      "Customer order history and an admin page to manage products and move orders from pending to delivered.",
    ],
    engineering: [
      "Spring Boot REST API with BCrypt password hashing and signed JWT authentication.",
      "Accepts every common Kenyan phone format (07xx, 01xx, +2547xx, 2547xx) for payments.",
      "Configuration from the environment, so no credentials live in code; CI build on every push.",
    ],
    stack: ["Java 17", "Spring Boot 3", "Spring Security", "MySQL", "Hibernate", "M-Pesa Daraja", "JavaScript"],
    services: ["software-development"],
    links: [
      { label: "Backend code", href: gh("DRIP---ECOMMERCE-BACKEND") },
      { label: "Storefront code", href: gh("DRIP--ECOMMERCE-FRONTED") },
    ],
  },
  {
    slug: "school-records",
    name: "School Record Management System",
    title: "School Record Management System: students, grades, attendance and fees",
    sector: "Education",
    kind: "Working prototype",
    summary:
      "A desktop system that runs a school's day-to-day records in one place: students, teachers, subjects, grades, attendance and fee payments, behind a secure role-based login.",
    challenge: [
      "Many schools keep student records, results, attendance and fees in separate registers and spreadsheets.",
      "Fee balances and attendance are hard to check quickly when a parent asks.",
    ],
    solution: [
      "Student, teacher and subject management with search.",
      "Grades per student and subject, attendance filtered by date, and fee payments recorded against each student.",
      "Dashboard overview of the school, with Admin and Teacher roles.",
    ],
    engineering: [
      "Passwords hashed with BCrypt (cost 12); database credentials read from the environment.",
      "Clean layering: FXML view, controller, data-access object, PostgreSQL.",
      "Self-initialising database and JUnit 5 tests, with CI on every push.",
    ],
    stack: ["Java 21", "JavaFX 21", "PostgreSQL", "JDBC", "jBCrypt", "JUnit 5"],
    services: ["software-development"],
    links: [{ label: "Source code", href: gh("SchoolRecordManagementSystem") }],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const industries = [
  { name: "SACCOs & chamas", body: "Member, loan and contribution management with automatic M-Pesa reconciliation." },
  { name: "Schools", body: "Fee collection, arrears tracking, parent communication and performance dashboards." },
  { name: "Healthcare", body: "Training registries, clinical decision support, and records, stock and billing systems." },
  { name: "Transport & parking", body: "Live occupancy, bookings and cashless M-Pesa collection for parking operators and counties." },
  { name: "Retail & e-commerce", body: "Online stores, orders and stock with M-Pesa checkout." },
  { name: "Sports clubs & academies", body: "Player data, video analytics and talent profiles." },
];

export const process = [
  { step: "01", name: "Discover", time: "1 to 2 weeks", body: "A paid discovery workshop maps your process, your users and what success looks like. You receive a written scope, timeline and fixed price. The workshop fee is credited if you go ahead." },
  { step: "02", name: "Design", time: "1 to 2 weeks", body: "Clickable designs of the key screens, reviewed with the people who will use them, before any code is written." },
  { step: "03", name: "Build", time: "4 to 8 weeks", body: "Development in two-week sprints. You see working software at the end of every sprint, on a staging site you can test." },
  { step: "04", name: "Launch & support", time: "Ongoing", body: "Data migration, staff training and go-live, followed by a support plan with agreed response times." },
];

export const principles = [
  { title: "Fixed scope, fixed price", body: "You know what you are getting and what it costs before work starts. Changes are priced and agreed in writing." },
  { title: "You own your system", body: "Code, data and documentation are yours. No lock-in, no hostage situations." },
  { title: "Built for Kenya", body: "M-Pesa, KRA eTIMS, the Data Protection Act and patchy connectivity are designed in from day one." },
  { title: "Proof over promises", body: "We show working software every two weeks and measure results against the goals agreed at the start." },
];
