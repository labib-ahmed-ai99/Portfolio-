import type {
  AchievementItem,
  EducationItem,
  GoalVisionItem,
  InterestItem,
  LearningGoalItem,
  LocalizedText,
  NavItem,
  ProjectItem,
  SpokenLanguageItem,
  TechnicalSkillItem,
} from '../types/portfolio';

/**
 * PROFILE IMAGE CONFIGURATION
 * To add your real portrait later:
 * 1. Place your image inside `/public/images/profile.jpg` (or `.png` / `.webp`).
 * 2. Set `PROFILE_IMAGE_URL = '/images/profile.jpg'`.
 * Leave as `null` to show the minimal AI neural placeholder card.
 */
export const PROFILE_IMAGE_URL: string | null = null;

export const SOCIAL_LINKS = {
  github: 'https://github.com/labib-ahmed-ai99',
  instagram: 'https://instagram.com/labibahmed909',
};

export const IDENTITY = {
  name: {
    en: 'Labib Ahmed',
    bn: 'লাবিব আহমেদ',
  },
  role: {
    en: 'Aspiring AI & Machine Learning Engineer · Student from Bangladesh',
    bn: 'আগ্রহী এআই ও মেশিন লার্নিং প্রকৌশলী · বাংলাদেশের শিক্ষার্থী',
  },
  tagline: {
    en: 'Building Intelligence, Creating the Future.',
    bn: 'বুদ্ধিমত্তা তৈরি, ভবিষ্যৎ নির্মাণ।',
  },
  heroIntro: {
    en: 'I am a Grade 11 Science student from Bangladesh with a deep curiosity for mathematics, programming, and how intelligent systems work. I am currently building my fundamentals in Python and web development as I work toward a future in Artificial Intelligence and Machine Learning.',
    bn: 'আমি বাংলাদেশের একাদশ শ্রেণির বিজ্ঞান বিভাগের একজন শিক্ষার্থী। গণিত, প্রোগ্রামিং এবং বুদ্ধিমান সিস্টেম কীভাবে কাজ করে তা জানার প্রতি আমার গভীর আগ্রহ রয়েছে। কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং ক্ষেত্রে ভবিষ্যৎ গড়ার লক্ষ্যে আমি বর্তমানে পাইথন ও ওয়েব ডেভেলপমেন্টের মৌলিক ভিত্তি তৈরি করছি।',
  },
  location: {
    en: 'Bangladesh',
    bn: 'বাংলাদেশ',
  },
  academicStage: {
    en: 'Grade 11 · Science',
    bn: 'একাদশ শ্রেণি · বিজ্ঞান',
  },
  profileCardPlaceholderTitle: {
    en: 'Profile Portrait Slot',
    bn: 'প্রোফাইল ছবির স্থান',
  },
  profileCardPlaceholderNote: {
    en: 'Optional photo placeholder — ready to be replaced with a portrait image later.',
    bn: 'ঐচ্ছিক ছবির স্থান — পরবর্তীতে আসল প্রোফাইল ছবি দিয়ে পরিবর্তনযোগ্য।',
  },
};

/**
 * Top bar shows 5 grouped navigation items for clean single-line layout.
 * The Full Section Menu and Footer list all 9 sections.
 */
export const TOP_NAV_ITEMS: NavItem[] = [
  { id: 'about', label: { en: 'About', bn: 'পরিচিতি' } },
  { id: 'education', label: { en: 'Education', bn: 'শিক্ষা' } },
  { id: 'projects', label: { en: 'Projects', bn: 'প্রকল্প' } },
  { id: 'achievements', label: { en: 'Achievements', bn: 'অর্জন' } },
  { id: 'contact', label: { en: 'Contact', bn: 'যোগাযোগ' } },
];

export const ALL_NAV_SECTIONS: NavItem[] = [
  {
    id: 'home',
    label: { en: 'Home', bn: 'হোম' },
    description: { en: 'Overview & introduction', bn: 'পরিচিতি ও সারসংক্ষেপ' },
  },
  {
    id: 'about',
    label: { en: 'About Me', bn: 'আমার সম্পর্কে' },
    description: { en: 'Background & personal qualities', bn: 'পটভূমি ও ব্যক্তিগত গুণাবলি' },
  },
  {
    id: 'education',
    label: { en: 'Education', bn: 'শিক্ষাগত যোগ্যতা' },
    description: { en: 'Academic timeline', bn: 'শিক্ষাজীবনের ধারাবাহিকতা' },
  },
  {
    id: 'skills',
    label: { en: 'Skills & Learning', bn: 'দক্ষতা ও শিক্ষা' },
    description: { en: 'Current foundation & learning roadmap', bn: 'বর্তমান ভিত্তি ও শেখার পরিকল্পনা' },
  },
  {
    id: 'projects',
    label: { en: 'Projects', bn: 'প্রকল্পসমূহ' },
    description: { en: 'Beginner Python & HTML work', bn: 'পাইথন ও এইচটিএমএল প্রকল্প' },
  },
  {
    id: 'achievements',
    label: { en: 'Achievements', bn: 'অর্জন ও পুরস্কার' },
    description: { en: 'Olympiads, coding & cultural awards', bn: 'অলিম্পিয়াড, প্রোগ্রামিং ও সাংস্কৃতিক পুরস্কার' },
  },
  {
    id: 'interests',
    label: { en: 'Interests & Languages', bn: 'আগ্রহ ও ভাষা' },
    description: { en: 'Core fields & spoken languages', bn: 'মূল আগ্রহের ক্ষেত্র ও ভাষাগত দক্ষতা' },
  },
  {
    id: 'goals',
    label: { en: 'Goals & Vision', bn: 'লক্ষ্য ও ভবিষ্যৎ' },
    description: { en: 'AI engineering & study abroad ambitions', bn: 'এআই প্রকৌশল ও উচ্চশিক্ষার লক্ষ্য' },
  },
  {
    id: 'contact',
    label: { en: 'Contact', bn: 'যোগাযোগ' },
    description: { en: 'Send a message & social links', bn: 'বার্তা পাঠান ও সামাজিক মাধ্যম' },
  },
];

