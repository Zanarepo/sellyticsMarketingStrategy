import { useState } from "react";

const FEATURE_SETS = {
  "AI Insights": {
    color: "#5B21B6",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    icon: "🤖",
    desc: "AI-powered analytics, alerts & recommendations",
    features: {
      "Sales Insights":           { icon: "📈", tag: "pro",  desc: "Analyze sales trends and forecasts to optimize your store" },
      "Anomaly Alerts":           { icon: "🚨", tag: "free", desc: "Detect unusual activities to protect your business" },
      "Restock Alerts":           { icon: "📦", tag: "free", desc: "Monitor low stock items to ensure availability" },
      "Restock Recommendations":  { icon: "💡", tag: "free", desc: "Get AI-driven recommendations for restocking items" },
      "Theft/Audit Checks":       { icon: "🛡️", tag: "pro",  desc: "Detect and audit incidents in your store" },
    }
  },
  "Finance": {
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    icon: "💰",
    desc: "Manage payables, receivables, reports, ledger & more",
    features: {
      "Financial Dashboard":   { icon: "📊", tag: "free", desc: "Visualize all your finances in one place" },
      "Account Payable":       { icon: "💸", tag: "pro",  desc: "Track and manage your outstanding payments" },
      "Account Receivables":   { icon: "🧾", tag: "pro",  desc: "Monitor payments owed to your business" },
      "Financial Reports":     { icon: "📋", tag: "pro",  desc: "View profit & loss, balance sheet, and cash flow" },
      "Inventory Valuations":  { icon: "🏷️", tag: "pro",  desc: "Evaluate your stock's financial worth over time" },
      "Reconciliations":       { icon: "🔄", tag: "pro",  desc: "Audit and reconcile all your financial transactions" },
    }
  },
  "Warehouse Hub": {
    color: "#065F46",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    icon: "🏭",
    desc: "Turn your free space into income — store others' goods & earn",
    features: {
      "Warehouse Overview":    { icon: "🏬", tag: "pro", desc: "See all internal stores and external clients in one view" },
      "Inventory Management":  { icon: "📦", tag: "pro", desc: "Manage stock levels across all warehouse locations" },
      "Stock Transfers":       { icon: "🔄", tag: "pro", desc: "Move goods between internal and client storage" },
      "Returns Processing":    { icon: "↩️", tag: "pro", desc: "Handle returned goods from clients systematically" },
      "Client Requests":       { icon: "📋", tag: "pro", desc: "Manage inbound storage requests from external clients" },
      "External Clients":      { icon: "🤝", tag: "pro", desc: "Onboard businesses who pay to store their goods with you" },
    }
  }
};

const GOALS = {
  Reach:   { color: "#0277BD", bg: "#E1F5FE", label: "📡 Reach" },
  Trust:   { color: "#2E7D32", bg: "#E8F5E9", label: "🤝 Trust" },
  Convert: { color: "#C62828", bg: "#FFEBEE", label: "💰 Convert" },
  Engage:  { color: "#6A1B9A", bg: "#F3E5F5", label: "💬 Engage" },
};

const PILLARS = {
  "Money Mirror":   { color: "#C0392B", bg: "#FEF2F2" },
  "Proof Wall":     { color: "#1565C0", bg: "#EFF6FF" },
  "Classroom":      { color: "#4527A0", bg: "#F3F0FF" },
  "African Hustle": { color: "#E65100", bg: "#FFF8F0" },
  "Demo Room":      { color: "#00695C", bg: "#EDFFF9" },
};

const FORMATS = {
  "Reel / TikTok": "🎬", "Carousel": "📑", "Static Post": "🖼️",
  "Story / Poll": "📊", "Video": "📹", "Text Post": "✍️", "Live": "🔴",
};

