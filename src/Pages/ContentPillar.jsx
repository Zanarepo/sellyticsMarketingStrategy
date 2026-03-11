import { useState } from "react";

const pillars = [
  {
    id: 1,
    name: "The Money Mirror",
    subtitle: "Show them what they're losing",
    icon: "🩸",
    color: "#C0392B",
    lightColor: "#FFF0F1",
    borderColor: "#FFCDD0",
    why: "Loss aversion is the most powerful psychological trigger in marketing. People act faster to avoid losing ₦50,000 than to gain ₦50,000. This pillar holds a mirror up to the hidden financial damage happening in their business right now — before Sellytics. It creates urgency without being salesy, because the problem already exists. You're just naming it.",
    audienceConnection: "Every Sellytics user suspects they're losing money but has never quantified it. This pillar validates that suspicion, makes it real, and positions Sellytics as the obvious fix.",
    ctaStrategy: "End every post in this pillar with a soft CTA: 'Track yours free for 14 days.' The reader is already in loss-aversion mode — a free trial feels like immediate relief.",
    posts: [
      { title: "The ₦50K You Don't Know You Lost This Month", format: "Carousel", hook: "\"If you have 100+ products and no tracking system, you're bleeding money. Here's the math.\"", why: "Opens with a specific, believable number. The math framing makes it educational, not preachy. Shareable in WhatsApp groups." },
      { title: "Signs Your Shop is Profitable vs. Signs You're Just Moving Money", format: "TikTok / Reel", hook: "\"High sales ≠ high profit. Here's how to tell the difference in under 60 seconds.\"", why: "This is a painful truth most traders don't realize. The contrast format is highly shareable and drives saves." },
      { title: "What a ₦2M Monthly Revenue Shop Should Actually Keep", format: "Static Infographic", hook: "\"Most shop owners turning ₦2M/month take home less than ₦200K. Here's why — and how to fix it.\"", why: "Specific numbers create instant relevance. Readers calculate their own situation mid-scroll." },
      { title: "3 Ways Staff Steal Without Stealing", format: "TikTok / Reel", hook: "\"They're not taking cash from the drawer. They're doing something worse.\"", why: "Intrigue-based hook. Every employer has suspected this. The curiosity gap forces them to watch to the end." },
      { title: "I Counted My Stock Today. Here's What Was Missing.", format: "Talking-head video", hook: "Authentic, diary-style. Real shop owner reveals the results of their first Sellytics audit.", why: "UGC format with real loss numbers = highest-trust content type. Difficult to fake, impossible to ignore." },
    ],
  },
  {
    id: 2,
    name: "The Proof Wall",
    subtitle: "Real people. Real results. Real numbers.",
    icon: "🏆",
    color: "#1565C0",
    lightColor: "#EFF8FF",
    borderColor: "#BEE3F8",
    why: "Your audience doesn't trust brands — they trust people like themselves. The Proof Wall pillar converts social proof into social currency. Every testimonial, case study, and result post answers the one question every potential user has: 'Will this actually work for someone like me?' The more specific and local the proof, the more powerful it becomes.",
    audienceConnection: "A Lagos Mama seeing another Lagos Mama's results is infinitely more convincing than any ad. A Kano distributor seeing how a similar operation cut losses — that's a buying decision made before they even click the link.",
    ctaStrategy: "Feature the customer first, the product second. Let the result speak. End with: 'Want results like [Name]? Start your free trial today.' Tag the customer if they consent — their network becomes your audience.",
    posts: [
      { title: "\"I Caught ₦80,000 Worth of Unrecorded Transactions in Week One\"", format: "Quote graphic + short video", hook: "Direct quote from a real user. The number is the headline.", why: "Specific monetary outcomes are the single highest-converting form of social proof for this audience." },
      { title: "Meet Shade: How She Went From Notebook to Running 2 Shops From Her Phone", format: "Mini-documentary Reel (60–90s)", hook: "\"She used to spend 3 hours every Sunday counting stock manually. Now it takes 8 minutes.\"", why: "Time savings are emotionally resonant. A face + a story + a transformation = maximum trust." },
      { title: "30 Days on Sellytics: What Changed (A Shop Owner's Honest Review)", format: "Long-form video / YouTube", hook: "Unsponsored-feeling, honest walkthrough. Real dashboard shown.", why: "The 'honest review' frame disarms skepticism. Showing the actual product UI in a real context is more convincing than any polished ad." },
      { title: "What Our Users Said After Their First Week [Compilation]", format: "TikTok / Reel montage", hook: "10 voices, 10 seconds each, one consistent message: 'I wish I started earlier.'", why: "Volume of social proof matters. Ten people saying the same thing is more convincing than one person saying it ten times." },
      { title: "Before Sellytics vs. After Sellytics [Side-by-Side]", format: "Carousel or split-screen Reel", hook: "Left: handwritten ledger, stressed owner, unknown margins. Right: clean dashboard, clear numbers, confident operator.", why: "Visual transformation is processed in milliseconds. The contrast does all the selling without a single pitch." },
    ],
  },
  {
    id: 3,
    name: "The Classroom",
    subtitle: "Teach them. They'll trust you forever.",
    icon: "📚",
    color: "#4527A0",
    lightColor: "#F2F1FF",
    borderColor: "#D6D4FF",
    why: "When you teach people something valuable for free, they feel indebted — not in a manipulative way, but in the way you feel toward a mentor. The Classroom pillar makes Sellytics the most knowledgeable voice in the African retail space. It builds authority that can't be bought with ads.",
    audienceConnection: "Your audience is running businesses mostly through intuition and experience. Content that teaches them real business principles — in plain language, with practical examples — is genuinely life-changing. They'll share it, save it, and come back for more.",
    ctaStrategy: "Don't pitch in educational posts. The value IS the pitch. Close with: 'Follow for more retail business tips every week.' Build the audience first. Monetize through trust, not interruption.",
    posts: [
      { title: "How to Calculate Your Real Profit Margin (Not the Fake One)", format: "Carousel", hook: "\"Revenue - Cost of Goods is not profit. Here's what you're actually missing from that equation.\"", why: "This is something virtually every informal retailer gets wrong. The correction feels like a revelation." },
      { title: "The Stock Reorder Formula: Never Run Out of Your Best Sellers Again", format: "Carousel / Infographic", hook: "\"Reorder Point = Lead Time Demand + Safety Stock. Here's how to calculate yours in 5 minutes.\"", why: "A practical formula they can apply immediately. Actionable content earns saves." },
      { title: "What 'Shrinkage' Actually Means — and Why It's Silently Killing Your Margins", format: "TikTok educational", hook: "\"Shrinkage isn't just theft. It's the silent tax on every shop that doesn't track inventory.\"", why: "Teaching them a term they didn't know positions Sellytics as the expert." },
      { title: "5 Numbers Every Shop Owner Should Know Every Monday Morning", format: "Carousel", hook: "\"If you can't answer these 5 questions about your business by 9am Monday, you're running blind.\"", why: "Creates a new weekly ritual and standard. Implicitly shows that Sellytics provides all 5 numbers automatically." },
      { title: "How to Set Prices That Actually Make You Money (The Full Breakdown)", format: "Long carousel or short video series", hook: "\"Most shop owners price based on what competitors charge. That's how you stay broke together.\"", why: "Pricing is where most retailers silently bleed. The contrarian framing is shareable and quotable." },
    ],
  },
  {
    id: 4,
    name: "The African Hustle",
    subtitle: "Celebrate the culture. Own the community.",
    icon: "🌍",
    color: "#E65100",
    lightColor: "#FFF8F0",
    borderColor: "#FFE5C8",
    why: "Community is the most underused growth engine in B2B SaaS — especially for African markets. This pillar isn't about your product at all. It's about making your audience feel SEEN, celebrated, and represented. When a brand reflects your culture back at you with accuracy and warmth, you don't just follow them — you become loyal to them.",
    audienceConnection: "African retail entrepreneurs are largely invisible in global business media. When Sellytics celebrates them specifically, it becomes their brand — not just a tool they use.",
    ctaStrategy: "No direct CTA here. This pillar exists to build affinity and community. The returns come indirectly through shares, word-of-mouth, and emotional loyalty that makes users resistant to competitor switching.",
    posts: [
      { title: "POV: It's 7am and You're Setting Up Your Shop Before Lagos Wakes Up", format: "TikTok / Reel (ambient video)", hook: "Trending audio + authentic early-morning shop footage. No narration needed.", why: "Sensory, nostalgic, deeply relatable. This is the content that gets shared in WhatsApp groups with 'This is us 😂'." },
      { title: "The Unofficial Rules of Running a Nigerian Shop", format: "Carousel / TikTok list", hook: "\"1. The customer is always right — until they want to 'manage' on credit.\"", why: "Humor + shared experience = virality. Each slide gets a laugh of recognition." },
      { title: "Celebrating 1 Year in Business: The Real Story (No Filter)", format: "Long-form Reel (60–90s)", hook: "\"She started with ₦50,000 and a table in the market. Here's where she is today.\"", why: "Aspirational but achievable. The 'no filter' framing builds deep trust." },
      { title: "Things Only African Shop Owners Understand", format: "TikTok / Reel (trending format)", hook: "\"Doing mental arithmetic for 12 customers at once while someone argues about change.\"", why: "Relatable humor drives shares. Non-users discover Sellytics through culture content, not product content." },
      { title: "Shop Owner Spotlight: Meet the Women Building Businesses Across Nigeria", format: "Weekly recurring series", hook: "Feature a different female shop owner every Friday. Their story, their challenges, their wins.", why: "Recurring series build appointment viewing. The featured owner shares with their entire network." },
    ],
  },
  {
    id: 5,
    name: "The Demo Room",
    subtitle: "Remove fear. Show the product. Close the gap.",
    icon: "⚡",
    color: "#00695C",
    lightColor: "#EDFFF9",
    borderColor: "#B3F0E0",
    why: "The #1 reason people don't convert from follower to user isn't price — it's uncertainty. 'Will it work for my type of shop? Is it complicated? What does it actually look like?' The Demo Room pillar answers every objection with evidence instead of claims. It shortens the path from 'interested' to 'signed up' by removing the fear of the unknown.",
    audienceConnection: "Your audience has tried apps before and been burned. They've downloaded things that were too complicated, too slow, or useless without internet. Every demo shows them — specifically — that Sellytics is different.",
    ctaStrategy: "Every Demo Room post should end with a direct, low-friction CTA: 'Try it free for 14 days — no credit card required.' The viewer has just watched it work. Reduce inertia with a free trial, not a sales pitch.",
    posts: [
      { title: "Setting Up Your Entire Shop on Sellytics in Under 10 Minutes", format: "Screen-recorded TikTok / Reel", hook: "\"Watch me add 50 products, set prices, and run my first sale — before my morning tea goes cold.\"", why: "Speed of setup is a major objection. Showing it in real-time, without cuts, is more convincing than any claim." },
      { title: "What Happens When the Internet Goes Out (Offline Mode Demo)", format: "TikTok", hook: "\"NEPA just took the light. Wi-Fi is gone. Watch what Sellytics does.\"", why: "Your most differentiated feature. Demonstrating it in a culturally relevant context makes it viscerally convincing." },
      { title: "How to Run Your End-of-Day Report in 2 Minutes", format: "Screen-record Reel", hook: "\"Stop spending an hour reconciling manually. Here's your entire day's sales in 2 minutes.\"", why: "Time savings are emotional. Showing the report generated in real-time is the most effective product demo format." },
      { title: "Can Sellytics Handle a Busy Market Day? We Tested It.", format: "Challenge-style TikTok", hook: "\"100 transactions. 3 staff. 1 app. Here's how it held up.\"", why: "The stress-test format builds confidence. 'It held up under pressure' is the social proof every skeptical buyer needs." },
      { title: "The Sellytics Feature Nobody Talks About (But Every Shop Owner Needs)", format: "TikTok / Reel", hook: "Curiosity gap hook. Reveal a non-obvious feature that solves a specific, painful problem.", why: "Curiosity-gap hooks consistently drive high watch-through rates. Hidden features feel like insider knowledge." },
    ],
  },
];

