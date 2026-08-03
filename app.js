/* ==========================================
   DATA: ALL 106 COGNITIVE BIASES
   ========================================== */
const BIASES = [
  // ── FILTER (🙈) ─────────────────────────
  { emoji:"👀", name:"Hick's Law", oneliner:"More options leads to harder decisions", cheat:"When presenting options (to users, to your boss, in a meeting), cap it at 3. If you have 10 features, show 3 now, rest later.", category:"filter", star:true },
  { emoji:"💼", name:"Confirmation Bias", oneliner:"People look for evidence that confirms what they think", cheat:"When doing user research, actively seek disconfirming data. When debating, steelman the other side first.", category:"filter" },
  { emoji:"👁", name:"Priming", oneliner:"Previous stimuli influence users’ decision", cheat:"The page/screen/email before a CTA matters as much as the CTA itself. Set the mood before the ask.", category:"filter" },
  { emoji:"🚛", name:"Cognitive Load", oneliner:"Total amount of mental effort required to complete a task", cheat:"Before shipping a page/email/doc, ask: ‘What can I remove and still convey the message?’ Then remove it.", category:"filter", star:true },
  { emoji:"⚓", name:"Anchoring Bias", oneliner:"Users rely heavily on the first piece of information they see", cheat:"Always present the price/metric you want first. In negotiations, make the first offer. In dashboards, lead with the strongest number.", category:"filter", star:true },
  { emoji:"👉", name:"Nudge", oneliner:"Subtle hints can affect users’ decisions", cheat:"Default the checkbox to ‘on.’ Pre-fill the form. Auto-select the recommended plan. Small nudges, massive impact.", category:"filter" },
  { emoji:"🍰", name:"Progressive Disclosure", oneliner:"Users are less overwhelmed if exposed to complex features later", cheat:"Hide advanced options behind ‘More’ or ‘Advanced.’ In onboarding, teach one thing per step.", category:"filter", star:true },
  { emoji:"🎯", name:"Fitts's Law", oneliner:"Large and close elements are easier to interact with", cheat:"Make your primary CTA the biggest, most reachable element. On mobile, put key actions in the thumb zone.", category:"filter" },
  { emoji:"🕶", name:"Banner Blindness", oneliner:"Users tune out the stuff they get repeatedly exposed to", cheat:"If your notification/banner looks the same every time, users stop seeing it. Change the format or channel periodically.", category:"filter" },
  { emoji:"🕺", name:"Decoy Effect", oneliner:"Create a new option that’s easy to discard", cheat:"3 pricing tiers: Small ($5), Medium ($15), Large ($16). The ‘Large’ makes Medium look like a steal.", category:"filter" },
  { emoji:"🖼", name:"Framing", oneliner:"The way information is presented affects decisions", cheat:"‘95% success rate’ vs. ‘5% failure rate’ — same data, opposite emotions. Always ask: ‘How am I framing this?’", category:"filter", star:true },
  { emoji:"🐠", name:"Attentional Bias", oneliner:"Users’ thoughts filter what they pay attention to", cheat:"After a user searches for ‘shoes,’ show shoe-related content. Mirror the user’s current mental context.", category:"filter" },
  { emoji:"💔", name:"Empathy Gap", oneliner:"People underestimate how emotions influence behaviors", cheat:"Don’t design flows while calm and assume stressed users will follow them. Test in realistic conditions.", category:"filter" },
  { emoji:"⛵", name:"Visual Anchors", oneliner:"Elements used to guide users’ eyes", cheat:"Use icons, images, and highlighted text to create visual ‘rest stops’ in long content.", category:"filter" },
  { emoji:"🌶", name:"Von Restorff Effect", oneliner:"People notice items that stand out more", cheat:"Make your CTA a different color from everything else. In a list, bold the most important item.", category:"filter" },
  { emoji:"🎖", name:"Visual Hierarchy", oneliner:"The order in which people perceive what they see", cheat:"Design your pages like a newspaper: headline → subhead → body. If everything is loud, nothing is.", category:"filter" },
  { emoji:"🔭", name:"Selective Attention", oneliner:"People filter out things from their environment when in focus", cheat:"Don’t rely on peripheral notifications during critical flows. Users in focus-mode see only the task.", category:"filter" },
  { emoji:"✈️", name:"Survivorship Bias", oneliner:"People neglect things that don’t make it past selection", cheat:"Don’t copy ‘what successful startups did’ without studying the failures who did the same things.", category:"filter" },
  { emoji:"🍒", name:"Juxtaposition", oneliner:"Close and similar elements are perceived as a single unit", cheat:"Put your strengths right next to the competitor’s weakness. Comparison tables leverage juxtaposition.", category:"filter" },
  { emoji:"🚦", name:"Signifiers", oneliner:"Elements that communicate what they will do", cheat:"Buttons should look clickable. Links should look tappable. If users can’t tell it’s interactive, it doesn’t exist.", category:"filter" },
  { emoji:"🎭", name:"Contrast", oneliner:"Users’ attention is drawn to higher visual weights", cheat:"Use contrast (color, size, weight) deliberately. Low contrast = ‘not important.’ High contrast = ‘look here NOW.’", category:"filter" },
  { emoji:"🚨", name:"External Trigger", oneliner:"Info on what to do next is within the prompt itself", cheat:"Push notifications, email CTAs, in-app prompts — instruction is embedded in the trigger.", category:"filter" },
  { emoji:"🎪", name:"Centre-Stage Effect", oneliner:"People tend to choose the middle option in a set", cheat:"In a 3-item layout, put your recommended option in the center.", category:"filter" },
  { emoji:"🍣", name:"Law of Proximity", oneliner:"Elements close to each other are considered related", cheat:"Group related form fields. Put labels next to inputs. Separate unrelated content with whitespace.", category:"filter" },
  { emoji:"🍬", name:"Tesler's Law", oneliner:"Simplify too much and you transfer complexity to users", cheat:"Some visible options reduce cognitive work. Oversimplifying pushes complexity into the user’s head.", category:"filter" },
  { emoji:"🧨", name:"Spark Effect", oneliner:"Users act when the effort is small", cheat:"If the next step takes <10 seconds, users will do it. ‘Just enter your email’ beats a 12-field form.", category:"filter" },
  { emoji:"🥏", name:"Feedback Loop", oneliner:"Actions need feedback communicating what happened", cheat:"Every button click should produce a visible result. Silence feels broken.", category:"filter" },
  { emoji:"😻", name:"Expectations Bias", oneliner:"People are influenced by their own expectations", cheat:"If your app looks like a note-taking app, users will try to take notes. Match the mental model.", category:"filter" },
  { emoji:"🚆", name:"Aesthetic-Usability Effect", oneliner:"Great aesthetics are perceived as easier to use", cheat:"Users forgive more bugs in a beautiful product. Aesthetics aren’t vanity — they’re usability.", category:"filter" },

  // ── MEANING (🔮) ─────────────────────────
  { emoji:"👥", name:"Social Proof", oneliner:"Users adapt behaviors based on what others do", cheat:"Show user counts, testimonials, ‘X people viewing this.’ In meetings, cite how other teams adopted the approach.", category:"meaning", star:true },
  { emoji:"🦄", name:"Scarcity", oneliner:"People value things more when they’re in limited supply", cheat:"‘Only 3 left.’ ‘Offer ends Friday.’ Use sparingly and honestly — fake scarcity destroys trust.", category:"meaning", star:true },
  { emoji:"💭", name:"Curiosity Gap", oneliner:"Users desire to seek out missing information", cheat:"‘You’re leaving money on the table’ outperforms ‘Q2 Revenue Report.’ Open a gap, then fill it.", category:"meaning" },
  { emoji:"🖲", name:"Mental Model", oneliner:"Users have a preconceived opinion of how things work", cheat:"Don’t reinvent navigation. Meet users where their brain already is.", category:"meaning", star:true },
  { emoji:"👨‍👩‍👧‍👦", name:"Familiarity Bias", oneliner:"People prefer familiar experiences", cheat:"Keep most things familiar when introducing change. Change one thing at a time. Familiarity = trust.", category:"meaning" },
  { emoji:"🕹", name:"Skeuomorphism", oneliner:"Users adapt to things that look like real-world objects", cheat:"The ‘trash can’ icon, the ‘folder’ metaphor — these map to physical world experience.", category:"meaning" },
  { emoji:"🎁", name:"Reciprocity", oneliner:"People reciprocate when they receive something", cheat:"Free trials, free templates, free advice → users feel obligated to give back. Lead with value.", category:"meaning", star:true },
  { emoji:"🤝", name:"Singularity Effect", oneliner:"Users care more about an individual than a group", cheat:"‘Maria, age 7, needs water’ raises more than ‘10M children lack water.’ Tell one user’s story.", category:"meaning" },
  { emoji:"🎰", name:"Variable Reward", oneliner:"People especially enjoy unexpected rewards", cheat:"Surprise discounts, unexpected content, random delighters. Unpredictability drives engagement.", category:"meaning" },
  { emoji:"🎉", name:"Aha! Moment", oneliner:"When new users first realize the value", cheat:"Identify your product’s magic moment and get users there ASAP. Everything before it is foreplay.", category:"meaning", star:true },
  { emoji:"🥅", name:"Goal Gradient Effect", oneliner:"Motivation increases as users near their goal", cheat:"Progress bars, ‘3 of 5 steps done,’ loyalty cards with stamps pre-filled. Show proximity to the finish.", category:"meaning" },
  { emoji:"💈", name:"Occam's Razor", oneliner:"Simple solutions are often better than complex ones", cheat:"Start with the dumbest cause when debugging. Try the simplest solution first when designing.", category:"meaning" },
  { emoji:"🎗", name:"Noble Edge Effect", oneliner:"Users prefer socially responsible companies", cheat:"Highlight social impact, charity, sustainability — but only if genuine.", category:"meaning" },
  { emoji:"🧿", name:"Hawthorne Effect", oneliner:"Users change behavior when observed", cheat:"User testing behavior ≠ real behavior. Analytics + observation together > either alone.", category:"meaning" },
  { emoji:"👼", name:"Halo Effect", oneliner:"One good trait colors the whole judgment", cheat:"A beautiful landing page makes users assume the product is beautiful too. First impressions radiate.", category:"meaning" },
  { emoji:"☎️", name:"Miller's Law", oneliner:"Working memory holds 7±2 items", cheat:"Don’t put 12 items in a nav bar. Chunk everything into groups of 5-7.", category:"meaning" },
  { emoji:"🍱", name:"Unit Bias", oneliner:"One unit feels like the optimal amount", cheat:"Serve info in unit-sized portions: one screen, one email, one card = one idea.", category:"meaning" },
  { emoji:"🌊", name:"Flow State", oneliner:"Being fully immersed and focused on a task", cheat:"Block calendar, silence notifications, single-task. Design to minimize interruptions.", category:"meaning" },
  { emoji:"👑", name:"Authority Bias", oneliner:"Authority figure opinions carry more weight", cheat:"Expert endorsements, certifications, ‘As seen in Forbes.’ Cite authoritative sources early.", category:"meaning" },
  { emoji:"🏺", name:"Pseudo-Set Framing", oneliner:"Grouped tasks are more tempting to complete", cheat:"‘2 of 5 badges done’ feels unfinished. Achievements, streaks, collections — all pseudo-sets.", category:"meaning" },
  { emoji:"🎊", name:"Group Attractiveness Effect", oneliner:"Items seem more attractive in a group", cheat:"Products look better in curated collections. Bundle features into packages.", category:"meaning" },
  { emoji:"🚰", name:"Curse of Knowledge", oneliner:"You forget others don’t know what you know", cheat:"Your users don’t know your jargon. Write like a 5th grader. Test with non-experts.", category:"meaning" },
  { emoji:"📮", name:"Self-Initiated Triggers", oneliner:"Self-set prompts are more powerful than external ones", cheat:"Let users set their own reminders, goals, deadlines. They’ll honor their own commitments.", category:"meaning" },
  { emoji:"✏️", name:"Survey Bias", oneliner:"Answers skew towards what’s socially acceptable", cheat:"Don’t trust surveys alone. Watch behavior. What people say and do are different.", category:"meaning" },
  { emoji:"🎭", name:"Cognitive Dissonance", oneliner:"Holding opposing ideas is painful", cheat:"Don’t make your product contradict the user’s self-image.", category:"meaning" },
  { emoji:"💫", name:"Feedforward", oneliner:"Knowing what to expect before acting", cheat:"Show consequences before actions. Previews, tooltips, confirmation dialogs = feedforward.", category:"meaning" },
  { emoji:"🏒", name:"Hindsight Bias", oneliner:"‘I knew it all along’ after the fact", cheat:"In postmortems, judge decisions by the info available at the time, not the outcome.", category:"meaning" },
  { emoji:"🎏", name:"Law of Similarity", oneliner:"Similar-looking elements feel related", cheat:"Consistent styles = users know ‘these are the same type.’ Break similarity to signal ‘this is different.’", category:"meaning" },
  { emoji:"🌓", name:"Law of Prägnanz", oneliner:"Ambiguity is simplified by the brain", cheat:"Complex layouts get misread. Clean ones are understood instantly.", category:"meaning" },
  { emoji:"🐘", name:"Streisand Effect", oneliner:"Censoring information increases awareness", cheat:"Don’t draw attention to things you want to hide. Quiet fixes beat public takedowns.", category:"meaning" },
  { emoji:"🔦", name:"Spotlight Effect", oneliner:"People feel more noticed than they actually are", cheat:"Users worry about looking dumb. Make error recovery private and shame-free.", category:"meaning" },
  { emoji:"🗓", name:"Fresh Start Effect", oneliner:"New beginnings motivate action", cheat:"Time launches around New Year, Mondays, month starts. ‘Start your week with…' works.", category:"meaning" },

  // ── TIME (⏰) ─────────────────────────────
  { emoji:"🧗", name:"Labor Illusion", oneliner:"People value things more when they see the work", cheat:"‘Searching 1,432 flights…' feels more valuable than instant. Show your effort.", category:"time" },
  { emoji:"🚶", name:"Default Bias", oneliner:"Users don’t change established behavior", cheat:"Set smart defaults. The default IS the choice for 80%+ of users.", category:"time", star:true },
  { emoji:"🏦", name:"Investment Loops", oneliner:"User investment drives return visits", cheat:"Every upload, customization, and creation = an investment pulling users back.", category:"time" },
  { emoji:"🕯", name:"Loss Aversion", oneliner:"Losing hurts ~2x more than gaining feels good", cheat:"‘Your trial expires in 3 days’ beats ‘Upgrade for more.’ Frame as loss prevention.", category:"time", star:true },
  { emoji:"👞", name:"Commitment & Consistency", oneliner:"Small yeses lead to big yeses", cheat:"Get a tiny commitment first — they’ll act consistently with that identity later. Foot-in-the-door.", category:"time", star:true },
  { emoji:"🏝", name:"Sunk Cost Effect", oneliner:"Reluctance to abandon investments", cheat:"Show invested effort: ‘Member for 2 years.’ ‘47 projects built.’ This keeps users.", category:"time", star:true },
  { emoji:"🌋", name:"Reactance", oneliner:"Forced behavior triggers resistance", cheat:"Aggressive popups → users rebel. Give autonomy. ‘Maybe later’ is a button, not failure.", category:"time", star:true },
  { emoji:"🔨", name:"Law of the Instrument", oneliner:"When you have a hammer, everything looks like a nail", cheat:"Check: ‘Am I using this because it’s right, or because it’s familiar?’", category:"time" },
  { emoji:"🍭", name:"Temptation Bundling", oneliner:"Pair the ‘should’ with the ‘want’", cheat:"‘Complete profile → unlock premium template.’ In life: podcasts only while exercising.", category:"time" },
  { emoji:"🎩", name:"Dunning-Kruger Effect", oneliner:"Low-knowledge people overestimate their skills", cheat:"Beginners need guardrails. Experts need reminders of their actual progress.", category:"time" },
  { emoji:"🔍", name:"Discoverability", oneliner:"Features users can’t find don’t exist", cheat:"Ask 5 users to find feature X. If they can’t, it’s a discoverability failure.", category:"time" },
  { emoji:"🐍", name:"Second-Order Effect", oneliner:"Consequences of consequences", cheat:"Before shipping, ask ‘And then what?’ twice. Notifications → annoyance → disable all → lost channel.", category:"time" },
  { emoji:"🌛", name:"Decision Fatigue", oneliner:"Too many decisions degrades quality", cheat:"Put the most important CTA early. Don’t make users configure 15 options before starting.", category:"time" },
  { emoji:"🥽", name:"Observer-Expectancy Effect", oneliner:"Researcher biases influence outcomes", cheat:"Run blind tests. Let someone else moderate. Your hope for success skews results.", category:"time" },
  { emoji:"🌱", name:"Weber's Law", oneliner:"Small incremental changes go unnoticed", cheat:"Roll out changes gradually. Users adapt to small shifts but revolt at big ones.", category:"time" },
  { emoji:"🎈", name:"Parkinson's Law", oneliner:"Work expands to fill the time given", cheat:"Set tight (but fair) deadlines. ‘Due Friday’ gets done Friday. ‘Due whenever’ = never.", category:"time" },
  { emoji:"🌤", name:"Affect Heuristic", oneliner:"Current emotions cloud judgment", cheat:"Don’t make big decisions when tired or emotional. Sleep on it.", category:"time" },
  { emoji:"📉", name:"Hyperbolic Discounting", oneliner:"Immediate benefits beat bigger future gains", cheat:"Offer instant rewards. ‘Discount NOW’ beats ‘Save money over 12 months.’", category:"time" },
  { emoji:"⌚", name:"Chronoception", oneliner:"Perception of time is subjective", cheat:"Waiting feels 3x longer. Use loading animations, skeleton screens, progress indicators.", category:"time" },
  { emoji:"💳", name:"Cashless Effect", oneliner:"Invisible money feels like not-money", cheat:"One-click purchases exploit this. Ethical design: show real dollar amounts.", category:"time" },
  { emoji:"🌚", name:"Self-Serving Bias", oneliner:"Credit for wins, blame others for losses", cheat:"When things go wrong, don’t let users blame themselves. Show it’s the system’s fault.", category:"time" },
  { emoji:"🥬", name:"Pareto Principle", oneliner:"80% of effects from 20% of causes", cheat:"Find the 20% that drives 80% of value. Focus relentlessly there.", category:"time" },
  { emoji:"🔫", name:"Backfire Effect", oneliner:"Challenged beliefs get stronger", cheat:"Don’t argue head-on. Lead with empathy, share info gently.", category:"time" },
  { emoji:"🌈", name:"False Consensus Effect", oneliner:"Overestimating how much others agree with you", cheat:"Your team’s agreement ≠ user agreement. Test assumptions with real data.", category:"time" },
  { emoji:"🚋", name:"Bandwagon Effect", oneliner:"Adoption grows with social proof of adoption", cheat:"‘Join 50,000+ teams’ / ‘Trending now’ / ‘Most popular.’ Show the crowd.", category:"time" },
  { emoji:"🧙", name:"Barnum-Forer Effect", oneliner:"Generic descriptions feel personally specific", cheat:"Personalized recommendations feel personal even when algorithmic. Personalize messaging.", category:"time" },
  { emoji:"🛋", name:"IKEA Effect", oneliner:"Self-assembly = disproportionate value", cheat:"Let users customize their workspace. Partial creation → attachment.", category:"time" },
  { emoji:"🧚", name:"Planning Fallacy", oneliner:"We underestimate how long things take", cheat:"Multiply estimates by 1.5x. Plan for realistic, not optimistic.", category:"time" },

  // ── MEMORY (💾) ──────────────────────────
  { emoji:"🏕", name:"Provide Exit Points", oneliner:"Graceful exits create positive last memories", cheat:"‘Continue later’ buttons, save-draft. Don’t trap users. Graceful exits = return visits.", category:"memory" },
  { emoji:"🎢", name:"Peak-End Rule", oneliner:"Experiences judged by peak and ending", cheat:"Invest in one WOW moment and a polished goodbye. A great peak + ending beats uniformly ‘okay.’", category:"memory", star:true },
  { emoji:"👅", name:"Sensory Appeal", oneliner:"Multi-sensory = more engaging", cheat:"Haptic feedback, satisfying animations, ‘pop’ sounds. More senses = stickier memory.", category:"memory" },
  { emoji:"🧩", name:"Zeigarnik Effect", oneliner:"Incomplete tasks are remembered better", cheat:"‘You’re 80% done.’ Auto-play next episode. Open loops create return visits.", category:"memory", star:true },
  { emoji:"🧤", name:"Endowment Effect", oneliner:"Ownership inflates perceived value", cheat:"Free trials with data → users don’t want to lose THEIR data. Switching cost soars.", category:"memory", star:true },
  { emoji:"🛍", name:"Chunking", oneliner:"Grouped info is remembered better", cheat:"555-867-5309 not 5558675309. Group features by categories. Use headers and sections.", category:"memory", star:true },
  { emoji:"💚", name:"Delighters", oneliner:"Unexpected pleasures are unforgettable", cheat:"Easter eggs, playful error pages, surprise confetti. Low-cost, high-impact memory anchors.", category:"memory" },
  { emoji:"💛", name:"Internal Trigger", oneliner:"Emotions prompt habitual actions", cheat:"Bored → Instagram. Anxious → email. If your product answers a feeling, you win.", category:"memory" },
  { emoji:"📸", name:"Picture Superiority Effect", oneliner:"Pictures remembered 6x better than words", cheat:"Use visuals, diagrams, screenshots. If you can show it, don’t say it.", category:"memory", star:true },
  { emoji:"📌", name:"Method of Loci", oneliner:"Location enhances memory", cheat:"Keep things in consistent UI locations. Users build mental maps. Moving things destroys memory.", category:"memory" },
  { emoji:"🧭", name:"Shaping", oneliner:"Reinforce approximations toward target behavior", cheat:"Don’t wait for full task completion to celebrate. ‘Great start!’ on step 1 builds behavior.", category:"memory" },
  { emoji:"💾", name:"Recognition Over Recall", oneliner:"Recognizing is easier than remembering", cheat:"Show options instead of blank inputs. Autocomplete, dropdowns, recent items.", category:"memory" },
  { emoji:"🏰", name:"Storytelling Effect", oneliner:"Stories are 22x more memorable than facts", cheat:"Don’t say ‘99.9% uptime.’ Say ‘When Sarah’s store went viral, traffic surged 50x — site didn’t flinch.’", category:"memory" },
  { emoji:"👹", name:"Negativity Bias", oneliner:"Negative events are 5x more vivid", cheat:"One bad support interaction = permanent brand damage. Over-invest in error recovery.", category:"memory" },
  { emoji:"⏰", name:"Availability Heuristic", oneliner:"Recent info dominates judgment", cheat:"Your last impression IS your brand. Yesterday’s bug outweighs last month’s great onboarding.", category:"memory" },
  { emoji:"🌌", name:"Spacing Effect", oneliner:"Spaced study beats cramming", cheat:"Don’t teach everything day 1. Drip onboarding over weeks. Review this guide periodically.", category:"memory" },
  { emoji:"🏁", name:"Serial Position Effect", oneliner:"First and last items are best remembered", cheat:"Put your most important benefit first and last in any list. The middle is a memory black hole.", category:"memory" },
];

