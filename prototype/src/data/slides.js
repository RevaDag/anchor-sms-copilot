export const SLIDES = [

  // 1. Title
  {
    type: 'title',
    eyebrow: 'PM Home Task Submission',
    headline: 'Anchor SMS Copilot',
    subline: 'An AI tool that lets freelancers **write agreements**, **catch scope changes**, and **chase payments** — all over SMS.',
  },

  // 2. The Assignment
  {
    type: 'assignment',
    eyebrow: 'Senior PM · Home Task',
    brief: 'Propose and design a user-facing AI capability for Anchor that will delight our small business users.',
    context: 'Intentionally open-ended. Up to 5 hours of active time. No single right answer.',
    deliverables: [
      { num: '01', label: 'Research the problem space', body: 'Understand users, their pain points, and where AI could meaningfully help' },
      { num: '02', label: 'Explore, then narrow', body: 'Generate multiple ideas — then commit to a single proposal with the highest impact' },
      { num: '03', label: 'Define it clearly', body: 'What it does, who it\'s for, and why it matters' },
      { num: '04', label: 'Bring it to life', body: 'Mockups, clickable prototype, or detailed flows — whatever best communicates the vision' },
      { num: '05', label: 'Present your thinking', body: 'Walk the team through reasoning, trade-offs, and decisions in the next meeting' },
    ],
    criteria: ['Product thinking', 'Prioritization', 'Craft', 'AI fluency', 'User empathy'],
  },

  // 3. The 4-Hour Plan
  {
    type: 'steps',
    eyebrow: 'My Approach',
    title: 'How I structured 4 hours',
    subtitle: 'Time-boxed from day one — depth of insight over breadth of polish',
    badge: '4 hours · structured execution',
    steps: [
      {
        num: '1h',
        label: 'Discovery',
        body: 'Read Anchor\'s product, app store reviews, and freelancer forums. Mapped the full pain landscape — **what breaks down between "deal struck" and "money received."**',
      },
      {
        num: '1h',
        label: 'Ideation & Selection',
        body: 'Drafted 4 AI concepts. Applied **RICE scoring**. Selected SMS Copilot — highest reach with the lowest effort to build.',
      },
      {
        num: '1h',
        label: 'Spec & Design',
        body: 'Wrote the full plan: pain points, competitive landscape, 4 user flows, RICE prioritization, risk analysis, business model, and pricing tiers.',
      },
      {
        num: '1h',
        label: 'Build & Present',
        body: 'Shipped a **React prototype** with a live Claude AI backend demonstrating all 4 flows. Built this slide deck to walk through the thinking.',
      },
    ],
  },

  // 4. The Team
  {
    type: 'team',
    eyebrow: 'Built With AI',
    title: "I didn't do this alone",
    subtitle: 'Four specialized Claude agents — each running purpose-built community skills — contributed to this submission',
    agents: [
      {
        role: 'Product Manager',
        icon: '🧭',
        contribution: 'Framed the opportunity, ran competitive research, mapped user pain points, and structured the full RICE prioritization.',
        link: 'https://github.com/deanpeters/Product-Manager-Skills',
        linkLabel: 'deanpeters / Product-Manager-Skills',
      },
      {
        role: 'Backend Developer',
        icon: '⚙️',
        contribution: 'Built the Express server, connected the Claude AI backend, designed the 6-action engine, and wired the agreement system.',
        link: 'https://github.com/Jeffallan/claude-skills/tree/main/skills',
        linkLabel: 'Jeffallan / claude-skills',
      },
      {
        role: 'Frontend Designer',
        icon: '🎨',
        contribution: 'Designed and built the React prototype — iPhone mock, client phone grid, live platform view, and this presentation deck.',
        link: 'https://skills.sh/anthropics/skills/frontend-design',
        linkLabel: 'skills.sh · frontend-design',
      },
      {
        role: 'QA Engineer',
        icon: '🧪',
        contribution: 'Tested all 4 user flows end-to-end, found edge cases in the action engine, and verified consistent behavior across the prototype.',
        link: 'https://github.com/alirezarezvani/claude-skills/blob/main/engineering-team/senior-qa/SKILL.md',
        linkLabel: 'alirezarezvani / senior-qa',
      },
    ],
  },

  // 5. Section divider — Intro → Submission
  {
    type: 'section',
    number: '02',
    title: 'The Submission',
    subtitle: 'From problem to product — the full thinking',
  },

  // 6. Overview
  {
    type: 'overview',
    eyebrow: 'Overview',
    context: 'Anchor helps small businesses get **paid faster**. But even with great tools, freelancers still face a big hurdle — the gap between making a deal and getting money.',
    proposal: 'The Anchor **SMS Copilot** removes that gap. Freelancers can draft agreements, update scope, and send payment reminders — just by **sending a text**. No dashboard. No login.',
  },

  // 7. The Problem
  {
    type: 'grid',
    eyebrow: 'The Problem',
    title: 'Four pain points killing freelancer income',
    subtitle: 'Even with great tools, the emotional and admin burden of getting paid is still unsolved',
    columns: 2,
    items: [
      {
        icon: '😓',
        title: 'The Emotional Tax',
        body: 'Asking clients for money feels **awkward**. Sending "just checking in" emails feels like begging — and it can damage the relationship even when the work was great.',
      },
      {
        icon: '📉',
        title: 'Unpredictable Income',
        body: 'Freelancers don\'t know **when money will arrive**. If a project ends Friday but invoicing waits until Monday, three days of cash are already lost.',
      },
      {
        icon: '🤝',
        title: 'Slow Agreement-to-Invoice',
        body: 'Turning a deal into a structured invoice is **tedious**. Scope changes over text or call have no billing path — they just disappear.',
      },
      {
        icon: '⏱',
        title: 'Admin Overhead',
        body: 'Checking dashboards, logging time, and managing invoices **pulls freelancers away from actual work**. Anchor currently feels "heavy" — built for accountants, not solo creatives.',
      },
    ],
  },

  // 8. Ideation — Explored & Discarded
  {
    type: 'ideation',
    eyebrow: 'Ideation & Selection',
    title: 'Exploring the Opportunity Space',
    subtitle: 'Before landing on the SMS Copilot, I explored several AI-driven concepts — here are two I discarded',
    discarded: [
      {
        num: '01',
        title: 'AI Cash-Flow Forecaster',
        concept: 'Predicts when a freelancer will have money by analyzing past client payment patterns.',
        reason: 'Entirely **passive** — it warns about late payments but gives no way to prevent them. It also keeps the heavy dashboard experience we are trying to move away from.',
      },
      {
        num: '02',
        title: 'AI Invoice Designer',
        concept: 'Generates branded invoice templates and payment pages from a freelancer\'s logo or website.',
        reason: 'Solves a **surface-level** problem. The real friction is not how invoices look — it is the **discomfort of asking for money** and the time lost on data entry.',
      },
    ],
    winner: {
      num: '03',
      title: 'Anchor SMS Copilot',
      body: 'Makes Anchor an **active helper** in the freelancer\'s day — not just a dashboard they open later. Directly tackles the **emotional friction** of asking for money — the highest immediate impact on admin overhead.',
    },
  },

  // 9. Market: The Giants
  {
    type: 'grid',
    eyebrow: 'Competitive Landscape',
    title: 'The Giants: HoneyBook, Bonsai, Moxie',
    subtitle: '"All-in-One" platforms with deep automation — and deep complexity',
    columns: 3,
    items: [
      {
        icon: '🍯',
        title: 'HoneyBook',
        body: 'Full CRM + contracts + invoicing + scheduling. **Powerful, but complex** — using it feels like a second job. Built for an office team, not a solo creator.',
      },
      {
        icon: '🌿',
        title: 'Bonsai',
        body: 'Clean contracts, time tracking, tax help. Great design — but **desktop-first** and requires manual data entry for every action. No way to talk to it.',
      },
      {
        icon: '🧲',
        title: 'Moxie',
        body: 'Great calendar + client portal. Built for structured agencies — **too much** for a solo freelancer managing 3–5 active agreements.',
      },
    ],
  },

  // 10. Market: Processors & AI Newcomers
  {
    type: 'grid',
    eyebrow: 'Competitive Landscape',
    title: 'Processors & AI Newcomers',
    subtitle: 'Infrastructure tools and new AI products reshaping the edges — but missing the core',
    columns: 2,
    items: [
      {
        icon: '💳',
        title: 'Stripe / FreshBooks',
        body: 'Best-in-class payments and bookkeeping. But **no client communication**, no agreement layer. They are the "cash register" — they wait for you to bring them the deal.',
      },
      {
        icon: '🤖',
        title: 'Bookipi / Manus AI',
        body: 'AI that generates invoices from simple prompts. Fast and cheap. But they output a **PDF, not a system** — no milestone locks, no payment rails, no legal structure.',
      },
      {
        icon: '🔍',
        title: 'The Shared Weakness',
        body: 'The Giants are **complex**. The Processors are **transactional**. The AI Newcomers are **shallow**. None combine a **simple SMS interface** with **binding agreements** and **real-time updates**.',
      },
      {
        icon: '🎯',
        title: 'The Opening',
        body: 'Anchor already has the **billing engine**, **milestone locks**, and **legal agreements**. The missing piece is a **simple front door**: text-based, mobile, instant.',
      },
    ],
  },

  // 11. Competitive Gap table
  {
    type: 'table',
    eyebrow: 'Competitive Analysis',
    title: 'Where the market falls short',
    subtitle: 'Anchor is the only platform that combines an enforced billing engine with a conversational interface',
    headers: ['Capability', 'HoneyBook', 'Stripe', 'Bookipi / AI', 'Anchor SMS'],
    highlightCol: 4,
    rows: [
      ['Primary interface',     'Desktop dashboard', 'Mobile / web',   'Simple web UI',  'SMS (native)'],
      ['Agreement speed',       'Slow — templates',  'Manual entry',   'Fast (AI prompt)', 'Instant — one text'],
      ['Scope change handling', 'Manual re-edit',    'New invoice',    'Basic',            'Live line item + client SMS'],
      ['Payment enforcement',   'Medium (reminders)', 'None',          'Two reminders only', 'Automated milestone lock'],
    ],
  },

  // 12. The Opportunity
  {
    type: 'grid',
    eyebrow: 'Strategic Opportunity',
    title: 'Four reasons Anchor wins',
    subtitle: 'Anchor wins by being the only billing tool a freelancer never has to open',
    columns: 2,
    items: [
      {
        icon: '01',
        title: 'Automatic Enforcement',
        body: 'The **system** — not the freelancer — sends the payment block. Milestone locks are automatic. The human relationship stays friendly.',
      },
      {
        icon: '02',
        title: 'Scope Change Capture',
        body: 'Client asks for extra work? Text the bot. The AI adds the **extra charge**, texts the client, and gets their approval — all without opening a dashboard.',
      },
      {
        icon: '03',
        title: 'Auto-Invoicing from Notes',
        body: '"Did 4 hours of consulting today." The AI reads the message, categorizes it, and **queues the invoice**. Admin time drops from minutes to a single text.',
      },
      {
        icon: '04',
        title: 'Solving the "Anchor Gap"',
        body: 'Some users said Anchor feels built for accountants. The Copilot fixes this: **SMS means no formatting required** — every deal becomes a clean, branded checkout.',
      },
    ],
  },

  // 13. Strategic Verdict
  {
    type: 'verdict',
    eyebrow: 'Strategic Conclusion',
    headline: '"Freelancers want better partners,\nnot better tools."',
    subline: 'Every competitor is adding more features — better templates, faster exports, bigger dashboards. The Copilot does not add features. It adds **presence**. Anchor is now in the conversation, not waiting for the user to come back to a browser tab. It moves from a **tool you manage** to a **partner that acts for you**.',
  },

  // 14. Feature Scoping — What I Want to Build
  {
    type: 'grid',
    eyebrow: 'What I Want to Build · Wave 1',
    title: 'Four features for the SMS Copilot',
    subtitle: 'Each one solves a distinct freelancer pain — here\'s what they do before I score them',
    columns: 2,
    items: [
      {
        icon: '📤',
        title: 'Text-to-Checkout',
        body: 'Every deal texted to the Copilot produces a **clean, branded payment checkout** automatically. No templates to fill, no formatting — the text message becomes the billing event.',
      },
      {
        icon: '🔒',
        title: 'Automatic Enforcement',
        body: 'When a milestone is due, Anchor sends an **automated payment reminder** to the client — not the freelancer. The system is the bad cop. The human relationship stays intact.',
      },
      {
        icon: '📝',
        title: 'Scope Change Alerts',
        body: 'Client asks for extra work mid-project? Text "Add $300 for revisions." The AI adds the **line item**, notifies the client, and captures their approval — no dashboard needed.',
      },
      {
        icon: '🧾',
        title: 'Auto-Invoicing from Notes',
        body: 'Text a raw summary: "4 hours consulting, 2 hours design." The AI reads it, categorizes it, and **queues an invoice**. Admin time drops from minutes to a single message.',
      },
    ],
  },

  // 15. RICE Prioritization
  {
    type: 'table',
    eyebrow: 'Feature Prioritization · RICE Scoring',
    title: 'What ships first — and why',
    subtitle: 'RICE = Reach × Impact × Confidence ÷ Effort. Higher score = ship first.',
    headers: ['Feature', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE Score', 'Priority'],
    highlightCol: 5,
    rows: [
      ['Text-to-Checkout',        '9', '2 — High',    '80%', '1', '18.0', 'P0'],
      ['Automatic Enforcement',   '10', '3 — Massive', '90%', '2', '15.0', 'P1'],
      ['Scope Change Alerts',     '7',  '3 — Massive', '50%', '4', '4.2',  'P2'],
      ['Auto-Invoicing from Notes', '8', '1 — Medium', '50%', '2', '2.8',  'P2'],
    ],
  },

  // 17. Architecture
  {
    type: 'grid',
    eyebrow: 'Technical Architecture',
    title: 'Three-layer system',
    subtitle: 'Each layer can be built and tested separately',
    columns: 3,
    items: [
      {
        icon: '📱',
        title: 'Layer 1 — SMS Interface',
        body: 'A mobile-first chat where the freelancer types in **plain language**. Messages go to a backend powered by Claude AI, which returns an SMS reply and a structured action.',
      },
      {
        icon: '⚙️',
        title: 'Layer 2 — Action Engine',
        body: 'Receives the AI response and **updates Anchor\'s data**. Supports six actions: draft agreement, confirm, add line item, mark paid, send reminder, update agreement.',
      },
      {
        icon: '🪞',
        title: 'Layer 3 — Platform Mirror',
        body: 'A **real-time view** of Anchor\'s Agreements dashboard. Every SMS action is instantly reflected — new agreements appear, statuses change, milestones update. The Copilot is a remote control, not a standalone tool.',
      },
    ],
  },

  // 18. Flow 1: Draft Agreement
  {
    type: 'steps',
    eyebrow: 'User Flow 1',
    title: 'Draft a New Agreement',
    subtitle: '"Draft a $4k agreement with Rachel, 50% upfront"',
    badge: '< 60 seconds from deal to billing engine',
    steps: [
      { num: '1', label: 'Freelancer texts the Copilot right after a verbal deal', body: '"Draft a $4k agreement with Rachel, 50% upfront"' },
      { num: '2', label: 'AI reads the message and replies with a confirmation', body: '"Ready to send: Rachel, $4,000 — $2,000 upfront + $2,000 on delivery. Reply **YES** to confirm."' },
      { num: '3', label: 'Freelancer replies YES', body: '**Agreement created** in Anchor, milestone 1 set to pending' },
      { num: '4', label: 'Automated SMS sent to client', body: '"Hi Rachel! Anchor sent you a payment agreement for $4,000. Tap to review and approve."' },
      { num: '5', label: 'Client approves — milestone 1 flips to paid', body: '"**Rachel paid $2,000.** Milestone 2 unlocked." Platform view updates instantly.' },
    ],
  },

  // 19. Flow 2: Scope Creep
  {
    type: 'steps',
    eyebrow: 'User Flow 2',
    title: 'Capture Scope Changes',
    subtitle: '"Add $300 for extra revisions"',
    badge: 'Scope captured in seconds, not days',
    steps: [
      { num: '1', label: 'Client requests extra work verbally or over text', body: 'Freelancer does not open any dashboard — they just **text the bot**' },
      { num: '2', label: 'AI adds a line item and notifies the client', body: '"New line item: \'Extra revisions\' — **$300**. Reply YES to approve."' },
      { num: '3', label: 'Client replies YES', body: '**Line item approved**, agreement total updated, audit trail locked with timestamp' },
      { num: '4', label: 'Platform reflects the change', body: 'Dashboard shows **updated total** and the new line item with approval status' },
    ],
  },

  // 20. Flow 3: Send Reminders
  {
    type: 'steps',
    eyebrow: 'User Flow 3',
    title: 'Send Payment Reminders',
    subtitle: '"Send David a reminder" or "Remind all overdue clients"',
    badge: 'The freelancer never writes a "just checking in" again',
    steps: [
      { num: '1', label: 'Freelancer texts from anywhere — commute, between meetings', body: '"Send David a reminder" or "Remind all **overdue** clients"' },
      { num: '2', label: 'Copilot finds the overdue agreement and sends an automated SMS to the client', body: '"Hi David! Quick reminder from Anchor — your **$7,200 payment is overdue** since Feb 28."' },
      { num: '3', label: 'Dashboard logs the reminder with a timestamp — full record', body: 'Freelancer can check back anytime: "Did David get a reminder?" Yes. Sent Tuesday at 2pm.' },
    ],
  },

  // 21. Flow 4: Portfolio Status
  {
    type: 'steps',
    eyebrow: 'User Flow 4',
    title: 'Check Portfolio Status',
    subtitle: '"Who owes me money?" / "How much have I collected?"',
    badge: 'Full financial snapshot as a single text message',
    steps: [
      { num: '1', label: 'Freelancer asks about their money in plain English', body: '"Who owes me money?"' },
      { num: '2', label: 'Copilot checks all active agreements and replies', body: '"**David Lee** owes $7,200 (overdue since Feb 28) and **Maya Cohen** owes $1,900 (pending approval). Total outstanding: **$9,100**."' },
    ],
  },

  // 22a. Risks — Part 1
  {
    type: 'risks',
    eyebrow: 'Risk Analysis · 1 of 2',
    title: 'What could go wrong',
    subtitle: 'Honest look at the three highest-concern areas',
    items: [
      {
        icon: '⚠️',
        title: 'AI Reliability',
        risk: 'The **AI could misinterpret** a freelancer\'s text — adding the wrong amount, the wrong client, or triggering an action the user didn\'t intend — and **update a live agreement** without them realising.',
        fix: 'Every financial action requires an **explicit YES** confirmation before it executes. Unclear inputs always ask for clarification — the AI never guesses.',
        level: 'Medium',
      },
      {
        icon: '📱',
        title: 'SMS Delivery & Trust',
        risk: 'SMS has **no delivery guarantees** — a reminder or agreement link could silently fail to arrive. And when clients receive a payment request from an **unknown number**, they may ignore or report it as spam.',
        fix: 'Use a **verified Twilio short code** so the sender is recognisable, and include the freelancer\'s name in every message so the client knows who it\'s from.',
        level: 'Medium',
      },
      {
        icon: '🔄',
        title: 'Adoption',
        risk: 'Freelancers are used to opening a dashboard to manage billing. If the Copilot doesn\'t show **obvious value immediately**, users will try it once and go back to their old workflow — and never return.',
        fix: 'The **first experience must close a real deal** — not show features. Deal struck → agreement live in 3 texts. If that doesn\'t happen in session one, the product has already lost.',
        level: 'High',
      },
    ],
  },

  // 22b. Risks — Part 2
  {
    type: 'risks',
    eyebrow: 'Risk Analysis · 2 of 2',
    title: 'What could go wrong',
    subtitle: 'Two remaining risks — both manageable',
    items: [
      {
        icon: '🔒',
        title: 'Data Security & GDPR',
        risk: 'Every SMS the freelancer sends passes through an **AI processing layer** — meaning billing amounts, client names, and agreement details are all handled outside Anchor\'s own infrastructure, creating **GDPR and data retention exposure**.',
        fix: '**Raw messages are never stored** after processing. Anchor\'s existing data policies already cover the agreement and payment data — the AI layer only reads, never persists.',
        level: 'Low–Medium',
      },
      {
        icon: '🏁',
        title: 'Competitive Response',
        risk: 'Once the SMS Copilot ships and gains traction, a competitor like HoneyBook or Bonsai could build a **similar chat interface in 6–12 months** — potentially closing the gap before Anchor locks in retention.',
        fix: 'The window to act is **before competitors respond**. Every deal closed through the Copilot adds client history, agreement records, and payment trails inside Anchor — building **stickiness** that makes it increasingly costly to leave. The goal is to establish that stickiness before a HoneyBook SMS feature ships.',
        level: 'Low',
      },
    ],
  },

  // 23. Business Model
  {
    type: 'table',
    eyebrow: 'Business Model',
    title: 'Simple pricing',
    subtitle: 'Try the full Copilot free, then pay only if it saves you time and money',
    note: 'First 3 months free on all Copilot tiers',
    disclaimer: '* Copilot tiers are add-ons to Anchor\'s base plan ($5/mo). Anchor\'s pricing is simple and easy — just like getting paid is going to be for you.',
    headers: ['Tier', 'Price', 'Best for', 'Includes'],
    highlightCol: null,
    rows: [
      ['Anchor Core',      'Free forever', 'Anyone on Anchor',           'Full dashboard. No SMS Copilot.'],
      ['Copilot Starter',  '$12 / mo',     '1 user · Solo freelancer',   '50 messages/mo · Draft agreements · Send reminders'],
      ['Copilot Pro',      '$29 / mo',     '1 user · Active freelancer', 'Unlimited messages · Scope changes · Portfolio status'],
      ['Copilot Business', '$59 / mo',     'Up to 5 users · Agencies',   'Everything in Pro · Multi-user · Team agreements'],
    ],
  },

  // 24a. KPIs — Part 1
  {
    type: 'kpis',
    eyebrow: 'Success Metrics · 1 of 2',
    title: 'How we know it\'s working',
    items: [
      {
        num: '01',
        icon: '⚡',
        title: 'Time to First Send',
        measures: 'Did the user send their first Copilot message in session one?',
        why: 'This is the activation signal. If users sign up but never text the bot, onboarding is broken — they never experienced the core value.',
        target: '>60%',
        targetLabel: 'activate within 24h',
      },
      {
        num: '02',
        icon: '💸',
        title: 'Reminder-to-Payment Rate',
        measures: 'What % of AI-sent reminders are followed by payment within 48h?',
        why: 'We can\'t prove the reminder caused the payment — the client may have paid anyway. But if this rate is consistently higher than agreements with no reminder sent, it\'s a strong signal the feature works.',
        target: '>35%',
        targetLabel: 'vs. no-reminder baseline',
      },
    ],
  },

  // 24b. KPIs — Part 2
  {
    type: 'kpis',
    eyebrow: 'Success Metrics · 2 of 2',
    title: 'How we know it\'s working',
    items: [
      {
        num: '03',
        icon: '📝',
        title: 'Scope Change Capture Rate',
        measures: 'How often do active users add a line item via SMS rather than ignoring scope changes?',
        why: 'Low usage means users either don\'t know this feature exists or don\'t trust it yet. Either way, something in discovery or onboarding needs fixing.',
        target: '>1×',
        targetLabel: 'per active agreement',
      },
      {
        num: '04',
        icon: '📈',
        title: 'Starter → Pro Conversion',
        measures: 'What % of Starter trial users convert to a paid Pro plan in month 4?',
        why: 'Month 4 is the first month users are actually charged — measuring earlier is meaningless. Low conversion means either the Pro features aren\'t visible enough, or users didn\'t get enough value during the trial.',
        target: '>20%',
        targetLabel: 'of trial completers',
      },
    ],
  },

  // 25. TL;DR
  {
    type: 'tldr',
    eyebrow: 'The Short Version',
    headline: 'Everything in 30 seconds',
    items: [
      {
        emoji: '😩',
        label: 'The Problem',
        body: 'Freelancers lose money not because they lack tools — but because **asking for money is awkward**, and no tool fixes that in the moment it happens.',
      },
      {
        emoji: '💬',
        label: 'The Proposal',
        body: 'An **AI SMS bot** built into Anchor. Text it to draft an agreement, catch a scope change, or fire a payment reminder — handled in seconds, no dashboard, no login.',
      },
      {
        emoji: '🏆',
        label: 'Why Anchor Wins',
        body: 'Competitors can copy the chat. They **cannot copy** Anchor\'s milestone locks, binding agreements, and payment rails — built over years.',
      },
      {
        emoji: '🚢',
        label: 'What Ships',
        body: '**P0**: Text-to-checkout. **P1**: Automatic milestone enforcement. Four live flows. Real AI backend. Working today.',
      },
      {
        emoji: '💰',
        label: 'Business Case',
        body: '**3 months free**, then $12–$29/mo. One recovered payment covers 25 years of Starter. At 5,000 Pro users: **$1.74M yearly revenue** on top of transaction fees.',
      },
      {
        emoji: '▶️',
        label: 'See It Live',
        body: 'All four flows are **live in the prototype** right now — powered by a real AI backend.',
      },
    ],
  },

  // 26. CTA
  {
    type: 'cta',
    eyebrow: 'Live Prototype',
    headline: 'See it in action',
    subline: 'The prototype shows all four core flows — **draft agreement**, **scope capture**, **reminder**, and **portfolio status** — live in the browser.',
    buttonLabel: 'Launch Prototype →',
  },
];
