/* ==========================================
   DATA: ALL 106 COGNITIVE BIASES
   ========================================== */
const BIASES = [
  // ── FILTER (🙈) ─────────────────────────
  { emoji:"👀", name:"Hick's Law", oneliner:"More options leads to harder decisions", cheat:"When presenting options (to users, to your boss, in a meeting), cap it at 3. If you have 10 features, show 3 now, rest later.", category:"filter", star:true },
  { emoji:"💼", name:"Confirmation Bias", oneliner:"People look for evidence that confirms what they think", cheat:"When doing user research, actively seek disconfirming data. When debating, steelman the other side first.", category:"filter" },
  { emoji:"👁", name:"Priming", oneliner:"Previous stimuli influence users' decision", cheat:"The page/screen/email before a CTA matters as much as the CTA itself. Set the mood before the ask.", category:"filter" },
  { emoji:"🚛", name:"Cognitive Load", oneliner:"Total amount of mental effort required to complete a task", cheat:"Before shipping a page/email/doc, ask: 'What can I remove and still convey the message?' Then remove it.", category:"filter", star:true },
  { emoji:"⚓", name:"Anchoring Bias", oneliner:"Users rely heavily on the first piece of information they see", cheat:"Always present the price/metric you want first. In negotiations, make the first offer. In dashboards, lead with the strongest number.", category:"filter", star:true },
  { emoji:"👉", name:"Nudge", oneliner:"Subtle hints can affect users' decisions", cheat:"Default the checkbox to 'on.' Pre-fill the form. Auto-select the recommended plan. Small nudges, massive impact.", category:"filter" },
  { emoji:"🍰", name:"Progressive Disclosure", oneliner:"Users are less overwhelmed if exposed to complex features later", cheat:"Hide advanced options behind 'More' or 'Advanced.' In onboarding, teach one thing per step.", category:"filter", star:true },
  { emoji:"🎯", name:"Fitts's Law", oneliner:"Large and close elements are easier to interact with", cheat:"Make your primary CTA the biggest, most reachable element. On mobile, put key actions in the thumb zone.", category:"filter" },
  { emoji:"🕶", name:"Banner Blindness", oneliner:"Users tune out the stuff they get repeatedly exposed to", cheat:"If your notification/banner looks the same every time, users stop seeing it. Change the format or channel periodically.", category:"filter" },
  { emoji:"🕺", name:"Decoy Effect", oneliner:"Create a new option that's easy to discard", cheat:"3 pricing tiers: Small ($5), Medium ($15), Large ($16). The 'Large' makes Medium look like a steal.", category:"filter" },
  { emoji:"🖼", name:"Framing", oneliner:"The way information is presented affects decisions", cheat:"'95% success rate' vs. '5% failure rate' — same data, opposite emotions. Always ask: 'How am I framing this?'", category:"filter", star:true },
  { emoji:"🐠", name:"Attentional Bias", oneliner:"Users' thoughts filter what they pay attention to", cheat:"After a user searches for 'shoes,' show shoe-related content. Mirror the user's current mental context.", category:"filter" },
  { emoji:"💔", name:"Empathy Gap", oneliner:"People underestimate how emotions influence behaviors", cheat:"Don't design flows while calm and assume stressed users will follow them. Test in realistic conditions.", category:"filter" },
  { emoji:"⛵", name:"Visual Anchors", oneliner:"Elements used to guide users' eyes", cheat:"Use icons, images, and highlighted text to create visual 'rest stops' in long content.", category:"filter" },
  { emoji:"🌶", name:"Von Restorff Effect", oneliner:"People notice items that stand out more", cheat:"Make your CTA a different color from everything else. In a list, bold the most important item.", category:"filter" },
  { emoji:"🎖", name:"Visual Hierarchy", oneliner:"The order in which people perceive what they see", cheat:"Design your pages like a newspaper: headline → subhead → body. If everything is loud, nothing is.", category:"filter" },
  { emoji:"🔭", name:"Selective Attention", oneliner:"People filter out things from their environment when in focus", cheat:"Don't rely on peripheral notifications during critical flows. Users in focus-mode see only the task.", category:"filter" },
  { emoji:"✈️", name:"Survivorship Bias", oneliner:"People neglect things that don't make it past selection", cheat:"Don't copy 'what successful startups did' without studying the failures who did the same things.", category:"filter" },
  { emoji:"🍒", name:"Juxtaposition", oneliner:"Close and similar elements are perceived as a single unit", cheat:"Put your strengths right next to the competitor's weakness. Comparison tables leverage juxtaposition.", category:"filter" },
  { emoji:"🚦", name:"Signifiers", oneliner:"Elements that communicate what they will do", cheat:"Buttons should look clickable. Links should look tappable. If users can't tell it's interactive, it doesn't exist.", category:"filter" },
  { emoji:"🎭", name:"Contrast", oneliner:"Users' attention is drawn to higher visual weights", cheat:"Use contrast (color, size, weight) deliberately. Low contrast = 'not important.' High contrast = 'look here NOW.'", category:"filter" },
  { emoji:"🚨", name:"External Trigger", oneliner:"Info on what to do next is within the prompt itself", cheat:"Push notifications, email CTAs, in-app prompts — instruction is embedded in the trigger.", category:"filter" },
  { emoji:"🎪", name:"Centre-Stage Effect", oneliner:"People tend to choose the middle option in a set", cheat:"In a 3-item layout, put your recommended option in the center.", category:"filter" },
  { emoji:"🍣", name:"Law of Proximity", oneliner:"Elements close to each other are considered related", cheat:"Group related form fields. Put labels next to inputs. Separate unrelated content with whitespace.", category:"filter" },
  { emoji:"🍬", name:"Tesler's Law", oneliner:"Simplify too much and you transfer complexity to users", cheat:"Some visible options reduce cognitive work. Oversimplifying pushes complexity into the user's head.", category:"filter" },
  { emoji:"🧨", name:"Spark Effect", oneliner:"Users act when the effort is small", cheat:"If the next step takes <10 seconds, users will do it. 'Just enter your email' beats a 12-field form.", category:"filter" },
  { emoji:"🥏", name:"Feedback Loop", oneliner:"Actions need feedback communicating what happened", cheat:"Every button click should produce a visible result. Silence feels broken.", category:"filter" },
  { emoji:"😻", name:"Expectations Bias", oneliner:"People are influenced by their own expectations", cheat:"If your app looks like a note-taking app, users will try to take notes. Match the mental model.", category:"filter" },
  { emoji:"🚆", name:"Aesthetic-Usability Effect", oneliner:"Great aesthetics are perceived as easier to use", cheat:"Users forgive more bugs in a beautiful product. Aesthetics aren't vanity — they're usability.", category:"filter" },

  // ── MEANING (🔮) ─────────────────────────
  { emoji:"👥", name:"Social Proof", oneliner:"Users adapt behaviors based on what others do", cheat:"Show user counts, testimonials, 'X people viewing this.' In meetings, cite how other teams adopted the approach.", category:"meaning", star:true },
  { emoji:"🦄", name:"Scarcity", oneliner:"People value things more when they're in limited supply", cheat:"'Only 3 left.' 'Offer ends Friday.' Use sparingly and honestly — fake scarcity destroys trust.", category:"meaning", star:true },
  { emoji:"💭", name:"Curiosity Gap", oneliner:"Users desire to seek out missing information", cheat:"'You're leaving money on the table' outperforms 'Q2 Revenue Report.' Open a gap, then fill it.", category:"meaning" },
  { emoji:"🖲", name:"Mental Model", oneliner:"Users have a preconceived opinion of how things work", cheat:"Don't reinvent navigation. Meet users where their brain already is.", category:"meaning", star:true },
  { emoji:"👨‍👩‍👧‍👦", name:"Familiarity Bias", oneliner:"People prefer familiar experiences", cheat:"Keep most things familiar when introducing change. Change one thing at a time. Familiarity = trust.", category:"meaning" },
  { emoji:"🕹", name:"Skeuomorphism", oneliner:"Users adapt to things that look like real-world objects", cheat:"The 'trash can' icon, the 'folder' metaphor — these map to physical world experience.", category:"meaning" },
  { emoji:"🎁", name:"Reciprocity", oneliner:"People reciprocate when they receive something", cheat:"Free trials, free templates, free advice → users feel obligated to give back. Lead with value.", category:"meaning", star:true },
  { emoji:"🤝", name:"Singularity Effect", oneliner:"Users care more about an individual than a group", cheat:"'Maria, age 7, needs water' raises more than '10M children lack water.' Tell one user's story.", category:"meaning" },
  { emoji:"🎰", name:"Variable Reward", oneliner:"People especially enjoy unexpected rewards", cheat:"Surprise discounts, unexpected content, random delighters. Unpredictability drives engagement.", category:"meaning" },
  { emoji:"🎉", name:"Aha! Moment", oneliner:"When new users first realize the value", cheat:"Identify your product's magic moment and get users there ASAP. Everything before it is foreplay.", category:"meaning", star:true },
  { emoji:"🥅", name:"Goal Gradient Effect", oneliner:"Motivation increases as users near their goal", cheat:"Progress bars, '3 of 5 steps done,' loyalty cards with stamps pre-filled. Show proximity to the finish.", category:"meaning" },
  { emoji:"💈", name:"Occam's Razor", oneliner:"Simple solutions are often better than complex ones", cheat:"Start with the dumbest cause when debugging. Try the simplest solution first when designing.", category:"meaning" },
  { emoji:"🎗", name:"Noble Edge Effect", oneliner:"Users prefer socially responsible companies", cheat:"Highlight social impact, charity, sustainability — but only if genuine.", category:"meaning" },
  { emoji:"🧿", name:"Hawthorne Effect", oneliner:"Users change behavior when observed", cheat:"User testing behavior ≠ real behavior. Analytics + observation together > either alone.", category:"meaning" },
  { emoji:"👼", name:"Halo Effect", oneliner:"One good trait colors the whole judgment", cheat:"A beautiful landing page makes users assume the product is beautiful too. First impressions radiate.", category:"meaning" },
  { emoji:"☎️", name:"Miller's Law", oneliner:"Working memory holds 7±2 items", cheat:"Don't put 12 items in a nav bar. Chunk everything into groups of 5-7.", category:"meaning" },
  { emoji:"🍱", name:"Unit Bias", oneliner:"One unit feels like the optimal amount", cheat:"Serve info in unit-sized portions: one screen, one email, one card = one idea.", category:"meaning" },
  { emoji:"🌊", name:"Flow State", oneliner:"Being fully immersed and focused on a task", cheat:"Block calendar, silence notifications, single-task. Design to minimize interruptions.", category:"meaning" },
  { emoji:"👑", name:"Authority Bias", oneliner:"Authority figure opinions carry more weight", cheat:"Expert endorsements, certifications, 'As seen in Forbes.' Cite authoritative sources early.", category:"meaning" },
  { emoji:"🏺", name:"Pseudo-Set Framing", oneliner:"Grouped tasks are more tempting to complete", cheat:"'2 of 5 badges done' feels unfinished. Achievements, streaks, collections — all pseudo-sets.", category:"meaning" },
  { emoji:"🎊", name:"Group Attractiveness Effect", oneliner:"Items seem more attractive in a group", cheat:"Products look better in curated collections. Bundle features into packages.", category:"meaning" },
  { emoji:"🚰", name:"Curse of Knowledge", oneliner:"You forget others don't know what you know", cheat:"Your users don't know your jargon. Write like a 5th grader. Test with non-experts.", category:"meaning" },
  { emoji:"📮", name:"Self-Initiated Triggers", oneliner:"Self-set prompts are more powerful than external ones", cheat:"Let users set their own reminders, goals, deadlines. They'll honor their own commitments.", category:"meaning" },
  { emoji:"✏️", name:"Survey Bias", oneliner:"Answers skew towards what's socially acceptable", cheat:"Don't trust surveys alone. Watch behavior. What people say and do are different.", category:"meaning" },
  { emoji:"🎭", name:"Cognitive Dissonance", oneliner:"Holding opposing ideas is painful", cheat:"Don't make your product contradict the user's self-image.", category:"meaning" },
  { emoji:"💫", name:"Feedforward", oneliner:"Knowing what to expect before acting", cheat:"Show consequences before actions. Previews, tooltips, confirmation dialogs = feedforward.", category:"meaning" },
  { emoji:"🏒", name:"Hindsight Bias", oneliner:"'I knew it all along' after the fact", cheat:"In postmortems, judge decisions by the info available at the time, not the outcome.", category:"meaning" },
  { emoji:"🎏", name:"Law of Similarity", oneliner:"Similar-looking elements feel related", cheat:"Consistent styles = users know 'these are the same type.' Break similarity to signal 'this is different.'", category:"meaning" },
  { emoji:"🌓", name:"Law of Prägnanz", oneliner:"Ambiguity is simplified by the brain", cheat:"Complex layouts get misread. Clean ones are understood instantly.", category:"meaning" },
  { emoji:"🐘", name:"Streisand Effect", oneliner:"Censoring information increases awareness", cheat:"Don't draw attention to things you want to hide. Quiet fixes beat public takedowns.", category:"meaning" },
  { emoji:"🔦", name:"Spotlight Effect", oneliner:"People feel more noticed than they actually are", cheat:"Users worry about looking dumb. Make error recovery private and shame-free.", category:"meaning" },
  { emoji:"🗓", name:"Fresh Start Effect", oneliner:"New beginnings motivate action", cheat:"Time launches around New Year, Mondays, month starts. 'Start your week with...' works.", category:"meaning" },

  // ── TIME (⏰) ─────────────────────────────
  { emoji:"🧗", name:"Labor Illusion", oneliner:"People value things more when they see the work", cheat:"'Searching 1,432 flights...' feels more valuable than instant. Show your effort.", category:"time" },
  { emoji:"🚶", name:"Default Bias", oneliner:"Users don't change established behavior", cheat:"Set smart defaults. The default IS the choice for 80%+ of users.", category:"time", star:true },
  { emoji:"🏦", name:"Investment Loops", oneliner:"User investment drives return visits", cheat:"Every upload, customization, and creation = an investment pulling users back.", category:"time" },
  { emoji:"🕯", name:"Loss Aversion", oneliner:"Losing hurts ~2x more than gaining feels good", cheat:"'Your trial expires in 3 days' beats 'Upgrade for more.' Frame as loss prevention.", category:"time", star:true },
  { emoji:"👞", name:"Commitment & Consistency", oneliner:"Small yeses lead to big yeses", cheat:"Get a tiny commitment first — they'll act consistently with that identity later. Foot-in-the-door.", category:"time", star:true },
  { emoji:"🏝", name:"Sunk Cost Effect", oneliner:"Reluctance to abandon investments", cheat:"Show invested effort: 'Member for 2 years.' '47 projects built.' This keeps users.", category:"time", star:true },
  { emoji:"🌋", name:"Reactance", oneliner:"Forced behavior triggers resistance", cheat:"Aggressive popups → users rebel. Give autonomy. 'Maybe later' is a button, not failure.", category:"time", star:true },
  { emoji:"🔨", name:"Law of the Instrument", oneliner:"When you have a hammer, everything looks like a nail", cheat:"Check: 'Am I using this because it's right, or because it's familiar?'", category:"time" },
  { emoji:"🍭", name:"Temptation Bundling", oneliner:"Pair the 'should' with the 'want'", cheat:"'Complete profile → unlock premium template.' In life: podcasts only while exercising.", category:"time" },
  { emoji:"🎩", name:"Dunning-Kruger Effect", oneliner:"Low-knowledge people overestimate their skills", cheat:"Beginners need guardrails. Experts need reminders of their actual progress.", category:"time" },
  { emoji:"🔍", name:"Discoverability", oneliner:"Features users can't find don't exist", cheat:"Ask 5 users to find feature X. If they can't, it's a discoverability failure.", category:"time" },
  { emoji:"🐍", name:"Second-Order Effect", oneliner:"Consequences of consequences", cheat:"Before shipping, ask 'And then what?' twice. Notifications → annoyance → disable all → lost channel.", category:"time" },
  { emoji:"🌛", name:"Decision Fatigue", oneliner:"Too many decisions degrades quality", cheat:"Put the most important CTA early. Don't make users configure 15 options before starting.", category:"time" },
  { emoji:"🥽", name:"Observer-Expectancy Effect", oneliner:"Researcher biases influence outcomes", cheat:"Run blind tests. Let someone else moderate. Your hope for success skews results.", category:"time" },
  { emoji:"🌱", name:"Weber's Law", oneliner:"Small incremental changes go unnoticed", cheat:"Roll out changes gradually. Users adapt to small shifts but revolt at big ones.", category:"time" },
  { emoji:"🎈", name:"Parkinson's Law", oneliner:"Work expands to fill the time given", cheat:"Set tight (but fair) deadlines. 'Due Friday' gets done Friday. 'Due whenever' = never.", category:"time" },
  { emoji:"🌤", name:"Affect Heuristic", oneliner:"Current emotions cloud judgment", cheat:"Don't make big decisions when tired or emotional. Sleep on it.", category:"time" },
  { emoji:"📉", name:"Hyperbolic Discounting", oneliner:"Immediate benefits beat bigger future gains", cheat:"Offer instant rewards. 'Discount NOW' beats 'Save money over 12 months.'", category:"time" },
  { emoji:"⌚", name:"Chronoception", oneliner:"Perception of time is subjective", cheat:"Waiting feels 3x longer. Use loading animations, skeleton screens, progress indicators.", category:"time" },
  { emoji:"💳", name:"Cashless Effect", oneliner:"Invisible money feels like not-money", cheat:"One-click purchases exploit this. Ethical design: show real dollar amounts.", category:"time" },
  { emoji:"🌚", name:"Self-Serving Bias", oneliner:"Credit for wins, blame others for losses", cheat:"When things go wrong, don't let users blame themselves. Show it's the system's fault.", category:"time" },
  { emoji:"🥬", name:"Pareto Principle", oneliner:"80% of effects from 20% of causes", cheat:"Find the 20% that drives 80% of value. Focus relentlessly there.", category:"time" },
  { emoji:"🔫", name:"Backfire Effect", oneliner:"Challenged beliefs get stronger", cheat:"Don't argue head-on. Lead with empathy, share info gently.", category:"time" },
  { emoji:"🌈", name:"False Consensus Effect", oneliner:"Overestimating how much others agree with you", cheat:"Your team's agreement ≠ user agreement. Test assumptions with real data.", category:"time" },
  { emoji:"🚋", name:"Bandwagon Effect", oneliner:"Adoption grows with social proof of adoption", cheat:"'Join 50,000+ teams' / 'Trending now' / 'Most popular.' Show the crowd.", category:"time" },
  { emoji:"🧙", name:"Barnum-Forer Effect", oneliner:"Generic descriptions feel personally specific", cheat:"Personalized recommendations feel personal even when algorithmic. Personalize messaging.", category:"time" },
  { emoji:"🛋", name:"IKEA Effect", oneliner:"Self-assembly = disproportionate value", cheat:"Let users customize their workspace. Partial creation → attachment.", category:"time" },
  { emoji:"🧚", name:"Planning Fallacy", oneliner:"We underestimate how long things take", cheat:"Multiply estimates by 1.5x. Plan for realistic, not optimistic.", category:"time" },

  // ── MEMORY (💾) ──────────────────────────
  { emoji:"🏕", name:"Provide Exit Points", oneliner:"Graceful exits create positive last memories", cheat:"'Continue later' buttons, save-draft. Don't trap users. Graceful exits = return visits.", category:"memory" },
  { emoji:"🎢", name:"Peak-End Rule", oneliner:"Experiences judged by peak and ending", cheat:"Invest in one WOW moment and a polished goodbye. A great peak + ending beats uniformly 'okay.'", category:"memory", star:true },
  { emoji:"👅", name:"Sensory Appeal", oneliner:"Multi-sensory = more engaging", cheat:"Haptic feedback, satisfying animations, 'pop' sounds. More senses = stickier memory.", category:"memory" },
  { emoji:"🧩", name:"Zeigarnik Effect", oneliner:"Incomplete tasks are remembered better", cheat:"'You're 80% done.' Auto-play next episode. Open loops create return visits.", category:"memory", star:true },
  { emoji:"🧤", name:"Endowment Effect", oneliner:"Ownership inflates perceived value", cheat:"Free trials with data → users don't want to lose THEIR data. Switching cost soars.", category:"memory", star:true },
  { emoji:"🛍", name:"Chunking", oneliner:"Grouped info is remembered better", cheat:"555-867-5309 not 5558675309. Group features by categories. Use headers and sections.", category:"memory", star:true },
  { emoji:"💚", name:"Delighters", oneliner:"Unexpected pleasures are unforgettable", cheat:"Easter eggs, playful error pages, surprise confetti. Low-cost, high-impact memory anchors.", category:"memory" },
  { emoji:"💛", name:"Internal Trigger", oneliner:"Emotions prompt habitual actions", cheat:"Bored → Instagram. Anxious → email. If your product answers a feeling, you win.", category:"memory" },
  { emoji:"📸", name:"Picture Superiority Effect", oneliner:"Pictures remembered 6x better than words", cheat:"Use visuals, diagrams, screenshots. If you can show it, don't say it.", category:"memory", star:true },
  { emoji:"📌", name:"Method of Loci", oneliner:"Location enhances memory", cheat:"Keep things in consistent UI locations. Users build mental maps. Moving things destroys memory.", category:"memory" },
  { emoji:"🧭", name:"Shaping", oneliner:"Reinforce approximations toward target behavior", cheat:"Don't wait for full task completion to celebrate. 'Great start!' on step 1 builds behavior.", category:"memory" },
  { emoji:"💾", name:"Recognition Over Recall", oneliner:"Recognizing is easier than remembering", cheat:"Show options instead of blank inputs. Autocomplete, dropdowns, recent items.", category:"memory" },
  { emoji:"🏰", name:"Storytelling Effect", oneliner:"Stories are 22x more memorable than facts", cheat:"Don't say '99.9% uptime.' Say 'When Sarah's store went viral, traffic surged 50x — site didn't flinch.'", category:"memory" },
  { emoji:"👹", name:"Negativity Bias", oneliner:"Negative events are 5x more vivid", cheat:"One bad support interaction = permanent brand damage. Over-invest in error recovery.", category:"memory" },
  { emoji:"⏰", name:"Availability Heuristic", oneliner:"Recent info dominates judgment", cheat:"Your last impression IS your brand. Yesterday's bug outweighs last month's great onboarding.", category:"memory" },
  { emoji:"🌌", name:"Spacing Effect", oneliner:"Spaced study beats cramming", cheat:"Don't teach everything day 1. Drip onboarding over weeks. Review this guide periodically.", category:"memory" },
  { emoji:"🏁", name:"Serial Position Effect", oneliner:"First and last items are best remembered", cheat:"Put your most important benefit first and last in any list. The middle is a memory black hole.", category:"memory" },
];

