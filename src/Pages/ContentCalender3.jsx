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
  "Collab Post":   "🤝",
};

const days = [
  // ── WEEK 9 · Pan-Africa Expansion ──
  { day: 61, week: 9,  pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "Day 61: We're Just Getting Started",                     message: "Open month 3 with a bold declaration. Show the growth from month 1 to now — followers, users, testimonials. Frame month 3 as the pan-Africa push. Make the audience feel they're part of a movement, not just following a brand.", caption: "\"Day 1 we had a product. Day 61 we have a movement. Here's what's next. 🌍\"" },
  { day: 62, week: 9,  pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "How Retail Works Differently Across Nigeria's 6 Geopolitical Zones", message: "Educational post about regional business nuances — buying behaviour in the North vs. South, market day culture, credit norms. Show Sellytics understands African retail at this depth.", caption: "\"What works in Lagos market won't always work in Kano. Here's what the data shows.\"" },
  { day: 63, week: 9,  pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "The Ghost Stock Problem Nobody Talks About",               message: "Ghost stock = items recorded in your system that don't physically exist. Shows up in transport damage, theft, data entry errors. Sellytics flags discrepancies in real time before they become losses.", caption: "\"Your system says you have 40. You count and find 31. Where did 9 go? This is the ghost stock problem.\"" },
  { day: 64, week: 9,  pillar: "Proof Wall",      format: "Video",         goal: "Trust",   title: "Sellytics in Ghana: First User Story Outside Nigeria",     message: "Feature your first Ghanaian user — or any non-Nigerian African user. This is your pan-Africa signal. Show the app works across borders, currencies, contexts.", caption: "\"She's running her shop in Accra. Same problems. Same fix. 🇬🇭\"" },
  { day: 65, week: 9,  pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "Currency & Localisation: How Sellytics Adapts to Your Market", message: "Show how the app handles different currencies, local price formats, and market-specific settings. Directly addresses the 'is it built for my country?' objection.", caption: "\"Whether you're pricing in Naira, Cedis, or Shillings — Sellytics speaks your language.\"" },
  { day: 66, week: 9,  pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "The 4 KPIs Every African Retailer Should Track Weekly",    message: "Gross margin %, stock turnover rate, average transaction value, shrinkage rate. Explain each in plain language. Show exactly where to find all four in Sellytics.", caption: "\"Stop guessing. These 4 numbers tell you everything about your shop's health.\"" },
  { day: 67, week: 9,  pillar: "African Hustle",  format: "Story / Poll",  goal: "Engage",  title: "Where Are You Watching From? 🌍",                         message: "Map poll or open question: Nigeria / Ghana / Kenya / South Africa / Other. Use results to plan region-specific content and spotlight features. Share the map results publicly.", caption: "\"We know you're watching from everywhere. Tell us where! We're building for ALL of you. 👇\"" },

  // ── WEEK 10 · Deep Education ──
  { day: 68, week: 10, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "The Complete Guide to Stock Turnover Ratio",              message: "What it is, how to calculate it, what a healthy number looks like for different retail categories (FMCG vs. fashion vs. electronics). Most retailers have never heard this metric.", caption: "\"This one ratio tells you if your money is working hard or sitting idle. Most shop owners have never calculated it.\"" },
  { day: 69, week: 10, pillar: "Money Mirror",    format: "Video",         goal: "Reach",   title: "What Happens to Your Business When You Go on Holiday",    message: "The anxiety of leaving your shop to staff. What could go wrong. How Sellytics gives you remote visibility — check your shop from anywhere, see every transaction, get low-stock alerts on your phone.", caption: "\"Can you actually leave your shop for 3 days without your heart racing? Let's fix that.\"" },
  { day: 70, week: 10, pillar: "Proof Wall",      format: "Carousel",      goal: "Convert", title: "90 Days of User Results: The Numbers Don't Lie",          message: "Aggregate real data from your user base: average shrinkage reduction, average time saved per week, average revenue increase post-adoption. If you have it — use it. If not, use individual user quotes with specific numbers.", caption: "\"We pulled the numbers from 90 days of real users. Here's what we found.\"" },
  { day: 71, week: 10, pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "Sellytics on a Budget Phone: Does It Still Work?",        message: "Test the app on a low-spec Android — the kind most market traders actually use. Show speed, responsiveness, offline mode. Destroy the 'I don't have a good phone' objection explicitly.", caption: "\"We tested Sellytics on a ₦35,000 phone. Here's exactly what happened.\"" },
  { day: 72, week: 10, pillar: "Classroom",       format: "Text Post",     goal: "Reach",   title: "The Brutal Truth About Why Most Small Shops Fail in Year 3", message: "Data-backed post: most informal retail failures happen not in year 1 (survival mode) but year 3 (scale without systems). The cure is operational infrastructure. This is Sellytics' entire value proposition.", caption: "\"Year 1 you survive on hustle. Year 3 kills you if you're still running on hustle alone.\"" },
  { day: 73, week: 10, pillar: "African Hustle",  format: "Static Post",   goal: "Reach",   title: "Shop Owner Spotlight #5 — The Fashion Retailer",          message: "Feature a clothing or fashion boutique owner. Expands perceived use case beyond provisions and FMCG. Fashion has high shrinkage from fitting room theft, wrong size returns, staff wear. Sellytics solves all of it.", caption: "\"She stocks 300+ SKUs across 4 sizes. Here's how she keeps track without losing her mind.\"" },
  { day: 74, week: 10, pillar: "Money Mirror",    format: "Story / Poll",  goal: "Engage",  title: "Do You Know Your Top 3 Best-Selling Products Right Now?", message: "Simple yes/no poll. Most won't know without checking manually. Follow up: 'Sellytics tells you this automatically — and which 3 are about to run out.' DM everyone who answered 'No'.", caption: "\"Quick test: without checking, can you name your top 3 sellers this week? 👇\"" },

  // ── WEEK 11 · Influence & Partnership ──
  { day: 75, week: 11, pillar: "Proof Wall",      format: "Collab Post",   goal: "Reach",   title: "We Sat Down With a Top SME Coach — Here's What They Said About Inventory", message: "Collaborate with a respected Nigerian business coach or SME influencer. Interview format or co-created carousel. Their audience = your new followers. Position Sellytics as the tool the experts recommend.", caption: "\"We asked @[SMEcoach] what the #1 operational mistake small businesses make. The answer might surprise you.\"" },
  { day: 76, week: 11, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "How to Negotiate Better Supplier Prices Using Your Own Data", message: "Show how Sellytics purchase history and volume data gives shop owners leverage with suppliers. 'I bought X units last quarter — what's the bulk rate?' Data = power.", caption: "\"Your sales history is a negotiation tool. Most shop owners don't use it. Here's how.\"" },
  { day: 77, week: 11, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "Sellytics x Paystack: How Payments and Inventory Connect",  message: "If integrated — showcase the connection. If not yet — frame as 'coming soon' or walk through the manual workflow. Either way, show that Sellytics fits into the broader fintech ecosystem.", caption: "\"Your payment processor and your inventory tracker should talk to each other. Here's where we are.\"" },
  { day: 78, week: 11, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "Market Day Energy — A Love Letter to African Retail",      message: "Pure culture content. The chaos, the colour, the community of market day. No product. No pitch. Just deep respect for the ecosystem Sellytics was built to serve.", caption: "\"Nobody makes noise like a Nigerian market on a Monday morning. This one's for the traders. 🛒\"" },
  { day: 79, week: 11, pillar: "Money Mirror",    format: "Carousel",      goal: "Convert", title: "The Hidden Costs of Managing 2+ Shops Manually",          message: "Travel time between locations, phone calls to check stock, manager salary for someone who just reports numbers, errors in manual reconciliation. Total the hidden cost. Show the Sellytics alternative.", caption: "\"Running 2 shops without a system doesn't just cost money. It costs you your time, your sleep, and your sanity.\"" },
  { day: 80, week: 11, pillar: "Proof Wall",      format: "Video",         goal: "Convert", title: "The Referral Wall: Why Our Users Keep Sending Us Their Friends", message: "Feature 5–6 users who referred others to Sellytics. Ask them: 'Why did you refer someone?' The answers become your strongest organic testimonials.", caption: "\"We asked users why they keep telling their friends about Sellytics. We didn't expect this many answers.\"" },
  { day: 81, week: 11, pillar: "Demo Room",       format: "Story / Poll",  goal: "Convert", title: "Which Feature Would Make You Switch Today?",              message: "Options: Offline mode / Staff controls / Sales reports / Low-stock alerts. Each option is a feature Sellytics has. This poll identifies the highest-value perceived feature per segment — use to personalise follow-up DMs.", caption: "\"If one feature could change everything for your shop — which one would it be? 👇\"" },

  // ── WEEK 12 · Legacy & Loyalty ──
  { day: 82, week: 12, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "How to Build a Business That Runs Without You",           message: "Systems, documentation, trained staff, and data. The four pillars of a self-running business. Sellytics is one of those systems. Frame as aspirational — the goal every entrepreneur has.", caption: "\"The goal isn't to work harder. It's to build something that works when you don't.\"" },
  { day: 83, week: 12, pillar: "African Hustle",  format: "Video",         goal: "Reach",   title: "Shop Owner Spotlight #6 — The Next Generation Retailer",  message: "Feature a young entrepreneur (20s) who started with Sellytics from day one of their business. The 'digital native retailer' story. Speaks to a new generation and shows the brand has longevity.", caption: "\"She's 24. She opened her shop with Sellytics already installed. This is what the next generation of African retail looks like.\"" },
  { day: 84, week: 12, pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "End of Quarter Check-In: What Your Numbers Should Tell You", message: "Walk through a fictional but realistic Q3 review using Sellytics data: what sold, what died, what margin changed, what to restock for Q4. Make it feel like a free business consulting session.", caption: "\"Quarter's almost done. Here's the exact 5-minute review every shop owner should do right now.\"" },
  { day: 85, week: 12, pillar: "Proof Wall",      format: "Carousel",      goal: "Convert", title: "From 1 User to a Community: 90 Days of Sellytics in Numbers", message: "Your own milestone post — users onboarded, countries reached, transactions tracked, total revenue protected. Make the brand's impact feel massive and real. This is a credibility landmark.", caption: "\"90 days. Here's what this community built together.\"" },
  { day: 86, week: 12, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "The Complete Sellytics Walkthrough — Every Feature, 5 Minutes", message: "The definitive product overview for anyone who's been watching but hasn't signed up. Clean, fast, thorough. Every objection addressed. Every key feature shown. End with free trial CTA.", caption: "\"If you've been watching for weeks and haven't tried it yet — this 5-minute video is for you.\"" },
  { day: 87, week: 12, pillar: "Classroom",       format: "Live",          goal: "Engage",  title: "Live: 90-Day Business Review — Ask Me Anything",          message: "Host a live session reviewing what 90 days of content, community, and users taught you. Open Q&A on retail business, inventory, growth. Make it about them, not you.", caption: "\"90 days in. I'm going live to answer everything — business, inventory, growth, all of it. Come with questions. 🔴\"" },
  { day: 88, week: 12, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "What African Retail Will Look Like in 10 Years",          message: "Thought leadership and vision content. Data-driven, aspirational, specific. Position Sellytics as the infrastructure layer of that future. Make followers feel proud to be part of that story now.", caption: "\"African retail is the biggest untapped market in the world. Here's where it's going — and who's going to lead it.\"" },
  { day: 89, week: 12, pillar: "Money Mirror",    format: "Carousel",      goal: "Convert", title: "90 Days of Excuses vs. 90 Days of Tracking: Final Comparison", message: "The definitive before/after for the 90-day journey. Column A: what untracked shops lost over 90 days. Column B: what Sellytics users gained. Make the math undeniable and the decision obvious.", caption: "\"3 months. Two types of shop owners. The numbers tell the whole story.\"" },
  { day: 90, week: 12, pillar: "Proof Wall",      format: "Video",         goal: "Convert", title: "90 Days. Hundreds of Shops. One Message.",                message: "Your most cinematic piece of content. User montage, real results, real faces, real shops across Africa. No hard sell — just overwhelming proof that this works. End with one quiet CTA: 'Join them. Free for 14 days.'", caption: "\"Day 90. To every shop owner who took the leap — this one's for you. 🙏 And to everyone still watching: it's your turn.\"" },
];