/* ==========================================
   STAGE META
   ========================================== */
const STAGES = {
  filter:  {
    label:"Filter",
    color:"var(--c-filter)",
    question:"What do I notice?",
    desc:"The brain aggressively filters information, keeping only what seems relevant. Users miss important things constantly.",
    icon:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  },
  meaning: {
    label:"Meaning",
    color:"var(--c-meaning)",
    question:"What does it mean?",
    desc:"The brain fills gaps with assumptions, social cues, and stories to decide trust and value.",
    icon:'<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  },
  time: {
    label:"Time",
    color:"var(--c-time)",
    question:"Should I act now?",
    desc:"Even when users understand, they must decide to act now, later, or never. Effort, loss, and momentum dominate.",
    icon:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  },
  memory: {
    label:"Memory",
    color:"var(--c-memory)",
    question:"What will I remember?",
    desc:"The brain selectively stores fragments. What’s remembered shapes whether users return or forget you.",
    icon:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  },
};

function createStageIcon(stageKey, size = 14) {
  const stage = STAGES[stageKey];
  const wrap = document.createElement('span');
  wrap.className = 'stage-icon';
  wrap.setAttribute('aria-hidden', 'true');
  if (stage?.color) wrap.style.color = stage.color;
  wrap.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${stage?.icon || ''}</svg>`;
  return wrap;
}

/* ==========================================
   MASTERY LEVELS
   ========================================== */
const LEVELS = [
  { id: 'novice',        name: 'Novice',        emoji: '🌱', min: 0,   max: 19,  blurb: 'Getting oriented with the core ideas.' },
  { id: 'basic',         name: 'Basic',         emoji: '📘', min: 20,  max: 39,  blurb: 'Building a solid foundation of biases.' },
  { id: 'intermediate',  name: 'Intermediate',  emoji: '🧭', min: 40,  max: 59,  blurb: 'Connecting patterns across decision stages.' },
  { id: 'advanced',      name: 'Advanced',      emoji: '⚡', min: 60,  max: 79,  blurb: 'Applying principles with real confidence.' },
  { id: 'pro',           name: 'Pro',           emoji: '🎯', min: 80,  max: 99,  blurb: 'Near-complete coverage of the catalog.' },
  { id: 'master',        name: 'Master',        emoji: '🏆', min: 100, max: 106, blurb: 'Full mastery of the bias library.' },
];

function getLevelForCount(count) {
  const total = BIASES.length;
  const n = Math.max(0, Math.min(count, total));
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (n >= LEVELS[i].min) return LEVELS[i];
  }
  return LEVELS[0];
}

function getNextLevel(level) {
  const idx = LEVELS.findIndex(l => l.id === level.id);
  return idx >= 0 && idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

function getLevelProgress(count = learned.length) {
  const total = BIASES.length;
  const safeCount = Math.max(0, Math.min(count, total));
  const current = getLevelForCount(safeCount);
  const next = getNextLevel(current);
  const tierStart = current.min;
  const tierEnd = next ? next.min : total;
  const tierSize = Math.max(1, tierEnd - tierStart);
  const inTier = Math.max(0, Math.min(safeCount - tierStart, tierSize));
  const remaining = next ? Math.max(0, next.min - safeCount) : 0;
  const pctToNext = next ? Math.round((inTier / tierSize) * 100) : 100;
  const overallPct = total ? Math.round((safeCount / total) * 100) : 0;
  return { current, next, inTier, tierSize, remaining, pctToNext, overallPct, count: safeCount, total };
}

function getStageBreakdown() {
  return Object.keys(STAGES).map(key => {
    const items = BIASES.filter(b => getCategory(b) === key);
    const learnedCount = items.filter(b => learned.includes(b.name)).length;
    return {
      key,
      label: STAGES[key].label,
      color: STAGES[key].color,
      learned: learnedCount,
      total: items.length,
      pct: items.length ? Math.round((learnedCount / items.length) * 100) : 0,
    };
  });
}

/* ==========================================
   STATE
   ========================================== */
const STORAGE_KEYS = {
  learned: 'bm_learned',
  explored: 'bm_explored',
  review: 'bm_review',
  notes: 'bm_notes',
  streak: 'bm_streak',
};

const CATEGORY_OVERRIDES = {
  "Miller's Law": 'memory',
  'Unit Bias': 'memory',
  'Flow State': 'memory',
  'Law of Similarity': 'memory',
  'Law of Prägnanz': 'memory',
  'Familiarity Bias': 'memory',
  'Skeuomorphism': 'memory',
  'Investment Loops': 'memory',
  'IKEA Effect': 'memory',
  'Aesthetic-Usability Effect': 'memory',
  'Visual Anchors': 'memory',
};

let learned = JSON.parse(localStorage.getItem(STORAGE_KEYS.learned) || '[]');
let explored = JSON.parse(localStorage.getItem(STORAGE_KEYS.explored) || '[]');
let reviewState = JSON.parse(localStorage.getItem(STORAGE_KEYS.review) || '{}');
let notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.notes) || '{}');
let streakState = JSON.parse(localStorage.getItem(STORAGE_KEYS.streak) || '{"count":0,"lastDate":""}');

let currentFilter = 'all';
let currentView = 'grid';
let currentCmdResults = [];
let cmdSelectedIndex = -1;
let currentDetailBias = null;
let noteSaveTimer = null;
let notesDirty = false;
let quizState = {
  queue: [],
  mode: 'due',
  index: 0,
  current: null,
};

const DAY_MS = 24 * 60 * 60 * 1000;

function saveLearned() { localStorage.setItem(STORAGE_KEYS.learned, JSON.stringify(learned)); }
function saveExplored() { localStorage.setItem(STORAGE_KEYS.explored, JSON.stringify(explored)); }
function saveReviewState() { localStorage.setItem(STORAGE_KEYS.review, JSON.stringify(reviewState)); }
function saveNotes() { localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes)); }
function saveStreak() { localStorage.setItem(STORAGE_KEYS.streak, JSON.stringify(streakState)); }

function getDateKey(ts = Date.now()) {
  return new Date(ts).toISOString().slice(0, 10);
}

function getDayStart(ts = Date.now()) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function getCategory(bias) {
  return CATEGORY_OVERRIDES[bias.name] || bias.category;
}

/* ==========================================
   URL STATE SYNC
   ========================================== */
function announce(msg) {
  const region = document.getElementById('liveRegion');
  if (!region) return;
  region.textContent = msg;
  setTimeout(() => { region.textContent = ''; }, 1000);
}

function syncURL() {
  const params = new URLSearchParams();
  if (currentFilter !== 'all') params.set('filter', currentFilter);
  if (currentView !== 'grid') params.set('view', currentView);
  if (currentDetailBias) params.set('detail', currentDetailBias.name);
  const hash = params.toString() ? `#${params.toString()}` : '';
  if (hash !== location.hash) {
    history.replaceState(null, '', hash || location.pathname + location.search);
  }
}

function readURL() {
  const hash = location.hash.slice(1);
  if (!hash) return;
  const params = new URLSearchParams(hash);
  const filter = params.get('filter');
  const view = params.get('view');
  const detail = params.get('detail');
  return { filter, view, detail };
}

function escapeHTML(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getBiasByName(name) {
  return BIASES.find(b => b.name === name);
}

function dueToday(name) {
  const item = reviewState[name];
  if (!item || !item.dueAt) return false;
  return item.dueAt <= Date.now();
}

function getDueBiases() {
  return learned
    .map(name => getBiasByName(name))
    .filter(Boolean)
    .filter(b => dueToday(b.name))
    .sort((a, b) => (reviewState[a.name]?.dueAt || 0) - (reviewState[b.name]?.dueAt || 0));
}

function getRetentionPct() {
  if (!learned.length) return 0;
  const retained = learned.filter(name => (reviewState[name]?.intervalDays || 0) >= 7).length;
  return Math.round((retained / learned.length) * 100);
}

function getStreakCount() {
  const dueDoneToday = Object.values(reviewState).some(v => v?.lastReviewedDate === getDateKey());
  if (!dueDoneToday) return streakState.count || 0;
  return Math.max(streakState.count || 0, 1);
}

function markExplored(name) {
  if (!explored.includes(name)) {
    explored.push(name);
    saveExplored();
  }
}

function ensureReviewSeed(name) {
  if (!reviewState[name]) {
    reviewState[name] = {
      intervalDays: 1,
      dueAt: getDayStart() + DAY_MS,
      lastReviewedDate: '',
    };
    saveReviewState();
  }
}

function scheduleReview(name, grade) {
  const prev = reviewState[name] || { intervalDays: 1, dueAt: Date.now() };
  let next = prev.intervalDays || 1;

  if (grade === 'again') next = 1;
  if (grade === 'hard') next = Math.max(1, Math.ceil(next * 1.3));
  if (grade === 'good') next = Math.max(2, Math.ceil(next * 2.1));
  if (grade === 'easy') next = Math.max(4, Math.ceil(next * 3.2));

  const dueAt = getDayStart() + (next * DAY_MS);
  reviewState[name] = {
    intervalDays: next,
    dueAt,
    lastReviewedDate: getDateKey(),
  };
  saveReviewState();

  // Track a simple day streak for completed reviews.
  const today = getDateKey();
  const yesterday = getDateKey(Date.now() - DAY_MS);
  if (streakState.lastDate === today) return;
  if (streakState.lastDate === yesterday) {
    streakState.count = (streakState.count || 0) + 1;
  } else {
    streakState.count = 1;
  }
  streakState.lastDate = today;
  saveStreak();
}

function syncLearnedUI(name) {
  const isLearned = learned.includes(name);
  const card = document.querySelector(`.bias-card[data-name="${CSS.escape(name)}"]`);
  if (card) card.classList.toggle('learned', isLearned);

  if (currentDetailBias?.name === name) {
    const btn = document.getElementById('learnBtn');
    if (btn) {
      btn.textContent = isLearned ? '✓ Marked as Learned' : '✓ Mark as Learned';
      btn.classList.toggle('is-learned', isLearned);
    }
  }
}

function toggleLearned(name) {
  const wasLearned = learned.includes(name);
  if (wasLearned) {
    learned = learned.filter(n => n !== name);
    delete reviewState[name];
  } else {
    learned.push(name);
    ensureReviewSeed(name);
    triggerConfetti();
    playSuccessSound();
  }
  saveLearned();
  saveReviewState();
  updateProgress();
  updateCounts();

  if (currentFilter === 'learned' || currentFilter === 'unlearned') {
    renderGrid();
  } else {
    syncLearnedUI(name);
  }

  if (currentFilter === 'mastery') renderMasteryView();
}

/* ==========================================
   PROGRESS
   ========================================== */
function updateProgress() {
  const progress = getLevelProgress();
  const { current, next, remaining, overallPct, count, total } = progress;

  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = `${overallPct}%`;

  const countEl = document.getElementById('progressNumber');
  if (countEl) countEl.textContent = count;

  const totalEl = document.getElementById('progressTotal');
  if (totalEl) totalEl.textContent = total;

  const levelEl = document.getElementById('progressLevel');
  if (levelEl) levelEl.textContent = `${current.emoji} ${current.name}`;

  const nextEl = document.getElementById('progressNext');
  if (nextEl) {
    nextEl.textContent = next
      ? `${remaining} to ${next.name}`
      : 'Max level';
  }

  const trigger = document.getElementById('progressTrigger');
  if (trigger) {
    trigger.setAttribute(
      'aria-label',
      `Mastery progress: ${current.name}. ${count} of ${total} learned. Open details`
    );
  }

  if (document.getElementById('progressOverlay')?.classList.contains('open')) {
    renderProgressModal();
  }

  announce(`Progress: ${count} of ${total} biases learned. Level ${current.name}`);
}

function renderProgressModal() {
  const content = document.getElementById('progressModalContent');
  if (!content) return;

  const progress = getLevelProgress();
  const { current, next, remaining, pctToNext, overallPct, count, total } = progress;
  const stages = getStageBreakdown();

  content.replaceChildren();

  // Top row: current level + next level side by side
  const top = document.createElement('div');
  top.className = 'pm-top';

  const header = document.createElement('div');
  header.className = 'pm-header';

  const kicker = document.createElement('div');
  kicker.className = 'pm-kicker';
  kicker.textContent = 'Mastery Progress';
  header.appendChild(kicker);

  const titleRow = document.createElement('div');
  titleRow.className = 'pm-title-row';
  const emoji = document.createElement('span');
  emoji.className = 'pm-emoji';
  emoji.textContent = current.emoji;
  emoji.setAttribute('aria-hidden', 'true');
  titleRow.appendChild(emoji);
  const title = document.createElement('h2');
  title.className = 'pm-title';
  title.id = 'progressModalTitle';
  title.textContent = current.name;
  titleRow.appendChild(title);
  header.appendChild(titleRow);

  const subtitle = document.createElement('p');
  subtitle.className = 'pm-subtitle';
  subtitle.textContent = current.blurb;
  header.appendChild(subtitle);

  const stats = document.createElement('div');
  stats.className = 'pm-stats';
  const learnedStat = document.createElement('div');
  learnedStat.className = 'pm-stat';
  learnedStat.innerHTML = `<strong>${count}</strong> / ${total} learned`;
  stats.appendChild(learnedStat);
  const pctStat = document.createElement('div');
  pctStat.className = 'pm-stat';
  pctStat.innerHTML = `<strong>${overallPct}%</strong> complete`;
  stats.appendChild(pctStat);
  header.appendChild(stats);
  top.appendChild(header);

  const nextSection = document.createElement('div');
  nextSection.className = 'pm-section pm-next-section';
  const nextTitle = document.createElement('div');
  nextTitle.className = 'pm-section-title';
  nextTitle.textContent = next ? 'Next Level' : 'Status';
  nextSection.appendChild(nextTitle);

  const nextCard = document.createElement('div');
  nextCard.className = 'pm-next-card';
  const nextTop = document.createElement('div');
  nextTop.className = 'pm-next-top';
  const nextLabel = document.createElement('div');
  nextLabel.className = 'pm-next-label';
  nextLabel.textContent = next ? `${next.emoji} ${next.name}` : `${current.emoji} Master complete`;
  nextTop.appendChild(nextLabel);
  const nextMeta = document.createElement('div');
  nextMeta.className = 'pm-next-meta';
  nextMeta.textContent = next ? `${remaining} left · ${pctToNext}%` : '100%';
  nextTop.appendChild(nextMeta);
  nextCard.appendChild(nextTop);

  const nextTrack = document.createElement('div');
  nextTrack.className = 'pm-next-track';
  const nextFill = document.createElement('div');
  nextFill.className = 'pm-next-fill';
  nextFill.style.width = `${pctToNext}%`;
  nextTrack.appendChild(nextFill);
  nextCard.appendChild(nextTrack);

  const nextBlurb = document.createElement('p');
  nextBlurb.className = 'pm-next-blurb';
  nextBlurb.textContent = next
    ? `Learn ${remaining} more bias${remaining === 1 ? '' : 'es'} to reach ${next.name}.`
    : 'You’ve reached the top of the mastery ladder.';
  nextCard.appendChild(nextBlurb);
  nextSection.appendChild(nextCard);
  top.appendChild(nextSection);
  content.appendChild(top);

  // Horizontal roadmap
  const roadSection = document.createElement('div');
  roadSection.className = 'pm-section';
  const roadTitle = document.createElement('div');
  roadTitle.className = 'pm-section-title';
  roadTitle.textContent = 'Level Roadmap';
  roadSection.appendChild(roadTitle);

  const roadmap = document.createElement('div');
  roadmap.className = 'pm-roadmap';
  LEVELS.forEach(level => {
    const isCurrent = level.id === current.id;
    const isUnlocked = count >= level.min;
    const isDone = !isCurrent && count > level.max;
    const card = document.createElement('div');
    card.className = 'pm-level'
      + (isCurrent ? ' is-current' : '')
      + (isDone ? ' is-done' : '')
      + (!isUnlocked ? ' is-locked' : '');

    const icon = document.createElement('div');
    icon.className = 'pm-level-icon';
    icon.textContent = level.emoji;
    icon.setAttribute('aria-hidden', 'true');
    card.appendChild(icon);

    const main = document.createElement('div');
    main.className = 'pm-level-main';
    const name = document.createElement('div');
    name.className = 'pm-level-name';
    name.textContent = level.name;
    main.appendChild(name);
    const range = document.createElement('div');
    range.className = 'pm-level-range';
    const maxLabel = Math.min(level.max, total);
    range.textContent = level.id === 'master'
      ? `${level.min}–${total}`
      : `${level.min}–${maxLabel}`;
    main.appendChild(range);
    card.appendChild(main);

    const status = document.createElement('div');
    status.className = 'pm-level-status';
    if (isCurrent) status.textContent = 'Current';
    else if (isDone) status.textContent = 'Done';
    else status.textContent = 'Locked';
    card.appendChild(status);

    roadmap.appendChild(card);
  });
  roadSection.appendChild(roadmap);
  content.appendChild(roadSection);

  // Horizontal stage cards
  const stageSection = document.createElement('div');
  stageSection.className = 'pm-section';
  const stageTitle = document.createElement('div');
  stageTitle.className = 'pm-section-title';
  stageTitle.textContent = 'By Decision Stage';
  stageSection.appendChild(stageTitle);

  const stageList = document.createElement('div');
  stageList.className = 'pm-stage-list';
  stages.forEach(stage => {
    const card = document.createElement('div');
    card.className = 'pm-stage-row';

    const label = document.createElement('div');
    label.className = 'pm-stage-label';
    const icon = createStageIcon(stage.key, 14);
    icon.classList.add('pm-stage-icon');
    label.appendChild(icon);
    const name = document.createElement('span');
    name.className = 'pm-stage-name';
    name.textContent = stage.label;
    label.appendChild(name);
    card.appendChild(label);

    const track = document.createElement('div');
    track.className = 'pm-stage-track';
    const fill = document.createElement('div');
    fill.className = 'pm-stage-fill';
    fill.style.setProperty('--fill', stage.color);
    fill.style.width = `${stage.pct}%`;
    track.appendChild(fill);
    card.appendChild(track);

    const countEl = document.createElement('div');
    countEl.className = 'pm-stage-count';
    countEl.textContent = `${stage.learned}/${stage.total}`;
    card.appendChild(countEl);

    stageList.appendChild(card);
  });
  stageSection.appendChild(stageList);
  content.appendChild(stageSection);
}

function openProgressModal() {
  renderProgressModal();
  const overlay = document.getElementById('progressOverlay');
  const trigger = document.getElementById('progressTrigger');
  overlay.classList.add('open');
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.getElementById('progressModalClose');
  if (closeBtn) closeBtn.focus();
}

function closeProgressModal() {
  const overlay = document.getElementById('progressOverlay');
  if (!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  const trigger = document.getElementById('progressTrigger');
  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }
  if (!document.getElementById('detailOverlay').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function updateCounts() {
  document.getElementById('countAll').textContent = BIASES.length;
  document.getElementById('countFilter').textContent = BIASES.filter(b => getCategory(b) === 'filter').length;
  document.getElementById('countMeaning').textContent = BIASES.filter(b => getCategory(b) === 'meaning').length;
  document.getElementById('countTime').textContent = BIASES.filter(b => getCategory(b) === 'time').length;
  document.getElementById('countMemory').textContent = BIASES.filter(b => getCategory(b) === 'memory').length;
  document.getElementById('countStar').textContent = BIASES.filter(b => b.star).length;
  document.getElementById('countLearned').textContent = learned.length;
  document.getElementById('countUnlearned').textContent = BIASES.length - learned.length;
  document.getElementById('countDue').textContent = getDueBiases().length;
}

/* ==========================================
   RENDER GRID
   ========================================== */
function getFiltered() {
  if (currentFilter === 'star') return BIASES.filter(b => b.star);
  if (currentFilter === 'learned') return BIASES.filter(b => learned.includes(b.name));
  if (currentFilter === 'unlearned') return BIASES.filter(b => !learned.includes(b.name));
  if (['filter', 'meaning', 'time', 'memory'].includes(currentFilter)) {
    return BIASES.filter(b => getCategory(b) === currentFilter);
  }
  return BIASES;
}

function renderGrid() {
  const list = getFiltered();
  const grid = document.getElementById('biasGrid');
  const empty = document.getElementById('emptyState');

  if (!list.length) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  grid.style.display = '';
  empty.style.display = 'none';

  grid.replaceChildren();
  list.forEach((b, i) => {
    const isLearned = learned.includes(b.name);
    const category = getCategory(b);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bias-card' + (isLearned ? ' learned' : '');
    btn.dataset.cat = category;
    btn.dataset.name = b.name;
    btn.style.animationDelay = Math.min(i * 0.025, 0.6) + 's';

    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'card-emoji';
    emojiDiv.textContent = b.emoji;
    btn.appendChild(emojiDiv);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'card-info';

    const nameRow = document.createElement('div');
    nameRow.className = 'card-name-row';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'card-name';
    nameSpan.textContent = b.name;
    nameRow.appendChild(nameSpan);
    if (b.star) {
      const starSpan = document.createElement('span');
      starSpan.className = 'card-star';
      starSpan.textContent = '⭐';
      nameRow.appendChild(starSpan);
    }
    infoDiv.appendChild(nameRow);

    const oneliner = document.createElement('p');
    oneliner.className = 'card-oneliner';
    oneliner.textContent = b.oneliner;
    infoDiv.appendChild(oneliner);

    const tag = document.createElement('span');
    tag.className = 'card-tag';
    tag.textContent = category;
    infoDiv.appendChild(tag);

    btn.appendChild(infoDiv);

    btn.addEventListener('click', () => {
      const bias = getBiasByName(b.name);
      if (bias) openDetail(bias);
    });

    grid.appendChild(btn);
  });

  const titles = {
    all: 'All Biases',
    filter: 'Filter Stage',
    meaning: 'Meaning Stage',
    time: 'Time Stage',
    memory: 'Memory Stage',
    star: 'Must-Know Biases',
    learned: 'Learned',
    unlearned: 'Not Yet Learned',
  };
  document.getElementById('topbarTitle').textContent = titles[currentFilter] || 'All Biases';
  document.getElementById('topbarCount').textContent = `${list.length} principle${list.length !== 1 ? 's' : ''}`;
  announce(`${titles[currentFilter] || 'All Biases'}: ${list.length} principle${list.length !== 1 ? 's' : ''}`);
}

function getRelatedBiases(bias, max = 3) {
  const sourceWords = new Set((`${bias.name} ${bias.oneliner}`).toLowerCase().split(/[^a-z0-9]+/g).filter(Boolean));
  const scored = BIASES
    .filter(b => b.name !== bias.name)
    .map(candidate => {
      let score = 0;
      if (getCategory(candidate) === getCategory(bias)) score += 3;
      if (candidate.star) score += 1;
      const words = (`${candidate.name} ${candidate.oneliner}`).toLowerCase().split(/[^a-z0-9]+/g).filter(Boolean);
      words.forEach(w => {
        if (sourceWords.has(w)) score += 0.3;
      });
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map(x => x.candidate);
  return scored;
}

/* ==========================================
   DETAIL PANEL
   ========================================== */
function openDetail(bias) {
  currentDetailBias = bias;
  markExplored(bias.name);
  const stage = STAGES[getCategory(bias)];
  const isLearned = learned.includes(bias.name);
  const related = getRelatedBiases(bias);
  const note = notes[bias.name] || '';

  const content = document.getElementById('detailContent');
  content.replaceChildren();

  // Stage color bar
  const stageBar = document.createElement('div');
  stageBar.className = 'detail-stage-bar';
  stageBar.style.background = stage.color;
  content.appendChild(stageBar);

  // Emoji
  const emojiEl = document.createElement('div');
  emojiEl.className = 'detail-emoji';
  emojiEl.textContent = bias.emoji;
  content.appendChild(emojiEl);

  // Name
  const nameEl = document.createElement('h2');
  nameEl.className = 'detail-name';
  nameEl.textContent = bias.name;
  content.appendChild(nameEl);

  // "What It Means" section
  const meaningSection = document.createElement('div');
  meaningSection.className = 'detail-section';
  const meaningTitle = document.createElement('div');
  meaningTitle.className = 'detail-section-title';
  meaningTitle.textContent = 'What It Means';
  meaningSection.appendChild(meaningTitle);
  const meaningText = document.createElement('p');
  meaningText.className = 'detail-text';
  meaningText.textContent = bias.oneliner;
  meaningSection.appendChild(meaningText);
  content.appendChild(meaningSection);

  // "Daily Cheat Code" section
  const cheatSection = document.createElement('div');
  cheatSection.className = 'detail-section';
  const cheatTitle = document.createElement('div');
  cheatTitle.className = 'detail-section-title';
  cheatTitle.textContent = 'Daily Cheat Code';
  cheatSection.appendChild(cheatTitle);
  const cheatBox = document.createElement('div');
  cheatBox.className = 'detail-cheat';
  cheatBox.textContent = bias.cheat;
  cheatSection.appendChild(cheatBox);
  content.appendChild(cheatSection);

  // "Stage" section
  const stageSection = document.createElement('div');
  stageSection.className = 'detail-section';
  const stageTitle = document.createElement('div');
  stageTitle.className = 'detail-section-title';
  stageTitle.textContent = `Stage: ${stage.label} \u2014 ${stage.question}`;
  stageSection.appendChild(stageTitle);
  const stageCard = document.createElement('div');
  stageCard.className = 'detail-stage-card';
  const stageDesc = document.createElement('p');
  stageDesc.className = 'detail-stage-desc';
  stageDesc.textContent = stage.desc;
  stageCard.appendChild(stageDesc);
  stageSection.appendChild(stageCard);
  content.appendChild(stageSection);

  // "Related Biases" section
  const relatedSection = document.createElement('div');
  relatedSection.className = 'detail-section';
  const relatedTitle = document.createElement('div');
  relatedTitle.className = 'detail-section-title';
  relatedTitle.textContent = 'Related Biases';
  relatedSection.appendChild(relatedTitle);
  const relatedList = document.createElement('div');
  relatedList.className = 'detail-related-list';
  related.forEach(r => {
    const relBtn = document.createElement('button');
    relBtn.className = 'detail-related-item';
    relBtn.dataset.related = r.name;
    relBtn.textContent = r.name;
    relBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const next = getBiasByName(r.name);
      if (next) openDetail(next);
    });
    relatedList.appendChild(relBtn);
  });
  relatedSection.appendChild(relatedList);
  content.appendChild(relatedSection);

  // "Personal Note" section
  const noteSection = document.createElement('div');
  noteSection.className = 'detail-section';
  const noteTitle = document.createElement('div');
  noteTitle.className = 'detail-section-title';
  noteTitle.textContent = 'Personal Note';
  noteSection.appendChild(noteTitle);
  const noteEl = document.createElement('textarea');
  noteEl.className = 'detail-note';
  noteEl.id = 'detailNote';
  noteEl.name = 'note';
  noteEl.setAttribute('aria-label', 'Personal note');
  noteEl.placeholder = 'Write one real example from your own life or work\u2026';
  noteEl.value = note;
  noteSection.appendChild(noteEl);
  const noteMeta = document.createElement('div');
  noteMeta.className = 'detail-note-meta';
  noteMeta.textContent = 'Notes are stored locally on this browser.';
  noteSection.appendChild(noteMeta);
  content.appendChild(noteSection);

  // Action buttons
  const actions = document.createElement('div');
  actions.className = 'detail-actions';
  const learnBtn = document.createElement('button');
  learnBtn.className = 'detail-btn detail-btn-learn' + (isLearned ? ' is-learned' : '');
  learnBtn.id = 'learnBtn';
  learnBtn.textContent = isLearned ? '\u2713 Marked as Learned' : '\u2713 Mark as Learned';
  learnBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLearned(bias.name);
    syncURL();
  });
  actions.appendChild(learnBtn);
  const nextBtn = document.createElement('button');
  nextBtn.className = 'detail-btn detail-btn-next';
  nextBtn.id = 'nextBtn';
  nextBtn.textContent = 'Next Bias \u2192';
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const currentList = getFiltered();
    if (!currentList.length) return;
    const idx = currentList.findIndex(b => b.name === bias.name);
    const nextBias = currentList[(idx + 1 + currentList.length) % currentList.length];
    openDetail(nextBias);
  });
  actions.appendChild(nextBtn);
  content.appendChild(actions);

  noteEl.addEventListener('input', () => {
    notesDirty = true;
    if (noteSaveTimer) clearTimeout(noteSaveTimer);
    noteSaveTimer = setTimeout(() => {
      notes[bias.name] = noteEl.value.trim();
      if (!notes[bias.name]) delete notes[bias.name];
      saveNotes();
      notesDirty = false;
    }, 220);
  });

  document.getElementById('detailOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  syncURL();
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentDetailBias = null;
  syncURL();
}

/* ==========================================
   COMMAND PALETTE (Ctrl+K)
   ========================================== */
function getCmdSuggestions() {
  const due = getDueBiases().slice(0, 4);
  const recent = [...explored].reverse().slice(0, 4).map(getBiasByName).filter(Boolean);
  const merged = [...due, ...recent].filter((b, i, arr) => arr.findIndex(x => x.name === b.name) === i);
  return merged.slice(0, 8);
}

function openCmd() {
  const overlay = document.getElementById('cmdOverlay');
  overlay.classList.add('open');
  const input = document.getElementById('cmdInput');
  input.value = '';
  input.focus();
  renderCmdResults('');
  syncURL();
}

function closeCmd() {
  document.getElementById('cmdOverlay').classList.remove('open');
  currentCmdResults = [];
  cmdSelectedIndex = -1;
  syncURL();
}

function activateCmdSelection(index) {
  const results = document.querySelectorAll('#cmdResults .cmd-item');
  results.forEach(item => item.classList.remove('selected'));
  if (!results.length) return;
  cmdSelectedIndex = Math.max(0, Math.min(index, results.length - 1));
  const selected = results[cmdSelectedIndex];
  selected.classList.add('selected');
  selected.scrollIntoView({ block: 'nearest' });
}

function renderCmdResults(query) {
  const el = document.getElementById('cmdResults');
  const q = query.toLowerCase().trim();

  currentCmdResults = q
    ? BIASES.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.oneliner.toLowerCase().includes(q) ||
      b.cheat.toLowerCase().includes(q) ||
      getCategory(b).includes(q)
    ).slice(0, 8)
    : getCmdSuggestions();

  if (!currentCmdResults.length) {
    el.replaceChildren();
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'cmd-empty';
    emptyDiv.textContent = q
      ? `No results for "${query}"`
      : 'No recent activity yet. Try searching by bias name.';
    el.appendChild(emptyDiv);
    cmdSelectedIndex = -1;
    return;
  }

  el.replaceChildren();
  currentCmdResults.forEach((b, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cmd-item';
    btn.dataset.name = b.name;

    const emoji = document.createElement('span');
    emoji.className = 'cmd-item-emoji';
    emoji.textContent = b.emoji;
    btn.appendChild(emoji);

    const name = document.createElement('span');
    name.className = 'cmd-item-name';
    name.textContent = b.name;
    btn.appendChild(name);

    const desc = document.createElement('span');
    desc.className = 'cmd-item-desc';
    desc.textContent = `\u2014 ${b.oneliner}`;
    btn.appendChild(desc);

    const cat = document.createElement('span');
    cat.className = 'cmd-item-cat';
    cat.textContent = getCategory(b);
    btn.appendChild(cat);

    btn.addEventListener('mouseenter', () => {
      activateCmdSelection(i);
    });

    btn.addEventListener('click', () => {
      closeCmd();
      openDetail(b);
    });

    el.appendChild(btn);
  });

  cmdSelectedIndex = 0;
  activateCmdSelection(cmdSelectedIndex);
}