/* ==========================================
   STAGE META
   ========================================== */
const STAGES = {
  filter:  { label:"🙈 Filter", color:"var(--c-filter)", question:"What do I notice?", desc:"The brain aggressively filters information, keeping only what seems relevant. Users miss important things constantly." },
  meaning: { label:"🔮 Meaning", color:"var(--c-meaning)", question:"What does it mean?", desc:"The brain fills gaps with assumptions, social cues, and stories to decide trust and value." },
  time:    { label:"⏰ Time", color:"var(--c-time)", question:"Should I act now?", desc:"Even when users understand, they must decide to act now, later, or never. Effort, loss, and momentum dominate." },
  memory:  { label:"💾 Memory", color:"var(--c-memory)", question:"What will I remember?", desc:"The brain selectively stores fragments. What's remembered shapes whether users return or forget you." },
};

/* ==========================================
   STATE
   ========================================== */
let learned = JSON.parse(localStorage.getItem('bm_learned') || '[]');
let explored = JSON.parse(localStorage.getItem('bm_explored') || '[]');
let currentFilter = 'all';
let currentView = 'grid';

function saveLearned() { localStorage.setItem('bm_learned', JSON.stringify(learned)); }
function saveExplored() { localStorage.setItem('bm_explored', JSON.stringify(explored)); }

