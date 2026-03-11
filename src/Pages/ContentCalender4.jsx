import { useState } from "react";

const FEATURES = {
  "Sales Tracker":          { icon: "📈", color: "#7C3AED", bg: "#F5F3FF", tag: "free",  cat: "Sales & Revenue" },
  "Products & Pricing":     { icon: "🏷️", color: "#7C3AED", bg: "#F5F3FF", tag: "free",  cat: "Inventory" },
  "Stock Transfer":         { icon: "🔄", color: "#0369A1", bg: "#E0F2FE", tag: "free",  cat: "Inventory" },
  "Manage Inventory":       { icon: "📦", color: "#0369A1", bg: "#E0F2FE", tag: "free",  cat: "Inventory" },
  "Sales Receipts":         { icon: "🧾", color: "#7C3AED", bg: "#F5F3FF", tag: "free",  cat: "Sales & Revenue" },
  "Returned Items Tracker": { icon: "↩️", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Sales & Revenue" },
  "Expenses Tracker":       { icon: "💸", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Finance" },
  "Unpaid Supplies":        { icon: "⏳", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Finance" },
  "Debtors":                { icon: "👥", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Finance" },
  "Suppliers & Product Ir.":{ icon: "🔍", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Operations" },
  "Sales Summary":          { icon: "📊", color: "#7C3AED", bg: "#F5F3FF", tag: "free",  cat: "Analytics" },
  "Customer Manager":       { icon: "🤝", color: "#B45309", bg: "#FFFBEB", tag: "pro",   cat: "Operations" },
};

const PILLARS = {
  "Money Mirror":   { color: "#C0392B", bg: "#FEF2F2" },
  "Proof Wall":     { color: "#1565C0", bg: "#EFF6FF" },
  "Classroom":      { color: "#4527A0", bg: "#F3F0FF" },
  "African Hustle": { color: "#E65100", bg: "#FFF8F0" },
  "Demo Room":      { color: "#00695C", bg: "#EDFFF9" },
};

const GOALS = {
  Reach:   { color: "#0277BD", bg: "#E1F5FE", label: "📡 Reach" },
  Trust:   { color: "#2E7D32", bg: "#E8F5E9", label: "🤝 Trust" },
  Convert: { color: "#C62828", bg: "#FFEBEE", label: "💰 Convert" },
  Engage:  { color: "#6A1B9A", bg: "#F3E5F5", label: "💬 Engage" },
};

const FORMATS = {
  "Reel / TikTok": "🎬", "Carousel": "📑", "Static Post": "🖼️",
  "Story / Poll": "📊", "Video": "📹", "Text Post": "✍️", "Live": "🔴", "Collab Post": "🤝",
};

// ─────────────────────────────────────────────
//  90 DAYS — Features woven into every post
// ─────────────────────────────────────────────
const days = [
  // ══ WEEK 1 — Foundation & Problem Awareness ══
  { day:1,  week:1, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Sales Tracker",
    title:"Your Shop Is Open 12 Hours. Do You Know What It Made?",
    message:"Hook: most shop owners close without knowing the day's true revenue. Show the Sales Tracker logging each sale in real time — offline — and producing the day's total in seconds. Contrast: mental arithmetic vs. a clean dashboard number.",
    caption:"\"Closed my shop tonight. Knew my exact revenue before I locked the door. That used to take me an hour. 📈\"",
    featureHook:"Sales Tracker shows real-time revenue as each sale is recorded — even without internet." },

  { day:2,  week:1, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Manage Inventory",
    title:"What 'Managing Inventory' Actually Means (Most Get It Wrong)",
    message:"Education post: inventory management isn't just counting stock — it's knowing what you have, what you've sold, and what's running low before customers ask. Walk through the Manage Inventory screen and show what data it surfaces automatically.",
    caption:"\"Inventory management isn't a spreadsheet. It's knowing what's happening in your shop right now — without walking the floor.\"",
    featureHook:"Manage Inventory tracks what you have sold and what remains, live, so you're never caught off guard." },

  { day:3,  week:1, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"POV: Opening Your Shop at 6:30am Before Lagos Wakes Up",
    message:"Pure culture content. Ambient footage, trending audio, no pitch. The early morning ritual every trader knows — unlocking, arranging, praying it's a good day. Make them feel seen. Sellytics logo appears on phone screen in last second only.",
    caption:"\"Nobody makes noise about the 6am shift. We see you. Every single day. 🙏\"",
    featureHook:null },

  { day:4,  week:1, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Products & Pricing",
    title:"Watch: I Added 50 Products and Set All Prices in Under 8 Minutes",
    message:"Screen-record the Products & Pricing screen — add items, set cost price, selling price, stock quantity. Uncut, real-time. The speed destroys the 'setup looks hard' objection before it forms. End: 'This is your entire catalogue, live, offline-ready.'",
    caption:"\"50 products. 8 minutes. Everything priced, stocked, and ready to sell. That's Products & Pricing on Sellytics. ⚡\"",
    featureHook:"Products & Pricing lets you add your entire catalogue with cost price, sell price, and stock levels — works fully offline." },

  { day:5,  week:1, pillar:"Money Mirror",    format:"Carousel",      goal:"Trust",
    feature:"Sales Summary",
    title:"High Sales ≠ High Profit — Here's the Maths",
    message:"Teach: revenue is vanity, profit is sanity. Build a fictional ₦1.5M/month shop example showing COGS, overhead, and shrinkage eating the margin. Final slide: 'Sales Summary on Sellytics shows you this breakdown automatically every week.' Pain first, feature second.",
    caption:"\"She was turning ₦1.5M a month and taking home ₦180K. Sales Summary showed her exactly where the rest was going.\"",
    featureHook:"Sales Summary gives you a full performance breakdown — revenue, profit, top sellers — without manual calculation." },

  { day:6,  week:1, pillar:"Proof Wall",      format:"Static Post",   goal:"Trust",
    feature:"Sales Tracker",
    title:"'I Tracked More Sales in Week 1 Than I Did All of Last Month'",
    message:"Real user quote with photo and shop name. Bold the key result. The implied message: Sales Tracker captures transactions she was previously missing — walk-in sales, quick cash sales, staff-run sales. One quote, one number, one face.",
    caption:"\"'Using Sellytics Sales Tracker, I realised I was missing 30+ transactions a week.' — Ngozi, Surulere, Lagos 📍\"",
    featureHook:"Sales Tracker records every transaction — so nothing disappears between opening and closing." },

  { day:7,  week:1, pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",
    feature:null,
    title:"Weekend Poll: How Do You Track Sales Right Now?",
    message:"Options: Notebook / Excel / Memory / An app. See where your audience stands. Screenshot and repost the results Monday. DM everyone who said 'Memory' with a single question: 'How do you know how much you made today?'",
    caption:"\"Be honest — how are you tracking your sales right now? No judgment. 👇\"",
    featureHook:null },

  // ══ WEEK 2 — Education & Trust Building ══
  { day:8,  week:2, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Sales Summary",
    title:"5 Numbers Every Shop Owner Should Know by Monday 9am",
    message:"Total revenue, gross profit, top 3 sellers, items to reorder, outstanding debts. Each slide is a standalone truth. Final slide: 'Sellytics Sales Summary gives you all 5 in one screen before your first customer walks in.' Build the habit, then show the tool.",
    caption:"\"If you can't answer these 5 by 9am Monday, you're running your business blind. Here's the fix.\"",
    featureHook:"Sales Summary aggregates your week's performance into a single readable screen — available offline." },

  { day:9,  week:2, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Debtors",
    title:"She Had ₦200K in Sales. ₦140K Was on Credit.",
    message:"Credit customers are the silent cash flow killer. Show the maths on screen: sales look great, but half is unpaid. Cut to Debtors feature listing who owes what, since when, and how much. 'This is why your shop feels busy but your pocket feels empty.'",
    caption:"\"High sales, empty pocket. The Debtors feature showed her exactly who owed her — and for how long. 💸\"",
    featureHook:"Debtors (PRO) tracks every customer who took goods on credit — names, amounts, and how overdue they are." },

  { day:10, week:2, pillar:"Proof Wall",      format:"Video",         goal:"Trust",
    feature:"Manage Inventory",
    title:"Meet Shade: She Stopped Counting Stock by Hand",
    message:"60-second user story. Before: every Sunday counting stock manually for 3 hours. After: Manage Inventory shows current stock levels in seconds. Let her walk through the screen on camera. Real product names, real numbers, real shop.",
    caption:"\"3 hours every Sunday, counting by hand. Now it takes 8 minutes on Sellytics. Shade hasn't touched a notebook since.\"",
    featureHook:"Manage Inventory tracks what's left in real time — every sale automatically reduces your stock count." },

  { day:11, week:2, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Sales Tracker",
    title:"NEPA Took the Light. Sellytics Didn't Stop.",
    message:"The most important demo you will ever film. Switch off Wi-Fi mid-transaction on camera. Sales Tracker keeps recording. No error. No crash. No data lost. Cultural hook (NEPA) + product differentiator in one 30-second post. Zero narration needed.",
    caption:"\"Light went. Wi-Fi died. Sales Tracker kept going. Offline-first isn't a feature. It's the whole point. ⚡\"",
    featureHook:"Sales Tracker works fully offline — every sale is recorded even without internet, and syncs automatically when reconnected." },

  { day:12, week:2, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Expenses Tracker",
    title:"Why Your Revenue Number Is Lying to You",
    message:"Revenue minus cost of goods is NOT profit. Overhead, transport, generator fuel, packaging, market levies — these invisible expenses are what make profitable shops feel poor. Final slide: Expenses Tracker captures every outflow so your real profit is never hidden.",
    caption:"\"Revenue is what you made. Profit is what you kept. Most shop owners don't know the difference until it's too late.\"",
    featureHook:"Expenses Tracker (PRO) logs every business expense so your true profit — not just your sales — is always visible." },

  { day:13, week:2, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",
    feature:"Customer Manager",
    title:"Shop Owner Spotlight #1 — Blessing, Onitsha",
    message:"Feature a real retailer. Her story, her city, what she sells, her biggest win this month. Tag her. Mention how she uses Customer Manager to know her regulars by name and buying pattern. Her network discovers Sellytics through her.",
    caption:"\"Meet Blessing from Onitsha. 4 years in, still building. She knows every regular customer's order before they ask. 🙌\"",
    featureHook:"Customer Manager (PRO) keeps a record of your customers — purchase history, contact info, and buying patterns." },

  { day:14, week:2, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",
    feature:"Unpaid Supplies",
    title:"Do You Know What You Owe Your Suppliers Right Now?",
    message:"Yes exactly / I have a rough idea / Honestly no. Most will say 'rough idea'. Follow up with how Unpaid Supplies tracks every credit purchase from suppliers — what you owe, to whom, and by when. DM everyone who said 'no' with a personalised message.",
    caption:"\"Quick question: do you know exactly what you owe every supplier right now? 👇\"",
    featureHook:"Unpaid Supplies (PRO) tracks every credit purchase from suppliers — so you're never surprised by a debt you forgot." },

  // ══ WEEK 3 — Social Proof Surge ══
  { day:15, week:3, pillar:"Proof Wall",      format:"Carousel",      goal:"Trust",
    feature:"Sales Receipts",
    title:"Before & After: Same Shop, Professional Receipts",
    message:"Left slide: handwritten receipt on torn paper, customer photos it suspiciously. Right slide: Sellytics Sales Receipts — clean, branded, with itemised breakdown. The professionalism upgrade builds customer trust AND creates a sales record simultaneously.",
    caption:"\"The moment you hand a customer a proper receipt, they know you're serious. Sales Receipts on Sellytics does this automatically.\"",
    featureHook:"Sales Receipts generates clean, itemised receipts for every transaction — building customer trust and your own records at once." },

  { day:16, week:3, pillar:"Classroom",       format:"Reel / TikTok", goal:"Reach",
    feature:"Stock Transfer",
    title:"You Have 3 Shops. Stock Is Stranded in One. Here's the Fix.",
    message:"Common pain for multi-location owners: shop A is sold out, shop B has 40 units sitting idle. Show Stock Transfer moving inventory between locations in seconds, updating both shops' stock counts automatically. 'Your stock shouldn't be trapped because of location.'",
    caption:"\"Shop A: sold out. Shop B: 40 units collecting dust. Stock Transfer moves it in under a minute. 🔄\"",
    featureHook:"Stock Transfer records and tracks every movement of goods between your locations — so nothing gets lost in transit." },

  { day:17, week:3, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Sales Summary",
    title:"End-of-Week Report in 90 Seconds",
    message:"Record opening Sales Summary after a full week. Show: total revenue, best-selling products, worst performers, profit margin, week-on-week comparison. Every number appears automatically. 'This used to be Sunday evening with a calculator. Now it's 90 seconds on Monday morning.'",
    caption:"\"Sunday night used to mean 2 hours with a calculator. Now my entire week is summarised before my tea goes cold.\"",
    featureHook:"Sales Summary compiles your entire week's performance automatically — revenue, profit, top sellers, slow movers." },

  { day:18, week:3, pillar:"Money Mirror",    format:"Text Post",     goal:"Reach",
    feature:"Returned Items Tracker",
    title:"The Return Problem Nobody Talks About",
    message:"When a customer returns an item, what happens? Does the stock go back? Does the money? Do you record it? Most shops have no system — returns just disappear. Show how Returned Items Tracker creates a proper paper trail: item back in stock, refund logged, record kept.",
    caption:"\"Every returned item that isn't tracked is a loss you absorb silently. Here's what most shop owners are missing.\"",
    featureHook:"Returned Items Tracker (PRO) logs every return — restocking the item and recording the refund so nothing disappears." },

  { day:19, week:3, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"Unofficial Rules of Running a Nigerian Shop",
    message:"Humour list. 'The customer is always right — until they want to buy on credit.' 'Every supplier is your best friend until delivery day.' Cultural resonance = massive shareability in WhatsApp groups. Sellytics logo only at the very end.",
    caption:"\"Every shop owner in Nigeria will feel every single one of these in their chest 😂\"",
    featureHook:null },

  { day:20, week:3, pillar:"Proof Wall",      format:"Video",         goal:"Convert",
    feature:"Expenses Tracker",
    title:"'I Found ₦47,000 in Expenses I'd Completely Forgotten'",
    message:"User reaction video. She went through her first month on Expenses Tracker and found recurring costs she had stopped noticing. Generator fuel, market association dues, packaging, loading fees. 'I was pricing my goods as if these costs didn't exist.' Real number, real face.",
    caption:"\"She thought her profit was ₦180K. Expenses Tracker showed her it was ₦133K. The ₦47K difference? Costs she'd normalised.\"",
    featureHook:"Expenses Tracker (PRO) captures every outflow — recurring or one-off — so your profit calculation is always honest." },

  { day:21, week:3, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert",
    feature:"Debtors",
    title:"How Many Customers Owe You Money Right Now?",
    message:"Options: 0 / 1–5 / 6–20 / More than I want to admit. Use results in next post. Follow up: 'Sellytics Debtors feature tracks every single one — name, amount, date, how overdue.' DM everyone who chose 'more than I want to admit' with a direct free trial link.",
    caption:"\"Real talk — how many people owe your shop money right now? 👇 (We won't judge.)\"",
    featureHook:"Debtors (PRO) lists every credit customer with outstanding balance and days overdue — so chasing payment becomes systematic." },

  // ══ WEEK 4 — Conversion Push ══
  { day:22, week:4, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert",
    feature:"Suppliers & Product Ir.",
    title:"Free vs. PRO: What You Get at Every Level",
    message:"Transparent breakdown. Free: Sales Tracker, Products & Pricing, Manage Inventory, Sales Receipts, Sales Summary. PRO adds: Returned Items, Expenses, Unpaid Supplies, Debtors, Suppliers & Product Intelligence, Customer Manager. Each PRO feature = one specific pain solved. Show the pain, then the feature, then the price.",
    caption:"\"Here's every feature, every tier, no confusion. Start free — upgrade when you're ready to go deeper.\"",
    featureHook:"Suppliers & Product Intelligence (PRO) tracks your suppliers and helps you identify which products and suppliers give you the best margin." },

  { day:23, week:4, pillar:"Classroom",       format:"Reel / TikTok", goal:"Trust",
    feature:"Unpaid Supplies",
    title:"Why You Should Never Buy on Credit Without Tracking It",
    message:"Buying from suppliers on credit feels like breathing room — until 3 suppliers are owed money simultaneously and payment day arrives. Show Unpaid Supplies tracking outstanding supplier credit: who, what, how much, when due. 'Your supplier relationships depend on knowing exactly what you owe.'",
    caption:"\"Buying on credit from suppliers is smart — until you can't remember who you owe. Unpaid Supplies fixes that.\"",
    featureHook:"Unpaid Supplies (PRO) tracks all credit purchases from suppliers — amounts, due dates, and payment status in one place." },

  { day:24, week:4, pillar:"Money Mirror",    format:"Video",         goal:"Convert",
    feature:"Sales Tracker",
    title:"The Real Cost of Not Tracking: A 90-Day Calculation",
    message:"Use the Sales Tracker data story: a shop doing 60 transactions/day, missing 5% to unrecorded sales = 3 unrecorded sales/day. At ₦2,500 average = ₦7,500/day = ₦225,000/month = ₦2.7M/year. Show the maths slowly. Then show the annual cost of Sellytics. The gap is the pitch.",
    caption:"\"₦2.7M a year, gone quietly. Not to theft. Not to bad stock. Just to not tracking. Here's the maths.\"",
    featureHook:"Sales Tracker records every transaction in real time — so every ₦2,500 sale is captured, not forgotten." },

  { day:25, week:4, pillar:"African Hustle",  format:"Static Post",   goal:"Trust",
    feature:"Customer Manager",
    title:"Shop Owner Spotlight #2 — Emeka, Kano",
    message:"Feature a male retailer in the North. 3 shops, electronics or phone accessories. He uses Customer Manager to identify his top 20 customers by purchase volume and give them early access to new stock. Show how knowing your customer base is a competitive advantage.",
    caption:"\"Meet Emeka from Kano. 3 shops. He knows his top 20 customers by name — and exactly what they buy. 💪\"",
    featureHook:"Customer Manager (PRO) builds a full profile of each customer — contact, purchase history, and total spend over time." },

  { day:26, week:4, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Returned Items Tracker",
    title:"What Happens When a Customer Returns Something?",
    message:"Film the full return flow: customer walks in, item returned, Returned Items Tracker logs it, stock is automatically updated, refund recorded. 30 seconds, no cuts. 'Every return is accounted for. No item disappears. No money vanishes.' Destroy the 'returns are too complicated to track' objection.",
    caption:"\"Customer returned an item. Stock updated. Refund logged. Record kept. All in 20 seconds. That's how returns should work.\"",
    featureHook:"Returned Items Tracker (PRO) handles the full return loop — logging the refund AND restocking the item simultaneously." },

  { day:27, week:4, pillar:"Proof Wall",      format:"Video",         goal:"Convert",
    feature:"Expenses Tracker",
    title:"30-Day Honest Review: What Actually Changed",
    message:"One user. Unscripted. 90 seconds. Focus on Expenses Tracker revelation — the costs she never tracked, how seeing them changed her pricing strategy, the margin improvement. Real dashboard shown. This is your highest-converting single post.",
    caption:"\"30 days. One honest user. She changed her prices after week 2 and hasn't looked back.\"",
    featureHook:"Expenses Tracker (PRO) showed this user hidden costs that were silently reducing her profit margin every single month." },

  { day:28, week:4, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert",
    feature:"Debtors",
    title:"Every Excuse for Not Tracking — Destroyed With Evidence",
    message:"'Too expensive' → Show free tier includes Sales Tracker, Inventory, Receipts, Summary. 'Too complicated' → Show 8-minute setup video. 'My business is too small' → Show Debtors feature finding ₦80K in uncollected credit in a tiny kiosk. 'I'll start next month' → Show the compounding loss calculator.",
    caption:"\"We've heard every excuse. Here's what the data says about each one.\"",
    featureHook:"Debtors (PRO) found ₦80,000 in outstanding credit for a single-location kiosk owner who 'didn't think she needed it.'" },

  { day:29, week:4, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"30 Days. Thank You for Being Here.",
    message:"Behind-the-scenes montage. User clips, DM screenshots (with permission), comment highlights. Celebrate the community without pitching anything. Make your followers feel like insiders who discovered something real before everyone else did.",
    caption:"\"30 days. Every day. This community made it worth every single one. 🙏\"",
    featureHook:null },

  { day:30, week:4, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Sales Tracker",
    title:"Your Free Trial Starts Right Now",
    message:"Warm, direct, confident close for month 1. Recap: Sales Tracker for revenue, Manage Inventory for stock, Sales Receipts for professionalism, Sales Summary for performance. All free. 14 days to try PRO features too. Show the signup in 20 seconds. Remove every last barrier.",
    caption:"\"Day 30. Everything you've seen this month is free for 14 days. No card. No commitment. Just results. Let's go.\"",
    featureHook:"Start with Sales Tracker, Sales Summary, Products & Pricing, Manage Inventory, and Sales Receipts — completely free." },

  // ══ WEEK 5 — Community & Credibility ══
  { day:31, week:5, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"Month 2 Starts Now. The Community Is Bigger.",
    message:"Open month 2 with energy. Montage of month 1 — user clips, follower milestones, DMs. Frame it as proof of movement. Every person watching is now part of something larger than one app. Set the tone: month 2 goes deeper.",
    caption:"\"Month 1 was the foundation. Month 2 we build on it. Welcome to the next chapter. 🔥\"",
    featureHook:null },

  { day:32, week:5, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Manage Inventory",
    title:"The Inventory Audit Every Shop Needs (Step-by-Step)",
    message:"How to do a proper audit: count physical stock, match against Manage Inventory records, find discrepancies, identify where losses occurred. Each step is a slide. Final slide: 'Sellytics makes this automatic — discrepancies flag themselves.'",
    caption:"\"Most shop owners have never done a real inventory audit. Here's exactly how — and what you'll find when you do.\"",
    featureHook:"Manage Inventory auto-reconciles your sales against stock levels — discrepancies become visible without manual counting." },

  { day:33, week:5, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Debtors",
    title:"She Had ₦340K in Outstanding Credit. Had No Idea.",
    message:"Debtor creep — credit sales that feel like revenue but are actually IOUs. Each customer owes a small amount. Cumulative effect is devastating to cash flow. Show Debtors listing names and amounts. 'This isn't sales. This is debt wearing a sales badge.'",
    caption:"\"₦340K in sales. Except ₦340K wasn't in the account. It was spread across 23 customers. Debtors showed the full list.\"",
    featureHook:"Debtors (PRO) shows the total outstanding credit across ALL your customers in one number — the real picture of your cash flow." },

  { day:34, week:5, pillar:"Proof Wall",      format:"Video",         goal:"Trust",
    feature:"Expenses Tracker",
    title:"The Shop That Almost Closed — Then Found Its Real Numbers",
    message:"Raw, unscripted user story. She was convinced the business wasn't profitable. Expenses Tracker revealed she had been absorbing transport costs personally — they weren't in her business expenses. Once added, her pricing changed. The business survived.",
    caption:"\"She thought the business was failing. Expenses Tracker showed her it was actually her pricing that was wrong.\"",
    featureHook:"Expenses Tracker (PRO) captures ALL business costs — including ones owners absorb personally without realising." },

  { day:35, week:5, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Suppliers & Product Ir.",
    title:"Which Supplier Is Actually Giving You the Best Deal?",
    message:"Show Suppliers & Product Intelligence comparing two suppliers for the same item: different lead times, different credit terms, different price histories. The data makes the better supplier obvious. 'Stop choosing suppliers by familiarity. Choose them by data.'",
    caption:"\"You have 3 suppliers for the same product. Sellytics shows you which one is actually making you money.\"",
    featureHook:"Suppliers & Product Intelligence (PRO) tracks supplier history, pricing, and performance so you negotiate from a position of data." },

  { day:36, week:5, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Sales Receipts",
    title:"Why Receipts Are More Than Proof of Purchase",
    message:"A receipt is a sales record, an inventory trigger, a customer trust signal, and a dispute resolution tool. Walk through how Sales Receipts on Sellytics does all four simultaneously. Each benefit is a slide. Last slide: 'And it takes zero extra effort — it's generated automatically.'",
    caption:"\"A receipt isn't admin. It's your shop's financial record, your customer's trust signal, and your dispute protection. All at once.\"",
    featureHook:"Sales Receipts auto-generates a clean, itemised receipt with every sale — building records and customer confidence simultaneously." },

  { day:37, week:5, pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",
    feature:"Customer Manager",
    title:"Do You Know Your Top 5 Customers by Name?",
    message:"Yes all 5 / Some of them / Not really / I don't track customers. Most mid-size shop owners know faces but not spend data. Follow up: 'Customer Manager builds a full profile of every buyer — name, contact, purchase history, total spend.' DM the 'not really' segment.",
    caption:"\"Your best customers are worth knowing deeply. Do you know who they actually are? 👇\"",
    featureHook:"Customer Manager (PRO) tracks every customer's purchase history and total lifetime spend — your best buyers become visible." },

  // ══ WEEK 6 — Authority & Depth ══
  { day:38, week:6, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Sales Summary",
    title:"How to Use Your Sales Data to Make Better Buying Decisions",
    message:"Advanced education: Sales Summary's top-seller list tells you what to double down on. The slow-mover list tells you what to stop buying. Week-on-week comparison shows seasonal patterns. This is data-driven restocking — no gut feel required.",
    caption:"\"Your Sales Summary isn't just a report. It's a buying strategy. Here's how to read it like one.\"",
    featureHook:"Sales Summary's product performance data tells you exactly what to restock, what to discount, and what to stop buying." },

  { day:39, week:6, pillar:"Money Mirror",    format:"Video",         goal:"Reach",
    feature:"Stock Transfer",
    title:"Running 2 Shops and Getting it Wrong — A Common Story",
    message:"Reconstruct the classic multi-shop nightmare: shop A sells out of a hot product, shop B has 30 units stranded. Customer at shop A leaves to a competitor. Stock Transfer could have moved those 30 units in 60 seconds. Show the alternative in real time.",
    caption:"\"Shop A: sold out. Customer walks to your competitor. Shop B: 30 units sitting. Stock Transfer: 60 seconds. The choice is yours.\"",
    featureHook:"Stock Transfer records every inter-branch stock movement with full paperwork — so nothing goes missing between locations." },

  { day:40, week:6, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert",
    feature:"Debtors",
    title:"6 Real Results. 6 Different Features. Same Platform.",
    message:"One result per slide, each tied to a specific feature. Slide 1: Sales Tracker caught missing transactions. Slide 2: Debtors recovered outstanding credit. Slide 3: Expenses Tracker revealed hidden costs. Slide 4: Manage Inventory ended manual counting. Volume and variety of proof with feature attribution.",
    caption:"\"6 shop owners. 6 different problems. 6 Sellytics features. One platform.\"",
    featureHook:"Debtors (PRO) helped one user recover ₦95,000 in outstanding credit she had mentally written off as lost." },

  { day:41, week:6, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Manage Inventory",
    title:"200 Products. Does Sellytics Still Work? Live Test.",
    message:"Bulk load 200 products. Test search speed, filter by category, generate a low-stock report. Show the app stays fast, offline-ready, and fully functional at scale. Destroys 'only works for small shops' objection permanently.",
    caption:"\"Someone asked if Sellytics slows down with 200 products. We tested it live. Watch.\"",
    featureHook:"Manage Inventory handles large catalogues at full speed — search, filter, and report on hundreds of products instantly." },

  { day:42, week:6, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",
    feature:"Suppliers & Product Ir.",
    title:"Shop Owner Spotlight #3 — Chidi, the Wholesaler",
    message:"Feature a wholesale distributor. 400+ SKUs, multiple LGAs, regular supplier credit. He uses Suppliers & Product Intelligence to rank suppliers by reliability and price consistency. Show the brand works at volume — not just corner kiosks.",
    caption:"\"Chidi moves 400+ SKUs weekly across 3 LGAs. Here's the system keeping it all together. 💼\"",
    featureHook:"Suppliers & Product Intelligence (PRO) gives Chidi a ranked view of his best-performing suppliers by price, reliability, and credit terms." },

  { day:43, week:6, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Expenses Tracker",
    title:"The 8 Business Expenses Most Shop Owners Never Record",
    message:"Generator fuel, loading/unloading fees, market association dues, packaging materials, phone data for business, transportation, bank charges, 'gifts' to agents. Each is a slide. Final: 'Expenses Tracker captures all of these — so your profit is never overstated.'",
    caption:"\"You're probably recording your COGS. But what about these 8 costs that quietly eat your margin?\"",
    featureHook:"Expenses Tracker (PRO) has categories for every type of business expense — from generator fuel to bank charges." },

  { day:44, week:6, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",
    feature:"Unpaid Supplies",
    title:"Have You Ever Been Surprised by a Supplier Payment You Forgot?",
    message:"Yes it was embarrassing / Yes but I handled it / Never — I track everything / This has almost happened. The 'yes' responses validate the problem. DM with: 'Unpaid Supplies on Sellytics means this never happens again — every supplier credit is logged with a due date.'",
    caption:"\"The supplier called. You completely forgot. We've all been there. Has this happened to you? 👇\"",
    featureHook:"Unpaid Supplies (PRO) logs every supplier credit with amount, date, and payment due — so payment day is never a surprise." },

  // ══ WEEK 7 — Conversion Intensification ══
  { day:45, week:7, pillar:"Proof Wall",      format:"Video",         goal:"Convert",
    feature:"Sales Summary",
    title:"60-Day Check-In: Is Sellytics Still Worth It?",
    message:"Bring back a month-1 user for an honest 60-day review. Ask: what feature do you use most? What surprised you? What would you tell your past self? Let her show her Sales Summary data live — real revenue trends, real product performance. No script.",
    caption:"\"60 days later. We asked Amaka: is it still worth it? She showed us her Sales Summary and let that answer.\"",
    featureHook:"Sales Summary's week-on-week trend data shows the cumulative impact of tracking — the improvement becomes visible over 60 days." },

  { day:46, week:7, pillar:"Classroom",       format:"Reel / TikTok", goal:"Reach",
    feature:"Products & Pricing",
    title:"3 Pricing Mistakes That Are Silently Killing Your Margin",
    message:"Not updating cost price when supplier raises prices. Pricing without including overhead. Applying the same margin to all products regardless of demand. Each mistake = one screen showing the wrong entry in Products & Pricing. Each correction = one screen showing the fix.",
    caption:"\"Fix just one of these pricing mistakes and your margin changes this week.\"",
    featureHook:"Products & Pricing lets you update cost prices instantly when suppliers change rates — so your margin is always calculated correctly." },

  { day:47, week:7, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Customer Manager",
    title:"Your Best Customers Deserve Better Than Anonymity",
    message:"Show Customer Manager: add a customer, log a purchase, view their history, see their total lifetime spend, note their preferred products. 'This customer has spent ₦340,000 with you in 6 months. Do you even know her name?' The intimacy angle is powerful for relationship-based retail.",
    caption:"\"She's spent ₦340,000 in your shop this year. Customer Manager knows her name, her orders, her preferences. Do you?\"",
    featureHook:"Customer Manager (PRO) shows you each customer's full purchase history and total spend — turning your best buyers into a known, valued segment." },

  { day:48, week:7, pillar:"Money Mirror",    format:"Carousel",      goal:"Reach",
    feature:"Sales Tracker",
    title:"The True Cost of 'I'll Start Tracking Next Month'",
    message:"Month-by-month compounding loss calculator. Sales Tracker missed transactions: 5/day × ₦2,500 avg × 30 days = ₦375,000/month. Over 12 months = ₦4.5M. Year 2 = ₦9M cumulative. The delay cost visualised as a bar chart. 'Every month you wait is a month you pay.'",
    caption:"\"Every month without Sales Tracker costs more than the one before. Here's the invoice nobody sends you.\"",
    featureHook:"Sales Tracker captures every transaction — the 5 daily sales most shops miss add up to ₦375,000 a month in unrecorded revenue." },

  { day:49, week:7, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"Things That Hit Different When Your Business Is Organised",
    message:"Aspirational reel. Checking a clean Sales Summary and knowing your margin. Getting a low-stock alert before a customer asks. Handing a professional Sales Receipt instead of a scrap of paper. Seeing your Debtors list shrink as people pay. Make success feel tangible and close.",
    caption:"\"When you finally have your business properly organised… this hits different. ✨\"",
    featureHook:null },

  { day:50, week:7, pillar:"Proof Wall",      format:"Static Post",   goal:"Convert",
    feature:"Sales Tracker",
    title:"Milestone: [X] Businesses. [Y] Transactions Tracked.",
    message:"Announce a user and/or transaction milestone. Pair it with one aggregate stat from Sales Tracker data — total transactions tracked, total revenue recorded, total stock movements logged. Make the scale feel real. 'Every one of those was a sale that didn't get lost.'",
    caption:"\"[X] businesses. [Y] transactions tracked. Not one of them lost to a notebook that got wet. 📈\"",
    featureHook:"Sales Tracker has now recorded [Y] transactions across all Sellytics users — every single one captured and stored offline-first." },

  { day:51, week:7, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert",
    feature:"Expenses Tracker",
    title:"Which PRO Feature Would Change Your Business Most?",
    message:"Options: Debtors / Expenses Tracker / Customer Manager / Unpaid Supplies. Each answer maps to the most urgent pain. DM each respondent with a 60-second demo of specifically their chosen feature. Personalised follow-up converts at 3–4x the rate of generic CTAs.",
    caption:"\"If you could unlock ONE PRO feature today — which one would change your business most? 👇\"",
    featureHook:"Expenses Tracker (PRO) is consistently the feature that surprises users most — revealing hidden costs that were silently reducing profit." },

  // ══ WEEK 8 — Scale & Expand ══
  { day:52, week:8, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Stock Transfer",
    title:"When to Know You're Ready to Open a Second Shop",
    message:"Signals: consistent positive margin for 6+ months, stock turnover above category benchmark, clear best-seller data, staff reliable enough to manage a location. Sellytics provides all these signals. Stock Transfer means the second shop doesn't create inventory chaos.",
    caption:"\"Expanding too early kills businesses. Here's how your Sellytics data tells you when the time is actually right.\"",
    featureHook:"Stock Transfer means your second location shares inventory with your first — no stranded stock, no double-buying, no chaos." },

  { day:53, week:8, pillar:"African Hustle",  format:"Video",         goal:"Reach",
    feature:"Manage Inventory",
    title:"Shop Owner Spotlight #4 — From Market Table to 3 Shops",
    message:"The most ambitious transformation story. Started on a table in Alaba. Now 3 locations. Manage Inventory was the system that made scaling possible without chaos. Let her walk through the current inventory dashboard — real numbers, real pride.",
    caption:"\"Started on a table in Alaba with ₦40,000 capital. Three shops later, here's what her Manage Inventory looks like now.\"",
    featureHook:"Manage Inventory scaled with her — from 20 products on a table to 400+ SKUs across 3 locations, all tracked in one dashboard." },

  { day:54, week:8, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Sales Summary",
    title:"₦1M/Month With Tracking vs. ₦1M/Month Without",
    message:"Same revenue. Two realities. With Sales Summary: clear margin per product, controlled costs, calm owner who knows her numbers. Without: guesswork, invisible loss, reactive pricing, stressed owner. Visual contrast showing the same revenue number producing completely different outcomes.",
    caption:"\"₦1M in sales means nothing if you don't know what's left after. Sales Summary shows you the number that actually matters.\"",
    featureHook:"Sales Summary shows your real profit from ₦1M in revenue — after COGS, expenses, and returns are all accounted for." },

  { day:55, week:8, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Stock Transfer",
    title:"Multi-Location Dashboard: One Phone, Three Shops",
    message:"Show Stock Transfer and Manage Inventory working across three shop locations. Transfer stock, view each location's inventory, compare performance. The aspirational demo for anyone eyeing expansion. 'This isn't the future. This is what our multi-location users already have.'",
    caption:"\"One phone. Three shops. Every unit of stock tracked across every location. This is multi-location retail in 2025.\"",
    featureHook:"Stock Transfer + Manage Inventory together give multi-location owners a unified view of their entire inventory across all branches." },

  { day:56, week:8, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert",
    feature:"Unpaid Supplies",
    title:"From Sceptic to Advocate: 3 PRO Feature U-Turns",
    message:"Three users who doubted a specific PRO feature before trying it. User 1: Unpaid Supplies — 'I didn't think I had enough supplier credit to track.' Found ₦180K. User 2: Debtors — 'My customers always pay.' Found 14 overdue accounts. User 3: Expenses Tracker — 'I know my costs.' Found ₦60K in unrecorded expenses.",
    caption:"\"'I didn't think I needed it.' Three users said this. Here's what they found when they turned it on.\"",
    featureHook:"Unpaid Supplies (PRO) revealed ₦180K in outstanding supplier credit for a user who 'didn't think she had enough to track.'" },

  { day:57, week:8, pillar:"Classroom",       format:"Live",          goal:"Engage",
    feature:null,
    title:"Live Q&A: Ask Me Anything About Running a Retail Business",
    message:"30-minute live. No deck, no script, just questions. Answer retail business questions — pricing, staffing, supplier negotiation, cash flow. Mention Sellytics features only when directly relevant to a question. The best leads come from people who see you genuinely help others.",
    caption:"\"30 minutes. No pitch. No agenda. Just your retail business questions answered live. Drop yours below. 🔴\"",
    featureHook:null },

  { day:58, week:8, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"60 Days. This Community. Here's What We Built.",
    message:"End-of-phase celebration reel. Montage of spotlighted shop owners, user clips, follower messages. Make every viewer feel part of a movement that's bigger than an app. Gratitude without performance.",
    caption:"\"60 days ago we started something for African retailers. Look at what it's become. We're just getting started. 🙏\"",
    featureHook:null },

  { day:59, week:8, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert",
    feature:"Sales Summary",
    title:"The Complete Case for Switching — All Numbers, No Fluff",
    message:"Evidence-only argument. Annual cost of untracked sales (Sales Tracker). Annual cost of unrecorded expenses (Expenses Tracker). Annual cost of uncollected debts (Debtors). Annual cost of mismanaged supplier credit (Unpaid Supplies). Total loss vs. annual Sellytics PRO cost. Let the numbers close the sale.",
    caption:"\"Here's every number, from every feature, totalled up. Then here's what Sellytics PRO costs per year. Do the maths.\"",
    featureHook:"Sales Summary aggregates the full picture: every loss prevented, every cost tracked, every debt recovered — your annual ROI in one screen." },

  { day:60, week:8, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Sales Tracker",
    title:"Free Trial. Every Feature. No Card. Starts Now.",
    message:"Month 2 close. Walk through the full feature set in 90 seconds: Sales Tracker live, Products & Pricing setup, Manage Inventory count, Sales Receipts generation, Sales Summary report, PRO features teased. Free for 14 days. 'You've watched 60 days of content. Give us 14 days in return.'",
    caption:"\"60 days of content. One ask. 14 days free — all features, no card. Your shop deserves better numbers. Let's go.\"",
    featureHook:"Every feature — Sales Tracker, Manage Inventory, Sales Receipts, Sales Summary, and all PRO features — free for 14 days." },

  // ══ WEEK 9 — Pan-Africa Expansion ══
  { day:61, week:9,  pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"Day 61: We're Just Getting Started. Welcome to Month 3.",
    message:"Open month 3 with a pan-Africa declaration. Show the geography of your audience — Nigeria, Ghana, Kenya, South Africa. Frame the next 30 days as the expansion phase. Every feature works across markets. Every problem translates.",
    caption:"\"Day 61. Different countries. Same problems. Same fix. Month 3 is for all of Africa. 🌍\"",
    featureHook:null },

  { day:62, week:9,  pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Products & Pricing",
    title:"Pricing Strategy for African Markets: The Nuances Nobody Teaches",
    message:"Regional pricing differences: price sensitivity in Northern markets, brand consciousness in Lagos, bulk-buying culture in Onitsha. How Products & Pricing lets you set different prices per location or market segment. Data-driven regional pricing is a genuine competitive advantage.",
    caption:"\"What sells at ₦2,500 in Lekki sells at ₦1,800 in Aba. Your pricing strategy needs to know the difference.\"",
    featureHook:"Products & Pricing lets you manage different price points across locations — so your margin works in every market you operate in." },

  { day:63, week:9,  pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Manage Inventory",
    title:"Ghost Stock: The Problem That Doesn't Exist Until It Does",
    message:"Ghost stock = items in your system that aren't physically there. Caused by theft, damage, data entry errors, transit loss. Manage Inventory's real-time tracking flags discrepancies between recorded and physical stock before they compound into large losses.",
    caption:"\"Your system says 40. You count 31. Where did 9 go? Ghost stock is costing you money you can't see. Here's the fix.\"",
    featureHook:"Manage Inventory's live stock count means ghost stock discrepancies surface immediately — not at the end of the month when it's too late." },

  { day:64, week:9,  pillar:"Proof Wall",      format:"Video",         goal:"Trust",
    feature:"Sales Tracker",
    title:"Sellytics in Ghana: First User Story Outside Nigeria",
    message:"Feature a Ghanaian retailer using Sellytics. Same features, Ghanaian context — cedis, market culture, specific business challenges. Show Sales Tracker recording transactions in GHS. Pan-Africa signal: the platform crosses borders because the problems do too.",
    caption:"\"Accra market, Ghanaian cedis, same problems as Lagos. Sales Tracker works the same way. 🇬🇭\"",
    featureHook:"Sales Tracker works in any currency, any market — offline-first infrastructure that's as relevant in Accra as it is in Lagos." },

  { day:65, week:9,  pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Sales Receipts",
    title:"Professional Receipts in Any Currency, Any Country",
    message:"Show Sales Receipts generating a receipt in Naira, then in Cedis, then in Shillings. Same clean format, same professionalism, different currency. 'Your shop should look as professional in Accra as it does in Lagos.' Directly addresses the 'is it built for my country' objection.",
    caption:"\"Whether it's ₦, GH₵, or KSh — your customers get the same professional receipt. Sales Receipts adapts to your market.\"",
    featureHook:"Sales Receipts works in any currency — your customers get clean, itemised receipts whether you're in Lagos, Accra, or Nairobi." },

  { day:66, week:9,  pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Sales Summary",
    title:"4 KPIs Every African Retailer Should Check Every Monday",
    message:"Gross margin %, stock turnover rate, debtor-to-sales ratio, expense-to-revenue ratio. Explain each in plain language. Show exactly where to find all four in Sales Summary and Debtors. 'Four numbers that tell you everything about your shop's health in 5 minutes.'",
    caption:"\"Stop running your business on feelings. These 4 numbers tell you everything you need to know every Monday morning.\"",
    featureHook:"Sales Summary surfaces gross margin and revenue trends automatically — two of your four essential Monday morning KPIs in one screen." },

  { day:67, week:9,  pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",
    feature:"Customer Manager",
    title:"Where Are You Watching From?",
    message:"Map poll: Nigeria / Ghana / Kenya / South Africa / Other. Use results to plan region-specific content. Share the geography map publicly. DM international users asking: 'What retail challenge is most specific to your market?' Use answers to create country-specific content.",
    caption:"\"We know you're watching from everywhere. Tell us where — we're building content for ALL of you. 🌍👇\"",
    featureHook:"Customer Manager works across markets — building customer profiles in any language, currency, or retail context." },

  // ══ WEEK 10 — Deep Education ══
  { day:68, week:10, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Manage Inventory",
    title:"Stock Turnover Ratio: The Metric That Tells You If Your Money Is Working",
    message:"Formula: COGS ÷ Average Inventory Value. What a healthy ratio looks like for FMCG (high) vs. fashion (medium) vs. electronics (lower). How Manage Inventory's data makes calculating this automatic. 'Your stock turnover tells you if your money is sprinting or sleeping.'",
    caption:"\"This ratio tells you if your inventory investment is working hard or sitting idle. Most shop owners have never calculated it.\"",
    featureHook:"Manage Inventory tracks your stock value and movement data — the raw numbers you need to calculate stock turnover automatically." },

  { day:69, week:10, pillar:"Money Mirror",    format:"Video",         goal:"Reach",
    feature:"Sales Tracker",
    title:"What Happens to Your Business When You Take a Holiday?",
    message:"The anxiety of leaving your shop to staff. Every owner has felt this. Show Sales Tracker: check today's sales from anywhere, see every transaction in real time, get a notification if sales are unusually low. 'You can take 3 days off without your heart racing — if your data travels with you.'",
    caption:"\"You haven't taken a proper break in 2 years because you're afraid of what happens when you leave. Sales Tracker fixes the fear.\"",
    featureHook:"Sales Tracker gives you real-time visibility of every sale — so you can monitor your shop remotely and catch problems before they grow." },

  { day:70, week:10, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert",
    feature:"Expenses Tracker",
    title:"90 Days of Real Users. The Numbers We Collected.",
    message:"Aggregate real data from your user base: average reduction in unrecorded expenses after adopting Expenses Tracker, average time saved on weekly reconciliation, average improvement in profit margin visibility. Feature-attributed results create specific proof rather than vague testimonials.",
    caption:"\"We pulled the data from 90 days of real users. Feature by feature, here's what they found.\"",
    featureHook:"Expenses Tracker users reported an average of ₦X in previously unrecorded costs found in their first 30 days of use." },

  { day:71, week:10, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert",
    feature:"Products & Pricing",
    title:"Testing Sellytics on a ₦35,000 Budget Phone",
    message:"Run the full app — Products & Pricing, Sales Tracker, Manage Inventory — on a low-spec Android. Show speed, stability, offline mode. Destroy 'I don't have a good enough phone' objection explicitly. 'If your phone can run WhatsApp, it can run Sellytics.'",
    caption:"\"₦35,000 phone. Full Sellytics feature set. Here's exactly how it performed.\"",
    featureHook:"Products & Pricing — like all Sellytics features — is optimised for low-spec Android devices. No premium phone required." },

  { day:72, week:10, pillar:"Classroom",       format:"Text Post",     goal:"Reach",
    feature:"Sales Summary",
    title:"Why Most Small Shops Fail in Year 3 (Not Year 1)",
    message:"Year 1: survival mode covers a lot of mistakes. Year 3: you're too big to run on intuition but haven't built systems. Sales Summary, Expenses Tracker, Debtors — these are the systems year-3 businesses need. 'The hustle that got you here won't get you to year 5.'",
    caption:"\"Year 1 you survive on hustle. Year 3 the hustle runs out. Here's what kills most businesses in the middle.\"",
    featureHook:"Sales Summary gives year-3 businesses the performance visibility they need to graduate from intuition-based to data-based decisions." },

  { day:73, week:10, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",
    feature:"Returned Items Tracker",
    title:"Shop Owner Spotlight #5 — The Fashion Retailer",
    message:"Feature a clothing boutique owner. Fashion has unique pain: returns from wrong sizes, staff wear, damaged items from try-ons. Returned Items Tracker creates a proper return audit trail — what came back, why, was it restocked or written off. Show the feature in context of her specific business.",
    caption:"\"She stocks 300+ SKUs in 4 sizes. Returns were her biggest inventory headache — until Returned Items Tracker.\"",
    featureHook:"Returned Items Tracker (PRO) is especially powerful for fashion retail — every return logged, every piece of stock accounted for." },

  { day:74, week:10, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",
    feature:"Products & Pricing",
    title:"When Did You Last Update Your Cost Prices After a Supplier Increase?",
    message:"This week / Last month / A few months ago / I don't think I have. Most will admit it's been a while. Follow up: 'Every month you sell at the old price after a cost increase, you're subsidising the price rise yourself.' Show how Products & Pricing lets you update cost prices in seconds.",
    caption:"\"Your supplier raised prices last quarter. Did your selling price go up too? 👇\"",
    featureHook:"Products & Pricing lets you update cost prices instantly when suppliers raise rates — protecting your margin with every change." },

  // ══ WEEK 11 — Influence & Partnership ══
  { day:75, week:11, pillar:"Proof Wall",      format:"Collab Post",   goal:"Reach",
    feature:"Sales Summary",
    title:"We Sat With a Top SME Coach — This Is What They Said About Inventory",
    message:"Collaborate with a respected Nigerian business coach. Interview format: 'What's the #1 operational mistake small businesses make?' Answer: not separating revenue from profit. Segue to how Sales Summary does this automatically. Their audience + your platform.",
    caption:"\"We asked @[SMECoach] what kills most small businesses before year 5. The answer was one word: visibility.\"",
    featureHook:"Sales Summary gives business owners the profit visibility that most SME coaches say is the #1 missing operational tool in African retail." },

  { day:76, week:11, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Suppliers & Product Ir.",
    title:"How to Use Your Purchase History to Negotiate Better Supplier Deals",
    message:"Suppliers & Product Intelligence shows your purchase history per supplier — volumes, frequency, payment reliability. This data gives you negotiating leverage: 'I bought X units last quarter at this price. What's the rate for 1.5X?' Data = power in supplier negotiations.",
    caption:"\"Your purchase history isn't just a record. It's a negotiation weapon. Here's how to use it.\"",
    featureHook:"Suppliers & Product Intelligence (PRO) shows your full purchase history per supplier — the data that turns a price conversation into a negotiation you can win." },

  { day:77, week:11, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Sales Tracker",
    title:"How Sellytics Fits Into Your Existing Business Setup",
    message:"Show Sales Tracker working alongside a Paystack terminal — manual entry after card payment, or narrate the integration roadmap. Frame Sellytics as the inventory and tracking layer that sits above any payment method. 'Whatever you use to collect money, Sellytics tracks what you sold.'",
    caption:"\"Cash, transfer, POS — however your customers pay, Sales Tracker records what was sold, at what price, and when.\"",
    featureHook:"Sales Tracker records transactions regardless of payment method — cash, bank transfer, or POS — giving you a complete sales history." },

  { day:78, week:11, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"Market Day Energy — A Love Letter to African Retail",
    message:"Pure culture content. The chaos, the colour, the community of market day in any African city. No product, no pitch, no features. Deep respect for the ecosystem Sellytics was built to serve. Make traders feel like the heroes of the story.",
    caption:"\"Nobody makes noise like a Nigerian market on a Monday morning. This one's for the traders who built everything from nothing. 🛒\"",
    featureHook:null },

  { day:79, week:11, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert",
    feature:"Debtors",
    title:"The Hidden Cost of Running 2+ Shops Without Systems",
    message:"Travel time between locations to check stock, phone calls to managers for inventory counts, paying a manager whose entire job is reporting numbers manually, reconciliation errors between locations. Total the hidden cost per month. Then show Stock Transfer and Debtors solving each one.",
    caption:"\"Running 2 shops without systems doesn't cost ₦0. Here's the actual monthly invoice you're not seeing.\"",
    featureHook:"Debtors (PRO) works across multiple locations — one consolidated view of every outstanding credit across all your shops." },

  { day:80, week:11, pillar:"Proof Wall",      format:"Video",         goal:"Convert",
    feature:"Customer Manager",
    title:"Why Our Users Keep Sending Their Friends",
    message:"Feature 5–6 users who referred others. Ask each: 'Why did you refer someone?' The answers become your strongest organic testimonials. One will say Customer Manager — knowing her regulars changed her customer service. Let the referral reason reveal the feature's value.",
    caption:"\"We asked users why they keep referring friends. The answers told us more about our product than any survey could.\"",
    featureHook:"Customer Manager (PRO) was cited by multiple users as the feature that made them refer friends — 'I wanted them to know their customers the way I now know mine.'" },

  { day:81, week:11, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert",
    feature:"Expenses Tracker",
    title:"Which Feature Would Make You Upgrade to PRO?",
    message:"Options: Debtors / Expenses Tracker / Customer Manager / Unpaid Supplies. Personalise follow-up DMs: Debtors choosers get a 60-second Debtors demo. Expenses choosers get the '₦47K hidden costs' user story. Suppliers choosers get the negotiation leverage post. Hyper-personalised conversion.",
    caption:"\"If you could only pick one PRO feature — which one would change your business most right now? 👇\"",
    featureHook:"Expenses Tracker (PRO) is consistently the most-chosen feature in this poll — because hidden costs are the most universal untracked problem." },

  // ══ WEEK 12 — Legacy & Loyalty ══
  { day:82, week:12, pillar:"Classroom",       format:"Carousel",      goal:"Trust",
    feature:"Sales Summary",
    title:"How to Build a Business That Runs Without You",
    message:"Systems, data, trained staff, documented processes. Sales Summary is the weekly data review that replaces the need for the owner to be present daily. Manage Inventory is the stock system that lets staff operate independently. Debtors is the accountability tool that works whether you're there or not.",
    caption:"\"The goal isn't to work harder. It's to build something that works when you don't. Here's the system.\"",
    featureHook:"Sales Summary gives you remote visibility of your business performance — so your absence doesn't create information blackouts." },

  { day:83, week:12, pillar:"African Hustle",  format:"Video",         goal:"Reach",
    feature:"Products & Pricing",
    title:"Shop Owner Spotlight #6 — The Next Generation Retailer",
    message:"Feature a young entrepreneur (22–26) who started their business with Sellytics from day one. Products & Pricing set up before the first sale was ever made. They've never known a notebook. Show their setup — clean, digital, confident.",
    caption:"\"She opened her shop with Sellytics already installed. She's 24. This is what African retail looks like next.\"",
    featureHook:"Products & Pricing was the first thing she set up — before she even opened her doors. Her catalogue was digital from day one." },

  { day:84, week:12, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",
    feature:"Sales Summary",
    title:"End of Quarter: What Your Numbers Should Be Telling You",
    message:"Walk through a Q3 review using Sales Summary data: what sold, what margin changed, what died, what to double for Q4. Make it feel like a free consulting session. 'The shop owners who review quarterly data make different decisions than those who don't.'",
    caption:"\"Quarter's almost done. Here's the 5-minute Sales Summary review every shop owner should do right now.\"",
    featureHook:"Sales Summary's historical data makes quarterly reviews possible in minutes — trend lines, top performers, and margin changes all visible at a glance." },

  { day:85, week:12, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert",
    feature:"Sales Tracker",
    title:"90 Days. Here's What This Community Built in Numbers.",
    message:"Your milestone post. Users onboarded, transactions tracked via Sales Tracker, total revenue recorded, countries represented, debts recovered via Debtors, expenses logged via Expenses Tracker. Feature-attributed milestones make the impact specific and credible.",
    caption:"\"90 days. Real numbers. Real features. Real businesses changed. Here's what you all built together.\"",
    featureHook:"Sales Tracker alone recorded [X million] transactions across all Sellytics users in 90 days — not one of them lost to a missing notebook entry." },

  { day:86, week:12, pillar:"Demo Room",       format:"Video",         goal:"Convert",
    feature:"Manage Inventory",
    title:"The Complete Sellytics Feature Tour — 6 Minutes, Every Screen",
    message:"Definitive walkthrough for anyone who's watched 90 days and hasn't signed up. Sales Tracker → Products & Pricing → Manage Inventory → Sales Receipts → Sales Summary → PRO features. Fast, clean, confident. One sentence per feature. End: free trial, no card.",
    caption:"\"If you've watched for weeks but haven't tried it yet — this 6-minute tour is the only thing standing between you and better numbers.\"",
    featureHook:"Manage Inventory is the centrepiece of the tour — real-time stock tracking across every product and location, fully offline." },

  { day:87, week:12, pillar:"Classroom",       format:"Live",          goal:"Engage",
    feature:null,
    title:"Live: 90 Days In. Ask Me Anything About Retail Business.",
    message:"30-minute live Q&A. Open format. Answer business questions — pricing, stock, staff, suppliers, cash flow. Mention features only when directly answering a question. The best demonstration of product value is solving real problems live, in public, without a script.",
    caption:"\"90 days in. Going live to answer everything — business, inventory, growth, money. Come with questions. 🔴\"",
    featureHook:null },

  { day:88, week:12, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",
    feature:null,
    title:"What African Retail Looks Like in 10 Years",
    message:"Vision and thought leadership. Data-driven, aspirational. African retail is the largest untapped market in the world. Sellytics is the infrastructure layer. Every shop owner watching is early to something significant. Make them feel proud of being part of the story now.",
    caption:"\"African retail is the biggest untapped opportunity on earth. Here's where it's going — and who's going to lead it. 🌍\"",
    featureHook:null },

  { day:89, week:12, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert",
    feature:"Expenses Tracker",
    title:"90 Days Without Tracking vs. 90 Days With Sellytics",
    message:"Two columns. Column A: untracked shop losses — missed sales (Sales Tracker), hidden expenses (Expenses Tracker), uncollected debts (Debtors), unmanaged supplier credit (Unpaid Supplies). Column B: Sellytics user gains per feature over the same 90 days. Final slide: the total difference. Let the maths close.",
    caption:"\"90 days. Two types of shop. The numbers tell the whole story — no pitch needed.\"",
    featureHook:"Expenses Tracker (PRO) is responsible for the largest single average improvement — hidden costs found in 90 days average ₦X per user." },

  { day:90, week:12, pillar:"Proof Wall",      format:"Video",         goal:"Convert",
    feature:"Sales Tracker",
    title:"Day 90. Hundreds of Shops. One Message.",
    message:"Your most cinematic piece of content. User montage — real faces, real shops, real dashboards across Africa. Sales Tracker numbers scrolling. Manage Inventory counts updating. Debtors lists shrinking. No voiceover until the end: 'Join them. Free for 14 days.' Let 90 days of proof close the sale.",
    caption:"\"Day 90. To every shop owner who took the leap — this is for you. And to everyone still watching: it's your turn. 🙏\"",
    featureHook:"Every feature. Every user. Every transaction. 90 days of proof that Sellytics works for real African retailers — free for 14 days to find out for yourself." },
];

const WEEKS = [
  { num:1,  theme:"Foundation & Problem Awareness",   color:"#1565C0" },
  { num:2,  theme:"Education & Trust Building",        color:"#4527A0" },
  { num:3,  theme:"Social Proof Surge",                color:"#00695C" },
  { num:4,  theme:"Conversion Push",                   color:"#C0392B" },
  { num:5,  theme:"Community & Credibility",           color:"#0277BD" },
  { num:6,  theme:"Authority & Depth",                 color:"#6A1B9A" },
  { num:7,  theme:"Conversion Intensification",        color:"#AD1457" },
  { num:8,  theme:"Scale & Expand",                    color:"#00695C" },
  { num:9,  theme:"Pan-Africa Expansion",              color:"#E65100" },
  { num:10, theme:"Deep Education",                    color:"#4527A0" },
  { num:11, theme:"Influence & Partnership",           color:"#0277BD" },
  { num:12, theme:"Legacy & Loyalty",                  color:"#1B5E20" },
];

const goalExplainer = {
  Reach:   "Designed to travel beyond current followers. Cultural resonance, hooks, or humor earn shares and algorithmic reach. No selling — just stopping the scroll.",
  Trust:   "Trust is built slowly and lost instantly. These posts make Sellytics the most credible voice in African retail through education, transparency, and genuine value.",
  Convert: "The audience knows the problem, trusts the brand, and has seen the proof. This post removes the last friction — a specific feature solving a specific pain — and makes signing up the obvious next step.",
  Engage:  "Engagement posts invite participation. Every comment, poll response, and DM is a data point and a warm lead. Goal is two-way conversation, not broadcast.",
};

export default function Calendar90() {
  const [view,          setView]          = useState("calendar");
  const [selectedDay,   setSelectedDay]   = useState(null);
  const [filterGoal,    setFilterGoal]    = useState("All");
  const [filterPillar,  setFilterPillar]  = useState("All");
  const [filterFeature, setFilterFeature] = useState("All");
  const [filterWeek,    setFilterWeek]    = useState("All");
  const [featureView,   setFeatureView]   = useState(false);

  const filtered = days.filter(d => {
    if (filterGoal    !== "All" && d.goal   !== filterGoal)           return false;
    if (filterPillar  !== "All" && d.pillar !== filterPillar)         return false;
    if (filterFeature !== "All" && d.feature !== filterFeature)       return false;
    if (filterWeek    !== "All" && d.week   !== Number(filterWeek))   return false;
    return true;
  });

  const selected = days.find(d => d.day === selectedDay);

  const stats = {
    Reach:   days.filter(d => d.goal === "Reach").length,
    Trust:   days.filter(d => d.goal === "Trust").length,
    Convert: days.filter(d => d.goal === "Convert").length,
    Engage:  days.filter(d => d.goal === "Engage").length,
  };

  const featureCounts = Object.keys(FEATURES).map(f => ({
    name: f,
    count: days.filter(d => d.feature === f).length,
  })).sort((a,b) => b.count - a.count);

  return (
    <div style={{ background:"#F8F7F4", minHeight:"100vh", fontFamily:"'DM Sans', sans-serif", color:"#1A1A1A", display:"flex", flexDirection:"column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-thumb { background:#CCC; border-radius:4px; }
        .dc { border:1px solid #E8E5E0; border-radius:10px; padding:11px; cursor:pointer; transition:all .15s; background:#FFF; min-height:118px; display:flex; flex-direction:column; gap:5px; }
        .dc:hover { border-color:#BBBBB5; box-shadow:0 3px 14px rgba(0,0,0,.08); transform:translateY(-1px); }
        .dc.sel { box-shadow:0 0 0 2px #1A1A1A; border-color:#1A1A1A; }
        .pill { display:inline-flex; align-items:center; gap:3px; padding:2px 7px; border-radius:20px; font-size:10px; font-weight:600; }
        .tb { background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600; padding:7px 14px; border-radius:6px; transition:all .15s; }
        .se { border:1px solid #DDD; border-radius:7px; padding:6px 10px; font-family:'DM Sans',sans-serif; font-size:11px; background:#FFF; color:#444; cursor:pointer; outline:none; }
        .lr { background:#FFF; border:1px solid #ECEAE5; border-radius:10px; padding:14px 18px; cursor:pointer; transition:all .15s; display:grid; grid-template-columns:40px 1fr auto; gap:14px; align-items:start; }
        .lr:hover { border-color:#BBBBB5; box-shadow:0 2px 10px rgba(0,0,0,.06); }
        .lr.sel { border-color:#1A1A1A; box-shadow:0 0 0 1.5px #1A1A1A; }
        @keyframes fs { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        .an { animation:fs .2s ease-out; }
        .np { flex:1; padding:9px; background:#F8F7F4; border:1px solid #E8E5E0; border-radius:8px; cursor:pointer; font-size:12px; font-weight:600; color:#555; font-family:'DM Sans',sans-serif; }
        .nn { flex:1; padding:9px; background:#1A1A1A; border:none; border-radius:8px; cursor:pointer; font-size:12px; font-weight:600; color:#FFF; font-family:'DM Sans',sans-serif; }
        .fc { background:#FFF; border:1px solid #E8E5E0; border-radius:10px; padding:14px 16px; display:flex; gap:12px; align-items:flex-start; cursor:pointer; transition:all .15s; }
        .fc:hover { box-shadow:0 2px 10px rgba(0,0,0,.07); border-color:#BBBBB5; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background:"#FFF", borderBottom:"1px solid #E8E5E0", padding:"16px 24px", flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#AAA", marginBottom:3 }}>Sellytics HQ · Feature-Infused Strategy</div>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, lineHeight:1.1 }}>90-Day Content Calendar</h1>
            <div style={{ fontSize:11, color:"#AAA", marginTop:3 }}>12 Weeks · 90 Posts · Every Core Feature Woven In</div>
          </div>

          {/* Month badges + stats */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
            <div style={{ display:"flex", gap:5 }}>
              {[{l:"Month 1",d:"1–30"},{l:"Month 2",d:"31–60"},{l:"Month 3",d:"61–90"}].map((m,i)=>(
                <div key={i} style={{ padding:"4px 10px", background: i===2?"#1A1A1A":"#F3F2EF", borderRadius:6, textAlign:"center" }}>
                  <div style={{ fontSize:9, fontWeight:800, color:i===2?"#FFF":"#999", letterSpacing:"0.06em" }}>{m.l}</div>
                  <div style={{ fontSize:9, color:i===2?"rgba(255,255,255,.5)":"#CCC" }}>Days {m.d}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:6 }}>
              {["Reach","Trust","Convert","Engage"].map(g=>(
                <div key={g} style={{ textAlign:"center", padding:"5px 9px", background:GOALS[g].bg, borderRadius:7, minWidth:46 }}>
                  <div style={{ fontSize:15, fontWeight:800, color:GOALS[g].color, lineHeight:1 }}>{stats[g]}</div>
                  <div style={{ fontSize:8, color:GOALS[g].color, fontWeight:700, marginTop:1 }}>{GOALS[g].label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display:"flex", gap:6, alignItems:"center", flexWrap:"wrap" }}>
          <div style={{ background:"#F3F2EF", borderRadius:7, padding:3, display:"flex", gap:2 }}>
            {[["calendar","📅 Calendar"],["list","📋 List"]].map(([v,l])=>(
              <button key={v} className="tb" onClick={()=>setView(v)}
                style={{ background:view===v?"#FFF":"transparent", color:view===v?"#1A1A1A":"#999", boxShadow:view===v?"0 1px 4px rgba(0,0,0,.1)":"none" }}>{l}</button>
            ))}
            <button className="tb" onClick={()=>setFeatureView(f=>!f)}
              style={{ background:featureView?"#7C3AED":"transparent", color:featureView?"#FFF":"#999", boxShadow:featureView?"0 1px 4px rgba(0,0,0,.1)":"none" }}>🏷️ Features</button>
          </div>
          <div style={{ width:1, height:24, background:"#E8E5E0" }} />
          <select className="se" value={filterWeek}    onChange={e=>{setFilterWeek(e.target.value);setSelectedDay(null)}}>
            <option value="All">All Weeks</option>
            {WEEKS.map(w=><option key={w.num} value={w.num}>Wk {w.num}: {w.theme}</option>)}
          </select>
          <select className="se" value={filterGoal}    onChange={e=>setFilterGoal(e.target.value)}>
            <option value="All">All Goals</option>
            {Object.keys(GOALS).map(g=><option key={g}>{g}</option>)}
          </select>
          <select className="se" value={filterPillar}  onChange={e=>setFilterPillar(e.target.value)}>
            <option value="All">All Pillars</option>
            {Object.keys(PILLARS).map(p=><option key={p}>{p}</option>)}
          </select>
          <select className="se" value={filterFeature} onChange={e=>setFilterFeature(e.target.value)}>
            <option value="All">All Features</option>
            {Object.keys(FEATURES).map(f=><option key={f}>{f}</option>)}
          </select>
          {(filterGoal!=="All"||filterPillar!=="All"||filterWeek!=="All"||filterFeature!=="All")&&(
            <button onClick={()=>{setFilterGoal("All");setFilterPillar("All");setFilterWeek("All");setFilterFeature("All")}}
              style={{ fontSize:11, color:"#C0392B", background:"#FEF2F2", border:"1px solid #FFCDD0", borderRadius:6, padding:"5px 10px", cursor:"pointer", fontWeight:600 }}>✕ Clear</button>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>

        {/* Main scroll area */}
        <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>

          {/* Feature panel */}
          {featureView && (
            <div style={{ background:"#FFF", border:"1px solid #E8E5E0", borderRadius:12, padding:"18px 20px", marginBottom:22 }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#AAA", marginBottom:14 }}>Feature Coverage Across 90 Days</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
                {featureCounts.map(({name,count})=>{
                  const f = FEATURES[name];
                  return (
                    <div key={name} className="fc" onClick={()=>{setFilterFeature(name===filterFeature?"All":name);setFeatureView(false);}}>
                      <div style={{ fontSize:20 }}>{f.icon}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:12, fontWeight:700, color:f.color, lineHeight:1.3, marginBottom:3 }}>{name}</div>
                        <div style={{ display:"flex", gap:5, alignItems:"center" }}>
                          <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", padding:"2px 6px", borderRadius:3, background:f.tag==="pro"?"#FFFBEB":"#F5F3FF", color:f.tag==="pro"?"#B45309":"#7C3AED" }}>{f.tag==="pro"?"★ PRO":"FREE"}</span>
                          <span style={{ fontSize:10, color:"#AAA" }}>{count} post{count!==1?"s":""}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {view==="calendar" ? (
            WEEKS.filter(w=>filterWeek==="All"||w.num===Number(filterWeek)).map(week=>{
              const wDays = filtered.filter(d=>d.week===week.num);
              if(!wDays.length) return null;
              return (
                <div key={week.num} style={{ marginBottom:28 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                    <div style={{ width:26, height:26, borderRadius:7, background:week.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"#FFF" }}>{week.num}</div>
                    <div>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#AAA" }}>Week {week.num}</div>
                      <div style={{ fontSize:13, fontWeight:700, color:week.color }}>{week.theme}</div>
                    </div>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:7 }}>
                    {wDays.map(d=>{
                      const feat = d.feature ? FEATURES[d.feature] : null;
                      return (
                        <div key={d.day} className={`dc${selectedDay===d.day?" sel":""}`} onClick={()=>setSelectedDay(selectedDay===d.day?null:d.day)}>
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                            <div style={{ fontSize:16, fontWeight:800, lineHeight:1 }}>D{d.day}</div>
                            <div style={{ fontSize:12 }}>{FORMATS[d.format]}</div>
                          </div>
                          <div style={{ fontSize:9, fontWeight:600, color:PILLARS[d.pillar].color, background:PILLARS[d.pillar].bg, padding:"1px 5px", borderRadius:3, display:"inline-block" }}>{d.pillar}</div>
                          <div style={{ fontSize:10, fontWeight:600, lineHeight:1.35, color:"#333", flexGrow:1 }}>{d.title}</div>
                          <div style={{ display:"flex", gap:3, flexWrap:"wrap", marginTop:"auto" }}>
                            <div className="pill" style={{ background:GOALS[d.goal].bg, color:GOALS[d.goal].color }}>{GOALS[d.goal].label}</div>
                            {feat && <div className="pill" style={{ background:feat.bg, color:feat.color }}>{feat.icon} {feat.tag==="pro"?"★":""}</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
              {filtered.map(d=>{
                const feat = d.feature ? FEATURES[d.feature] : null;
                return (
                  <div key={d.day} className={`lr${selectedDay===d.day?" sel":""}`} onClick={()=>setSelectedDay(selectedDay===d.day?null:d.day)}>
                    <div style={{ textAlign:"center" }}>
                      <div style={{ fontSize:17, fontWeight:800, color:WEEKS.find(w=>w.num===d.week).color, lineHeight:1 }}>D{d.day}</div>
                      <div style={{ fontSize:8, color:"#BBB", fontWeight:600, marginTop:1 }}>WK{d.week}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:13, fontWeight:700, marginBottom:5, lineHeight:1.3 }}>{d.title}</div>
                      <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                        <span style={{ fontSize:9, fontWeight:600, color:PILLARS[d.pillar].color, background:PILLARS[d.pillar].bg, padding:"2px 7px", borderRadius:4 }}>{d.pillar}</span>
                        <span style={{ fontSize:9, fontWeight:600, color:"#666", background:"#F3F2EF", padding:"2px 7px", borderRadius:4 }}>{FORMATS[d.format]} {d.format}</span>
                        {feat && <span style={{ fontSize:9, fontWeight:600, color:feat.color, background:feat.bg, padding:"2px 7px", borderRadius:4 }}>{feat.icon} {d.feature} {feat.tag==="pro"?"★ PRO":""}</span>}
                      </div>
                    </div>
                    <div className="pill" style={{ background:GOALS[d.goal].bg, color:GOALS[d.goal].color, whiteSpace:"nowrap" }}>{GOALS[d.goal].label}</div>
                  </div>
                );
              })}
              {filtered.length===0&&(
                <div style={{ textAlign:"center", padding:"50px 20px", color:"#AAA" }}>
                  <div style={{ fontSize:32, marginBottom:10 }}>🔍</div>
                  <div style={{ fontSize:14, fontWeight:600 }}>No posts match your filters</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── DETAIL PANEL ── */}
        {selected && (
          <div className="an" key={selected.day}
            style={{ width:370, flexShrink:0, borderLeft:"1px solid #E8E5E0", background:"#FFF", overflowY:"auto", padding:"22px 20px", display:"flex", flexDirection:"column" }}>

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
              <div>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#AAA", marginBottom:2 }}>Day {selected.day} · Week {selected.week}</div>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:WEEKS.find(w=>w.num===selected.week).color }}>{WEEKS.find(w=>w.num===selected.week).theme}</div>
              </div>
              <button onClick={()=>setSelectedDay(null)} style={{ background:"#F3F2EF", border:"none", borderRadius:6, width:26, height:26, cursor:"pointer", fontSize:12, color:"#666", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
            </div>

            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, lineHeight:1.25, marginBottom:14 }}>{selected.title}</h2>

            {/* chips */}
            <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginBottom:16 }}>
              <span className="pill" style={{ background:PILLARS[selected.pillar].bg, color:PILLARS[selected.pillar].color, fontSize:10 }}>{selected.pillar}</span>
              <span className="pill" style={{ background:"#F3F2EF", color:"#555", fontSize:10 }}>{FORMATS[selected.format]} {selected.format}</span>
              <span className="pill" style={{ background:GOALS[selected.goal].bg, color:GOALS[selected.goal].color, fontSize:10 }}>{GOALS[selected.goal].label}</span>
            </div>

            {/* Feature spotlight */}
            {selected.feature && FEATURES[selected.feature] && (
              <div style={{ marginBottom:16, padding:"12px 14px", background:FEATURES[selected.feature].bg, borderRadius:10, border:`1px solid ${FEATURES[selected.feature].color}25` }}>
                <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                  <div style={{ fontSize:22 }}>{FEATURES[selected.feature].icon}</div>
                  <div>
                    <div style={{ display:"flex", gap:6, alignItems:"center", marginBottom:4 }}>
                      <div style={{ fontSize:12, fontWeight:700, color:FEATURES[selected.feature].color }}>{selected.feature}</div>
                      <span style={{ fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:3, background:FEATURES[selected.feature].tag==="pro"?"#FFFBEB":"#F5F3FF", color:FEATURES[selected.feature].tag==="pro"?"#B45309":"#7C3AED" }}>
                        {FEATURES[selected.feature].tag==="pro"?"★ PRO":"FREE"}
                      </span>
                    </div>
                    <div style={{ fontSize:12, color:"#555", lineHeight:1.65 }}>{selected.featureHook}</div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ height:1, background:"#F0EDE8", marginBottom:16 }} />

            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#AAA", marginBottom:7 }}>Message Angle</div>
              <div style={{ fontSize:13, color:"#333", lineHeight:1.8, background:"#F8F7F4", padding:"13px 15px", borderRadius:9, borderLeft:`3px solid ${PILLARS[selected.pillar].color}` }}>{selected.message}</div>
            </div>

            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#AAA", marginBottom:7 }}>Opening Caption</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontStyle:"italic", color:"#1A1A1A", lineHeight:1.7, background:PILLARS[selected.pillar].bg, padding:"14px 16px", borderRadius:9, border:`1px solid ${PILLARS[selected.pillar].color}25` }}>{selected.caption}</div>
            </div>

            <div style={{ padding:"12px 14px", background:GOALS[selected.goal].bg, borderRadius:9, border:`1px solid ${GOALS[selected.goal].color}25`, marginBottom:16 }}>
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:GOALS[selected.goal].color, marginBottom:5 }}>{GOALS[selected.goal].label} — Why This Goal?</div>
              <div style={{ fontSize:12, color:"#555", lineHeight:1.75 }}>{goalExplainer[selected.goal]}</div>
            </div>

            {/* 90-day arc */}
            <div style={{ marginBottom:16, padding:"11px 14px", background:"#F8F7F4", borderRadius:9, border:"1px solid #ECEAE5" }}>
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#AAA", marginBottom:7 }}>90-Day Arc</div>
              <div style={{ display:"flex", gap:2, alignItems:"center" }}>
                {[...Array(90)].map((_,i)=>(
                  <div key={i} style={{ flex:1, height:4, borderRadius:2, background: i<selected.day ? WEEKS.find(w=>w.num===selected.week).color : "#E8E5E0" }} />
                ))}
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                <span style={{ fontSize:9, color:"#AAA" }}>Day 1</span>
                <span style={{ fontSize:9, fontWeight:700, color:WEEKS.find(w=>w.num===selected.week).color }}>Day {selected.day} of 90</span>
                <span style={{ fontSize:9, color:"#AAA" }}>Day 90</span>
              </div>
            </div>

            <div style={{ display:"flex", gap:7, marginTop:"auto", paddingTop:8 }}>
              {selected.day>1  && <button className="np" onClick={()=>setSelectedDay(selected.day-1)}>← Day {selected.day-1}</button>}
              {selected.day<90 && <button className="nn" onClick={()=>setSelectedDay(selected.day+1)}>Day {selected.day+1} →</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}