/* ==========================================
   MASTERY LAB
   ========================================== */
function getDailyBias() {
  const dayIndex = Math.floor(getDayStart() / DAY_MS);
  return BIASES[dayIndex % BIASES.length];
}

function renderMasteryView() {
  const due = getDueBiases();
  const daily = getDailyBias();

  document.getElementById('masteryDue').textContent = due.length;
  document.getElementById('masteryStreak').textContent = `${getStreakCount()}d`;
  document.getElementById('masteryRetention').textContent = `${getRetentionPct()}%`;

  const dailyEl = document.getElementById('dailyBiasCard');
  dailyEl.replaceChildren();

  const titleEl = document.createElement('div');
  titleEl.className = 'daily-bias-title';
  titleEl.textContent = 'Daily Bias';
  dailyEl.appendChild(titleEl);

  const nameEl = document.createElement('div');
  nameEl.className = 'daily-bias-name';
  nameEl.textContent = `${daily.emoji} ${daily.name}`;
  dailyEl.appendChild(nameEl);

  const copyEl = document.createElement('p');
  copyEl.className = 'daily-bias-copy';
  copyEl.textContent = daily.oneliner;
  dailyEl.appendChild(copyEl);

  const controls = document.createElement('div');
  controls.className = 'quiz-controls';
  const openBtn = document.createElement('button');
  openBtn.className = 'detail-btn detail-btn-next';
  openBtn.id = 'openDailyBiasBtn';
  openBtn.textContent = 'Open Detail';
  openBtn.addEventListener('click', () => openDetail(daily));
  controls.appendChild(openBtn);
  dailyEl.appendChild(controls);
}

