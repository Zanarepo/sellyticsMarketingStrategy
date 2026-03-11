import { useState } from "react";

const personas = [
  {
    id: "chisom",
    name: "Chisom",
    title: "The Solo Retailer",
    age: "32",
    location: "Lagos Island / Onitsha / Aba",
    business: "Runs a provisions/cosmetics/clothing shop. 1–3 staff. 5–8 years in business.",
    emoji: "👩🏾‍💼",
    color: "#FF6B6B",
    accent: "#FF9999",
    frustrations: [
      "Discovers stolen or lost stock only when it's too late — usually during manual counting",
      "Can't remember which supplier has the best price for a restock",
      "Staff gives away goods on credit and 'forgets' to record it",
      "Closes the month not knowing if she made profit or just moved money around",
      "Has tried Excel but finds it frustrating to maintain consistently",
    ],
    desires: [
      "Know exactly what she has in stock without physically counting",
      "Understand her profit margins without needing an accountant",
      "Catch staff stealing before it becomes a big loss",
      "Run her business from her phone, anywhere",
      "Feel like a 'real' business owner, not just a trader",
    ],
    fears: [
      "Going out of business because she can't control costs",
      "Borrowing to restock and still running out of popular items",
      "Her staff knowing more about her business than she does",
      "Being embarrassed in front of customers when items are out of stock",
      "Working this hard and having nothing to show for it financially",
    ],
    habits: [
      "Scrolls TikTok and IG Reels between 9–11pm after closing up shop",
      "Active in at least 3–5 WhatsApp groups for traders/businesswomen",
      "Watches videos with captions on (no sound while kids sleep)",
      "Shares content that makes her feel smart or validated",
      "Saves tutorials she plans to 'watch later' (rarely does)",
    ],
    messagingAngles: [
      { hook: "The Loss Reveal", copy: '"Do you know how much you lost to theft last month? Most shop owners don\'t — and that\'s exactly the problem."', why: "Activates fear + urgency. She suspects loss but has never quantified it." },
      { hook: "The Identity Upgrade", copy: '"You didn\'t start your shop to play guessing games. You started it to build something. Let\'s run it like a real business."', why: "Speaks to her desire to be seen as a serious entrepreneur, not just a trader." },
      { hook: "The Staff Mirror", copy: '"The moment you can see every transaction your staff made today — without asking them — everything changes."', why: "Hits her #1 fear: staff dishonesty. This stops the scroll every time." },
    ],
    contentTopics: [
      "\"Signs your staff is stealing from your shop\" (education → Sellytics as solution)",
      "\"How to know if your shop is profitable without an accountant\"",
      "\"The mistake I made restocking last month (and how to avoid it)\"",
      "Before/after: paper notebook vs. Sellytics dashboard for the same shop",
      "\"What 3 Lagos shop owners discovered after their first week on Sellytics\"",
    ],
  },
  {
    id: "emeka",
    name: "Emeka",
    title: "The Multi-Location Grinder",
    age: "35",
    location: "Abuja / Port Harcourt / Kano",
    business: "Runs 2–4 shops (electronics, phones, FMCG distribution). 5–15 staff total.",
    emoji: "👨🏾‍💻",
    color: "#4CC9F0",
    accent: "#74D7F5",
    frustrations: [
      "Has to physically visit each shop to know what's happening — losing hours every week",
      "Managers give inconsistent reports; he never knows who to trust",
      "Items move between shops without proper records, creating phantom stock",
      "Tried 3 different apps — all too complicated or not suited for Nigeria",
      "Can't tell which shop is performing and which is draining cash",
    ],
    desires: [
      "A single dashboard that shows all locations in real time",
      "Be able to run his business from anywhere — including from home",
      "Catch discrepancies before they become losses",
      "Grow to 10 shops without hiring more managers",
      "Have data to make smarter buying decisions",
    ],
    fears: [
      "One bad manager wiping out the profit of two good shops",
      "Scaling fast and losing control of inventory",
      "A competitor with better systems beating him on speed and margins",
      "Locking himself into another software that doesn't work offline",
      "Having no idea what's really happening in his business",
    ],
    habits: [
      "Checks his phone first thing in the morning for business updates",
      "Active on LinkedIn and sometimes Twitter/X for entrepreneur content",
      "Watches YouTube on weekends — business, tech, and hustle content",
      "Joins Telegram groups for SME owners and distributors",
      "Saves tools and resources he wants to test — and actually does test them",
    ],
    messagingAngles: [
      { hook: "The Control Paradox", copy: '"You have 3 shops. But how much of what\'s actually happening in them do you really see? Ownership without visibility is just expensive stress."', why: "Names the exact tension he lives with daily. Immediately relatable." },
      { hook: "The Scale Enabler", copy: '"Every system you put in place today is a shop you can open tomorrow — without being there."', why: "Speaks to his growth ambition. Sellytics = infrastructure for scale." },
      { hook: "The Data Advantage", copy: '"Your competition is restocking based on gut feel. You can now restock based on data. That\'s an unfair advantage."', why: "Appeals to his competitive nature and desire to be the smartest operator in his sector." },
    ],
    contentTopics: [
      "\"How to manage 3 shops without losing your mind (or your margins)\"",
      "\"What multi-location inventory tracking actually looks like on Sellytics\" (screen recording)",
      "\"The moment I stopped visiting my shops every day and started actually running a business\"",
      "Data post: How much time the average multi-location owner wastes on manual reconciliation",
      "\"Stock transfer done wrong: how phantom inventory kills multi-branch businesses\"",
    ],
  },
  {
    id: "adeola",
    name: "Adeola",
    title: "The Scaling Enterprise Owner",
    age: "44",
    location: "Lagos, Abuja, or major commercial city",
    business: "Wholesale/retail chain or franchise. 15–60 staff. High-volume operations.",
    emoji: "🏬",
    color: "#06D6A0",
    accent: "#3DEBA6",
    frustrations: [
      "Hemorrhaging stock through theft, breakage, and unrecorded transactions",
      "Monthly reports from managers don't match actual inventory on ground",
      "Onboarding new staff on existing systems takes too long",
      "Has no real-time view of stock levels across all locations",
      "Pays high prices for enterprise software that wasn't designed for Africa",
    ],
    desires: [
      "A system that works reliably even when power or internet is down",
      "Clear financial reporting she can use to make buying decisions",
      "A tool her entire staff can learn in one day",
      "Reduce shrinkage by at least 20–30% within the first quarter",
      "Scale from 5 to 20 locations without proportionally scaling headcount",
    ],
    fears: [
      "Losing competitive edge to leaner, more efficient competitors",
      "A financial audit exposing invisible losses she didn't know existed",
      "Being too dependent on one key manager who knows the system",
      "Choosing the wrong software and migrating 2 years later",
      "Staff resistance to a new system derailing operations",
    ],
    habits: [
      "Reads business news (Nairametrics, BusinessDay, TechCabal) in the morning",
      "Active on LinkedIn and in business associations (MAN, LCCI, etc.)",
      "Makes software decisions based on referrals from trusted peers",
      "Attends business forums, expos, and SME events",
      "Reviews financial summaries weekly with her accountant",
    ],
    messagingAngles: [
      { hook: "The Leakage Audit", copy: '"Before you scale, find the leaks. Most retail chains lose 8–15% of revenue annually to inventory shrinkage — most of it invisible."', why: "Enterprise owners respond to data and loss quantification. This triggers immediate action." },
      { hook: "The Africa-Fit Argument", copy: '"Built for Nigerian infrastructure. Offline-first, mobile-first, and priced for African margins — not Silicon Valley assumptions."', why: "She\'s been burned by expensive tools that don\'t fit her reality. This is a direct hit." },
      { hook: "The CEO Clarity Frame", copy: '"What if every morning at 8am, you knew exactly what every location sold, what\'s running low, and what needs attention — before you even leave home?"', why: "Paints a vivid picture of control and clarity that she desperately wants." },
    ],
    contentTopics: [
      "\"How retail chains lose millions to shrinkage — and how to stop it\" (data-driven post)",
      "\"Why global inventory software fails African businesses\" (thought leadership)",
      "Case study: how a Lagos retail chain reduced stock loss by X% in 90 days",
      "\"What good inventory data should tell you every Monday morning\"",
      "LinkedIn post: The ROI of inventory software for a 10-location retail operation",
    ],
  },
];

