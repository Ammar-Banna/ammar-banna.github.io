/**
 * Professional Portfolio Scripts
 * Author: Ammar Al-Banna
 * Description: Handles dual-language support, interactive UI elements 
 * (lightboxes, carousels), and scroll animations across the portfolio.
 */

// =========================================
// 1. Unified Translations Repository
// =========================================
const translations = {
    en: {
        langBtn: "AR",
        dir: "ltr",
        
        // Common
        projectsBtn: "Projects",
        cvBtn: "CV",
        skillsBtn: "Skills",
        profileBtn: "Profile",
        location: "Saudi Arabia, Al-Sharqiya",
        footerText: "© 2026 Ammar Al-Banna. All Rights Reserved.",
        name: "Ammar Mohammed Al-Banna",
        jobTitle: "Computer Science and Engineering",
        
        // Index
        bio: "Passionate CS Engineer focusing on innovative solutions and scalable systems.",
        linkName: "Ammar Al-Banna",

        // Projects
        projectsTitle: "Projects",
        webAppsTitle: "Web Applications",
        bookingTitle: "University Classroom Booking System",
        bookingDesc: "A web application that enables faculty members to book classrooms and laboratories electronically to prevent scheduling conflicts.",
        techUsed: "Technologies Used",
        howLook: "How does it look?",
        howWork: "How it works?",
        surveyTitle: "ASP.NET Survey System",
        surveyDesc: "A web application for creating dynamic surveys, collecting user responses, and managing data locally.",
        whyBuilt: "Why was the project built?",
        bookingWhy: "Solving the problem of complex manual room coordination and avoiding double bookings, while providing a full digital record for each room and operational efficiency.",
        surveyWhy: "Developed as a practical assignment for a programming course to apply full-stack development and database management concepts.",
        emailLabel: "Email:",
        userLabel: "Username:",
        passLabel: "Password:", 
        tryBtn: "Try",
        autoToolsTitle: "Automation Tools",
        deviceSetupTitle: "Automation Tool for Device Setup",
        deviceSetupDesc: "A PowerShell-based GUI utility to automate software installation and PC configuration for university staff and students.",
        deviceSetupWhy: "To eliminate the time-consuming, repetitive manual setup of new university computers by providing a centralized, one-click automated configuration tool.",
        autoTypingTitle: "Auto-Typing Tool",
        autoTypingDesc: "A lightweight PowerShell tool that automatically types pre-defined text snippets to eliminate repetitive copy-pasting.",
        autoTypingWhy: "To speed up daily workflow by automating the insertion of frequently used texts, saving time and reducing the manual effort of constantly navigating the clipboard.",
        desktopAppsTitle: "Desktop Applications",
        contactCardTitle: "Contact & Business Card Manager",
        contactCardDesc: "A desktop GUI application for managing contacts and digital business cards, supporting data import and multiple export/print formats.",
        contactCardWhy: "To streamline contact management by converting spreadsheet data into interactive digital cards that are easy to use, share, and print locally.",
        keyFeatures: "Key Features:",
        feature1: "Flexible Export & Print: Cards can be copied, shared, and printed.",
        feature2: "Excel Integration: Direct data import from Excel files.",
        feature3: "Interactive Data: Clickable emails and phone numbers.",
        downloadText: "If you're interested, download the application and try out its features.",
        downloadBtn: "Download",

        // Skills
        pageTitle: "Skills",
        pageHeader: "Professional Skills",
        pageSub: "A detailed breakdown of my capabilities, combining aesthetic design with robust engineering.",
        techTitle: 'Core <span class="highlight-gold">Engineering</span>',
        techSub: 'Technical Skills',
        techDesc: 'I build <span class="bold-word">robust systems</span> and scalable apps. From <span class="accent-word">backend logic</span> to <span class="bold-word">desktop GUIs</span>, I focus on clean architecture and high-performance code.',
        ts1: "Python & PyQt", ts2: "Web (HTML/CSS/JS)", ts3: "SQL Server", ts4: "PowerShell Auto",
        techSig: "Turning complex logic into seamless software solutions.",
        aiTitle: 'AI <span class="highlight-gold">Synergy</span>',
        aiSub: 'Artificial Intelligence Interaction',
        aiDesc: 'Mastering the art of <span class="accent-word">communication with machines</span>. I use <span class="bold-word">Prompt Engineering</span> to accelerate development and solve complex algorithmic hurdles.',
        ai1: "Prompt Structuring", ai2: "Task Formulation", ai3: "AI Debugging", ai4: "Logic Breakdown",
        aiSig: "Bridging human intent and machine execution perfectly.",
        dataTitle: 'Data <span class="highlight-gold">Mastery</span>',
        dataSub: 'Data & Analysis',
        dataDesc: 'Numbers tell a story if you know how to read them. I excel at <span class="bold-word">structuring chaos</span> into <span class="accent-word">organized datasets</span> for deep analysis.',
        da1: "Data Structuring", da2: "Complex Analysis", da3: "Advanced Excel", da4: "Data Cleaning",
        dataSig: "Transforming raw inputs into structured, actionable insights.",
        designTitle: 'Artistic <span class="highlight-gold">Instinct</span>',
        designSub: 'Design & Creativity',
        designDesc: 'I live and breathe <span class="accent-word">design</span> and <span class="accent-word">art</span>. From sketching to <span class="bold-word">UI/UX design</span>, my creative eye turns concepts into <span class="highlight-gold">stunning realities</span>.',
        ds1: "UI/UX Design", ds2: "Photoshop", ds3: "Digital Art", ds4: "Attention to Detail",
        designSig: "Not just an engineer — a creative force driven by precision.",
        sysTitle: 'Hardware <span class="highlight-gold">Expertise</span>',
        sysSub: 'Systems & Hardware',
        sysDesc: 'Deep understanding of <span class="bold-word">IT infrastructure</span>. I diagnose, assemble, and optimize hardware to ensure <span class="accent-word">maximum performance</span>.',
        sh1: "PC Assembly", sh2: "Troubleshooting", sh3: "Optimization", sh4: "Network Basics",
        sysSig: "Building and maintaining the physical backbone of technology.",
        addTitle: 'Professional <span class="highlight-gold">Toolkit</span>',
        addSub: 'Additional Skills',
        addDesc: 'Beyond coding, I excel at <span class="bold-word">communicating ideas</span>. Crafting clear documentation and engaging presentations is <span class="accent-word">second nature</span>.',
        ad1: "Tech Docs", ad2: "Presentations", ad3: "Problem Solving", ad4: "Team Collaboration",
        addSig: "Delivering clarity, structure, and impact in every project.",

        // CV
        cvTitlePage: "Curriculum Vitae",
        summary: "I craft efficient and intuitive software experiences by blending Computer Science with a strong sense of design. I specialize in <strong>automation, data organization,</strong> and <strong>UI design</strong>, turning complex ideas into simple, elegant solutions.",
        expTitle: "Work Experience",
        jobTitleExp: "Systems Support Engineer (CO-OP)",
        jobLocation: "Deanship of E-Learning and digital transformation, University of Hafr Al-Batin",
        jobDesc: "<li>Automated computer setup and maintenance tasks via PowerShell GUIs, reducing execution time by 50%.</li><li>Developed a PyQt desktop application for interactive contact and business card management.</li><li>Managed hardware inventory, component replacement, and server rack organization.</li>",
        eduTitle: "Education",
        degreeTitle: "Bachelor of Computer Science and Engineering",
        uniName: "University of Hafr Al-Batin",
        eduDesc: "<li>Graduation project: Designed a conflict-free scheduling system and a visually optimized interface for university hall bookings.</li>",
        skillsTitleCV: "Skills", 
        techSkills: "Technical Skills", techTags: '<span class="tag">Python</span><span class="tag">PyQt</span><span class="tag">HTML/CSS</span><span class="tag">JavaScript</span><span class="tag">SQL</span><span class="tag">PowerShell</span>',
        aiSkills: "AI Interaction", aiTags: '<span class="tag">Prompt Engineering</span><span class="tag">Task Formulation</span><span class="tag">Effective AI Communication</span>',
        dataSkills: "Data & Analysis", dataTags: '<span class="tag">Data Structuring</span><span class="tag">Complex Data Analysis</span><span class="tag">Advanced Excel</span>',
        designSkills: "Design & Creativity", designTags: '<span class="tag">UI/UX Design</span><span class="tag">Adobe Photoshop</span><span class="tag">Sketching & Digital Art</span>',
        sysSkills: "Systems & Hardware", sysTags: '<span class="tag">PC Assembly</span><span class="tag">Hardware Troubleshooting</span><span class="tag">System Optimization</span>',
        addSkills: "Additional Skills", addTags: '<span class="tag">Technical Documentation</span><span class="tag">Presentation Design</span>',
        langSectionTitle: "Languages",
        arabicTitle: "Arabic",
        arabicLevel: "Native",
        arabicDesc: "Mother tongue, fluent in reading, writing, and professional communication.",
        englishTitle: "English",
        englishLevel: "Proficient",
        englishDesc: "Strong ability in technical reading, writing documentation, and seamless professional communication.",
        downloadCvBtn: "Download CV"
    },
    ar: {
        langBtn: "EN",
        dir: "rtl",
        
        // Common
        projectsBtn: "المشاريع",
        cvBtn: "السيرة الذاتية",
        skillsBtn: "المهارات",
        profileBtn: "الرئيسية",
        location: "المملكة العربية السعودية، الشرقية",
        footerText: "© 2026 عمار البنا. جميع الحقوق محفوظة.",
        name: "عمار محمد البنا",
        jobTitle: "علوم وهندسة الحاسب",
        
        // Index
        bio: "مهندس حاسوب شغوف يركز على بناء حلول مبتكرة وأنظمة قابلة للتوسع.",
        linkName: "عمار البنا",

        // Projects
        projectsTitle: "المشاريع",
        webAppsTitle: "تطبيقات الويب",
        bookingTitle: "نظام حجز القاعات الجامعية",
        bookingDesc: "تطبيق ويب يتيح لأعضاء هيئة التدريس حجز القاعات والمعامل إلكترونياً لتجنب تضارب المواعيد.",
        techUsed: "التقنيات المستخدمة",
        howLook: "كيف يبدو النظام؟",
        howWork: "كيف يعمل النظام؟",
        surveyTitle: "نظام الاستبيانات ASP.NET",
        surveyDesc: "تطبيق ويب لإنشاء الاستبيانات الديناميكية، جمع ردود المستخدمين، وإدارة البيانات محلياً.",
        whyBuilt: "لماذا تم بناء المشروع؟",
        bookingWhy: "حل مشكلة التنسيق اليدوي المعقد للقاعات وتجنب الحجوزات المزدوجة، مع توفير سجل رقمي كامل لكل قاعة وكفاءة تشغيلية.",
        surveyWhy: "تم تطويره كتكليف عملي لدورة برمجة لتطبيق مفاهيم تطوير الويب وإدارة قواعد البيانات.",
        emailLabel: "البريد:",
        userLabel: "اسم المستخدم:",
        passLabel: "كلمة المرور:",
        tryBtn: "تجربة",
        autoToolsTitle: "أدوات الأتمتة",
        deviceSetupTitle: "أداة تجهيز الأجهزة",
        deviceSetupDesc: "أداة بواجهة رسومية تعتمد على PowerShell لأتمتة تثبيت البرامج وإعداد أجهزة الكمبيوتر.",
        deviceSetupWhy: "للقضاء على الوقت المهدر في الإعداد اليدوي المتكرر للأجهزة عبر توفير أداة إعداد تلقائية بضغطة زر.",
        autoTypingTitle: "أداة الكتابة التلقائية",
        autoTypingDesc: "أداة PowerShell خفيفة تقوم بكتابة النصوص المحددة مسبقاً تلقائياً لتجنب النسخ واللصق المتكرر.",
        autoTypingWhy: "لتسريع سير العمل اليومي عبر أتمتة إدراج النصوص المستخدمة بكثرة وتوفير وقت النسخ واللصق.",
        desktopAppsTitle: "تطبيقات سطح المكتب",
        contactCardTitle: "مدير جهات الاتصال وبطاقات العمل",
        contactCardDesc: "تطبيق مكتبي لإدارة جهات الاتصال والبطاقات الرقمية، يدعم استيراد البيانات وتنسيقات طباعة متعددة.",
        contactCardWhy: "لتسهيل إدارة جهات الاتصال بتحويل بيانات الجداول إلى بطاقات رقمية يسهل استخدامها وطباعتها محلياً.",
        keyFeatures: "أبرز المميزات:",
        feature1: "مرونة التصدير والطباعة: يمكن نسخ البطاقات ومشاركتها وطباعتها.",
        feature2: "التكامل مع Excel: استيراد البيانات مباشرة من ملفات إكسل.",
        feature3: "بيانات تفاعلية: إمكانية النقر على البريد أو الهاتف للتواصل المباشر.",
        downloadText: "إذا كنت مهتماً، قم بتحميل التطبيق وجرب مميزاته.",
        downloadBtn: "تحميل",

        // Skills
        pageTitle: "المهارات",
        pageHeader: "المهارات المهنية",
        pageSub: "تفصيل دقيق لقدراتي، يجمع بين التصميم الجمالي والهندسة البرمجية المتينة.",
        techTitle: 'الهندسة <span class="highlight-gold">البرمجية</span>',
        techSub: 'المهارات التقنية',
        techDesc: 'أبني <span class="bold-word">أنظمة قوية</span> وتطبيقات قابلة للتوسع. من <span class="accent-word">المنطق البرمجي</span> إلى <span class="bold-word">واجهات المستخدم</span>، أركز على الكود النظيف والأداء العالي.',
        ts1: "بايثون و PyQt", ts2: "تطوير الويب", ts3: "قواعد SQL", ts4: "أتمتة PowerShell",
        techSig: "تحويل المنطق المعقد إلى حلول برمجية سلسة.",
        aiTitle: 'التناغم مع <span class="highlight-gold">الـ AI</span>',
        aiSub: 'التفاعل مع الذكاء الاصطناعي',
        aiDesc: 'إتقان فن <span class="accent-word">التواصل مع الآلة</span>. أستخدم <span class="bold-word">هندسة الأوامر</span> لتسريع التطوير وتجاوز العقبات الخوارزمية المعقدة.',
        ai1: "هيكلة الأوامر", ai2: "صياغة المهام", ai3: "تنقيح الأكواد", ai4: "تفكيك المنطق",
        aiSig: "ربط القصد البشري بالتنفيذ الآلي بدقة تامة.",
        dataTitle: 'إتقان <span class="highlight-gold">البيانات</span>',
        dataSub: 'البيانات والتحليل',
        dataDesc: 'الأرقام تروي قصة إذا عرفت كيف تقرأها. أتميز في <span class="bold-word">تنظيم الفوضى</span> وتحويلها إلى <span class="accent-word">بيانات مهيكلة</span> للتحليل العميق.',
        da1: "هيكلة البيانات", da2: "التحليل المعقد", da3: "إكسل المتقدم", da4: "تنظيف البيانات",
        dataSig: "تحويل المدخلات الخام إلى رؤى منظمة وقابلة للتطبيق.",
        designTitle: 'الحس <span class="highlight-gold">الفني</span>',
        designSub: 'التصميم والإبداع',
        designDesc: 'أعيش وأتنفس <span class="accent-word">التصميم</span> و<span class="accent-word">الفن</span>. من التخطيط إلى <span class="bold-word">تصميم UI/UX</span>، عيني الإبداعية تحول الأفكار لـ <span class="highlight-gold">واقع مذهل</span>.',
        ds1: "تصميم UI/UX", ds2: "فوتوشوب", ds3: "الفن الرقمي", ds4: "الاهتمام بالتفاصيل",
        designSig: "لست مجرد مهندس — بل قوة إبداعية يقودها الشغف.",
        sysTitle: 'خبرة <span class="highlight-gold">العتاد</span>',
        sysSub: 'الأنظمة والعتاد',
        sysDesc: 'فهم عميق لـ <span class="bold-word">البنية التحتية التقنية</span>. أقوم بتشخيص، تجميع، وتحسين الأجهزة لضمان <span class="accent-word">أقصى أداء</span>.',
        sh1: "تجميع الحواسيب", sh2: "اكتشاف الأعطال", sh3: "تحسين الأداء", sh4: "أساسيات الشبكات",
        sysSig: "بناء وصيانة العمود الفقري المادي للتكنولوجيا.",
        addTitle: 'الأدوات <span class="highlight-gold">المهنية</span>',
        addSub: 'مهارات إضافية',
        addDesc: 'أبعد من البرمجة، أبرز في <span class="bold-word">توصيل الأفكار</span>. كتابة التوثيقات وتصميم العروض التقديمية هي <span class="accent-word">طبيعتي الثانية</span>.',
        ad1: "التوثيق التقني", ad2: "العروض التقديمية", ad3: "حل المشكلات", ad4: "العمل الجماعي",
        addSig: "تقديم الوضوح، الهيكلة، والتأثير في كل مشروع.",

        // CV
        cvTitlePage: "السيرة الذاتية",
        summary: "أصنع تجارب برمجية فعالة وسهلة الاستخدام بدمج علوم الحاسب مع حس التصميم. أختص في <strong>الأتمتة، تنظيم البيانات،</strong> و <strong>تصميم الواجهات</strong>، وأحول الأفكار المعقدة إلى حلول بسيطة وأنيقة.",
        expTitle: "الخبرة العملية",
        jobTitleExp: "مهندس دعم أنظمة (تدريب تعاوني)",
        jobLocation: "عمادة التعلم الإلكتروني والتحول الرقمي، جامعة حفر الباطن",
        jobDesc: "<li>أتمتة إعداد وصيانة أجهزة الكمبيوتر عبر واجهات PowerShell، مما قلل وقت التنفيذ بنسبة 50%.</li><li>تطوير تطبيق مكتبي تفاعلي (PyQt) لإدارة جهات الاتصال وبطاقات العمل.</li><li>إدارة جرد الأجهزة، استبدال القطع، وتنظيم خوادم الشبكة بدقة.</li>",
        eduTitle: "التعليم",
        degreeTitle: "بكالوريوس علوم وهندسة الحاسب الآلي",
        uniName: "جامعة حفر الباطن",
        eduDesc: "<li>مشروع التخرج: تصميم نظام جدولة خالٍ من التعارضات بواجهة محسنة بصرياً لحجوزات قاعات الجامعة.</li>",
        skillsTitleCV: "المهارات", 
        techSkills: "المهارات التقنية", techTags: '<span class="tag">Python</span><span class="tag">PyQt</span><span class="tag">HTML/CSS</span><span class="tag">JavaScript</span><span class="tag">SQL</span><span class="tag">PowerShell</span>',
        aiSkills: "التفاعل مع الذكاء الاصطناعي", aiTags: '<span class="tag">هندسة الأوامر (Prompting)</span><span class="tag">صياغة المهام</span><span class="tag">التواصل الفعال مع الـ AI</span>',
        dataSkills: "البيانات والتحليل", dataTags: '<span class="tag">هيكلة البيانات</span><span class="tag">تحليل البيانات المعقدة</span><span class="tag">إكسل المتقدم</span>',
        designSkills: "التصميم والإبداع", designTags: '<span class="tag">تصميم UI/UX</span><span class="tag">أدوبي فوتوشوب</span><span class="tag">الرسم والفن الرقمي</span>',
        sysSkills: "الأنظمة والأجهزة", sysTags: '<span class="tag">تجميع الحواسيب</span><span class="tag">اكتشاف الأعطال وإصلاحها</span><span class="tag">تحسين الأنظمة</span>',
        addSkills: "مهارات إضافية", addTags: '<span class="tag">التوثيق التقني</span><span class="tag">تصميم العروض التقديمية</span>',
        langSectionTitle: "اللغات",
        arabicTitle: "العربية",
        arabicLevel: "اللغة الأم",
        arabicDesc: "اللغة الأم، طلاقة تامة في القراءة والكتابة والتواصل المهني.",
        englishTitle: "الإنجليزية",
        englishLevel: "متقن",
        englishDesc: "قدرة قوية على القراءة التقنية، كتابة التوثيقات، والتواصل المهني السلس.",
        downloadCvBtn: "تنزيل"
    }
};

