import { useState } from "react";

const sections = [
  { id: "overview", label: "Brand Overview" },
  { id: "positioning", label: "Brand Positioning" },
  { id: "audience", label: "Target Audience" },
  { id: "content", label: "Content Strategy" },
  { id: "channels", label: "Platform Playbook" },
  { id: "growth", label: "Growth Engine" },
  { id: "monetization", label: "Monetization" },
  { id: "kpis", label: "KPIs & Timeline" },
];

const competitorData = [
  { name: "Klakpad Sella", strength: "Local Nigeria focus", weakness: "Limited social presence", threat: "Medium" },
  { name: "Tracepos", strength: "Nigeria SME focus", weakness: "Low brand awareness", threat: "Medium" },
  { name: "Square for Retail", strength: "Global brand trust", weakness: "Not offline-first, expensive", threat: "Low" },
  { name: "Zoho Inventory", strength: "Enterprise suite", weakness: "Not Africa-specific", threat: "Low" },
  { name: "VirtualRx Cloud", strength: "Africa POS experience", weakness: "Complex onboarding", threat: "High" },
];

const contentPillars = [
  {
    icon: "📦",
    title: "Business Wins",
    desc: "Before/after stories of retailers who cut losses and boosted profits using Sellytics. Real numbers, real people.",
    ratio: "30%",
    color: "#00E5A0"
  },
  {
    icon: "📊",
    title: "Retail Education",
    desc: "Bite-sized tips on inventory math, profit margins, shrinkage, reordering — content that makes business owners smarter.",
    ratio: "25%",
    color: "#FF6B35"
  },
  {
    icon: "🌍",
    title: "The African Hustle",
    desc: "Celebrate the energy of African retail — market days, kiosk owners, shop moms. Make them feel SEEN.",
    ratio: "20%",
    color: "#FFD166"
  },
  {
    icon: "⚡",
    title: "Product Demos",
    desc: "Short punchy demos showing how offline mode works, how fast setup is, how reports look. Remove fear.",
    ratio: "15%",
    color: "#6C63FF"
  },
  {
    icon: "🗣️",
    title: "Community Voice",
    desc: "UGC reposts, polls, Q&A, DM shoutouts. Turn customers into advocates, not just users.",
    ratio: "10%",
    color: "#F72585"
  },
];

const platforms = [
  {
    name: "TikTok",
    priority: "PRIMARY",
    why: "Fastest organic reach, huge SME creator wave, short video is perfect for demos",
    format: "15-60s demos, 'POV: You're a Lagos shop owner' series, trending audio hooks",
    freq: "5–7x / week",
    goal: "Brand awareness + virality",
    color: "#FF2D55"
  },
  {
    name: "Instagram",
    priority: "PRIMARY",
    why: "Visual storytelling + Reels distribution + DM-based sales conversion",
    format: "Reels, carousel how-tos, Stories with polls, saved tutorials",
    freq: "4–5x / week",
    goal: "Leads + community",
    color: "#E1306C"
  },
  {
    name: "Facebook",
    priority: "SECONDARY",
    why: "African SME owners 35–55 skew heavily Facebook; groups are massive discovery channels",
    format: "Long-form posts, group participation, Facebook Ads retargeting",
    freq: "3–4x / week",
    goal: "Paid acquisition + community",
    color: "#1877F2"
  },
  {
    name: "LinkedIn",
    priority: "SECONDARY",
    why: "B2B angle — target retail chain owners, wholesalers, franchise operators",
    format: "Thought leadership, data posts, founder story, SME statistics",
    freq: "2–3x / week",
    goal: "Enterprise leads + PR",
    color: "#0A66C2"
  },
  {
    name: "WhatsApp / Telegram",
    priority: "SUPPORT",
    why: "Primary communication layer in Nigeria/Africa — build a broadcast community",
    format: "Weekly tips newsletter, feature updates, exclusive user support",
    freq: "2–3x / week",
    goal: "Retention + referrals",
    color: "#25D366"
  },
];

