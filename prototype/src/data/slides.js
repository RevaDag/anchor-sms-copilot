export const SLIDES = [

  // 1. Title
  {
    type: 'title',
    eyebrow: 'PM Home Task Submission',
    headline: 'Anchor SMS Copilot',
    subline: 'An AI-powered interface that lets freelancers draft agreements, capture scope creep, and chase payments — entirely over SMS.',
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
        body: 'Read Anchor\'s product, app store reviews, G2/Reddit freelancer forums. Map the full pain landscape — what breaks down between "deal struck" and "money received."',
      },
      {
        num: '1h',
        label: 'Ideation & Selection',
        body: 'Drafted 4 AI concepts (SMS Copilot, smart invoice suggester, AI contract auditor, cash flow predictor). Applied RICE scoring. Selected SMS Copilot — highest reach + lowest effort delta.',
      },
      {
        num: '1h',
        label: 'Spec & Design',
        body: 'Wrote the full product spec: pain points, competitive landscape, 4 user flows, RICE prioritization, risk matrix, business model, and pricing tiers.',
      },
      {
        num: '1h',
        label: 'Build & Present',
        body: 'Shipped a React prototype with a live Claude AI backend demonstrating all 4 flows. Built this slide presentation to walk through the thinking end-to-end.',
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
        contribution: 'Framed the opportunity space, ran competitive research, mapped user pain points, and structured the full RICE prioritization framework.',
        link: 'https://github.com/deanpeters/Product-Manager-Skills',
        linkLabel: 'deanpeters / Product-Manager-Skills',
      },
      {
        role: 'Backend Developer',
        icon: '⚙️',
        contribution: 'Built the Express server, integrated the Claude AI backend, designed the 6-action engine, and wired the agreement state management system.',
        link: 'https://github.com/Jeffallan/claude-skills/tree/main/skills',
        linkLabel: 'Jeffallan / claude-skills',
      },
      {
        role: 'Frontend Designer',
        icon: '🎨',
        contribution: 'Designed and built the React prototype UI — iPhone mock components, client phone grid, live platform mirror, and this presentation deck.',
        link: 'https://skills.sh/anthropics/skills/frontend-design',
        linkLabel: 'skills.sh · frontend-design',
      },
      {
        role: 'QA Engineer',
        icon: '🧪',
        contribution: 'Validated all 4 user flows end-to-end, caught edge cases in the action engine, and verified consistent behavior across the prototype.',
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
    context: 'Anchor is a billing and payments platform designed to help small businesses and freelancers manage workflows and get paid faster. However, even with great tools, solo freelancers and small agencies face significant emotional and administrative hurdles before a payment is even initiated.',
    proposal: 'The Anchor SMS Copilot is an AI-powered interface that removes this friction. It allows users to draft, amend, and send agreements using natural language via standard text messaging, moving the billing process from a "desk chore" to a "real-time conversation."',
  },

  // 7. The Problem
  {
    type: 'grid',
    eyebrow: 'The Problem',
    title: 'Four pain points killing freelancer income',
    subtitle: 'Even with great tools, the emotional and administrative burden of getting paid remains unsolved',
    columns: 2,
    items: [
      {
        icon: '😓',
        title: 'The Emotional Tax',
        body: 'Chasing money is psychologically exhausting. Making collection calls or sending "just checking in" emails feels like begging — damaging the client relationship before work is even delivered.',
      },
      {
        icon: '📉',
        title: 'Cash Flow Unpredictability',
        body: 'Freelancers don\'t know when money will land. If a project ends Friday but invoicing waits until Monday, three days of cash flow are already lost.',
      },
      {
        icon: '🤝',
        title: 'Agreement → Billing Friction',
        body: 'Turning a signed agreement into a structured invoice is tedious. Scope creep via text or call has no structured billing path — it just disappears.',
      },
      {
        icon: '⏱',
        title: 'Admin Overhead',
        body: 'Time tracking, payment reconciliation, and dashboard management pull creators away from billable work. Anchor currently feels "heavy" — built for accountants, not solo creatives.',
      },
    ],
  },

  // 3. Market: The Giants
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
        body: 'Full CRM + contracts + invoicing + scheduling. Powerful, but using it feels like a second job. Built for the office, not the "on-the-go" reality of a solo creator.',
      },
      {
        icon: '🌿',
        title: 'Bonsai',
        body: 'Clean contracts, time tracking, tax assistance. Excellent UX — but desktop-first and requires manual data entry for every action. No conversational interface.',
      },
      {
        icon: '🧲',
        title: 'Moxie',
        body: 'Best-in-class calendar + client portal integration. Great for structured agencies — overwhelming for a solo freelancer managing 3–5 active agreements.',
      },
    ],
  },

  // 4. Market: Processors & AI Newcomers
  {
    type: 'grid',
    eyebrow: 'Competitive Landscape',
    title: 'Processors & AI Newcomers',
    subtitle: 'Infrastructure players and emerging AI tools reshaping the edges — but missing the core',
    columns: 2,
    items: [
      {
        icon: '💳',
        title: 'Stripe / FreshBooks',
        body: 'Best-in-class payment rails and bookkeeping. No native client communication, no agreement negotiation layer. They are the "cash register" — they wait for you to bring them the deal.',
      },
      {
        icon: '🤖',
        title: 'Bookipi / Manus AI',
        body: 'AI that can generate invoices from simple prompts. Fast and cheap. But "PDF generators" vs. "billing engines" — no platform muscle to track money, enforce milestones, or manage legal agreements.',
      },
      {
        icon: '🔍',
        title: 'The Shared Weakness',
        body: 'The Giants are complex. The Processors are transactional. The AI Newcomers are shallow. None combine SMS-native UX + enforceable agreements + live platform sync.',
      },
      {
        icon: '🎯',
        title: 'The Opening',
        body: 'Anchor already has the billing engine, milestone enforcement, and legal agreement infrastructure. The missing layer is a frictionless front door: conversational, mobile, real-time.',
      },
    ],
  },

  // 5. Competitive Gap table
  {
    type: 'table',
    eyebrow: 'Competitive Analysis',
    title: 'Where the market falls short',
    subtitle: 'Anchor is the only platform that combines an enforced billing engine with a conversational interface',
    headers: ['Capability', 'HoneyBook', 'Stripe', 'Bookipi / AI', 'Anchor SMS'],
    highlightCol: 4,
    rows: [
      ['Primary interface',          'Desktop dashboard', 'Mobile / web',   'Simple web UI',  'SMS (native)'],
      ['Agreement speed',            'Slow — templates',  'Manual entry',   'Fast (AI prompt)', 'Instant — one text'],
      ['Scope change handling',      'Manual re-edit',    'New invoice',    'Basic',            'Live line item + client SMS'],
      ['"Bad cop" enforcement',      'Medium (reminders)', 'None',          'Two reminder modes (no enforcement)',             'Automated milestone lock'],
      ['Client zero-install UX',     '✗',                '✗',              '✗',               '✓'],
      ['Live platform mirror',       '✗',                '✗',              '✗',               '✓'],
    ],
  },

  // 6. Ideation — Explored & Discarded
  {
    type: 'ideation',
    eyebrow: 'Ideation & Selection',
    title: 'Exploring the Opportunity Space',
    subtitle: 'Before landing on the SMS Copilot, I explored several AI-driven concepts — here are two I discarded',
    discarded: [
      {
        num: '01',
        title: 'AI Cash-Flow Forecaster',
        concept: 'Predicts when a freelancer will have cash in the bank by analyzing past client payment patterns.',
        reason: 'Entirely passive — it warns about late payments but gives no tool to prevent them. Also reinforces the heavy dashboard experience we\'re trying to escape.',
      },
      {
        num: '02',
        title: 'AI Invoice Designer',
        concept: 'Generates branded invoice templates and payment portals from a freelancer\'s logo or website.',
        reason: 'Solves a surface-level problem. The friction isn\'t visual design — it\'s the emotional tax of chasing money and the time sink of data entry.',
      },
    ],
    winner: {
      num: '03',
      title: 'Anchor SMS Copilot',
      body: 'Shifts Anchor from a passive dashboard to an active participant in the user\'s workflow. Directly addresses the emotional friction of asking for money — the highest immediate impact on admin overhead.',
    },
  },

  // 7. The Opportunity
  {
    type: 'grid',
    eyebrow: 'Strategic Opportunity',
    title: 'Four durable differentiators',
    subtitle: 'Anchor wins by being the only billing tool a freelancer never has to open',
    columns: 2,
    items: [
      {
        icon: '01',
        title: 'Objective Enforcement',
        body: 'The Copilot acts as the "Bad Cop." The system — not the freelancer — enforces the paywall. Milestone locks are automatic. The human relationship stays intact.',
      },
      {
        icon: '02',
        title: 'Real-Time Drift Detection',
        body: 'Client asks for "one quick change"? Text the bot. The AI adds a line item, notifies the client via SMS, and captures approval — all without opening a dashboard.',
      },
      {
        icon: '03',
        title: 'Auto-Invoicing from Notes',
        body: '"Did 4 hours of consulting today." The AI parses the raw text dump, categorizes it, and queues the invoice. Admin time drops from minutes to a single message.',
      },
      {
        icon: '04',
        title: 'Solving the "Anchor Gap"',
        body: 'User feedback: Anchor feels built for accountants. The Copilot reframes this: standardization is a feature. SMS guarantees a clean, branded mobile checkout every time — no formatting required.',
      },
    ],
  },

  // 7. Strategic Verdict
  {
    type: 'verdict',
    eyebrow: 'Strategic Conclusion',
    headline: '"Freelancers want better partners,\nnot better tools."',
    subline: 'While competitors focus on customization, Anchor wins on time-to-initiation. The SMS Copilot ensures that the moment a deal is struck, the billing engine is already running. By staying in the text thread, Anchor moves from being a "platform" to being a "participant" in the freelancer\'s success.',
  },

  // 8. RICE Prioritization
  {
    type: 'table',
    eyebrow: 'Feature Prioritization · RICE Framework',
    title: 'What ships first — and why',
    subtitle: 'Objective scoring across Reach, Impact, Confidence, and Effort',
    headers: ['Feature', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE Score', 'Priority'],
    highlightCol: 5,
    rows: [
      ['SMS-to-Checkout Standardization', '9', '2 — High',    '80%', '1', '18.0', 'P0'],
      ['Objective Enforcement',           '10', '3 — Massive', '90%', '2', '15.0', 'P1'],
      ['Scope Drift Detection',           '7',  '3 — Massive', '50%', '4', '4.2',  'P2'],
      ['Auto-Invoicing from Notes',       '8',  '1 — Medium',  '50%', '2', '2.8',  'P2'],
    ],
  },

  // 9. P0 & P1 Rationale
  {
    type: 'two-col',
    eyebrow: 'Priority Rationale',
    title: 'P0 and P1: What we build and why',
    left: {
      heading: 'P0 — SMS Standardization',
      badge: 'Ship first',
      badgeColor: '#0E9F6E',
      items: [
        'Highest RICE score (18.0) — 20% above P1',
        'Lowest effort: standardization, not customization',
        'Solves the #1 brand perception problem immediately',
        'Unblocks all downstream features that depend on SMS output format',
        'Creates immediate value for 100% of users on day one',
      ],
    },
    right: {
      heading: 'P1 — Objective Enforcement',
      badge: 'Ship second',
      badgeColor: '#1A56DB',
      items: [
        'Highest Impact score (3 — Massive)',
        'Directly addresses the #1 user pain: chasing money',
        'Turns Anchor from a tool into a partner',
        'Requires P0 SMS format to be stable first',
        'Creates the "lock-in" that drives long-term retention',
      ],
    },
  },

  // 10. Architecture
  {
    type: 'grid',
    eyebrow: 'Technical Architecture',
    title: 'Three-layer system',
    subtitle: 'Each layer is independently testable and incrementally deployable',
    columns: 3,
    items: [
      {
        icon: '📱',
        title: 'Layer 1 — SMS Interface',
        body: 'A mobile-first chat UI where the freelancer types natural language commands. Messages go to a backend API powered by Claude AI, which returns both an SMS reply and a structured action payload.',
      },
      {
        icon: '⚙️',
        title: 'Layer 2 — Action Engine',
        body: 'A stateful context layer that receives the AI\'s action payload and mutates platform data. Supports: draft_agreement, confirm, add_line_item, mark_paid, send_reminder, update_agreement.',
      },
      {
        icon: '🖥',
        title: 'Layer 3 — Platform Mirror',
        body: 'A real-time replica of Anchor\'s Agreements dashboard. Every SMS action is instantly reflected: new agreements appear, statuses change, milestones update. The Copilot is a remote control — not a standalone tool.',
      },
    ],
  },

  // 11. Flow 1: Draft Agreement
  {
    type: 'steps',
    eyebrow: 'User Flow 1',
    title: 'Draft a New Agreement',
    subtitle: '"Draft a $4k agreement with Rachel, 50% upfront"',
    badge: '< 60 seconds from deal to billing engine',
    steps: [
      { num: '1', label: 'Freelancer texts the Copilot immediately after a verbal deal', body: '"Draft a $4k agreement with Rachel, 50% upfront"' },
      { num: '2', label: 'AI parses total, client name, and split — replies with confirmation', body: '"Ready to send: Rachel, $4,000 — $2,000 upfront + $2,000 on delivery. Reply YES to confirm."' },
      { num: '3', label: 'Freelancer replies YES', body: 'Agreement created in Anchor, milestone 1 set to pending' },
      { num: '4', label: 'Automated SMS sent to client', body: '"Hi Rachel! Anchor sent you a payment agreement for $4,000. Tap to review and approve."' },
      { num: '5', label: 'Client approves — milestone 1 flips to paid', body: '"Rachel paid $2,000. Milestone 2 unlocked." Platform mirror updates instantly.' },
    ],
  },

  // 12. Flow 2: Scope Creep
  {
    type: 'steps',
    eyebrow: 'User Flow 2',
    title: 'Capture Scope Creep',
    subtitle: '"Add $300 for extra revisions"',
    badge: 'Scope captured in seconds, not days',
    steps: [
      { num: '1', label: 'Client requests extra work verbally or via text', body: 'Freelancer doesn\'t open any dashboard — they just text the bot' },
      { num: '2', label: 'AI adds a line item and notifies the client', body: '"New line item: \'Extra revisions\' — $300. Reply YES to approve."' },
      { num: '3', label: 'Client replies YES', body: 'Line item approved, agreement total updated, audit trail locked with timestamp' },
      { num: '4', label: 'Platform mirrors the change', body: 'Dashboard shows updated total and the new line item with approval status' },
    ],
  },

  // 13. Flow 3: Send Reminders
  {
    type: 'steps',
    eyebrow: 'User Flow 3',
    title: 'Send Payment Reminders',
    subtitle: '"Send David a reminder" or "Remind all overdue clients"',
    badge: 'The freelancer never writes a "just checking in" again',
    steps: [
      { num: '1', label: 'Freelancer texts from anywhere — commute, between meetings', body: '"Send David a reminder" or "Remind all overdue clients"' },
      { num: '2', label: 'Copilot identifies overdue agreement and fires automated SMS to client', body: '"Hi David! Quick reminder from Anchor — your $7,200 payment is overdue since Feb 28."' },
      { num: '3', label: 'Dashboard logs a last_reminded timestamp — full audit trail', body: 'Freelancer can check back anytime: "Did David get a reminder?" Yes. Sent Tuesday at 2pm.' },
    ],
  },

  // 14. Flow 4: Portfolio Status
  {
    type: 'steps',
    eyebrow: 'User Flow 4',
    title: 'Check Portfolio Status',
    subtitle: '"Who owes me money?" / "How much have I collected?"',
    badge: 'Full financial snapshot as a single text message',
    steps: [
      { num: '1', label: 'Freelancer queries their full portfolio in plain English', body: '"Who owes me money?"' },
      { num: '2', label: 'Copilot aggregates across all active agreements and replies', body: '"David Lee owes $7,200 (overdue since Feb 28) and Maya Cohen owes $1,900 (pending approval). Total outstanding: $9,100."' },
    ],
  },

  // 15. Risks
  {
    type: 'grid',
    eyebrow: 'Risk Analysis',
    title: 'Five risks — and how we manage them',
    subtitle: 'Honest accounting of what could go wrong',
    columns: 3,
    items: [
      {
        icon: '⚠️',
        title: 'AI Reliability',
        body: 'Misinterpreted intent could corrupt a live agreement. Mitigation: every financial action requires an explicit YES confirmation. Ambiguous inputs default to clarification. Risk: Medium.',
      },
      {
        icon: '📱',
        title: 'SMS Delivery & Trust',
        body: 'No delivery guarantees. Payment requests via unknown numbers create phishing friction. Mitigation: verified Twilio short code + freelancer name in every message. Risk: Medium.',
      },
      {
        icon: '🔄',
        title: 'Adoption Friction',
        body: 'The hardest risk: behavioral change. Value must be felt in the first two minutes. Onboarding = "deal struck → agreement live" in 3 messages, not a feature tour. Risk: High.',
      },
      {
        icon: '🔒',
        title: 'Data Security & GDPR',
        body: 'Billing data + AI processing layer creates compliance exposure. Mitigation: no persistent storage of raw messages. Existing Anchor policies cover most exposure. Risk: Low–Medium.',
      },
      {
        icon: '🏁',
        title: 'Competitive Response',
        body: 'HoneyBook or Bonsai could build an SMS layer in 6–12 months. Moat: they\'d get a chatbot, not a copilot. The value is Anchor\'s milestone enforcement, legal infrastructure, and payment rails. Risk: Low at launch.',
      },
    ],
  },

  // 16. Business Model
  {
    type: 'table',
    eyebrow: 'Business Model',
    title: 'Pricing: the Copilot as a premium add-on',
    subtitle: 'Not bundled at launch — a distinct, high-value capability with clear willingness to pay',
    headers: ['Tier', 'Price', 'Who It\'s For', 'What\'s Included'],
    highlightCol: null,
    rows: [
      ['Anchor Core (Free)',    '$0 / mo',   'New users, light users',                  'Full dashboard access. No SMS Copilot.'],
      ['Copilot Starter',      '$12 / mo',  'Freelancers, 1–5 active clients',          '50 Copilot messages/mo · Agreement drafting · Reminders'],
      ['Copilot Pro',          '$29 / mo',  'Active freelancers, small agencies',        'Unlimited messages · Scope drift · Line items · Portfolio snapshots'],
      ['Copilot Business',     '$59 / mo',  'Agencies, 2–5 team members',               'Everything in Pro · Multi-user · Team agreements · Priority AI routing'],
    ],
  },

  // 17. Revenue Logic & Metrics
  {
    type: 'two-col',
    eyebrow: 'Revenue & Success Metrics',
    title: 'Why $12–$29 works — and what we watch',
    left: {
      heading: 'Revenue Logic',
      badge: null,
      badgeColor: null,
      items: [
        'Average freelancer invoice: $3,000–$8,000. $29/mo is <0.3% of revenue.',
        'One recovered late payment via reminder is worth 25 years of the Starter plan.',
        'Emotional cost of chasing money is the #1 pain. Users pay to not feel that way.',
        '5,000 Pro users at $29/mo = $1.74M ARR on top of existing transaction revenue.',
        'Every SMS sent raises switching cost — billing history + client trails live inside Anchor.',
      ],
    },
    right: {
      heading: 'Monetization Signals to Watch',
      badge: null,
      badgeColor: null,
      items: [
        'Time-to-first-send: did a new user send a Copilot message in their first session?',
        'Reminder-to-payment conversion: what % of AI reminders result in payment within 48h?',
        'Scope drift capture rate: how often is "add a line item" used per active agreement?',
        'Starter → Pro upgrade rate within 60 days: target >15%. If under, the Pro delta is unclear.',
      ],
    },
  },

  // 23. TL;DR
  {
    type: 'tldr',
    eyebrow: 'The Short Version',
    headline: 'Everything in 30 seconds',
    items: [
      {
        label: '01 · The Problem',
        body: 'Freelancers lose time and money chasing payments. Even with billing tools, they still write "just checking in" emails, manually log scope changes, and avoid awkward money conversations.',
      },
      {
        label: '02 · The Proposal',
        body: 'Text Anchor to draft a $4k agreement, add a scope-creep line item, or fire a payment reminder. The AI handles it in seconds — no dashboard, no login, no friction.',
      },
      {
        label: '03 · Why Anchor Wins',
        body: 'Any competitor can build a chat interface. What they can\'t replicate is Anchor\'s milestone enforcement, legally binding agreements, and payment rails. The Copilot is just the new front door to that existing engine.',
      },
      {
        label: '04 · What Ships',
        body: 'P0: SMS-to-checkout standardization (RICE 18.0). P1: Automated milestone enforcement. Four live user flows on a 6-action AI backend.',
      },
      {
        label: '05 · Business Case',
        body: '$12–$29/mo add-on tier. One recovered late payment covers 25 years of Starter. At 5,000 Pro users: $1.74M ARR stacked on top of existing transaction revenue.',
      },
      {
        label: '06 · See It Live',
        body: 'All four flows are live in the prototype — draft agreement, scope capture, reminder, portfolio status — powered by a real AI backend in the browser.',
      },
    ],
  },

  // 24. CTA
  {
    type: 'cta',
    eyebrow: 'Live Prototype',
    headline: 'See it in action',
    subline: 'The prototype demonstrates all four core flows — draft agreement, scope capture, reminder, and portfolio status — live in the browser.',
    buttonLabel: 'Launch Prototype →',
  },
];
