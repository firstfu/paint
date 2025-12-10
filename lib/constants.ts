// 公司資訊
export const COMPANY = {
  name: '塗新居',
  nameEn: 'TuXinJu',
  slogan: '讓您的房屋煥然一新',
  description: '南投縣專業屋頂清洗、油漆、防水服務團隊，品質保證。',
  // phone: '049-123-4567',  // 室內電話已移除
  phone: '0912-345-678',  // 改用行動電話作為主要聯絡方式
  mobile: '0912-345-678',
  // email: 'service@tuxinju.com.tw',  // email 已移除
  address: '南投縣南投市中興路123號',
  hours: '週一至週六 8:00-18:00',
  region: '南投縣',
  subRegions: ['南投市', '草屯鎮', '埔里鎮', '竹山鎮', '名間鄉', '集集鎮', '水里鄉', '魚池鄉'],
  // yearEstablished: 2004,
  // completedProjects: 2500,
  satisfactionRate: 98,
} as const;

// 服務項目
export const SERVICES = [
  {
    id: 'roof-cleaning',
    title: '洗屋頂',
    titleEn: 'Roof Cleaning',
    shortDesc: '專業高壓清洗，還原屋頂原貌',
    description: '使用專業高壓清洗設備，徹底清除屋頂上的青苔、污垢、鳥糞等頑固髒污，讓您的屋頂恢復亮麗如新。我們採用環保清潔劑，不傷害屋頂材質，同時保護環境。',
    features: ['高壓水柱清洗', '環保清潔劑', '青苔藻類去除', '排水溝清理'],
    icon: 'droplets',
    image: '/images/services/roof-cleaning.jpg',
  },
  {
    id: 'roof-painting',
    title: '油漆屋頂',
    titleEn: 'Roof Painting',
    shortDesc: '隔熱防鏽，延長屋頂壽命',
    description: '採用高品質隔熱防鏽漆料，不僅美化屋頂外觀，更能有效降低室內溫度，延長屋頂使用壽命。我們提供多種顏色選擇，滿足您的個性化需求。',
    features: ['隔熱塗料', '防鏽處理', '多色可選'],
    icon: 'paintbrush',
    image: '/images/services/roof-painting.jpg',
  },
  {
    id: 'interior-painting',
    title: '室內油漆',
    titleEn: 'Interior Painting',
    shortDesc: '精緻粉刷，打造溫馨空間',
    description: '專業室內粉刷服務，從牆面修補到精緻上漆，每一道工序都嚴格把關。使用低 VOC 環保漆料，保護家人健康，讓您的居家空間煥然一新。',
    features: ['牆面修補', '批土打底', '環保漆料', '細節收邊'],
    icon: 'roller',
    image: '/images/services/interior-painting.jpg',
  },
  {
    id: 'waterproofing',
    title: '防水處理',
    titleEn: 'Waterproofing',
    shortDesc: '徹底防漏，守護您的家',
    description: '針對屋頂、外牆、浴室等容易漏水區域，提供專業防水工程服務。使用優質防水材料，搭配精湛工法，從根本解決漏水問題，給您一個乾爽的居住環境。',
    features: ['漏水檢測', '防水層施作', '結構補強'],
    icon: 'shield',
    image: '/images/services/waterproofing.jpg',
  },
] as const;

// 導航連結
export const NAV_LINKS = [
  { href: '/', label: '首頁', hasDropdown: false },
  { href: '/services', label: '服務項目', hasDropdown: true },
  { href: '/portfolio', label: '案例展示', hasDropdown: false },
  { href: '/about', label: '關於我們', hasDropdown: false },
  { href: '/blog', label: '知識專欄', hasDropdown: false },
  { href: '/faq', label: '常見問題', hasDropdown: false },
  { href: '/contact', label: '聯絡我們', hasDropdown: false },
] as const;