// =========================================
// 2. Language Management (Persistent via localStorage)
// =========================================
let currentLang = localStorage.getItem('site_lang') || 'en';

function applyLanguage() {
    const t = translations[currentLang];
    
    // Update HTML dir attribute
    const htmlTag = document.getElementById('html-tag');
    if (htmlTag) htmlTag.setAttribute('dir', t.dir);
    
    // Update Toggle Button text
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.innerText = t.langBtn;
    
    // Update normal text [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // Update HTML text [data-i18n-html]
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });
    
    // Update titles [data-i18n-title]
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) el.title = t[key];
    });

    // Adjust specific element directions (e.g. index cards)
    document.querySelectorAll('.card').forEach(card => {
        card.setAttribute('dir', t.dir);
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('site_lang', currentLang);
    applyLanguage();
}

// =========================================
// 3. UI Interactions & Animations
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // 3.1 Apply persistent language
    applyLanguage();

    // 3.2 Scroll Header Logic (CV & Skills)
    const headerTop = document.getElementById('header-top');
    const cvHeader = document.querySelector('.cv-header');
    
    if (headerTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                headerTop.classList.add('scrolled');
                if(cvHeader) cvHeader.classList.add('scrolled');
            } else {
                headerTop.classList.remove('scrolled');
                if(cvHeader) cvHeader.classList.remove('scrolled');
            }
        });
    }

    // 3.3 Scroll Animations (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        observer.observe(card);
    });

    // 3.4 Carousel Logic (Projects)
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        const carousel = wrapper.querySelector('.carousel');
        const dotsContainer = wrapper.querySelector('.dots');
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = wrapper.querySelector('.carousel-btn.prev');
        const nextBtn = wrapper.querySelector('.carousel-btn.next');
        
        const imageUrls = Array.from(images).map(img => img.src);

        images.forEach((img, index) => {
            img.onclick = () => openLightbox(imageUrls, index);

            let dot = document.createElement('span');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            
            dot.onclick = () => {
                carousel.scrollTo({ left: carousel.clientWidth * index, behavior: 'smooth' });
            };
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');
        
        carousel.addEventListener('scroll', () => {
            let index = Math.round(Math.abs(carousel.scrollLeft) / carousel.clientWidth);
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        });

        if(prevBtn && nextBtn) {
            prevBtn.onclick = () => carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
            nextBtn.onclick = () => carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        }
    });


});