export const ABOUT_CONTENT = {
  eyebrow: {
    en: '01. About Me',
    bn: '০১. আমার সম্পর্কে',
  },
  heading: {
    en: 'Driven by curiosity, logic, and a desire to solve real problems',
    bn: 'কৌতূহল, যুক্তি ও বাস্তব সমস্যা সমাধানের আগ্রহে এগিয়ে চলা',
  },
  paragraphs: [
    {
      en: 'I am a curious student who enjoys technology, programming, mathematics, problem-solving, and learning how intelligent systems work from the ground up.',
      bn: 'আমি একজন কৌতূহলী শিক্ষার্থী যে প্রযুক্তি, প্রোগ্রামিং, গণিত, সমস্যা সমাধান এবং বুদ্ধিমান সিস্টেম কীভাবে কাজ করে তা গভীরভাবে জানতে ভালোবাসে।',
    },
    {
      en: 'My primary interests lie in Artificial Intelligence, Machine Learning, and Web Development. At this stage of my journey, I focus on strengthening my fundamentals, writing clean beginner code, and developing practical skills step by step so I can build technology that solves meaningful real-world problems.',
      bn: 'আমার মূল আগ্রহের ক্ষেত্র হলো কৃত্রিম বুদ্ধিমত্তা (AI), মেশিন লার্নিং এবং ওয়েব ডেভেলপমেন্ট। আমার শেখার এই পর্যায়ে আমি মৌলিক ভিত্তি শক্তিশালী করা, পরিষ্কার প্রাথমিক কোড লেখা এবং ধাপে ধাপে ব্যবহারিক দক্ষতা অর্জনে মনোযোগ দিচ্ছি, যাতে ভবিষ্যতে বাস্তবসম্মত সমস্যার সমাধানকারী প্রযুক্তি তৈরি করতে পারি।',
    },
  ],
  qualitiesHeading: {
    en: 'Personal Qualities',
    bn: 'ব্যক্তিগত গুণাবলি',
  },
  qualitiesDisclaimer: {
    en: 'These reflect personal traits and learning habits I strive to practice every day, rather than formal professional credentials.',
    bn: 'এগুলো কোনো আনুষ্ঠানিক পেশাদার সনদ নয়, বরং প্রতিদিনের শেখা ও কাজে চর্চা করা আমার ব্যক্তিগত বৈশিষ্ট্য ও অভ্যাস।',
  },
  qualities: [
    { en: 'Curious and eager to learn', bn: 'কৌতূহলী ও শেখার প্রবল আগ্রহ' },
    { en: 'Problem solver', bn: 'সমস্যা সমাধানকারী মানসিকতা' },
    { en: 'Analytical thinker', bn: 'বিশ্লেষণধর্মী চিন্তাভাবনা' },
    { en: 'Ambitious', bn: 'উচ্চাকাঙ্ক্ষী' },
    { en: 'Self-motivated', bn: 'স্ব-প্রণোদিত' },
    { en: 'Creative thinker', bn: 'সৃজনশীল চিন্তাবিদ' },
    { en: 'Leadership', bn: 'নেতৃত্বের গুণাবলি' },
    { en: 'Innovative', bn: 'উদ্ভাবনী দৃষ্টিভঙ্গি' },
  ] as LocalizedText[],
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'mcpsc',
    periodLabel: {
      en: 'Current · Expected HSC 2028',
      bn: 'বর্তমান · সম্ভাব্য এইচএসসি ২০২৮',
    },
    institution: {
      en: 'Mirpur Cantonment Public School and College',
      bn: 'মিরপুর ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ',
    },
    status: {
      en: 'Higher Secondary (Grade 11)',
      bn: 'উচ্চ মাধ্যমিক (একাদশ শ্রেণি)',
    },
    details: [
      {
        en: 'Class: Grade 11, Science group',
        bn: 'শ্রেণি: একাদশ শ্রেণি, বিজ্ঞান বিভাগ',
      },
      {
        en: 'Expected HSC examination year: 2028',
        bn: 'সম্ভাব্য এইচএসসি পরীক্ষার বছর: ২০২৮',
      },
    ],
  },
  {
    id: 'baraibunia',
    periodLabel: {
      en: 'Completed · SSC 2026',
      bn: 'সম্পন্ন · এসএসসি ২০২৬',
    },
    institution: {
      en: 'Baraibunia Secondary School',
      bn: 'বড়াইবুনিয়া মাধ্যমিক বিদ্যালয়',
    },
    status: {
      en: 'Secondary School Certificate (SSC)',
      bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
    },
    details: [
      {
        en: 'SSC passing year: 2026',
        bn: 'এসএসসি পাসের বছর: ২০২৬',
      },
      {
        en: 'SSC result: GPA 5.00',
        bn: 'এসএসসি ফলাফল: জিপিএ ৫.০০',
      },
    ],
  },
];

export const TECHNICAL_SKILLS: TechnicalSkillItem[] = [
  {
    id: 'basic-python',
    name: {
      en: 'Basic Python Programming',
      bn: 'মৌলিক পাইথন প্রোগ্রামিং',
    },
    level: {
      en: 'Beginner Level',
      bn: 'প্রাথমিক স্তর',
    },
    summary: {
      en: 'Understanding foundational syntax, variables, conditionals, loops, basic input/output, and small console programs.',
      bn: 'মৌলিক সিনট্যাক্স, ভ্যারিয়েবল, কন্ডিশনাল, লুপ, সাধারণ ইনপুট/আউটপুট এবং ছোট কনসোল প্রোগ্রাম তৈরির প্রাথমিক ধারণা।',
    },
  },
  {
    id: 'basic-html',
    name: {
      en: 'Basic HTML',
      bn: 'মৌলিক এইচটিএমএল (HTML)',
    },
    level: {
      en: 'Beginner Level',
      bn: 'প্রাথমিক স্তর',
    },
    summary: {
      en: 'Learning document structure, semantic elements, headings, links, and building my first static web page.',
      bn: 'ওয়েব পেজের কাঠামো, সেমান্টিক এলিমেন্ট, হেডিং, লিংক শেখা এবং প্রথম স্ট্যাটিক ওয়েব পেজ তৈরির অনুশীলন।',
    },
  },
];

