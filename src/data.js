// PAIR Chocolate — data (mobile reference build)

window.EMOTIONS = {
  LOVE: {
    key: "LOVE",
    name: "진심 어린 사랑",
    en: "Sincere Love",
    color: "#d68a8a",
    soft: "#ebcdcb",
  symbol: window.RES("symLove", "assets/symbol-love.png"),
    product: "러브 초콜릿",
    productEn: "Love Chocolate",
    productNote: "우리의 마음을 더 깊게 이어주는\n연인과 함께 나눠먹는 러브초콜릿",
    dots: { 애정: 5, 여운: 2, 존중: 3, 온기: 3, 진심: 4 },
  },
  COMFORT: {
    key: "COMFORT",
    name: "조용한 위로",
    en: "Quiet Comfort",
    color: "#e7b8bf",
    soft: "#f3dfe3",
  symbol: window.RES("symComfort", "assets/symbol-comfort.png"),
    product: "여성 초콜릿",
    productEn: "Quiet Comfort",
    productNote: "말하지 않아도 전해지는 위로\n생리통을 완화시켜주는 여성초콜릿",
    dots: { 애정: 3, 여운: 2, 존중: 3, 온기: 3, 진심: 5 },
  },
  UNDERSTANDING: {
    key: "UNDERSTANDING",
    name: "깊은 이해심",
    en: "Deep Understanding",
    color: "#b59c87",
    soft: "#ddc9b3",
  symbol: window.RES("symUnderstanding", "assets/symbol-understanding.png"),
    product: "카카오 생초콜릿",
    productEn: "Cacao Ganache",
    productNote: "나무뿌리처럼 깊어지는 이해심\n카카오 생초콜릿",
    dots: { 애정: 3, 여운: 2, 존중: 5, 온기: 4, 진심: 3 },
  },
  CALM: {
    key: "CALM",
    name: "잔잔한 안정감",
    en: "Gentle Calm",
    color: "#9eab97",
    soft: "#cfd5c5",
  symbol: window.RES("symCalm", "assets/symbol-calm.png"),
    product: "말차 생초콜릿",
    productEn: "Matcha Ganache",
    productNote: "잔잔한 바다처럼 넓고 든든한 안정\n말차 생초콜릿",
    dots: { 애정: 3, 여운: 2, 존중: 5, 온기: 3, 진심: 4 },
  },
  AFFECTION: {
    key: "AFFECTION",
    name: "은은한 진심",
    en: "Subtle Affection",
    color: "#d4b687",
    soft: "#e8d2ad",
  symbol: window.RES("symAffection", "assets/symbol-affection.png"),
    product: "얼그레이 생초콜릿",
    productEn: "Earl Grey Ganache",
    productNote: "리본의 묶인 흔적처럼 잔류한 진심\n얼그레이 생초콜릿",
    dots: { 애정: 2, 여운: 5, 존중: 3, 온기: 3, 진심: 4 },
  },
  PROTECTION: {
    key: "PROTECTION",
    name: "따뜻한 보호",
    en: "Warm Protection",
    color: "#b6cad6",
    soft: "#d6e2eb",
  symbol: window.RES("symProtection", "assets/symbol-protection.png"),
    product: "굿슬립 초콜릿",
    productEn: "Goodsleep Chocolate",
    productNote: "해처럼 따스히 감싸주는 애정과 보호\n밤 휴식 시너지를 위한 굿슬립 초콜릿",
    dots: { 애정: 4, 여운: 4, 존중: 2, 온기: 5, 진심: 2 },
  },
  SUPPORT: {
    key: "SUPPORT",
    name: "담담한 응원",
    en: "Steady Support",
    color: "#dba88b",
    soft: "#ecccb6",
  symbol: window.RES("symSupport", "assets/symbol-support.png"),
    product: "에너지 초콜릿",
    productEn: "Energy Chocolate",
    productNote: "작지만 꺼지지 않는 불꽃처럼\n집중력을 높여주는 에너지초콜릿",
    dots: { 애정: 3, 여운: 2, 존중: 5, 온기: 4, 진심: 3 },
  },
};

