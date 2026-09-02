import { Certificate, EducationItem, Project, Skill } from '../types';

export const PERSONAL_INFO = {
  name: {
    ar: 'عبدالحميد عماد',
    en: 'Abdelhamed Emad'
  },
  title: {
    ar: 'مطور واجهات أمامية ومهندس برمجيات',
    en: 'Frontend Developer & Software Engineer'
  },
  university: {
    ar: 'جامعة حلوان - كلية الحاسبات والذكاء الاصطناعي',
    en: 'Helwan University - Faculty of Computers & Artificial Intelligence'
  },
  email: 'oshaemad1332007@gmail.com',
  phone: '+201012345678',
  whatsapp: 'https://wa.me/201012345678?text=Hello%20Abdelhamed,%20I%20visited%20your%20portfolio!',
  github: 'https://github.com/abdelhamed-emad',
  linkedin: 'https://linkedin.com/in/abdelhamed-emad',
  location: {
    ar: 'القاهرة، مصر',
    en: 'Cairo, Egypt'
  },
  stats: {
    experienceYears: 3,
    completedProjects: 18,
    certificationsCount: 6,
    codeCommits: 450
  }
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-fcai-helwan',
    degree: {
      ar: 'بكالوريوس علوم الحاسب وهندسة البرمجيات',
      en: 'Bachelor of Computer Science & Software Engineering'
    },
    faculty: {
      ar: 'كلية الحاسبات والذكاء الاصطناعي',
      en: 'Faculty of Computers and Artificial Intelligence (FCAI)'
    },
    institution: {
      ar: 'جامعة حلوان - القاهرة',
      en: 'Helwan University - Cairo, Egypt'
    },
    period: '2022 - 2026 (متوقع)',
    status: {
      ar: 'طالب جامعي متفوق',
      en: 'Undergraduate Student'
    },
    description: {
      ar: 'دراسة أكاديمية معمقة تشمل علوم الحاسب الأساسية، تحليل وتصميم النظم، هندسة البرمجيات الحديثة، تصميم الخوارزميات وهياكل البيانات المعقدة، وتقنيات الذكاء الاصطناعي والويب المتقدم.',
      en: 'Comprehensive academic curriculum covering core computer science principles, system architecture, modern software engineering, advanced algorithms, data structures, and AI/Web applications.'
    },
    highlights: {
      ar: [
        'المشاركة في معسكرات البرمجة التنافسية وحل المشكلات (Competitive Programming)',
        'بناء مشاريع فصلية متقدمة في تطوير الويب وهندسة البرمجيات وتصميم الواجهات',
        'عضو نشط في الأنشطة الطلابية التقنية لمساعدة المبتدئين في مجال الـ Frontend'
      ],
      en: [
        'Active participant in competitive programming & problem-solving contests',
        'Engineered high-scoring academic semester projects in web architecture & UI/UX',
        'Technical mentor in student computing chapters guiding juniors in frontend tech'
      ]
    },
    relevantCourses: {
      ar: [
        'هياكل البيانات والخوارزميات (Data Structures & Algorithms)',
        'هندسة البرمجيات وتصميم النظم (Software Engineering & Design)',
        'تطوير تطبيقات الويب الحديثة (Modern Web Development)',
        'قواعد البيانات العلائقية (Relational Database Systems)',
        'الذكاء الاصطناعي وتعلم الآلة (AI & Machine Learning Foundations)',
        'شبكات الحاسب وأمن المعلومات (Computer Networks & Security)'
      ],
      en: [
        'Data Structures & Algorithms (DSA)',
        'Software Engineering & Design Patterns',
        'Modern Web Application Engineering',
        'Database Management Systems (DBMS)',
        'AI & Machine Learning Fundamentals',
        'Computer Networks & Web Security'
      ]
    }
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, icon: 'React', category: 'frontend', badge: 'Advanced', color: '#61DAFB' },
  { name: 'TypeScript', level: 92, icon: 'FileCode2', category: 'frontend', badge: 'Advanced', color: '#3178C6' },
  { name: 'Next.js', level: 88, icon: 'Layers', category: 'frontend', badge: 'Proficient', color: '#000000' },
  { name: 'Tailwind CSS', level: 96, icon: 'Palette', category: 'frontend', badge: 'Expert', color: '#38BDF8' },
  { name: 'HTML5 & Semantic Markup', level: 98, icon: 'Code', category: 'frontend', badge: 'Expert', color: '#E34F26' },
  { name: 'CSS3 / SASS / Modern Grid & Flexbox', level: 95, icon: 'Sparkles', category: 'frontend', badge: 'Expert', color: '#1572B6' },
  { name: 'JavaScript (ES6+)', level: 94, icon: 'Braces', category: 'frontend', badge: 'Advanced', color: '#F7DF1E' },
  { name: 'Motion & UI Animations', level: 86, icon: 'Activity', category: 'frontend', badge: 'Proficient', color: '#A855F7' },
  { name: 'Redux Toolkit & Zustand', level: 88, icon: 'Cpu', category: 'frontend', badge: 'Advanced', color: '#764ABC' },
  { name: 'Responsive UI / Mobile-First', level: 98, icon: 'Smartphone', category: 'frontend', badge: 'Expert', color: '#10B981' },
  
  // Languages
  { name: 'JavaScript / TypeScript', level: 95, icon: 'Code2', category: 'languages', badge: 'Primary', color: '#F7DF1E' },
  { name: 'C++', level: 85, icon: 'Terminal', category: 'languages', badge: 'Problem Solving', color: '#00599C' },
  { name: 'Python', level: 80, icon: 'Binary', category: 'languages', badge: 'Academic/Scripting', color: '#3776AB' },
  { name: 'SQL / PostgreSQL', level: 82, icon: 'Database', category: 'languages', badge: 'Databases', color: '#336791' },

  // Tools & Platforms
  { name: 'Git & GitHub Version Control', level: 92, icon: 'GitBranch', category: 'tools', badge: 'Advanced', color: '#F05032' },
  { name: 'Vite & Webpack Build Tools', level: 90, icon: 'Zap', category: 'tools', badge: 'Advanced', color: '#646CFF' },
  { name: 'REST APIs & Fetch / Axios', level: 94, icon: 'Globe', category: 'tools', badge: 'Advanced', color: '#06B6D4' },
  { name: 'Figma to Pixel-Perfect Code', level: 90, icon: 'Layout', category: 'tools', badge: 'UI/UX', color: '#F24E1E' },
  { name: 'Postman & API Testing', level: 86, icon: 'CheckCircle2', category: 'tools', badge: 'Testing', color: '#FF6C37' },
  { name: 'Vercel / Netlify / Cloud Deploy', level: 88, icon: 'Cloud', category: 'tools', badge: 'Deployment', color: '#000000' },

  // Core CS
  { name: 'Data Structures & Algorithms', level: 88, icon: 'Workflow', category: 'core', badge: 'Core CS', color: '#EC4899' },
  { name: 'Object-Oriented Programming (OOP)', level: 92, icon: 'Boxes', category: 'core', badge: 'Foundational', color: '#8B5CF6' },
  { name: 'Design Patterns & Clean Architecture', level: 86, icon: 'ShieldCheck', category: 'core', badge: 'Architecture', color: '#3B82F6' },
  { name: 'Web Accessibility (a11y) & SEO', level: 90, icon: 'Eye', category: 'core', badge: 'Best Practices', color: '#14B8A6' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ecommerce-nexus',
    title: {
      ar: 'منصة التجارة الإلكترونية العصرية (Nexus Store)',
      en: 'Nexus Modern E-Commerce Platform'
    },
    shortDesc: {
      ar: 'متجر إلكتروني متكامل بتجربة تسوق تفاعلية وسريعة مع عربة تسوق ذكية وفلترة منتجات متقدمة.',
      en: 'Full-featured online commerce store with instant client cart, multi-level category filters, and checkout flow.'
    },
    fullDesc: {
      ar: 'تطبيق تجارة إلكترونية متكامل مبني باستخدام React 19 و TypeScript و Tailwind CSS. يتميز بواجهة مستخدم فائقة السرعة، عربة تسوق مع حفظ محلي، نظام بحث وفلترة بالأسعار والتصنيفات، وتصميم متجاوب 100% يدعم الوضعين الداكن والفاتح.',
      en: 'Comprehensive e-commerce application developed with React 19, TypeScript, and Tailwind CSS. Features dynamic product filtering, persistent interactive shopping cart, instant search, and adaptive theme switching.'
    },
    category: 'react',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide Icons'],
    demoUrl: 'https://example.com/nexus-store',
    githubUrl: 'https://github.com/abdelhamed-emad/nexus-ecommerce',
    featured: true,
    metrics: {
      ar: 'سرعة تحميل 99/100 على Lighthouse مع أداء 60fps',
      en: '99/100 Lighthouse Performance with 60fps animations'
    },
    highlights: {
      ar: [
        'نظام إدارة حالة العربة باستخدام Zustand مع التخزين المحلي الآمن',
        'فلترة وتصفية ديناميكية حسب السعر، التقييم، والتصنيف بدون إعادة تحميل',
        'تأثيرات حركة تفاعلية واستجابة تامة لجميع الهواتف والشاشات'
      ],
      en: [
        'Engineered state management with Zustand and persistent storage',
        'Instant multi-parameter product sorting and filtering with zero latency',
        'Fluid layout transitions and rigorous responsive breakpoint tuning'
      ]
    }
  },
  {
    id: 'ai-code-lens',
    title: {
      ar: 'لوحة تحكم وتحليل الأكواد الذكية (CodeLens AI)',
      en: 'CodeLens AI Developer Dashboard'
    },
    shortDesc: {
      ar: 'لوحة تحكم تفاعلية للمطورين لتحليل كفاءة الأكواد ومراجعة الأداء واقتراح التحسينات.',
      en: 'Modern developer analytics suite for code quality evaluation, performance audits, and visual syntax breakdown.'
    },
    fullDesc: {
      ar: 'منصة واجهات تفاعلية مخصصة للمطورين تتيح فحص جودة الشفرة البرمجية، عرض مخططات بيانية لإحصائيات الأداء، وتحليل نقاط الضعف مع دعم الثيم الليلي السيبراني.',
      en: 'Interactive frontend dashboard built for developer telemetry, code metrics visualization, responsive charts, and cyberpunk-inspired dark UI mode.'
    },
    category: 'ui-tools',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Motion'],
    demoUrl: 'https://example.com/codelens-dashboard',
    githubUrl: 'https://github.com/abdelhamed-emad/codelens-ai-dashboard',
    featured: true,
    metrics: {
      ar: 'تحديثات بيانات فورية مع أكثر من 12 مؤشر أداء بصري',
      en: 'Instant telemetry with 12+ custom visualization widgets'
    },
    highlights: {
      ar: [
        'مخططات بيانية تفاعلية تدعم التكبير والتصغير وفلترة البيانات الزمنية',
        'ثيم داكن مستوحى من أدوات المطورين الاحترافية مع تأثيرات النيون',
        'مكونات واجهة معيارية قابلة لإعادة الاستخدام بسهولة'
      ],
      en: [
        'Interactive time-series charts with responsive tooltips and data filtering',
        'Tailored dark neon theme optimized for low-light coding sessions',
        'Highly modular and decoupled component architecture'
      ]
    }
  },
  {
    id: 'task-flow-kanban',
    title: {
      ar: 'مدير المهام والمشاريع التفاعلي (TaskFlow Kanban)',
      en: 'TaskFlow Agile Kanban Workspace'
    },
    shortDesc: {
      ar: 'نظام كانبان مرن لإدارة المشاريع مع سحب وإفلات المهام ومتابعة تقدم الفريق في الوقت الفعلي.',
      en: 'Agile project management board featuring intuitive drag-and-drop workflow, subtasks, and deadline tracking.'
    },
    fullDesc: {
      ar: 'تطبيق لإدارة مهام الفرق والمشاريع يعتمد على منهجية Agile Kanban. يتيح سحب وإفلات البطاقات بين الأعمدة، إضافة الأولويات، الوسوم، التواريخ، ومراقبة نسب الإنجاز.',
      en: 'Agile project tracking board with interactive drag-and-drop mechanics, priority matrices, custom tagging, search filtering, and progress statistics.'
    },
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'DnD Mechanics', 'Tailwind CSS', 'Local State'],
    demoUrl: 'https://example.com/taskflow-kanban',
    githubUrl: 'https://github.com/abdelhamed-emad/taskflow-kanban',
    featured: true,
    metrics: {
      ar: 'إدارة أكثر من 100 مهمة بسلاسة تامة بدون أي بطء',
      en: 'Zero-lag management of 100+ concurrent task items'
    },
    highlights: {
      ar: [
        'نظام سحب وإفلات سلس يدعم اللمس على الهواتف والماوس على الحواسيب',
        'تخصيص كامل للأعمدة والوسوم مع حفظ البيانات محلياً',
        'إحصائيات فورية للمهام المنجزة والمتأخرة'
      ],
      en: [
        'Smooth touch and pointer drag-and-drop interaction',
        'Customizable swimlanes and priority filters with local persistence',
        'Live summary analytics of completion rate and upcoming milestones'
      ]
    }
  },
  {
    id: 'medconnect-portal',
    title: {
      ar: 'بوابة الرعاية الصحية الذكية (MedConnect)',
      en: 'MedConnect Smart Clinic Portal'
    },
    shortDesc: {
      ar: 'واجهة متطورة لحجز المواعيد الطبية ومتابعة الاستشارات وإدارة ملفات المرضى.',
      en: 'Healthcare appointment booking portal with doctor directory, calendar scheduling, and patient history.'
    },
    fullDesc: {
      ar: 'منصة ويب طبية توفر تجربة سهلة لحجز المواعيد مع الأطباء، استعراض التخصصات، تصفح المراجعات، ومتابعة سجل الزيارات مع واجهة مريحة للعين ومعايير وصول عالية.',
      en: 'Accessible clinical portal designed for patient scheduling, physician directory search, appointment management, and streamlined medical history overview.'
    },
    category: 'react',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Formik/Yup', 'i18n Ready'],
    demoUrl: 'https://example.com/medconnect-portal',
    githubUrl: 'https://github.com/abdelhamed-emad/medconnect-healthcare',
    featured: false,
    metrics: {
      ar: 'متوافقة بنسبة 100% مع معايير إتاحة الويب WCAG AA',
      en: '100% WCAG AA Accessibility and keyboard navigation support'
    },
    highlights: {
      ar: [
        'نماذج حجز متعددة الخطوات مع تدقيق فوري للمدخلات',
        'دعم كامل للغتين العربية والإنجليزية مع اتجاهات RTL/LTR',
        'تصميم هادئ ومريح للمستخدمين في المجال الطبي'
      ],
      en: [
        'Multi-step appointment form with real-time validation',
        'Native bilingual English/Arabic layout switching',
        'Calm, accessible UI palette designed for healthcare users'
      ]
    }
  },
  {
    id: 'crypto-pulse',
    title: {
      ar: 'منصة متابعة العملات المشفرة (CryptoPulse)',
      en: 'CryptoPulse Live Market Tracker'
    },
    shortDesc: {
      ar: 'متتبع أسعار العملات الرقمية لحظة بلحظة مع رسوم بيانية تفاعلية وتنبيهات مخصصة.',
      en: 'Real-time cryptocurrency analytics tracker with interactive price charts and watchlist curation.'
    },
    fullDesc: {
      ar: 'تطبيق ويب لمتابعة حركة أسواق المال والعملات الرقمية، يربط مع واجهات برمجية عامة لجلب الأسعار الحية ومقارنة مؤشرات التداول في واجهة حديثة ومتحركة.',
      en: 'Market tracking application pulling live pricing data, calculating market caps, plotting price histories, and letting users assemble custom asset watchlists.'
    },
    category: 'ui-tools',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'REST API', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://example.com/cryptopulse',
    githubUrl: 'https://github.com/abdelhamed-emad/cryptopulse-tracker',
    featured: false,
    metrics: {
      ar: 'تحديث بيانات الأسعار كل 15 ثانية مع كاشينج ذكي',
      en: '15-second data polling cycle with intelligent cache management'
    },
    highlights: {
      ar: [
        'تكامل كامل مع REST API لبيانات العملات الحية',
        'قائمة مفضلة لحفظ ومتابعة العملات المهمة',
        'مؤشرات الأرباح والخسائر بالألوان المتناسقة'
      ],
      en: [
        'Seamless REST API integration for real-time market feeds',
        'Custom watchlist storage with instant search capability',
        'Dynamic profit/loss indicators with animated color transitions'
      ]
    }
  },
  {
    id: 'devfolio-builder',
    title: {
      ar: 'محرر البورتفوليو والسير الذاتية (DevResume Studio)',
      en: 'DevResume Studio & Portfolio Generator'
    },
    shortDesc: {
      ar: 'أداة ويب تفاعلية لإنشاء وتخصيص السير الذاتية المهنية وتصديرها بصيغة PDF فوراً.',
      en: 'Interactive web utility for generating developer resumes with instant live preview and PDF output.'
    },
    fullDesc: {
      ar: 'أداة ويب تمكن المطورين والمهندسين من إدخال بياناتهم وتخصيص القوالب وتوليد سير ذاتية مطابقة لمعايير أنظمة التوظيف ATS وتنزيلها بصيغة PDF بجودة عالية.',
      en: 'Web utility enabling software engineers to build ATS-friendly resumes, preview formatting in real time, and export production-ready vector PDFs.'
    },
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'jsPDF', 'Tailwind CSS', 'State Export'],
    demoUrl: 'https://example.com/devresume-studio',
    githubUrl: 'https://github.com/abdelhamed-emad/devresume-studio',
    featured: false,
    metrics: {
      ar: 'توليد ملفات PDF خفيفة وسريعة في أقل من 500ms',
      en: 'Under 500ms vector PDF compilation & export'
    },
    highlights: {
      ar: [
        'معاينة حية متزامنة مع الكتابة لحظة بلحظة',
        'تصدير واستيراد البيانات بصيغة JSON لحفظ التقدم',
        'دعم ثنائي للغتين العربية والإنجليزية في ملف الـ PDF'
      ],
      en: [
        'Synchronized instant live split-screen preview',
        'JSON data import/export for saving and restoring progress',
        'Bilingual Arabic & English typographic rendering in exported PDFs'
      ]
    }
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-meta-frontend',
    title: {
      ar: 'شهادة مهندس واجهات أمامية محترف من Meta',
      en: 'Meta Frontend Developer Professional Certificate'
    },
    issuer: {
      ar: 'شركة Meta بالتعاون مع Coursera',
      en: 'Meta & Coursera'
    },
    date: '2024',
    credentialId: 'META-FED-998241',
    credentialUrl: 'https://coursera.org/verify/professional-cert/META-FRONTEND',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Version Control (Git)', 'UI/UX Principles'],
    verified: true
  },
  {
    id: 'cert-react-advanced',
    title: {
      ar: 'التطوير المتقدم باستخدام React وأنماط التصميم الحديثة',
      en: 'Advanced React Patterns, Performance & Architecture'
    },
    issuer: {
      ar: 'أكاديمية Epic React / Frontend Masters',
      en: 'Epic React / Frontend Masters'
    },
    date: '2024',
    credentialId: 'EPIC-RCT-74129',
    credentialUrl: 'https://frontendmasters.com/certificates',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    skills: ['React Hooks', 'Custom Hooks', 'Code Splitting', 'Performance Profiling', 'State Reducers'],
    verified: true
  },
  {
    id: 'cert-fcai-hackathon',
    title: {
      ar: 'المركز الأول في هاكاثون الابتكار البرمجي - جامعة حلوان',
      en: 'First Place - FCAI Helwan Software Innovation Hackathon'
    },
    issuer: {
      ar: 'كلية الحاسبات والذكاء الاصطناعي - جامعة حلوان',
      en: 'Faculty of Computers & AI, Helwan University'
    },
    date: '2023',
    credentialId: 'FCAI-HACK-2023-01',
    credentialUrl: 'https://fcai.helwan.edu.eg/hackathon-awards',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    skills: ['Team Leadership', 'Fast Prototyping', 'React & Web APIs', 'Problem Solving'],
    verified: true
  },
  {
    id: 'cert-dsa-problem-solving',
    title: {
      ar: 'هياكل البيانات والخوارزميات وحل المشكلات التنافسي',
      en: 'Data Structures, Algorithms & Competitive Problem Solving'
    },
    issuer: {
      ar: 'منصة HackerRank & LeetCode Certified',
      en: 'HackerRank & LeetCode Certified'
    },
    date: '2023',
    credentialId: 'HR-DSA-ADV-5542',
    credentialUrl: 'https://hackerrank.com/certificates',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    skills: ['C++', 'Data Structures', 'Algorithms', 'Time Complexity Analysis', 'Recursion & DP'],
    verified: true
  },
  {
    id: 'cert-google-web-perf',
    title: {
      ar: 'تحسين أداء الويب وتجربة المستخدم من Google',
      en: 'Google Web Performance & Core Web Vitals Specialist'
    },
    issuer: {
      ar: 'Google Developers Program',
      en: 'Google Developers'
    },
    date: '2023',
    credentialId: 'GOOG-DEV-WEB-8819',
    credentialUrl: 'https://developers.google.com/profile',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    skills: ['Core Web Vitals', 'Lighthouse Optimization', 'Lazy Loading', 'Asset Compression'],
    verified: true
  },
  {
    id: 'cert-typescript-pro',
    title: {
      ar: 'إتقان لغة TypeScript لتطبيقات الويب الضخمة',
      en: 'Professional TypeScript for Scalable Enterprise Apps'
    },
    issuer: {
      ar: 'Udemy & Total TypeScript Academy',
      en: 'Total TypeScript Academy'
    },
    date: '2023',
    credentialId: 'TTS-ADV-9021',
    credentialUrl: 'https://udemy.com/certificate/UC-TS-9021',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    skills: ['Generics', 'Type Narrowing', 'Utility Types', 'Strict Typing', 'Module Resolution'],
    verified: true
  }
];