export const LEARNING_GOALS: LearningGoalItem[] = [
  {
    id: 'adv-python',
    topic: { en: 'Advanced Python', bn: 'অ্যাডভান্সড পাইথন' },
    status: { en: 'Learning Goal · Planned Next', bn: 'শেখার লক্ষ্য · পরবর্তী ধাপ' },
    focusArea: { en: 'Functions, OOP & clean Pythonic patterns', bn: 'ফাংশন, ওওপি এবং পরিষ্কার পাইথন কোডিং' },
  },
  {
    id: 'python-ai-ml',
    topic: { en: 'Python for AI and Machine Learning', bn: 'এআই ও মেশিন লার্নিংয়ের জন্য পাইথন' },
    status: { en: 'Exploring Conceptually', bn: 'প্রাথমিক অন্বেষণ চলছে' },
    focusArea: { en: 'Core workflows for data & model training', bn: 'ডেটা ও মডেল প্রশিক্ষণের মূল প্রক্রিয়া' },
  },
  {
    id: 'html-css',
    topic: { en: 'HTML and CSS', bn: 'এইচটিএমএল ও সিএসএস' },
    status: { en: 'Currently Practicing', bn: 'বর্তমানে অনুশীলনরত' },
    focusArea: { en: 'Semantic markup, layout & responsive styling', bn: 'সেমান্টিক মার্কআপ, লেআউট ও রেসপন্সিভ স্টাইলিং' },
  },
  {
    id: 'math-ml',
    topic: { en: 'Mathematics for Machine Learning', bn: 'মেশিন লার্নিংয়ের জন্য গণিত' },
    status: { en: 'Learning Goal', bn: 'শেখার লক্ষ্য' },
    focusArea: { en: 'Linear algebra, calculus & probability foundations', bn: 'লিনিয়ার অ্যালজেব্রা, ক্যালকুলাস ও সম্ভাব্যতা' },
  },
  {
    id: 'genai-llm',
    topic: { en: 'Generative AI and Large Language Models (LLMs)', bn: 'জেনারেটিভ এআই এবং লার্জ ল্যাঙ্গুয়েজ মডেল (LLM)' },
    status: { en: 'Exploring Conceptually', bn: 'তাত্ত্বিক অন্বেষণ' },
    focusArea: { en: 'How modern foundation models reason & generate', bn: 'আধুনিক ফাউন্ডেশন মডেল কীভাবে কাজ করে' },
  },
  {
    id: 'git-github',
    topic: { en: 'Git and GitHub', bn: 'গিট ও গিটহাব (Git & GitHub)' },
    status: { en: 'Learning Goal', bn: 'শেখার লক্ষ্য' },
    focusArea: { en: 'Version control, commits & open-source collaboration', bn: 'ভার্সন কন্ট্রোল, কমিট এবং ওপেন-সোর্স সহযোগিতা' },
  },
  {
    id: 'numpy-pandas',
    topic: { en: 'NumPy and Pandas', bn: 'নামপাই ও পান্ডাস (NumPy & Pandas)' },
    status: { en: 'Upcoming Goal', bn: 'আসন্ন লক্ষ্য' },
    focusArea: { en: 'Numerical arrays & structured tabular data', bn: 'সংখ্যাগত অ্যারে ও টেবিল ডেটা বিশ্লেষণ' },
  },
  {
    id: 'dsa',
    topic: { en: 'Data Structures and Algorithms', bn: 'ডেটা স্ট্রাকচার ও অ্যালগরিদম' },
    status: { en: 'Long-Term Foundation', bn: 'দীর্ঘমেয়াদী মৌলিক লক্ষ্য' },
    focusArea: { en: 'Problem-solving efficiency & algorithmic thinking', bn: 'দক্ষ সমস্যা সমাধান ও অ্যালগরিদমিক চিন্তা' },
  },
];