function markExplored(name) {
  if (!explored.includes(name)) {
    explored.push(name);
    saveExplored();
    updateProgress();
  }
}

function toggleLearned(name) {
  if (learned.includes(name)) {
    learned = learned.filter(n => n !== name);
  } else {
    learned.push(name);
  }
  saveLearned();
  updateProgress();
  renderGrid();
  updateCounts();
}

/* ==========================================
   PROGRESS
   ========================================== */
function updateProgress() {
  const total = BIASES.length;
  const count = explored.length;
  const pct = (count / total) * 100;
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = `${pct}%`;
  const countEl = document.getElementById('progressNumber');
  if (countEl) countEl.textContent = count;
}

function updateCounts() {
  document.getElementById('countAll').textContent = BIASES.length;
  document.getElementById('countFilter').textContent = BIASES.filter(b=>b.category==='filter').length;
  document.getElementById('countMeaning').textContent = BIASES.filter(b=>b.category==='meaning').length;
  document.getElementById('countTime').textContent = BIASES.filter(b=>b.category==='time').length;
  document.getElementById('countMemory').textContent = BIASES.filter(b=>b.category==='memory').length;
  document.getElementById('countStar').textContent = BIASES.filter(b=>b.star).length;
  document.getElementById('countLearned').textContent = learned.length;
  document.getElementById('countUnlearned').textContent = BIASES.length - learned.length;
}