function startQuiz(mode) {
  const due = getDueBiases();
  const randomPool = BIASES.slice().sort(() => Math.random() - 0.5).slice(0, 12);
  const queue = mode === 'due' ? due : randomPool;

  quizState = {
    mode,
    queue,
    index: 0,
    current: queue[0] || null,
  };

  const panel = document.getElementById('quizPanel');
  panel.style.display = '';

  if (!quizState.current) {
    document.getElementById('quizMeta').textContent = mode === 'due'
      ? 'No due reviews right now. Great job.'
      : 'No quiz cards available.';
    document.getElementById('quizQuestion').textContent = 'Come back tomorrow or run a random drill.';
    document.getElementById('quizRevealBtn').style.display = 'none';
    document.getElementById('quizAnswer').style.display = 'none';
    document.getElementById('quizGrade').style.display = 'none';
    return;
  }

  document.getElementById('quizRevealBtn').style.display = '';
  renderQuizCard();
}

function renderQuizCard() {
  const card = quizState.current;
  const answer = document.getElementById('quizAnswer');
  const grade = document.getElementById('quizGrade');
  document.getElementById('quizMeta').textContent = `${quizState.mode === 'due' ? 'Due Review' : 'Random Drill'} • ${quizState.index + 1}/${quizState.queue.length}`;
  document.getElementById('quizQuestion').textContent = card ? `${card.emoji} ${card.name}` : 'Done';
  answer.style.display = 'none';
  answer.replaceChildren();
  grade.style.display = 'none';
}

