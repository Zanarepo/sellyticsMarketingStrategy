import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
//  ALL 90 DAYS + ADVANCED FEATURE POSTS — Complete data
// ─────────────────────────────────────────────────────────────

const WEEK_THEMES = {
  1:  { theme: "Foundation & Problem Awareness",  color: "#1565C0", month: 1 },
  2:  { theme: "Education & Trust Building",       color: "#4527A0", month: 1 },
  3:  { theme: "Social Proof Surge",               color: "#00695C", month: 1 },
  4:  { theme: "Conversion Push",                  color: "#C0392B", month: 1 },
  5:  { theme: "Community & Credibility",          color: "#0277BD", month: 2 },
  6:  { theme: "Authority & Depth",                color: "#6A1B9A", month: 2 },
  7:  { theme: "Conversion Intensification",       color: "#AD1457", month: 2 },
  8:  { theme: "Scale & Expand",                   color: "#00695C", month: 2 },
  9:  { theme: "Pan-Africa Expansion",             color: "#E65100", month: 3 },
  10: { theme: "Deep Education",                   color: "#4527A0", month: 3 },
  11: { theme: "Influence & Partnership",          color: "#0277BD", month: 3 },
  12: { theme: "Legacy & Loyalty",                 color: "#1B5E20", month: 3 },
};

const GOALS = {
  Reach:   { color: "#0277BD", bg: "#DBEAFE", label: "📡 Reach" },
  Trust:   { color: "#166534", bg: "#DCFCE7", label: "🤝 Trust" },
  Convert: { color: "#991B1B", bg: "#FEE2E2", label: "💰 Convert" },
  Engage:  { color: "#6B21A8", bg: "#F3E8FF", label: "💬 Engage" },
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
  "Story / Poll": "📊", "Video": "📹", "Text Post": "✍️",
  "Live": "🔴", "Collab Post": "🤝",
};