// 5 relationships (added 썸)
window.RELATIONSHIPS = {
  lover:  { kr: "연인",       en: "Lover" },
  some:   { kr: "썸",         en: "Crush" },
  friend: { kr: "친구",       en: "Friend" },
  family: { kr: "가족",       en: "Family" },
  self:   { kr: "자기 자신",   en: "Yourself" },
};

// 10 questions — Q1 is the relationship anchor.
window.QUESTIONS = [
  {
    isRelationship: true,
    q: (name) => `${name || "이름"} 님, 지금 가장\n자주 떠오르는 사람은\n누구인가요?`,
    options: [
      { t: "연인",     rel: "lover" },
      { t: "썸",       rel: "some" },
      { t: "친구",     rel: "friend" },
      { t: "가족",     rel: "family" },
      { t: "자기 자신", rel: "self" },
    ],
  },
  {
    q: "요즘 가장 자주 드는 감정은\n무엇에 가까운가요?",
    sub: "천천히 떠올려보세요. 정답은 없습니다.",
    options: [
      { t: "누군가와 더 가까워지고 싶다",     s: { LOVE: 2 } },
      { t: "아무 말 없이 쉬고 싶다",          s: { COMFORT: 2 } },
      { t: "누군가를 이해하려 노력 중이다",   s: { UNDERSTANDING: 2 } },
      { t: "조용히 안정되고 싶다",            s: { CALM: 2 } },
    ],
  },
  {
    q: "그 사람과 함께 있을 때\n가장 편안한 순간은 언제인가요?",
    options: [
      { t: "조용히 같은 공간에 있을 때",      s: { COMFORT: 2 } },
      { t: "오래 이야기 나눌 때",            s: { UNDERSTANDING: 2 } },
      { t: "함께 무언가를 할 때",            s: { LOVE: 1, SUPPORT: 1 } },
      { t: "별 말 없이 곁을 지킬 때",         s: { CALM: 2 } },
    ],
  },
  {
    q: "당신은 어떤 방식으로\n마음을 표현하나요?",
    options: [
      { t: "솔직하게 말로 전한다",           s: { LOVE: 2 } },
      { t: "작은 행동으로 보여준다",          s: { AFFECTION: 2 } },
      { t: "묵묵히 챙겨준다",                s: { PROTECTION: 2 } },
      { t: "끝까지 응원한다",                s: { SUPPORT: 2 } },
    ],
  },
  {
    q: "오래 기억되는 관계는\n어떤 모습인가요?",
    options: [
      { t: "감정 표현이 솔직했던 관계",       s: { LOVE: 2 } },
      { t: "편안했던 관계",                  s: { CALM: 2 } },
      { t: "서로를 이해했던 관계",            s: { UNDERSTANDING: 2 } },
      { t: "서로를 응원했던 관계",            s: { SUPPORT: 2 } },
    ],
  },
  {
    q: "지금 당신에게 가장\n필요한 감정은 무엇인가요?",
    options: [
      { t: "사랑받는 감정",       s: { LOVE: 2 } },
      { t: "안심되는 감정",       s: { CALM: 2 } },
      { t: "이해받는 감정",       s: { UNDERSTANDING: 2 } },
      { t: "지지받는 감정",       s: { SUPPORT: 2 } },
    ],
  },
  {
    q: "상대에게 가장 전하고 싶은\n마음은 무엇인가요?",
    options: [
      { t: "“사랑해”",            s: { LOVE: 2 } },
      { t: "“쉬어가도 괜찮아”",   s: { COMFORT: 2 } },
      { t: "“네 마음을 이해해”",  s: { UNDERSTANDING: 2 } },
      { t: "“항상 응원할게”",     s: { SUPPORT: 2 } },
    ],
  },
  {
    q: "당신의 감정은\n어떤 결을 가지고 있나요?",
    sub: "조용히 남는 편인가요, 선명하게 표현되는 편인가요?",
    options: [
      { t: "선명하게 표현되는 편",            s: { LOVE: 2 } },
      { t: "조용히 오래 남는 편",            s: { AFFECTION: 2 } },
      { t: "잔잔하게 흐르는 편",             s: { CALM: 2 } },
      { t: "묵묵히 옆에 두는 편",            s: { PROTECTION: 2 } },
    ],
  },
  {
    q: "누군가를 떠올릴 때\n가장 먼저 생각나는 것은?",
    options: [
      { t: "함께했던 순간",        s: { LOVE: 2 } },
      { t: "그 사람의 표정",       s: { AFFECTION: 2 } },
      { t: "내가 하지 못했던 말",   s: { UNDERSTANDING: 2 } },
      { t: "그 사람이 괜찮은지",   s: { PROTECTION: 2 } },
    ],
  },
  {
    q: "당신은 지금 어떤 관계를\n원하고 있나요?",
    options: [
      { t: "더 가까워지는 관계",    s: { LOVE: 2 } },
      { t: "오래 머무는 관계",     s: { CALM: 2 } },
      { t: "깊이 이해받는 관계",   s: { UNDERSTANDING: 2 } },
      { t: "묵묵히 응원받는 관계", s: { SUPPORT: 2 } },
    ],
  },
];

