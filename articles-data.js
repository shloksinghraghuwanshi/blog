// ============================================================
// NewsVibe — Articles Database
// ============================================================
// All articles with full content, SEO metadata, and engagement data.

const ARTICLES = [
  {
    id: 1,
    slug: "mental-health-foundation-2026",
    title: "Why Your Mental Health Is the Foundation of Everything",
    excerpt: "We talk about physical fitness constantly, but mental wellness underpins every aspect of how we live, work, and connect. Here's why it deserves priority in 2026.",
    category: "Health",
    categoryColor: "#6c63ff",
    emoji: "🧠",
    gradient: "linear-gradient(135deg,#6c63ff,#a78bfa)",
    date: "June 10, 2026",
    readTime: "5 min read",
    views: 12400,
    likes: 347,
    featured: true,
    trending: true,
    tags: ["mental health", "wellness", "self-care", "psychology"],
    author: "Dr. Priya Sharma",
    authorRole: "Health & Wellness Editor",
    authorEmoji: "👩‍⚕️",
    content: `
      <p>In our relentless chase for productivity, fitness goals, and career milestones, we've somehow managed to sideline the very engine that powers all of it — our mind.</p>

      <h2>The Hidden Cost of Mental Neglect</h2>
      <p>According to the World Health Organization, depression and anxiety cost the global economy <strong>$1 trillion per year</strong> in lost productivity. But beyond economics, poor mental health quietly erodes the quality of every single relationship, decision, and experience in your life.</p>
      <p>It shapes how you perceive criticism. How you respond to stress. Whether you feel worthy of love. Whether you dare to dream.</p>

      <h2>What Mental Health Actually Means</h2>
      <p>Mental health isn't just the absence of disorder. It's a dynamic state of wellbeing in which you can:</p>
      <ul>
        <li>Realize your own abilities</li>
        <li>Cope with the normal stresses of life</li>
        <li>Work productively and fruitfully</li>
        <li>Contribute to your community</li>
      </ul>

      <h2>5 Evidence-Based Habits to Prioritize Today</h2>
      <p>You don't need a therapist visit to start. Here are five science-backed habits you can begin today:</p>

      <h3>1. Sleep Like Your Life Depends On It (It Does)</h3>
      <p>Chronic sleep deprivation is directly linked to anxiety, depression, and even psychosis. Adults need 7–9 hours. Guard this time like an appointment with the most important person in your life.</p>

      <h3>2. Move Your Body Daily</h3>
      <p>Exercise releases BDNF (brain-derived neurotrophic factor) — a protein that literally grows new brain cells and acts as a natural antidepressant. Even a 20-minute walk counts.</p>

      <h3>3. Practice Intentional Disconnection</h3>
      <p>Social media's dopamine loop is designed to be addictive. Schedule daily "dark hours" — time away from screens, notifications, and the constant comparison trap.</p>

      <h3>4. Talk to Someone</h3>
      <p>Vulnerability is strength, not weakness. Whether it's a friend, family member, or therapist — verbalizing your inner experience is proven to reduce emotional intensity.</p>

      <h3>5. Cultivate One Thing You Do Just for Joy</h3>
      <p>Not for productivity. Not for money. Not for social media. Something that makes you feel alive. That's the ultimate act of self-care.</p>

      <h2>The Bottom Line</h2>
      <p>You cannot pour from an empty cup. Your mental health isn't a luxury — it's infrastructure. Treat it like one.</p>
      <p>In 2026, the most revolutionary thing you can do is decide that your inner world is worth investing in.</p>
    `
  },
  {
    id: 2,
    slug: "ai-tools-changing-daily-life-2026",
    title: "AI in 2026: 10 Tools That Are Changing Daily Life",
    excerpt: "From smart health monitors to AI tutors, artificial intelligence has quietly moved into every corner of modern life. Here's what's actually useful.",
    category: "Technology",
    categoryColor: "#00b4d8",
    emoji: "🤖",
    gradient: "linear-gradient(135deg,#43c6ac,#00b4d8)",
    date: "June 9, 2026",
    readTime: "6 min read",
    views: 18200,
    likes: 521,
    featured: false,
    trending: true,
    tags: ["AI", "technology", "future", "productivity", "tools"],
    author: "Arjun Mehta",
    authorRole: "Technology Correspondent",
    authorEmoji: "👨‍💻",
    content: `
      <p>Two years ago, AI felt like a science experiment. Today, it's your morning alarm, your doctor's assistant, and your child's tutor. The pace of adoption has been staggering — and we're only getting started.</p>

      <h2>Why 2026 Is the Inflection Point</h2>
      <p>Unlike the AI hype cycles of 2022–2024 which were largely about chatbots, today's AI is <strong>multimodal, agentic, and embedded</strong> in the fabric of daily tools. It doesn't just answer questions — it takes actions on your behalf.</p>

      <h2>10 AI Tools Actually Worth Using Right Now</h2>

      <h3>1. AI Health Monitors</h3>
      <p>Wearables now detect early signs of atrial fibrillation, sleep apnea, and blood glucose anomalies before symptoms appear. Samsung, Apple, and Garmin have all shipped FDA-cleared models.</p>

      <h3>2. AI-Powered Tutors</h3>
      <p>Tools like Khan Academy's Khanmigo and Google's LearnLM adapt in real-time to a student's learning pace — achieving better outcomes than many classroom environments.</p>

      <h3>3. AI Writing Assistants</h3>
      <p>Beyond grammar correction, modern writing AI helps with structure, tone consistency, and even SEO optimization — cutting professional content creation time by 60%.</p>

      <h3>4. AI Legal Assistants</h3>
      <p>Tools now review contracts, explain clauses in plain English, and flag risky language — democratizing legal access for small businesses and individuals.</p>

      <h3>5. AI Financial Planners</h3>
      <p>Apps like Cleo and YNAB now use behavioral AI to predict spending drift and suggest micro-corrections before you overspend.</p>

      <h3>6. AI Mental Health Companions</h3>
      <p>While no substitute for therapy, CBT-based AI companions have shown measurable reductions in mild anxiety in clinical trials.</p>

      <h3>7. AI Home Energy Managers</h3>
      <p>Smart systems now optimize HVAC, lighting, and appliance use around energy pricing — saving households an average of $400/year.</p>

      <h3>8. AI Recipe Generators</h3>
      <p>Input what's in your fridge, your dietary restrictions, and your calorie goals — get a personalized recipe in seconds.</p>

      <h3>9. AI Customer Service</h3>
      <p>The best brands now deploy AI that resolves 80%+ of queries without a human agent, with higher satisfaction scores than phone support.</p>

      <h3>10. AI Code Assistants</h3>
      <p>GitHub Copilot and its successors now write, review, and debug production-quality code — making software development accessible to non-programmers.</p>

      <h2>The Caution</h2>
      <p>Every tool amplifies its user's judgment. AI used by a curious, critical mind is transformative. Used mindlessly, it creates a dangerous dependency. Stay the driver, not the passenger.</p>
    `
  },
  {
    id: 3,
    slug: "5-habits-help-planet-2026",
    title: "5 Small Habits That Actually Help the Planet",
    excerpt: "Environmental action doesn't always require grand gestures. These five daily habits are scientifically proven to reduce your carbon footprint significantly.",
    category: "Environment",
    categoryColor: "#43c6ac",
    emoji: "🌿",
    gradient: "linear-gradient(135deg,#56ab2f,#a8e063)",
    date: "June 8, 2026",
    readTime: "4 min read",
    views: 8900,
    likes: 214,
    featured: false,
    trending: false,
    tags: ["environment", "sustainability", "climate", "green living"],
    author: "Maya Reddy",
    authorRole: "Environment Reporter",
    authorEmoji: "🌱",
    content: `
      <p>Climate anxiety is real. With wildfires, floods, and record-breaking temperatures filling the news, it's easy to feel powerless. But individual action, multiplied across millions, creates measurable change.</p>

      <h2>The Compound Effect of Small Choices</h2>
      <p>Research from Oxford University shows that <strong>individual dietary and consumption choices account for roughly 72% of global greenhouse gas emissions</strong> when aggregated. You have more power than you think.</p>

      <h2>5 Habits With Real Impact</h2>

      <h3>1. Eat Plant-Rich Meals Three Times a Week</h3>
      <p>You don't need to go fully vegan. Studies show that replacing meat with plant proteins just three meals per week can reduce your food-related carbon footprint by up to 35%. Start with "Meatless Monday" and build from there.</p>

      <h3>2. Switch to a Reusable Everything Kit</h3>
      <p>Coffee cup, water bottle, shopping bag, cutlery. The average person uses 156 plastic bottles and 52 plastic bags per year. A simple kit eliminates most of that single-use waste immediately.</p>

      <h3>3. Optimize Your Home Energy</h3>
      <p>Lower your thermostat by 2°C in winter. Use cold water for laundry. Switch to LED bulbs. Unplug devices not in use (phantom load accounts for 10% of home electricity bills). Together, these save ~1.5 tons of CO₂ per household per year.</p>

      <h3>4. Buy Second-Hand First</h3>
      <p>The fashion industry produces 10% of global carbon emissions. Before buying anything new, check Depop, ThredUp, or local markets. Clothing production requires enormous water and chemical resources — buying used breaks that cycle.</p>

      <h3>5. Plant Something, Anywhere</h3>
      <p>A balcony pot, a community garden plot, or a tree on your street. Plants sequester carbon, cool urban heat islands, support pollinators, and improve air quality. One mature tree absorbs ~22kg of CO₂ per year.</p>

      <h2>The Bigger Picture</h2>
      <p>Individual action alone won't solve climate change — systemic change is essential. But habits shape culture, and culture shapes policy. Every eco-conscious choice you make signals to markets and governments where demand is heading.</p>
      <p>Start with one habit this week. Then add another next month. Progress is always better than perfection.</p>
    `
  },
  {
    id: 4,
    slug: "financial-freedom-20s-guide",
    title: "The Beginner's Guide to Financial Freedom in Your 20s",
    excerpt: "Building wealth doesn't have to be complicated. Learn the core principles that can help you start investing early and live on your own terms.",
    category: "Finance",
    categoryColor: "#f7971e",
    emoji: "💸",
    gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
    date: "June 7, 2026",
    readTime: "7 min read",
    views: 24100,
    likes: 689,
    featured: false,
    trending: true,
    tags: ["finance", "investing", "money", "wealth", "savings", "budget"],
    author: "Vikram Nair",
    authorRole: "Personal Finance Writer",
    authorEmoji: "💼",
    content: `
      <p>Nobody teaches you this in school. But the financial decisions you make between ages 20 and 30 will likely have more impact on your long-term wealth than any raise, bonus, or investment later in life.</p>

      <h2>Why Your 20s Are a Wealth Superpower</h2>
      <p>The secret is compound interest — what Einstein allegedly called the "eighth wonder of the world." Money invested young doesn't just grow linearly. It grows exponentially. ₹5,000 invested at age 22 at 12% annual returns becomes <strong>₹1,47,000</strong> by age 60. The same amount invested at 40 becomes just ₹28,000.</p>

      <h2>The Five Principles</h2>

      <h3>1. Pay Yourself First (The 50-30-20 Rule)</h3>
      <p>Before you pay anyone else — landlord, Netflix, restaurants — set aside 20% of your income for savings and investment. Automate this transfer the day your salary arrives so it never reaches your spending account.</p>
      <ul>
        <li><strong>50%</strong> — Needs (rent, food, transport)</li>
        <li><strong>30%</strong> — Wants (entertainment, dining out)</li>
        <li><strong>20%</strong> — Savings & investments</li>
      </ul>

      <h3>2. Destroy High-Interest Debt First</h3>
      <p>Credit card debt at 36-42% annual interest is the single biggest wealth destroyer for young adults. No investment will consistently return more than that cost. Pay off credit cards completely before any other financial goal.</p>

      <h3>3. Build Your Emergency Fund</h3>
      <p>Before investing, accumulate 3–6 months of living expenses in a liquid account (high-yield savings, FD, or liquid mutual fund). This is your financial immune system — it prevents you from selling investments at the worst possible time.</p>

      <h3>4. Start Investing in Index Funds</h3>
      <p>You don't need to pick stocks. Index funds that track Nifty 50 or S&P 500 have outperformed 92% of actively managed funds over 20-year periods, with minimal fees. Start a SIP (Systematic Investment Plan) with as little as ₹500/month.</p>

      <h3>5. Increase Your Income, Not Just Cut Expenses</h3>
      <p>Frugality has a floor. Income has no ceiling. Invest in skills that increase your earning potential — courses, certifications, side projects. The most powerful financial move in your 20s is making yourself more valuable.</p>

      <h2>The One Thing Most People Get Wrong</h2>
      <p>They wait until they "have enough money to invest." There is no such moment. Start with whatever you have, even if it's ₹100. The habit of investing is worth more than any specific amount.</p>
      <p>Financial freedom isn't about being rich. It's about having enough — and enough is reachable for anyone who starts early and stays consistent.</p>
    `
  },
  {
    id: 5,
    slug: "keep-learning-busy-life",
    title: "How to Keep Learning When Life Gets Busy",
    excerpt: "Between work, family, and everything else, carving out time to learn feels impossible. These proven strategies make continuous learning achievable for anyone.",
    category: "Education",
    categoryColor: "#e040fb",
    emoji: "📚",
    gradient: "linear-gradient(135deg,#e040fb,#9c27b0)",
    date: "June 6, 2026",
    readTime: "4 min read",
    views: 6700,
    likes: 182,
    featured: false,
    trending: false,
    tags: ["education", "learning", "productivity", "career", "self-improvement"],
    author: "Ananya Kapoor",
    authorRole: "Education & Lifestyle Writer",
    authorEmoji: "📖",
    content: `
      <p>The world is changing faster than formal education can keep up. The skills that made you valuable five years ago may be obsolete. And yet — most of us feel like we have zero time to learn anything new.</p>

      <h2>Why "No Time" Is Mostly a Myth</h2>
      <p>Studies on time use consistently find that adults have more discretionary time than they think — often 3–5 hours per day that goes toward low-value activities (scrolling, passive TV, commuting without purpose). The issue isn't time. It's intention.</p>

      <h2>7 Strategies That Actually Work</h2>

      <h3>1. Learn in the Margins</h3>
      <p>Podcasts during commutes. Audiobooks while cooking. Flashcard apps while waiting in queues. These "dead" pockets of time add up to 45–90 minutes daily.</p>

      <h3>2. Adopt the "One Concept Per Day" Rule</h3>
      <p>Don't try to consume entire courses. Instead, commit to understanding one new concept deeply each day. Write it in a journal. Teach it to someone else. Retention shoots up to 90% when you do.</p>

      <h3>3. Use the Feynman Technique</h3>
      <p>Take any concept and explain it as if teaching a 10-year-old. Where you get stuck, that's where your understanding has gaps. Go back, fill the gap, and try again. Brutally effective.</p>

      <h3>4. Replace One Entertainment Hour With Learning</h3>
      <p>Not all of them — balance is essential. But swapping one Netflix episode per day for a structured course creates 7 hours of learning time per week. That's 365 hours per year — equal to 9 university credit hours.</p>

      <h3>5. Join a Learning Community</h3>
      <p>Accountability multiplies consistency. Discord servers, local study groups, online cohorts — people who learn together sustain the habit far longer than solo learners.</p>

      <h3>6. Use Spaced Repetition</h3>
      <p>Tools like Anki use algorithms to show you information just before you're about to forget it — making long-term retention dramatically more efficient than re-reading or highlighting.</p>

      <h3>7. Learn for Application, Not Completion</h3>
      <p>The best learners always have a project tied to their study. Don't just learn Python — build something with it. Don't just read about marketing — run an experiment. Application cements knowledge.</p>

      <h2>The Mindset Shift</h2>
      <p>Stop treating learning as something that happens in formal environments with certificates. Every conversation, every failure, every book you read is learning. Adopt the identity of a lifelong learner — and the habits follow naturally.</p>
    `
  },
  {
    id: 6,
    slug: "global-movements-reshaping-society",
    title: "The Global Movements Quietly Reshaping Society",
    excerpt: "Beneath the surface of dramatic headlines, several slow-burning movements are fundamentally changing how societies organise themselves.",
    category: "World",
    categoryColor: "#00b4d8",
    emoji: "🌐",
    gradient: "linear-gradient(135deg,#2193b0,#6dd5ed)",
    date: "June 5, 2026",
    readTime: "5 min read",
    views: 9300,
    likes: 267,
    featured: false,
    trending: false,
    tags: ["world", "society", "politics", "global", "movements"],
    author: "Rahul Sinha",
    authorRole: "World Affairs Correspondent",
    authorEmoji: "🌍",
    content: `
      <p>The biggest changes rarely announce themselves. They don't break through with a single viral moment. They accumulate — in legislation, in consumer behavior, in the quiet choices of millions of people — until one day, the world looks fundamentally different.</p>

      <h2>Five Movements to Watch</h2>

      <h3>1. The Four-Day Workweek</h3>
      <p>Once a fringe idea, it's now government policy in Iceland, Belgium, and Spain. Trials in 61 companies across 6 countries found productivity maintained or improved in 92% of participating organizations. The five-day workweek may be the next 40-hour workweek — heading for obsolescence.</p>

      <h3>2. The Degrowth Economy</h3>
      <p>A growing academic and policy movement arguing that GDP growth as a measure of societal success is fundamentally flawed. Countries like New Zealand and Bhutan have adopted "wellbeing budgets" measuring success by health, environmental stability, and community connection rather than output alone.</p>

      <h3>3. Digital Sovereignty</h3>
      <p>Nations are increasingly asserting control over data, digital infrastructure, and online speech within their borders. India's DPDP Act, the EU's AI Act, and China's data localization laws signal a fragmentation of the once "global" internet into regional digital governance zones.</p>

      <h3>4. Multigenerational Living</h3>
      <p>Rising housing costs and aging populations are reversing decades of nuclear family trends. Multi-generational households are the fastest-growing housing category in North America, Europe, and Asia. Architects, urban planners, and policymakers are scrambling to adapt.</p>

      <h3>5. The Loneliness Epidemic as Policy Priority</h3>
      <p>The UK, Japan, and Australia now have Ministers for Loneliness. Research consistently shows social isolation carries health risks equivalent to smoking 15 cigarettes per day. Community design, tech regulation, and urban planning are all being reshaped by this recognition.</p>

      <h2>What This Means For You</h2>
      <p>These aren't abstract political trends. They'll determine where you work, how your city is built, what rights you have online, and what your family structure looks like. Paying attention to them now is the difference between being swept along and being prepared.</p>
    `
  },
  {
    id: 7,
    slug: "sleep-science-optimize-2026",
    title: "The Sleep Science Every Adult Needs to Know in 2026",
    excerpt: "New research is overturning everything we thought we knew about sleep. Chrono-nutrition, light therapy, and sleep staging — here's what the science actually says.",
    category: "Health",
    categoryColor: "#6c63ff",
    emoji: "😴",
    gradient: "linear-gradient(135deg,#6c63ff,#a78bfa)",
    date: "June 4, 2026",
    readTime: "5 min read",
    views: 11200,
    likes: 398,
    featured: false,
    trending: true,
    tags: ["health", "sleep", "wellness", "science", "biohacking"],
    author: "Dr. Priya Sharma",
    authorRole: "Health & Wellness Editor",
    authorEmoji: "👩‍⚕️",
    content: `
      <p>For decades, we treated sleep as passive recovery — the brain going idle while the body rested. New neuroscience has completely dismantled this idea. Sleep is one of the most complex, active, and essential biological processes we undergo, and most of us are doing it catastrophically wrong.</p>

      <h2>What Actually Happens When You Sleep</h2>
      <p>Your brain cycles through four distinct stages approximately every 90 minutes:</p>
      <ul>
        <li><strong>Stage 1 (NREM 1)</strong> — Light drowsiness, muscle twitches, easy arousal</li>
        <li><strong>Stage 2 (NREM 2)</strong> — Body temperature drops, heart rate slows, memory consolidation begins</li>
        <li><strong>Stage 3 (Deep Sleep)</strong> — Physical restoration, immune function, hormonal release</li>
        <li><strong>Stage 4 (REM)</strong> — Emotional processing, creativity, procedural memory</li>
      </ul>
      <p>Cutting sleep short disproportionately eliminates late-cycle REM sleep — which is why chronic under-sleepers show degraded creativity, emotional regulation, and decision-making far more than just fatigue.</p>

      <h2>The Chronotype Revolution</h2>
      <p>Dr. Michael Breus's research established four biological chronotypes — Lions (early risers), Bears (mainstream), Wolves (night owls), and Dolphins (light sleepers). Fighting your chronotype doesn't make you more disciplined — it makes you chronically impaired.</p>
      <p>The 5 AM Club is not for everyone. If you're a Wolf chronotype forced into early rising, your cognitive performance is equivalent to being legally drunk during morning hours.</p>

      <h2>Five Evidence-Based Sleep Improvements</h2>
      <h3>1. Consistent Wake Time (More Than Bedtime)</h3>
      <p>Your circadian rhythm anchors to your wake time, not sleep time. A consistent wake time — even on weekends — stabilizes your entire sleep architecture within 2–3 weeks.</p>

      <h3>2. Temperature Drop</h3>
      <p>Core body temperature needs to drop 1–1.5°C to initiate sleep. Keep your bedroom 18–19°C (65–67°F). A hot shower 1–2 hours before bed paradoxically helps — the subsequent heat loss triggers the drop.</p>

      <h3>3. Morning Light, Immediately</h3>
      <p>10 minutes of bright outdoor light within 30 minutes of waking sets your circadian clock, boosts cortisol appropriately, and improves sleep quality that night. Non-negotiable for sleep optimization.</p>

      <h3>4. Limit Caffeine After Noon</h3>
      <p>Caffeine has a half-life of 5–7 hours. A 3 PM coffee still has 50% of its caffeine in your bloodstream at 8 PM, blocking adenosine receptors and delaying sleep onset by up to 40 minutes.</p>

      <h3>5. The 90-Minute Wind-Down</h3>
      <p>Begin dimming lights and reducing mental stimulation 90 minutes before sleep. Blue-light blocking glasses, physical books, and light stretching signal your brain the night cycle is beginning.</p>
    `
  },
  {
    id: 8,
    slug: "crypto-web3-reality-2026",
    title: "Web3 in 2026: What Survived the Hype and What Didn't",
    excerpt: "The crypto winter burned billions, but certain Web3 technologies emerged stronger. Here's the honest, no-hype assessment of where things actually stand.",
    category: "Technology",
    categoryColor: "#00b4d8",
    emoji: "⛓️",
    gradient: "linear-gradient(135deg,#f7971e,#00b4d8)",
    date: "June 3, 2026",
    readTime: "6 min read",
    views: 15600,
    likes: 423,
    featured: false,
    trending: false,
    tags: ["technology", "crypto", "web3", "blockchain", "finance"],
    author: "Arjun Mehta",
    authorRole: "Technology Correspondent",
    authorEmoji: "👨‍💻",
    content: `
      <p>In 2021, everyone was launching NFT projects. In 2022, the market collapsed and took $2 trillion with it. By 2024, the survivors were building quietly. Now, in 2026, we can finally tell what was signal and what was noise.</p>

      <h2>What Didn't Survive (And Why)</h2>
      <p>Most NFT projects were speculative vehicles with no utility, collapsing when new buyer demand dried up. Play-to-earn games built unsustainable token economics that cannibalized themselves. Algorithmic stablecoins proved mathematically doomed without full collateralization. These were not failures of blockchain technology — they were failures of incentive design and human greed.</p>

      <h2>What Actually Survived</h2>

      <h3>Bitcoin as Digital Gold</h3>
      <p>Despite volatility cycles, Bitcoin's role as a sovereign, censorship-resistant store of value has only strengthened. El Salvador's adoption, growing institutional ETF flows, and its use by citizens in hyperinflationary economies have cemented its position.</p>

      <h3>DeFi's Core Infrastructure</h3>
      <p>Decentralized lending, borrowing, and exchange protocols — stripped of their speculative frenzy — now process over $500B in monthly volume. Transparent, 24/7, borderless financial rails are genuinely valuable and not going away.</p>

      <h3>Blockchain for Supply Chain</h3>
      <p>Walmart, Maersk, and De Beers use blockchain to trace food safety, shipping containers, and diamond provenance. These applications work because they solve real coordination problems, not because of token speculation.</p>

      <h3>Digital Identity and Credentials</h3>
      <p>Self-sovereign identity — where you control your own verifiable credentials without a central authority — is being piloted in multiple EU countries for educational records, professional certifications, and government IDs.</p>

      <h2>The Honest Assessment</h2>
      <p>Web3 is real but niche, and mostly useful in specific contexts where trustless coordination is genuinely needed. For the average consumer in 2026, blockchain is most likely invisible infrastructure — like TCP/IP — rather than a consumer product they interact with directly.</p>
      <p>The speculative era is over. The building era is here. That's actually the best possible outcome.</p>
    `
  },
  {
    id: 9,
    slug: "urban-farming-revolution",
    title: "The Urban Farming Revolution Feeding Cities From Rooftops",
    excerpt: "From Singapore skyscrapers to London car parks, vertical farming and community gardens are reshaping how cities think about food security and sustainability.",
    category: "Environment",
    categoryColor: "#43c6ac",
    emoji: "🏙️",
    gradient: "linear-gradient(135deg,#43c6ac,#56ab2f)",
    date: "June 2, 2026",
    readTime: "4 min read",
    views: 7400,
    likes: 196,
    featured: false,
    trending: false,
    tags: ["environment", "food", "urban", "sustainability", "farming"],
    author: "Maya Reddy",
    authorRole: "Environment Reporter",
    authorEmoji: "🌱",
    content: `
      <p>Cities have historically been net importers of food — entirely dependent on distant supply chains that proved catastrophically fragile during COVID-19. A quiet revolution is now changing that dependency, one rooftop at a time.</p>

      <h2>The Scale of the Opportunity</h2>
      <p>According to FAO estimates, urban and peri-urban agriculture could supply up to 15–20% of the world's food by 2030 using currently underutilized urban spaces — rooftops, abandoned lots, car parks, and building facades. Singapore has committed to producing 30% of its own nutritional needs by 2030.</p>

      <h2>Technologies Making It Possible</h2>

      <h3>Vertical Farms</h3>
      <p>Multi-story indoor farms using LED lighting and hydroponic systems can grow leafy vegetables with 95% less water than conventional agriculture, in 1/100th the land area, and year-round regardless of weather. Companies like Bowery Farming and Plenty have proven the model at commercial scale.</p>

      <h3>Aquaponics</h3>
      <p>Closed-loop systems combining fish farming with plant cultivation. Fish waste fertilizes plants; plants filter water for fish. Zero external fertilizers, zero pesticides, dramatically reduced water use.</p>

      <h3>Community Supported Agriculture (CSA)</h3>
      <p>Subscription models connecting urban consumers directly with local producers — eliminating supermarket markups and reducing food miles. CSAs have grown 340% since 2020 in major Indian cities alone.</p>

      <h2>Social Benefits Beyond Food</h2>
      <p>Urban farms in low-income neighborhoods reduce food deserts, create employment, build community, and have documented benefits for mental health. Detroit's urban farming movement transformed abandoned lots into community assets and reduced local food insecurity by 18% in participating districts.</p>

      <h2>How to Get Involved</h2>
      <ul>
        <li>Join or start a community garden in your area</li>
        <li>Subscribe to a local CSA box</li>
        <li>Grow herbs and vegetables on your balcony or windowsill</li>
        <li>Advocate for rooftop farming provisions in local building codes</li>
      </ul>
    `
  },
  {
    id: 10,
    slug: "remote-work-future-2026",
    title: "Remote Work in 2026: The New Rules No One Told You About",
    excerpt: "The great RTO wars are settled — and the result is messier than either side predicted. Here's the definitive guide to thriving in today's hybrid work reality.",
    category: "World",
    categoryColor: "#00b4d8",
    emoji: "🏠",
    gradient: "linear-gradient(135deg,#2193b0,#6dd5ed)",
    date: "June 1, 2026",
    readTime: "5 min read",
    views: 19800,
    likes: 542,
    featured: false,
    trending: true,
    tags: ["work", "remote", "career", "productivity", "world"],
    author: "Rahul Sinha",
    authorRole: "World Affairs Correspondent",
    authorEmoji: "🌍",
    content: `
      <p>Remember when "remote work" was a pandemic-era experiment that everyone assumed would end? It didn't. But it also didn't win. What emerged instead is a fractured, employer-by-employer landscape of hybrid policies, office mandates, and fully distributed teams — and navigating it requires a whole new playbook.</p>

      <h2>Where Things Actually Stand in 2026</h2>
      <p>According to McKinsey's Global Workforce Survey 2026, approximately:</p>
      <ul>
        <li><strong>28%</strong> of knowledge workers are fully remote</li>
        <li><strong>47%</strong> are hybrid (1–4 days in office)</li>
        <li><strong>25%</strong> are fully in-office (mostly mandatory)</li>
      </ul>
      <p>The fully remote segment has stabilized rather than grown — largely because many employers discovered distributed management requires skills most managers simply don't have.</p>

      <h2>The New Rules for Thriving</h2>

      <h3>Rule 1: Visibility Is Now Your Responsibility</h3>
      <p>In an office, your effort is observed passively. Remotely, if you don't document your work, share updates, and make your contributions visible, they effectively don't exist in the eyes of management. Over-communicate, not under.</p>

      <h3>Rule 2: Your Home Setup Is a Professional Investment</h3>
      <p>Poor lighting, bad audio, and cluttered backgrounds send unconscious signals about your seriousness. A ₹15,000 home office setup — quality webcam, ring light, clean background — pays back dividends in career credibility.</p>

      <h3>Rule 3: Time Zones Are Either Your Enemy or Your Superpower</h3>
      <p>Working with a globally distributed team? Your "deep work" hours are gold — guard them. Use asynchronous communication tools (Loom, Notion, Slack threads) so collaboration doesn't require everyone in the same meeting.</p>

      <h3>Rule 4: Relationships Don't Build Themselves Remotely</h3>
      <p>Promotions and key opportunities still flow along relationship channels. Actively invest in virtual coffee chats, attend optional team events, and show up in person for critical meetings even if remote is available.</p>

      <h3>Rule 5: Sustainable Remote Work Requires Structural Boundaries</h3>
      <p>Remote burnout is real — and worse than office burnout because work never "ends" without a commute to demarcate it. A designated workspace, hard stop times, and real lunch breaks aren't luxuries. They're sustainability requirements.</p>

      <h2>The Verdict</h2>
      <p>Remote work isn't going away. But the naive "work from anywhere in your pajamas" fantasy has matured into something more nuanced. The workers thriving in 2026 have mastered the craft of distributed professional life — and they're being handsomely rewarded for it.</p>
    `
  },
  {
    id: 11,
    slug: "india-startup-ecosystem-2026",
    title: "India's Startup Boom: 10 Sectors About to Explode",
    excerpt: "With 1.4 billion people, rising internet penetration, and government support, India's startup scene is entering a golden decade. These 10 sectors are leading the charge.",
    category: "Finance",
    categoryColor: "#f7971e",
    emoji: "🚀",
    gradient: "linear-gradient(135deg,#f7971e,#e040fb)",
    date: "May 30, 2026",
    readTime: "6 min read",
    views: 22300,
    likes: 601,
    featured: false,
    trending: true,
    tags: ["finance", "india", "startup", "business", "economy"],
    author: "Vikram Nair",
    authorRole: "Personal Finance Writer",
    authorEmoji: "💼",
    content: `
      <p>India crossed 100 unicorns in 2024. Venture capital investment hit a record $15.4 billion in 2025. And yet, the most exciting chapter may still be ahead. Here are the ten sectors where the next wave of billion-dollar companies is taking shape.</p>

      <h2>1. AgriTech</h2>
      <p>With 140 million farming families and massive inefficiencies in supply chain, pricing, and credit access, AgriTech startups like DeHaat and Ninjacart are building infrastructure that could lift rural incomes by 30-40%.</p>

      <h2>2. HealthTech (Tier 2 and 3 Cities)</h2>
      <p>The real healthcare opportunity isn't in metro India. It's in the 400+ cities and 6 lakh villages where doctor-to-patient ratios remain critically low. Telehealth, diagnostic AI, and mobile health units are the play.</p>

      <h2>3. EdTech 2.0</h2>
      <p>After the collapse of over-leveraged platforms, a new generation of edtech startups focused on vocational skills, vernacular content, and measurable employment outcomes is rising from the ashes.</p>

      <h2>4. Climate Tech</h2>
      <p>India's commitment to 500GW of renewable energy by 2030 is creating massive opportunities in grid storage, EV infrastructure, green hydrogen, and carbon credit markets.</p>

      <h2>5. Fintech for Bharat</h2>
      <p>UPI has created a payments superhighway. The next layer is insurance, micro-lending, wealth management, and gold savings products tailored for India's 300 million middle-class households.</p>

      <h2>6. D2C (Direct to Consumer)</h2>
      <p>Indian consumers are increasingly brand-aware and quality-conscious. D2C brands in beauty, food, apparel, and home goods — built on authentic storytelling and community — are capturing market share from legacy FMCG giants.</p>

      <h2>7. Space Tech</h2>
      <p>Post the 2023 ISRO reforms, private space startups like Agnikul and Skyroot are building India's commercial launch capability. Earth observation data is the near-term opportunity; satellite internet is the moonshot.</p>

      <h2>8. Defence Tech</h2>
      <p>India's push for Atmanirbhar Bharat in defence is opening $15+ billion in procurement opportunities for startups building drones, cybersecurity systems, and specialized manufacturing.</p>

      <h2>9. Logistics and Supply Chain</h2>
      <p>Despite GST normalization, India's logistics cost remains 13% of GDP versus 8% in developed economies. The gap represents a multi-trillion rupee opportunity for intelligent optimization.</p>

      <h2>10. Mental Health and Wellness</h2>
      <p>Stigma is declining, awareness is rising, and insurance coverage is expanding. Platforms offering therapy, meditation, corporate wellness programs, and preventive health are hitting their growth inflection.</p>
    `
  },
  {
    id: 12,
    slug: "digital-detox-guide-2026",
    title: "The Digital Detox Guide: How to Reclaim Your Attention",
    excerpt: "Your attention is the most valuable resource you own, and Big Tech is competing aggressively for every second of it. Here's how to fight back — without going off-grid.",
    category: "Health",
    categoryColor: "#6c63ff",
    emoji: "📵",
    gradient: "linear-gradient(135deg,#ff6584,#6c63ff)",
    date: "May 28, 2026",
    readTime: "5 min read",
    views: 13700,
    likes: 389,
    featured: false,
    trending: false,
    tags: ["health", "wellness", "digital", "attention", "screen time"],
    author: "Ananya Kapoor",
    authorRole: "Education & Lifestyle Writer",
    authorEmoji: "📖",
    content: `
      <p>The average human now checks their phone 144 times per day. We spend approximately 7 hours staring at screens. Attention span — measured across multiple studies — has declined from 12 seconds in 2000 to roughly 8 seconds today. We are in an attention crisis, and most of us are willing participants.</p>

      <h2>Why This Matters More Than You Think</h2>
      <p>Your attention isn't just about productivity. It's the currency of your conscious experience. Where your attention goes, your life follows. Research from Harvard found that people spend 47% of their waking hours thinking about something other than what they're doing — and this mind-wandering was the single strongest predictor of unhappiness, above income, marital status, or health.</p>

      <h2>Understanding How Apps Are Designed</h2>
      <p>Every major social platform employs teams of behavioural engineers, many with casino backgrounds, whose sole job is to maximize "time on app." Variable reward schedules (like slot machines), infinite scroll, and algorithmic outrage are not bugs — they are deliberately engineered features. You are not using these apps. They are using you.</p>

      <h2>The 30-Day Reclamation Plan</h2>

      <h3>Week 1: Awareness</h3>
      <p>Install Screen Time (iOS) or Digital Wellbeing (Android). Don't change anything — just observe. Most people discover they use phones 4–5 hours daily, with 50+ app opens. The data is shocking enough to motivate change.</p>

      <h3>Week 2: Friction</h3>
      <p>Delete social apps from your phone and access them only from a desktop browser. Move your phone charger out of your bedroom. Turn off all notifications except calls and messages from specific people. Add app timers for high-risk apps.</p>

      <h3>Week 3: Replacement</h3>
      <p>Nature abhors a vacuum. Every hour reclaimed from screens must be filled with something intentional — or you'll reach for the phone reflexively. Identify one physical hobby, one social activity, and one creative pursuit to expand into the recovered time.</p>

      <h3>Week 4: Systems</h3>
      <p>Create phone-free zones: the dinner table, the bedroom, the first 30 minutes after waking, and the last 30 minutes before sleep. These four zones alone can recover 2–3 hours of genuine presence per day.</p>

      <h2>The Goal Is Not Abstinence</h2>
      <p>A smartphone is one of history's most powerful tools. The goal isn't to abandon it — it's to restore your agency over it. You decide when you use it, not the other way around. That shift alone changes everything.</p>
    `
  }
];

// Helper: get article by slug
function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}

// Helper: get articles by category
function getArticlesByCategory(cat) {
  if (!cat || cat === "All") return ARTICLES;
  return ARTICLES.filter(a => a.category === cat);
}

// Helper: get trending articles
function getTrendingArticles() {
  return ARTICLES.filter(a => a.trending);
}

// Helper: get related articles
function getRelatedArticles(currentId, category, limit = 3) {
  return ARTICLES.filter(a => a.id !== currentId && a.category === category).slice(0, limit);
}

// Get all categories
const CATEGORIES = ["All", ...new Set(ARTICLES.map(a => a.category))];
