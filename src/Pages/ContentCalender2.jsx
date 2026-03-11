import { useState } from "react";

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
  "Reel / TikTok": "🎬",
  "Carousel":      "📑",
  "Static Post":   "🖼️",
  "Story / Poll":  "📊",
  "Video":         "📹",
  "Text Post":     "✍️",
  "Live":          "🔴",
};

const days = [
  // ── WEEK 5 · Community & Credibility ──
  { day: 31, week: 5, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "We're Back — And So Are You",                        message: "Open month 2 with energy. A 'we didn't stop' montage of the last 30 days — user clips, DMs, results. Frame it as proof that real people are using this and winning.", caption: "\"Month 1 was just the warm-up. Here's what's coming next. 🔥\"" },
  { day: 32, week: 5, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "The Inventory Audit Every Shop Needs (Step-by-Step)",  message: "Walk through how to do a proper inventory audit: count physical stock, match to records, find discrepancies. End with: 'Sellytics automates every step of this.'", caption: "\"Most shop owners have never done a real audit. Here's exactly how — and what you'll find.\"" },
  { day: 33, week: 5, pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "The Credit Customer Problem (We Need to Talk)",        message: "Buyers who 'manage' on credit are silently draining cash flow. Show the real maths. No wifi needed to track who owes what — Sellytics handles it offline.", caption: "\"She had ₦200k in sales and ₦140k tied up in credit. This is why cash flow kills shops.\"" },
  { day: 34, week: 5, pillar: "Proof Wall",      format: "Video",         goal: "Trust",   title: "User Story: The Shop That Almost Closed (Didn't)",     message: "Feature a user who was struggling before Sellytics. Let them tell it fully — the fear, the turning point, the recovery. Raw and unscripted.", caption: "\"She was two months from closing. Then something changed.\"" },
  { day: 35, week: 5, pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "How Multi-Staff Access Actually Works",                 message: "Show how different staff members get different access levels — cashier sees sales only, manager sees reports, owner sees everything. Security demo.", caption: "\"Your cashier shouldn't see what your accountant sees. Here's how to set that up in 60 seconds.\"" },
  { day: 36, week: 5, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "Dead Stock: What It Is and How to Stop Creating It",   message: "Teach the concept of dead stock — items that don't move and tie up capital. How to identify it, price it out, and prevent it with data-driven reordering.", caption: "\"The items collecting dust in your shop are costing you money every single day.\"" },
  { day: 37, week: 5, pillar: "African Hustle",  format: "Story / Poll",  goal: "Engage",  title: "Poll: What's Your Biggest Business Win This Month?",   message: "Options: New customers / Increased profit / Caught a loss / Expanded stock range. Celebrate wins publicly in Stories. DM everyone who responds.", caption: "\"Tell us your win — no matter how small. We're celebrating ALL of them. 🙌\"" },

  // ── WEEK 6 · Authority & Depth ──
  { day: 38, week: 6, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "The Difference Between Markup and Margin (Most Get It Wrong)", message: "Markup is on cost. Margin is on price. Show a product example where wrong thinking makes a shop owner think they're making 50% when they're actually making 33%.", caption: "\"If you price using markup and think in margin, you've been lying to yourself. Here's the fix.\"" },
  { day: 39, week: 6, pillar: "Money Mirror",    format: "Video",         goal: "Reach",   title: "A Day in the Life: Running a Shop Without Tracking",   message: "Comedic but painfully accurate. Mental arithmetic, forgotten items, 'I think I have that in the back', arguing about price. Then contrast: with Sellytics.", caption: "\"This used to be every shop owner's Tuesday. Some of you are still living it.\"" },
  { day: 40, week: 6, pillar: "Proof Wall",      format: "Carousel",      goal: "Convert", title: "6 Real Results From Real Sellytics Users",             message: "One result per slide. Different industries, different cities, different numbers. Volume and variety of proof — the carousel format forces multiple exposures.", caption: "\"We asked 6 users for one honest number. Here's what they shared.\"" },
  { day: 41, week: 6, pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "Can Sellytics Handle 200 Products? Let's Find Out.",    message: "Live speed-test: bulk product upload, search speed, report generation on a large catalogue. Destroy the 'only works for small shops' objection.", caption: "\"Someone asked if Sellytics slows down with a big catalogue. We tested it live.\"" },
  { day: 42, week: 6, pillar: "African Hustle",  format: "Static Post",   goal: "Reach",   title: "Shop Owner Spotlight #3 — The Wholesaler",             message: "Feature a wholesale distributor using Sellytics. Expands perceived use case beyond retail kiosks. Show the brand works at volume.", caption: "\"Meet Chidi. He moves 400+ SKUs weekly across 3 LGAs. Here's his setup. 💼\"" },
  { day: 43, week: 6, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "How to Read Your Sales Data (A Beginner's Guide)",     message: "Teach users to interpret the reports Sellytics generates: what 'average transaction value' means, how to spot a slow day pattern, when to restock proactively.", caption: "\"The data is only useful if you know what you're looking at. Here's your decoder.\"" },
  { day: 44, week: 6, pillar: "Money Mirror",    format: "Story / Poll",  goal: "Engage",  title: "How Often Do You Restock Based on Gut Feel?",          message: "Options: Always / Sometimes / Rarely / Never — I use data. Most will say 'always' or 'sometimes'. Use this to open DM conversations about data-driven restocking.", caption: "\"Be honest — is your restock decision based on data or vibes? 👇\"" },

  // ── WEEK 7 · Conversion Intensification ──
  { day: 45, week: 7, pillar: "Proof Wall",      format: "Video",         goal: "Convert", title: "60-Day User Review: Still Using It? Still Worth It?",  message: "Bring back a Week 1 user for a 60-day honest check-in. Did results hold? What surprised them? The long-term follow-up is the most credible proof format possible.", caption: "\"We checked in on Amaka 60 days later. Here's her honest verdict.\"" },
  { day: 46, week: 7, pillar: "Classroom",       format: "Reel / TikTok", goal: "Reach",   title: "3 Pricing Mistakes That Are Silently Killing Your Margin", message: "Pricing below cost to compete, ignoring overhead in price, not adjusting for inflation. Each mistake = one slide or cut. End with the correct approach.", caption: "\"Fix just one of these and your margin changes immediately.\"" },
  { day: 47, week: 7, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "New Feature Spotlight: [Your Latest Update]",          message: "Film a focused walkthrough of a new or underused feature. Frame it as exclusive insider knowledge. Create FOMO for non-users.", caption: "\"If you're not using this feature, you're leaving money on the table.\"" },
  { day: 48, week: 7, pillar: "Money Mirror",    format: "Carousel",      goal: "Reach",   title: "The True Cost of 'I'll Start Tracking Next Month'",    message: "Month-by-month compounding loss calculator. If you lose ₦30K/month to untracked stock, that's ₦360K/year — enough to open another shop. Visualise the delay cost.", caption: "\"Every month you wait is a month you pay. Here's the invoice.\"" },
  { day: 49, week: 7, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "Things That Hit Different When Your Business is Growing", message: "Light, celebratory reel. Checking a clean report. Getting a low-stock alert before a customer asks. Knowing your margin without calculating. Make success feel aspirational.", caption: "\"When you finally have your business organised… this hits different. ✨\"" },
  { day: 50, week: 7, pillar: "Proof Wall",      format: "Static Post",   goal: "Convert", title: "Milestone: X Users Can't Be Wrong",                    message: "Announce a user milestone (500, 1000, etc.) with one powerful aggregate stat — total transactions tracked, total revenue protected, etc.", caption: "\"[X] businesses now trust Sellytics with their numbers. Join them.\"" },
  { day: 51, week: 7, pillar: "Demo Room",       format: "Story / Poll",  goal: "Convert", title: "What's Stopping You From Starting?",                  message: "Options: Price / Not sure it fits my shop / Don't have time to set up / Already use something else. Each answer is an objection — address all four in follow-up content.", caption: "\"Honestly — what's the one thing holding you back? Tell us and we'll fix it. 👇\"" },

  // ── WEEK 8 · Scale & Expand ──
  { day: 52, week: 8, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "When to Know You're Ready to Open a Second Shop",      message: "Teach the signals: consistent positive margin for 6+ months, stock turns above X, clear best-seller data, staff reliability. Sellytics gives you all these signals.", caption: "\"Expanding too early kills businesses. Here's how to know when the time is actually right.\"" },
  { day: 53, week: 8, pillar: "African Hustle",  format: "Video",         goal: "Reach",   title: "Shop Owner Spotlight #4 — From Market Table to 3 Shops", message: "Feature the most ambitious transformation story you can find. Market table start, now multi-location. Sellytics was part of the infrastructure that made scaling possible.", caption: "\"She started on a table in Alaba. She now runs 3 shops. Here's the full story.\"" },
  { day: 54, week: 8, pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "What ₦1M/Month Looks Like With and Without Tracking",  message: "Same revenue, two very different realities. With tracking: clear margins, controlled costs, calm owner. Without: guesswork, invisible loss, stressed owner. Visual contrast.", caption: "\"₦1M in sales means nothing if you don't know what's left after.\"" },
  { day: 55, week: 8, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "Multi-Location Dashboard Walkthrough",                 message: "For users with or eyeing multiple shops — show the unified dashboard, stock transfers between locations, per-branch reporting. This is the aspirational demo.", caption: "\"One phone. Three shops. Every number. This is what running a retail business looks like in 2025.\"" },
  { day: 56, week: 8, pillar: "Proof Wall",      format: "Carousel",      goal: "Convert", title: "From Sceptic to Advocate: 3 User U-Turns",             message: "Feature three users who were doubtful before trying Sellytics. Show their before mindset, the moment it clicked, and what they'd tell their past selves.", caption: "\"'I thought it was just another app.' These three said it best.\"" },
  { day: 57, week: 8, pillar: "Classroom",       format: "Live",          goal: "Engage",  title: "Live Q&A: Ask Me Anything About Retail Business",      message: "Host a 30-minute live session answering retail business questions — not a product demo, a genuine value session. Mention Sellytics only when directly relevant.", caption: "\"No pitch. No agenda. Just 30 minutes answering your business questions live. Drop yours below. 👇\"" },
  { day: 58, week: 8, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "60 Days. This Community. Here's What We Built.",       message: "End-of-phase celebration reel. Montage of user clips, follower messages, spotlights featured. Make the audience feel they're part of something meaningful.", caption: "\"60 days ago we started something. Look at what it's become. 🙏\"" },
  { day: 59, week: 8, pillar: "Money Mirror",    format: "Carousel",      goal: "Convert", title: "The Complete Case for Switching — No Fluff",           message: "A no-nonsense, evidence-only argument: cost of staying manual, cost of Sellytics, net annual saving, time saved, risk removed. Let the numbers close.", caption: "\"Here's every reason, backed by numbers, to make the switch today.\"" },
  { day: 60, week: 8, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "Your Next 30 Days Start Now — Free Trial, No Card",    message: "Warm, direct close for the full 60-day arc. Recap the journey, show the product one final time, make the CTA irresistible: free trial, no friction, start today.", caption: "\"60 days of content. One ask: give us 14 days. No card. No commitment. Just results.\"" },
];