// 客戶評價
export const TESTIMONIALS = [
  {
    id: 1,
    name: '林先生',
    title: '住宅屋主',
    location: '南投市',
    content: '屋頂洗完真的像新的一樣！師傅很專業，價格也很合理。整個過程很細心，連排水溝都幫我清理乾淨了。',
    rating: 5,
    service: '洗屋頂',
    image: '/images/testimonials/customer-1.jpg',
  },
  {
    id: 2,
    name: '陳小姐',
    title: '店家老闆',
    location: '草屯鎮',
    content: '店面重新粉刷後，客人都說變得很有質感。塗新居的團隊很準時，而且不會影響我們營業，真的很貼心。',
    rating: 5,
    service: '室內油漆',
    image: '/images/testimonials/customer-2.jpg',
  },
  {
    id: 3,
    name: '張大哥',
    title: '農舍屋主',
    location: '埔里鎮',
    content: '困擾多年的屋頂漏水問題終於解決了！之前找了好幾家都沒用，塗新居真的很厲害，現在下再大的雨都不怕了。',
    rating: 5,
    service: '防水處理',
    image: '/images/testimonials/customer-3.jpg',
  },
  {
    id: 4,
    name: '王太太',
    title: '公寓住戶',
    location: '竹山鎮',
    content: '屋頂重新上漆後，夏天室內溫度明顯降低，冷氣費省了不少！而且師傅都有做好防護，完全不用擔心弄髒。',
    rating: 5,
    service: '油漆屋頂',
    image: '/images/testimonials/customer-4.jpg',
  },
] as const;

// 團隊成員
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: '陳建國',
    role: '創辦人 / 總監',
    // experience: '25年',
    description: '對品質有著極高的堅持，帶領團隊追求卓越。',
    image: '/images/team/member-1.jpg',
  },
  {
    id: 2,
    name: '李明輝',
    role: '工程主管',
    // experience: '18年',
    description: '專精防水工程，解決各種疑難雜症。',
    image: '/images/team/member-2.jpg',
  },
  {
    id: 3,
    name: '黃志偉',
    role: '資深師傅',
    // experience: '15年',
    description: '細心負責，客戶好評不斷的口碑師傅。',
    image: '/images/team/member-3.jpg',
  },
] as const;

// FAQ 問題
export const FAQS = [
  {
    id: 1,
    question: '洗屋頂需要多長時間？',
    answer: '一般住宅屋頂清洗約需要半天到一天的時間，視屋頂面積和髒污程度而定。我們會在到場評估後給您確切的時間。',
    category: 'roof-cleaning',
  },
  {
    id: 2,
    question: '油漆屋頂可以選擇什麼顏色？',
    answer: '我們提供多種顏色選擇，包括常見的灰色、綠色、紅色、藍色等。您也可以指定特定色號，我們會盡力為您調配。',
    category: 'roof-painting',
  },
  {
    id: 3,
    question: '室內油漆會有味道嗎？住戶需要搬出去嗎？',
    answer: '我們使用低 VOC 環保漆料，味道輕微且散發快速。一般建議施工當天保持通風，通常不需要搬出。如果家中有嬰幼兒或過敏體質者，可以暫時避開 1-2 天。',
    category: 'interior-painting',
  },
  // {
  //   id: 4,
  //   question: '防水工程保固多久？',
  //   answer: '我們的防水工程提供 5 年保固。保固期間如有任何漏水問題，我們會免費到府檢修。',
  //   category: 'waterproofing',
  // },
  {
    id: 5,
    question: '如何預約服務？',
    answer: '您可以透過網站表單、電話（0912-345-678）或 LINE 預約。我們會在 24 小時內回覆您，並安排免費到府評估。',
    category: 'general',
  },
  {
    id: 6,
    question: '報價是免費的嗎？',
    answer: '是的，我們提供免費到府評估報價服務。師傅會實際查看現場狀況後，給您詳細的報價單，絕不會有隱藏費用。',
    category: 'general',
  },
] as const;