const content = {
  "AI Insights": [
    {
      feature: "Restock Alerts",
      featureSet: "AI Insights",
      pillar: "Money Mirror",
      format: "Reel / TikTok",
      goal: "Reach",
      title: "Your Shop Ran Out. A Customer Left. This Could Have Been Prevented.",
      message: "Recreate the exact moment a customer asks for a product, staff checks the shelf, it's empty, customer walks out. Cut to: Restock Alert notification on phone — sent 3 days earlier. 'The app told you. You just didn't have it yet.' Pain-first, feature-second, free tier.",
      caption: "\"The customer asked. The shelf was empty. The app warned you 3 days ago. Restock Alerts — it's free.\"",
      hook: "Restock Alerts monitors your stock levels continuously and notifies you the moment any product hits a low threshold — before you run out."
    },
    {
      feature: "Restock Recommendations",
      featureSet: "AI Insights",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "How AI Decides What You Should Restock (And Why It's Smarter Than Your Gut)",
      message: "Teach how the algorithm works: sales velocity + days of stock remaining + lead time = restock recommendation. Compare gut-feel restocking (I think Indomie is running low) vs. AI recommendation (You have 4 days of Indomie at current sales rate, reorder 120 units). Data beats intuition every time.",
      caption: "\"Your gut says restock Indomie. The AI says you have exactly 4 days left and need 120 units. Which one is right?\"",
      hook: "Restock Recommendations uses your real sales velocity and current stock levels to tell you exactly what to reorder — and how much."
    },
    {
      feature: "Anomaly Alerts",
      featureSet: "AI Insights",
      pillar: "Money Mirror",
      format: "Video",
      goal: "Reach",
      title: "The AI Noticed Something Was Wrong Before She Did",
      message: "User story: Anomaly Alert fired on a Tuesday afternoon. Sales were 40% below the daily average with no obvious reason. Investigation found one staff member had been voiding transactions. The AI caught what human eyes missed. Real numbers, real outcome.",
      caption: "\"Tuesday afternoon. Sales 40% below average. No explanation. Anomaly Alert fired. She investigated. Found ₦85,000 in voided transactions.\"",
      hook: "Anomaly Alerts detects when your sales, stock, or transaction patterns deviate from normal — flagging problems before they compound."
    },
    {
      feature: "Sales Insights",
      featureSet: "AI Insights",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "Sales Forecasting: How to Know Next Month's Revenue Before It Happens",
      message: "Advanced education. Sales Insights uses historical data to project next month's revenue by product, by day, by season. Teach how to read a forecast: confidence intervals, trend lines, seasonal adjustments. 'You can't plan buying without forecasting. This is how professionals do it.'",
      caption: "\"Most shop owners plan next month's stock based on last month's feelings. Sales Insights shows you the actual projection.\"",
      hook: "Sales Insights (PRO) analyzes your historical sales data to forecast future revenue — so your buying decisions are based on numbers, not feelings."
    },
    {
      feature: "Theft/Audit Checks",
      featureSet: "AI Insights",
      pillar: "Money Mirror",
      format: "Reel / TikTok",
      goal: "Convert",
      title: "The Audit Your Shop Needs But You've Never Run",
      message: "Most shop owners have never done a formal theft/loss audit. Theft/Audit Checks runs one automatically — comparing recorded sales against inventory movement, flagging discrepancies, identifying patterns that suggest internal theft or systematic error. Show the audit report on screen.",
      caption: "\"When did you last audit your shop for theft? If the answer is never — Theft/Audit Checks just became your most important PRO feature.\"",
      hook: "Theft/Audit Checks (PRO) cross-references your sales records against inventory movement to surface discrepancies that indicate loss, theft, or error."
    },
    {
      feature: "Anomaly Alerts",
      featureSet: "AI Insights",
      pillar: "Demo Room",
      format: "Video",
      goal: "Convert",
      title: "Live Demo: What an Anomaly Alert Actually Looks Like",
      message: "Simulate an anomaly: record unusually low sales for 2 hours, show the alert firing on the phone, show the investigation screen, show the resolution. 'This is what 24/7 AI monitoring looks like on a ₦35,000 Android phone.' Free feature, no PRO required.",
      caption: "\"AI monitoring your shop around the clock. Free. No extra hardware. Just Sellytics on your phone. Watch what happens when something looks wrong.\"",
      hook: "Anomaly Alerts runs 24/7 in the background — even offline — and notifies you the moment your business patterns deviate from normal."
    },
    {
      feature: "Sales Insights",
      featureSet: "AI Insights",
      pillar: "Proof Wall",
      format: "Static Post",
      goal: "Convert",
      title: "'Sales Insights Told Me to Stock Up Before a Holiday I'd Forgotten About'",
      message: "Real user quote. Sales Insights flagged an upcoming seasonal demand spike based on last year's data. She restocked 3 days early. Sold out on the day. No missed revenue. The AI remembered what she forgot.",
      caption: "\"'Sales Insights told me demand would spike that week. I restocked early. Sold out by noon. That's ₦240,000 I would have missed.' — Chidinma, Enugu\"",
      hook: "Sales Insights (PRO) surfaces seasonal patterns in your historical data — flagging demand spikes before they happen so you can prepare."
    },
    {
      feature: "Restock Alerts",
      featureSet: "AI Insights",
      pillar: "African Hustle",
      format: "Story / Poll",
      goal: "Engage",
      title: "Have You Ever Told a Customer 'We Don't Have It' This Week?",
      message: "Yes and they left / Yes but they waited / No — I'm always stocked / Honestly yes too many times. DM everyone who said 'too many times': 'Restock Alerts would have warned you before that happened. It's free and takes 2 minutes to set up.' Direct, useful, no pressure.",
      caption: "\"Be honest — did you tell a customer 'we don't have it' this week? Because there's a free fix for that. 👇\"",
      hook: "Restock Alerts sends you a notification the moment any product hits your low-stock threshold — before the shelf is ever empty."
    },
  ],

  "Finance": [
    {
      feature: "Financial Dashboard",
      featureSet: "Finance",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "What 'Visualizing Your Finances in One Place' Actually Means for a Shop Owner",
      message: "Most retailers have finances scattered: sales in one notebook, expenses in another, debts in WhatsApp. Financial Dashboard pulls everything into one screen: cash position, what you're owed, what you owe, profit vs. last month. Teach what each number means and why it matters.",
      caption: "\"Your finances aren't in one place. They're in 4 notebooks, 2 WhatsApp chats, and your memory. Financial Dashboard fixes that.\"",
      hook: "Financial Dashboard aggregates your sales, expenses, receivables, and payables into one real-time view — your complete financial picture at a glance."
    },
    {
      feature: "Account Receivables",
      featureSet: "Finance",
      pillar: "Money Mirror",
      format: "Reel / TikTok",
      goal: "Reach",
      title: "The Difference Between Money You Made and Money You Actually Have",
      message: "Revenue and cash are not the same thing. Account Receivables is the gap between them. Show a shop with ₦800K in monthly sales but ₦350K still outstanding in receivables. The owner is technically profitable but practically cash-poor. This is the most common financial confusion in African retail.",
      caption: "\"₦800K in sales. ₦350K not yet paid. Your P&L looks great. Your bank account tells a different story. Account Receivables shows you the gap.\"",
      hook: "Account Receivables (PRO) tracks every payment owed to your business — by customer, by amount, by how overdue — so cash flow is always visible."
    },
    {
      feature: "Financial Reports",
      featureSet: "Finance",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "P&L vs. Balance Sheet vs. Cash Flow: What Each One Tells You",
      message: "Three financial reports, three different lenses. P&L: are you profitable? Balance Sheet: what do you own vs. owe? Cash Flow: can you pay your bills? Most shop owners have never seen all three for their own business. Financial Reports generates all three automatically.",
      caption: "\"Every bank, investor, and serious business partner will ask for these 3 reports. Financial Reports generates them for your shop automatically.\"",
      hook: "Financial Reports (PRO) produces your P&L, balance sheet, and cash flow statement automatically — the same reports banks and investors ask for."
    },
    {
      feature: "Account Payable",
      featureSet: "Finance",
      pillar: "Money Mirror",
      format: "Video",
      goal: "Reach",
      title: "How Much Do You Owe Right Now? The Honest Answer Might Surprise You",
      message: "Multiple supplier credits, outstanding loans, unpaid service providers — the total outstanding payable of a typical SME is almost always more than the owner thinks. Account Payable consolidates everything owed into one number with due dates. 'Knowing what you owe is the beginning of controlling it.'",
      caption: "\"Add up every supplier credit, every outstanding invoice, every borrowed amount. Now compare it to what you thought. Account Payable does this automatically.\"",
      hook: "Account Payable (PRO) tracks every outstanding payment your business owes — suppliers, service providers, loans — with amounts and due dates."
    },
    {
      feature: "Reconciliations",
      featureSet: "Finance",
      pillar: "Demo Room",
      format: "Reel / TikTok",
      goal: "Convert",
      title: "Bank Reconciliation in a Nigerian Shop: Why It Matters More Than You Think",
      message: "Show Reconciliations matching bank records against sales records — flagging transactions that appear in sales but not the bank account, and vice versa. This catches cashier fraud, POS errors, and bank charges simultaneously. 'Your books and your bank account should tell the same story.'",
      caption: "\"Your sales say ₦340K. Your bank says ₦311K. That ₦29K difference has an explanation. Reconciliations finds it.\"",
      hook: "Reconciliations (PRO) matches your sales records against your bank transactions — surfacing every discrepancy so nothing goes unaccounted for."
    },
    {
      feature: "Inventory Valuations",
      featureSet: "Finance",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "Your Stock Is Worth Money — Do You Know Exactly How Much?",
      message: "Inventory valuation is the monetary worth of all your current stock at cost price. It's a business asset. Banks use it for loans. Investors use it for valuation. Inventory Valuations calculates this automatically using FIFO or average cost methods. Most shop owners have never calculated this.",
      caption: "\"The stock in your shop right now is a financial asset. Inventory Valuations tells you exactly what it's worth — and your bank will want to know.\"",
      hook: "Inventory Valuations (PRO) calculates the financial worth of your entire stock in real time — the number banks and investors need when assessing your business."
    },
    {
      feature: "Financial Reports",
      featureSet: "Finance",
      pillar: "Proof Wall",
      format: "Video",
      goal: "Convert",
      title: "'Financial Reports Helped Me Get a Business Loan in 2 Weeks'",
      message: "User story: applied for a business loan, bank asked for 6 months of financial statements. Used Financial Reports to generate P&L, balance sheet, and cash flow — clean, professional, exportable. Loan approved. 'I didn't need an accountant. I needed Sellytics.'",
      caption: "\"The bank asked for 6 months of financials. Financial Reports generated them in minutes. Loan approved. She didn't need an accountant.\"",
      hook: "Financial Reports (PRO) generates bank-ready P&L statements, balance sheets, and cash flow reports — the exact documents lenders require."
    },
    {
      feature: "Financial Dashboard",
      featureSet: "Finance",
      pillar: "African Hustle",
      format: "Story / Poll",
      goal: "Engage",
      title: "Have You Ever Applied for a Business Loan?",
      message: "Yes and got it / Yes but was rejected / No — never tried / Want to but don't know how. DM anyone who said 'rejected' or 'want to but don't know how': 'The most common rejection reason is no financial records. Financial Reports fixes that.' Warm, helpful, not pushy.",
      caption: "\"Has your business ever applied for a loan? Tell us — there's a reason we're asking. 👇\"",
      hook: "Financial Reports (PRO) creates the documentation most African SMEs are rejected for loans over not having. Clean financials = better loan outcomes."
    },
  ],

  "Warehouse Hub": [
    {
      feature: "External Clients",
      featureSet: "Warehouse Hub",
      pillar: "African Hustle",
      format: "Reel / TikTok",
      goal: "Reach",
      title: "Your Empty Storage Space Is Costing You Money Every Day You Don't Rent It",
      message: "The big idea reveal post. If you have spare warehouse, back room, or storage space — other businesses will pay to store their goods there. Warehouse Hub connects you with those businesses and manages the entire relationship: stock tracking, client access, payment. 'Your empty space is passive income.'",
      caption: "\"Empty backroom. Unused warehouse. Dead space costing you rent. Warehouse Hub turns it into monthly income from other businesses storing their goods with you. 🏭\"",
      hook: "External Clients lets you onboard other businesses as paying storage clients — turning your unused space into a recurring revenue stream."
    },
    {
      feature: "Warehouse Overview",
      featureSet: "Warehouse Hub",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "How Warehousing as a Business Model Actually Works in Africa",
      message: "Teach the concept: informal warehousing is already massive in Africa — traders paying for space in other traders' stores. Warehouse Hub formalises it: digital contracts, inventory tracking per client, transparent billing. 'The market already exists. Warehouse Hub just makes it professional.'",
      caption: "\"African traders have been paying each other for storage space for decades. Warehouse Hub makes it trackable, professional, and profitable.\"",
      hook: "Warehouse Overview gives you a complete view of all storage — your own inventory and every external client's goods — in one managed dashboard."
    },
    {
      feature: "Stock Transfers",
      featureSet: "Warehouse Hub",
      pillar: "Demo Room",
      format: "Video",
      goal: "Convert",
      title: "Watch: Managing 3 External Clients' Stock From One Phone",
      message: "Screen-record managing the Warehouse Hub with 3 client stores. Show each client's inventory separately, process a stock transfer request, handle a return. Every action is tracked. 'Your clients can see their own stock. You can see everything.' Professional warehouse management on a phone.",
      caption: "\"3 external clients. Different products. All managed from one phone. Warehouse Hub tracks every unit — yours and theirs. 📦\"",
      hook: "Stock Transfers in Warehouse Hub tracks every movement of client goods — in and out — with a full paper trail that both you and your client can verify."
    },
    {
      feature: "External Clients",
      featureSet: "Warehouse Hub",
      pillar: "Money Mirror",
      format: "Carousel",
      goal: "Reach",
      title: "The Maths of Warehousing Income: What 3 Clients Could Pay You Monthly",
      message: "Real numbers. If you have 100sqm of spare storage and charge ₦500/sqm/month = ₦50,000/month. 3 clients at different rates = ₦120,000–₦200,000/month in passive income on space you were already paying rent for. Show the model clearly. The numbers are compelling.",
      caption: "\"100 square metres of empty storage. 3 clients paying to use it. ₦180,000 per month from space you were already paying for. Here's how Warehouse Hub makes this work.\"",
      hook: "External Clients enables you to formalise storage arrangements with paying businesses — turning unused square footage into monthly recurring income."
    },
    {
      feature: "Returns Processing",
      featureSet: "Warehouse Hub",
      pillar: "Classroom",
      format: "Carousel",
      goal: "Trust",
      title: "The Problem With Informal Storage Arrangements (And How to Fix Them)",
      message: "Informal storage = no records, disputed quantities, missing goods, no accountability. When a client says '40 units are missing' you have no way to prove otherwise. Returns Processing and Stock Transfers create an unbreakable paper trail. 'Professional warehousing protects you AND your clients.'",
      caption: "\"'Where are my 40 units?' Without records, you can't answer that. Warehouse Hub means you always can.\"",
      hook: "Returns Processing creates a documented audit trail for every item returned by a client — protecting you from disputes and your clients from losses."
    },
    {
      feature: "Client Requests",
      featureSet: "Warehouse Hub",
      pillar: "Demo Room",
      format: "Reel / TikTok",
      goal: "Convert",
      title: "How a Client Requests Their Stock From Your Warehouse",
      message: "Show the full client request flow: external client sends a request for their goods, you receive it in the app, you process the release, stock is updated, client confirms receipt. 30 seconds, no cuts. Professional, traceable, scalable. 'This is warehousing that works like a business.'",
      caption: "\"Client needs their stock. They request it in the app. You process it. Records update. No calls. No confusion. No missing goods. That's Warehouse Hub.\"",
      hook: "Client Requests creates a formal request system — clients submit stock needs digitally, you process and confirm, everything is tracked automatically."
    },
    {
      feature: "External Clients",
      featureSet: "Warehouse Hub",
      pillar: "Proof Wall",
      format: "Video",
      goal: "Convert",
      title: "'I'm Earning ₦150,000 a Month From Space I Was Wasting'",
      message: "User story. Had a large backroom being used as general storage. Onboarded 2 external clients via Warehouse Hub. Charges per pallet per month. Manages everything digitally. The income now covers half her shop's monthly rent. Real numbers, real transformation.",
      caption: "\"Her backroom was full of old boxes. Now it holds 2 paying clients' stock and covers half her rent. Warehouse Hub made the difference.\"",
      hook: "Warehouse Hub enabled this user to formalise storage arrangements with 2 businesses — turning clutter space into ₦150,000/month income."
    },
    {
      feature: "Warehouse Overview",
      featureSet: "Warehouse Hub",
      pillar: "African Hustle",
      format: "Story / Poll",
      goal: "Engage",
      title: "Do You Have Any Unused Storage Space in Your Shop or Property?",
      message: "Yes — a lot / Yes — a little / No / I rent storage from others. Anyone who says 'yes' is a direct Warehouse Hub lead. DM immediately: 'You could be earning from that space. Warehouse Hub lets you manage storage clients professionally. Want to see how?' Highest-intent segment in your audience.",
      caption: "\"Honest question: do you have any unused storage space in your shop or property right now? 👇 (There's a reason we're asking.)\"",
      hook: "Warehouse Hub's External Clients feature is built specifically for people who answered 'yes — I have spare space but didn't know how to monetise it professionally."
    },
  ]
};