const WEEKS = [
  { num: 5, theme: "Community & Credibility",      color: "#1565C0" },
  { num: 6, theme: "Authority & Depth",             color: "#4527A0" },
  { num: 7, theme: "Conversion Intensification",    color: "#C0392B" },
  { num: 8, theme: "Scale & Expand",                color: "#00695C" },
];

const goalExplainer = {
  Reach:   "Designed to travel beyond your current followers. These posts use hooks, humor, or cultural resonance to earn shares and algorithmic boost. No selling — just stopping the scroll.",
  Trust:   "Trust is built slowly and lost instantly. These posts make Sellytics the most credible, knowledgeable voice in African retail — through education, transparency, and genuine value.",
  Convert: "By this point, the audience knows the problem, trusts the brand, and has seen the proof. This post removes the last friction and makes signing up feel like the obvious next step.",
  Engage:  "Engagement posts invite participation. Every comment, poll response, and DM is a data point and a warm lead. The goal is two-way conversation, not broadcast.",
};

export default function ContentCalendar2() {
  const [view, setView]               = useState("calendar");
  const [selectedDay, setSelectedDay] = useState(null);
  const [filterGoal, setFilterGoal]   = useState("All");
  const [filterPillar, setFilterPillar] = useState("All");
  const [filterWeek, setFilterWeek]   = useState("All");

  const filtered = days.filter(d => {
    if (filterGoal   !== "All" && d.goal   !== filterGoal)         return false;
    if (filterPillar !== "All" && d.pillar !== filterPillar)       return false;
    if (filterWeek   !== "All" && d.week   !== Number(filterWeek)) return false;
    return true;
  });

  const selected = days.find(d => d.day === selectedDay);

  const stats = {
    Reach:   days.filter(d => d.goal === "Reach").length,
    Trust:   days.filter(d => d.goal === "Trust").length,
    Convert: days.filter(d => d.goal === "Convert").length,
    Engage:  days.filter(d => d.goal === "Engage").length,
  };

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #CCC; border-radius: 4px; }
        .day-cell { border: 1px solid #E8E5E0; border-radius: 10px; padding: 12px; cursor: pointer; transition: all 0.15s; background: #FFF; min-height: 110px; display: flex; flex-direction: column; gap: 6px; }
        .day-cell:hover { border-color: #BBBBB5; box-shadow: 0 3px 14px rgba(0,0,0,0.08); transform: translateY(-1px); }
        .day-cell.sel { box-shadow: 0 0 0 2px #1A1A1A; border-color: #1A1A1A; }
        .pill { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 20px; font-size: 10px; font-weight: 600; letter-spacing: 0.04em; }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; padding: 8px 18px; border-radius: 6px; transition: all 0.15s; }
        .sel-el { border: 1px solid #DDD; border-radius: 8px; padding: 7px 12px; font-family: 'DM Sans', sans-serif; font-size: 12px; background: #FFF; color: #444; cursor: pointer; outline: none; }
        .list-row { background: #FFF; border: 1px solid #ECEAE5; border-radius: 10px; padding: 16px 20px; cursor: pointer; transition: all 0.15s; display: grid; grid-template-columns: 44px 1fr auto; gap: 16px; align-items: start; }
        .list-row:hover { border-color: #BBBBB5; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
        .list-row.sel { border-color: #1A1A1A; box-shadow: 0 0 0 1.5px #1A1A1A; }
        @keyframes fadeSlide { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        .anim { animation: fadeSlide 0.2s ease-out; }
        .nav-prev { flex: 1; padding: 10px; background: #F8F7F4; border: 1px solid #E8E5E0; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; color: #555; font-family: 'DM Sans', sans-serif; }
        .nav-next { flex: 1; padding: 10px; background: #1A1A1A; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; color: #FFF; font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: "#FFF", borderBottom: "1px solid #E8E5E0", padding: "18px 28px", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 4 }}>Sellytics HQ · Social Strategy</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
              Days 31–60 Content Calendar
            </h1>
            <div style={{ fontSize: 12, color: "#AAA", marginTop: 4 }}>Weeks 5–8 · Community → Authority → Conversion → Scale</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Reach","Trust","Convert","Engage"].map(g => (
              <div key={g} style={{ textAlign: "center", padding: "7px 12px", background: GOALS[g].bg, borderRadius: 8, minWidth: 54 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: GOALS[g].color, lineHeight: 1 }}>{stats[g]}</div>
                <div style={{ fontSize: 9, color: GOALS[g].color, fontWeight: 700, marginTop: 2 }}>{GOALS[g].label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ background: "#F3F2EF", borderRadius: 8, padding: 3, display: "flex", gap: 2 }}>
            {["calendar","list"].map(v => (
              <button key={v} className="tab-btn" onClick={() => setView(v)}
                style={{ background: view === v ? "#FFF" : "transparent", color: view === v ? "#1A1A1A" : "#999", boxShadow: view === v ? "0 1px 4px rgba(0,0,0,0.1)" : "none", textTransform: "capitalize" }}>
                {v === "calendar" ? "📅 Calendar" : "📋 List"}
              </button>
            ))}
          </div>
          <div style={{ width: 1, height: 26, background: "#E8E5E0" }} />
          <select className="sel-el" value={filterWeek}   onChange={e => setFilterWeek(e.target.value)}>
            <option value="All">All Weeks</option>
            {WEEKS.map(w => <option key={w.num} value={w.num}>Week {w.num}: {w.theme}</option>)}
          </select>
          <select className="sel-el" value={filterGoal}   onChange={e => setFilterGoal(e.target.value)}>
            <option value="All">All Goals</option>
            {Object.keys(GOALS).map(g => <option key={g}>{g}</option>)}
          </select>
          <select className="sel-el" value={filterPillar} onChange={e => setFilterPillar(e.target.value)}>
            <option value="All">All Pillars</option>
            {Object.keys(PILLARS).map(p => <option key={p}>{p}</option>)}
          </select>
          {(filterGoal !== "All" || filterPillar !== "All" || filterWeek !== "All") && (
            <button onClick={() => { setFilterGoal("All"); setFilterPillar("All"); setFilterWeek("All"); }}
              style={{ fontSize: 12, color: "#C0392B", background: "#FEF2F2", border: "1px solid #FFCDD0", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontWeight: 600 }}>
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Scrollable main */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {view === "calendar" ? (
            WEEKS
              .filter(w => filterWeek === "All" || w.num === Number(filterWeek))
              .map(week => {
                const wDays = filtered.filter(d => d.week === week.num);
                if (!wDays.length) return null;
                return (
                  <div key={week.num} style={{ marginBottom: 32 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: week.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#FFF" }}>{week.num}</div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#AAA" }}>Week {week.num}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: week.color }}>{week.theme}</div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
                      {wDays.map(d => (
                        <div key={d.day}
                          className={`day-cell${selectedDay === d.day ? " sel" : ""}`}
                          onClick={() => setSelectedDay(selectedDay === d.day ? null : d.day)}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ fontSize: 17, fontWeight: 800, lineHeight: 1 }}>D{d.day}</div>
                            <div style={{ fontSize: 13 }}>{FORMATS[d.format]}</div>
                          </div>
                          <div style={{ fontSize: 10, fontWeight: 600, color: PILLARS[d.pillar].color, background: PILLARS[d.pillar].bg, padding: "2px 6px", borderRadius: 4, display: "inline-block", lineHeight: 1.5 }}>{d.pillar}</div>
                          <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.4, color: "#333", flexGrow: 1 }}>{d.title}</div>
                          <div className="pill" style={{ background: GOALS[d.goal].bg, color: GOALS[d.goal].color, alignSelf: "flex-start" }}>{GOALS[d.goal].label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {filtered.map(d => (
                <div key={d.day}
                  className={`list-row${selectedDay === d.day ? " sel" : ""}`}
                  onClick={() => setSelectedDay(selectedDay === d.day ? null : d.day)}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 19, fontWeight: 800, color: WEEKS.find(w => w.num === d.week).color, lineHeight: 1 }}>D{d.day}</div>
                    <div style={{ fontSize: 9, color: "#BBB", fontWeight: 600, marginTop: 2 }}>WK{d.week}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, lineHeight: 1.35 }}>{d.title}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: PILLARS[d.pillar].color, background: PILLARS[d.pillar].bg, padding: "2px 8px", borderRadius: 4 }}>{d.pillar}</span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: "#666", background: "#F3F2EF", padding: "2px 8px", borderRadius: 4 }}>{FORMATS[d.format]} {d.format}</span>
                    </div>
                  </div>
                  <div className="pill" style={{ background: GOALS[d.goal].bg, color: GOALS[d.goal].color, whiteSpace: "nowrap" }}>{GOALS[d.goal].label}</div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#AAA" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>No posts match your filters</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>Try clearing the filters above</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── DETAIL PANEL ── */}
        {selected && (
          <div className="anim" key={selected.day}
            style={{ width: 360, flexShrink: 0, borderLeft: "1px solid #E8E5E0", background: "#FFF", overflowY: "auto", padding: "26px 22px", display: "flex", flexDirection: "column", gap: 0 }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 3 }}>Day {selected.day} · Week {selected.week}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: WEEKS.find(w => w.num === selected.week).color }}>{WEEKS.find(w => w.num === selected.week).theme}</div>
              </div>
              <button onClick={() => setSelectedDay(null)}
                style={{ background: "#F3F2EF", border: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 13, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.25, marginBottom: 16 }}>{selected.title}</h2>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              <span className="pill" style={{ background: PILLARS[selected.pillar].bg, color: PILLARS[selected.pillar].color, fontSize: 11 }}>{selected.pillar}</span>
              <span className="pill" style={{ background: "#F3F2EF", color: "#555", fontSize: 11 }}>{FORMATS[selected.format]} {selected.format}</span>
              <span className="pill" style={{ background: GOALS[selected.goal].bg, color: GOALS[selected.goal].color, fontSize: 11 }}>{GOALS[selected.goal].label}</span>
            </div>

            <div style={{ height: 1, background: "#F0EDE8", marginBottom: 20 }} />

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Message Angle</div>
              <div style={{ fontSize: 14, color: "#333", lineHeight: 1.8, background: "#F8F7F4", padding: "14px 16px", borderRadius: 10, borderLeft: `3px solid ${PILLARS[selected.pillar].color}` }}>{selected.message}</div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Opening Caption</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontStyle: "italic", color: "#1A1A1A", lineHeight: 1.7, background: PILLARS[selected.pillar].bg, padding: "16px 18px", borderRadius: 10, border: `1px solid ${PILLARS[selected.pillar].color}25` }}>{selected.caption}</div>
            </div>

            <div style={{ padding: "14px 16px", background: GOALS[selected.goal].bg, borderRadius: 10, border: `1px solid ${GOALS[selected.goal].color}25`, marginBottom: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: GOALS[selected.goal].color, marginBottom: 6 }}>{GOALS[selected.goal].label} — Why This Goal?</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.75 }}>{goalExplainer[selected.goal]}</div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 8 }}>
              {selected.day > 31 && (
                <button className="nav-prev" onClick={() => setSelectedDay(selected.day - 1)}>← Day {selected.day - 1}</button>
              )}
              {selected.day < 60 && (
                <button className="nav-next" onClick={() => setSelectedDay(selected.day + 1)}>Day {selected.day + 1} →</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}