const monetizationStreams = [
  {
    stream: "Freemium → Premium Subscriptions",
    desc: "Free tier (up to X SKUs) drives adoption. Premium unlocks multi-location, advanced analytics, staff accounts.",
    timeline: "Now",
    icon: "🔑"
  },
  {
    stream: "Affiliate / Referral Program",
    desc: "Give users a referral link. First month free for new user + cash or airtime reward for referrer. Viral loop.",
    timeline: "Month 2",
    icon: "🔗"
  },
  {
    stream: "B2B / Enterprise Licensing",
    desc: "Sell bulk licenses to retail chains, wholesalers, FMCG distributors. LinkedIn + cold outreach pipeline.",
    timeline: "Month 4",
    icon: "🏢"
  },
  {
    stream: "Partnerships & Integrations",
    desc: "Partner with POS hardware vendors, payment processors (Paystack, Flutterwave) for bundled offers.",
    timeline: "Month 6",
    icon: "🤝"
  },
  {
    stream: "Creator / Influencer Revenue Share",
    desc: "Pay micro-influencers (small biz creators) per signup conversion. Highly cost-effective.",
    timeline: "Month 3",
    icon: "🎥"
  },
];

const timeline = [
  { month: "Month 1–2", phase: "Foundation", color: "#6C63FF", tasks: ["Set up all profiles with unified branding", "Build content library (30 posts)", "Launch TikTok & IG with demo content", "Set up WhatsApp broadcast list", "Identify 10 beta users for testimonials"] },
  { month: "Month 3–4", phase: "Momentum", color: "#FF6B35", tasks: ["Launch referral program", "Begin paid ads (₦5k–₦20k/day on Meta)", "Reach 5K followers across platforms", "First influencer collaboration", "Weekly 'Retail Tips' series launched"] },
  { month: "Month 5–6", phase: "Scale", color: "#00E5A0", tasks: ["Reach 25K total followers", "Launch B2B outreach on LinkedIn", "First viral content milestone", "Partner announcement (Paystack/Flutterwave)", "500+ active paid users"] },
  { month: "Month 7–12", phase: "Dominate", color: "#F72585", tasks: ["100K+ followers target", "Launch YouTube channel", "Speaking at retail/SME events", "Media features (TechCabal, Nairametrics)", "Pan-Africa expansion (Ghana, Kenya, SA)"] },
];