const WEEKS = [
  { num: 9,  theme: "Pan-Africa Expansion",        color: "#0277BD" },
  { num: 10, theme: "Deep Education",              color: "#4527A0" },
  { num: 11, theme: "Influence & Partnership",     color: "#E65100" },
  { num: 12, theme: "Legacy & Loyalty",            color: "#00695C" },
];

const goalExplainer = {
  Reach:   "Designed to travel beyond your current followers. These posts use hooks, humor, or cultural resonance to earn shares and algorithmic boost. No selling — just stopping the scroll.",
  Trust:   "Trust is built slowly and lost instantly. These posts make Sellytics the most credible, knowledgeable voice in African retail — through education, transparency, and genuine value.",
  Convert: "By this point, the audience knows the problem, trusts the brand, and has seen the proof. This post removes the last friction and makes signing up feel like the obvious next step.",
  Engage:  "Engagement posts invite participation. Every comment, poll response, and DM is a data point and a warm lead. The goal is two-way conversation, not broadcast.",
};

export default function ContentCalendar3() {
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
              Days 61–90 Content Calendar
            </h1>
            <div style={{ fontSize: 12, color: "#AAA", marginTop: 4 }}>Weeks 9–12 · Pan-Africa → Deep Education → Influence → Legacy</div>
          </div>

          {/* Phase badge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {[
                { label: "Month 1", days: "1–30",  color: "#E8E5E0", text: "#AAA" },
                { label: "Month 2", days: "31–60", color: "#E8E5E0", text: "#AAA" },
                { label: "Month 3", days: "61–90", color: "#1A1A1A", text: "#FFF" },
              ].map(p => (
                <div key={p.label} style={{ padding: "5px 10px", background: p.color, borderRadius: 6, textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: p.text, letterSpacing: "0.08em" }}>{p.label}</div>
                  <div style={{ fontSize: 9, color: p.text === "#FFF" ? "rgba(255,255,255,0.6)" : "#BBB" }}>Days {p.days}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Reach","Trust","Convert","Engage"].map(g => (
                <div key={g} style={{ textAlign: "center", padding: "6px 10px", background: GOALS[g].bg, borderRadius: 8, minWidth: 50 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: GOALS[g].color, lineHeight: 1 }}>{stats[g]}</div>
                  <div style={{ fontSize: 9, color: GOALS[g].color, fontWeight: 700, marginTop: 2 }}>{GOALS[g].label}</div>
                </div>
              ))}
            </div>
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

          {/* Week theme legend */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 28 }}>
            {WEEKS.map(w => (
              <div key={w.num} style={{ padding: "12px 16px", background: "#FFF", border: `1px solid ${w.color}30`, borderLeft: `4px solid ${w.color}`, borderRadius: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: w.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>Week {w.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>{w.theme}</div>
                <div style={{ fontSize: 11, color: "#AAA", marginTop: 2 }}>Days {49 + (w.num - 9) * 7 + 12}–{55 + (w.num - 9) * 7 + 12}</div>
              </div>
            ))}
          </div>

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
            style={{ width: 360, flexShrink: 0, borderLeft: "1px solid #E8E5E0", background: "#FFF", overflowY: "auto", padding: "26px 22px", display: "flex", flexDirection: "column" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 3 }}>Day {selected.day} · Week {selected.week}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: WEEKS.find(w => w.num === selected.week).color }}>{WEEKS.find(w => w.num === selected.week).theme}</div>
              </div>
              <button onClick={() => setSelectedDay(null)}
                style={{ background: "#F3F2EF", border: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 13, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 700, lineHeight: 1.25, marginBottom: 16 }}>{selected.title}</h2>

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

            {/* 90-day arc position */}
            <div style={{ marginBottom: 24, padding: "12px 16px", background: "#F8F7F4", borderRadius: 10, border: "1px solid #ECEAE5" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>90-Day Arc Position</div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {[...Array(90)].map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < selected.day ? "#1A1A1A" : "#E8E5E0", transition: "background 0.1s" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                <span style={{ fontSize: 10, color: "#AAA" }}>Day 1</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#1A1A1A" }}>Day {selected.day}</span>
                <span style={{ fontSize: 10, color: "#AAA" }}>Day 90</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 8 }}>
              {selected.day > 61 && (
                <button className="nav-prev" onClick={() => setSelectedDay(selected.day - 1)}>← Day {selected.day - 1}</button>
              )}
              {selected.day < 90 && (
                <button className="nav-next" onClick={() => setSelectedDay(selected.day + 1)}>Day {selected.day + 1} →</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}