/* ==========================================
   RENDER GRID
   ========================================== */
function getFiltered() {
  if (currentFilter === 'star') return BIASES.filter(b => b.star);
  if (currentFilter === 'learned') return BIASES.filter(b => learned.includes(b.name));
  if (currentFilter === 'unlearned') return BIASES.filter(b => !learned.includes(b.name));
  if (currentFilter !== 'all') return BIASES.filter(b => b.category === currentFilter);
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

  grid.innerHTML = list.map((b, i) => {
    const isLearned = learned.includes(b.name);
    return `
    <div class="bias-card ${isLearned ? 'learned' : ''}" data-cat="${b.category}" data-name="${b.name}" style="animation-delay:${Math.min(i * 0.025, 0.6)}s">
      <div class="card-emoji">${b.emoji}</div>
      <div class="card-info">
        <div class="card-name-row">
          <span class="card-name">${b.name}</span>
          ${b.star ? '<span class="card-star">⭐</span>' : ''}
        </div>
        <p class="card-oneliner">${b.oneliner}</p>
        <span class="card-tag">${b.category}</span>
      </div>
    </div>`;
  }).join('');

  // Attach click handlers
  grid.querySelectorAll('.bias-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      const bias = BIASES.find(b => b.name === name);
      if (bias) openDetail(bias);
    });
  });

  // Update topbar
  const titles = {
    all:'All Biases', filter:'Filter Stage', meaning:'Meaning Stage',
    time:'Time Stage', memory:'Memory Stage', star:'Must-Know Biases',
    learned:'Learned', unlearned:'Not Yet Learned'
  };
  document.getElementById('topbarTitle').textContent = titles[currentFilter] || 'All Biases';
  document.getElementById('topbarCount').textContent = `${list.length} principle${list.length!==1?'s':''}`;
}