const universalThemes = [
  {
    theme: "Loss Aversion",
    desc: "All three personas are losing money they can't see. Lead with revealing the invisible loss — then show the fix.",
    icon: "🩸",
    formats: ["Scroll-stopping stat posts", "\"You're losing X per month\" hooks", "Before/after financial reveals"],
  },
  {
    theme: "Identity & Pride",
    desc: "Every user wants to feel like a serious, legitimate business owner — not just a 'trader.' Position Sellytics as the tool that makes that transformation.",
    icon: "👑",
    formats: ["Aspirational transformation stories", "\"Run it like a real business\" messaging", "Community of successful retailers"],
  },
  {
    theme: "Offline Resilience",
    desc: "The fear of unreliable internet crippling their business is shared by all. The offline-first feature is deeply emotional, not just technical.",
    icon: "⚡",
    formats: ["\"What happens when NEPA takes the light\" content", "Demo videos showing offline mode in action", "Contrast with competitors that fail without wifi"],
  },
  {
    theme: "Staff & Trust",
    desc: "Fear of dishonest staff is universal and deeply emotional. Content that speaks to this without being accusatory will consistently stop the scroll.",
    icon: "👁️",
    formats: ["\"See every transaction your staff makes\" demos", "\"Signs your business has a trust problem\" educational posts", "Accountability without confrontation messaging"],
  },
];