// Relationship-branched result copy — all 7 emotions × 5 relationships
window.RESULT_COPY = {
  LOVE: {
    lover: {
      summary: "당신의 사랑은 화려하지 않아도\n오래 남는 온기를 가지고 있습니다.",
      body: "당신은 상대와 깊은 감정을 나누고 싶어합니다.\n단순한 설렘보다, 서로의 마음을 오래\n이어갈 수 있는 진정성 있는 관계를 원하고 있어요.",
      detail: "당신은 단순한 설렘보다,\n오래 이어질 수 있는 깊은 애정을 중요하게 생각합니다.\n\n상대와 진심 어린 마음을 나누고,\n서로의 감정을 안정적으로 이어가고 싶어합니다.\n\n화려하지 않아도 오래 남는 사랑을 추구하고 있습니다.",
    },
    some: {
      summary: "당신의 감정은 천천히\n깊어지고 있습니다.",
      body: "상대에게 조금 더 가까워지고 싶은 마음이 큽니다.\n아직 조심스럽지만, 가볍게 스쳐 지나가는\n관계보다는 진정성 있는 연결을 원하고 있어요.",
      detail: "당신은 상대에게 조금 더 가까워지고 싶은 마음이 큽니다.\n\n아직 조심스럽지만, 가볍게 스쳐 지나가는 관계보다는\n진정성 있는 연결을 원하고 있습니다.\n\n당신의 감정은 천천히 깊어지고 있습니다.",
    },
    friend: {
      summary: "오래된 관계는\n작은 표현으로 더 단단해집니다.",
      body: "서로를 오래 이해할 수 있는 관계를\n중요하게 생각합니다. 편안함 속에서도\n진심을 나눌 수 있는 사이를 바라고 있어요.",
      detail: "당신은 서로를 오래 이해할 수 있는 관계를 중요하게 생각합니다.\n\n편안함 속에서도 진심을 나눌 수 있는,\n오래 곁에 남는 관계를 바라고 있습니다.",
    },
    family: {
      summary: "가장 가까운 마음일수록\n더 늦게 알아차리기도 합니다.",
      body: "당연해서 표현하지 못했던 애정을 다시 떠올리는 상태.\n익숙한 관계 속 사랑을 천천히\n돌아보고 있습니다.",
      detail: "당신은 가족이라는 관계 속에서\n표현되지 않은 사랑을 다시 들여다보고 있습니다.\n\n익숙함 속에서도 가장 깊은 애정이\n조용히 자라나고 있어요.",
    },
    self: {
      summary: "당신의 마음은\n조용한 애정을 필요로 하고 있습니다.",
      body: "당신은 지금 스스로를 조금 더 아껴주고 싶어합니다.\n불안보다 안정, 소비되는 관계보다\n오래 남는 감정을 원하고 있어요.",
      detail: "당신은 지금 스스로를 조금 더 아껴주고 싶어합니다.\n\n불안보다 안정,\n소비되는 관계보다 오래 남는 감정을 원하고 있습니다.\n\n당신의 마음은 조용한 애정을 필요로 하고 있습니다.",
    },
  },
  COMFORT: {
    lover: { summary: "조용한 위로는 오래 남습니다.", body: "말하지 못한 마음을 조용히 안아주고 싶은 상태.\n억지 위로보다 곁에 머물고 싶어 합니다.", detail: "당신은 말 대신 함께 있는 시간으로\n사랑을 전하고 있습니다.\n\n억지 위로보다 곁에 머무는 시간이\n가장 큰 위안이 되는 시기예요." },
    some: { summary: "조심스러운 마음에도\n온기는 전해집니다.", body: "아직 확신은 없지만, 그 사람에게\n조용한 위로가 되고 싶다는 마음이 짙어지고 있어요.", detail: "당신의 마음은 표현되지 않아도\n이미 따뜻하게 자리잡고 있습니다.\n\n조심스러움 너머에 작은 진심이 머물고 있어요." },
    friend: { summary: "들어주는 마음만으로도\n위로는 완성됩니다.", body: "가볍게 넘겼던 감정에 공감받고 싶은 상태.\n누군가 내 이야기를 들어주길 바라고 있어요.", detail: "당신은 친구에게 화려한 위로보다\n조용히 들어주는 마음을 더 원하고 있습니다.\n\n그 자체로 충분한 시기예요." },
    family: { summary: "가까운 관계일수록\n위로는 더 조용해집니다.", body: "익숙해서 놓치고 있던 감정을 다시 돌아보는 상태.\n무심했던 마음을 천천히 정리하고 있어요.", detail: "가족 사이의 위로는\n말이 아닌 결로 전달됩니다.\n\n당신은 그 결을 다시 돌아보고 있어요." },
    self: { summary: "괜찮아지기 위해선\n쉬어가는 시간도 필요합니다.", body: "스스로를 돌봐야 한다는 신호가 쌓인 상태.\n잠시 멈춰 쉬어갈 시간이 필요합니다.", detail: "당신에게 가장 필요한 것은\n무리하지 않아도 된다는 허락입니다.\n\n조용히 쉬어가는 시간이\n회복의 시작이 되어줄 거예요." },
  },
  UNDERSTANDING: {
    lover: { summary: "이해는 사랑을 오래\n지속시키는 힘입니다.", body: "사랑보다 더 깊은 이해를 원하고 있는 상태.\n상대의 감정을 오래 들여다보고 있어요.", detail: "당신은 표현보다 먼저\n상대의 마음을 읽고 싶어 합니다.\n\n관계의 결을 오래 들여다볼 줄 아는 사람이에요." },
    some: { summary: "이해받고 싶은 마음이\n천천히 자라고 있습니다.", body: "조심스럽지만 상대를 알아가고 싶고,\n또 이해받고 싶다는 마음이 함께 자라고 있어요.", detail: "당신은 빠른 감정보다\n천천히 이해되는 관계를 원하고 있습니다.\n\n그 사람을 더 알고 싶어하는 마음이 깊어지고 있어요." },
    friend: { summary: "오래 남는 관계는\n이해에서 시작됩니다.", body: "쉽게 지나칠 수 있는 감정을 오래 기억하는 상태.\n관계를 가볍게 소비하지 않는 사람입니다.", detail: "당신은 친구 사이에서도\n쉽게 흩어지지 않는 감정을 소중히 여기는 사람입니다.\n\n오래 들여다본 감정이 가장 오래 남아요." },
    family: { summary: "가족이라는 관계에도\n이해는 필요합니다.", body: "쉽게 설명하지 않아도 서로를 이해하고 싶은 상태.\n말보다 마음을 먼저 바라보고 있어요.", detail: "가까운 사이일수록 이해는 더 느리게 도착하기도 합니다.\n\n당신은 그 침묵 속에서도\n의미를 길어 올리는 사람이에요." },
    self: { summary: "당신의 마음도\n충분히 이해받아야 합니다.", body: "스스로의 감정을 천천히 이해하려는 상태.\n억눌린 감정을 들여다볼 시기입니다.", detail: "당신은 지금 자신의 마음에게도\n충분한 시간을 허락해야 합니다.\n\n이해는 자신을 향해서도 흘러야 해요." },
  },
  CALM: {
    lover: { summary: "편안한 관계는\n오래 머무릅니다.", body: "설렘보다 편안함을 더 원하고 있는 상태.\n함께 있는 것만으로 안정감을 느끼고 있어요.", detail: "당신은 빠르게 타오르는 감정보다\n오래 머무를 수 있는 관계를 더 신뢰합니다.\n\n잔잔함이 깊이가 되는 시기예요." },
    some: { summary: "급하지 않은 마음이\n관계를 단단하게 만듭니다.", body: "아직 흐릿하지만, 천천히 자리잡고 싶은\n안정적인 감정이 자라고 있어요.", detail: "당신은 빠른 확신보다\n천천히 다가오는 안정을 더 신뢰합니다.\n\n조급하지 않은 그 마음이 관계를 단단하게 만들 거예요." },
    friend: { summary: "가볍게 웃을 수 있는\n관계는 소중합니다.", body: "부담 없이 함께할 수 있는 관계를 원하는 상태.\n편안한 연결을 오래 유지하고 싶어 해요.", detail: "당신은 친구와의 잔잔함을\n그 자체로 사랑하는 사람입니다.\n\n별 일 없는 시간들이 깊은 위안이 되고 있어요." },
    family: { summary: "변하지 않는 마음은\n안정감을 만듭니다.", body: "늘 같은 자리에 있는 관계에서 안정을 느끼는 상태.\n익숙함 속 평온함을 중요하게 생각합니다.", detail: "당신은 가족이라는 안정 위에서\n조용히 회복되고 있는 시기예요.\n\n변하지 않는 마음이 가장 큰 위로가 됩니다." },
    self: { summary: "잔잔함은 감정을\n회복시키는 힘이 됩니다.", body: "복잡한 감정보다 평온함이 필요한 상태.\n잠시 숨을 고를 시간이 필요합니다.", detail: "당신에게 필요한 것은\n복잡함을 비워낼 잔잔한 시간입니다.\n\n그 고요 안에서 마음이 다시 자라날 거예요." },
  },
  AFFECTION: {
    lover: { summary: "진심은 작은 표현 안에도\n남아 있습니다.", body: "크게 표현하지 않아도 마음이 이어지고 있는 상태.\n작은 행동 속 진심을 중요하게 생각합니다.", detail: "당신은 화려함보다 잔잔한 결을\n더 신뢰하는 사람입니다.\n\n작은 표현 안에 남는 진심을\n오래 기억할 줄 알아요." },
    some: { summary: "표현되지 않은 진심이\n천천히 닿고 있습니다.", body: "조심스러운 표현 너머로 진심이 자라고 있어요.\n부담 없이 닿는 마음을 신뢰하는 상태입니다.", detail: "당신은 크게 다가가지 않아도\n진심은 결국 닿는다는 것을 알고 있는 사람입니다.\n\n그 잔잔한 마음이 지금 자라고 있어요." },
    friend: { summary: "부담 없는 진심은\n오래 기억됩니다.", body: "가볍지만 오래 이어지는 감정을 소중히 여기는 상태.\n자연스러운 관계를 편안하게 느끼고 있어요.", detail: "당신은 친구 사이의 자연스러운 결을\n사랑하는 사람입니다.\n\n부담 없이 건넬 수 있는 마음이\n가장 오래 남는다는 걸 알고 있어요." },
    family: { summary: "익숙한 마음일수록\n더 오래 남습니다.", body: "말하지 않아도 전해지는 애정을 느끼는 상태.\n익숙한 관계 속 따뜻함을 기억하고 있어요.", detail: "당신은 가족이라는 익숙함 속에서\n잔류한 진심을 다시 길어 올리고 있습니다.\n\n표현되지 않은 마음도 결국 남아요." },
    self: { summary: "당신에게도\n부드러운 말이 필요합니다.", body: "스스로에게 조금 더 다정해질 필요가 있는 상태.\n작은 위로를 천천히 쌓아가야 합니다.", detail: "당신의 마음에게\n조금 더 부드러운 언어를 건네주세요.\n\n작은 다정함이 쌓이면\n오래 가는 위안이 됩니다." },
  },
  PROTECTION: {
    lover: { summary: "보호하고 싶은 마음도\n사랑의 한 형태입니다.", body: "상대를 지켜주고 싶은 마음이 강해진 상태.\n사랑을 행동으로 표현하고 싶어 합니다.", detail: "당신은 말보다 챙김으로\n마음을 옮기는 시기예요.\n\n지켜주고 싶은 마음 그대로가\n사랑의 표현이 되고 있습니다." },
    some: { summary: "조심스러운 챙김이\n관계를 따뜻하게 만듭니다.", body: "아직 가까운 사이는 아니지만,\n상대가 걱정되는 마음이 자라고 있어요.", detail: "당신은 아직 확신은 없지만\n상대를 챙기고 싶은 마음이 먼저 자라는 사람입니다.\n\n그 잔잔한 보호의 마음이 천천히 닿고 있어요." },
    friend: { summary: "지켜주고 싶은 마음은\n관계를 단단하게 만듭니다.", body: "소중한 사람을 잃고 싶지 않은 상태.\n관계를 더 안정적으로 이어가고 싶어 해요.", detail: "당신은 친구를\n조용히 지켜주고 싶은 마음을 가진 사람입니다.\n\n그 마음이 관계를 오래\n단단하게 만들고 있어요." },
    family: { summary: "가족을 향한 마음은\n늘 조용히 깊어집니다.", body: "가장 익숙한 사람들을 챙기고 싶은 상태.\n책임감과 애정이 함께 깊어지고 있어요.", detail: "당신은 가족을 향한 마음을\n묵묵한 챙김으로 옮기고 있습니다.\n\n표현보다 행동이 먼저인 사랑이에요." },
    self: { summary: "당신 자신도\n보호받아야 할 존재입니다.", body: "스스로를 보호해야 할 시기.\n감정 소모를 줄이고 회복이 필요한 상태입니다.", detail: "당신은 지금 가장 먼저\n자신을 챙겨야 하는 시기입니다.\n\n무엇보다 자신에게\n다정한 보호를 허락해주세요." },
  },
  SUPPORT: {
    lover: { summary: "오래가는 사랑은\n응원에서 시작됩니다.", body: "서로의 삶을 묵묵히 응원하고 싶은 상태.\n화려함보다 안정적인 관계를 원하고 있어요.", detail: "당신은 곁에 있는 것만으로\n충분한 응원이 된다는 것을 아는 사람입니다.\n\n오래가는 사랑의 결을 만들어가고 있어요." },
    some: { summary: "조용한 응원이\n천천히 닿고 있습니다.", body: "아직 확신은 없지만, 상대의 하루를\n조용히 응원하고 싶다는 마음이 짙어지고 있어요.", detail: "당신의 응원은 표현되지 않아도\n상대에게 천천히 닿고 있습니다.\n\n그 잔잔한 마음이 지금 자라나는 시기예요." },
    friend: { summary: "곁에 있어주는 것만으로도\n응원이 됩니다.", body: "상대의 노력을 오래 지켜보고 있는 상태.\n결과보다 과정을 더 응원하는 사람입니다.", detail: "당신은 친구의 하루를\n묵묵히 지켜보고 있는 사람입니다.\n\n그 시선이 가장 큰 응원이 되어주고 있어요." },
    family: { summary: "조용한 응원은\n가장 오래 남습니다.", body: "가족의 하루를 묵묵히 걱정하고 있는 상태.\n표현보다 행동으로 마음을 전하고 있어요.", detail: "당신은 가족을 향해\n표현되지 않은 응원을 매일 보내고 있습니다.\n\n작은 챙김이 결국 오래 남아요." },
    self: { summary: "당신은 생각보다\n잘 버텨내고 있습니다.", body: "지친 자신을 다시 일으켜 세우려는 상태.\n조금 느려도 계속 나아가고 있습니다.", detail: "당신은 지금\n자신에게 가장 따뜻한 응원을 건네야 합니다.\n\n잘 버텨내고 있다는 사실을\n잊지 마세요." },
  },
};