/* ==========================================
   DETAIL PANEL
   ========================================== */
function openDetail(bias) {
  markExplored(bias.name);
  const stage = STAGES[bias.category];
  const isLearned = learned.includes(bias.name);

  const content = document.getElementById('detailContent');
  content.innerHTML = `
    <div class="detail-stage-bar" style="background:${stage.color}"></div>
    <div class="detail-emoji">${bias.emoji}</div>
    <h2 class="detail-name">${bias.name}</h2>
    <span class="detail-category cat-${bias.category}">${stage.label} — ${stage.question}</span>

    <div class="detail-section">
      <div class="detail-section-title">📝 What It Means</div>
      <p class="detail-text">${bias.oneliner}</p>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">⚡ Daily Cheat Code</div>
      <div class="detail-cheat">${bias.cheat}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">🧭 Decision Stage</div>
      <div class="detail-stage-card">
        <div class="detail-stage-name" style="color:${stage.color}">${stage.label} — ${stage.question}</div>
        <p class="detail-stage-desc">${stage.desc}</p>
      </div>
    </div>

    <div class="detail-actions">
      <button class="detail-btn detail-btn-learn ${isLearned ? 'is-learned' : ''}" id="learnBtn">
        ${isLearned ? '✓ Marked as Learned' : '✓ Mark as Learned'}
      </button>
      <button class="detail-btn detail-btn-next" id="nextBtn">
        Next Bias →
      </button>
    </div>
  `;

  // Learn button
  document.getElementById('learnBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLearned(bias.name);
    const btn = document.getElementById('learnBtn');
    const nowLearned = learned.includes(bias.name);
    btn.textContent = nowLearned ? '✓ Marked as Learned' : '✓ Mark as Learned';
    btn.classList.toggle('is-learned', nowLearned);
  });

  // Next button
  document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const currentList = getFiltered();
    const idx = currentList.findIndex(b => b.name === bias.name);
    const nextBias = currentList[(idx + 1) % currentList.length];
    openDetail(nextBias);
  });

  // Show panel
  document.getElementById('detailOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================
   COMMAND PALETTE (Ctrl+K)
   ========================================== */
function openCmd() {
  const overlay = document.getElementById('cmdOverlay');
  overlay.classList.add('open');
  const input = document.getElementById('cmdInput');
  input.value = '';
  input.focus();
  renderCmdResults('');
}

function closeCmd() {
  document.getElementById('cmdOverlay').classList.remove('open');
}

function renderCmdResults(query) {
  const el = document.getElementById('cmdResults');
  const q = query.toLowerCase().trim();

  if (!q) {
    el.innerHTML = '<div class="cmd-empty">Start typing to search 106 biases...</div>';
    return;
  }

  const results = BIASES.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.oneliner.toLowerCase().includes(q) ||
    b.cheat.toLowerCase().includes(q) ||
    b.category.includes(q)
  ).slice(0, 8);

  if (!results.length) {
    el.innerHTML = `<div class="cmd-empty">No results for "${query}"</div>`;
    return;
  }

  el.innerHTML = results.map(b => `
    <div class="cmd-item" data-name="${b.name}">
      <span class="cmd-item-emoji">${b.emoji}</span>
      <span class="cmd-item-name">${b.name}</span>
      <span class="cmd-item-desc">— ${b.oneliner}</span>
      <span class="cmd-item-cat">${b.category}</span>
    </div>
  `).join('');

  el.querySelectorAll('.cmd-item').forEach(item => {
    item.addEventListener('click', () => {
      const bias = BIASES.find(b => b.name === item.dataset.name);
      closeCmd();
      if (bias) openDetail(bias);
    });
  });
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

  tabsEl.innerHTML = PLAYBOOK.map((p, i) => `
    <button class="pb-tab ${i === 0 ? 'active' : ''}" data-key="${p.key}">
      <span class="pb-tab-icon">${p.icon}</span>
      ${p.label}
    </button>
  `).join('');

  panelsEl.innerHTML = PLAYBOOK.map((p, i) => `
    <div class="pb-panel ${i === 0 ? 'active' : ''}" data-key="${p.key}">
      <div class="pb-panel-header">
        <span class="pb-panel-icon">${p.icon}</span>
        <div class="pb-panel-info">
          <h3>${p.label}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
      ${p.items.map(item => `
        <div class="pb-item" data-principle="${item.principle}">
          <span class="pb-principle">
            <span class="pb-principle-dot"></span>
            ${item.principle}
          </span>
          <span class="pb-action">${item.action}</span>
        </div>
      `).join('')}
    </div>
  `).join('');

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
  document.getElementById('playbookView').style.display = '';
  document.getElementById('topbarTitle').textContent = 'Practical Application';
  document.getElementById('topbarCount').textContent = '4 role-based playbooks';
}

function hidePlaybookView() {
  document.getElementById('playbookView').style.display = 'none';
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

      if (currentFilter === 'playbook') {
        showPlaybookView();
      } else {
        hidePlaybookView();
        renderGrid();
      }
      // Close mobile sidebar
      document.getElementById('sidebar').classList.remove('open');
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
    });
  });

  // Detail panel close
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.getElementById('detailOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailOverlay') || e.target === document.querySelector('.detail-overlay.open::before')) {
      closeDetail();
    }
  });

  // Command palette
  document.getElementById('searchTrigger').addEventListener('click', openCmd);
  document.getElementById('cmdInput').addEventListener('input', (e) => {
    renderCmdResults(e.target.value);
  });
  document.getElementById('cmdOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cmdOverlay')) closeCmd();
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
});