export default function UserResearch() {
  const [activePersona, setActivePersona] = useState("chisom");
  const [activeTab, setActiveTab] = useState("frustrations");

  const persona = personas.find(p => p.id === activePersona);
  const tabs = ["frustrations", "desires", "fears", "habits", "messagingAngles", "contentTopics"];
  const tabLabels = { frustrations: "Frustrations", desires: "Desires", fears: "Fears", habits: "Daily Habits", messagingAngles: "Messaging Angles", contentTopics: "Content Topics" };

  return (
    <div style={{
      background: "#F7F4EF",
      minHeight: "100vh",
      fontFamily: "'Playfair Display', serif",
      color: "#1A1208",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IBM+Plex+Mono:wght@400;500;600&family=Karla:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 3px; height: 3px; } ::-webkit-scrollbar-thumb { background: #C8B99A; }
        body { background: #F7F4EF; }
        .persona-btn { background: none; border: 2px solid transparent; cursor: pointer; font-family: 'Karla', sans-serif; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 0; transition: all 0.2s; letter-spacing: 0.04em; text-transform: uppercase; }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500; padding: 8px 14px; border-radius: 4px; transition: all 0.15s; letter-spacing: 0.06em; text-transform: uppercase; color: #888; }
        .tab-btn.active { background: #1A1208; color: #F7F4EF; }
        .tab-btn:hover:not(.active) { color: #1A1208; background: rgba(0,0,0,0.06); }
        .item-row { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid rgba(0,0,0,0.07); }
        .item-row:last-child { border-bottom: none; }
        .dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }
        .msg-card { padding: 20px; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; margin-bottom: 14px; background: white; }
        .topic-tag { display: inline-block; background: rgba(0,0,0,0.06); border-radius: 4px; padding: 8px 14px; margin: 5px; font-family: 'Karla', sans-serif; font-size: 13px; color: #444; font-weight: 500; }
        .universal-card { background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; padding: 24px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .fade { animation: fadeIn 0.25s ease-out; }
      `}</style>

      {/* Top strip */}
      <div style={{ background: "#1A1208", color: "#C8B99A", padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>Sellytics HQ · Audience Intelligence Report</span>
        <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, color: "#666" }}>3 Personas · 6 Dimensions · Scroll-Stopping Angles</span>
      </div>

      {/* Hero */}
      <div style={{ padding: "60px 40px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", background: "linear-gradient(180deg, #F7F4EF 0%, #EEE8DF 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Deep User Research</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontStyle: "italic" }}>
            Know Your User<br />
            <span style={{ color: "#C8B99A", fontStyle: "normal" }}>Down to Their 3am Anxiety.</span>
          </h1>
          <p style={{ fontFamily: "'Karla'", fontSize: 16, color: "#666", lineHeight: 1.7, maxWidth: 620 }}>
            Every scroll-stopping piece of content starts here — with a painfully accurate understanding of who you're talking to, what keeps them up at night, and what makes them instantly trust a brand.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px 60px" }}>

        {/* Persona selector */}
        <div style={{ display: "flex", gap: 0, marginTop: 40, marginBottom: 36, borderBottom: "2px solid #1A1208" }}>
          {personas.map(p => (
            <button
              key={p.id}
              className="persona-btn"
              onClick={() => { setActivePersona(p.id); setActiveTab("frustrations"); }}
              style={{
                color: activePersona === p.id ? "#F7F4EF" : "#888",
                background: activePersona === p.id ? "#1A1208" : "transparent",
                borderColor: "transparent",
              }}
            >
              {p.emoji} {p.name}
            </button>
          ))}
        </div>

        {/* Persona header */}
        <div className="fade" key={activePersona} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, marginBottom: 32, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: persona.color, marginBottom: 10 }}>Persona 0{personas.findIndex(p=>p.id===activePersona)+1}</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 6 }}>{persona.name} <span style={{ fontWeight: 400, fontStyle: "italic", color: "#888" }}>— {persona.title}</span></h2>
            <div style={{ display: "flex", gap: 20, marginTop: 14 }}>
              {[
                { label: "Age", value: persona.age },
                { label: "Location", value: persona.location },
              ].map((f, i) => (
                <div key={i} style={{ fontFamily: "'Karla'", fontSize: 13 }}>
                  <span style={{ color: "#888", marginRight: 6, textTransform: "uppercase", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>{f.label}</span>
                  <span style={{ fontWeight: 600 }}>{f.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, fontFamily: "'Karla'", fontSize: 14, color: "#555", lineHeight: 1.6, maxWidth: 540 }}>{persona.business}</div>
          </div>
          <div style={{ fontSize: 80, lineHeight: 1 }}>{persona.emoji}</div>
        </div>

        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 28, padding: "6px", background: "rgba(0,0,0,0.04)", borderRadius: 8, width: "fit-content" }}>
          {tabs.map(t => (
            <button key={t} className={`tab-btn ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>{tabLabels[t]}</button>
          ))}
        </div>

        {/* Tab content */}
        <div className="fade" key={`${activePersona}-${activeTab}`} style={{ minHeight: 320 }}>

          {["frustrations", "desires", "fears", "habits"].includes(activeTab) && (
            <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "8px 24px" }}>
              {persona[activeTab].map((item, i) => (
                <div key={i} className="item-row">
                  <div className="dot" style={{ background: persona.color }} />
                  <div style={{ fontFamily: "'Karla'", fontSize: 15, lineHeight: 1.65, color: "#2A2010" }}>{item}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "messagingAngles" && (
            <div>
              {persona.messagingAngles.map((m, i) => (
                <div key={i} className="msg-card">
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: persona.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "white", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: persona.color }}>{m.hook}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display'", fontSize: 18, fontStyle: "italic", lineHeight: 1.6, color: "#1A1208", background: "#F7F4EF", padding: "16px 20px", borderRadius: 8, marginBottom: 14, borderLeft: `3px solid ${persona.color}` }}>
                    {m.copy}
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0, paddingTop: 2 }}>Why it works →</span>
                    <span style={{ fontFamily: "'Karla'", fontSize: 14, color: "#555", lineHeight: 1.6 }}>{m.why}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contentTopics" && (
            <div>
              <div style={{ fontFamily: "'Karla'", fontSize: 13, color: "#888", marginBottom: 20, fontStyle: "italic" }}>Specific content ideas engineered for {persona.name}'s psychology — designed to stop the scroll and build trust.</div>
              <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "8px 24px" }}>
                {persona.contentTopics.map((topic, i) => (
                  <div key={i} className="item-row">
                    <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 12, color: persona.color, fontWeight: 600, flexShrink: 0, paddingTop: 2 }}>#{String(i+1).padStart(2,"0")}</div>
                    <div style={{ fontFamily: "'Karla'", fontSize: 15, lineHeight: 1.65, color: "#2A2010" }}>{topic}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.1)", margin: "56px 0 48px" }} />

        {/* Universal Themes */}
        <div>
          <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>Cross-Persona Intelligence</div>
          <h3 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, fontStyle: "italic" }}>Universal Themes<br /><span style={{ fontStyle: "normal", fontWeight: 400, color: "#888", fontSize: 24 }}>That cut across all three users</span></h3>
          <p style={{ fontFamily: "'Karla'", fontSize: 14, color: "#777", marginBottom: 36, lineHeight: 1.7 }}>
            These emotional triggers are shared by Chisom, Emeka, and Adeola. Content built around these themes will resonate across your entire audience — and become the foundation of your most viral posts.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {universalThemes.map((t, i) => (
              <div key={i} className="universal-card">
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: 28 }}>{t.icon}</div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{t.theme}</div>
                    <div style={{ fontFamily: "'Karla'", fontSize: 13, color: "#666", lineHeight: 1.65 }}>{t.desc}</div>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 14 }}>
                  <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 10 }}>Best Formats</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {t.formats.map((f, j) => (
                      <span key={j} className="topic-tag" style={{ fontSize: 12 }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing insight */}
        <div style={{ marginTop: 56, padding: "40px", background: "#1A1208", borderRadius: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, fontSize: 180, opacity: 0.04, lineHeight: 1 }}>💡</div>
          <div style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8B99A", marginBottom: 16 }}>The Master Insight</div>
          <div style={{ fontFamily: "'Playfair Display'", fontSize: 22, fontWeight: 700, fontStyle: "italic", color: "#F7F4EF", lineHeight: 1.6, maxWidth: 700, marginBottom: 20 }}>
            "Your users don't want inventory software. They want to stop feeling like they're being robbed — by staff, by disorganization, by their own blind spots. Sellytics is the answer to that fear. Every post you make should speak to the fear first, then show the way out."
          </div>
          <div style={{ fontFamily: "'Karla'", fontSize: 13, color: "#777" }}>
            Lead with pain → show the cost → reveal the solution → prove it with real people. That's the formula that builds trust at scale.
          </div>
        </div>
      </div>
    </div>
  );
}