// =========================================
// 4. Video Playback Control
// =========================================
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Array to store YouTube player instances
const ytPlayers = [];

// Initialize players when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('.video-player');
    
    iframes.forEach((iframe) => {
        const player = new YT.Player(iframe.id, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        
        ytPlayers.push({ player: player, element: iframe });
        videoObserver.observe(iframe);
    });
}

// Pause other videos when one starts playing
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        ytPlayers.forEach((p) => {
            if (p.player !== event.target && typeof p.player.pauseVideo === 'function') {
                p.player.pauseVideo();
            }
        });
    }
}

// Pause video if it scrolls out of the viewport
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            const p = ytPlayers.find(p => p.element === entry.target);
            if (p && p.player && typeof p.player.getPlayerState === 'function') {
                if (p.player.getPlayerState() === YT.PlayerState.PLAYING) {
                    p.player.pauseVideo();
                }
            }
        }
    });
}, { threshold: 0.1 });

// =========================================
// 5. Lightbox Global Functions
// =========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentLightboxImages = []; 
let currentLightboxIndex = 0;

// Used in Projects page (Array of images)
function openLightbox(imagesArrayOrSrc, startIndex = 0) {
    if(!lightbox || !lightboxImg) return;
    
    if(Array.isArray(imagesArrayOrSrc)) {
        currentLightboxImages = imagesArrayOrSrc;
        currentLightboxIndex = startIndex;
        lightboxImg.src = currentLightboxImages[currentLightboxIndex];
    } else {
        // Single image fallback (used in CV page)
        currentLightboxImages = [imagesArrayOrSrc];
        currentLightboxIndex = 0;
        lightboxImg.src = imagesArrayOrSrc;
    }
    
    lightbox.classList.add('active');
}

function closeLightbox(event) {
    if(!lightbox) return;
    // Close if clicking outside the image or on the close button
    if (!event || event.target === lightbox || event.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
    }
}

function navigateLightbox(direction) {
    if(currentLightboxImages.length <= 1 || !lightboxImg) return;
    
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxImages.length - 1;
    if (currentLightboxIndex >= currentLightboxImages.length) currentLightboxIndex = 0;
    
    lightboxImg.src = currentLightboxImages[currentLightboxIndex];
}

// Attach lightbox close event generically
if(lightbox) {
    lightbox.addEventListener('click', closeLightbox);
}