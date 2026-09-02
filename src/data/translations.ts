import { LocalizedString } from '../types';

export const UI_TRANSLATIONS = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'عني', en: 'About' },
    education: { ar: 'التعليم', en: 'Education' },
    skills: { ar: 'المهارات', en: 'Skills' },
    projects: { ar: 'المشاريع', en: 'Projects' },
    certificates: { ar: 'الشهادات', en: 'Certificates' },
    contact: { ar: 'تواصل معي', en: 'Contact' },
    downloadCV: { ar: 'تحميل السيرة الذاتية', en: 'Download CV' },
    switchLanguage: { ar: 'English', en: 'العربية' },
    themeDark: { ar: 'الوضع الليلي', en: 'Dark Mode' },
    themeLight: { ar: 'الوضع النهاري', en: 'Light Mode' },
  },
  hero: {
    badge: { ar: 'متاح للعمل والمشاريع الحرة', en: 'Available for hire & freelance' },
    greeting: { ar: 'مرحباً، أنا', en: 'Hello, I am' },
    name: { ar: 'عبدالحميد عماد', en: 'Abdelhamed Emad' },
    roles: {
      ar: [
        'مطور واجهات أمامية (Frontend Developer)',
        'مهندس برمجيات (Software Engineer)',
        'متخصص React & TypeScript',
        'مطور تطبيقات ويب تفاعلية',
        'طالب حاسبات وذكاء اصطناعي حلوان'
      ],
      en: [
        'Frontend Developer',
        'Software Engineer',
        'React & TypeScript Specialist',
        'Interactive Web Architect',
        'CS & AI Student at Helwan University'
      ]
    },
    bio: {
      ar: 'مهندس برمجيات ومطور واجهات أمامية شغوف ببناء تجارب رقمية فائقة السرعة، سلسة، وعصرية. أجمع بين قوة المنطق البرمجي والجمال البصري باستخدام أحدث تقنيات React و Next.js و TypeScript.',
      en: 'Passionate Frontend Developer & Software Engineer crafting high-performance, visually stunning, and user-centric web applications with React, TypeScript, and modern web architectures.'
    },
    ctaContact: { ar: 'تواصل معي الآن', en: 'Get In Touch' },
    ctaCV: { ar: 'تحميل الـ CV (PDF)', en: 'Download Resume' },
    ctaProjects: { ar: 'استكشف مشاريعي', en: 'Explore Projects' },
    statsExperience: { ar: 'سنوات من الشغف والبرمجة', en: 'Years Coding Passion' },
    statsProjects: { ar: 'مشروع منجز بنجاح', en: 'Completed Projects' },
    statsSatisfaction: { ar: 'رضا العملاء والشركاء', en: 'Client Satisfaction' },
  },
  about: {
    sectionTitle: { ar: 'نبذة عني', en: 'About Me' },
    sectionSubtitle: { ar: 'الشغف، التخصص، والمسيرة الأكاديمية والمهنية', en: 'Passion, Expertise & Engineering Mindset' },
    heading: { ar: 'مهندس برمجيات يبتكر حلولاً رقمية تفاعلية', en: 'Software Engineer Crafting Interactive Digital Solutions' },
    paragraph1: {
      ar: 'أنا عبدالحميد عماد، مطور واجهات أمامية وطالب في كلية الحاسبات والذكاء الاصطناعي بجامعة حلوان. أمتلك أساساً هندسياً قوياً في علوم الحاسب، الخوارزميات، وهياكل البيانات، مما يمكنني من كتابة كود نظيف، قابل للتوسع، وعالي الأداء.',
      en: 'I am Abdelhamed Emad, a Frontend Developer and Computer Science student at Helwan University, Faculty of Computers and Artificial Intelligence. With a solid foundation in computer science and algorithms, I focus on clean, scalable code.'
    },
    paragraph2: {
      ar: 'أركز على بناء وتطوير تطبيقات الويب الحديثة باستخدام React و Next.js و TypeScript و Tailwind CSS مع الاهتمام بأدق تفاصيل تجربة المستخدم (UI/UX)، سهولة الوصول (Accessibility)، والتفاعل السلس عبر الأنظمة المختلفة.',
      en: 'I specialize in crafting modern responsive web applications using React, Next.js, TypeScript, and Tailwind CSS, paying meticulous attention to UI/UX details, performance optimization, and seamless interactivity.'
    },
    keyPoints: {
      university: {
        title: { ar: 'حاسبات وذكاء اصطناعي حلوان', en: 'FCAI Helwan University' },
        desc: { ar: 'دراسة متعمقة في هندسة البرمجيات والخوارزميات والذكاء الاصطناعي', en: 'In-depth study of software engineering, algorithms & AI' }
      },
      cleanCode: {
        title: { ar: 'كود نظيف وقابل للصيانة', en: 'Clean & Scalable Code' },
        desc: { ar: 'تطبيق مبادئ SOLID وتنسيق البنية المعمارية للواجهات', en: 'Applying SOLID principles, reusable components & best practices' }
      },
      performance: {
        title: { ar: 'أداء فائق وسرعة استجابة', en: 'High Performance & Speed' },
        desc: { ar: 'تحسين سرعة التحميل، SEO، وتجربة المستخدم السلسة', en: 'Optimizing Core Web Vitals, SEO, and fluid 60fps animations' }
      },
      collaboration: {
        title: { ar: 'شغف التعلم والعمل الجماعي', en: 'Agile & Collaborative' },
        desc: { ar: 'إدارة المشاريع عبر Git وتنسيق مستمر مع فرق العمل', en: 'Git version control, teamwork, agile sprints and problem solving' }
      }
    }
  },
  education: {
    sectionTitle: { ar: 'المسار التعليمي', en: 'Academic Journey' },
    sectionSubtitle: { ar: 'التعليم الأكاديمي والدرجات العلمية والتدريب', en: 'Education, Academic Background & Milestones' },
    badge: { ar: 'التعليم العالي', en: 'Higher Education' },
    coursesLabel: { ar: 'أبرز المقررات الأكاديمية:', en: 'Key Academic Courses:' },
    achievementsLabel: { ar: 'الأنشطة والتميز:', en: 'Activities & Highlights:' }
  },
  skills: {
    sectionTitle: { ar: 'المهارات والتقنيات', en: 'Technical Skills' },
    sectionSubtitle: { ar: 'أدوات وتقنيات متطورة لبناء واجهات ويب احترافية', en: 'Modern Stack, Frameworks & Engineering Tools' },
    tabs: {
      all: { ar: 'جميع المهارات', en: 'All Skills' },
      frontend: { ar: 'الواجهات الأمامية', en: 'Frontend' },
      languages: { ar: 'لغات البرمجة', en: 'Languages' },
      tools: { ar: 'الأدوات والمنصات', en: 'Tools & Platforms' },
      core: { ar: 'علوم الحاسب والأساسيات', en: 'Core CS & Concepts' }
    },
    proficiencyLevel: { ar: 'مستوى الإتقان', en: 'Proficiency' },
    searchPlaceholder: { ar: 'ابحث عن مهارة أو تقنية...', en: 'Search a skill or tech...' }
  },
  projects: {
    sectionTitle: { ar: 'معرض المشاريع', en: 'Featured Projects' },
    sectionSubtitle: { ar: 'مجموعة من أبرز المشاريع الواقعية وتطبيقات الويب', en: 'Selected Web Apps, Prototypes & Production Systems' },
    tabs: {
      all: { ar: 'الكل', en: 'All' },
      react: { ar: 'React & Next.js', en: 'React & Next.js' },
      fullstack: { ar: 'تطبيقات متكاملة', en: 'Fullstack & APIs' },
      uiTools: { ar: 'واجهات وأدوات', en: 'UI Kits & Tools' }
    },
    liveDemo: { ar: 'معاينة حية', en: 'Live Demo' },
    sourceCode: { ar: 'كود المشروع', en: 'GitHub Code' },
    viewDetails: { ar: 'تفاصيل المشروع', en: 'Project Details' },
    keyHighlights: { ar: 'أبرز مميزات المشروع:', en: 'Key Highlights:' },
    modalClose: { ar: 'إغلاق', en: 'Close' }
  },
  certificates: {
    sectionTitle: { ar: 'الشهادات والاعتمادات', en: 'Certifications' },
    sectionSubtitle: { ar: 'شهادات مهنية ودورات معتمدة في هندسة البرمجيات والواجهات', en: 'Professional Credentials & Verified Certificates' },
    issuerLabel: { ar: 'الجهة المانحة:', en: 'Issued By:' },
    dateLabel: { ar: 'تاريخ الإصدار:', en: 'Issue Date:' },
    credentialIdLabel: { ar: 'رقم الاعتماد:', en: 'Credential ID:' },
    verifyButton: { ar: 'التحقق من الشهادة', en: 'Verify Certificate' },
    previewButton: { ar: 'تكبير وعرض الشهادة', en: 'Preview Certificate' },
    verifiedBadge: { ar: 'شهادة موثقة', en: 'Verified Credential' }
  },
  contact: {
    sectionTitle: { ar: 'تواصل معي', en: 'Get In Touch' },
    sectionSubtitle: { ar: 'هل لديك فكرة مشروع أو فرصة عمل؟ يسعدني التواصل معك!', en: 'Have an idea, project, or job opportunity? Let’s talk!' },
    formTitle: { ar: 'أرسل رسالة مباشرة', en: 'Send a Message' },
    nameLabel: { ar: 'الاسم الكامل', en: 'Full Name' },
    namePlaceholder: { ar: 'مثال: محمد أحمد', en: 'e.g. John Doe' },
    emailLabel: { ar: 'البريد الإلكتروني', en: 'Email Address' },
    emailPlaceholder: { ar: 'name@example.com', en: 'name@example.com' },
    subjectLabel: { ar: 'موضوع الرسالة', en: 'Subject' },
    subjectPlaceholder: { ar: 'استفسار عن مشروع، فرصة توظيف...', en: 'Project inquiry, Job offer, Collaboration...' },
    messageLabel: { ar: 'تفاصيل الرسالة', en: 'Message' },
    messagePlaceholder: { ar: 'اكتب رسالتك أو تفاصيل مشروعك هنا...', en: 'Write your message or project requirements here...' },
    submitButton: { ar: 'إرسال الرسالة الآن', en: 'Send Message' },
    sendingButton: { ar: 'جاري الإرسال...', en: 'Sending...' },
    successMessage: { ar: 'تم استلام رسالتك بنجاح! سأتواصل معك في أقرب وقت.', en: 'Message received successfully! I will get back to you shortly.' },
    errorMessage: { ar: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.', en: 'Please fill out all required fields correctly.' },
    contactDirect: { ar: 'معلومات الاتصال المباشر', en: 'Direct Contact Info' },
    quickChat: { ar: 'محادثة سريعة عبر واتساب', en: 'Chat via WhatsApp' },
    copySuccess: { ar: 'تم النسخ إلى الحافظة!', en: 'Copied to clipboard!' },
    locationTitle: { ar: 'الموقع الحالي', en: 'Location' },
    locationValue: { ar: 'القاهرة، جمهورية مصر العربية', en: 'Cairo, Egypt' },
    availabilityTitle: { ar: 'حالة التفرغ', en: 'Availability' },
    availabilityValue: { ar: 'متاح للعمل بدوام كامل أو جزئي أو عن بُعد', en: 'Available for Full-time, Freelance & Remote' },
  },
  cvModal: {
    title: { ar: 'معاينة وتحميل السيرة الذاتية', en: 'Preview & Download CV' },
    subtitle: { ar: 'السيرة الذاتية الرسمية للمطور عبدالحميد عماد بصيغة PDF عالية الجودة', en: 'Official Resume of Abdelhamed Emad in high-quality PDF format' },
    downloadPdfEn: { ar: 'تحميل النسخة الإنجليزية (PDF)', en: 'Download English CV (PDF)' },
    downloadPdfAr: { ar: 'تحميل النسخة العربية (PDF)', en: 'Download Arabic CV (PDF)' },
    printCv: { ar: 'طباعة فورية', en: 'Print CV' },
    generating: { ar: 'جاري إعداد ملف الـ PDF...', en: 'Generating PDF...' },
    ready: { ar: 'الملف جاهز للتحميل', en: 'File ready for download' }
  },
  footer: {
    rights: { ar: 'جميع الحقوق محفوظة ©', en: 'All Rights Reserved ©' },
    madeWith: { ar: 'صُمم وبُني بكل شغف بواسطة', en: 'Designed & Built with passion by' },
    backToTop: { ar: 'العودة للأعلى', en: 'Back to Top' }
  }
};