// 部落格文章（假資料）
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'roof-cleaning-guide',
    title: '屋頂清洗完整指南：什麼時候該洗？怎麼洗最乾淨？',
    excerpt: '屋頂長年累積的青苔、污垢不僅影響美觀，更可能造成漏水問題。本文教您判斷清洗時機，以及專業清洗的正確步驟。',
    content: '',
    image: '/images/blog/roof-cleaning-guide.jpg',
    category: '屋頂清洗',
    author: '陳建國',
    publishedAt: '2025-01-15',
    readTime: 5,
  },
  {
    id: 2,
    slug: 'waterproofing-tips',
    title: '南投潮濕氣候必讀：5 個防水工程重點',
    excerpt: '南投山區濕氣重，房屋防水格外重要。專家分享 5 個防水工程重點，幫助您的房屋遠離漏水困擾。',
    content: '',
    image: '/images/blog/waterproofing-tips.jpg',
    category: '防水工程',
    author: '李明輝',
    publishedAt: '2025-01-10',
    readTime: 4,
  },
  {
    id: 3,
    slug: 'paint-color-selection',
    title: '室內油漆顏色怎麼選？設計師推薦的配色技巧',
    excerpt: '選對油漆顏色可以讓空間看起來更大、更舒適。本文分享專業設計師的配色建議，幫助您打造理想居家空間。',
    content: '',
    image: '/images/blog/paint-color-selection.jpg',
    category: '室內油漆',
    author: '黃志偉',
    publishedAt: '2025-01-05',
    readTime: 6,
  },
  {
    id: 4,
    slug: 'roof-painting-benefits',
    title: '屋頂油漆的 4 大好處：不只是美觀那麼簡單',
    excerpt: '屋頂油漆除了美化外觀，還有隔熱、防鏽、延長壽命等多重好處。了解這些優點，讓您的投資更有價值。',
    content: '',
    image: '/images/blog/roof-painting-benefits.jpg',
    category: '屋頂油漆',
    author: '陳建國',
    publishedAt: '2024-12-28',
    readTime: 4,
  },
] as const;

// 作品案例
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: '南投市透天厝屋頂清洗',
    description: '30 年老屋屋頂，青苔覆蓋嚴重，經過專業高壓清洗後煥然一新。',
    category: 'roof-cleaning',
    location: '南投市',
    beforeImage: '/images/portfolio/case-1-before.jpg',
    afterImage: '/images/portfolio/case-1-after.jpg',
    completedAt: '2025-01',
  },
  {
    id: 2,
    title: '草屯鎮別墅室內全室粉刷',
    description: '200 坪別墅室內全室重新粉刷，採用高級環保漆料，呈現高雅質感。',
    category: 'interior-painting',
    location: '草屯鎮',
    beforeImage: '/images/portfolio/case-2-before.jpg',
    afterImage: '/images/portfolio/case-2-after.jpg',
    completedAt: '2024-12',
  },
  {
    id: 3,
    title: '埔里鎮民宿屋頂防水工程',
    description: '解決長年漏水問題，全面翻新防水層。',
    category: 'waterproofing',
    location: '埔里鎮',
    beforeImage: '/images/portfolio/case-3-before.jpg',
    afterImage: '/images/portfolio/case-3-after.jpg',
    completedAt: '2024-11',
  },
  {
    id: 4,
    title: '竹山鎮工廠鐵皮屋頂油漆',
    description: '大面積鐵皮屋頂翻新，採用隔熱防鏽漆，有效降低廠房溫度。',
    category: 'roof-painting',
    location: '竹山鎮',
    beforeImage: '/images/portfolio/case-4-before.jpg',
    afterImage: '/images/portfolio/case-4-after.jpg',
    completedAt: '2024-10',
  },
] as const;

// SEO 關鍵字
export const SEO_KEYWORDS = {
  primary: ['南投洗屋頂', '南投屋頂油漆', '南投室內油漆', '南投防水工程'],
  secondary: ['屋頂清洗價格', '外牆防水', '室內粉刷', '屋頂翻新', '南投油漆師傅'],
  local: ['南投市油漆', '草屯油漆', '埔里防水', '竹山屋頂清洗'],
} as const;