const formatColors = {
  "Carousel": "#4527A0", "TikTok / Reel": "#C62828", "Static Infographic": "#E65100",
  "Talking-head video": "#1565C0", "Long-form video / YouTube": "#C0392B",
  "TikTok / Reel montage": "#C62828", "Carousel / Infographic": "#4527A0",
  "TikTok educational": "#C62828", "Long carousel or short video series": "#4527A0",
  "TikTok / Reel (ambient video)": "#C62828", "Carousel / TikTok list": "#4527A0",
  "Long-form Reel (60–90s)": "#1565C0", "TikTok / Reel (trending format)": "#C62828",
  "Weekly recurring series": "#E65100", "Screen-recorded TikTok / Reel": "#00695C",
  "TikTok": "#C62828", "Screen-record Reel": "#00695C",
  "Challenge-style TikTok": "#C0392B", "Quote graphic + short video": "#1565C0",
  "Mini-documentary Reel (60–90s)": "#1565C0", "Carousel or split-screen Reel": "#4527A0",
};

export default function ContentPillars() {
  const [active, setActive] = useState(0);
  const [expandedPost, setExpandedPost] = useState(null);
  const pillar = pillars[active];

  return (
    <div style={{ background: "#F5F5F0", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", color: "#1A1A1A" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fraunces:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #CCC; border-radius: 4px; }
        .pillar-tab { background: none; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; transition: all 0.2s; }
        .post-card { border: 1px solid #E0DDD8; border-radius: 12px; padding: 20px; cursor: pointer; transition: all 0.2s; background: #FFFFFF; }
        .post-card:hover { border-color: #BBBBB5; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
        @keyframes slideIn { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        .slide { animation: slideIn 0.25s ease-out; }
        .sidebar-btn { background: none; border: 1px solid transparent; border-radius: 8px; cursor: pointer; text-align: left; padding: 10px 14px; width: 100%; transition: all 0.15s; display: flex; gap: 10px; align-items: center; }
        .sidebar-btn:hover { background: #EEEEE8; }
      `}</style>

      {/* Top bar */}
      <div style={{ background: "#1A1A1A", color: "#E0DDD8", padding: "11px 36px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: "#888" }}>Sellytics HQ · Content Strategy</span>
        <span style={{ fontSize: 11, color: "#555", letterSpacing: "0.06em" }}>5 Pillars · 25 Post Ideas · Built to Convert</span>
      </div>

      {/* Header */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E0DDD8", padding: "28px 36px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: "#1A1A1A" }}>
              5 Pillars That <span style={{ fontStyle: "italic", color: pillar.color, transition: "color 0.3s" }}>Convert</span>
            </h1>
            <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>Click any pillar to explore posts, hooks, and strategy</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#AAA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Active Pillar</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: pillar.color, transition: "color 0.3s" }}>{active + 1} / 5</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
          {pillars.map((p, i) => (
            <button key={i} className="pillar-tab" onClick={() => { setActive(i); setExpandedPost(null); }}
              style={{ padding: "13px 18px", borderBottom: active === i ? `3px solid ${p.color}` : "3px solid transparent", color: active === i ? p.color : "#888", fontWeight: active === i ? 700 : 500, fontSize: 13, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 8 }}>
              <span>{p.icon}</span>
              <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <span>{p.name}</span>
                {active === i && <span style={{ fontSize: 10, fontWeight: 400, color: "#AAA" }}>{p.subtitle}</span>}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="slide" key={active} style={{ display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "calc(100vh - 148px)" }}>

        {/* Main */}
        <div style={{ padding: "32px 36px", borderRight: "1px solid #E0DDD8", overflowY: "auto" }}>

          {/* Pillar hero */}
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 28 }}>
            <div style={{ width: 60, height: 60, borderRadius: 14, background: pillar.lightColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0, border: `1px solid ${pillar.borderColor}` }}>{pillar.icon}</div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: pillar.color, marginBottom: 5 }}>Pillar {String(active + 1).padStart(2, "0")}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.15, color: "#1A1A1A" }}>{pillar.name}</div>
              <div style={{ fontSize: 13, color: "#999", marginTop: 3, fontStyle: "italic" }}>{pillar.subtitle}</div>
            </div>
          </div>

          {/* Why it works */}
          <div style={{ background: pillar.lightColor, border: `1px solid ${pillar.borderColor}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: pillar.color, marginBottom: 10 }}>Why This Pillar Works</div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "#444" }}>{pillar.why}</p>
          </div>

          {/* Posts header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA" }}>5 Example Posts — Click to Expand</div>
          </div>

          {/* Post cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {pillar.posts.map((post, i) => (
              <div key={i} className="post-card"
                onClick={() => setExpandedPost(expandedPost === i ? null : i)}
                style={{ borderColor: expandedPost === i ? pillar.color : "#E0DDD8", background: expandedPost === i ? pillar.lightColor : "#FFFFFF", boxShadow: expandedPost === i ? `0 0 0 1px ${pillar.color}30` : "none" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: pillar.lightColor, border: `1px solid ${pillar.borderColor}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: pillar.color, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.45, color: "#1A1A1A", marginBottom: 8 }}>{post.title}</div>
                      <div style={{ fontSize: 14, color: "#BBB", flexShrink: 0 }}>{expandedPost === i ? "▲" : "▼"}</div>
                    </div>
                    <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 4, background: `${formatColors[post.format] || "#888"}15`, color: formatColors[post.format] || "#888", border: `1px solid ${formatColors[post.format] || "#888"}30` }}>{post.format}</span>
                  </div>
                </div>

                {expandedPost === i && (
                  <div style={{ marginTop: 18, paddingTop: 18, borderTop: `1px solid ${pillar.borderColor}` }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Opening Hook</div>
                      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontStyle: "italic", color: "#222", lineHeight: 1.7, padding: "13px 16px", background: "#FFFFFF", borderRadius: 8, borderLeft: `3px solid ${pillar.color}`, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>{post.hook}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase", color: "#AAA", marginBottom: 8 }}>Why It Converts</div>
                      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>{post.why}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ padding: "32px 24px", overflowY: "auto", background: "#FAFAF7" }}>

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 12 }}>Audience Connection</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>{pillar.audienceConnection}</div>
          </div>

          <div style={{ height: 1, background: "#E8E5E0", marginBottom: 24 }} />

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 12 }}>CTA Strategy</div>
            <div style={{ padding: 16, background: pillar.lightColor, border: `1px solid ${pillar.borderColor}`, borderRadius: 10, fontSize: 13, color: "#444", lineHeight: 1.8 }}>{pillar.ctaStrategy}</div>
          </div>

          <div style={{ height: 1, background: "#E8E5E0", marginBottom: 24 }} />

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 12 }}>Format Mix</div>
            {[...new Set(pillar.posts.map(p => p.format))].map((fmt, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 9 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: formatColors[fmt] || "#888", flexShrink: 0 }} />
                <div style={{ fontSize: 12, color: "#666" }}>{fmt}</div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: "#E8E5E0", marginBottom: 24 }} />

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 12 }}>Posting Cadence</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { freq: "Daily", platform: "TikTok", note: "Short demos & hooks" },
                { freq: "5x/week", platform: "Instagram", note: "Reels + carousels" },
                { freq: "3x/week", platform: "Facebook", note: "Groups + long posts" },
                { freq: "2x/week", platform: "LinkedIn", note: "Data + thought leadership" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 13px", background: "#FFFFFF", border: "1px solid #E8E5E0", borderRadius: 8, alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{c.platform}</div>
                    <div style={{ fontSize: 11, color: "#AAA" }}>{c.note}</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: pillar.color }}>{c.freq}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#E8E5E0", marginBottom: 24 }} />

          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AAA", marginBottom: 12 }}>All Pillars</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {pillars.map((p, i) => (
                <button key={i} className="sidebar-btn" onClick={() => { setActive(i); setExpandedPost(null); }}
                  style={{ background: active === i ? p.lightColor : "transparent", border: `1px solid ${active === i ? p.borderColor : "transparent"}` }}>
                  <span style={{ fontSize: 18 }}>{p.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: active === i ? 700 : 500, color: active === i ? p.color : "#666" }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: "#AAA" }}>{p.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}