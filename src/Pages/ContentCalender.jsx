import { useState } from "react";

const PILLARS = {
  "Money Mirror":   { color: "#C0392B", bg: "#FEF2F2", dot: "#E57373" },
  "Proof Wall":     { color: "#1565C0", bg: "#EFF6FF", dot: "#64B5F6" },
  "Classroom":      { color: "#4527A0", bg: "#F3F0FF", dot: "#9575CD" },
  "African Hustle": { color: "#E65100", bg: "#FFF8F0", dot: "#FFB74D" },
  "Demo Room":      { color: "#00695C", bg: "#EDFFF9", dot: "#4DB6AC" },
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
};

const days = [
  { day: 1,  week: 1, pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "The Silent Tax on Every Shop",                    message: "Most shop owners lose 8–15% of revenue to shrinkage they never see. Open with the number. Make them feel the pain before you offer anything.", caption: "\"Do you know how much your shop lost last month — not to bad sales, but to invisible leaks?\"" },
  { day: 2,  week: 1, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "What 'Shrinkage' Actually Means",                  message: "Teach the term. Most retailers have never heard it. Explain the 4 types: theft, admin error, supplier fraud, damage. End with 'which one is hitting your shop?'", caption: "\"If you don't know this word, it's costing you money every single day.\"" },
  { day: 3,  week: 1, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "POV: Opening Your Shop at 6:30am",                 message: "Ambient footage of an early morning shop setup. No pitch. Just vibes + trending audio. Make people feel SEEN.", caption: "\"Nobody talks about the 6am shift. We see you. 🙏\"" },
  { day: 4,  week: 1, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "Watch: Full Shop Setup in 9 Minutes",              message: "Screen-record adding products, setting prices, running a test sale — uncut, real-time. Destroy the 'it looks complicated' objection.", caption: "\"No tutorial. No skip. Just watch how fast this actually is.\"" },
  { day: 5,  week: 1, pillar: "Money Mirror",    format: "Carousel",      goal: "Trust",   title: "High Sales ≠ High Profit",                         message: "Break down the difference between revenue and actual take-home. Show the math. Use a fictional but realistic ₦1.5M/month shop as example.", caption: "\"She thought she was doing well. Then she saw the numbers.\"" },
  { day: 6,  week: 1, pillar: "Proof Wall",      format: "Static Post",   goal: "Trust",   title: "First Customer Quote Drop",                        message: "Single powerful quote from a real user with their photo and shop name. Bold the key result number.", caption: "\"'I found ₦63,000 in unrecorded transactions in my first week.' — Amaka, Lagos Island\"" },
  { day: 7,  week: 1, pillar: "African Hustle",  format: "Story / Poll",  goal: "Engage",  title: "Weekend Poll: How Do You Track Stock?",            message: "Options: Notebook / Excel / Memory / An app. See where your audience is. Use the data to inform next week's content.", caption: "\"Be honest — how are you really tracking your inventory right now?\"" },
  { day: 8,  week: 2, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "5 Numbers Every Shop Owner Should Know by Monday", message: "Opening stock value, units sold, revenue, gross margin, items to reorder. Make each slide a standalone truth. End with 'Sellytics shows you all 5 automatically.'", caption: "\"If you can't answer these before 9am Monday, you're running blind.\"" },
  { day: 9,  week: 2, pillar: "Money Mirror",    format: "Reel / TikTok", goal: "Reach",   title: "3 Ways Staff Steal Without 'Stealing'",            message: "Undercharging friends, giving extra items, voiding sales. Keep tone observational, not accusatory.", caption: "\"It's not always cash from the till. Sometimes it's quieter than that.\"" },
  { day: 10, week: 2, pillar: "Proof Wall",      format: "Video",         goal: "Trust",   title: "Meet Shade: Notebook to 2 Shops on Her Phone",    message: "60-second mini-doc. Show before (notebook chaos) and after (Sellytics dashboard). Let her speak entirely in her own words.", caption: "\"She used to count stock every Sunday for 3 hours. Now it takes 8 minutes.\"" },
  { day: 11, week: 2, pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "NEPA Took the Light. Watch What Happens.",         message: "Film the app working mid-sale as Wi-Fi is switched off. No narration. Let the product speak. Cultural hook + differentiator in one post.", caption: "\"No light. No wifi. Still running. That's offline-first.\"" },
  { day: 12, week: 2, pillar: "Classroom",       format: "Carousel",      goal: "Trust",   title: "How to Calculate Your Real Profit Margin",         message: "Formula: (Revenue − COGS − Operating Costs) ÷ Revenue × 100. Walk through a real example. Make it feel like a free class from a business mentor.", caption: "\"Most people calculate this wrong. Here's the version that actually tells the truth.\"" },
  { day: 13, week: 2, pillar: "African Hustle",  format: "Static Post",   goal: "Reach",   title: "Shop Owner Spotlight #1",                          message: "Feature a real female retailer. Her story, her city, her win this month. Tag her. Her network discovers you.", caption: "\"This week we're celebrating Blessing from Onitsha. 4 years in. Still standing stronger. 🙌\"" },
  { day: 14, week: 2, pillar: "Money Mirror",    format: "Story / Poll",  goal: "Engage",  title: "Have You Ever Done a Full Stock Count?",           message: "Options: Yes monthly / Yes but rarely / Never / I want to but don't know how. DM the 'I want to but don't know how' segment.", caption: "\"Quick question for my fellow shop owners 👇\"" },
  { day: 15, week: 3, pillar: "Proof Wall",      format: "Carousel",      goal: "Trust",   title: "Before & After: Same Shop, Different System",      message: "Split every slide: left = old method (notebook, stress, unknown margins), right = Sellytics (clean data, confidence, control).", caption: "\"Same shop. Same owner. Different system. Different life.\"" },
  { day: 16, week: 3, pillar: "Classroom",       format: "Reel / TikTok", goal: "Reach",   title: "The Reorder Formula You Need",                     message: "Reorder Point = Lead Time Demand + Safety Stock. Explain in 45 seconds with a real product example (e.g., Indomie sachets).", caption: "\"Stop running out of your best sellers. Here's the formula.\"" },
  { day: 17, week: 3, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "End-of-Day Report in 2 Minutes",                   message: "Record running a full daily sales report on Sellytics. Show total revenue, top-selling items, stock alerts. Every second is an objection destroyed.", caption: "\"Your competitors are spending an hour on this. You don't have to.\"" },
  { day: 18, week: 3, pillar: "Money Mirror",    format: "Text Post",     goal: "Reach",   title: "The Maths That Should Scare You",                  message: "If you sell 80 items/day, lose 3% to unrecorded sales, that's ₦876,000/year gone. Show the calculation slowly. Make it personal.", caption: "\"I did the maths so you don't have to ignore it anymore.\"" },
  { day: 19, week: 3, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "Unofficial Rules of a Nigerian Shop",              message: "List format with humour: 'The customer is always right until they want to buy on credit.' Cultural resonance = massive shareability.", caption: "\"Every shop owner in Nigeria will feel this deeply 😂\"" },
  { day: 20, week: 3, pillar: "Proof Wall",      format: "Video",         goal: "Convert", title: "First Week Reactions Compilation",                 message: "Stitch together 8–10 short reactions from users after their first 7 days. Different ages, cities, business types. Volume of proof is the message.", caption: "\"We asked users what changed after week one. We weren't ready for these answers.\"" },
  { day: 21, week: 3, pillar: "Demo Room",       format: "Story / Poll",  goal: "Convert", title: "What's Your Biggest Inventory Problem?",           message: "Options: Can't track staff / Don't know profit / Always run out of stock / Takes too long. DM every respondent with the relevant solution.", caption: "\"Tell us and we'll show you exactly how to fix it 👇\"" },
  { day: 22, week: 4, pillar: "Proof Wall",      format: "Carousel",      goal: "Convert", title: "What ₦5,000/month Gets You",                       message: "Break down every Sellytics feature at the price of a meal. Frame the value: 'You're spending ₦5K to protect ₦500K worth of stock.'", caption: "\"Less than ₦5,000/month. Here's everything that gets you.\"" },
  { day: 23, week: 4, pillar: "Classroom",       format: "Reel / TikTok", goal: "Trust",   title: "Why Global Apps Fail Nigerian Retailers",          message: "Square needs wifi. Shopify is priced in dollars. Zoho wasn't built for market-day volume. Make the comparison factual, not petty. End with 'We were.'", caption: "\"They built for San Francisco. We built for Lagos, Kano, Aba, and Accra.\"" },
  { day: 24, week: 4, pillar: "Money Mirror",    format: "Video",         goal: "Convert", title: "The Real Cost of Running Without a System",        message: "60-second honest monologue. Shrinkage + restock errors + time wasted. Total the annual cost. Then show what Sellytics costs annually. The gap is the pitch.", caption: "\"Running without a system isn't free. Here's what it actually costs you.\"" },
  { day: 25, week: 4, pillar: "African Hustle",  format: "Static Post",   goal: "Trust",   title: "Shop Owner Spotlight #2",                          message: "Second weekly spotlight. Different region, different category — show breadth of who uses Sellytics. Build the community identity.", caption: "\"Meet Emeka from Kano. 3 shops. 11 staff. All tracked from one phone. 💪\"" },
  { day: 26, week: 4, pillar: "Demo Room",       format: "Reel / TikTok", goal: "Convert", title: "The Feature Nobody Talks About",                   message: "Reveal a non-obvious but powerful feature (e.g., low stock alerts, staff access controls, sales history by hour). Curiosity hook forces watch-through.", caption: "\"Most people who use Sellytics don't even know this feature exists.\"" },
  { day: 27, week: 4, pillar: "Proof Wall",      format: "Video",         goal: "Convert", title: "30-Day Results: A Real User's Honest Review",      message: "One user. Unscripted. 90 seconds. What they expected vs what they got. Real dashboard footage. Your highest-converting single piece of content.", caption: "\"I gave her 30 days and asked her to be completely honest. Here's what she said.\"" },
  { day: 28, week: 4, pillar: "Money Mirror",    format: "Carousel",      goal: "Convert", title: "The Last Excuse Buster",                           message: "Address every objection directly: 'Too expensive' / 'Too complicated' / 'My business is too small' / 'I'll start next month.' Each slide = one objection destroyed.", caption: "\"We've heard every excuse. Here's the truth behind each one.\"" },
  { day: 29, week: 4, pillar: "African Hustle",  format: "Reel / TikTok", goal: "Reach",   title: "30 Days of Showing Up — Thank You",               message: "Behind-the-scenes of the brand. Celebrate the community. Show user reposts, comment highlights, DMs that moved you.", caption: "\"30 days. Every single day. This community made it worth it. 🙏\"" },
  { day: 30, week: 4, pillar: "Demo Room",       format: "Video",         goal: "Convert", title: "Your Free Trial Starts Today",                     message: "Direct, warm, confident close. '14 days free, no card needed.' Show the signup flow in 20 seconds. Remove every last friction point.", caption: "\"Day 30. No more excuses. No more bleeding money quietly. Let's go.\"" },
];