export default function SellyticsStrategy() {
  const [active, setActive] = useState("overview");

  return (
    <div style={{
      fontFamily: "'Syne', sans-serif",
      background: "#0A0A0F",
      color: "#F0EDE8",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0A0A0F; } ::-webkit-scrollbar-thumb { background: #00E5A0; border-radius: 2px; }
        .nav-btn { background: none; border: none; cursor: pointer; font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 10px 16px; border-radius: 6px; transition: all 0.2s; color: #888; white-space: nowrap; }
        .nav-btn:hover { color: #F0EDE8; background: rgba(255,255,255,0.05); }
        .nav-btn.active { color: #00E5A0; background: rgba(0,229,160,0.1); }
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; }
        .card:hover { border-color: rgba(0,229,160,0.3); transition: border-color 0.2s; }
        .tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; }
        .section-title { font-size: 28px; font-weight: 800; line-height: 1.15; margin-bottom: 8px; }
        .section-sub { font-family: 'DM Sans', sans-serif; font-size: 15px; color: #999; line-height: 1.6; margin-bottom: 32px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .grid-2 { grid-template-columns: 1fr; } .grid-3 { grid-template-columns: 1fr; } }
        .accent { color: #00E5A0; }
        .label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #666; margin-bottom: 6px; }
        .value { font-size: 15px; font-family: 'DM Sans', sans-serif; color: #E0DDD8; line-height: 1.5; }
        .big-num { font-size: 42px; font-weight: 800; color: #00E5A0; line-height: 1; }
        .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 28px 0; }
      `}</style>

      {/* Header */}
      <div style={{ padding: "32px 32px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #00E5A0, #00B37A)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📦</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00E5A0" }}>Social Media Strategy</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>Sellytics HQ</div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span className="tag" style={{ background: "rgba(0,229,160,0.12)", color: "#00E5A0" }}>2025–2026 Playbook</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 1 }}>
          {sections.map(s => (
            <button key={s.id} className={`nav-btn ${active === s.id ? "active" : ""}`} onClick={() => setActive(s.id)}>{s.label}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "36px 32px", maxWidth: 960, margin: "0 auto" }}>

        {/* OVERVIEW */}
        {active === "overview" && (
          <div>
            <div className="section-title">Your Business at a Glance</div>
            <div className="section-sub">What Sellytics is, who it's for, and why now is the moment to dominate social.</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
              {[
                { label: "Core Product", value: "Offline-first inventory & sales tracking app for retail businesses", icon: "📱" },
                { label: "Primary Market", value: "African retail SMEs — particularly Nigeria, Ghana, Kenya, South Africa", icon: "🌍" },
                { label: "Killer Feature", value: "Works without internet — critical in markets with unreliable connectivity", icon: "⚡" },
              ].map((item, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: "linear-gradient(135deg, rgba(0,229,160,0.08), rgba(108,99,255,0.08))", borderColor: "rgba(0,229,160,0.2)", marginBottom: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>🎯 Strategic Opportunity</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: "#D0CCC8" }}>
                Africa has <span className="accent" style={{ fontWeight: 700 }}>44 million+ SMEs</span> — the majority are informal retailers still using paper, WhatsApp notes, and spreadsheets. Global competitors like Square, Zoho, and Shopify weren't built for <em>their</em> reality: intermittent internet, mobile-first workflows, and price sensitivity. Sellytics is. The social media opportunity is to <span className="accent" style={{ fontWeight: 700 }}>own the "business tools for African retailers" narrative</span> before any competitor does.
              </div>
            </div>

            <div className="section-title" style={{ fontSize: 20, marginBottom: 16 }}>Competitive Landscape</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    {["Competitor", "Their Strength", "Their Weakness", "Threat Level"].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitorData.map((c, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#F0EDE8" }}>{c.name}</td>
                      <td style={{ padding: "12px 16px", color: "#999" }}>{c.strength}</td>
                      <td style={{ padding: "12px 16px", color: "#00E5A0" }}>{c.weakness}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span className="tag" style={{ background: c.threat === "High" ? "rgba(247,37,133,0.15)" : c.threat === "Medium" ? "rgba(255,107,53,0.15)" : "rgba(0,229,160,0.1)", color: c.threat === "High" ? "#F72585" : c.threat === "Medium" ? "#FF6B35" : "#00E5A0" }}>{c.threat}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* POSITIONING */}
        {active === "positioning" && (
          <div>
            <div className="section-title">Brand Positioning</div>
            <div className="section-sub">How Sellytics must show up, sound, and feel to become the default tool for African retail.</div>

            <div className="card" style={{ background: "rgba(0,229,160,0.06)", borderColor: "rgba(0,229,160,0.25)", marginBottom: 24, padding: 32 }}>
              <div className="label" style={{ marginBottom: 10 }}>Brand Positioning Statement</div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, fontStyle: "italic", color: "#F0EDE8" }}>
                "Sellytics is the inventory and sales tracking app built for <span className="accent">African retailers who hustle hard and can't afford to lose track</span> — even when the internet goes out."
              </div>
            </div>

            <div className="grid-2" style={{ marginBottom: 24 }}>
              <div className="card">
                <div className="label" style={{ marginBottom: 16 }}>Brand Personality</div>
                {[
                  { trait: "Relatable", desc: "Speaks like a fellow entrepreneur, not a corporation" },
                  { trait: "Empowering", desc: "Every post should make the user feel more capable" },
                  { trait: "Locally Rooted", desc: "African slang, references, and visual culture" },
                  { trait: "Sharp & Direct", desc: "No fluff. Retail owners are busy. Get to the point." },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E5A0", marginTop: 6, flexShrink: 0 }} />
                    <div><span style={{ fontWeight: 700 }}>{t.trait}:</span> <span style={{ fontFamily: "'DM Sans'", color: "#999", fontSize: 14 }}>{t.desc}</span></div>
                  </div>
                ))}
              </div>
              <div className="card">
                <div className="label" style={{ marginBottom: 16 }}>Brand Voice Examples</div>
                {[
                  { wrong: "Our platform optimizes inventory workflows", right: "Stop losing money to stock you can't track. Sellytics fixes that." },
                  { wrong: "Features include offline data sync", right: "No wifi? No problem. Sellytics works even when NEPA takes the light." },
                ].map((ex, i) => (
                  <div key={i} style={{ marginBottom: 16, padding: 14, background: "rgba(255,255,255,0.03)", borderRadius: 10 }}>
                    <div style={{ fontSize: 12, color: "#F72585", fontWeight: 700, marginBottom: 4 }}>✗ NOT THIS</div>
                    <div style={{ fontSize: 13, fontFamily: "'DM Sans'", color: "#666", marginBottom: 8, fontStyle: "italic" }}>{ex.wrong}</div>
                    <div style={{ fontSize: 12, color: "#00E5A0", fontWeight: 700, marginBottom: 4 }}>✓ THIS</div>
                    <div style={{ fontSize: 13, fontFamily: "'DM Sans'", color: "#D0CCC8", fontStyle: "italic" }}>{ex.right}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="label" style={{ marginBottom: 16 }}>Visual Identity Direction</div>
              <div className="grid-3">
                {[
                  { label: "Colors", value: "Bold greens (growth), deep blacks (premium), orange accents (energy). Avoid corporate blues and greys that signal 'enterprise software.'" },
                  { label: "Imagery", value: "Real African shops, real people, real chaos turned order. Markets, kiosks, boutiques. NOT stock photos of laptops in cafes." },
                  { label: "Typography", value: "Strong, confident headlines. Clean readable body. Not overly fancy — it must work on a phone screen at arm's length." },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 16, background: "rgba(255,255,255,0.03)", borderRadius: 10 }}>
                    <div className="label" style={{ marginBottom: 8 }}>{item.label}</div>
                    <div className="value" style={{ fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AUDIENCE */}
        {active === "audience" && (
          <div>
            <div className="section-title">Target Audience</div>
            <div className="section-sub">Three core personas — each with distinct motivations, pain points, and content hooks.</div>

            {[
              {
                name: "Mama Chisom / The Hustler",
                emoji: "👩‍💼",
                desc: "Woman, 28–45, runs a clothing, cosmetics, grocery, or provisions shop. Manages inventory in a notebook or memory. Has 1–5 staff. Uses WhatsApp for orders.",
                pain: "Loses money to theft, expired stock, or items she forgot she had. Manually counts stock every week. Can't tell if she's profitable.",
                hook: "Show her exactly how much money she's losing without tracking. Then show the fix in 30 seconds.",
                platforms: ["TikTok", "Instagram", "WhatsApp"],
                color: "#FF6B35"
              },
              {
                name: "Emeka / The Grinder",
                emoji: "👨‍💻",
                desc: "Male, 25–38, runs a tech accessories, phone repair, or FMCG distribution business. More tech-savvy. Might have tried Excel or other apps but found them too complex.",
                pain: "Needs real-time stock data across 2+ locations. Wants to know his fast-movers. Tired of calling the shop to check if an item is available.",
                hook: "Multi-location demo. 'How I manage 3 shops from my phone' video format.",
                platforms: ["TikTok", "Instagram", "LinkedIn"],
                color: "#6C63FF"
              },
              {
                name: "Adeola / The Scaler",
                emoji: "🏬",
                desc: "30–50, owns a retail chain or wholesale distribution company. Has 10–50 staff. Evaluates software properly. Wants ROI and reliability.",
                pain: "Leakage across staff, inconsistent reporting, no centralized visibility. Wants enterprise-level data without enterprise-level price.",
                hook: "Data-driven content — cost savings, shrinkage reduction stats, B2B case studies.",
                platforms: ["LinkedIn", "Facebook"],
                color: "#00E5A0"
              },
            ].map((p, i) => (
              <div key={i} className="card" style={{ marginBottom: 16, borderLeft: `4px solid ${p.color}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
                  <div style={{ fontSize: 36 }}>{p.emoji}</div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>{p.name}</div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#999", lineHeight: 1.6, marginTop: 4 }}>{p.desc}</div>
                  </div>
                </div>
                <div className="grid-3">
                  <div>
                    <div className="label">Pain Point</div>
                    <div className="value" style={{ fontSize: 13 }}>{p.pain}</div>
                  </div>
                  <div>
                    <div className="label">Content Hook</div>
                    <div className="value" style={{ fontSize: 13 }}>{p.hook}</div>
                  </div>
                  <div>
                    <div className="label">Best Platforms</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                      {p.platforms.map(pl => (
                        <span key={pl} className="tag" style={{ background: "rgba(255,255,255,0.07)", color: "#D0CCC8" }}>{pl}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CONTENT */}
        {active === "content" && (
          <div>
            <div className="section-title">Content Strategy</div>
            <div className="section-sub">Five content pillars, your posting rhythm, and the formats that will drive growth.</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 32 }}>
              {contentPillars.map((p, i) => (
                <div key={i} className="card" style={{ borderTop: `3px solid ${p.color}`, textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 11, fontFamily: "'DM Sans'", color: "#777", lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: p.color }}>{p.ratio}</div>
                  <div style={{ fontSize: 10, color: "#555", fontWeight: 700, letterSpacing: "0.08em" }}>OF CONTENT</div>
                </div>
              ))}
            </div>

            <div className="section-title" style={{ fontSize: 20, marginBottom: 16 }}>High-Converting Content Formats</div>
            <div className="grid-2" style={{ marginBottom: 24 }}>
              {[
                { title: "The 'Before & After' Reel", desc: "Show a chaotic shop notebook → clean Sellytics dashboard. Pure transformation. Works on TikTok, IG, Facebook.", hook: '"I was running my business blind until..."', format: "30–60 second Reel" },
                { title: "POV Series", desc: '"POV: You open your shop and Sellytics tells you 3 items are out of stock before your first customer arrives."', hook: "Situational, relatable, shareable", format: "15–30 second TikTok" },
                { title: "Money Lost Calculator", desc: "Educational content: 'If you have 200 products and lose just 2% to shrinkage, you're losing ₦X per month.' Pain-first, solution-second.", hook: "Lead with loss aversion", format: "Carousel / infographic" },
                { title: "Customer Testimonials", desc: "Real users, real shops, real results. 30-second talking-head video of a shop owner saying what changed.", hook: "Social proof beats all claims", format: "Story + Feed Reel" },
                { title: "Day-in-the-Life Content", desc: "Partner with a retailer for a day. Show how Sellytics integrates into their real morning routine.", hook: "Authenticity = trust", format: "60–90 second mini-doc" },
                { title: "Trend Hijacking", desc: "Use trending African sounds, memes, and formats but redirect to your message. 'Me after checking Sellytics and realizing I need to restock Indomie…'", hook: "Algorithm loves native trends", format: "TikTok / IG Reel" },
              ].map((f, i) => (
                <div key={i} className="card">
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#999", lineHeight: 1.6, marginBottom: 12 }}>{f.desc}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span className="tag" style={{ background: "rgba(0,229,160,0.1)", color: "#00E5A0", fontSize: 11 }}>{f.hook}</span>
                    <span className="tag" style={{ background: "rgba(255,255,255,0.06)", color: "#888", fontSize: 11 }}>{f.format}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: "rgba(108,99,255,0.07)", borderColor: "rgba(108,99,255,0.25)" }}>
              <div className="label" style={{ marginBottom: 12 }}>📅 Weekly Content Rhythm</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
                {[
                  { day: "MON", content: "Business tip / Retail education", color: "#6C63FF" },
                  { day: "TUE", content: "Product demo / Feature spotlight", color: "#00E5A0" },
                  { day: "WED", content: "Customer story / Testimonial", color: "#FF6B35" },
                  { day: "THU", content: "Trending format / Meme", color: "#FFD166" },
                  { day: "FRI", content: "African Hustle celebration", color: "#F72585" },
                  { day: "SAT", content: "Poll / Q&A / Community", color: "#00B4D8" },
                  { day: "SUN", content: "Story reposts / Light content", color: "#888" },
                ].map((d, i) => (
                  <div key={i} style={{ textAlign: "center", padding: "12px 8px", background: "rgba(255,255,255,0.03)", borderRadius: 10, borderTop: `3px solid ${d.color}` }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: d.color, marginBottom: 6 }}>{d.day}</div>
                    <div style={{ fontSize: 11, fontFamily: "'DM Sans'", color: "#888", lineHeight: 1.4 }}>{d.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CHANNELS */}
        {active === "channels" && (
          <div>
            <div className="section-title">Platform Playbook</div>
            <div className="section-sub">Where to show up, how to show up, and what you're trying to achieve on each platform.</div>

            {platforms.map((p, i) => (
              <div key={i} className="card" style={{ marginBottom: 14, display: "grid", gridTemplateColumns: "160px 1fr", gap: 24 }}>
                <div style={{ borderRight: "1px solid rgba(255,255,255,0.07)", paddingRight: 24 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: p.color, marginBottom: 4 }}>{p.name}</div>
                  <span className="tag" style={{ background: p.priority === "PRIMARY" ? "rgba(0,229,160,0.12)" : p.priority === "SECONDARY" ? "rgba(255,107,53,0.12)" : "rgba(255,255,255,0.06)", color: p.priority === "PRIMARY" ? "#00E5A0" : p.priority === "SECONDARY" ? "#FF6B35" : "#888" }}>{p.priority}</span>
                  <div style={{ marginTop: 14 }}>
                    <div className="label">Frequency</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#F0EDE8" }}>{p.freq}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  <div><div className="label">Why This Platform</div><div className="value" style={{ fontSize: 13 }}>{p.why}</div></div>
                  <div><div className="label">Content Format</div><div className="value" style={{ fontSize: 13 }}>{p.format}</div></div>
                  <div><div className="label">Primary Goal</div><div className="value" style={{ fontSize: 13 }}>{p.goal}</div></div>
                </div>
              </div>
            ))}

            <div className="card" style={{ marginTop: 24, background: "rgba(255,107,53,0.06)", borderColor: "rgba(255,107,53,0.2)" }}>
              <div className="label" style={{ marginBottom: 12 }}>💡 Influencer Strategy</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 14, lineHeight: 1.7, color: "#C0BCB8" }}>
                <strong style={{ color: "#FF6B35" }}>Avoid macro-influencers.</strong> Instead, target <strong>micro-influencers (5K–50K followers)</strong> in the African small business and entrepreneurship niche. These accounts have highly engaged audiences who are exactly your users. Budget ₦30K–₦100K per collaboration for a genuine review or integration. Track every collaboration with unique referral links to measure ROI. Three to five of these per month will outperform any single celebrity post.
              </div>
            </div>
          </div>
        )}

        {/* GROWTH */}
        {active === "growth" && (
          <div>
            <div className="section-title">Growth Engine</div>
            <div className="section-sub">The tactical loops that turn content into followers, followers into users, and users into advocates.</div>

            <div className="grid-2" style={{ marginBottom: 24 }}>
              {[
                {
                  title: "The Organic Flywheel",
                  icon: "🔄",
                  color: "#00E5A0",
                  steps: [
                    "Post educational content that helps retailers",
                    "Retailers share it with peers in WhatsApp groups",
                    "New viewers discover Sellytics organically",
                    "They sign up → become case studies",
                    "Case studies become viral content → repeat",
                  ]
                },
                {
                  title: "The Paid Amplifier",
                  icon: "📢",
                  color: "#6C63FF",
                  steps: [
                    "Identify top-performing organic posts (3+ days data)",
                    "Boost with Meta Ads targeting Lagos/Abuja/Accra SMEs",
                    "Retarget website visitors with testimonial ads",
                    "Run lead generation ads with '14-day free trial' offer",
                    "Track cost-per-signup and optimize weekly",
                  ]
                },
              ].map((g, i) => (
                <div key={i} className="card" style={{ borderTop: `3px solid ${g.color}` }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                    <span style={{ fontSize: 24 }}>{g.icon}</span>
                    <span style={{ fontSize: 17, fontWeight: 700 }}>{g.title}</span>
                  </div>
                  {g.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${g.color}20`, color: g.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{j + 1}</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#C0BCB8", lineHeight: 1.5, paddingTop: 3 }}>{s}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="section-title" style={{ fontSize: 20, marginBottom: 16 }}>Growth Tactics by Stage</div>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { stage: "0 → 1K followers", tactic: "Post 2x daily for 30 days. Engage in every Nigerian/African SME Facebook group. Reply to every comment. DM every new follower personally. Do collaborations with 2–3 micro-creators.", urgency: "Days 1–30" },
                { stage: "1K → 10K followers", tactic: "Identify your 3 best-performing post formats and double down. Launch a challenge ('Show me your stock tracking setup'). Start paying for 2–3 micro-influencer reviews. Launch referral program.", urgency: "Month 2–4" },
                { stage: "10K → 100K followers", tactic: "Go cross-platform (TikTok content repurposed for IG Reels, Facebook). Feature users weekly. Start YouTube channel with longer tutorials. Pitch TechCabal and Techpoint for press.", urgency: "Month 5–10" },
              ].map((t, i) => (
                <div key={i} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, textAlign: "center", minWidth: 110 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#00E5A0" }}>{t.stage}</div>
                    <div style={{ fontSize: 11, color: "#555", marginTop: 4, fontWeight: 700, letterSpacing: "0.06em" }}>{t.urgency}</div>
                  </div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#C0BCB8", lineHeight: 1.65 }}>{t.tactic}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MONETIZATION */}
        {active === "monetization" && (
          <div>
            <div className="section-title">Monetization Strategy</div>
            <div className="section-sub">How Sellytics converts social media attention into sustainable, growing revenue.</div>

            <div style={{ display: "grid", gap: 14, marginBottom: 32 }}>
              {monetizationStreams.map((m, i) => (
                <div key={i} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 32, flexShrink: 0 }}>{m.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{m.stream}</div>
                      <span className="tag" style={{ background: "rgba(0,229,160,0.1)", color: "#00E5A0" }}>{m.timeline}</span>
                    </div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#999", lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: "linear-gradient(135deg, rgba(0,229,160,0.07), rgba(108,99,255,0.07))", borderColor: "rgba(0,229,160,0.2)" }}>
              <div className="label" style={{ marginBottom: 16 }}>💰 Social Media to Revenue Pipeline</div>
              <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
                {[
                  { step: "Content View", detail: "TikTok / IG / Facebook" },
                  { step: "Profile Visit", detail: "Bio link click" },
                  { step: "Free Trial Signup", detail: "14-day no-credit-card" },
                  { step: "Aha Moment", detail: "First inventory saved" },
                  { step: "Paid Conversion", detail: "Monthly/annual plan" },
                  { step: "Referral", detail: "Share with 3 peers" },
                ].map((s, i, arr) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ textAlign: "center", padding: "14px 16px", background: "rgba(0,229,160,0.08)", borderRadius: 10, minWidth: 100 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, color: "#00E5A0" }}>{s.step}</div>
                      <div style={{ fontSize: 11, fontFamily: "'DM Sans'", color: "#666" }}>{s.detail}</div>
                    </div>
                    {i < arr.length - 1 && <div style={{ padding: "0 6px", color: "#444", fontSize: 18 }}>→</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KPIS */}
        {active === "kpis" && (
          <div>
            <div className="section-title">KPIs & 12-Month Timeline</div>
            <div className="section-sub">What to measure, when to hit it, and the four phases that take Sellytics from startup to market leader.</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }}>
              {[
                { metric: "100K+", label: "Total Followers", sub: "by Month 12", color: "#00E5A0" },
                { metric: "5%+", label: "Avg Engagement Rate", sub: "industry avg is 1–2%", color: "#FF6B35" },
                { metric: "2,000+", label: "Paid Subscribers", sub: "by Month 12", color: "#6C63FF" },
                { metric: "<₦2,000", label: "Cost Per Signup", sub: "from paid social", color: "#FFD166" },
              ].map((k, i) => (
                <div key={i} className="card" style={{ textAlign: "center", borderTop: `3px solid ${k.color}` }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: k.color, marginBottom: 6 }}>{k.metric}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{k.label}</div>
                  <div style={{ fontSize: 12, fontFamily: "'DM Sans'", color: "#555" }}>{k.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {timeline.map((t, i) => (
                <div key={i} className="card" style={{ borderLeft: `4px solid ${t.color}` }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                    <div style={{ flexShrink: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: t.color }}>{t.month}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 2 }}>{t.phase}</div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {t.tasks.map((task, j) => (
                        <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 8, fontSize: 13, fontFamily: "'DM Sans'", color: "#C0BCB8", lineHeight: 1.5 }}>
                          <span style={{ color: t.color, fontWeight: 700, flexShrink: 0 }}>✓</span> {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: 24, background: "rgba(255,209,102,0.06)", borderColor: "rgba(255,209,102,0.2)" }}>
              <div className="label" style={{ marginBottom: 12, color: "#FFD166" }}>⚡ The #1 Priority for Week 1</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 15, lineHeight: 1.7, color: "#C0BCB8" }}>
                Before anything else: <strong style={{ color: "#FFD166" }}>record 5 real customers using Sellytics in their actual shops.</strong> 30-second raw videos. No studio. No script. Just real retailers saying "this helped me." These 5 videos will outperform 50 polished studio reels. Authenticity is your biggest competitive advantage against well-funded global competitors. Start there.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "20px 32px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 12, color: "#444", fontFamily: "'DM Sans'" }}>Sellytics HQ Social Strategy · 2025–2026</div>
        <div style={{ fontSize: 12, color: "#444", fontFamily: "'DM Sans'" }}>sellyticshq.com</div>
      </div>
    </div>
  );
}