function revealQuizAnswer() {
  const card = quizState.current;
  if (!card) return;
  const answer = document.getElementById('quizAnswer');
  answer.style.display = 'block';
  answer.replaceChildren();

  const p1 = document.createElement('p');
  const strong1 = document.createElement('strong');
  strong1.textContent = 'What it means: ';
  p1.appendChild(strong1);
  p1.appendChild(document.createTextNode(card.oneliner));
  answer.appendChild(p1);

  const p2 = document.createElement('p');
  const strong2 = document.createElement('strong');
  strong2.textContent = 'Cheat code: ';
  p2.appendChild(strong2);
  p2.appendChild(document.createTextNode(card.cheat));
  answer.appendChild(p2);

  document.getElementById('quizGrade').style.display = 'flex';
}

function gradeQuizCard(grade) {
  const card = quizState.current;
  if (!card) return;
  if (!learned.includes(card.name)) {
    learned.push(card.name);
    saveLearned();
  }
  scheduleReview(card.name, grade);
  updateProgress();
  updateCounts();

  quizState.index += 1;
  quizState.current = quizState.queue[quizState.index] || null;

  if (!quizState.current) {
    document.getElementById('quizMeta').textContent = 'Session complete';
    document.getElementById('quizQuestion').textContent = 'Nice work. You completed this review set.';
    document.getElementById('quizRevealBtn').style.display = 'none';
    document.getElementById('quizAnswer').style.display = 'none';
    document.getElementById('quizGrade').style.display = 'none';
    renderMasteryView();
    return;
  }

  renderQuizCard();
  renderMasteryView();
}