const WEEKS = [
  { num: 1, theme: "Foundation & Problem Awareness", color: "#1565C0" },
  { num: 2, theme: "Education & Trust Building",     color: "#4527A0" },
  { num: 3, theme: "Social Proof Surge",             color: "#00695C" },
  { num: 4, theme: "Conversion Push",                color: "#C0392B" },
];

const HEADER_H = 152;

export default function ContentCalendar() {
  const [view, setView]           = useState("calendar");
  const [selectedDay, setSelectedDay] = useState(null);
  const [filterGoal, setFilterGoal]   = useState("All");
  const [filterPillar, setFilterPillar] = useState("All");
  const [filterWeek, setFilterWeek]   = useState("All");

  const filtered = days.filter(d => {
    if (filterGoal   !== "All" && d.goal   !== filterGoal)        return false;
    if (filterPillar !== "All" && d.pillar !== filterPillar)      return false;
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

  const goalExplainer = {
    Reach:   "Designed to travel beyond your current followers. These posts use hooks, humor, or cultural resonance to earn shares and algorithmic boost. No selling — just stopping the scroll.",
    Trust:   "Trust is built slowly and lost instantly. These posts make Sellytics the most credible, knowledgeable voice in African retail — through education, transparency, and genuine value.",
    Convert: "By this point, the audience knows the problem, trusts the brand, and has seen the proof. This post removes the last friction and makes signing up feel like the obvious next step.",
    Engage:  "Engagement posts invite participation. Every comment, poll response, and DM is a data point and a warm lead. The goal is two-way conversation, not broadcast.",
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

      {/* ── HEADER (fixed height) ── */}
      <div style={{ background: "#FFF", borderBottom: "1px solid #E8E5E0", padding: "18px 28px", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 4 }}>Sellytics HQ · Social Strategy</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>30-Day Content Calendar</h1>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {(["Reach","Trust","Convert","Engage"]).map(g => (
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

      {/* ── BODY ROW (fills remaining viewport height) ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Scrollable main area */}
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
                          <div style={{ fontSize: 10, fontWeight: 600, color: PILLARS[d.pillar].color, background: PILLARS[d.pillar].bg, padding: "2px 6px", borderRadius: 4, display: "inline-block" }}>{d.pillar}</div>
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
                    <div style={{ fontSize: 19, fontWeight: 800, color: WEEKS.find(w=>w.num===d.week).color, lineHeight: 1 }}>D{d.day}</div>
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

        {/* ── DETAIL PANEL — independently scrollable ── */}
        {selected && (
          <div className="anim" key={selected.day}
            style={{
              width: 360,
              flexShrink: 0,
              borderLeft: "1px solid #E8E5E0",
              background: "#FFF",
              overflowY: "auto",   // ← this is what enables scrolling
              padding: "26px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}>

            {/* top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#AAA", marginBottom: 3 }}>Day {selected.day} · Week {selected.week}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: WEEKS.find(w=>w.num===selected.week).color }}>{WEEKS.find(w=>w.num===selected.week).theme}</div>
              </div>
              <button onClick={() => setSelectedDay(null)}
                style={{ background: "#F3F2EF", border: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 13, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.25, marginBottom: 16 }}>{selected.title}</h2>

            {/* chips */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              <span className="pill" style={{ background: PILLARS[selected.pillar].bg, color: PILLARS[selected.pillar].color, fontSize: 11 }}>{selected.pillar}</span>
              <span className="pill" style={{ background: "#F3F2EF", color: "#555", fontSize: 11 }}>{FORMATS[selected.format]} {selected.format}</span>
              <span className="pill" style={{ background: GOALS[selected.goal].bg, color: GOALS[selected.goal].color, fontSize: 11 }}>{GOALS[selected.goal].label}</span>
            </div>

            <div style={{ height: 1, background: "#F0EDE8", marginBottom: 20 }} />

            {/* Message angle */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Message Angle</div>
              <div style={{ fontSize: 14, color: "#333", lineHeight: 1.8, background: "#F8F7F4", padding: "14px 16px", borderRadius: 10, borderLeft: `3px solid ${PILLARS[selected.pillar].color}` }}>{selected.message}</div>
            </div>

            {/* Opening caption */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Opening Caption</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontStyle: "italic", color: "#1A1A1A", lineHeight: 1.7, background: PILLARS[selected.pillar].bg, padding: "16px 18px", borderRadius: 10, border: `1px solid ${PILLARS[selected.pillar].color}25` }}>{selected.caption}</div>
            </div>

            {/* Goal explainer */}
            <div style={{ padding: "14px 16px", background: GOALS[selected.goal].bg, borderRadius: 10, border: `1px solid ${GOALS[selected.goal].color}25`, marginBottom: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: GOALS[selected.goal].color, marginBottom: 6 }}>{GOALS[selected.goal].label} — Why This Goal?</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.75 }}>{goalExplainer[selected.goal]}</div>
            </div>

            {/* Prev / Next navigation */}
            <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 8 }}>
              {selected.day > 1 && (
                <button className="nav-prev" onClick={() => setSelectedDay(selected.day - 1)}>← Day {selected.day - 1}</button>
              )}
              {selected.day < 30 && (
                <button className="nav-next" onClick={() => setSelectedDay(selected.day + 1)}>Day {selected.day + 1} →</button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}