// Core 90-day posts
const CORE_POSTS = [
  // WEEK 1
  { id:"d1",  day:1,  week:1, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"Your Shop Is Open 12 Hours. Do You Know What It Made?", feature:"Sales Tracker" },
  { id:"d2",  day:2,  week:1, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"What 'Managing Inventory' Actually Means", feature:"Manage Inventory" },
  { id:"d3",  day:3,  week:1, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"POV: Opening Your Shop at 6:30am Before Lagos Wakes Up", feature:null },
  { id:"d4",  day:4,  week:1, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"Watch: I Added 50 Products and Set All Prices in Under 8 Minutes", feature:"Products & Pricing" },
  { id:"d5",  day:5,  week:1, pillar:"Money Mirror",    format:"Carousel",      goal:"Trust",   title:"High Sales ≠ High Profit — Here's the Maths", feature:"Sales Summary" },
  { id:"d6",  day:6,  week:1, pillar:"Proof Wall",      format:"Static Post",   goal:"Trust",   title:"'I Tracked More Sales in Week 1 Than I Did All of Last Month'", feature:"Sales Tracker" },
  { id:"d7",  day:7,  week:1, pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  title:"Weekend Poll: How Do You Track Sales Right Now?", feature:null },
  // WEEK 2
  { id:"d8",  day:8,  week:2, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"5 Numbers Every Shop Owner Should Know by Monday 9am", feature:"Sales Summary" },
  { id:"d9",  day:9,  week:2, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"She Had ₦200K in Sales. ₦140K Was on Credit.", feature:"Debtors" },
  { id:"d10", day:10, week:2, pillar:"Proof Wall",      format:"Video",         goal:"Trust",   title:"Meet Shade: She Stopped Counting Stock by Hand", feature:"Manage Inventory" },
  { id:"d11", day:11, week:2, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"NEPA Took the Light. Sellytics Didn't Stop.", feature:"Sales Tracker" },
  { id:"d12", day:12, week:2, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"Why Your Revenue Number Is Lying to You", feature:"Expenses Tracker" },
  { id:"d13", day:13, week:2, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",   title:"Shop Owner Spotlight #1 — Blessing, Onitsha", feature:"Customer Manager" },
  { id:"d14", day:14, week:2, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",  title:"Do You Know What You Owe Your Suppliers Right Now?", feature:"Unpaid Supplies" },
  // WEEK 3
  { id:"d15", day:15, week:3, pillar:"Proof Wall",      format:"Carousel",      goal:"Trust",   title:"Before & After: Same Shop, Professional Receipts", feature:"Sales Receipts" },
  { id:"d16", day:16, week:3, pillar:"Classroom",       format:"Reel / TikTok", goal:"Reach",   title:"You Have 3 Shops. Stock Is Stranded in One. Here's the Fix.", feature:"Stock Transfer" },
  { id:"d17", day:17, week:3, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"End-of-Week Report in 90 Seconds", feature:"Sales Summary" },
  { id:"d18", day:18, week:3, pillar:"Money Mirror",    format:"Text Post",     goal:"Reach",   title:"The Return Problem Nobody Talks About", feature:"Returned Items Tracker" },
  { id:"d19", day:19, week:3, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"Unofficial Rules of Running a Nigerian Shop", feature:null },
  { id:"d20", day:20, week:3, pillar:"Proof Wall",      format:"Video",         goal:"Convert", title:"'I Found ₦47,000 in Expenses I'd Completely Forgotten'", feature:"Expenses Tracker" },
  { id:"d21", day:21, week:3, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert", title:"How Many Customers Owe You Money Right Now?", feature:"Debtors" },
  // WEEK 4
  { id:"d22", day:22, week:4, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert", title:"Free vs. PRO: What You Get at Every Level", feature:"Suppliers & Product Ir." },
  { id:"d23", day:23, week:4, pillar:"Classroom",       format:"Reel / TikTok", goal:"Trust",   title:"Why You Should Never Buy on Credit Without Tracking It", feature:"Unpaid Supplies" },
  { id:"d24", day:24, week:4, pillar:"Money Mirror",    format:"Video",         goal:"Convert", title:"The Real Cost of Not Tracking: A 90-Day Calculation", feature:"Sales Tracker" },
  { id:"d25", day:25, week:4, pillar:"African Hustle",  format:"Static Post",   goal:"Trust",   title:"Shop Owner Spotlight #2 — Emeka, Kano", feature:"Customer Manager" },
  { id:"d26", day:26, week:4, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"What Happens When a Customer Returns Something?", feature:"Returned Items Tracker" },
  { id:"d27", day:27, week:4, pillar:"Proof Wall",      format:"Video",         goal:"Convert", title:"30-Day Honest Review: What Actually Changed", feature:"Expenses Tracker" },
  { id:"d28", day:28, week:4, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert", title:"Every Excuse for Not Tracking — Destroyed With Evidence", feature:"Debtors" },
  { id:"d29", day:29, week:4, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"30 Days. Thank You for Being Here.", feature:null },
  { id:"d30", day:30, week:4, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"Your Free Trial Starts Right Now", feature:"Sales Tracker" },
  // WEEK 5
  { id:"d31", day:31, week:5, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"Month 2 Starts Now. The Community Is Bigger.", feature:null },
  { id:"d32", day:32, week:5, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"The Inventory Audit Every Shop Needs (Step-by-Step)", feature:"Manage Inventory" },
  { id:"d33", day:33, week:5, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"She Had ₦340K in Outstanding Credit. Had No Idea.", feature:"Debtors" },
  { id:"d34", day:34, week:5, pillar:"Proof Wall",      format:"Video",         goal:"Trust",   title:"The Shop That Almost Closed — Then Found Its Real Numbers", feature:"Expenses Tracker" },
  { id:"d35", day:35, week:5, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"Which Supplier Is Actually Giving You the Best Deal?", feature:"Suppliers & Product Ir." },
  { id:"d36", day:36, week:5, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"Why Receipts Are More Than Proof of Purchase", feature:"Sales Receipts" },
  { id:"d37", day:37, week:5, pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  title:"Do You Know Your Top 5 Customers by Name?", feature:"Customer Manager" },
  // WEEK 6
  { id:"d38", day:38, week:6, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"How to Use Your Sales Data to Make Better Buying Decisions", feature:"Sales Summary" },
  { id:"d39", day:39, week:6, pillar:"Money Mirror",    format:"Video",         goal:"Reach",   title:"Running 2 Shops and Getting it Wrong — A Common Story", feature:"Stock Transfer" },
  { id:"d40", day:40, week:6, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert", title:"6 Real Results. 6 Different Features. Same Platform.", feature:"Debtors" },
  { id:"d41", day:41, week:6, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"200 Products. Does Sellytics Still Work? Live Test.", feature:"Manage Inventory" },
  { id:"d42", day:42, week:6, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",   title:"Shop Owner Spotlight #3 — Chidi, the Wholesaler", feature:"Suppliers & Product Ir." },
  { id:"d43", day:43, week:6, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"The 8 Business Expenses Most Shop Owners Never Record", feature:"Expenses Tracker" },
  { id:"d44", day:44, week:6, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",  title:"Have You Ever Been Surprised by a Supplier Payment You Forgot?", feature:"Unpaid Supplies" },
  // WEEK 7
  { id:"d45", day:45, week:7, pillar:"Proof Wall",      format:"Video",         goal:"Convert", title:"60-Day Check-In: Is Sellytics Still Worth It?", feature:"Sales Summary" },
  { id:"d46", day:46, week:7, pillar:"Classroom",       format:"Reel / TikTok", goal:"Reach",   title:"3 Pricing Mistakes That Are Silently Killing Your Margin", feature:"Products & Pricing" },
  { id:"d47", day:47, week:7, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"Your Best Customers Deserve Better Than Anonymity", feature:"Customer Manager" },
  { id:"d48", day:48, week:7, pillar:"Money Mirror",    format:"Carousel",      goal:"Reach",   title:"The True Cost of 'I'll Start Tracking Next Month'", feature:"Sales Tracker" },
  { id:"d49", day:49, week:7, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"Things That Hit Different When Your Business Is Organised", feature:null },
  { id:"d50", day:50, week:7, pillar:"Proof Wall",      format:"Static Post",   goal:"Convert", title:"Milestone: [X] Businesses. [Y] Transactions Tracked.", feature:"Sales Tracker" },
  { id:"d51", day:51, week:7, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert", title:"Which PRO Feature Would Change Your Business Most?", feature:"Expenses Tracker" },
  // WEEK 8
  { id:"d52", day:52, week:8, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"When to Know You're Ready to Open a Second Shop", feature:"Stock Transfer" },
  { id:"d53", day:53, week:8, pillar:"African Hustle",  format:"Video",         goal:"Reach",   title:"Shop Owner Spotlight #4 — From Market Table to 3 Shops", feature:"Manage Inventory" },
  { id:"d54", day:54, week:8, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"₦1M/Month With Tracking vs. ₦1M/Month Without", feature:"Sales Summary" },
  { id:"d55", day:55, week:8, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"Multi-Location Dashboard: One Phone, Three Shops", feature:"Stock Transfer" },
  { id:"d56", day:56, week:8, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert", title:"From Sceptic to Advocate: 3 PRO Feature U-Turns", feature:"Unpaid Supplies" },
  { id:"d57", day:57, week:8, pillar:"Classroom",       format:"Live",          goal:"Engage",  title:"Live Q&A: Ask Me Anything About Running a Retail Business", feature:null },
  { id:"d58", day:58, week:8, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"60 Days. This Community. Here's What We Built.", feature:null },
  { id:"d59", day:59, week:8, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert", title:"The Complete Case for Switching — All Numbers, No Fluff", feature:"Sales Summary" },
  { id:"d60", day:60, week:8, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"Free Trial. Every Feature. No Card. Starts Now.", feature:"Sales Tracker" },
  // WEEK 9
  { id:"d61", day:61, week:9,  pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"Day 61: We're Just Getting Started. Welcome to Month 3.", feature:null },
  { id:"d62", day:62, week:9,  pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"Pricing Strategy for African Markets: The Nuances Nobody Teaches", feature:"Products & Pricing" },
  { id:"d63", day:63, week:9,  pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"Ghost Stock: The Problem That Doesn't Exist Until It Does", feature:"Manage Inventory" },
  { id:"d64", day:64, week:9,  pillar:"Proof Wall",      format:"Video",         goal:"Trust",   title:"Sellytics in Ghana: First User Story Outside Nigeria", feature:"Sales Tracker" },
  { id:"d65", day:65, week:9,  pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"Professional Receipts in Any Currency, Any Country", feature:"Sales Receipts" },
  { id:"d66", day:66, week:9,  pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"4 KPIs Every African Retailer Should Check Every Monday", feature:"Sales Summary" },
  { id:"d67", day:67, week:9,  pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  title:"Where Are You Watching From? 🌍", feature:"Customer Manager" },
  // WEEK 10
  { id:"d68", day:68, week:10, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"Stock Turnover Ratio: The Metric That Tells You If Your Money Is Working", feature:"Manage Inventory" },
  { id:"d69", day:69, week:10, pillar:"Money Mirror",    format:"Video",         goal:"Reach",   title:"What Happens to Your Business When You Take a Holiday?", feature:"Sales Tracker" },
  { id:"d70", day:70, week:10, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert", title:"90 Days of Real Users. The Numbers We Collected.", feature:"Expenses Tracker" },
  { id:"d71", day:71, week:10, pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", title:"Testing Sellytics on a ₦35,000 Budget Phone", feature:"Products & Pricing" },
  { id:"d72", day:72, week:10, pillar:"Classroom",       format:"Text Post",     goal:"Reach",   title:"Why Most Small Shops Fail in Year 3 (Not Year 1)", feature:"Sales Summary" },
  { id:"d73", day:73, week:10, pillar:"African Hustle",  format:"Static Post",   goal:"Reach",   title:"Shop Owner Spotlight #5 — The Fashion Retailer", feature:"Returned Items Tracker" },
  { id:"d74", day:74, week:10, pillar:"Money Mirror",    format:"Story / Poll",  goal:"Engage",  title:"When Did You Last Update Your Cost Prices After a Supplier Increase?", feature:"Products & Pricing" },
  // WEEK 11
  { id:"d75", day:75, week:11, pillar:"Proof Wall",      format:"Collab Post",   goal:"Reach",   title:"We Sat With a Top SME Coach — This Is What They Said", feature:"Sales Summary" },
  { id:"d76", day:76, week:11, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"How to Use Your Purchase History to Negotiate Better Supplier Deals", feature:"Suppliers & Product Ir." },
  { id:"d77", day:77, week:11, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"How Sellytics Fits Into Your Existing Business Setup", feature:"Sales Tracker" },
  { id:"d78", day:78, week:11, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"Market Day Energy — A Love Letter to African Retail", feature:null },
  { id:"d79", day:79, week:11, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert", title:"The Hidden Cost of Running 2+ Shops Without Systems", feature:"Debtors" },
  { id:"d80", day:80, week:11, pillar:"Proof Wall",      format:"Video",         goal:"Convert", title:"Why Our Users Keep Sending Their Friends", feature:"Customer Manager" },
  { id:"d81", day:81, week:11, pillar:"Demo Room",       format:"Story / Poll",  goal:"Convert", title:"Which Feature Would Make You Upgrade to PRO?", feature:"Expenses Tracker" },
  // WEEK 12
  { id:"d82", day:82, week:12, pillar:"Classroom",       format:"Carousel",      goal:"Trust",   title:"How to Build a Business That Runs Without You", feature:"Sales Summary" },
  { id:"d83", day:83, week:12, pillar:"African Hustle",  format:"Video",         goal:"Reach",   title:"Shop Owner Spotlight #6 — The Next Generation Retailer", feature:"Products & Pricing" },
  { id:"d84", day:84, week:12, pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   title:"End of Quarter: What Your Numbers Should Be Telling You", feature:"Sales Summary" },
  { id:"d85", day:85, week:12, pillar:"Proof Wall",      format:"Carousel",      goal:"Convert", title:"90 Days. Here's What This Community Built in Numbers.", feature:"Sales Tracker" },
  { id:"d86", day:86, week:12, pillar:"Demo Room",       format:"Video",         goal:"Convert", title:"The Complete Sellytics Feature Tour — 6 Minutes, Every Screen", feature:"Manage Inventory" },
  { id:"d87", day:87, week:12, pillar:"Classroom",       format:"Live",          goal:"Engage",  title:"Live: 90 Days In. Ask Me Anything About Retail Business.", feature:null },
  { id:"d88", day:88, week:12, pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   title:"What African Retail Looks Like in 10 Years", feature:null },
  { id:"d89", day:89, week:12, pillar:"Money Mirror",    format:"Carousel",      goal:"Convert", title:"90 Days Without Tracking vs. 90 Days With Sellytics", feature:"Expenses Tracker" },
  { id:"d90", day:90, week:12, pillar:"Proof Wall",      format:"Video",         goal:"Convert", title:"Day 90. Hundreds of Shops. One Message.", feature:"Sales Tracker" },
];

// Advanced feature posts
const ADVANCED_POSTS = [
  // AI Insights
  { id:"ai1", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   feature:"Restock Alerts",          title:"Your Shop Ran Out. A Customer Left. This Could Have Been Prevented." },
  { id:"ai2", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Restock Recommendations", title:"How AI Decides What You Should Restock (And Why It's Smarter Than Your Gut)" },
  { id:"ai3", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Money Mirror",    format:"Video",         goal:"Reach",   feature:"Anomaly Alerts",          title:"The AI Noticed Something Was Wrong Before She Did" },
  { id:"ai4", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Sales Insights",          title:"Sales Forecasting: How to Know Next Month's Revenue Before It Happens" },
  { id:"ai5", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Convert", feature:"Theft/Audit Checks",      title:"The Audit Your Shop Needs But You've Never Run" },
  { id:"ai6", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Demo Room",       format:"Video",         goal:"Convert", feature:"Anomaly Alerts",          title:"Live Demo: What an Anomaly Alert Actually Looks Like" },
  { id:"ai7", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"Proof Wall",      format:"Static Post",   goal:"Convert", feature:"Sales Insights",          title:"'Sales Insights Told Me to Stock Up Before a Holiday I'd Forgotten About'" },
  { id:"ai8", module:"AI Insights", moduleColor:"#5B21B6", moduleBg:"#F5F3FF", week:"AI", pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  feature:"Restock Alerts",          title:"Have You Ever Told a Customer 'We Don't Have It' This Week?" },
  // Finance
  { id:"fi1", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Financial Dashboard",     title:"What 'Visualizing Your Finances in One Place' Actually Means for a Shop Owner" },
  { id:"fi2", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Money Mirror",    format:"Reel / TikTok", goal:"Reach",   feature:"Account Receivables",     title:"The Difference Between Money You Made and Money You Actually Have" },
  { id:"fi3", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Financial Reports",       title:"P&L vs. Balance Sheet vs. Cash Flow: What Each One Tells You" },
  { id:"fi4", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Money Mirror",    format:"Video",         goal:"Reach",   feature:"Account Payable",         title:"How Much Do You Owe Right Now? The Honest Answer Might Surprise You" },
  { id:"fi5", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", feature:"Reconciliations",         title:"Bank Reconciliation in a Nigerian Shop: Why It Matters More Than You Think" },
  { id:"fi6", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Inventory Valuations",    title:"Your Stock Is Worth Money — Do You Know Exactly How Much?" },
  { id:"fi7", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"Proof Wall",      format:"Video",         goal:"Convert", feature:"Financial Reports",       title:"'Financial Reports Helped Me Get a Business Loan in 2 Weeks'" },
  { id:"fi8", module:"Finance",     moduleColor:"#1565C0", moduleBg:"#EFF6FF", week:"FIN", pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  feature:"Financial Reports",       title:"Have You Ever Applied for a Business Loan?" },
  // Warehouse Hub
  { id:"wh1", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"African Hustle",  format:"Reel / TikTok", goal:"Reach",   feature:"External Clients",        title:"Your Empty Storage Space Is Costing You Money Every Day You Don't Rent It" },
  { id:"wh2", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Warehouse Overview",      title:"How Warehousing as a Business Model Actually Works in Africa" },
  { id:"wh3", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Demo Room",       format:"Video",         goal:"Convert", feature:"Stock Transfers",         title:"Watch: Managing 3 External Clients' Stock From One Phone" },
  { id:"wh4", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Money Mirror",    format:"Carousel",      goal:"Reach",   feature:"External Clients",        title:"The Maths of Warehousing Income: What 3 Clients Could Pay You Monthly" },
  { id:"wh5", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Classroom",       format:"Carousel",      goal:"Trust",   feature:"Returns Processing",      title:"The Problem With Informal Storage Arrangements (And How to Fix Them)" },
  { id:"wh6", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Demo Room",       format:"Reel / TikTok", goal:"Convert", feature:"Client Requests",         title:"How a Client Requests Their Stock From Your Warehouse" },
  { id:"wh7", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"Proof Wall",      format:"Video",         goal:"Convert", feature:"External Clients",        title:"'I'm Earning ₦150,000 a Month From Space I Was Wasting'" },
  { id:"wh8", module:"Warehouse Hub", moduleColor:"#065F46", moduleBg:"#ECFDF5", week:"WH", pillar:"African Hustle",  format:"Story / Poll",  goal:"Engage",  feature:"Warehouse Overview",      title:"Do You Have Any Unused Storage Space in Your Shop or Property?" },
];

const ALL_POSTS = [...CORE_POSTS, ...ADVANCED_POSTS];
const TOTAL_POSTS = ALL_POSTS.length;

// Navigation routes map
const NAV_ROUTES = [
  { label: "Strategy Overview",   route: "/content",    icon: "🗺️" },
  { label: "Audience Insights",   route: "/insights",   icon: "👥" },
  { label: "Content Pillars",     route: "/pillar",     icon: "🏛️" },
  { label: "Days 1–30",           route: "/calender",   icon: "📅" },
  { label: "Days 31–60",          route: "/calender2",  icon: "📅" },
  { label: "Days 61–90",          route: "/calender3",  icon: "📅" },
  { label: "90-Day Master",       route: "/calender4",  icon: "🗓️" },
  { label: "Advanced Features",   route: "/calender5",  icon: "⚡" },
];

// ─────────────────────────────────────────────────────────────
//  STORAGE KEY
// ─────────────────────────────────────────────────────────────
const STORAGE_KEY = "sellytics_content_done";

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ContentDashboard() {
  // Load done state from localStorage
  const [done, setDone] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch { return {}; }
  });

  const [activeView, setActiveView]     = useState("overview"); // overview | week | advanced
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [filterGoal, setFilterGoal]     = useState("All");
  const [filterPillar, setFilterPillar] = useState("All");
  const [search, setSearch]             = useState("");
  const [activeModule, setActiveModule] = useState("All");

  // Persist to localStorage on every change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); } catch {}
  }, [done]);

  const toggleDone = useCallback((id) => {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const markAllWeek = (weekKey, posts, val) => {
    const ids = posts.map(p => p.id);
    setDone(prev => {
      const next = { ...prev };
      ids.forEach(id => { next[id] = val; });
      return next;
    });
  };

  // Stats
  const totalDone = ALL_POSTS.filter(p => done[p.id]).length;
  const pct = Math.round((totalDone / TOTAL_POSTS) * 100);

  const weekStats = Object.keys(WEEK_THEMES).map(wk => {
    const posts = CORE_POSTS.filter(p => p.week === Number(wk));
    const doneCount = posts.filter(p => done[p.id]).length;
    return { week: Number(wk), posts, doneCount, total: posts.length, ...WEEK_THEMES[wk] };
  });

  const advStats = {
    "AI Insights":   ADVANCED_POSTS.filter(p => p.module === "AI Insights"),
    "Finance":       ADVANCED_POSTS.filter(p => p.module === "Finance"),
    "Warehouse Hub": ADVANCED_POSTS.filter(p => p.module === "Warehouse Hub"),
  };

  // Filter posts for detail view
  const getFilteredPosts = (posts) => posts.filter(p => {
    if (filterGoal !== "All" && p.goal !== filterGoal) return false;
    if (filterPillar !== "All" && p.pillar !== filterPillar) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !(p.feature||"").toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const MONTHS = [
    { num: 1, label: "Month 1", weeks: [1,2,3,4],   color: "#1565C0" },
    { num: 2, label: "Month 2", weeks: [5,6,7,8],   color: "#6A1B9A" },
    { num: 3, label: "Month 3", weeks: [9,10,11,12], color: "#00695C" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#F7F6F3", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,400;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #D1CFC9; border-radius: 4px; }
        .chk { width: 18px; height: 18px; border-radius: 5px; border: 2px solid #D1D5DB; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.15s; background: #FFF; }
        .chk.checked { background: #16A34A; border-color: #16A34A; }
        .chk:hover { border-color: #6B7280; }
        .post-row { display: flex; gap: 12px; align-items: flex-start; padding: 11px 14px; border-radius: 9px; transition: background 0.1s; }
        .post-row:hover { background: rgba(0,0,0,0.03); }
        .post-row.done-row { opacity: 0.55; }
        .pill { display: inline-flex; align-items: center; padding: 2px 7px; border-radius: 12px; font-size: 10px; font-weight: 600; white-space: nowrap; }
        .week-card { background: #FFF; border: 1px solid #E8E5DF; border-radius: 14px; overflow: hidden; cursor: pointer; transition: all 0.15s; }
        .week-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.09); transform: translateY(-1px); }
        .nav-link { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 8px; font-size: 13px; font-weight: 500; color: #555; text-decoration: none; transition: all 0.15s; background: none; border: none; cursor: pointer; width: 100%; text-align: left; font-family: 'DM Sans', sans-serif; }
        .nav-link:hover { background: #EDEBE6; color: #1A1A1A; }
        .tb { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 6px; transition: all 0.12s; }
        .se { border: 1px solid #DDD; border-radius: 7px; padding: 6px 10px; font-family: 'DM Sans', sans-serif; font-size: 11px; background: #FFF; color: #444; cursor: pointer; outline: none; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        .fade { animation: fadeIn 0.2s ease-out; }
        .prog-bar { height: 6px; border-radius: 3px; background: #E8E5DF; overflow: hidden; }
        .prog-fill { height: 100%; border-radius: 3px; transition: width 0.4s ease; }
        .adv-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 10px; font-weight: 700; }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh" }}>

        {/* ── SIDEBAR ── */}
        <div style={{ width: 236, flexShrink: 0, background: "#FFF", borderRight: "1px solid #E8E5DF", display: "flex", flexDirection: "column", padding: "0 0 20px" }}>
          {/* Brand */}
          <div style={{ padding: "22px 18px 16px", borderBottom: "1px solid #F0EDE8" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 4 }}>Sellytics HQ</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>Content Command</div>
            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 11, color: "#888" }}>{totalDone} / {TOTAL_POSTS} done</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: pct === 100 ? "#16A34A" : "#1A1A1A" }}>{pct}%</span>
              </div>
              <div className="prog-bar">
                <div className="prog-fill" style={{ width: `${pct}%`, background: pct === 100 ? "#16A34A" : "#1A1A1A" }} />
              </div>
            </div>
          </div>

          {/* Views */}
          <div style={{ padding: "14px 10px 8px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#BBB", padding: "0 8px", marginBottom: 6 }}>Dashboard</div>
            {[
              { id: "overview", icon: "⊞", label: "Overview" },
              { id: "week",     icon: "📅", label: "By Week" },
              { id: "advanced", icon: "⚡", label: "Advanced Features" },
            ].map(v => (
              <button key={v.id} className="nav-link"
                style={{ background: activeView === v.id ? "#F0EDE8" : "none", color: activeView === v.id ? "#1A1A1A" : "#555", fontWeight: activeView === v.id ? 700 : 500 }}
                onClick={() => { setActiveView(v.id); setSelectedWeek(null); }}>
                <span style={{ fontSize: 16 }}>{v.icon}</span> {v.label}
              </button>
            ))}
          </div>

          <div style={{ height: 1, background: "#F0EDE8", margin: "8px 16px" }} />

          {/* Open pages */}
          <div style={{ padding: "0 10px 8px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#BBB", padding: "0 8px", marginBottom: 6 }}>Open Pages</div>
            {NAV_ROUTES.map(r => (
              <Link key={r.route} to={r.route} className="nav-link" style={{ textDecoration: "none" }}>
                <span style={{ fontSize: 14 }}>{r.icon}</span>
                <span style={{ fontSize: 12 }}>{r.label}</span>
              </Link>
            ))}
          </div>

          {/* Quick stats */}
          <div style={{ marginTop: "auto", padding: "12px 18px", background: "#F7F6F3", borderTop: "1px solid #E8E5DF" }}>
            {Object.entries(GOALS).map(([g, info]) => {
              const total = ALL_POSTS.filter(p => p.goal === g).length;
              const doneC = ALL_POSTS.filter(p => p.goal === g && done[p.id]).length;
              return (
                <div key={g} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: info.color, fontWeight: 600 }}>{info.label}</span>
                  <span style={{ fontSize: 11, color: "#888" }}>{doneC}/{total}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MAIN AREA ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>

          {/* ════ OVERVIEW ════ */}
          {activeView === "overview" && (
            <div className="fade">
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 6 }}>Dashboard Overview</div>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, lineHeight: 1.1 }}>90-Day Content Tracker</h1>
                <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>Check off content as you create it. Progress saves automatically.</p>
              </div>

              {/* Big stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Total Posts", value: TOTAL_POSTS, sub: "across all modules",  color: "#1A1A1A" },
                  { label: "Completed",   value: totalDone,   sub: `${pct}% of all content`, color: "#16A34A" },
                  { label: "Remaining",   value: TOTAL_POSTS - totalDone, sub: "still to create", color: "#C0392B" },
                  { label: "Core Days",   value: 90,          sub: "12 weeks of content", color: "#4527A0" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "#FFF", border: "1px solid #E8E5DF", borderRadius: 12, padding: "18px 20px" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: "#AAA", marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Month-by-month */}
              {MONTHS.map(month => {
                const monthWeeks = weekStats.filter(w => WEEK_THEMES[w.week].month === month.num);
                const mDone = monthWeeks.reduce((a, w) => a + w.doneCount, 0);
                const mTotal = monthWeeks.reduce((a, w) => a + w.total, 0);
                return (
                  <div key={month.num} style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: month.color }}>{month.label}</div>
                      <div style={{ flex: 1, height: 1, background: "#E8E5DF" }} />
                      <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>{mDone}/{mTotal} done</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                      {monthWeeks.map(w => (
                        <div key={w.week} className="week-card" onClick={() => { setActiveView("week"); setSelectedWeek(w.week); }}>
                          <div style={{ height: 5, background: w.color }} />
                          <div style={{ padding: "14px 16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                              <div>
                                <div style={{ fontSize: 10, fontWeight: 700, color: w.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>Week {w.week}</div>
                                <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3, marginTop: 2 }}>{w.theme}</div>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: w.doneCount === w.total ? "#16A34A" : "#1A1A1A", lineHeight: 1 }}>{w.doneCount}</div>
                                <div style={{ fontSize: 9, color: "#AAA" }}>of {w.total}</div>
                              </div>
                            </div>
                            <div className="prog-bar">
                              <div className="prog-fill" style={{ width: `${Math.round((w.doneCount / w.total) * 100)}%`, background: w.doneCount === w.total ? "#16A34A" : w.color }} />
                            </div>
                            <div style={{ fontSize: 10, color: "#AAA", marginTop: 6 }}>Days {(w.week - 1) * 7 + 1}–{w.week * 7} · Click to open</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Advanced modules summary */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#374151" }}>Advanced Feature Modules</div>
                  <div style={{ flex: 1, height: 1, background: "#E8E5DF" }} />
                  <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>
                    {ADVANCED_POSTS.filter(p => done[p.id]).length}/{ADVANCED_POSTS.length} done
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    { name: "AI Insights",   color: "#5B21B6", bg: "#F5F3FF", icon: "🤖", posts: advStats["AI Insights"] },
                    { name: "Finance",       color: "#1565C0", bg: "#EFF6FF", icon: "💰", posts: advStats["Finance"] },
                    { name: "Warehouse Hub", color: "#065F46", bg: "#ECFDF5", icon: "🏭", posts: advStats["Warehouse Hub"] },
                  ].map(m => {
                    const doneC = m.posts.filter(p => done[p.id]).length;
                    return (
                      <div key={m.name} className="week-card" onClick={() => { setActiveView("advanced"); setActiveModule(m.name); }}>
                        <div style={{ height: 5, background: m.color }} />
                        <div style={{ padding: "14px 16px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                              <span style={{ fontSize: 22 }}>{m.icon}</span>
                              <div style={{ fontSize: 13, fontWeight: 700 }}>{m.name}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: doneC === m.posts.length ? "#16A34A" : "#1A1A1A", lineHeight: 1 }}>{doneC}</div>
                              <div style={{ fontSize: 9, color: "#AAA" }}>of {m.posts.length}</div>
                            </div>
                          </div>
                          <div className="prog-bar">
                            <div className="prog-fill" style={{ width: `${Math.round((doneC / m.posts.length) * 100)}%`, background: doneC === m.posts.length ? "#16A34A" : m.color }} />
                          </div>
                          <div style={{ fontSize: 10, color: "#AAA", marginTop: 6 }}>{m.posts.length} dedicated posts · Click to open</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ════ BY WEEK ════ */}
          {activeView === "week" && (
            <div className="fade">
              {selectedWeek === null ? (
                // Week picker
                <>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 6 }}>Weekly View</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700 }}>Select a Week</h2>
                  </div>
                  {MONTHS.map(month => (
                    <div key={month.num} style={{ marginBottom: 24 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: month.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>{month.label}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                        {weekStats.filter(w => WEEK_THEMES[w.week].month === month.num).map(w => {
                          const wpct = Math.round((w.doneCount / w.total) * 100);
                          return (
                            <div key={w.week} className="week-card" onClick={() => setSelectedWeek(w.week)}>
                              <div style={{ height: 4, background: w.color }} />
                              <div style={{ padding: "12px 14px" }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: w.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>Week {w.week}</div>
                                <div style={{ fontSize: 12, fontWeight: 700, marginTop: 2, marginBottom: 8, lineHeight: 1.3 }}>{w.theme}</div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                  <span style={{ fontSize: 10, color: "#888" }}>{w.doneCount}/{w.total} done</span>
                                  <span style={{ fontSize: 10, fontWeight: 700, color: wpct === 100 ? "#16A34A" : "#555" }}>{wpct}%</span>
                                </div>
                                <div className="prog-bar">
                                  <div className="prog-fill" style={{ width: `${wpct}%`, background: wpct === 100 ? "#16A34A" : w.color }} />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                // Week detail
                (() => {
                  const wData = weekStats.find(w => w.week === selectedWeek);
                  const filtered = getFilteredPosts(wData.posts);
                  const allDone = wData.posts.every(p => done[p.id]);
                  return (
                    <>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                        <button onClick={() => setSelectedWeek(null)} style={{ background: "#F0EDE8", border: "none", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#555", fontFamily: "'DM Sans', sans-serif" }}>← All Weeks</button>
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: wData.color }}>Week {selectedWeek}</div>
                          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700 }}>{wData.theme}</h2>
                        </div>
                        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: wData.doneCount === wData.total ? "#16A34A" : "#555" }}>{wData.doneCount}/{wData.total}</span>
                          <button onClick={() => markAllWeek(selectedWeek, wData.posts, !allDone)}
                            style={{ fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 7, border: "none", cursor: "pointer", background: allDone ? "#FEE2E2" : "#DCFCE7", color: allDone ? "#991B1B" : "#166534", fontFamily: "'DM Sans', sans-serif" }}>
                            {allDone ? "Unmark All" : "Mark All Done"}
                          </button>
                        </div>
                      </div>

                      {/* Filters */}
                      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..."
                          style={{ border: "1px solid #DDD", borderRadius: 7, padding: "6px 12px", fontSize: 12, fontFamily: "'DM Sans', sans-serif", outline: "none", width: 180 }} />
                        <select className="se" value={filterGoal} onChange={e => setFilterGoal(e.target.value)}>
                          <option value="All">All Goals</option>
                          {Object.keys(GOALS).map(g => <option key={g}>{g}</option>)}
                        </select>
                        <select className="se" value={filterPillar} onChange={e => setFilterPillar(e.target.value)}>
                          <option value="All">All Pillars</option>
                          {Object.keys(PILLARS).map(p => <option key={p}>{p}</option>)}
                        </select>
                        {(search || filterGoal !== "All" || filterPillar !== "All") && (
                          <button onClick={() => { setSearch(""); setFilterGoal("All"); setFilterPillar("All"); }}
                            style={{ fontSize: 11, color: "#C0392B", background: "#FEF2F2", border: "1px solid #FFCDD0", borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontWeight: 600 }}>✕</button>
                        )}
                      </div>

                      {/* Progress */}
                      <div style={{ background: "#FFF", border: "1px solid #E8E5DF", borderRadius: 12, padding: "14px 18px", marginBottom: 16 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 12, fontWeight: 600 }}>Week {selectedWeek} Progress</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: wData.doneCount === wData.total ? "#16A34A" : "#555" }}>
                            {Math.round((wData.doneCount / wData.total) * 100)}%
                          </span>
                        </div>
                        <div className="prog-bar" style={{ height: 8 }}>
                          <div className="prog-fill" style={{ width: `${Math.round((wData.doneCount / wData.total) * 100)}%`, background: wData.doneCount === wData.total ? "#16A34A" : wData.color }} />
                        </div>
                      </div>

                      {/* Post list */}
                      <div style={{ background: "#FFF", border: "1px solid #E8E5DF", borderRadius: 12, overflow: "hidden" }}>
                        {filtered.map((post, i) => (
                          <div key={post.id} className={`post-row${done[post.id] ? " done-row" : ""}`}
                            style={{ borderBottom: i < filtered.length - 1 ? "1px solid #F3F0EB" : "none" }}>
                            {/* Checkbox */}
                            <div className={`chk${done[post.id] ? " checked" : ""}`} onClick={() => toggleDone(post.id)}>
                              {done[post.id] && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
                                <span style={{ fontSize: 11, fontWeight: 700, color: "#888" }}>D{post.day}</span>
                                <span style={{ fontSize: 12 }}>{FORMATS[post.format]}</span>
                                <span className="pill" style={{ background: PILLARS[post.pillar].bg, color: PILLARS[post.pillar].color }}>{post.pillar}</span>
                                <span className="pill" style={{ background: GOALS[post.goal].bg, color: GOALS[post.goal].color }}>{GOALS[post.goal].label}</span>
                                {post.feature && <span className="pill" style={{ background: "#F3F2EF", color: "#555" }}>🏷️ {post.feature}</span>}
                              </div>
                              <div style={{ fontSize: 14, fontWeight: done[post.id] ? 400 : 600, color: done[post.id] ? "#9CA3AF" : "#1A1A1A", textDecoration: done[post.id] ? "line-through" : "none", lineHeight: 1.4 }}>{post.title}</div>
                            </div>
                            <div style={{ fontSize: 11, color: done[post.id] ? "#16A34A" : "#D1D5DB", fontWeight: 700, flexShrink: 0 }}>
                              {done[post.id] ? "✓ Done" : "—"}
                            </div>
                          </div>
                        ))}
                        {filtered.length === 0 && (
                          <div style={{ padding: "40px", textAlign: "center", color: "#AAA" }}>
                            <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>No posts match your filters</div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()
              )}
            </div>
          )}

          {/* ════ ADVANCED FEATURES ════ */}
          {activeView === "advanced" && (
            <div className="fade">
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 6 }}>Advanced Modules</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700 }}>Feature Content Tracker</h2>
                <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>AI Insights · Finance Dashboard · Warehouse Hub</p>
              </div>

              {/* Module tabs */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {["All", "AI Insights", "Finance", "Warehouse Hub"].map(m => (
                  <button key={m} className="tb" onClick={() => setActiveModule(m)}
                    style={{
                      background: activeModule === m ? "#1A1A1A" : "#F0EDE8",
                      color: activeModule === m ? "#FFF" : "#555",
                      fontWeight: activeModule === m ? 700 : 500,
                    }}>
                    {m === "AI Insights" ? "🤖 " : m === "Finance" ? "💰 " : m === "Warehouse Hub" ? "🏭 " : ""}{m}
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..."
                  style={{ border: "1px solid #DDD", borderRadius: 7, padding: "6px 12px", fontSize: 12, fontFamily: "'DM Sans', sans-serif", outline: "none", width: 180 }} />
                <select className="se" value={filterGoal} onChange={e => setFilterGoal(e.target.value)}>
                  <option value="All">All Goals</option>
                  {Object.keys(GOALS).map(g => <option key={g}>{g}</option>)}
                </select>
                {(search || filterGoal !== "All") && (
                  <button onClick={() => { setSearch(""); setFilterGoal("All"); }}
                    style={{ fontSize: 11, color: "#C0392B", background: "#FEF2F2", border: "1px solid #FFCDD0", borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontWeight: 600 }}>✕</button>
                )}
              </div>

              {[
                { name: "AI Insights",   color: "#5B21B6", bg: "#F5F3FF", icon: "🤖", posts: advStats["AI Insights"] },
                { name: "Finance",       color: "#1565C0", bg: "#EFF6FF", icon: "💰", posts: advStats["Finance"] },
                { name: "Warehouse Hub", color: "#065F46", bg: "#ECFDF5", icon: "🏭", posts: advStats["Warehouse Hub"] },
              ].filter(m => activeModule === "All" || activeModule === m.name).map(m => {
                const mFiltered = getFilteredPosts(m.posts);
                const doneC = m.posts.filter(p => done[p.id]).length;
                const allDone = m.posts.every(p => done[p.id]);
                return (
                  <div key={m.name} style={{ marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <span style={{ fontSize: 22 }}>{m.icon}</span>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 800, color: m.color }}>{m.name}</div>
                        <div style={{ fontSize: 11, color: "#888" }}>{doneC}/{m.posts.length} posts done</div>
                      </div>
                      <div style={{ flex: 1 }} />
                      <button onClick={() => markAllWeek(m.name, m.posts, !allDone)}
                        style={{ fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", background: allDone ? "#FEE2E2" : "#DCFCE7", color: allDone ? "#991B1B" : "#166534", fontFamily: "'DM Sans', sans-serif" }}>
                        {allDone ? "Unmark All" : "Mark All Done"}
                      </button>
                    </div>

                    <div style={{ background: "#FFF", border: `1px solid ${m.bg === "#F5F3FF" ? "#DDD6FE" : m.bg === "#EFF6FF" ? "#BFDBFE" : "#A7F3D0"}`, borderRadius: 12, overflow: "hidden" }}>
                      {mFiltered.map((post, i) => (
                        <div key={post.id} className={`post-row${done[post.id] ? " done-row" : ""}`}
                          style={{ borderBottom: i < mFiltered.length - 1 ? "1px solid #F3F0EB" : "none" }}>
                          <div className={`chk${done[post.id] ? " checked" : ""}`} onClick={() => toggleDone(post.id)}>
                            {done[post.id] && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                              <span style={{ fontSize: 11, fontWeight: 700, color: m.color, background: m.bg, padding: "1px 7px", borderRadius: 10 }}>{post.feature}</span>
                              <span style={{ fontSize: 12 }}>{FORMATS[post.format]}</span>
                              <span className="pill" style={{ background: GOALS[post.goal].bg, color: GOALS[post.goal].color }}>{GOALS[post.goal].label}</span>
                              <span className="pill" style={{ background: PILLARS[post.pillar].bg, color: PILLARS[post.pillar].color }}>{post.pillar}</span>
                            </div>
                            <div style={{ fontSize: 14, fontWeight: done[post.id] ? 400 : 600, color: done[post.id] ? "#9CA3AF" : "#1A1A1A", textDecoration: done[post.id] ? "line-through" : "none", lineHeight: 1.4 }}>{post.title}</div>
                          </div>
                          <div style={{ fontSize: 11, color: done[post.id] ? "#16A34A" : "#D1D5DB", fontWeight: 700, flexShrink: 0 }}>
                            {done[post.id] ? "✓ Done" : "—"}
                          </div>
                        </div>
                      ))}
                      {mFiltered.length === 0 && (
                        <div style={{ padding: "30px", textAlign: "center", color: "#AAA", fontSize: 13 }}>No posts match your filters</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}