/* ==========================================
   PLAYBOOK DATA & RENDER
   ========================================== */
const PLAYBOOK = [
  {
    key: 'designer',
    label: 'Designer / Developer',
    icon: '🎨',
    desc: 'Build better interfaces with psychology-informed design decisions.',
    items: [
      { principle: "Hick's Law", action: "Cap options at 3 per screen. If you have 10 features, show 3 now and expose the rest later." },
      { principle: "Visual Hierarchy", action: "Design like a newspaper: headline → subhead → body. If everything is loud, nothing is." },
      { principle: "Default Bias", action: "Set smart defaults. Auto-select the recommended plan, pre-fill forms with sensible values." },
      { principle: "Signifiers", action: "Make interactive elements look interactive. Buttons = clickable, links = tappable." },
      { principle: "Goal Gradient Effect", action: "Show progress: '3 of 5 steps done.' Users accelerate as they near the finish." },
      { principle: "Chunking", action: "Group related information. Use Miller's Law: 7±2 items max per group." },
      { principle: "Peak-End Rule", action: "Invest in one WOW moment and a polished goodbye screen." },
      { principle: "Delighters", action: "Add an easter egg, playful 404, or confetti animation. Low cost, high memory." },
      { principle: "Feedback Loop", action: "Every action needs a visible response. Spinners, confirmations, micro-animations." },
      { principle: "Curse of Knowledge", action: "Test with non-experts. You can't un-know what you know. Write for beginners." },
    ]
  },
  {
    key: 'writer',
    label: 'Writer / Communicator',
    icon: '✍️',
    desc: 'Craft emails, docs, and proposals that people actually read and act on.',
    items: [
      { principle: "Anchoring Bias", action: "Lead with your strongest number or fact in the very first sentence." },
      { principle: "Framing", action: "Present data in the frame that supports your argument. '95% safe' not '5% failure.'" },
      { principle: "Serial Position Effect", action: "Put key points in the first and last paragraphs. The middle gets forgotten." },
      { principle: "Curiosity Gap", action: "Open with a question or incomplete thought. Pull readers in before informing." },
      { principle: "Social Proof", action: "'Teams at Google, Airbnb, and Stripe use this approach' — instant credibility." },
      { principle: "Chunking", action: "Use headers, bullets, and short paragraphs. Scannable beats readable." },
      { principle: "Picture Superiority Effect", action: "Add at least one chart, diagram, or screenshot per page." },
      { principle: "Storytelling Effect", action: "Replace 'the data shows' with 'let me tell you about one customer.'" },
      { principle: "Scarcity", action: "'This window closes Friday' / 'Limited seats' — create urgency when honest." },
    ]
  },
  {
    key: 'decision',
    label: 'Decision Maker',
    icon: '🧭',
    desc: 'Defend against your own biases when making important choices.',
    items: [
      { principle: "Confirmation Bias", action: "Actively seek evidence AGAINST your current belief before deciding." },
      { principle: "Sunk Cost Effect", action: "Ask: 'If I hadn't already invested, would I start this today?' If no, stop." },
      { principle: "Anchoring Bias", action: "Ignore the first number you see; research independently." },
      { principle: "Bandwagon Effect", action: "'Everyone is doing it' is not a reason. What does the evidence say?" },
      { principle: "Planning Fallacy", action: "Add 50% buffer to every time and cost estimate." },
      { principle: "Loss Aversion", action: "Reframe: 'What do I GAIN by making this change?' to counteract loss fear." },
      { principle: "Survivorship Bias", action: "Ask: 'What about all the ones who tried this and failed?'" },
      { principle: "Dunning-Kruger Effect", action: "The less you know, the more confident you are. Listen to quiet experts." },
      { principle: "Second-Order Effect", action: "Ask 'And then what?' twice before every major decision." },
    ]
  },
  {
    key: 'presenter',
    label: 'Meeting / Presentation',
    icon: '🎤',
    desc: 'Run meetings and presentations that stick in people\'s minds.',
    items: [
      { principle: "Serial Position Effect", action: "Open with the most important point. Attention peaks in the first 30 seconds." },
      { principle: "Storytelling Effect", action: "Replace statistics with one compelling user story." },
      { principle: "Hick's Law", action: "Present max 3 options for any decision point." },
      { principle: "Authority Bias", action: "Cite credible sources early to establish trust." },
      { principle: "Reciprocity", action: "Share something valuable before making your ask." },
      { principle: "Curse of Knowledge", action: "Assume the audience knows less than you think." },
      { principle: "Peak-End Rule", action: "End on a high note with a clear, memorable call-to-action." },
      { principle: "Cognitive Load", action: "One idea per slide. Reduce clutter ruthlessly." },
    ]
  },
];

function renderPlaybook() {
  const tabsEl = document.getElementById('playbookTabs');
  const panelsEl = document.getElementById('playbookPanels');

  tabsEl.replaceChildren();
  panelsEl.replaceChildren();

  PLAYBOOK.forEach((p, i) => {
    // Tab
    const tab = document.createElement('button');
    tab.className = 'pb-tab' + (i === 0 ? ' active' : '');
    tab.dataset.key = p.key;
    const tabIcon = document.createElement('span');
    tabIcon.className = 'pb-tab-icon';
    tabIcon.textContent = p.icon;
    tab.appendChild(tabIcon);
    tab.appendChild(document.createTextNode(' ' + p.label));
    tabsEl.appendChild(tab);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'pb-panel' + (i === 0 ? ' active' : '');
    panel.dataset.key = p.key;

    const header = document.createElement('div');
    header.className = 'pb-panel-header';
    const panelIcon = document.createElement('span');
    panelIcon.className = 'pb-panel-icon';
    panelIcon.textContent = p.icon;
    header.appendChild(panelIcon);
    const panelInfo = document.createElement('div');
    panelInfo.className = 'pb-panel-info';
    const h3 = document.createElement('h3');
    h3.textContent = p.label;
    panelInfo.appendChild(h3);
    const descP = document.createElement('p');
    descP.textContent = p.desc;
    panelInfo.appendChild(descP);
    header.appendChild(panelInfo);
    panel.appendChild(header);

    p.items.forEach(item => {
      const itemBtn = document.createElement('button');
      itemBtn.type = 'button';
      itemBtn.className = 'pb-item';
      itemBtn.dataset.principle = item.principle;
      const principle = document.createElement('span');
      principle.className = 'pb-principle';
      const dot = document.createElement('span');
      dot.className = 'pb-principle-dot';
      principle.appendChild(dot);
      principle.appendChild(document.createTextNode(' ' + item.principle));
      itemBtn.appendChild(principle);
      const action = document.createElement('span');
      action.className = 'pb-action';
      action.textContent = item.action;
      itemBtn.appendChild(action);
      panel.appendChild(itemBtn);
    });

    panelsEl.appendChild(panel);
  });

  // Tab switching
  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.pb-tab');
    if (!tab) return;
    tabsEl.querySelectorAll('.pb-tab').forEach(t => t.classList.remove('active'));
    panelsEl.querySelectorAll('.pb-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    panelsEl.querySelector(`[data-key="${tab.dataset.key}"]`).classList.add('active');
  });

  // Click on a principle to open the bias detail
  panelsEl.addEventListener('click', (e) => {
    const item = e.target.closest('.pb-item');
    if (!item) return;
    const name = item.dataset.principle;
    const bias = BIASES.find(b => b.name === name);
    if (bias) openDetail(bias);
  });
}