/**
 * PROJECTS LIST
 * How to add a new project:
 * Copy one object below, give it a unique `id`, fill in `en` and `bn` text,
 * and optionally add `githubUrl`, `liveUrl`, or `imageUrl` when ready.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'simple-calculator',
    title: {
      en: 'Simple Calculator',
      bn: 'সিম্পল ক্যালকুলেটর',
    },
    category: 'python',
    status: 'completed',
    technologies: ['Python', 'Beginner CLI'],
    summary: {
      en: 'A foundational command-line calculator written in Python to practice arithmetic operations, user input handling, and conditional logic.',
      bn: 'পাইথনে তৈরি একটি প্রাথমিক কমান্ড-লাইন ক্যালকুলেটর, যা গাণিতিক অপারেশন, ইউজার ইনপুট এবং কন্ডিশনাল লজিক অনুশীলনের জন্য তৈরি।',
    },
    details: {
      en: 'Built while learning core Python syntax. It takes numeric inputs and an operator from the user in the terminal to perform basic arithmetic calculations cleanly.',
      bn: 'মৌলিক পাইথন সিনট্যাক্স শেখার সময় তৈরি। এটি টার্মিনালে ব্যবহারকারীর কাছ থেকে সংখ্যা ও অপারেটর ইনপুট নিয়ে সাধারণ গাণিতিক হিসাব সম্পন্ন করে।',
    },
    learningFocus: {
      en: 'Practiced variables, conditionals (if/elif/else), and numeric input conversion.',
      bn: 'ভ্যারিয়েবল, কন্ডিশনাল স্টেটমেন্ট ও সংখ্যাগত ইনপুট রূপান্তর অনুশীলন।',
    },
  },
  {
    id: 'age-calculator',
    title: {
      en: 'Age Calculator',
      bn: 'বয়স নির্ণায়ক (Age Calculator)',
    },
    category: 'python',
    status: 'completed',
    technologies: ['Python', 'Beginner CLI'],
    summary: {
      en: 'A beginner Python script that calculates a person’s age from birth year input and outputs the result clearly in the terminal.',
      bn: 'একটি প্রাথমিক পাইথন স্ক্রিপ্ট যা জন্ম সাল ইনপুটের ভিত্তিতে বয়স হিসাব করে টার্মিনালে সহজভাবে ফলাফল প্রদর্শন করে।',
    },
    details: {
      en: 'Created to practice basic date/year arithmetic and user-friendly terminal prompts in Python.',
      bn: 'পাইথনে সাধারণ সাল-ভিত্তিক হিসাব এবং ব্যবহারবান্ধব টার্মিনাল প্রম্পট অনুশীলনের উদ্দেশ্যে তৈরি।',
    },
    learningFocus: {
      en: 'Practiced integer arithmetic, input handling, and formatted console output.',
      bn: 'পূর্ণসংখ্যার হিসাব, ইনপুট গ্রহণ এবং ফরম্যাটেড আউটপুট প্রদর্শন।',
    },
  },
  {
    id: 'guessing-game',
    title: {
      en: 'Guessing Game',
      bn: 'সংখ্যা অনুমানের খেলা (Guessing Game)',
    },
    category: 'python',
    status: 'completed',
    technologies: ['Python', 'Beginner CLI'],
    summary: {
      en: 'An interactive terminal number-guessing game in Python using loops and conditional feedback to guide the player.',
      bn: 'পাইথনে তৈরি একটি ইন্টারঅ্যাক্টিভ টার্মিনাল গেম, যেখানে লুপ ও কন্ডিশনাল নির্দেশনার মাধ্যমে খেলোয়াড়কে সঠিক সংখ্যা অনুমান করতে সহায়তা করা হয়।',
    },
    details: {
      en: 'A classic beginner exercise that helped me understand control flow, loop termination, and comparing user guesses against a target value.',
      bn: 'প্রাথমিক প্রোগ্রামিং অনুশীলন হিসেবে তৈরি, যা কন্ট্রোল ফ্লো, লুপ নিয়ন্ত্রণ ও শর্ত যাচাই বুঝতে সাহায্য করেছে।',
    },
    learningFocus: {
      en: 'Practiced loops, comparison operators, and interactive terminal flow.',
      bn: 'লুপ, তুলনামূলক অপারেটর এবং ইন্টারঅ্যাক্টিভ কন্ট্রোল ফ্লো।',
    },
  },
  {
    id: 'result-calculator',
    title: {
      en: 'Result Calculator',
      bn: 'ফলাফল ক্যালকুলেটর (Result Calculator)',
    },
    category: 'python',
    status: 'completed',
    technologies: ['Python', 'Beginner CLI'],
    summary: {
      en: 'A Python program designed to process student marks and determine corresponding grade or result summaries.',
      bn: 'শিক্ষার্থীর নম্বর ইনপুট নিয়ে সংশ্লিষ্ট গ্রেড ও ফলাফলের সারসংক্ষেপ নির্ণয় করার একটি পাইথন প্রোগ্রাম।',
    },
    details: {
      en: 'Built to apply conditional branching to a familiar academic use case—computing total marks, averages, or grade tiers from user-entered scores.',
      bn: 'দৈনন্দিন একাডেমিক প্রয়োজনের সাথে প্রোগ্রামিং যুক্ত করে নম্বর যোগ, গড় বা গ্রেড নির্ধারণের লজিক চর্চার জন্য তৈরি।',
    },
    learningFocus: {
      en: 'Practiced multi-branch conditionals, averages, and structured logic.',
      bn: 'একাধিক শর্ত যাচাই, গড় হিসাব এবং কাঠামোগত লজিক।',
    },
  },
  {
    id: 'first-html-project',
    title: {
      en: 'First HTML Project',
      bn: 'প্রথম এইচটিএমএল প্রকল্প',
    },
    category: 'html',
    status: 'in-progress',
    technologies: ['HTML', 'In Progress'],
    summary: {
      en: 'Currently in progress as I learn foundational HTML page structure and markup—no completed website is published yet.',
      bn: 'এইচটিএমএল-এর মৌলিক কাঠামো ও মার্কআপ শেখার অংশ হিসেবে বর্তমানে চলমান—এখনও কোনো সম্পূর্ণ ওয়েবসাইট প্রকাশিত হয়নি।',
    },
    details: {
      en: 'This entry honestly marks my very first step into web development. As I practice semantic HTML tags and start pairing them with CSS, I will link the finished page and source code here.',
      bn: 'ওয়েব ডেভেলপমেন্টে আমার প্রথম পদক্ষেপ হিসেবে এটি অন্তর্ভুক্ত করা হয়েছে। সেমান্টিক এইচটিএমএল ও সিএসএস অনুশীলন সম্পন্ন হলে এখানে কাজের লিংক যুক্ত করা হবে।',
    },
    learningFocus: {
      en: 'Exploring semantic HTML tags, document hierarchy, and accessible page layout.',
      bn: 'সেমান্টিক এইচটিএমএল ট্যাগ, ডকুমেন্ট কাঠামো ও সহজবোধ্য লেআউট অনুশীলন।',
    },
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'bdoc-2026',
    year: { en: '2026', bn: '২০২৬' },
    title: {
      en: 'Top 50 — BDOC Math Olympiad',
      bn: 'শীর্ষ ৫০ — BDOC গণিত অলিম্পিয়াড',
    },
    context: {
      en: 'Mathematics Olympiad · 2026',
      bn: 'গণিত অলিম্পিয়াড · ২০২৬',
    },
    summary: {
      en: 'Placed in the Top 50 at the BDOC Math Olympiad in 2026, reflecting my ongoing interest in mathematical reasoning and problem solving.',
      bn: '২০২৬ সালে BDOC গণিত অলিম্পিয়াডে শীর্ষ ৫০-এ স্থান অর্জন, যা গাণিতিক যুক্তি ও সমস্যা সমাধানের প্রতি আমার আগ্রহকে প্রতিফলিত করে।',
    },
  },
  {
    id: 'dc-python-champion',
    year: { en: 'Team Leader', bn: 'দলনেতা' },
    title: {
      en: 'District Champion — Python Competition',
      bn: 'জেলা চ্যাম্পিয়ন — পাইথন প্রতিযোগিতা',
    },
    context: {
      en: 'Arranged by the District Commissioner · Team Leader',
      bn: 'জেলা প্রশাসক কর্তৃক আয়োজিত · দলনেতা হিসেবে',
    },
    summary: {
      en: 'Led our team as team leader to become District Champion in a Python programming competition arranged by the District Commissioner.',
      bn: 'জেলা প্রশাসক কর্তৃক আয়োজিত পাইথন প্রোগ্রামিং প্রতিযোগিতায় দলনেতা হিসেবে নেতৃত্ব দিয়ে জেলা চ্যাম্পিয়ন অর্জন।',
    },
  },
  {
    id: 'govt-lab-2026',
    year: { en: '2026', bn: '২০২৬' },
    title: {
      en: '2nd Runner-up — Math Olympiad, Quiz Fest',
      bn: '২য় রানার-আপ — গণিত অলিম্পিয়াড, কুইজ ফেস্ট',
    },
    context: {
      en: 'Government Laboratory High School · 2026',
      bn: 'গভর্নমেন্ট ল্যাবরেটরি হাই স্কুল · ২০২৬',
    },
    summary: {
      en: 'Earned 2nd Runner-up in the Math Olympiad at the Quiz Fest hosted at Government Laboratory High School in 2026.',
      bn: '২০২৬ সালে গভর্নমেন্ট ল্যাবরেটরি হাই স্কুলে অনুষ্ঠিত কুইজ ফেস্টের গণিত অলিম্পিয়াডে ২য় রানার-আপ অর্জন।',
    },
  },
  {
    id: 'cultural-awards',
    year: { en: 'School & Upazila', bn: 'বিদ্যালয় ও উপজেলা' },
    title: {
      en: 'Multiple Awards in Cultural Events',
      bn: 'সাংস্কৃতিক প্রতিযোগিতায় একাধিক পুরস্কার',
    },
    context: {
      en: 'Upazila and School Levels',
      bn: 'উপজেলা ও বিদ্যালয় পর্যায়',
    },
    summary: {
      en: 'Received multiple awards across cultural competitions at both Upazila and school levels alongside academic pursuits.',
      bn: 'পড়াশোনার পাশাপাশি উপজেলা ও বিদ্যালয় পর্যায়ের বিভিন্ন সাংস্কৃতিক প্রতিযোগিতায় একাধিক পুরস্কার অর্জন।',
    },
  },
];

export const INTERESTS: InterestItem[] = [
  {
    id: 'ai',
    iconName: 'brain',
    title: {
      en: 'Artificial Intelligence',
      bn: 'কৃত্রিম বুদ্ধিমত্তা (AI)',
    },
    description: {
      en: 'Curious about how reasoning, decision-making, and intelligent software systems can assist humanity and solve complex problems.',
      bn: 'যুক্তি, সিদ্ধান্ত গ্রহণ এবং বুদ্ধিমান সফটওয়্যার সিস্টেম কীভাবে মানুষের কাজে সহায়তা ও জটিল সমস্যার সমাধান করতে পারে তা জানার আগ্রহ।',
    },
  },
  {
    id: 'ml',
    iconName: 'cpu',
    title: {
      en: 'Machine Learning',
      bn: 'মেশিন লার্নিং',
    },
    description: {
      en: 'Fascinated by how algorithms learn patterns from data and how mathematics powers prediction and intelligence.',
      bn: 'অ্যালগরিদম কীভাবে ডেটা থেকে প্যাটার্ন শেখে এবং গণিত কীভাবে পূর্বাভাস ও বুদ্ধিমত্তা তৈরি করে তা বোঝার আগ্রহ।',
    },
  },
  {
    id: 'web-dev',
    iconName: 'globe',
    title: {
      en: 'Web Development',
      bn: 'ওয়েব ডেভেলপমেন্ট',
    },
    description: {
      en: 'Learning how modern websites and clean interfaces bring software and AI ideas directly to people.',
      bn: 'আধুনিক ওয়েবসাইট এবং সহজবোধ্য ইন্টারফেসের মাধ্যমে কীভাবে সফটওয়্যার ও এআই ধারণা মানুষের কাছে পৌঁছে দেওয়া যায় তা শেখা।',
    },
  },
];

export const SPOKEN_LANGUAGES: SpokenLanguageItem[] = [
  {
    id: 'bn',
    name: { en: 'Bangla', bn: 'বাংলা' },
    proficiency: { en: 'Native Language', bn: 'মাতৃভাষা' },
    note: {
      en: 'Reading, writing, speaking, and listening.',
      bn: 'পড়া, লেখা, বলা এবং শোনা — সম্পূর্ণ দক্ষতা।',
    },
  },
  {
    id: 'en',
    name: { en: 'English', bn: 'ইংরেজি' },
    proficiency: { en: 'Academic & Technical Use', bn: 'শিক্ষা ও প্রযুক্তিগত ব্যবহার' },
    note: {
      en: 'Used daily for studying science, programming documentation, and communication.',
      bn: 'বিজ্ঞান পড়াশোনা, প্রোগ্রামিং ডকুমেন্টেশন এবং যোগাযোগে নিয়মিত ব্যবহৃত।',
    },
  },
  {
    id: 'hi',
    name: { en: 'Hindi', bn: 'হিন্দি' },
    proficiency: { en: 'Speaking & Listening Only', bn: 'শুধুমাত্র বলা ও শোনা' },
    note: {
      en: 'Conversational listening and speaking understanding only.',
      bn: 'শুধুমাত্র কথোপকথনের ক্ষেত্রে বোঝা ও বলার সীমিত দক্ষতা।',
    },
  },
  {
    id: 'ja',
    name: { en: 'Japanese', bn: 'জাপানি' },
    proficiency: { en: 'Planning to Begin Soon', bn: 'শীঘ্রই শেখা শুরু করার পরিকল্পনা' },
    note: {
      en: 'Have not started formal study yet; planning to begin soon.',
      bn: 'এখনও আনুষ্ঠানিক শেখা শুরু হয়নি; খুব শীঘ্রই শুরু করার পরিকল্পনা রয়েছে।',
    },
  },
];

export const GOALS_CONTENT = {
  eyebrow: {
    en: '08. Goals & Future Vision',
    bn: '০৮. লক্ষ্য ও ভবিষ্যৎ দৃষ্টিভঙ্গি',
  },
  heading: {
    en: 'Where I hope to grow next',
    bn: 'ভবিষ্যতে যে লক্ষ্যে এগিয়ে যেতে চাই',
  },
  disclaimer: {
    en: 'These are personal aspirations and long-term goals I am actively working toward—not completed milestones.',
    bn: 'এগুলো আমার ভবিষ্যৎ লক্ষ্য ও স্বপ্ন, যা অর্জনের জন্য আমি বর্তমানে পরিশ্রম করছি—এগুলো এখনও অর্জিত সাফল্য নয়।',
  },
  items: [
    {
      id: 'ai-engineer',
      title: {
        en: 'Become an AI & Machine Learning Engineer',
        bn: 'এআই ও মেশিন লার্নিং প্রকৌশলী হওয়া',
      },
      description: {
        en: 'Build deep mathematical and software engineering mastery to design, train, and deploy reliable intelligent systems.',
        bn: 'নির্ভরযোগ্য বুদ্ধিমান সিস্টেম নকশা, প্রশিক্ষণ ও বাস্তবায়নের জন্য গণিত ও সফটওয়্যার প্রকৌশলে গভীর দক্ষতা অর্জন।',
      },
    },
    {
      id: 'real-world-startup',
      title: {
        en: 'Build Real-World AI Products & Startup',
        bn: 'বাস্তবসম্মত এআই পণ্য ও স্টার্টআপ তৈরি',
      },
      description: {
        en: 'Solve practical problems through technology and eventually launch my own AI-powered products or startup.',
        bn: 'প্রযুক্তির মাধ্যমে বাস্তব জীবনের সমস্যার সমাধান করা এবং ভবিষ্যতে নিজস্ব এআই-ভিত্তিক পণ্য বা স্টার্টআপ গড়ে তোলা।',
      },
    },
    {
      id: 'higher-education',
      title: {
        en: 'Higher Education Abroad (Germany, Japan & Beyond)',
        bn: 'বিদেশে উচ্চশিক্ষা (জার্মানি, জাপান ও অন্যান্য দেশ)',
      },
      description: {
        en: 'I hope to pursue higher education abroad—especially in Germany or Japan—while remaining open to universities in other countries that offer strong computer science/AI programs and scholarships.',
        bn: 'বিদেশে—বিশেষত জার্মানি বা জাপানে—উচ্চশিক্ষা গ্রহণের ইচ্ছা রয়েছে; পাশাপাশি অন্যান্য দেশের যেসব বিশ্ববিদ্যালয়ে মানসম্মত শিক্ষা ও বৃত্তির সুযোগ রয়েছে, সেগুলোর জন্যও আমি আগ্রহী।',
      },
    },
  ] as GoalVisionItem[],
};

export const UI_STRINGS = {
  skipToContent: {
    en: 'Skip to main content',
    bn: 'মূল বিষয়বস্তুতে যান',
  },
  menuButton: {
    en: 'Sections',
    bn: 'সকল বিভাগ',
  },
  closeMenu: {
    en: 'Close navigation menu',
    bn: 'নেভিগেশন মেনু বন্ধ করুন',
  },
  allSectionsHeading: {
    en: 'Portfolio Directory (9 Sections)',
    bn: 'পোর্টফোলিও সূচি (৯টি বিভাগ)',
  },
  heroPrimaryCta: {
    en: 'Explore My Work',
    bn: 'আমার কাজ দেখুন',
  },
  heroSecondaryCta: {
    en: 'Contact Me',
    bn: 'যোগাযোগ করুন',
  },
  heroFeaturedLabel: {
    en: 'Featured Practice Focus',
    bn: 'বর্তমান অনুশীলনের ঝলক',
  },
  heroFeaturedLink: {
    en: 'View all 5 projects',
    bn: '৫টি প্রকল্পই দেখুন',
  },
  educationEyebrow: {
    en: '02. Education',
    bn: '০২. শিক্ষাগত যোগ্যতা',
  },
  educationHeading: {
    en: 'Academic Foundation',
    bn: 'একাডেমিক ভিত্তি',
  },
  skillsEyebrow: {
    en: '03. Skills & Learning',
    bn: '০৩. দক্ষতা ও শেখার ধারা',
  },
  skillsHeading: {
    en: 'Current Foundation & Learning Roadmap',
    bn: 'বর্তমান দক্ষতা ও শেখার রোডম্যাপ',
  },
  currentSkillsSubheading: {
    en: 'Current Technical Skills (Beginner Level)',
    bn: 'বর্তমান কারিগরি দক্ষতা (প্রাথমিক স্তর)',
  },
  currentSkillsNote: {
    en: 'Labeled honestly as beginner-level foundations while I continue studying and building practice exercises.',
    bn: 'শেখা ও অনুশীলনের প্রাথমিক পর্যায়ে থাকায় এগুলোকে সৎভাবে প্রাথমিক স্তরের দক্ষতা হিসেবে উল্লেখ করা হয়েছে।',
  },
  learningSubheading: {
    en: 'Currently Learning & Exploring',
    bn: 'বর্তমানে যা শিখছি ও অন্বেষণ করছি',
  },
  learningNote: {
    en: 'Listed as active learning goals rather than mastered skills—with honest status labels and no fabricated percentages.',
    bn: 'এগুলো অর্জিত দক্ষতা নয়, বরং চলমান শেখার লক্ষ্য—কোনো কাল্পনিক শতাংশ ছাড়াই সৎ অবস্থা নির্দেশিত হয়েছে।',
  },
  projectsEyebrow: {
    en: '04. Projects',
    bn: '০৪. প্রকল্পসমূহ',
  },
  projectsHeading: {
    en: 'Early Code & Learning Exercises',
    bn: 'প্রাথমিক কোড ও অনুশীলনমূলক প্রকল্প',
  },
  projectsLead: {
    en: 'Each entry accurately reflects my current beginner projects. Where repositories, live demos, or screenshots are not yet published, honest placeholders are shown.',
    bn: 'প্রতিটি প্রকল্প আমার বর্তমান প্রাথমিক পর্যায়ের কাজগুলো সৎভাবে তুলে ধরে। যেসব প্রকল্পের রিপোজিটরি, লাইভ ডেমো বা স্ক্রিনশট এখনও তৈরি হয়নি, সেখানে স্পষ্ট প্লেসহোল্ডার রাখা হয়েছে।',
  },
  filterAll: { en: 'All', bn: 'সবগুলো' },
  filterCompleted: { en: 'Completed', bn: 'সম্পন্ন' },
  filterInProgress: { en: 'In Progress', bn: 'চলমান' },
  filterPython: { en: 'Python', bn: 'পাইথন' },
  filterHtml: { en: 'HTML', bn: 'এইচটিএমএল' },
  statusCompleted: { en: 'Completed Practice Project', bn: 'সম্পন্ন অনুশীলন প্রকল্প' },
  statusInProgress: { en: 'In Progress · Not Yet Completed', bn: 'চলমান · এখনও সম্পূর্ণ নয়' },
  viewProjectDetails: { en: 'Inspect Details', bn: 'বিস্তারিত দেখুন' },
  cardLearningOutcome: { en: 'Learning outcome', bn: 'শেখার ফলাফল' },
  cardCliPlaceholderLabel: {
    en: 'Screenshot placeholder · Python CLI script',
    bn: 'স্ক্রিনশট প্লেসহোল্ডার · পাইথন সিএলআই',
  },
  cardHtmlPlaceholderLabel: {
    en: 'Screenshot placeholder · HTML in progress',
    bn: 'স্ক্রিনশট প্লেসহোল্ডার · চলমান এইচটিএমএল',
  },
  cardNoLinksYet: {
    en: 'No public repo or demo link yet',
    bn: 'এখনও পাবলিক রিপো বা ডেমো লিংক নেই',
  },
  noProjectsMatch: {
    en: 'No projects match the selected filter.',
    bn: 'নির্বাচিত ফিল্টারের সাথে কোনো প্রকল্প মেলেনি।',
  },
  modalClose: { en: 'Close modal', bn: 'মোডাল বন্ধ করুন' },
  modalLearningFocus: { en: 'Learning Focus', bn: 'শেখার মূল বিষয়' },
  modalRepoPlaceholder: {
    en: 'GitHub repository link not published yet (placeholder ready for future commit).',
    bn: 'গিটহাব রিপোজিটরি লিংক এখনও প্রকাশিত হয়নি (ভবিষ্যতে যুক্ত করার জন্য প্রস্তুত)।',
  },
  modalScreenshotPlaceholder: {
    en: 'No screenshot or live website preview yet — placeholder shown intentionally.',
    bn: 'এখনও কোনো স্ক্রিনশট বা লাইভ প্রিভিউ নেই — সচেতনভাবে প্লেসহোল্ডার দেখানো হয়েছে।',
  },
  modalOpenGithub: { en: 'Open GitHub Repository', bn: 'গিটহাব রিপোজিটরি দেখুন' },
  modalOpenLive: { en: 'Open Live Preview', bn: 'লাইভ প্রিভিউ দেখুন' },
  achievementsEyebrow: {
    en: '05. Achievements & Awards',
    bn: '০৫. অর্জন ও পুরস্কার',
  },
  achievementsHeading: {
    en: 'Competitions, Leadership & Cultural Recognition',
    bn: 'প্রতিযোগিতা, নেতৃত্ব ও সাংস্কৃতিক স্বীকৃতি',
  },
  interestsEyebrow: {
    en: '06. Interests',
    bn: '০৬. আগ্রহের ক্ষেত্র',
  },
  interestsHeading: {
    en: 'Areas That Inspire My Curiosity',
    bn: 'যে বিষয়গুলো আমার কৌতূহল জাগিয়ে তোলে',
  },
  languagesEyebrow: {
    en: '07. Languages',
    bn: '০৭. ভাষাজ্ঞান',
  },
  languagesHeading: {
    en: 'Languages I Speak & Plan to Learn',
    bn: 'যে ভাষাগুলো জানি ও শেখার পরিকল্পনা করছি',
  },
  contactEyebrow: {
    en: '09. Contact',
    bn: '০৯. যোগাযোগ',
  },
  contactHeading: {
    en: 'Get in Touch',
    bn: 'যোগাযোগ করুন',
  },
  contactLead: {
    en: 'Whether you are a mentor, fellow student, or collaborator, feel free to send a message using the form or connect on GitHub and Instagram.',
    bn: 'আপনি যদি একজন পরামর্শদাতা, সহপাঠী বা সহযোগী হন, তবে ফর্মের মাধ্যমে বার্তা পাঠাতে পারেন অথবা গিটহাব ও ইনস্টাগ্রামে যুক্ত হতে পারেন।',
  },
  formStatusReadyFormspree: {
    en: 'Form Service: Connected via Formspree',
    bn: 'ফর্ম সার্ভিস: Formspree-এর মাধ্যমে সংযুক্ত',
  },
  formStatusReadyEmailJs: {
    en: 'Form Service: Connected via EmailJS',
    bn: 'ফর্ম সার্ভিস: EmailJS-এর মাধ্যমে সংযুক্ত',
  },
  formStatusUnconfigured: {
    en: 'Form Service: Not Configured Yet (Validation Mode Only)',
    bn: 'ফর্ম সার্ভিস: এখনও কনফিগার করা হয়নি (শুধুমাত্র যাচাইকরণ মোড)',
  },
  privacyNoteTitle: {
    en: 'Privacy & Form Delivery Notice',
    bn: 'গোপনীয়তা ও বার্তা প্রেরণ সংক্রান্ত তথ্য',
  },
  privacyNoteBody: {
    en: 'For privacy, my personal email address is not displayed publicly here. This form validates your input cleanly and supports Formspree or EmailJS when configured via environment variables.',
    bn: 'গোপনীয়তার স্বার্থে আমার ব্যক্তিগত ইমেইল ঠিকানা এখানে প্রকাশ্যে প্রদর্শিত হয়নি। ফর্মটি আপনার তথ্য যাচাই করে এবং এনভায়রনমেন্ট ভ্যারিয়েবল কনফিগার করা থাকলে Formspree বা EmailJS-এর মাধ্যমে বার্তা পাঠায়।',
  },
  formNameLabel: { en: 'Your Name', bn: 'আপনার নাম' },
  formNamePlaceholder: { en: 'Enter your full name', bn: 'আপনার পূর্ণ নাম লিখুন' },
  formEmailLabel: { en: 'Email Address', bn: 'ইমেইল ঠিকানা' },
  formEmailPlaceholder: { en: 'you@example.com', bn: 'you@example.com' },
  formSubjectLabel: { en: 'Subject', bn: 'বিষয়' },
  formSubjectPlaceholder: { en: 'Collaboration, mentorship, or greeting', bn: 'সহযোগিতা, পরামর্শ বা শুভেচ্ছা' },
  formMessageLabel: { en: 'Message', bn: 'বার্তা' },
  formMessagePlaceholder: {
    en: 'Write your message here (minimum 10 characters)...',
    bn: 'আপনার বার্তা লিখুন (কমপক্ষে ১০ অক্ষর)...',
  },
  formSubmit: { en: 'Send Message', bn: 'বার্তা পাঠান' },
  formSubmitting: { en: 'Sending...', bn: 'পাঠানো হচ্ছে...' },
  formReset: { en: 'Clear Form', bn: 'ফর্ম মুছুন' },
  errNameRequired: { en: 'Please enter your name (at least 2 characters).', bn: 'অনুগ্রহ করে আপনার নাম লিখুন (কমপক্ষে ২ অক্ষর)।' },
  errEmailRequired: { en: 'Please enter your email address.', bn: 'অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।' },
  errEmailInvalid: { en: 'Please enter a valid email address.', bn: 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা লিখুন।' },
  errSubjectRequired: { en: 'Please enter a subject (at least 3 characters).', bn: 'অনুগ্রহ করে বিষয় লিখুন (কমপক্ষে ৩ অক্ষর)।' },
  errMessageRequired: { en: 'Please write a message of at least 10 characters.', bn: 'অনুগ্রহ করে কমপক্ষে ১০ অক্ষরের একটি বার্তা লিখুন।' },
  formSuccessTitle: {
    en: 'Message sent successfully',
    bn: 'বার্তা সফলভাবে পাঠানো হয়েছে',
  },
  formSuccessBody: {
    en: 'Thank you for reaching out. Your message has been delivered through the configured form service.',
    bn: 'যোগাযোগ করার জন্য ধন্যবাদ। কনফিগার করা সার্ভিসের মাধ্যমে আপনার বার্তা পৌঁছে গেছে।',
  },
  formUnconfiguredTitle: {
    en: 'Validation Passed — Form Backend Not Yet Connected',
    bn: 'তথ্য যাচাই সম্পন্ন — ফর্ম ব্যাকএন্ড এখনও সংযুক্ত নয়',
  },
  formUnconfiguredBody: {
    en: 'Your inputs are valid, but no messages are pretended to be sent because neither Formspree (VITE_FORMSPREE_ENDPOINT) nor EmailJS (VITE_EMAILJS_*) has been configured yet. Connect either service in your environment settings or reach out via GitHub / Instagram.',
    bn: 'আপনার দেওয়া তথ্য সঠিক, তবে Formspree (VITE_FORMSPREE_ENDPOINT) বা EmailJS (VITE_EMAILJS_*) কনফিগার না থাকায় বার্তা পাঠানো হয়েছে বলে মিথ্যা দেখানো হচ্ছে না। এনভায়রনমেন্ট সেটিংসে সার্ভিস যুক্ত করুন অথবা গিটহাব / ইনস্টাগ্রামে যোগাযোগ করুন।',
  },
  formErrorTitle: {
    en: 'Unable to send message right now',
    bn: 'এই মুহূর্তে বার্তা পাঠানো সম্ভব হয়নি',
  },
  formErrorBody: {
    en: 'The configured email service returned an error. Please verify your endpoint credentials or connect via GitHub / Instagram.',
    bn: 'কনফিগার করা ইমেইল সার্ভিস থেকে একটি ত্রুটি পাওয়া গেছে। অনুগ্রহ করে সেটিংস পরীক্ষা করুন অথবা গিটহাব / ইনস্টাগ্রামে যোগাযোগ করুন।',
  },
  setupGuideToggle: {
    en: 'How to connect Formspree or EmailJS',
    bn: 'Formspree বা EmailJS সংযুক্ত করার নির্দেশিকা',
  },
  socialProfilesLabel: {
    en: 'Public Profiles',
    bn: 'পাবলিক প্রোফাইলসমূহ',
  },
  footerQuickLinks: {
    en: 'Navigation',
    bn: 'নেভিগেশন',
  },
  footerConnect: {
    en: 'Connect',
    bn: 'যুক্ত হোন',
  },
  footerCopyright: {
    en: '© 2026 Labib Ahmed. Built honestly as a growing portfolio.',
    bn: '© ২০২৬ লাবিব আহমেদ। শেখা ও এগিয়ে চলার সৎ প্রতিফলন হিসেবে নির্মিত।',
  },
};

export const HERO_HIGHLIGHTS: { label: LocalizedText; value: LocalizedText }[] = [
  {
    label: { en: 'Current Study', bn: 'বর্তমান অধ্যয়ন' },
    value: { en: 'Grade 11 Science · HSC 2028', bn: 'একাদশ বিজ্ঞান · এইচএসসি ২০২৮' },
  },
  {
    label: { en: 'SSC 2026 Result', bn: 'এসএসসি ২০২৬ ফলাফল' },
    value: { en: 'GPA 5.00', bn: 'জিপিএ ৫.০০' },
  },
  {
    label: { en: 'BDOC Math Olympiad 2026', bn: 'BDOC গণিত অলিম্পিয়াড ২০২৬' },
    value: { en: 'Top 50', bn: 'শীর্ষ ৫০' },
  },
  {
    label: { en: 'Practice Projects', bn: 'অনুশীলন প্রকল্প' },
    value: { en: '4 Python CLI · 1 HTML', bn: '৪টি পাইথন · ১টি এইচটিএমএল' },
  },
];