const allPosts = [
  ...content["AI Insights"].map((p, i) => ({ ...p, id: `ai-${i}`, module: "AI Insights" })),
  ...content["Finance"].map((p, i) => ({ ...p, id: `fin-${i}`, module: "Finance" })),
  ...content["Warehouse Hub"].map((p, i) => ({ ...p, id: `wh-${i}`, module: "Warehouse Hub" })),
];

const goalExplainer = {
  Reach:   "Designed to travel. Cultural resonance, hooks, and new feature revelations earn shares and discovery from cold audiences.",
  Trust:   "Credibility-building. Teaches the audience something genuinely useful about the feature — making Sellytics the expert they trust.",
  Convert: "Warm audience, specific feature, clear payoff. This post removes the last objection and makes upgrading feel obvious.",
  Engage:  "Two-way conversation. Every response is a qualified lead. DM every respondent with a personalised feature message.",
};

export default function FeatureContentStrategy() {
  const [activeModule, setActiveModule] = useState("AI Insights");
  const [selectedPost, setSelectedPost] = useState(null);
  const [view, setView] = useState("grid");
  const [filterGoal, setFilterGoal] = useState("All");

  const modulePosts = allPosts.filter(p =>
    p.module === activeModule &&
    (filterGoal === "All" || p.goal === filterGoal)
  );

  const mod = FEATURE_SETS[activeModule];
  const selected = allPosts.find(p => p.id === selectedPost);

  const totalByGoal = (mod) => {
    const posts = allPosts.filter(p => p.module === mod);
    return {
      Reach: posts.filter(p => p.goal === "Reach").length,
      Trust: posts.filter(p => p.goal === "Trust").length,
      Convert: posts.filter(p => p.goal === "Convert").length,
      Engage: posts.filter(p => p.goal === "Engage").length,
    };
  };

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #CCC; border-radius: 4px; }
        .pill { display: inline-flex; align-items: center; gap: 3px; padding: 2px 8px; border-radius: 20px; font-size: 10px; font-weight: 600; }
        .post-card { background: #FFF; border: 1px solid #E8E5E0; border-radius: 12px; padding: 18px; cursor: pointer; transition: all 0.15s; display: flex; flex-direction: column; gap: 10px; }
        .post-card:hover { border-color: #BBBBB5; box-shadow: 0 4px 16px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .post-card.sel { box-shadow: 0 0 0 2px #1A1A1A; border-color: #1A1A1A; }
        .list-row { background: #FFF; border: 1px solid #E8E5E0; border-radius: 10px; padding: 14px 18px; cursor: pointer; transition: all 0.15s; display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: start; }
        .list-row:hover { border-color: #BBBBB5; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
        .list-row.sel { border-color: #1A1A1A; box-shadow: 0 0 0 1.5px #1A1A1A; }
        .mod-btn { background: none; border: 2px solid transparent; cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 10px; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .tb { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 6px; transition: all 0.15s; }
        .se { border: 1px solid #DDD; border-radius: 7px; padding: 6px 10px; font-family: 'DM Sans', sans-serif; font-size: 11px; background: #FFF; color: #444; cursor: pointer; outline: none; }
        .np { flex: 1; padding: 9px; background: #F8F7F4; border: 1px solid #E8E5E0; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; color: #555; font-family: 'DM Sans', sans-serif; }
        .nn { flex: 1; padding: 9px; background: #1A1A1A; border: none; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; color: #FFF; font-family: 'DM Sans', sans-serif; }
        @keyframes fs { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        .an { animation: fs 0.2s ease-out; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: "#FFF", borderBottom: "1px solid #E8E5E0", padding: "20px 28px", flexShrink: 0 }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 4 }}>Sellytics HQ · Advanced Features</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>Dedicated Feature Content Strategy</h1>
          <div style={{ fontSize: 12, color: "#AAA", marginTop: 4 }}>AI Insights · Finance Dashboard · Warehouse Hub — 24 scroll-stopping posts</div>
        </div>

        {/* Module selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {Object.entries(FEATURE_SETS).map(([name, mod]) => {
            const isActive = activeModule === name;
            const counts = totalByGoal(name);
            return (
              <button key={name} className="mod-btn"
                onClick={() => { setActiveModule(name); setSelectedPost(null); setFilterGoal("All"); }}
                style={{
                  background: isActive ? mod.bg : "transparent",
                  borderColor: isActive ? mod.color : "#E8E5E0",
                  color: isActive ? mod.color : "#888",
                }}>
                <span style={{ fontSize: 20 }}>{mod.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div>{name}</div>
                  <div style={{ fontSize: 9, fontWeight: 400, color: isActive ? mod.color + "99" : "#CCC" }}>
                    {counts.Reach}R · {counts.Trust}T · {counts.Convert}C · {counts.Engage}E
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ background: "#F3F2EF", borderRadius: 7, padding: 3, display: "flex", gap: 2 }}>
            {[["grid", "⊞ Grid"], ["list", "≡ List"]].map(([v, l]) => (
              <button key={v} className="tb" onClick={() => setView(v)}
                style={{ background: view === v ? "#FFF" : "transparent", color: view === v ? "#1A1A1A" : "#999", boxShadow: view === v ? "0 1px 4px rgba(0,0,0,.1)" : "none" }}>{l}</button>
            ))}
          </div>
          <select className="se" value={filterGoal} onChange={e => setFilterGoal(e.target.value)}>
            <option value="All">All Goals</option>
            {Object.keys(GOALS).map(g => <option key={g}>{g}</option>)}
          </select>
          {filterGoal !== "All" && (
            <button onClick={() => setFilterGoal("All")} style={{ fontSize: 11, color: "#C0392B", background: "#FEF2F2", border: "1px solid #FFCDD0", borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontWeight: 600 }}>✕ Clear</button>
          )}
        </div>
      </div>

      {/* ── MODULE BANNER ── */}
      <div style={{ background: mod.bg, borderBottom: `1px solid ${mod.border}`, padding: "14px 28px", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ fontSize: 28 }}>{mod.icon}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: mod.color }}>{activeModule}</div>
              <div style={{ fontSize: 12, color: mod.color + "99" }}>{mod.desc}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {Object.entries(FEATURE_SETS[activeModule].features).map(([name, f]) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", background: "#FFF", border: `1px solid ${mod.border}`, borderRadius: 8 }}>
                <span style={{ fontSize: 14 }}>{f.icon}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: mod.color }}>{name.length > 16 ? name.slice(0, 15) + "…" : name}</span>
                <span style={{ fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 3, background: f.tag === "pro" ? "#FFFBEB" : "#F5F3FF", color: f.tag === "pro" ? "#B45309" : "#7C3AED" }}>{f.tag === "pro" ? "★" : "FREE"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Main */}
        <div style={{ flex: 1, overflowY: "auto", padding: "22px 28px" }}>
          {view === "grid" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {modulePosts.map((post, i) => {
                const feat = FEATURE_SETS[post.featureSet]?.features[post.feature];
                return (
                  <div key={post.id} className={`post-card${selectedPost === post.id ? " sel" : ""}`}
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}>
                    {/* Feature badge */}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ fontSize: 18 }}>{feat?.icon || "📌"}</span>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: mod.color, lineHeight: 1.3 }}>{post.feature}</div>
                        {feat && <span style={{ fontSize: 8, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: feat.tag === "pro" ? "#FFFBEB" : "#F5F3FF", color: feat.tag === "pro" ? "#B45309" : "#7C3AED" }}>{feat.tag === "pro" ? "★ PRO" : "FREE"}</span>}
                      </div>
                    </div>

                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700, lineHeight: 1.35, color: "#1A1A1A", flexGrow: 1 }}>{post.title}</div>

                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      <span className="pill" style={{ background: PILLARS[post.pillar].bg, color: PILLARS[post.pillar].color }}>{post.pillar}</span>
                      <span className="pill" style={{ background: "#F3F2EF", color: "#666" }}>{FORMATS[post.format]} {post.format}</span>
                    </div>
                    <div className="pill" style={{ background: GOALS[post.goal].bg, color: GOALS[post.goal].color, alignSelf: "flex-start" }}>{GOALS[post.goal].label}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {modulePosts.map((post, i) => {
                const feat = FEATURE_SETS[post.featureSet]?.features[post.feature];
                return (
                  <div key={post.id} className={`list-row${selectedPost === post.id ? " sel" : ""}`}
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}>
                    <div style={{ fontSize: 24, paddingTop: 2 }}>{feat?.icon || "📌"}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, lineHeight: 1.35 }}>{post.title}</div>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 9, fontWeight: 700, color: mod.color, background: mod.bg, padding: "2px 7px", borderRadius: 4 }}>{post.feature}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, color: PILLARS[post.pillar].color, background: PILLARS[post.pillar].bg, padding: "2px 7px", borderRadius: 4 }}>{post.pillar}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, color: "#666", background: "#F3F2EF", padding: "2px 7px", borderRadius: 4 }}>{FORMATS[post.format]} {post.format}</span>
                      </div>
                    </div>
                    <div className="pill" style={{ background: GOALS[post.goal].bg, color: GOALS[post.goal].color, whiteSpace: "nowrap" }}>{GOALS[post.goal].label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── DETAIL PANEL ── */}
        {selected && (
          <div className="an" key={selected.id}
            style={{ width: 380, flexShrink: 0, borderLeft: "1px solid #E8E5E0", background: "#FFF", overflowY: "auto", padding: "24px 22px", display: "flex", flexDirection: "column" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 3 }}>{selected.featureSet} Module</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: FEATURE_SETS[selected.featureSet].color }}>{selected.feature}</div>
              </div>
              <button onClick={() => setSelectedPost(null)} style={{ background: "#F3F2EF", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", fontSize: 12, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, lineHeight: 1.25, marginBottom: 16 }}>{selected.title}</h2>

            {/* chips */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 18 }}>
              <span className="pill" style={{ background: FEATURE_SETS[selected.featureSet].bg, color: FEATURE_SETS[selected.featureSet].color, fontSize: 11 }}>{selected.featureSet}</span>
              <span className="pill" style={{ background: PILLARS[selected.pillar].bg, color: PILLARS[selected.pillar].color, fontSize: 11 }}>{selected.pillar}</span>
              <span className="pill" style={{ background: "#F3F2EF", color: "#555", fontSize: 11 }}>{FORMATS[selected.format]} {selected.format}</span>
              <span className="pill" style={{ background: GOALS[selected.goal].bg, color: GOALS[selected.goal].color, fontSize: 11 }}>{GOALS[selected.goal].label}</span>
            </div>

            {/* Feature spotlight */}
            {(() => {
              const feat = FEATURE_SETS[selected.featureSet]?.features[selected.feature];
              const fmod = FEATURE_SETS[selected.featureSet];
              return feat ? (
                <div style={{ marginBottom: 18, padding: "13px 15px", background: fmod.bg, borderRadius: 10, border: `1px solid ${fmod.border}` }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 24 }}>{feat.icon}</span>
                    <div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: fmod.color }}>{selected.feature}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, background: feat.tag === "pro" ? "#FFFBEB" : "#F5F3FF", color: feat.tag === "pro" ? "#B45309" : "#7C3AED" }}>{feat.tag === "pro" ? "★ PRO" : "FREE"}</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>{feat.desc}</div>
                      <div style={{ marginTop: 8, padding: "8px 10px", background: "#FFF", borderRadius: 7, border: `1px solid ${fmod.border}` }}>
                        <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#AAA", marginBottom: 4 }}>Content Hook</div>
                        <div style={{ fontSize: 12, color: "#333", lineHeight: 1.65 }}>{selected.hook}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}

            <div style={{ height: 1, background: "#F0EDE8", marginBottom: 18 }} />

            {/* Message angle */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 7 }}>Message Angle</div>
              <div style={{ fontSize: 13, color: "#333", lineHeight: 1.8, background: "#F8F7F4", padding: "13px 15px", borderRadius: 9, borderLeft: `3px solid ${PILLARS[selected.pillar].color}` }}>{selected.message}</div>
            </div>

            {/* Caption */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 7 }}>Opening Caption</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontStyle: "italic", color: "#1A1A1A", lineHeight: 1.7, background: PILLARS[selected.pillar].bg, padding: "14px 16px", borderRadius: 9, border: `1px solid ${PILLARS[selected.pillar].color}25` }}>{selected.caption}</div>
            </div>

            {/* Goal box */}
            <div style={{ padding: "12px 14px", background: GOALS[selected.goal].bg, borderRadius: 9, border: `1px solid ${GOALS[selected.goal].color}25`, marginBottom: 22 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: GOALS[selected.goal].color, marginBottom: 5 }}>{GOALS[selected.goal].label} — Why This Goal?</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.75 }}>{goalExplainer[selected.goal]}</div>
            </div>

            {/* Navigate within module */}
            <div style={{ display: "flex", gap: 7, marginTop: "auto" }}>
              {(() => {
                const idx = modulePosts.findIndex(p => p.id === selected.id);
                return (
                  <>
                    {idx > 0 && <button className="np" onClick={() => setSelectedPost(modulePosts[idx - 1].id)}>← Previous</button>}
                    {idx < modulePosts.length - 1 && <button className="nn" onClick={() => setSelectedPost(modulePosts[idx + 1].id)}>Next →</button>}
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}