function showPlaybookView() {
  document.getElementById('biasGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('masteryView').style.display = 'none';
  document.getElementById('detectorView').style.display = 'none';
  document.getElementById('playbookView').style.display = '';
  document.getElementById('topbarTitle').textContent = 'Practical Application';
  document.getElementById('topbarCount').textContent = '4 role-based playbooks';
}

function hidePlaybookView() {
  document.getElementById('playbookView').style.display = 'none';
}

function showMasteryView() {
  document.getElementById('biasGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('playbookView').style.display = 'none';
  document.getElementById('detectorView').style.display = 'none';
  document.getElementById('masteryView').style.display = '';
  document.getElementById('topbarTitle').textContent = 'Mastery Lab';
  document.getElementById('topbarCount').textContent = `${getDueBiases().length} due now`;
  renderMasteryView();
}

function hideMasteryView() {
  document.getElementById('masteryView').style.display = 'none';
}

/* ==========================================
   CONFETTI DELIGHTER (Zero-Dependency Canvas)
   ========================================== */
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const isMobile = window.innerWidth < 768;

  let width = canvas.width = window.innerWidth * dpr;
  let height = canvas.height = window.innerHeight * dpr;
  
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth * dpr;
    height = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  });

  // Confetti colors map exactly to the BiasMastery category color palette!
  const colors = ['#e5726a', '#4cc9c0', '#d4b85c', '#6bc4b3', '#a78bfa', '#f472b6', '#3b82f6'];
  const particles = [];
  
  // Optimize particle count for mobile screens (fewer particles for high FPS, no lag)
  const particleCount = isMobile ? 65 : 135;

  // Emit dynamic confetti streams from bottom corners shooting inwards
  for (let i = 0; i < particleCount; i++) {
    const isLeft = i < particleCount / 2;
    
    // Scale particle sizes using DPR. Sized between 12px and 22px in CSS coordinates.
    const baseSize = Math.random() * 10 + 12;
    const size = baseSize * dpr;

    // Adjust velocities for screen size. Mobile requires less width-range to reach the center!
    const vxSpeed = isMobile ? (Math.random() * 7 + 5) : (Math.random() * 14 + 8);
    const vySpeed = isMobile ? (Math.random() * 12 + 10) : (Math.random() * 18 + 14);

    particles.push({
      x: isLeft ? 0 : width,
      y: height * 0.85,
      vx: isLeft ? vxSpeed * dpr : -vxSpeed * dpr,
      vy: -vySpeed * dpr,
      size: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
      gravity: (isMobile ? 0.35 : 0.45) * dpr,
      friction: 0.97,
      shape: Math.random() > 0.45 ? 'rect' : 'circle'
    });
  }

  let active = true;
  function update() {
    if (!active) return;
    ctx.clearRect(0, 0, width, height);

    let living = 0;
    particles.forEach(p => {
      p.vx *= p.friction;
      p.vy += p.gravity;
      p.vy *= p.friction;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      
      // Smoothly fade out as they descend or age
      p.opacity -= isMobile ? 0.012 : 0.007;

      if (p.opacity > 0) {
        living++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        
        if (p.shape === 'rect') {
          // Draw standard rectangular ribbon
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        } else {
          // Draw circular coin particle
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (living > 0) {
      requestAnimationFrame(update);
    } else {
      active = false;
      canvas.remove();
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================
   SUCCESS CHIME SYNTHESIZER (Zero-Dependency Web Audio API)
   ========================================= */
function playSuccessSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    const now = ctx.currentTime;
    
    // Helper function to synthesize a pure crystal bell note using sine waves
    function playNote(freq, startTime, duration, volume) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine'; // pure, clean whistle-like bell tone
      osc.frequency.setValueAtTime(freq, startTime);
      
      // Bell envelope: instant peak volume, followed by a beautiful, slow exponential decay
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    }
    
    // Play a highly pleasant, positive rising Major arpeggio arcing upwards (C5 -> E5 -> G5)
    // C5 = 523.25 Hz (warm root note)
    // E5 = 659.25 Hz (sweet major third)
    // G5 = 783.99 Hz (triumphant perfect fifth)
    playNote(523.25, now, 0.45, 0.06);        // soft baseline
    playNote(659.25, now + 0.07, 0.48, 0.06); // elegant rising arpeggio step
    playNote(783.99, now + 0.14, 0.55, 0.08); // bright final peak note
    
  } catch (err) {
    console.warn('Web Audio success chime failed:', err);
  }
}

/* ==========================================
   LIVE BIAS DETECTOR
   ========================================== */
const BIAS_PATTERNS = [
  { name:"Scarcity", patterns:["only [\\d,]+","limited","scarce","few left","running out","almost gone","exclusive","rare","while supplies last","don't miss","selling fast","last chance","hurry"] },
  { name:"Social Proof", patterns:["join [\\d,]+\\+?","[\\d,]+\\+?\\s*(people|users|customers|teams|members|professionals|companies|founders|developers)","trusted by","as seen","used by","everyone","popular","trending","most popular","best-selling","rated","reviewed","recommended by","loved by"] },
  { name:"Anchoring Bias", patterns:["was \\$[\\d,]+","originally \\$[\\d,]+","compare at","retail","marked down","regular price","value of","worth \\$[\\d,]+","save \\$[\\d,]+","normally \\$[\\d,]+"] },
  { name:"Loss Aversion", patterns:["don't miss","don't lose","before it's gone","expires","you'll lose","risk losing","miss out","last chance","never again","running out","about to end","you're losing"] },
  { name:"Framing", patterns:["save \\d+%","\\d+% off","free","no cost","zero risk","guaranteed","no obligation","risk-free","money-back","\\d+% success","\\d+% satisfaction","proven"] },
  { name:"Bandwagon Effect", patterns:["everyone","millions","join [\\d,]+\\+?","trending","most popular","the world","best-selling","[\\d,]+\\+?\\s*(downloads|installs|signups|subscribers)","fastest growing","#1","number one"] },
  { name:"Authority Bias", patterns:["expert","doctor","study shows","research","according to","professor","scientist","certified","award-winning","harvard","stanford","mit","phd","approved by","endorsed","clinical","vp at","ceo at","founder of","director at"] },
  { name:"Reciprocity", patterns:["free","bonus","gift","complimentary","no charge","on us","we'll give","free trial","free shipping","included free","as a thank you","our treat"] },
  { name:"Curiosity Gap", patterns:["you won't believe","the secret","discover","find out","what happened","the truth","revealed","shocking","surprising","unexpected","little-known","hidden","unlock"] },
  { name:"Commitment & Consistency", patterns:["you already","since you","you've been","as a member","your history","based on your","you started","continue","keep going","don't stop now","you chose"] },
  { name:"Sunk Cost Effect", patterns:["you've already","invested","you've spent","don't waste","all your progress","so far","you've built","don't throw away","your effort","months of","years of"] },
  { name:"Decoy Effect", patterns:["most popular","recommended","best value","premium","basic","pro","enterprise","starter","compare plans","popular choice"] },
  { name:"Default Bias", patterns:["pre-selected","default","auto-renew","automatically","already selected","pre-filled","opt-out","unless you","included by default"] },
  { name:"Goal Gradient Effect", patterns:["almost there","\\d+% complete","nearly done","one step left","finish","you're close","\\d of \\d","so close","just one more","final step","last step"] },
  { name:"Hick's Law", patterns:["just \\d options","choose from \\d","simple","one click","easy","quick","instant","straightforward","no hassle","effortless"] },
  { name:"Peak-End Rule", patterns:["thank you","congratulations","welcome","you did it","success","well done","great job","amazing","we appreciate","wonderful"] },
  { name:"Zeigarnik Effect", patterns:["continue","resume","pick up where","unfinished","incomplete","\\d+% complete","you started","don't forget to finish","your draft"] },
  { name:"Storytelling Effect", patterns:["story","journey","imagine","picture this","once upon","meet \\w+","let me tell you","transformed"] },
  { name:"Cognitive Load", patterns:["simple","easy","effortless","one-click","no hassle","streamlined","intuitive","straightforward","just \\d steps","all-in-one"] },
  { name:"Variable Reward", patterns:["surprise","mystery","random","spin","lucky","chance to win","you could","bonus","special","unexpected","reward","prize"] },
  { name:"Endowment Effect", patterns:["your (dashboard|account|profile|data|workspace|settings|progress)","personalized","customized","your \\w+ is ready","made for you","tailored"] },
  { name:"Confirmation Bias", patterns:["you already know","as you suspected","confirms","just as you thought","you were right","validates"] },
  { name:"Hyperbolic Discounting", patterns:["right now","today only","instant","immediately","get it now","same day","within minutes","don't wait","start today","no waiting"] },
  { name:"IKEA Effect", patterns:["customize","build your","create your","design your","make it yours","personalize","configure","set up your"] },
  { name:"Negativity Bias", patterns:["warning","danger","risk","threat","avoid","prevent","protect","don't let","stop","beware","harmful","toxic","never"] },
  { name:"Reactance", patterns:["no obligation","cancel anytime","no commitment","you're free to","your choice","no pressure","no strings","optional"] },
  { name:"Fresh Start Effect", patterns:["new year","fresh start","new beginning","start fresh","this year","resolution","new chapter","monday","this month","kick off","reboot"] },
  { name:"Von Restorff Effect", patterns:["★","⭐","🔥","💥","NEW","HOT","BEST","!{2,}","ATTENTION","IMPORTANT","URGENT"] },
  { name:"Aesthetic-Usability Effect", patterns:["beautiful","gorgeous","stunning","elegant","sleek","modern","premium","luxurious","polished","refined","crafted","designed"] },
  { name:"Priming", patterns:["imagine","picture","think about","consider","envision","what if","visualize","feel","remember when"] },
  { name:"Nudge", patterns:["recommended","suggested","most popular","best for you","our pick","top choice","we suggest","try this","you might like","you may also"] },
  { name:"Noble Edge Effect", patterns:["sustainable","eco-friendly","give back","donate","charity","carbon neutral","social impact","ethical","fair trade","community","nonprofit","planet","green"] },
  { name:"Singularity Effect", patterns:["meet \\w+","one child","one person","one family","her story","his story","their story","individual","single mother","this teacher"] },
  { name:"Halo Effect", patterns:["award-winning","best-selling","#1 rated","top rated","featured in","as seen on","recognized","acclaimed","celebrated"] },
  { name:"Cashless Effect", patterns:["one-click","instant checkout","auto-pay","stored payment","buy now pay later","subscription","monthly","just \\$\\d","from \\$\\d"] },
  { name:"Spotlight Effect", patterns:["private","confidential","discreet","no one will know","between us","anonymous","your secret","secure"] },
  { name:"Affect Heuristic", patterns:["feel good","love","hate","amazing","terrible","incredible","awful","fantastic","horrifying","thrilling","exciting","delightful"] },
  { name:"Planning Fallacy", patterns:["just \\d minutes","only takes","quick","fast","in seconds","no time","instant setup","ready in"] },
  { name:"Pareto Principle", patterns:["focus on what matters","the \\d+% that","high-impact","most important","key","critical","essential","core","primary"] },
  { name:"Dunning-Kruger Effect", patterns:["anyone can","so easy","no experience needed","no skills required","even beginners","foolproof","guaranteed results","zero learning curve"] },
  { name:"Labor Illusion", patterns:["searching \\d+","analyzing","processing","calculating","scanning","comparing","evaluating","finding the best","working on","crunching"] },
  { name:"Serial Position Effect", patterns:["first","finally","most importantly","to start","in conclusion","lastly","number one","above all","last but not least"] },
  { name:"Contrast", patterns:["unlike","compared to","versus","vs\\.?","but with us","while others","competitors","traditional","old way","new way"] },
  { name:"Streisand Effect", patterns:["banned","censored","they don't want you to know","suppressed","controversial","forbidden","restricted","classified"] },
  { name:"Barnum-Forer Effect", patterns:["people like you","based on your (profile|type|personality)","you tend to","you're the type","your unique","specially selected for you"] },
  { name:"Weber's Law", patterns:["small change","incremental","gradual","step by step","little by little","over time","slowly","phase"] },
  { name:"Cognitive Dissonance", patterns:["you deserve","you're worth","treat yourself","you've earned","why not","life is short","you only live"] },
  { name:"Picture Superiority Effect", patterns:["see the results","watch","look at","visual","photo","screenshot","before and after","infographic","chart","graph","demo","video"] },
  { name:"Progressive Disclosure", patterns:["learn more","see more","show more","read more","expand","details","advanced","explore","dive deeper","discover more","view all"] },
  { name:"Empathy Gap", patterns:["we understand","we've been there","we know how","it's frustrating","you're not alone","we get it","we hear you"] },
  { name:"Temptation Bundling", patterns:["bundle","package","combo","plus you get","and also","bonus","included with","together with","comes with","along with","and you'll also receive"] },
];

const DETECTOR_EXAMPLES = {
  marketing: `Only 3 seats left! Join 50,000+ professionals who trust our platform.\n\nLimited-time offer ends Friday — save 40% today.\n\n"This tool transformed how our team works." — Sarah, VP at Google\n\nStart your free trial now. No credit card required. Cancel anytime.`,
  pricing: `Basic: $9/month\nPro (Most Popular): $29/month — Best Value!\nEnterprise: $99/month\n\nAll plans include a 14-day free trial.\nYou're 80% done with setup — just pick your plan to finish.\nJoin 12,000+ companies already using our platform.\nWas $49/month, now just $29. Save $240/year!`,
  news: `BREAKING: Scientists reveal the shocking truth about everyday habits.\nA new Harvard study confirms what experts have suspected for years.\nMillions are already making the switch — are you falling behind?\nDon't miss this urgent warning before it's too late.`,
};

function detectBiases(text) {
  const lower = text.toLowerCase();
  const results = [];

  BIAS_PATTERNS.forEach(({ name, patterns }) => {
    let totalHits = 0;
    const matchedPhrases = [];

    patterns.forEach(pattern => {
      try {
        const re = new RegExp(pattern, 'gi');
        const matches = text.match(re);
        if (matches) {
          totalHits += matches.length;
          matches.forEach(m => {
            const clean = m.trim();
            if (!matchedPhrases.includes(clean)) matchedPhrases.push(clean);
          });
        }
      } catch (e) {
        if (lower.includes(pattern.toLowerCase())) {
          totalHits++;
          matchedPhrases.push(pattern);
        }
      }
    });

    if (totalHits > 0) {
      // Improved confidence scoring:
      // Base confidence of 40% for any match, plus up to 45% based on number of unique matched phrases, plus up to 15% for total hits
      const uniqueRatio = Math.min(matchedPhrases.length / 2, 1);
      const hitBonus = Math.min(totalHits / 4, 1);
      const confidence = Math.min(Math.round(40 + (uniqueRatio * 45) + (hitBonus * 14)), 99);
      const biasData = getBiasByName(name);
      if (biasData) {
        results.push({
          bias: biasData,
          confidence,
          hits: totalHits,
          matchedPhrases: matchedPhrases.slice(0, 4),
        });
      }
    }
  });

  results.sort((a, b) => b.confidence - a.confidence);
  return results;
}

function renderDetectorResults(results) {
  const el = document.getElementById('detectorResults');
  el.replaceChildren();

  if (!results.length) {
    const empty = document.createElement('div');
    empty.className = 'detector-empty';
    empty.innerHTML = '<div class="detector-empty-icon">🔍</div><p>No cognitive biases detected in this text.</p><p class="detector-empty-hint">Try pasting marketing copy, a sales email, or a news headline.</p>';
    el.appendChild(empty);
    return;
  }

  // Summary bar
  const summary = document.createElement('div');
  summary.className = 'detector-summary';
  summary.innerHTML = `<span class="detector-summary-count">${results.length}</span> bias${results.length !== 1 ? 'es' : ''} detected`;
  el.appendChild(summary);

  // Result cards
  results.forEach((r, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'detector-card';
    card.style.animationDelay = `${i * 0.06}s`;

    const category = getCategory(r.bias);
    const stage = STAGES[category];

    // Confidence bar color
    let confClass = 'conf-low';
    if (r.confidence >= 60) confClass = 'conf-high';
    else if (r.confidence >= 35) confClass = 'conf-mid';

    card.innerHTML = `
      <div class="detector-card-left">
        <span class="detector-card-emoji">${r.bias.emoji}</span>
        <div class="detector-card-info">
          <div class="detector-card-name">${escapeHTML(r.bias.name)}</div>
          <div class="detector-card-oneliner">${escapeHTML(r.bias.oneliner)}</div>
          <div class="detector-card-matches">
            ${r.matchedPhrases.map(p => `<span class="detector-match-tag">"${escapeHTML(p)}"</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="detector-card-right">
        <div class="detector-conf ${confClass}">
          <div class="detector-conf-bar">
            <div class="detector-conf-fill" style="width:${r.confidence}%"></div>
          </div>
          <span class="detector-conf-pct">${r.confidence}%</span>
        </div>
        <span class="detector-card-tag" style="color:${stage?.color || 'var(--t-3)'}">${category}</span>
      </div>
    `;

    card.addEventListener('click', () => openDetail(r.bias));
    el.appendChild(card);
  });
}

function runDetector() {
  const text = document.getElementById('detectorInput').value.trim();
  if (!text) return;

  const scanEl = document.getElementById('detectorScanning');
  const resultsEl = document.getElementById('detectorResults');

  // Show scanning animation
  scanEl.style.display = '';
  resultsEl.replaceChildren();

  // Fake delay for dramatic effect, then show results
  setTimeout(() => {
    scanEl.style.display = 'none';
    const results = detectBiases(text);
    renderDetectorResults(results);
  }, 800);
}

function showDetectorView() {
  document.getElementById('biasGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('playbookView').style.display = 'none';
  document.getElementById('masteryView').style.display = 'none';
  document.getElementById('detectorView').style.display = '';
  document.getElementById('topbarTitle').textContent = 'Live Bias Detector';
  document.getElementById('topbarCount').textContent = 'Paste text to scan for biases';
}

function hideDetectorView() {
  document.getElementById('detectorView').style.display = 'none';
}

/* ==========================================
   EVENT LISTENERS
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  updateProgress();
  updateCounts();

  // Render playbook once
  renderPlaybook();

  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      currentFilter = item.dataset.filter;

      if (currentFilter === 'detector') {
        hidePlaybookView();
        hideMasteryView();
        showDetectorView();
      } else if (currentFilter === 'playbook') {
        hideDetectorView();
        hideMasteryView();
        showPlaybookView();
      } else if (currentFilter === 'mastery') {
        hidePlaybookView();
        hideDetectorView();
        showMasteryView();
      } else {
        hidePlaybookView();
        hideMasteryView();
        hideDetectorView();
        renderGrid();
      }
      // Close mobile sidebar
      document.getElementById('sidebar').classList.remove('open');
      syncURL();
    });
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      const grid = document.getElementById('biasGrid');
      grid.classList.toggle('grid-view', currentView === 'grid');
      grid.classList.toggle('list-view', currentView === 'list');
      syncURL();
    });
  });

  // Detail panel close
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.getElementById('detailOverlay').addEventListener('click', (e) => {
    if (!document.getElementById('detailPanel').contains(e.target)) {
      closeDetail();
    }
  });

  // Progress modal
  document.getElementById('progressTrigger').addEventListener('click', openProgressModal);
  document.getElementById('progressModalClose').addEventListener('click', closeProgressModal);
  document.getElementById('progressOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('progressOverlay')) closeProgressModal();
  });

  // Command palette
  document.getElementById('searchTrigger').addEventListener('click', openCmd);
  document.getElementById('cmdInput').addEventListener('input', (e) => {
    renderCmdResults(e.target.value);
  });

  document.getElementById('cmdInput').addEventListener('keydown', (e) => {
    if (!currentCmdResults.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activateCmdSelection(cmdSelectedIndex + 1);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      activateCmdSelection(cmdSelectedIndex - 1);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const selected = currentCmdResults[Math.max(0, cmdSelectedIndex)] || currentCmdResults[0];
      if (!selected) return;
      closeCmd();
      openDetail(selected);
    }
  });

  document.getElementById('cmdOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cmdOverlay')) closeCmd();
  });

  // Mastery controls
  document.getElementById('startDueQuizBtn').addEventListener('click', () => startQuiz('due'));
  document.getElementById('startRandomQuizBtn').addEventListener('click', () => startQuiz('random'));
  document.getElementById('quizRevealBtn').addEventListener('click', revealQuizAnswer);
  document.getElementById('quizGrade').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-score]');
    if (!btn) return;
    gradeQuizCard(btn.dataset.score);
  });
  // Bias Detector
  document.getElementById('detectorAnalyzeBtn').addEventListener('click', runDetector);
  document.getElementById('detectorInput').addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') runDetector();
  });
  document.querySelectorAll('.detector-example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.example;
      const text = DETECTOR_EXAMPLES[key];
      if (text) {
        document.getElementById('detectorInput').value = text;
        runDetector();
      }
    });
  });

  // Random bias (Variable Reward!)
  document.getElementById('randomBtn').addEventListener('click', () => {
    const bias = BIASES[Math.floor(Math.random() * BIASES.length)];
    openDetail(bias);
    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openCmd();
    }
    // Escape
    if (e.key === 'Escape') {
      if (document.getElementById('cmdOverlay').classList.contains('open')) closeCmd();
      else if (document.getElementById('progressOverlay').classList.contains('open')) closeProgressModal();
      else if (document.getElementById('detailOverlay').classList.contains('open')) closeDetail();
    }
  });

  // Mobile
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  document.getElementById('mobileSearchBtn').addEventListener('click', openCmd);

  // Click outside sidebar on mobile
  document.getElementById('main').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });

  // Beforeunload guard for unsaved notes
  window.addEventListener('beforeunload', (e) => {
    if (notesDirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  renderMasteryView();

  // Restore state from URL
  const urlState = readURL();
  if (urlState) {
    if (urlState.filter) {
      const navItem = document.querySelector(`.nav-item[data-filter="${CSS.escape(urlState.filter)}"]`);
      if (navItem) navItem.click();
    }
    if (urlState.view) {
      const viewBtn = document.querySelector(`.view-btn[data-view="${CSS.escape(urlState.view)}"]`);
      if (viewBtn) viewBtn.click();
    }
    if (urlState.detail) {
      const bias = getBiasByName(urlState.detail);
      if (bias) openDetail(bias);
    }
  }
});
