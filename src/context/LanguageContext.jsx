import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    // Nav
    getInTouch: "Get in Touch",
    search: "Search Proxynet…",
    home: "Home",
    about: "About",
    solutions: "Solutions",
    casestudies: "Case Studies",
    events: "Events",
    support: "Support",
    community: "Community",
    blog: "Blog",
    connectivity: "Connectivity",
    infrastructure: "Infrastructure",
    managedServices: "Managed Services",
    internetServices: "Internet Services",
    vsatSolutions: "VSAT Solutions",
    dataCentre: "Data Centre",
    cybersecurity: "Cybersecurity",
    itSupport: "IT Support",
    cloudServices: "Cloud Services",
    // Solutions (real)
    solAV: "Professional AV Solutions",
    solCybersecurity: "IT Security & Cybersecurity",
    solNetworking: "Network Infrastructure & Systems Integration",
    solEnterpriseSoftware: "Enterprise Software Solutions",
    solUnifiedComms: "Unified Communications",
    solCloud: "Cloud & Managed Services",
    solCAD: "CAD Services",
    solIoT: "IoT & Smart Infrastructure",
    solProVMS: "Visitor Management — ProVMS",
    solProSkool: "School Management — ProSkool",
    solERP: "ERP Solutions",
    solDistribution: "Distribution & Reseller Services",
    // Software
    softwareSolutions: "Software Solutions",
    customDev: "Custom Software Development",
    webApps: "Web Applications",
    mobileApps: "Mobile Applications",
    erp: "ERP Solutions",
    // Rentals & Billboard
    rentals: "AV Equipment Rentals",
    rentalsDesc: "World-class AV equipment for events and activations.",
    billboardSolutions: "Billboard & Digital Signage",
    billboardDesc:
      "Indoor and outdoor digital signage and LED wall deployments.",
    // EdTech
    edtech: "EdTech & Smart Schools",
    edtechDesc:
      "Smart school solutions, digital literacy programmes, and technology training.",
    // Footer
    footerTagline:
      "Connecting Nigeria's future with world-class technology infrastructure and managed services.",
    company: "Company",
    aboutUs: "About Us",
    ourTeam: "Our Team",
    careers: "Careers",
    newsPress: "News & Press",
    partners: "Partners",
    resources: "Resources",
    whitepapers: "Whitepapers & Solution Briefs",
    datasheets: "Datasheets & Product Sheets",
    onboardingGuides: "Onboarding Guides",
    technicalGuides: "Technical Guides",
    clientForms: "Client Forms & Downloads",
    supportCentre: "Support Centre",
    faqs: "FAQs",
    contact: "Contact",
    stayUpdated: "Stay updated",
    emailPlaceholder: "Your email address",
    thankYou: "Thanks for subscribing!",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    terms: "Terms & Conditions",
    copyright: `© ${new Date().getFullYear()} Proxynet Group Ltd. RC 472270. All rights reserved.`,
    // Home
    heroEyebrow: "Enterprise Technology Solutions",
    heroTitle: "Powering Africa's",
    heroTitleAccent: "Digital Future",
    heroSub:
      "World-class connectivity, infrastructure, and managed services for businesses across Africa — built for reliability, designed for growth.",
    exploreSolutions: "Explore Solutions",
    // Final CTA
    finalCtaHeading: "Ready to Transform Your IT Infrastructure?",
    finalCtaSub:
      "Talk to our team and get a solution tailored to your business needs.",
    // Projects
    projectsEyebrow: "Featured Projects",
    projectsHeading: "Work We're Proud Of",
    // Blog
    latestInsights: "Latest Insights",
    viewAll: "View all posts",
    readMore: "Read more",
    // Support CTA
    supportEyebrow: "Customer Success",
    supportHeading: "We don't just deploy, we support you.",
    supportSub:
      "Our relationship doesn't end at installation. We provide ongoing support, monitoring, and maintenance to ensure your technology keeps working — long after the project is delivered.",
    supportCTALabel: "Visit our Support Centre",
    supportPillar1: "24/7 monitoring and incident response",
    supportPillar2: "Dedicated support engineers on call",
    supportPillar3: "Long-term partnerships, not one-off projects",
    // Industries
    industriesEyebrow: "Industries We Serve",
    industriesHeading: "Built for the Sectors That Drive Africa's Economy",
    industriesSub:
      "We've delivered technology solutions across a wide range of industries — each with its own demands, regulations, and infrastructure challenges.",
    indFinancial: "Financial Services",
    indFinancialDesc:
      "Secure networks and compliance-ready infrastructure for banks and fintechs.",
    indOilGas: "Oil & Gas",
    indOilGasDesc:
      "Rugged connectivity and monitoring systems for upstream and downstream operations.",
    indManufacturing: "Manufacturing",
    indManufacturingDesc:
      "Systems integration and network solutions for factory floors and supply chains.",
    indTelecoms: "Telecoms",
    indTelecomsDesc:
      "Enterprise networking and managed services for telecoms operators.",
    indGovernment: "Government",
    indGovernmentDesc:
      "Secure, scalable IT infrastructure for public sector agencies and ministries.",
    indEducation: "Education",
    indEducationDesc:
      "Campus networks, smart classrooms, and e-learning infrastructure.",
    indHealthcare: "Healthcare",
    indHealthcareDesc:
      "Reliable connectivity and data security for hospitals and clinics.",
    indRetail: "Retail",
    indRetailDesc:
      "Smart signage, POS networks, and digital infrastructure for retail environments.",
    // What We Do
    whatWeDoEyebrow: "What We Do",
    whatWeDoHeading: "We Build & Manage Technology Infrastructure",
    whatWeDoClarity:
      "We design, deploy, and support the technology systems that keep your business running — from networks and security to software and smart displays.",
    justSoYouKnow: "Just so you know",
    whatWeDoExplainer:
      "Proxynet is a technology solutions company — not an events organiser. We help businesses across Africa build reliable IT infrastructure, secure their networks, and develop software. If you've heard otherwise, we're glad you're here to find out what we actually do.",
    lfdSignage: "LFD & Smart Signage",
    lfdSignageDesc:
      "Large format display systems for boardrooms, lobbies, and public spaces.",
    lfdSignageDetail:
      "We design and install large format display (LFD) and smart signage solutions — from single-screen boardroom setups to multi-zone digital signage networks across campuses and retail environments.",
    systemsIntegration: "Systems Integration",
    systemsIntegrationDesc:
      "Connecting your hardware, software, and networks into one seamless system.",
    systemsIntegrationDetail:
      "We integrate disparate technology systems so they communicate and work together — reducing manual processes, eliminating data silos, and giving your team a unified view of operations.",
    enterpriseSoftware: "Enterprise Software Development",
    enterpriseSoftwareDesc:
      "Custom business applications built around your workflows.",
    enterpriseSoftwareDetail:
      "From ERP systems to bespoke internal tools, we develop enterprise software that fits how your organisation actually works — not the other way around.",
    enterpriseNetworking: "Enterprise Networking",
    enterpriseNetworkingDesc:
      "LAN, MAN, and WAN solutions designed for performance and reliability.",
    enterpriseNetworkingDetail:
      "We design and implement scalable network infrastructure — local area networks, wide area networks, and everything in between — built to handle your current load and grow with you.",
    networkSecurity: "Network Security",
    networkSecurityDesc:
      "Protecting your infrastructure from threats, inside and out.",
    networkSecurityDetail:
      "Our security team implements firewalls, intrusion detection systems, anti-virus solutions, and VPNs to protect your organisation from both external attacks and internal vulnerabilities.",
    disasterRecovery: "Disaster Recovery",
    disasterRecoveryDesc:
      "Keeping your data safe and your business running when things go wrong.",
    disasterRecoveryDetail:
      "We plan, implement, and regularly test disaster recovery strategies so that when the unexpected happens — hardware failure, cyberattack, or natural disaster — your business recovers fast.",
    enterpriseNetworkingWan: "Remote Access & VPN",
    enterpriseNetworkingWanDesc:
      "Secure connectivity for teams working from anywhere.",
    enterpriseNetworkingWanDetail:
      "We implement remote access solutions and VPN infrastructure that let your team connect securely to company systems from any location, without compromising security.",
    mobileAppsDesc: "iOS and Android applications built for business.",
    mobileAppsDetail:
      "We build mobile applications that extend your business capabilities to smartphones and tablets — whether customer-facing apps or internal tools for field teams.",
    // Industries CTAs
    findYourSolution: "Find Your Solution",
    contactSales: "Contact Sales",
    // Cookie Banner
    cookieTitle: "We use cookies",
    cookieBody:
      'We use cookies to improve your experience on our website, analyse traffic, and personalise content. By clicking "Accept", you consent to our use of cookies in accordance with our',
    cookieAnd: "and",
    cookieCompliance:
      "This site complies with the Nigeria Data Protection Regulation (NDPR) and GDPR.",
    cookieDecline: "Decline",
    cookieAccept: "Accept All",
    // Testimonials / Partners placeholders
    testimonialsHeading: "Testimonials",
    partnersHeading: "Our Technology Partners",
    partnersEyebrow: "Global Technology Alliances",
    partnersSub: "Backed by the World's Best Technology Brands",

    partnersViewAll: "View All Partners",
    // Partner card types (shared)
    partnerTypeAuthorisedPartner: "Authorised Partner",
    partnerTypeAuthorisedDistributor: "Authorised Distributor",
    partnerTypeAuthorisedB2BPartner: "Authorised B2B Partner",
    partnerTypeAuthorisedDistributorIntegrator: "Authorised Distributor & Integrator",
    // Partner card descriptions
    partnerDescSamsung: "Large format displays, videowalls, smart signage, and commercial AV solutions.",
    partnerDescLogitech: "Video collaboration, peripherals, and enterprise workspace solutions.",
    partnerDescMicrosoft: "Enterprise software, cloud services, and Microsoft 365 licensing.",
    partnerDescCanon: "Printers, scanners, cameras, and document management solutions.",
    partnerDescYealink: "IP phones, video conferencing, and unified communications.",
    partnerDescDahua: "CCTV, IP cameras, NVR systems, and security surveillance.",
    partnerDescVT: "Professional headsets and communication devices across West Africa.",
    partnerDescSennheiser: "Premium audio solutions, professional headsets, and communication devices.",
    partnerDescMaxhub: "Interactive display solutions and collaborative workspace technology.",
    partnerDescMakeblock: "Robotics, IoT platforms, and educational automation solutions.",
    partnerDescBeyondTrust: "Privileged access management and advanced cybersecurity solutions.",
    partnerDescInetco: "Financial IT infrastructure and payment systems expertise.",
    partnerDescKramer: "Professional AV integration, switching, and signal management solutions.",
    partnerDescHuawei: "Telecommunications infrastructure and enterprise networking solutions.",
    partnerDescAcebott: "Industrial automation, robotics, and AI-powered solutions.",
    partnerDescIBM: "Enterprise IT infrastructure, cloud computing, and AI technologies.",
    partnerDescZoom: "Video conferencing, webinars, and unified communication platforms.",
    partnerDescPeerless: "Professional AV mounting systems and installation solutions.",
    partnerDescFireEye: "Advanced cybersecurity, threat detection, and incident response.",
    partnerDescNorden: "IT solutions and managed services for enterprise environments.",
    partnerDescHikvision: "Video surveillance, IP cameras, and advanced security systems.",
    partnerDescBosch: "Building security, communication systems, and integrated solutions.",
    partnerDescPanasonic: "Professional imaging, display solutions, and AV equipment.",
    partnerDescCrestron: "Integrated AV control systems and building automation technology.",
    partnerDescBelkin: "Networking, charging solutions, and IT connectivity products.",
    partnerDescExtron: "Professional AV systems integration and control solutions.",
    partnerDescBiamp: "Professional audio systems, conferencing, and sound reinforcement.",
    partnerDescPolycom: "Video conferencing, voice, and unified communication systems.",
    partnerDescSharp: "Multifunctional imaging, printing, and display solutions.",
    partnerDescAbsen: "LED display systems and visualization technology.",
    partnerDescUnilumin: "LED screens, digital signage, and visualization solutions.",
    partnerDescSonos: "Premium audio systems and smart speaker technology.",
    partnerDescDLink: "Networking infrastructure and IT connectivity solutions.",
    partnerDescHanwha: "Surveillance systems, cameras, and security infrastructure.",
    partnerDescLumens: "Professional projectors, imaging, and display solutions.",
    partnerDescZKTeco: "Access control systems, biometric solutions, and security devices.",
    partnerDescLeyard: "LED video walls, large format displays, and visualisation solutions for demanding vertical markets worldwide.",
    partnerDescCisco: "Enterprise networking, switching, routing, and security infrastructure.",
    partnerDescCleverTouch: "Interactive displays, collaboration software, and smart classroom solutions.",
    partnerDescLG: "Commercial displays, large format screens, and digital signage solutions.",
    partnerDescCyxtera: "Data centre infrastructure, co-location, and secure connectivity services.",
    partnerDescYubico: "Hardware security keys and phishing-resistant multi-factor authentication.",
    partnerDescNetskope: "Cloud security, SASE, and zero trust network access solutions.",
    // Partnerships page
    partnershipsNav: "Partnerships",
    partnershipsPageTitle:
      "Partnerships — Backed by the World's Best Technology Brands",
    partnershipsPageDesc:
      "Proxynet Group is an authorised distributor and partner for Samsung, Logitech, Microsoft, Canon, Yealink, Dahua, and more. Join our reseller programme.",
    partnershipsEyebrow: "Technology Alliances & Reseller Programme",
    partnershipsHeroTitle: "Backed by the World's Best Technology Brands",
    partnershipsHeroSub:
      "We are authorised distributors and certified partners for the world's leading technology brands. Join our reseller network and grow your business with Proxynet.",

    partnershipsCta2: "View Our Partners",
    partnershipsLogosEyebrow: "Our Technology Partners",
    partnershipsLogosHeading: "Global Brands. Local Expertise.",
    partnershipsLogosSub:
      "We hold authorised distributor and partner status with leading global technology brands — giving our clients and resellers access to the best products, backed by Proxynet's 20+ years of local expertise.",
    partnershipsDistributor: "Authorised Distributor",
    partnershipsResellerEyebrow: "Reseller Programme",
    partnershipsResellerHeading: "Grow Your Business With Proxynet",
    partnershipsResellerSub:
      "Our reseller programme gives technology companies, IT consultants, and system integrators access to Proxynet's full product portfolio, training, and support — at competitive margins.",
    partnershipsApplyEyebrow: "Reseller Application",
    partnershipsApplyHeading: "Apply to Become a Reseller",
    partnershipsApplySub:
      "Fill out the form and our Business Development team will be in touch within 2 business days to discuss the right partnership tier for your business.",
    partnershipsApplyBullet1:
      "Access to full Proxynet product catalogue at reseller pricing",
    partnershipsApplyBullet2:
      "Sales training, technical support, and co-marketing resources",
    partnershipsApplyBullet3:
      "Dedicated account manager and quarterly business reviews",
    partnershipsFieldCompany: "Company Name",
    partnershipsFieldContact: "Contact Person",
    partnershipsFieldTerritory: "Territory / Region",
    partnershipsFieldInterest: "Solution Area of Interest",
    partnershipsFieldInterestDefault: "Select a solution area",
    partnershipsFieldMessage: "Tell Us About Your Business",
    partnershipsFieldMessagePlaceholder:
      "Brief description of your company, current clients, and why you want to partner with Proxynet…",
    partnershipsSuccessTitle: "Application Received",
    partnershipsSuccessMsg:
      "Thank you for your interest. Our Business Development team will be in touch within 2 business days.",
    // Featured Projects CTAs
    startAProject: "Start a Project",
    viewCaseStudies: "View Case Studies",
    // About CTA
    readyToWorkWithUs: "Ready to work with us?",
    aboutCtaSub:
      "Talk to our team about your technology needs — we'll build a solution around your business.",
    contactUs: "Contact Us",
    viewOurSolutions: "View Our Solutions",
    // Contact page
    contactNav: "Contact",
    contactPageTitle: "Contact Us — Let's Talk Technology",
    contactPageDesc:
      "Get in touch with Proxynet Group. Reach our sales, support, partnerships, or careers teams. Offices in Lagos, Abuja, Accra, Abidjan, and Dubai.",
    contactHeroTitle: "Let's Talk Technology",
    contactHeroSub:
      "Whether you're ready to start a project, need technical support, or just want to explore what's possible — our team is ready to help.",
    contactCtaPrimary: "Send an Enquiry",
    contactCtaSecondary: "Call Us Now",
    contactResponseTime:
      "We respond to all enquiries within 4 business hours. Critical support issues are handled 24/7.",
    contactFormEyebrow: "Send a Message",
    contactFormHeading: "How Can We Help?",
    contactSuccessTitle: "Enquiry Sent",
    contactSuccessMsg:
      "Thank you for reaching out. Our team will get back to you within 4 business hours.",
    contactFieldName: "Full Name",
    contactFieldCompany: "Company",
    contactFieldEmail: "Email Address",
    contactFieldPhone: "Phone Number",
    contactFieldType: "Enquiry Type",
    contactFieldTypeDefault: "Select enquiry type",
    contactTypeSales: "Sales",
    contactTypeSupport: "Technical Support",
    contactTypePartnership: "Partnerships",
    contactTypeCareers: "Careers",
    contactTypeGeneral: "General",
    contactFieldMessage: "Message",
    contactFieldMessagePlaceholder:
      "Tell us about your project, challenge, or question…",
    contactSubmit: "Send Enquiry",
    contactDirectEyebrow: "Direct Contacts",
    contactDirectHeading: "Reach the Right Team",
    contactPhone: "Main Line",
    contactPhoneAlt: "Alternate Line",
    contactEmail: "Email",
    contactFollowUs: "Follow Us",
    // Locations
    contactThisOffice: "Contact This Office",
    viewOnMap: "View on Map",
    // Not Found
    pageNotFound: "Page Not Found",
    pageNotFoundSub:
      "The page you are looking for does not exist or has been moved. Let us get you back on track.",
    backToHomepage: "Back to Homepage",
    goBack: "Go Back",
    // Careers
    viewOpenRoles: "View Open Roles",
    learnAboutCulture: "Learn About Our Culture",
    applyForGraduate: "Apply for Graduate Programme",
    applyForInternship: "Apply for Internship",
    apply: "Apply",
    submitApplication: "Submit Application",
    // Careers hero
    careersHeroTitle: "Build the Future of Technology in West Africa",
    careersHeroSub: "Join a team of engineers, innovators, and problem-solvers delivering world-class technology infrastructure across Africa.",
    // Life at Proxynet
    lifeEyebrow: "Life at Proxynet",
    lifeHeading: "Why People Love Working Here",
    lifeSub: "We build technology that matters — and we do it with a team that genuinely cares about each other and the work.",
    lifePerk1Title: "Purpose-Driven Work",
    lifePerk1Desc: "Every project you work on directly impacts how businesses across Africa operate and grow.",
    lifePerk2Title: "Fast-Paced Growth",
    lifePerk2Desc: "We move quickly. You will take on real responsibility from day one and grow faster than anywhere else.",
    lifePerk3Title: "Collaborative Culture",
    lifePerk3Desc: "No silos. We work as one team — sharing knowledge, solving problems together, and celebrating wins.",
    lifePerk4Title: "Career Development",
    lifePerk4Desc: "Structured learning paths, certifications, and mentorship to help you reach your full potential.",
    // Graduate Programme
    gradEyebrow: "Graduate Programme",
    gradHeading: "Start Your Career at the Top",
    gradSub: "Our Graduate Programme is designed to fast-track exceptional young talent into technology careers. You will rotate across departments, work on live projects, and be mentored by industry experts.",
    gradEligibilityHeading: "Eligibility",
    gradGainsHeading: "What You Gain",
    gradEligibility1: "Recent graduate (within 2 years) in Computer Science, Engineering, IT, or related field",
    gradEligibility2: "Minimum Second Class Upper (2:1) degree or equivalent",
    gradEligibility3: "Strong analytical and problem-solving skills",
    gradEligibility4: "Passion for technology and eagerness to learn",
    gradGain1: "12-month structured rotation across key departments",
    gradGain2: "Mentorship from senior engineers and managers",
    gradGain3: "Professional certifications sponsored by Proxynet",
    gradGain4: "Competitive graduate salary and benefits",
    gradGain5: "Full-time offer upon successful completion",
    // Internship Programme
    internEyebrow: "Internship Programme",
    internHeading: "Learn by Doing",
    internSub: "Our internship programme gives students and recent graduates hands-on experience working alongside experienced professionals on real client projects.",
    internDeptsHeading: "Available Departments & Duration",
    internDept1Name: "Network Engineering",
    internDept2Name: "Cybersecurity",
    internDept3Name: "Software Development",
    internDept4Name: "AV & Systems Integration",
    internDept5Name: "Sales & Business Development",
    internDept6Name: "IT Support",
    internDuration1: "3–6 months",
    internDuration2: "3–6 months",
    internDuration3: "3–6 months",
    internDuration4: "3–6 months",
    internDuration5: "3 months",
    internDuration6: "3 months",
    // Open Roles
    openRolesEyebrow: "Open Roles",
    openRolesHeading: "Current Opportunities",
    openRolesPostedLabel: "Posted",
    openRolesFullTime: "Full-time",
    openRole1Title: "Network Engineer",
    openRole1Dept: "Engineering",
    openRole2Title: "Cybersecurity Analyst",
    openRole2Dept: "Security",
    openRole3Title: "AV Systems Technician",
    openRole3Dept: "Engineering",
    openRole4Title: "Software Developer",
    openRole4Dept: "Software",
    openRole5Title: "IT Support Specialist",
    openRole5Dept: "Support",
    openRole6Title: "Sales Executive",
    openRole6Dept: "Sales",
    // Application Form
    appFormEyebrow: "Apply Now",
    appFormHeading: "Submit Your Application",
    appFormSub: "Fill out the form below and attach your CV. We will get back to you within 5 business days.",
    appFormName: "Full Name",
    appFormEmail: "Email Address",
    appFormPhone: "Phone Number",
    appFormRole: "Role Applying For",
    appFormCV: "Upload CV (PDF, DOC, DOCX)",
    appFormCVChoose: "Choose file",
    appFormNote: "Cover Note (Optional)",
    appFormNotePlaceholder: "Tell us why you want to join Proxynet...",
    appFormSuccessTitle: "Application Submitted!",
    appFormSuccessMsg: "Thank you for applying. Our HR team will review your application and get back to you within 5 business days.",
    // Support
    raiseATicket: "Raise a Ticket",
    callSupportNow: "Call Support Now",
    requestAccess: "Request Access",
    submitRequest: "Submit Request",
    // Blog
    readLatestPosts: "Read Latest Posts",
    subscribeForUpdates: "Subscribe for Updates",
    subscribe: "Subscribe",
    // EdTech
    partnerWithUs: "Partner With Us",
    viewProgrammes: "View Programmes",
    visitEdTechWebsite: "Visit the EdTech Website",
    submitEnquiry: "Submit Enquiry",
    // EdTech page content
    edtechDivision: "Proxynet EdTech Division",
    edtechHeroTitle: "Empowering the Next Generation of Technology Talent",
    edtechHeroSub: "We partner with schools, universities, and institutions across West Africa to deliver smart classroom solutions, digital literacy programmes, and ICT infrastructure.",
    edtechOverviewEyebrow: "What We Do",
    edtechOverviewHeading: "Smart School Solutions for Modern Education",
    edtechOverviewBody1: "Proxynet EdTech is the education technology division of Proxynet Group. We work with primary schools, secondary schools, universities, and government education agencies to transform learning environments through technology.",
    edtechOverviewBody2: "From installing interactive displays in classrooms to building campus-wide Wi-Fi networks and running digital literacy workshops — we provide end-to-end technology solutions designed specifically for education.",
    edtechProgrammesEyebrow: "Training Programmes",
    edtechProgrammesHeading: "What We Offer",
    edtechInstitutionsEyebrow: "Partner Institutions",
    edtechInstitutionsHeading: "Schools & Institutions We Have Worked With",
    edtechGalleryEyebrow: "Events Gallery",
    edtechGalleryHeading: "EdTech in Action",
    edtechPartnerEyebrow: "Partner With Us",
    edtechPartnerHeading: "Bring EdTech to Your Institution",
    edtechPartnerSub: "Fill out the form and our EdTech team will get in touch within 2 business days.",
    edtechSuccessTitle: "Enquiry Submitted",
    edtechSuccessMsg: "Our EdTech team will be in touch within 2 business days.",
    edtechFieldName: "Full Name",
    edtechFieldInstitution: "Institution Name",
    edtechFieldRole: "Your Role",
    edtechFieldEmail: "Email",
    edtechFieldPhone: "Phone",
    edtechFieldInterest: "Area of Interest",
    edtechFieldInterestDefault: "Select an area",
    edtechFieldNotes: "Additional Notes",
    edtechInterest1: "Smart Classroom Setup",
    edtechInterest2: "School Network Infrastructure",
    edtechInterest3: "Computer Lab Setup",
    edtechInterest4: "Digital Literacy Training",
    edtechInterest5: "Teacher Technology Training",
    edtechInterest6: "ICT Certification Programmes",
    edtechInterest7: "Other",
    // Programme names & descriptions
    progWebDevName: "Web Development",
    progWebDevDuration: "4-12 weeks",
    progWebDevAudience: "Students & Young Professionals",
    progWebDevFormat: "Classroom + hands-on",
    progWebDevDesc: "Full-stack web development covering HTML, CSS, JavaScript, and modern frameworks. Students build real projects from day one.",
    progWebDesignName: "Web Design",
    progWebDesignDuration: "2-6 weeks",
    progWebDesignAudience: "Students & Creatives",
    progWebDesignFormat: "Classroom + hands-on",
    progWebDesignDesc: "UI/UX principles, wireframing, prototyping, and visual design for the web using industry-standard tools.",
    progDigLitName: "Digital Literacy",
    progDigLitDuration: "1-5 days",
    progDigLitAudience: "Students & Teachers",
    progDigLitFormat: "Classroom + hands-on",
    progDigLitDesc: "Practical digital skills covering computer basics, internet safety, productivity tools, and navigating the digital world confidently.",
    progGraphicsName: "Graphics Design",
    progGraphicsDuration: "2-8 weeks",
    progGraphicsAudience: "Students & Creatives",
    progGraphicsFormat: "Classroom + hands-on",
    progGraphicsDesc: "Visual communication, branding, typography, and design using professional tools. From logos to marketing materials.",
    progRoboticsName: "Robotics",
    progRoboticsDuration: "4-8 weeks",
    progRoboticsAudience: "Primary, Secondary & Tertiary",
    progRoboticsFormat: "Hands-on workshop",
    progRoboticsDesc: "Introduction to robotics, electronics, and programming through building and programming real robots. STEM-focused and project-based.",
    progAIName: "Artificial Intelligence",
    progAIDuration: "4-12 weeks",
    progAIAudience: "Secondary & Tertiary",
    progAIFormat: "Classroom + practical",
    progAIDesc: "Foundations of AI, machine learning concepts, and practical applications. Students explore how AI is transforming industries.",
    progIoTName: "Internet of Things (IoT)",
    progIoTDuration: "4-8 weeks",
    progIoTAudience: "Secondary & Tertiary",
    progIoTFormat: "Hands-on workshop",
    progIoTDesc: "Connecting devices, sensors, and systems. Students build IoT projects that solve real-world problems using hardware and code.",
    progDataSciName: "Data Science",
    progDataSciDuration: "6-12 weeks",
    progDataSciAudience: "Tertiary & Professionals",
    progDataSciFormat: "Classroom + practical",
    progDataSciDesc: "Data collection, cleaning, analysis, and visualisation. Covers Python, statistics, and real-world datasets from African markets.",
    progDataAnalyticsName: "Data Analytics",
    progDataAnalyticsDuration: "4-8 weeks",
    progDataAnalyticsAudience: "Students & Professionals",
    progDataAnalyticsFormat: "Classroom + practical",
    progDataAnalyticsDesc: "Turning raw data into actionable insights using tools like Excel, Power BI, and SQL. Practical, business-focused curriculum.",
    // Events page content
    eventsNav: "Events",
    eventsEyebrow: "Industry Presence & Community Engagement",
    eventsHeroTitle: "Where Technology Meets Community",
    eventsHeroSub: "From product launches to partner summits — Proxynet is at the centre of West Africa's technology conversation.",
    eventsRegisterNext: "Register for Next Event",
    eventsViewGallery: "View Gallery",
    eventsFeaturedEyebrow: "Featured Events",
    eventsFeaturedHeading: "Recent Highlights",
    eventsGalleryEyebrow: "Photo Gallery",
    eventsGalleryHeading: "All Events",
    eventsFilterCategory: "Category",
    eventsFilterYear: "Year",
    eventsClear: "Clear",
    eventsUpcomingEyebrow: "What's Next",
    eventsUpcomingHeading: "Upcoming Events",
    eventsRegisterInterest: "Register Interest",
    eventsCtaEyebrow: "Stay in the Loop",
    eventsCtaHeading: "Never Miss a Proxynet Event",
    eventsCtaSub: "Subscribe to our newsletter or follow us on social media to be the first to know about upcoming events, product launches, and partner summits.",
    eventsCtaPrimary: "Register for Next Event",
    eventsCtaSecondary: "Follow on LinkedIn",
    eventsViewGallery: "View Gallery",
    eventsPhotos: "photos",
    eventsComingSoon: "Coming Soon",
    // Success Stories
    edtechStoriesEyebrow: "Success Stories",
    edtechStoriesHeading: "Hear It From Students & Institutions",
    edtechStoriesSub: "Video testimonials from students and institutions — specifically requested in our staff survey.",
    edtechStoriesComingSoon: "Video testimonials coming soon",
    edtechStoriesComingSoonBody: "We're collecting video testimonials from students and partner institutions. Check back soon.",
    // Billboard Solutions page
    bbHeroSub:
      "Indoor and outdoor digital signage, LED walls, and billboard deployments that command attention and deliver results.",
    bbUseCasesEyebrow: "Use Cases",
    bbUseCasesHeading: "Where We Deploy",
    bbRetailName: "Retail",
    bbRetailDesc:
      "In-store digital signage, window displays, and promotional screens that drive sales.",
    bbCorporateName: "Corporate Lobbies",
    bbCorporateDesc:
      "Impressive LED walls and display systems for reception areas and boardrooms.",
    bbEventsName: "Events & Activations",
    bbEventsDesc:
      "High-impact LED walls and outdoor screens for events, concerts, and brand activations.",
    bbOutdoorAdName: "Outdoor Advertising",
    bbOutdoorAdDesc:
      "Weatherproof outdoor LED billboards for roadside and high-traffic advertising.",
    bbSpecsEyebrow: "Technical Specifications",
    bbSpecsHeading: "Built to Perform",
    bbOutdoorEyebrow: "Outdoor Advertising Network",
    bbOutdoorHeading: "Proxynet Billboard Locations",
    bbOutdoorSub:
      "Proxynet Communications provides outdoor advertising solutions through a network of digital and static billboards strategically located in high-traffic, high-visibility areas across Nigeria.",
    bbLagosDesc:
      "Reaching professionals, commuters, and corporate decision-makers & business owners in one of Nigeria's busiest commercial corridors.",
    bbEnuguDesc:
      "Connecting brands with a growing regional audience in the South-East.",
    bbPHDesc:
      "Capturing the attention of business executives and residents in the vibrant South-South hub.",
    bbOutdoorCta: "Advertise on Our Billboards",
    bbFormEyebrow: "Get a Quote",
    bbFormHeading: "Request a Quote",
    bbFormSub:
      "Tell us about your project and we will send you a detailed proposal within 24 hours.",
    bbFieldLocation: "Location",
    bbFieldUseCase: "Use Case",
    bbFieldUseCaseDefault: "Select a use case",
    bbFieldDetails: "Project Details",
    bbFieldDetailsPlaceholder:
      "Screen size, quantity, indoor/outdoor, timeline...",
    bbSuccessTitle: "Quote Request Submitted",
    bbSuccessMsg:
      "Our sales team will send you a detailed proposal within 24 hours.",
    requestAQuote: "Request a Quote",
    requestARental: "Request a Rental",
    viewEquipment: "View Equipment",
    // Rentals page
    rentalsHeroTitle: "World-Class AV Equipment for Your Events",
    rentalsHeroSub: "From intimate boardroom setups to large-scale outdoor events, we supply, install, and operate professional AV equipment across Nigeria and West Africa.",
    rentalsEquipEyebrow: "Equipment Catalogue",
    rentalsEquipHeading: "What We Offer",
    rentalsEquip1Name: "Videowalls",
    rentalsEquip1Specs: "Modular LED panels, 2x2 to 6x4 configurations, indoor/outdoor",
    rentalsEquip1Uses: "Conferences, product launches, exhibitions, concerts",
    rentalsEquip2Name: "Single Displays",
    rentalsEquip2Specs: "43 to 98 inch commercial displays, 4K resolution, portrait/landscape",
    rentalsEquip2Uses: "Presentations, wayfinding, brand activations, retail",
    rentalsEquip3Name: "Touch Screens",
    rentalsEquip3Specs: "55 to 86 inch interactive touch displays, multi-touch, Windows/Android",
    rentalsEquip3Uses: "Interactive kiosks, product demos, training sessions",
    rentalsEquip4Name: "Audio Systems",
    rentalsEquip4Specs: "Line arrays, PA systems, wireless microphones, mixers",
    rentalsEquip4Uses: "Corporate events, outdoor activations, conferences",
    rentalsSpecsLabel: "Specs:",
    rentalsUseCasesLabel: "Use Cases:",
    rentalsGalleryEyebrow: "Event Gallery",
    rentalsGalleryHeading: "Past Deployments",
    rentalsGalleryNote: "Photos coming soon, check back after our next event.",
    rentalsHowEyebrow: "How It Works",
    rentalsHowHeading: "Simple. Fast. Professional.",
    rentalsStep1Title: "Enquire",
    rentalsStep1Desc: "Tell us about your event, date, location, audience size, and equipment needed.",
    rentalsStep2Title: "We Configure",
    rentalsStep2Desc: "Our team designs the optimal AV setup for your event and sends you a detailed proposal.",
    rentalsStep3Title: "We Deploy & Support",
    rentalsStep3Desc: "We deliver, install, and operate the equipment on-site. We stay until the event ends.",
    rentalsFormEyebrow: "Rental Enquiry",
    rentalsFormHeading: "Request a Rental",
    rentalsFormSub: "Fill out the form and our operations team will get back to you within 4 hours.",
    rentalsFieldName: "Full Name",
    rentalsFieldCompany: "Company",
    rentalsFieldDate: "Event Date",
    rentalsFieldLocation: "Event Location",
    rentalsFieldEquipment: "Equipment Needed",
    rentalsFieldEquipmentPlaceholder: "e.g. 2x2 videowall, PA system, 2x touch screens",
    rentalsFieldNotes: "Additional Notes",
    rentalsSuccessTitle: "Enquiry Submitted",
    rentalsSuccessMsg: "We will be in touch within 4 hours to discuss your requirements.",
    // Navbar solutions mega menu categories
    catAVInfra: "AV & Infrastructure",
    catSoftwareApps: "Software & Apps",
    catManagedCloud: "Managed & Cloud",
    catSpecialist: "Specialist",
    // Featured Projects content
    proj1Solution: "15-Display NOC Solution",
    proj1Category: "NOC & Command Centre",
    proj1Outcome:
      "Deployed a 15-screen network operations centre enabling real-time monitoring across UBA infrastructure.",
    proj2Solution: "4x2 46-Inch Videowall with NOC Monitoring Solution",
    proj2Category: "Videowall & NOC",
    proj2Outcome:
      "Installed a high-resolution 8-panel videowall for centralised network and security monitoring.",
    proj3Solution:
      "Command Center Solution for Link Health and Infrastructure Monitoring",
    proj3Category: "Design, Deployment & Support",
    proj3Outcome:
      "End-to-end command center solution for monitoring link health and infrastructure across the university campus.",
    proj4Solution: "32-Display NOC Solution",
    proj4Category: "NOC & Command Centre",
    proj4Outcome:
      "Deployed a 32-screen network operations centre for Access Bank DIG, enabling comprehensive infrastructure monitoring.",
    proj5Solution: "NOC VideoWall with Peerless VideoWall Floor Stand",
    proj5Category: "Videowall & NOC",
    proj5Outcome:
      "Installed a high-resolution NOC videowall with Peerless floor stand at FCMB Lagos headquarters.",
    proj6Solution: "Command Center Solution for Infrastructure Monitoring",
    proj6Category: "Design, Deployment & Support",
    proj6Outcome:
      "Deployed a command center solution for infrastructure monitoring at ePROCESS offices in Accra, Ghana.",
    proj7Solution: "Multi-Site Logitech VC Solution",
    proj7Category: "AV & Collaboration",
    proj7Outcome:
      "Implemented a multi-site Logitech video conferencing solution across Lagos, Bonny, Port Harcourt, and Abuja.",
    proj8Solution: "Studio Videowall & 4K Camera Installation",
    proj8Category: "Broadcast & AV",
    proj8Outcome:
      "Re-installation of videowall displays and installation of 4K Canon cameras for the Ghana Broadcasting Corporation studio.",
    proj9Solution: "2 Units of 3x2 Videowall + Audio & Security Solution",
    proj9Category: "Videowall, Audio & CCTV",
    proj9Outcome:
      "Deployed 2 units of 3x2 videowall with full audio solution, Bosch discussion system, and CCTV for the Lagos State House of Assembly.",
    proj10Solution: "Digital Content Management & Signage Deployment",
    proj10Category: "Digital Content Management & Signage",
    proj10Outcome:
      "Replaced 8 malfunctioning Android boxes with new H96 units and reloaded the Reels CMS across all screens at Sundry Foods GRA Junction, Port Harcourt — restoring seamless branded content display across every screen.",
    proj11Solution: "10 × 86\" Huawei IdeaHub Deployment",
    proj11Category: "Video Conferencing & Collaboration",
    proj11Outcome:
      "10 × Huawei IdeaHub 86\" units installed and commissioned across PwC Nigeria offices. Rooms covered: 6th floor (8-person) and 8th floor rooms (12-person × 2, 8-person × 1).",
    proj12Solution: "Videowall Deployment & Osbase Licence Activation",
    proj12Category: "Videowall & Digital Signage",
    proj12Outcome:
      "Videowall deployed and Osbase licence successfully activated at Arik Air, with content running live across all screens.",
    projWHOSolution: "Colleges of Nursing Network Project",
    projWHOCategory: "Network Infrastructure · Healthcare",
    projWHOOutcome:
      "Wireless network deployment across nursing colleges in six Nigerian states — Ubiquiti access points, networking, cabling, activation, and remediation across approximately 13 schools. Delivered 2026 for WHO Nigeria.",
    // About page
    aboutUs: "About Us",
    aboutHeroTitle: "Who We Are",
    aboutHeroSub:
      "Two decades of building the technology infrastructure that powers Africa's most ambitious organisations.",
    // SubNav
    subNavWhoWeAre: "Who We Are",
    subNavHistory: "History",
    subNavLeadership: "Leadership",
    subNavAwards: "Awards",
    subNavLocations: "Locations",
    // Company Overview
    overviewEyebrow: "Who We Are",
    overviewHeading: "We're not a vendor. We're your technology partner.",
    overviewBody1:
      "Proxynet Group is a Nigerian-founded technology solutions company established in 2004. We design, deploy, and support the IT infrastructure that keeps businesses running — from enterprise networks and cybersecurity to smart display systems and custom software.",
    overviewBody2:
      "We work with banks, refineries, government agencies, telecoms operators, and multinationals across Nigeria, Ghana, Côte d'Ivoire, and beyond. Our job is to make complex technology simple, reliable, and built to last.",
    overviewBody3:
      "We exist because African businesses deserve world-class technology infrastructure — delivered by people who understand the local context, the infrastructure challenges, and what it takes to keep systems running in this environment.",
    // Mission & Vision
    ourMission: "Our Mission",
    missionStatement:
      "To attain and maintain leadership in the ICT Industry through the provision of the highest quality of service that will give our customers unsurpassed value in a cost effective and responsible manner — bringing value creation to the community as a whole.",
    ourVision: "Our Vision",
    visionStatement:
      "To be a definition of true success in the delivery and support of ICT Solutions globally — through the achievement of superior technology to our customer base by consistently aligning with the dynamics of the information age while setting and maintaining standards.",
    // Core Values
    coreValuesEyebrow: "Our Values",
    coreValuesSub:
      "Seven principles that guide every decision, every project, and every relationship at Proxynet.",
    cvPurposeTitle: "Purpose Driven",
    cvPurposeDesc:
      "Everything we do is anchored to a clear purpose — delivering technology that creates real, lasting value for our clients and communities.",
    cvAccountabilityTitle: "Accountability",
    cvAccountabilityDesc:
      "We own our commitments. When we say we will deliver, we deliver — and when things go wrong, we fix them without excuses.",
    cvIntegrityTitle: "Integrity",
    cvIntegrityDesc:
      "We do the right thing even when no one is watching. Our clients trust us with their critical infrastructure — we take that seriously.",
    cvDisciplineTitle: "Discipline",
    cvDisciplineDesc:
      "Excellence is not an accident. We follow proven processes, maintain high standards, and hold ourselves to consistent performance.",
    cvStewardshipTitle: "Stewardship",
    cvStewardshipDesc:
      "We treat our clients' resources as our own — making decisions that protect their investments and build long-term value.",
    cvOnenessTitle: "Oneness",
    cvOnenessDesc:
      "We work as one team — internally and with our clients. Collaboration, not silos, is how we solve complex problems.",
    cvExemplaryTitle: "Exemplary",
    cvExemplaryDesc:
      "We set the standard. In our industry, our communities, and our conduct — we aim to be the example others follow.",
    // Timeline
    timelineEyebrow: "Our History",
    timelineHeading: "Two Decades of Progress",
    tm2004Title: "Founded",
    tm2004Desc:
      "Proxynet Communications established in Lagos, Nigeria with a mission to deliver world-class IT solutions.",
    tm2008Title: "First Major Enterprise Contract",
    tm2008Desc:
      "Secured first large-scale enterprise networking project with a tier-1 Nigerian bank.",
    tm2010Title: "Regional Expansion",
    tm2010Desc:
      "Opened operations in Abuja to serve federal government and public sector clients.",
    tm2012Title: "Samsung Partnership",
    tm2012Desc:
      "Became an authorised Samsung B2B partner, expanding into large format display and smart signage solutions.",
    tm2014Title: "Samsung B2B Award",
    tm2014Desc:
      "Recognised with the Samsung B2B Award for outstanding performance and client delivery.",
    tm2016Title: "West Africa Expansion",
    tm2016Desc:
      "Established presence in Ghana and Côte d'Ivoire, serving clients across West Africa.",
    tm2019Title: "Dubai Office",
    tm2019Desc:
      "Opened Middle East office in Dubai Silicon Oasis to serve international clients and technology partners.",
    tm2024Title: "20 Years Strong",
    tm2024Desc:
      "Celebrating two decades of technology excellence — 500+ projects, 6 countries, 50+ global partners.",
    // Leadership team
    leaderCEOTitle: "Chief Executive Officer",
    leaderCEOBio:
      "Visionary leader with 20+ years driving technology transformation across Africa. Founded Proxynet in 2004 with a mission to bridge the infrastructure gap.",
    leaderHRTitle: "Human Resources Manager",
    leaderHRBio:
      "People-first leader who builds and nurtures the talent that powers Proxynet's delivery excellence across West Africa.",
    leaderCOOTitle: "Chief Operating Officer",
    leaderCOOBio:
      "Operations specialist with deep expertise in project management and service delivery. Ensures every client engagement meets Proxynet's quality standards.",
    leaderCFOTitle: "Head of Finance",
    leaderCFOBio:
      "Stewards Proxynet's financial health and builds the commercial frameworks that support sustainable growth across all markets.",
    leaderSalesTitle: "Head of Sales",
    leaderSalesBio:
      "Drives Proxynet's commercial growth across West Africa, building enterprise relationships and leading the sales team to deliver consistent revenue performance.",
    leadershipHeading: "The Team Behind Proxynet",
    // Awards
    awardsEyebrow: "Recognition",
    awardsHeading: "Awards & Certifications",
    awardsSub:
      "Our partnerships and accreditations reflect the trust global technology leaders place in Proxynet.",
    // Locations
    locationsEyebrow: "Where We Are",
    locationsHeading: "Our Offices",
    locationsSub:
      "From our Lagos headquarters to offices across West Africa and the Middle East — we're close to the clients we serve.",
    // Tax Compliance
    taxTitle: "Registered & Tax-Compliant",
    taxBody:
      "Proxynet Group Ltd is a duly registered Nigerian company (RC 472270) incorporated under the Companies and Allied Matters Act (CAMA). We are fully tax-compliant, hold a valid Tax Identification Number (TIN: 00775065-0001), and file all statutory returns with the Federal Inland Revenue Service (FIRS). All invoices issued by Proxynet are legally valid for procurement and audit purposes.",
    // Awards body text
    award1Body:
      "Recognised by Samsung for outstanding B2B sales performance and client delivery excellence in Nigeria.",
    award2Body:
      "Certified Samsung B2B partner for large format displays, smart signage, and enterprise AV solutions.",
    award3Body:
      "Authorised Microsoft partner for enterprise software, cloud services, and licensing solutions.",
    award4Body:
      "Authorised Canon distributor for printers, scanners, cameras, and document management solutions.",
    award5Body:
      "Authorised Yealink distributor for IP phones, video conferencing, and unified communications.",
    award6Body:
      "Certified Yealink system integrator for enterprise-wide UC deployments and managed services.",
    award7Body:
      "Authorised Logitech partner for video collaboration, peripherals, and enterprise workspace solutions.",
    award8Body:
      "Official distributor of VT professional headsets and communication devices across West Africa.",
    award9Body:
      "Authorised Dahua distributor for CCTV, IP cameras, NVR systems, and security surveillance solutions.",
    award10Body:
      "Quality Management System certified by TNV (Cert No. SBSCKTSI20251120NGAQM10U). Valid through 19/11/2028.",
    // Team certifications
    teamCertsTitle: "Team Technical Certifications",
    teamCertsSub:
      "Our engineers and technical staff hold industry-recognised certifications across networking, cybersecurity, structured cabling, and design.",
    // Support page
    supportHeroTitle: "24/7 Support, Because Your Business Never Stops",
    supportHeroSub:
      "Our support team is available around the clock to keep your technology running. Raise a ticket, call us, or reach us on WhatsApp — we respond fast.",
    supportOptRaiseTicket: "Raise a Ticket",
    supportOptRaiseDesc:
      "Submit a support request and track it through to resolution.",
    supportOptCall: "Call Support",
    supportOptCallDesc:
      "Speak directly with a support engineer. Available 24/7.",
    supportOptWhatsApp: "WhatsApp Support",
    supportOptWhatsAppDesc:
      "Message our support team on WhatsApp for fast responses.",
    supportOptChatAction: "Chat on WhatsApp",
    supportOptEmail: "Email Support",
    supportOptEmailDesc:
      "Send us an email and we will respond within 4 business hours.",
    slaEyebrow: "Service Standards",
    slaHeading: "Our SLA Commitments",
    slaSub:
      "We publish our response and resolution times openly. You always know what to expect when you raise a support request.",
    slaPriority: "Priority",
    slaDescription: "Description",
    slaResponse: "Response Time",
    slaResolution: "Resolution Target",
    slaCritical: "Critical",
    slaCriticalDesc:
      "Complete system outage or security breach affecting business operations.",
    slaHigh: "High",
    slaHighDesc:
      "Major functionality impaired. Significant impact on business operations.",
    slaMedium: "Medium",
    slaMediumDesc: "Partial functionality impaired. Workaround available.",
    slaLow: "Low",
    slaLowDesc:
      "Minor issue or general enquiry. No significant business impact.",
    slaServiceWindow: "Service Window",
    slaServiceWindowVal: "24 hours / 7 days a week / 365 days a year",
    slaEscalation: "Escalation Path",
    slaEscalationVal:
      "Support Engineer → Senior Engineer → Support Manager → CTO",
    csEyebrow: "Customer Success",
    csHeading: "We Stay With You After Go-Live",
    csBody1:
      "Our Customer Success programme is an ongoing engagement — not a one-off project. From the moment your solution goes live, our team is actively working to ensure it keeps delivering value.",
    csBody2:
      "This is not just reactive support. It is a proactive, structured relationship designed to protect your investment and help your technology grow with your business.",
    csProactiveTitle: "Proactive Monitoring",
    csProactiveDesc:
      "We monitor your systems continuously — identifying and resolving issues before they impact your business.",
    csDedicatedTitle: "Dedicated Account Manager",
    csDedicatedDesc:
      "Every client has a named account manager who knows your infrastructure and is your first point of contact.",
    csReviewsTitle: "Quarterly Reviews",
    csReviewsDesc:
      "We conduct regular service reviews to assess performance, plan upgrades, and align with your business goals.",
    csPartnershipTitle: "Long-Term Partnership",
    csPartnershipDesc:
      "We do not disappear after deployment. Our relationship grows with your business — for years, not months.",
    onboardEyebrow: "Resource Hub",
    onboardHeading: "Resources & Downloads",
    onboardSub:
      "Datasheets, whitepapers, technical guides, onboarding materials, and client forms — all in one place.",
    onboard1Title: "Getting Started Guide",
    onboard1Desc:
      "Step-by-step guide for new clients — from first contact to go-live.",
    onboard1Type: "PDF Guide",
    onboard2Title: "System Walkthrough Videos",
    onboard2Desc:
      "Video tutorials covering your installed systems and how to use them.",
    onboard2Type: "Video Series",
    onboard3Title: "User Manuals",
    onboard3Desc:
      "Detailed manuals for all hardware and software solutions deployed.",
    onboard3Type: "Documentation",
    onboard4Title: "Configuration Templates",
    onboard4Desc:
      "Pre-built configuration templates to speed up setup and standardise deployments.",
    onboard4Type: "Templates",
    ticketEyebrow: "Maintenance & Support",
    ticketHeading: "Raise a Ticket",
    ticketSub:
      "Submit a support request or schedule a maintenance visit. Our team will confirm within your SLA window.",
    ticketSuccess: "Ticket Submitted",
    ticketSuccessMsg:
      "Your request has been logged. We will respond within your SLA window. Reference your email for updates.",
    faqEyebrow: "FAQs",
    faqHeading: "Frequently Asked Questions",
    faqOnboarding: "Onboarding",
    faqTechnical: "Technical",
    faqBilling: "Billing",
    faqAccount: "Account",
    // CSR page
    csrHeroTitle: "Technology That Gives Back",
    csr: "CSR & Community",
    csrReadImpact: "Read Our Impact Stories",
    csrHeroSub:
      "At Proxynet, we believe technology should benefit everyone — not just those who can afford it. Our CSR programme puts that belief into action.",
    csrFocusEyebrow: "Our Focus Areas",
    csrFocusHeading: "Where We Make an Impact",
    csrImpactEyebrow: "Impact Stories",
    csrImpactHeading: "What We Have Done",
    csrPartnersEyebrow: "Partner Organisations",
    csrPartnersHeading: "Who We Work With",
    csrReportEyebrow: "CSR Report",
    csrReportHeading: "Download Our CSR Report",
    csrReportSub:
      "Our annual CSR report details our initiatives, impact metrics, and commitments for the year ahead.",
    csrRequestReport: "Request Report",
    csrGetInvolved: "Get Involved",
    csrOutcomeLabel: "Outcome",
    // Blog page
    blogHeroTitle: "Technology Insights from West Africa's Leading ICT Company",
    blogHeroSub:
      "Thought leadership, industry analysis, company news, and partner updates from the Proxynet team.",
    blogNewsletterEyebrow: "Stay Informed",
    blogNewsletterHeading: "Subscribe for Weekly Insights",
    blogNewsletterSub:
      "Get the latest technology insights, company news, and industry analysis delivered to your inbox every week.",
    blogSubscribeSuccess:
      "Thanks for subscribing! Check your inbox for a confirmation.",
    blogBackToBlog: "Back to Blog",
    blogShareArticle: "Share this article",
    blogAuthorBio:
      "The Proxynet team shares insights from over 20 years of delivering technology solutions across West Africa.",
    blogRelatedArticles: "Related Articles",
    articleComingSoon: "Full Article Coming Soon",
    articleComingSoonSub:
      "We are working on the full version of this article. Check back soon or subscribe to our newsletter to be notified when it goes live.",
    // Blog categories
    blogCatAll: "All",
    blogCatTechInsights: "Technology Insights",
    blogCatCompanyNews: "Company News",
    blogCatPartnerUpdates: "Partner Updates",
    blogCatIndustryFocus: "Industry Focus",
    blogCatEdTech: "EdTech",
    // Blog post metadata
    post1Title:
      "Why Cybersecurity Is No Longer Optional for African Businesses",
    post1Excerpt:
      "As digital adoption accelerates across the continent, the threat landscape is evolving fast. Here is what every business needs to know about protecting their infrastructure.",
    post2Title: "The State of Enterprise Networking in West Africa in 2026",
    post2Excerpt:
      "From SD-WAN to fibre rollouts, we break down the infrastructure trends shaping connectivity for large organisations across the region.",
    post3Title: "Building a Disaster Recovery Plan That Actually Works",
    post3Excerpt:
      "Most DR plans fail not because of bad technology, but poor planning. Our team shares the framework we use with clients across West Africa.",
    post4Title: "Proxynet Hosts Huawei IdeaHub S3 Launch in Lagos",
    post4Excerpt:
      "Proxynet Communications hosted the official Huawei IdeaHub S3 launch event at Four Points by Sheraton, Victoria Island, Lagos.",
    post5Title: "How Smart Classrooms Are Transforming Education in Nigeria",
    post5Excerpt:
      "Proxynet EdTech has deployed smart classroom solutions in schools across Lagos State. Here is what we have learned about what works.",
    post6Title: "Proxynet Renews Samsung B2B Partnership for 2026",
    post6Excerpt:
      "Proxynet Communications has renewed its Samsung B2B partnership, continuing a relationship that began over a decade ago.",
    // Hero slides
    slide0Eyebrow: "Enterprise Technology Solutions",
    slide0Title: "Powering Africa's",
    slide0Accent: "Digital Future",
    slide0Sub:
      "World-class connectivity, infrastructure, and managed services for businesses across Africa — built for reliability, designed for growth.",

    slide1Eyebrow: "Upcoming Event — May 6, 2026",
    slide1Title: "Huawei IdeaHub S3",
    slide1Accent: "Launch",
    slide1Sub:
      "Experience the Future of Smart Collaboration. Join us at Four Points by Sheraton, VI, Lagos. 10:00AM WAT.",
    slide1EventDate: "May 6, 2026",
    slide1EventTime: "10:00AM WAT",
    slide1EventVenue: "Four Points by Sheraton, VI, Lagos",
    slide1EventCta: "Register Now",

    slide2Eyebrow: "Smart School Solutions",
    slide2Title: "Empowering the Next",
    slide2Accent: "Generation of Talent",
    slide2Sub:
      "Proxynet EdTech delivers smart classrooms, digital literacy programmes, and ICT infrastructure to schools across West Africa.",

    slide3Eyebrow: "NOC & Command Centres",
    slide3Title: "Real-Time Monitoring",
    slide3Accent: "at Scale",
    slide3Sub:
      "From 15-display NOC solutions to full command centres — we design and deploy infrastructure that keeps your operations visible.",

    slide4Eyebrow: "Systems Integration",
    slide4Title: "Technology That",
    slide4Accent: "Works Together",
    slide4Sub:
      "We connect your hardware, software, and networks into one seamless system — eliminating silos and driving operational efficiency.",

    slide5Eyebrow: "AV & Videowall Solutions",
    slide5Title: "Displays That",
    slide5Accent: "Command Attention",
    slide5Sub:
      "From boardroom videowalls to large-scale event AV — we design, deploy, and support world-class display solutions.",

    slide6Eyebrow: "Cybersecurity",
    slide6Title: "Protecting Your",
    slide6Accent: "Infrastructure",
    slide6Sub:
      "Firewalls, intrusion detection, VPNs, and disaster recovery — we secure your business from threats inside and out.",
    projectsDelivered: "Projects Delivered",
    countriesServed: "Countries Served",
    globalPartners: "Global Technology Partners",
    yearsInOperation: "Years in Operation",
    // Case Studies page
    caseStudiesPageTitle: "Case Studies — Proxynet Group",
    caseStudiesPageDesc:
      "Real-world technology deployments by Proxynet Group — NOC solutions, videowalls, cybersecurity, and digital signage across Africa.",
    caseStudiesEyebrow: "Client Success Stories",
    caseStudiesHeroTitle: "Real Challenges. Proven Solutions.",
    caseStudiesHeroSub:
      "From NOC command centres to enterprise cybersecurity — here is how we have helped organisations across Africa solve real technology challenges.",
    caseStudiesReadStudy: "Read Case Study",
    caseStudiesBack: "Back to Case Studies",
    caseStudiesViewAll: "View All Case Studies",
    caseStudiesRelated: "More Case Studies",
    caseStudiesClientLabel: "Client",
    caseStudiesSolutionLabel: "Solution Area",
    caseStudiesCtaEyebrow: "Start a Project",
    caseStudiesCtaHeading: "Ready to Build Something Like This?",
    caseStudiesCtaSub:
      "Talk to our team about your technology challenge — we will design a solution around your needs.",
    caseStudiesSideCtaHeading: "Interested in a Similar Solution?",
    caseStudiesSideCtaBody:
      "Our team can design and deploy a solution tailored to your organisation.",
    caseStudiesConsentTitle: "Content Pending Client Approval",
    caseStudiesConsentBody:
      "This case study is currently awaiting written consent from the client before it can be published. Please check back soon.",
    // Filter bar
    csFilterSolution: "Solution",
    csFilterIndustry: "Industry",
    csFilterCountry: "Country",
    csFilterClear: "Clear filters",
    csResultSingular: "case study",
    csResultPlural: "case studies",
    csNoResults: "No case studies match your filters.",
    csSimilarSolution: "Request a Similar Solution",
    // Case study section headings
    csClientOverview: "Client Overview",
    csChallenge: "The Challenge",
    csSolution: "Our Solution",
    csTechnologies: "Technologies Used",
    csResults: "Results & ROI",
    csRelatedSolutions: "Related Solutions",
    csGalleryComingSoon: "Gallery Coming Soon",
    // Case study titles & metadata
    cs1Title: "UBA NOC Deployment — 15-Display Command Centre",
    cs1Category: "NOC & Command Centre",
    cs1Excerpt:
      "A 15-screen network operations centre enabling real-time monitoring across UBA infrastructure.",
    cs2Title: "Access Bank Videowall — Ikota Branch",
    cs2Category: "Videowall & Digital Signage",
    cs2Excerpt:
      "A 4x2 46-inch videowall with NOC monitoring capabilities deployed at Access Bank Ikota.",
    // Case study content — clientOverview, solution, technologies, results (EN)
    cs2ClientOverview: "Access Bank is one of Nigeria's largest financial institutions, with operations across multiple African countries. Their Ikota branch required a high-impact videowall solution for their banking hall.",
    cs2Solution: "Proxynet deployed a 4x2 46-inch videowall with NOC monitoring capabilities at the Access Bank Ikota branch. The solution included Samsung commercial displays, a centralised content management system, and remote monitoring infrastructure.",
    cs2Technologies: ['Samsung 46" Commercial Displays', 'Videowall Controller', 'Content Management System', 'Remote Monitoring Software', 'Network Infrastructure'],
    cs2Results: ['Deployed 8-panel high-resolution videowall', 'Centralised content management across multiple zones', 'Real-time monitoring and remote diagnostics', '99.8% uptime since installation', 'Enhanced customer experience in banking hall'],
    cs5ClientOverview: "Sundry Foods is a leading quick-service restaurant chain operating across Nigeria, with outlets in high-traffic commercial and residential locations. Their Port Harcourt GRA Junction location hosts multiple brand concessions, each requiring dedicated digital signage screens for menu display and promotional content.",
    cs5Challenge: "Eight Android media player boxes at the Sundry Foods GRA Junction outlet had malfunctioned, causing screens across the venue to go dark or display incorrect content. The remaining three H96 Android boxes were running outdated Reels CMS configurations with stale content that no longer reflected each brand's current offerings. The client needed an urgent replacement and content refresh to restore seamless, brand-accurate signage across every screen.",
    cs5Solution: "Proxynet's field team deployed eight new H96 Android boxes to replace all malfunctioning units. On the three remaining H96 boxes, the Reels CMS was fully reloaded and reconfigured. New, up-to-date content was uploaded and mapped to each brand's designated screens, ensuring every concession displayed only its own branded content. All eleven boxes were tested end-to-end before sign-off.",
    cs5Technologies: ['H96 Android Media Players', 'Reels CMS', 'Digital Signage Displays', 'Content Scheduling & Zoning', 'On-Site Deployment & Configuration'],
    cs5Results: ['8 malfunctioning Android boxes replaced with new H96 units', 'Reels CMS reloaded and reconfigured on all 3 retained H96 boxes', 'Fresh branded content uploaded and mapped per brand zone', 'All 11 Android boxes operational post-deployment', 'Content displaying seamlessly across every screen at GRA Junction', 'Deployment fully completed and signed off as operational'],
    cs6ClientOverview: "Stanbic Bank is one of Ghana's leading financial institutions, part of the Standard Bank Group — Africa's largest bank by assets. Their headquarters in Accra serves as the operational hub for senior leadership and executive teams across the country.",
    cs6Technologies: ['Huawei IdeaHub B3', 'Wall Mounting & Cabling', 'Network Configuration', 'Device Provisioning'],
    cs6Results: ["Huawei IdeaHub B3 units installed in Chief Executives' suites", 'Full device configuration and network provisioning completed', 'Seamless wireless projection and cloud meeting capability enabled', 'Deployment signed off and fully operational at Stanbic Bank HQ, Accra'],
    cs7ClientOverview: "PIL is a modern organisation preparing for a major operational launch. Their new facility features purpose-built meeting and lecture rooms designed for hybrid collaboration, requiring a fully integrated Microsoft Teams Rooms solution to connect on-site and remote participants ahead of their grand opening.",
    cs7Technologies: ['Yealink MCore Microsoft Teams Rooms System', 'Yealink RoomPanel', 'Large-Format Display', 'Microsoft Teams Rooms', 'Structured Cabling & Cable Management'],
    cs7Results: ['Yealink MCore reloaded and fully commissioned', 'RoomPanel connected and configured for room scheduling', 'Successful test call completed', 'Cabling re-managed and tidied behind the display', 'Deployment complete and signed off'],
    cs8ClientOverview: "The African Union is the continent's premier intergovernmental organisation, headquartered in Addis Ababa, Ethiopia. Their conference and meeting facilities serve heads of state, diplomats, and senior officials across 55 member states — demanding the highest standards of reliability and ease of use in collaboration technology.",
    cs8Technologies: ['Microsoft Teams Rooms', 'Yealink Tab Controller', 'Yealink Wpp30 Wireless Presentation Pod', 'Auto-Tracking PTZ Camera', 'Ceiling / Room Microphone Array', 'Structured Cabling & Cable Management'],
    cs8Results: ['One-click meeting join from the Tab controller — fully operational', 'Wireless content sharing into meetings via Yealink Wpp30 confirmed working', 'Microphone performance verified — clear audio across the room', 'Auto-tracking camera commissioned — tracking tested and performing well', 'All cabling re-managed and tidied for a clean installation', 'Deployment complete and signed off'],
    cs9ClientOverview: "PwC Nigeria is one of the country's leading professional services firms, providing audit, tax, and advisory services. Their office required a large-scale upgrade of collaboration infrastructure across multiple meeting rooms on the 6th and 8th floors, deploying 10 units of the Huawei IdeaHub 86\" to support meetings at varying room capacities.",
    cs9Technologies: ['Huawei IdeaHub 86" (× 10 units)', 'Wall Mounting & Structural Installation', 'Device Configuration & Provisioning', 'Room Commissioning'],
    cs9Results: ['10 × Huawei IdeaHub 86" units installed and commissioned', 'Room 4, 6th floor (8-person capacity) — complete', 'Room 2, 8th floor (12-person capacity) — complete', 'Room 3, 8th floor (8-person capacity) — complete', 'Room 4, 8th floor (12-person capacity) — complete', 'All rooms fully operational'],
    cs10ClientOverview: "ArcelorMittal is the world's leading steel and mining company, with a significant presence across Africa. Their Nigeria office required a modern collaboration solution to support meetings, presentations, and hybrid working for their team.",
    cs10Technologies: ['Yealink MeetingBoard Pro (65")', 'Wall Mounting & Structural Installation', 'Device Commissioning & Configuration', 'Staff Training'],
    cs10Results: ['65" Yealink MeetingBoard Pro successfully mounted and installed', 'Device fully commissioned and configured', 'Staff training completed on-site', 'Installation signed off as complete'],
    cs11ClientOverview: "Arik Air is one of Nigeria's leading commercial airlines, operating domestic and international routes across Africa and beyond. Their facility required a modern videowall installation to enhance visual communication and operational display capabilities.",
    cs11Technologies: ['Videowall Display System', 'Osbase Content Management Licence', 'Display Mounting & Cabling', 'Content Configuration & Activation'],
    cs11Results: ['Videowall successfully deployed and installed', 'Osbase licence activated and operational', 'Content running live across all screens', 'Deployment complete and signed off'],
    cs12ClientOverview: "PIL is a modern organisation preparing for a major operational launch. Their new facility features purpose-built meeting and conference rooms designed for hybrid collaboration, requiring a fully integrated Microsoft Teams Rooms solution ahead of their grand opening.",
    cs12Technologies: ['Yealink MVC860 Microsoft Teams Rooms System', 'Yealink MCore Pro', 'Yealink RCH40', 'Yealink MSpeaker', 'Yealink MTouch', 'Structured Cabling & Hardware Integration'],
    cs12Results: ['MCore Pro installed and fully connected', 'RCH40 camera unit installed and connected', 'MSpeaker audio system installed and connected', 'MTouch controller installed and connected', 'All hardware connections verified and complete', 'System fully commissioned and operational'],
    csCreamClientOverview: "Creamer Media is a leading provider of business intelligence and news services focused on African markets, particularly in mining, engineering, and infrastructure sectors. As a technology-driven media organisation, reliable and secure network access is critical to their daily operations.",
    csCreamSolution: "The team at Creamer Media needed a way to better manage what network bandwidth users are working with to ensure optimised use of their internet pipe. They also needed a trusted VPN solution to ensure secure access for clients and partners into their local resources. Proxynet Communications brought to Creamer Media a solution that evolved from just a firewall to a full Unified Threat Management solution — providing bandwidth control, internet optimisation, and secure VPN connectivity in a single platform.",
    csCreamTechnologies: ['Kerio Control', 'Unified Threat Management (UTM)', 'Bandwidth Management', 'VPN — Secure Remote Access', 'Firewall'],
    csCreamResults: ['Network bandwidth optimised across all users', 'Internet pipe utilisation improved through traffic management', 'Secure VPN access established for clients and partners', 'Evolved from standalone firewall to full UTM platform'],
    csAltechClientOverview: "Altech West Africa is a technology solutions company operating across West Africa in the FMCG and enterprise sectors, requiring robust protection for their network infrastructure and business-critical operations.",
    csAltechSolution: "Proxynet deployed the FireEye Web Malware Protection System (WebMPS) — stopping web-based attacks that traditional and next-generation firewalls, IPS, anti-virus, and web gateways miss. The solution protects against zero-day web exploits and multi-protocol callbacks to keep sensitive data and systems safe.",
    csAltechTechnologies: ['FireEye Web Malware Protection System (WebMPS)', 'Zero-Day Exploit Prevention', 'Multi-Protocol Callback Blocking'],
    csAltechResults: ['Web-based attack vectors blocked at perimeter', 'Zero-day web exploit protection deployed', 'Network integrity and sensitive data secured'],
    csNetcoClientOverview: "NETCO and UAC are established Nigerian enterprises requiring enterprise-grade security to protect critical assets and sensitive data across complex, multi-environment IT infrastructures.",
    csNetcoSolution: "Proxynet implemented McAfee Security Connected — the industry's first open framework for integrating security technologies. The solution delivered real-time visibility and analytics, predictive capability via McAfee Global Threat Intelligence, and enabled secure use of Web 2.0, virtualisation, cloud computing, and mobile devices on the corporate network.",
    csNetcoTechnologies: ['McAfee Security Connected', 'McAfee Global Threat Intelligence', 'Endpoint Security', 'Real-Time Analytics'],
    csNetcoResults: ['Real-time threat visibility and analytics deployed', 'Global Threat Intelligence integration enabled', 'Secure BYOD and mobile device policy enforced', 'Critical assets and sensitive data protected'],
    // Summary-only case study titles/categories/excerpts
    csCreamTitle: "Creamer Media — Kerio Control UTM Solution",
    csCreamCategory: "Cybersecurity · UTM · VPN",
    csCreamExcerpt: "Proxynet delivered a full Unified Threat Management solution for Creamer Media — evolving from a standalone firewall to a comprehensive UTM platform with bandwidth management and secure VPN access.",
    csAltechTitle: "Altech West Africa — FireEye Web Malware Protection",
    csAltechCategory: "Cybersecurity",
    csAltechExcerpt: "Deployed FireEye WebMPS to stop web-based attacks missed by traditional firewalls, IPS, and AV — protecting against zero-day web exploits and multi-protocol callbacks to secure network integrity.",
    csNetcoTitle: "NETCO & UAC — McAfee Security Connected",
    csNetcoCategory: "Cybersecurity",
    csNetcoExcerpt: "Implemented McAfee Security Connected — delivering real-time threat visibility, Global Threat Intelligence, and endpoint security across web, virtualisation, cloud, and mobile environments.",
    cs5Title: "Sundry Foods Port Harcourt — Digital Content Management & Signage",
    cs5Category: "Digital Content Management & Signage",
    cs5Excerpt:
      "Eight malfunctioning Android boxes replaced and Reels CMS reloaded across all screens at Sundry Foods GRA Junction, Port Harcourt — restoring seamless content display for every brand.",
    cs6Title: "Stanbic Bank HQ — Huawei IdeaHub B3 Installation",
    cs6Category: "Video Conferencing & Collaboration",
    cs6Excerpt:
      "Huawei IdeaHub B3 units installed and configured for the Chief Executives' suites at Stanbic Bank headquarters in Accra, Ghana.",
    cs7Title: "PIL — Microsoft Teams Rooms & Yealink Deployment",
    cs7Category: "Video Conferencing & Collaboration",
    cs7Excerpt:
      "End-to-end Microsoft Teams Rooms deployment for PIL, including Yealink MCore, RoomPanel configuration, and commissioning — ahead of their grand opening.",
    cs8Title: "African Union — Microsoft Teams Rooms Deployment",
    cs8Category: "Video Conferencing & Collaboration",
    cs8Excerpt:
      "Full Microsoft Teams Rooms deployment at the African Union in Ethiopia — one-click meeting joins, wireless content sharing via Wpp30, auto-tracking camera, and clean cable management.",
    cs9Title: "PwC Nigeria — Huawei IdeaHub 86\" Multi-Room Deployment",
    cs9Category: "Video Conferencing & Collaboration",
    cs9Excerpt:
      "10 × Huawei IdeaHub 86\" units installed and commissioned across PwC Nigeria offices on the 6th and 8th floors.",
    cs10Title: "ArcelorMittal — Yealink MeetingBoard Pro Installation",
    cs10Category: "Video Conferencing & Collaboration",
    cs10Excerpt:
      "65-inch Yealink MeetingBoard Pro mounted, commissioned, and staff trained at ArcelorMittal. Installation complete.",
    cs11Title: "Arik Air — Videowall Deployment & Osbase Activation",
    cs11Category: "Videowall & Digital Signage",
    cs11Excerpt:
      "Videowall successfully deployed at Arik Air with Osbase licence activated and content running live.",
    cs12Title: "PIL — Yealink MVC860 System Installation",
    cs12Category: "Video Conferencing & Collaboration",
    cs12Excerpt:
      "Full Yealink MVC860 system installed at PIL — MCore Pro, RCH40, MSpeaker, and MTouch all connected and commissioned.",
    // Case study industries (for filter + display)
    csIndFinancial: "Financial Services",
    csIndMedia: "Media & Publishing",
    csIndFoodBeverage: "Food & Beverage",
    csIndBanking: "Banking & Finance",
    csIndAviation: "Aviation",
    // Case study countries (Proxynet office locations)
    csCountryNigeria: "Nigeria",
    csCountryGhana: "Ghana",
    csCountryGambia: "Gambia",
    csCountryCoteDIvoire: "Côte d'Ivoire",
    csCountryUAE: "UAE",
    csCountryEthiopia: "Ethiopia",

    // Industry pages
    industriesNav: "Industries",
    breadcrumbIndustries: "Industries",
    indPageRoleEyebrow: "Our Role",
    indPageRoleHeading: "How Proxynet Helps",
    indPageRoleBullet1:
      "Design & Deploy — We architect and implement the right technology stack for your environment.",
    indPageRoleBullet2:
      "Ongoing Support — 24/7 monitoring, maintenance, and SLA-backed support after go-live.",
    indPageRoleBullet3:
      "Technology Partnership — A long-term relationship that grows with your business.",
    indPageSolutionsEyebrow: "Key Solutions",
    indPageSolutionsHeading: "What We Deliver",
    indPageCaseEyebrow: "Client Success",
    indPageCaseHeading: "Featured Case Study",
    indPageCaseComing: "Case study coming soon",
    indPageCaseComingSub:
      "We are currently preparing a case study for this industry. Check back soon.",
    indPageCaseReadMore: "Read Case Study",
    indPageClientsEyebrow: "Clients We Serve",
    indPageClientsHeading: "Trusted by Industry Leaders",
    indPageCtaHeading: "Ready to Transform Your Operations?",
    indPageCtaSub:
      "Talk to our team about your technology challenges — we will design a solution built for your industry.",
    // Financial Services
    indFinancialEyebrow: "Financial Services",
    indFinancialHeroTitle: "Technology Built for Financial Services",
    indFinancialHeroSub:
      "Secure, compliant, and high-availability IT infrastructure for Nigeria's leading banks, fintechs, and financial institutions.",
    indFinancialOverview:
      "The financial services sector demands the highest standards of reliability, security, and compliance. Downtime is not an option. Data breaches are catastrophic. Regulatory requirements are stringent and evolving. Proxynet has been a trusted technology partner to Nigerian and West African financial institutions for over 20 years — delivering NOC command centres, secure networks, and compliance-ready infrastructure.",
    indFinancialRole:
      "We design, deploy, and manage the technology infrastructure that keeps financial institutions running — from core network infrastructure and cybersecurity to NOC command centres, videowall solutions, and enterprise software. Our team understands CBN compliance requirements, zero-tolerance uptime SLAs, and the operational demands of multi-branch banking environments.",
    indFinancialCaseTitle: "Access Bank Videowall — Ikota Branch",
    indFinancialCaseOutcome:
      "Deployed a 4x2 46-inch high-resolution videowall with integrated NOC monitoring capabilities at the Access Bank Ikota branch, enabling real-time visibility of network and security operations.",
    // Oil & Gas
    indOilGasEyebrow: "Oil & Gas",
    indOilGasHeroTitle:
      "Rugged Technology for Upstream & Downstream Operations",
    indOilGasHeroSub:
      "From remote wellhead connectivity to refinery command centres — reliable, ruggedised technology solutions for Nigeria's oil and gas sector.",
    indOilGasOverview:
      "Oil and gas operations demand technology that works in harsh environments, remote locations, and under extreme operational pressure. Connectivity failures and security breaches in this sector carry enormous consequences. Proxynet has delivered technology solutions to upstream and downstream operators across Nigeria and West Africa, understanding the sector's unique requirements — ATEX-rated environments, remote site connectivity, and real-time operational visibility.",
    indOilGasRole:
      "We provide end-to-end technology infrastructure for oil and gas operations — from remote site connectivity and SCADA integration to command centre solutions and cybersecurity for operational technology (OT) environments. Our engineers are experienced in deploying ruggedised solutions in challenging field conditions.",
    indOilGasCaseTitle: "Multi-Site Logitech VC Solution — Oil & Gas Operator",
    indOilGasCaseOutcome:
      "Implemented a multi-site Logitech video conferencing solution connecting Lagos, Bonny, Port Harcourt, and Abuja offices for a major oil and gas operator, enabling seamless collaboration across field and head office teams.",
    // Manufacturing
    indManufacturingEyebrow: "Manufacturing",
    indManufacturingHeroTitle: "Systems Integration for Modern Manufacturing",
    indManufacturingHeroSub:
      "Connecting factory floors, supply chains, and management systems — technology infrastructure that drives manufacturing efficiency across West Africa.",
    indManufacturingOverview:
      "Manufacturing operations depend on seamless connectivity between production systems, supply chain management, and enterprise applications. Technology failures on the factory floor translate directly to lost production and revenue. Proxynet works with manufacturers across Nigeria and West Africa to design and deploy the network infrastructure, systems integration, and operational technology solutions that keep production running.",
    indManufacturingRole:
      "From factory floor networking to ERP integration and command centre solutions — Proxynet provides the technology backbone for modern manufacturing operations. We connect machines, sensors, and management systems into a unified operational view that drives efficiency and reduces downtime.",
    indManufacturingCaseTitle:
      "Factory Network & Systems Integration — FMCG Manufacturer",
    indManufacturingCaseOutcome:
      "Designed and deployed a factory-wide network infrastructure connecting production lines, warehouse management, and ERP systems for a leading Nigerian FMCG manufacturer, reducing operational downtime by over 40%.",
    // Telecommunications
    indTelecomsEyebrow: "Telecommunications",
    indTelecomsHeroTitle: "Enterprise Technology for Telecoms Operators",
    indTelecomsHeroSub:
      "Network infrastructure, NOC solutions, and managed services for telecoms operators and service providers across West Africa.",
    indTelecomsOverview:
      "Telecoms operators require technology partners who understand the demands of always-on, high-throughput network environments. NOC visibility, rapid incident response, and scalable infrastructure are non-negotiable. Proxynet has delivered NOC command centres, network infrastructure, and managed services to telecoms operators across Nigeria and West Africa.",
    indTelecomsRole:
      "From multi-display NOC command centres to enterprise networking and unified communications — Proxynet provides the technology infrastructure that keeps telecoms operations running. We design solutions for the scale and complexity of telecoms environments, with 24/7 support and SLA-backed managed services.",
    indTelecomsCaseTitle: "NOC Command Centre — Telecoms Operator",
    indTelecomsCaseOutcome:
      "Deployed a large-scale multi-display NOC command centre for a major West African telecoms operator, enabling real-time network monitoring and reducing mean time to resolution by 60%.",
    // Government
    indGovernmentEyebrow: "Government & Public Sector",
    indGovernmentHeroTitle:
      "Secure IT Infrastructure for Government & Public Sector",
    indGovernmentHeroSub:
      "Compliant, secure, and reliable technology solutions for federal and state government agencies, ministries, and public institutions across Nigeria.",
    indGovernmentOverview:
      "Government agencies require technology infrastructure that meets strict security and compliance requirements, supports large-scale operations, and delivers reliable service to citizens and staff. Proxynet has delivered technology solutions to federal ministries, state government agencies, and public institutions across Nigeria, meeting government procurement requirements and security standards.",
    indGovernmentRole:
      "From secure network infrastructure and command centres to enterprise software and digital transformation — Proxynet is a trusted technology partner for Nigeria's public sector. We understand government procurement processes, security clearance requirements, and the need for long-term support commitments.",
    indGovernmentCaseTitle: "Command Centre — Federal Government Agency",
    indGovernmentCaseOutcome:
      "Designed and deployed a multi-display command and control centre for a federal government agency, integrating security feeds, infrastructure monitoring, and communications into a unified operational view.",
    // Education
    indEducationEyebrow: "Education",
    indEducationHeroTitle:
      "Smart Campus & EdTech Solutions for Schools & Universities",
    indEducationHeroSub:
      "Transforming learning environments through smart classroom technology, campus networking, and digital literacy programmes across West Africa.",
    indEducationOverview:
      "Educational institutions are undergoing a digital transformation. Smart classrooms, campus-wide connectivity, and digital learning tools are becoming essential infrastructure — not optional extras. Through our dedicated EdTech division, Proxynet has deployed smart classroom solutions, campus networks, and digital literacy programmes in schools and universities across Lagos State and beyond.",
    indEducationRole:
      "We provide end-to-end education technology solutions — from interactive classroom displays and campus Wi-Fi to computer lab setup, digital literacy training, and ICT certification programmes. Our EdTech team works directly with school administrators, teachers, and government education agencies.",
    indEducationCaseTitle: "Smart Classroom Rollout — Lagos State Schools",
    indEducationCaseOutcome:
      "Deployed smart classroom solutions across multiple Lagos State schools, equipping over 200 classrooms with interactive displays, structured cabling, and internet connectivity — improving learning outcomes and teacher effectiveness.",
    // Healthcare
    indHealthcareEyebrow: "Healthcare",
    indHealthcareHeroTitle: "Reliable Technology for Healthcare Providers",
    indHealthcareHeroSub:
      "The technology infrastructure that keeps hospitals, clinics, and healthcare networks running — securely and reliably.",
    indHealthcareOverview:
      "Healthcare technology failures can have life-or-death consequences. Reliable connectivity, data security, and system availability are critical requirements for any healthcare technology partner. Proxynet works with hospitals, clinics, and healthcare networks to deliver the network infrastructure, cybersecurity, and communication solutions that support patient care and administrative operations.",
    indHealthcareRole:
      "From hospital network infrastructure and patient data security to unified communications and digital signage — Proxynet provides technology solutions built for healthcare environments. We understand the sensitivity of patient data and the need for zero-downtime infrastructure in clinical settings.",
    indHealthcareCaseTitle:
      "Hospital Network Infrastructure — Teaching Hospital",
    indHealthcareCaseOutcome:
      "Designed and deployed a campus-wide network infrastructure for a major Lagos teaching hospital, connecting clinical systems, administrative offices, and patient wards with high-availability connectivity and robust data security controls.",
    // Retail
    indRetailEyebrow: "Retail",
    indRetailHeroTitle: "Smart Retail Technology for Nigeria's Leading Brands",
    indRetailHeroSub:
      "Digital signage, POS networks, and smart retail infrastructure for Nigeria's top retail and blue chip companies.",
    indRetailOverview:
      "Modern retail demands seamless technology — from in-store digital experiences and POS connectivity to back-office systems and security infrastructure. Proxynet works with retail chains, FMCG companies, and blue chip organisations to deliver the technology infrastructure that drives customer experience and operational efficiency.",
    indRetailRole:
      "From digital signage and POS networking to enterprise software and security systems — Proxynet provides the technology backbone for modern retail operations. We design multi-site solutions that scale with your store network and deliver consistent customer experiences across every location.",
    indRetailCaseTitle: "Digital Signage Network — Retail Chain",
    indRetailCaseOutcome:
      "Deployed a centralised digital signage network across 12 retail locations for a leading Nigerian retail chain, enabling real-time promotional content management and improving in-store customer engagement.",
    // Billboard Solutions (bb)
    bbEyebrow: "ProBoard by Proxynet",
    bbHeroTitle: "Make Your Message Unmissable",
    bbHeroSub:
      "Indoor and outdoor digital signage, LED walls, and billboard deployments that command attention and deliver results.",
    bbUseCasesEyebrow: "Use Cases",
    bbUseCasesHeading: "Where We Deploy",
    bbRetailName: "Retail",
    bbRetailDesc:
      "In-store digital signage, window displays, and promotional screens that drive sales.",
    bbCorporateName: "Corporate Lobbies",
    bbCorporateDesc:
      "Impressive LED walls and display systems for reception areas and boardrooms.",
    bbEventsName: "Events & Activations",
    bbEventsDesc:
      "High-impact LED walls and outdoor screens for events, concerts, and brand activations.",
    bbOutdoorName: "Outdoor Advertising",
    bbOutdoorDesc:
      "Weatherproof outdoor LED billboards for roadside and high-traffic advertising.",
    bbOutdoorNetworkEyebrow: "Outdoor Advertising Network",
    bbOutdoorNetworkHeading: "Proxynet Billboard Locations",
    bbOutdoorNetworkSub:
      "Proxynet Communications provides outdoor advertising solutions through a network of digital and static billboards strategically located in high-traffic, high-visibility areas across Nigeria.",
    bbLocLagosCity: "Lagos",
    bbLocLagosDetail: "Bonny Camp & Slot HQ in Ikeja",
    bbLocLagosDesc:
      "Reaching professionals, commuters, and corporate decision-makers & business owners in one of Nigeria's busiest commercial corridors.",
    bbLocEnuguCity: "Enugu",
    bbLocEnuguDetail: "Abakaliki Road",
    bbLocEnuguDesc:
      "Connecting brands with a growing regional audience in the South-East.",
    bbLocPHCity: "Port Harcourt",
    bbLocPHDetail: "Peter Odili Road",
    bbLocPHDesc:
      "Capturing the attention of business executives and residents in the vibrant South-South hub.",
    bbAdvertiseCta: "Advertise on Our Billboards",
    bbSpecsEyebrow: "Technical Specifications",
    bbSpecsHeading: "Built to Perform",
    bbSpecIndoorPitchLabel: "Indoor LED Pitch",
    bbSpecIndoorPitchValue: "P1.5 to P4 pixel pitch",
    bbSpecOutdoorPitchLabel: "Outdoor LED Pitch",
    bbSpecOutdoorPitchValue: "P6 to P16 pixel pitch",
    bbSpecResolutionLabel: "Resolution",
    bbSpecResolutionValue: "Up to 4K UHD",
    bbSpecBrightnessIndoorLabel: "Brightness (Indoor)",
    bbSpecBrightnessIndoorValue: "800 to 1500 nits",
    bbSpecBrightnessOutdoorLabel: "Brightness (Outdoor)",
    bbSpecBrightnessOutdoorValue: "5000 to 10000 nits",
    bbSpecCMSLabel: "Content Management",
    bbSpecCMSValue: "Cloud-based CMS, remote scheduling",
    bbSpecInstallLabel: "Installation",
    bbSpecInstallValue: "Wall mount, floor stand, ceiling, freestanding",
    bbSpecWarrantyLabel: "Warranty",
    bbSpecWarrantyValue: "2 years parts and labour",
    bbFormEyebrow: "Get a Quote",
    bbFormHeading: "Request a Quote",
    bbFormSub:
      "Tell us about your project and we will send you a detailed proposal within 24 hours.",
    bbFieldName: "Full Name",
    bbFieldCompany: "Company",
    bbFieldLocation: "Location",
    bbFieldUseCase: "Use Case",
    bbSelectUseCase: "Select a use case",
    bbSelectCorporateLobby: "Corporate Lobby",
    bbSelectEventActivation: "Event / Activation",
    bbSelectOther: "Other",
    bbFieldProjectDetails: "Project Details",
    bbProjectDetailsPlaceholder:
      "Screen size, quantity, indoor/outdoor, timeline…",
    bbSuccessTitle: "Quote Request Submitted",
    bbSuccessMsg:
      "Our sales team will send you a detailed proposal within 24 hours.",

    // Events page
    eventsEyebrow: "Industry Presence & Community Engagement",
    eventsHeroTitle: "Where Technology Meets Community",
    eventsHeroSub: "From product launches to partner summits — Proxynet is at the centre of West Africa's technology conversation.",
    eventsRegisterNext: "Register for Next Event",
    eventsViewGallery: "View Gallery",
    eventsFeaturedEyebrow: "Featured Events",
    eventsFeaturedHeading: "Recent Highlights",
    eventsGalleryEyebrow: "Photo Gallery",
    eventsGalleryHeading: "All Events",
    eventsFilterCategory: "Category",
    eventsFilterYear: "Year",
    eventsFilterClear: "Clear",
    eventsUpcomingEyebrow: "What's Next",
    eventsUpcomingHeading: "Upcoming Events",
    eventsCtaEyebrow: "Stay in the Loop",
    eventsCtaHeading: "Never Miss a Proxynet Event",
    eventsCtaSub: "Subscribe to our newsletter or follow us on social media to be the first to know about upcoming events, product launches, and partner summits.",
    eventsFollowLinkedIn: "Follow on LinkedIn",
    eventsRegisterInterest: "Register Interest",
    eventsPhotos: "photos",
    eventsThemeLabel: "Theme:",
    // Event data — past
    event1Name: "Breakfast Session with Proxynet & Comforte",
    event1Venue: "Radisson Blue, Lagos",
    event1Category: "Partner Event",
    event1Desc: "An exclusive breakfast session bringing together enterprise technology leaders to discuss data security and compliance solutions with Comforte AG.",
    event1PhotoCaption: "Breakfast Session with Proxynet & Comforte at Radisson Blue",
    event2Name: "Huawei Port Harcourt Experience",
    event2Venue: "Port Harcourt, Rivers State",
    event2Category: "Partner Event",
    event2Desc: "Proxynet brought the Huawei technology experience to Port Harcourt, showcasing enterprise solutions for the oil & gas and manufacturing sectors.",
    event2PhotoCaption: "Huawei Port Harcourt Experience",
    event3Name: "Unilumin Lagos Experience 2026",
    event3Venue: "Marriot Hotel, 122 Joel Ogunnaike Street, Ikeja GRA, Lagos",
    event3Category: "Product Launch",
    event3Theme: "Clarity Meets Performance",
    event3Date: "Mar 19, 2026 · 10:00 AM WAT",
    event3Desc: "An exclusive showcase of Unilumin's high-performance LED display technologies — from corporate boardrooms and control rooms to retail malls, houses of worship, broadcast venues, and outdoor architectural displays. Proxynet is the Official Unilumin Distributor in Nigeria.",
    // Event data — upcoming
    upcoming1Name: "GITEX Kenya 2026",
    upcoming1Date: "Coming Soon",
    upcoming1Venue: "Nairobi, Kenya",
    upcoming1Category: "Industry Exhibition",
    upcoming1Desc: "Proxynet Group will be exhibiting at GITEX Kenya — East Africa's premier technology event. Meet our team, explore our solutions, and connect with technology leaders from across the continent.",
    upcoming2Name: "Robo-Xplore 2.0",
    upcoming2Date: "30th May 2026 · 10:00 AM – 2:00 PM",
    upcoming2Venue: "Nesama House, 5B Adedeji Close, Opebi Rd, Ikeja, Lagos",
    upcoming2Category: "Kids Tech Event",
    upcoming2Audience: "Children aged 5–17",
    upcoming2Desc: "The biggest kids tech event in Lagos returns — bigger, bolder, and more exciting. Children aged 5–17 drive real robots, try AI face recognition, build mini-robots, compete in Battle Bots, explore VR, and learn to code. Gate fee from ₦5,000.",

    // EdTech page
    edtechDivisionEyebrow: "Proxynet EdTech Division",
    edtechHeroTitle: "Empowering the Next Generation of Technology Talent",
    edtechHeroSub: "We partner with schools, universities, and institutions across West Africa to deliver smart classroom solutions, digital literacy programmes, and ICT infrastructure.",
    edtechOverviewEyebrow: "What We Do",
    edtechOverviewHeading: "Smart School Solutions for Modern Education",
    edtechOverviewBody1: "Proxynet EdTech is the education technology division of Proxynet Group. We work with primary schools, secondary schools, universities, and government education agencies to transform learning environments through technology.",
    edtechOverviewBody2: "From installing interactive displays in classrooms to building campus-wide Wi-Fi networks and running digital literacy workshops — we provide end-to-end technology solutions designed specifically for education.",
    edtechProgEyebrow: "Training Programmes",
    edtechProgHeading: "What We Offer",
    edtechInstEyebrow: "Partner Institutions",
    edtechInstHeading: "Schools & Institutions We Have Worked With",
    edtechGalleryEyebrow: "Events Gallery",
    edtechGalleryHeading: "EdTech in Action",
    edtechPartnerEyebrow: "Partner With Us",
    edtechPartnerHeading: "Bring EdTech to Your Institution",
    edtechPartnerSub: "Fill out the form and our EdTech team will get in touch within 2 business days.",
    edtechSuccessTitle: "Enquiry Submitted",
    edtechSuccessMsg: "Our EdTech team will be in touch within 2 business days.",
    edtechFieldName: "Full Name",
    edtechFieldInstitution: "Institution Name",
    edtechFieldRole: "Your Role",
    edtechFieldEmail: "Email",
    edtechFieldPhone: "Phone",
    edtechFieldInterest: "Area of Interest",
    edtechFieldInterestDefault: "Select an area",
    edtechInterest1: "Smart Classroom Setup",
    edtechInterest2: "School Network Infrastructure",
    edtechInterest3: "Computer Lab Setup",
    edtechInterest4: "Digital Literacy Training",
    edtechInterest5: "Teacher Technology Training",
    edtechInterest6: "ICT Certification Programmes",
    edtechInterestOther: "Other",
    edtechFieldNotes: "Additional Notes",
    // EdTech programmes
    prog1Name: "Web Development",
    prog1Duration: "4-12 weeks",
    prog1Audience: "Students & Young Professionals",
    prog1Format: "Classroom + hands-on",
    prog1Desc: "Full-stack web development covering HTML, CSS, JavaScript, and modern frameworks. Students build real projects from day one.",
    prog2Name: "Web Design",
    prog2Duration: "2-6 weeks",
    prog2Audience: "Students & Creatives",
    prog2Format: "Classroom + hands-on",
    prog2Desc: "UI/UX principles, wireframing, prototyping, and visual design for the web using industry-standard tools.",
    prog3Name: "Digital Literacy",
    prog3Duration: "1-5 days",
    prog3Audience: "Students & Teachers",
    prog3Format: "Classroom + hands-on",
    prog3Desc: "Practical digital skills covering computer basics, internet safety, productivity tools, and navigating the digital world confidently.",
    prog4Name: "Graphics Design",
    prog4Duration: "2-8 weeks",
    prog4Audience: "Students & Creatives",
    prog4Format: "Classroom + hands-on",
    prog4Desc: "Visual communication, branding, typography, and design using professional tools. From logos to marketing materials.",
    prog5Name: "Robotics",
    prog5Duration: "4-8 weeks",
    prog5Audience: "Primary, Secondary & Tertiary",
    prog5Format: "Hands-on workshop",
    prog5Desc: "Introduction to robotics, electronics, and programming through building and programming real robots. STEM-focused and project-based.",
    prog6Name: "Artificial Intelligence",
    prog6Duration: "4-12 weeks",
    prog6Audience: "Secondary & Tertiary",
    prog6Format: "Classroom + practical",
    prog6Desc: "Foundations of AI, machine learning concepts, and practical applications. Students explore how AI is transforming industries.",
    prog7Name: "Internet of Things (IoT)",
    prog7Duration: "4-8 weeks",
    prog7Audience: "Secondary & Tertiary",
    prog7Format: "Hands-on workshop",
    prog7Desc: "Connecting devices, sensors, and systems. Students build IoT projects that solve real-world problems using hardware and code.",
    prog8Name: "Data Science",
    prog8Duration: "6-12 weeks",
    prog8Audience: "Tertiary & Professionals",
    prog8Format: "Classroom + practical",
    prog8Desc: "Data collection, cleaning, analysis, and visualisation. Covers Python, statistics, and real-world datasets from African markets.",
    prog9Name: "Data Analytics",
    prog9Duration: "4-8 weeks",
    prog9Audience: "Students & Professionals",
    prog9Format: "Classroom + practical",
    prog9Desc: "Turning raw data into actionable insights using tools like Excel, Power BI, and SQL. Practical, business-focused curriculum.",

    // Rentals page
    rentalsHeroTitle: "World-Class AV Equipment for Your Events",
    rentalsHeroSub: "From intimate boardroom setups to large-scale outdoor events, we supply, install, and operate professional AV equipment across Nigeria and West Africa.",
    rentalsEquipEyebrow: "Equipment Catalogue",
    rentalsEquipHeading: "What We Offer",
    rentalsSpecs: "Specs",
    rentalsUseCases: "Use Cases",
    rentalsGalleryEyebrow: "Event Gallery",
    rentalsGalleryHeading: "Past Deployments",
    rentalsGalleryNote: "Photos coming soon, check back after our next event.",
    rentalsHowEyebrow: "How It Works",
    rentalsHowHeading: "Simple. Fast. Professional.",
    rentalsEnquiryEyebrow: "Rental Enquiry",
    rentalsEnquiryHeading: "Request a Rental",
    rentalsEnquirySub: "Fill out the form and our operations team will get back to you within 4 hours.",
    rentalsSuccessTitle: "Enquiry Submitted",
    rentalsSuccessMsg: "We will be in touch within 4 hours to discuss your requirements.",
    rentalsFieldName: "Full Name",
    rentalsFieldCompany: "Company",
    rentalsFieldDate: "Event Date",
    rentalsFieldLocation: "Event Location",
    rentalsFieldEquipment: "Equipment Needed",
    rentalsFieldEquipmentPlaceholder: "e.g. 2x2 videowall, PA system, 2x touch screens",
    rentalsFieldNotes: "Additional Notes",
    // Rental equipment
    equip1Name: "Videowalls",
    equip1Specs: "Modular LED panels, 2x2 to 6x4 configurations, indoor/outdoor",
    equip1Uses: "Conferences, product launches, exhibitions, concerts",
    equip2Name: "Single Displays",
    equip2Specs: "43 to 98 inch commercial displays, 4K resolution, portrait/landscape",
    equip2Uses: "Presentations, wayfinding, brand activations, retail",
    equip3Name: "Touch Screens",
    equip3Specs: "55 to 86 inch interactive touch displays, multi-touch, Windows/Android",
    equip3Uses: "Interactive kiosks, product demos, training sessions",
    equip4Name: "Audio Systems",
    equip4Specs: "Line arrays, PA systems, wireless microphones, mixers",
    equip4Uses: "Corporate events, outdoor activations, conferences",
    // Rental steps
    step1Num: "01",
    step1Title: "Enquire",
    step1Desc: "Tell us about your event, date, location, audience size, and equipment needed.",
    step2Num: "02",
    step2Title: "We Configure",
    step2Desc: "Our team designs the optimal AV setup for your event and sends you a detailed proposal.",
    step3Num: "03",
    step3Title: "We Deploy & Support",
    step3Desc: "We deliver, install, and operate the equipment on-site. We stay until the event ends.",

    // Careers
    careersHeroTitle: "Build the Future of Technology in West Africa",
    careersHeroSub: "Join a team of engineers, innovators, and problem-solvers delivering world-class technology infrastructure across Africa.",
    // Life at Proxynet
    lifeEyebrow: "Life at Proxynet",
    lifeHeading: "Why People Love Working Here",
    lifeSub: "We build technology that matters — and we do it with a team that genuinely cares about each other and the work.",
    perk1Title: "Purpose-Driven Work",
    perk1Desc: "Every project you work on directly impacts how businesses across Africa operate and grow.",
    perk2Title: "Fast-Paced Growth",
    perk2Desc: "We move quickly. You will take on real responsibility from day one and grow faster than anywhere else.",
    perk3Title: "Collaborative Culture",
    perk3Desc: "No silos. We work as one team — sharing knowledge, solving problems together, and celebrating wins.",
    perk4Title: "Career Development",
    perk4Desc: "Structured learning paths, certifications, and mentorship to help you reach your full potential.",
    // Open Roles
    rolesEyebrow: "Open Roles",
    rolesHeading: "Current Opportunities",
    rolesPosted: "Posted",
    role1Title: "Network Engineer",
    role1Dept: "Engineering",
    role2Title: "Cybersecurity Analyst",
    role2Dept: "Security",
    role3Title: "AV Systems Technician",
    role3Dept: "Engineering",
    role4Title: "Software Developer",
    role4Dept: "Software",
    role5Title: "IT Support Specialist",
    role5Dept: "Support",
    role6Title: "Sales Executive",
    role6Dept: "Sales",
    roleLocation: "Lagos, Nigeria",
    roleLocationAbuja: "Abuja, Nigeria",
    roleType: "Full-time",
    // Graduate Programme
    gradEyebrow: "Graduate Programme",
    gradHeading: "Start Your Career at the Top",
    gradSub: "Our Graduate Programme is designed to fast-track exceptional young talent into technology careers. You will rotate across departments, work on live projects, and be mentored by industry experts.",
    gradEligibilityTitle: "Eligibility",
    gradElig1: "Recent graduate (within 2 years) in Computer Science, Engineering, IT, or related field",
    gradElig2: "Minimum Second Class Upper (2:1) degree or equivalent",
    gradElig3: "Strong analytical and problem-solving skills",
    gradElig4: "Passion for technology and eagerness to learn",
    gradGainsTitle: "What You Gain",
    gradGain1: "12-month structured rotation across key departments",
    gradGain2: "Mentorship from senior engineers and managers",
    gradGain3: "Professional certifications sponsored by Proxynet",
    gradGain4: "Competitive graduate salary and benefits",
    gradGain5: "Full-time offer upon successful completion",
    // Internship Programme
    internEyebrow: "Internship Programme",
    internHeading: "Learn by Doing",
    internSub: "Our internship programme gives students and recent graduates hands-on experience working alongside experienced professionals on real client projects.",
    internDeptsTitle: "Available Departments & Duration",
    internDept1: "Network Engineering",
    internDept2: "Cybersecurity",
    internDept3: "Software Development",
    internDept4: "AV & Systems Integration",
    internDept5: "Sales & Business Development",
    internDept6: "IT Support",
    internDuration36: "3–6 months",
    internDuration3: "3 months",
    // Application Form
    applyEyebrow: "Apply Now",
    applyHeading: "Submit Your Application",
    applySub: "Fill out the form below and attach your CV. We will get back to you within 5 business days.",
    applyFieldName: "Full Name",
    applyFieldEmail: "Email Address",
    applyFieldPhone: "Phone Number",
    applyFieldRole: "Role Applying For",
    applyFieldCV: "Upload CV (PDF, DOC, DOCX)",
    applyFieldCVChoose: "Choose file",
    applyFieldNote: "Cover Note (Optional)",
    applyFieldNotePlaceholder: "Tell us why you want to join Proxynet...",
    applySuccessTitle: "Application Submitted!",
    applySuccessText: "Thank you for applying. Our HR team will review your application and get back to you within 5 business days.",

    // Support — MaintenanceRequest form labels
    supportFieldName: "Full Name",
    supportFieldEmail: "Email",
    supportFieldPhone: "Phone",
    supportFieldSite: "Site / Location",
    supportFieldDate: "Preferred Date (for scheduled maintenance)",
    supportFieldIssue: "Issue Description",
    supportFieldIssuePlaceholder: "Describe the issue or maintenance required...",
    // Onboarding resource types & descriptions
    onboardTypePDF: "PDF Downloads",
    onboardTypePDFReports: "PDF & Reports",
    onboardTypeTechDocs: "Technical Docs",
    onboardTypeGuidesVideos: "Guides & Videos",
    onboardTypeForms: "Forms & Templates",
    onboardDatasheetsDesc: "Product sheets, technical specifications, and datasheets for all Proxynet solutions and partner products.",
    onboardWhitepapersDesc: "In-depth solution briefs, technology whitepapers, and thought leadership documents from the Proxynet team.",
    onboardTechGuidesDesc: "Step-by-step technical guides, configuration manuals, and deployment documentation for installed systems.",
    onboardOnboardingDesc: "Everything new clients need to get started — from first contact to go-live, in one place.",
    onboardFormsDesc: "Support request forms, maintenance schedules, SLA agreements, and other client documents for download.",
    // Support FAQs
    supportFaq1q: "How long does onboarding take after a project is delivered?",
    supportFaq1a: "Onboarding typically takes 1–5 business days depending on the complexity of the solution. Your account manager will walk you through the process and provide all necessary documentation.",
    supportFaq2q: "Will I receive training on the systems installed?",
    supportFaq2a: "Yes. All deployments include a handover session and user training. We also provide written guides and video walkthroughs where applicable.",
    supportFaq3q: "What should I do if my system goes down outside business hours?",
    supportFaq3a: "Call our 24/7 support line on +234 703 264 7755 or send a WhatsApp message. Critical issues are escalated immediately regardless of the time.",
    supportFaq4q: "How do I raise a support ticket?",
    supportFaq4a: "Use the ticket form on this page, email info@proxynetgroup.com, or call our support line. All tickets are logged and tracked through to resolution.",
    supportFaq5q: "Can Proxynet support systems not originally installed by you?",
    supportFaq5a: "Yes, in many cases. Contact our support team with details of your existing infrastructure and we will assess whether we can provide support.",
    supportFaq6q: "Are support services included in my contract?",
    supportFaq6a: "This depends on your service agreement. Most clients are on a managed services contract that includes defined support hours. Contact your account manager for details.",
    supportFaq7q: "How do I request an invoice or receipt?",
    supportFaq7a: "Email info@proxynetgroup.com with your company name and the relevant project or service period. We will issue documentation within 2 business days.",
    supportFaq8q: "How do I update my contact details on file?",
    supportFaq8a: "Email info@proxynetgroup.com with your updated details and your account manager will update your records.",
    supportFaq9q: "Who is my dedicated account manager?",
    supportFaq9a: "Your account manager is assigned at the start of your engagement. If you are unsure, email info@proxynetgroup.com and we will connect you with the right person.",

    // FAQs data
    faq1q: "What brands does Proxynet distribute?",
    faq1a: "Proxynet is an authorised distributor for Yealink, VT, Samsung, Logitech, Canon, Dahua, Hikvision, Bosch, Crestron, Extron, and over 30 other leading technology brands. We supply IP phones, AV equipment, security systems, headsets, and IT peripherals across Nigeria and West Africa.",
    faq2q: "Can Proxynet deploy Microsoft Teams Rooms systems?",
    faq2a: "Yes. We are a certified Yealink integrator for Microsoft Teams Rooms. We've deployed MTR systems for the African Union, PIL, and corporate clients across Nigeria and Ghana — including MCore compute units, RoomPanels, WPP30 wireless presentation pods, and PTZ cameras.",
    faq3q: "Does Proxynet offer managed IT services?",
    faq3a: "Yes. Our managed services include 24/7 server monitoring, remote access & VPN solutions, managed security administration, intrusion detection, firewall management, and log analysis. We provide SLA-backed support with fixed monthly costs.",
    faq4q: "How do I become a Proxynet reseller?",
    faq4a: "Fill out the reseller application form at proxynetgroup.com/solutions/distribution. Our Business Development team will contact you within 2 business days to discuss reseller pricing.",
    faq5q: "What is Yealink Sky Sound?",
    faq5a: "Yealink Sky Sound is a ceiling-mounted audio solution designed for Microsoft Teams Rooms. It uses beamforming microphone arrays and premium DSP to deliver crystal-clear audio and intelligent speaker tracking. We supply the CM20 (Standard) and CM50 (Premium) models.",
    faq6q: "Can Proxynet support systems not originally installed by you?",
    faq6a: "Yes, in many cases. Contact our support team at info@proxynetgroup.com with details of your existing infrastructure and we will assess whether we can provide support or managed services.",
    faq7q: "Does Proxynet provide training after installation?",
    faq7a: "Yes. All deployments include a handover session and user training. We provide hands-on demonstrations, written guides, and video walkthroughs where applicable. For complex systems like Teams Rooms or managed services, we include ongoing support and quarterly business reviews.",
    faq8q: "What should I do if my system goes down outside business hours?",
    faq8a: "Call our 24/7 support line on +234 703 264 7755 or send a WhatsApp message to the same number. Critical issues are escalated immediately regardless of the time. Managed services clients have guaranteed response times per their SLA.",
    faq9q: "Which countries does Proxynet operate in?",
    faq9a: "Proxynet has offices in Lagos (HQ), Abuja, Accra (Ghana), Abidjan (Côte d'Ivoire), and Dubai (UAE). We deliver projects across Nigeria, Ghana, Côte d'Ivoire, Ethiopia, and the wider West African region.",
    faq10q: "How long does a typical AV or UC deployment take?",
    faq10a: "Small projects (single Teams Room or a few IP phones) take 1–2 weeks from order to commissioning. Larger deployments (videowalls, multi-site IP telephony, NOC command centres) typically take 4–12 weeks depending on complexity, site readiness, and equipment lead times.",
    // Unified Communications page
    ucPageTitle: "Unified Communications — Proxynet Group",
    ucPageDesc: "Proxynet supplies and deploys Yealink IP phones (T3/T4/T5 series), Sky Sound conference audio, Teams Rooms, and VT professional headsets across Nigeria and West Africa.",
    ucHeroEyebrow: "Managed & Cloud",
    ucHeroTitle: "Unified Communications",
    ucHeroSub: "IP phones, Sky Sound conference audio, Microsoft Teams Rooms, and professional headsets — supplied and deployed by Proxynet. Authorised distributor for Yealink and VT across West Africa.",
    ucCtaPrimary: "Request a Quote",
    ucCtaSecondary: "View Products",
    ucBrandLabel: "Authorised Distributor & Integrator",
    ucCapEyebrow: "What We Do",
    ucCapHeading: "UC Capabilities",
    ucCapSub: "From a single desk phone to a full multi-site Teams Rooms deployment — we handle supply, installation, provisioning, and ongoing support.",
    ucYealinkEyebrow: "IP Phones",
    ucYealinkHeading: "Yealink T-Series",
    ucYealinkSub: "The T3, T4, and T5 series cover every level of the organisation — from entry-level receptions to executive power users — all with HD voice and broad platform compatibility.",
    ucRangeNote: "These are a selection of the Yealink IP phones we distribute. Contact us for the full range and pricing.",
    ucSkySoundEyebrow: "Conference Audio",
    ucSkySoundHeading: "Yealink Sky Sound",
    ucSkySoundSub: "A full-scenario ceiling audio solution designed exclusively for Microsoft Teams Rooms — combining beamforming mic arrays, premium DSP, and intelligent speaker tracking.",
    ucVTEyebrow: "Professional Headsets",
    ucVTHeading: "VT Headset Range",
    ucVTSub: "VT headsets are purpose-built for contact centres and UC environments — noise-cancelling, all-day comfortable, and compatible with all major UC platforms.",
    ucDeploymentsEyebrow: "Track Record",
    ucDeploymentsHeading: "Featured Deployments",
    ucDeploymentsSub: "Selected UC projects delivered across Nigeria and the African continent.",
    ucFormEyebrow: "Get a Quote",
    ucFormHeading: "Request a UC Proposal",
    ucFormSub: "Tell us what you need and we'll send you product recommendations and a detailed proposal within 24 hours.",
    ucFormName: "Full Name",
    ucFormCompany: "Company",
    ucFormEmail: "Email Address",
    ucFormPhone: "Phone Number",
    ucFormInterest: "Area of Interest",
    ucFormInterestDefault: "Select an option",
    ucFormNotes: "Project Details",
    ucFormNotesPh: "Number of users, type of environment (office, contact centre, boardroom), location, and any specific requirements…",
    ucSubmit: "Submit Enquiry",
    ucSuccessTitle: "Enquiry Submitted",
    ucSuccessMsg: "Our UC team will review your requirements and get back to you within 24 hours.",
    // Distribution & Reseller page
    distPageTitle: "Distribution & Reseller Services — Proxynet Group",
    distPageDesc: "Proxynet Group is an authorised distributor for Samsung, Logitech, Canon, Yealink, Dahua, and more. Join our reseller programme and grow your technology business across West Africa.",
    distHeroEyebrow: "Managed & Cloud",
    distHeroTitle: "Distribution & Reseller Services",
    distHeroSub: "Proxynet is an authorised distributor for the world's leading technology brands. We supply IT consultants, system integrators, and resellers across Nigeria and West Africa with genuine products, competitive pricing, and full technical backing.",
    distCtaPrimary: "Become a Reseller",
    distCtaSecondary: "What We Distribute",
    distBrandLabel: "Authorised Distributor",
    distPortfolioEyebrow: "Product Portfolio",
    distPortfolioHeading: "What We Distribute",
    distPortfolioSub: "Our product portfolio spans eight technology categories, supplied through authorised channels with full manufacturer warranty and support.",
    distViewAll: "View All Technology Partners",
    distBenefitsEyebrow: "Why Partner With Us",
    distBenefitsHeading: "Benefits of the Reseller Programme",
    distBenefitsSub: "Everything your business needs to sell technology confidently — supply, support, and growth.",
    distTiersEyebrow: "Partnership Tiers",
    distTiersHeading: "Find the Right Tier for Your Business",
    distTiersSub: "Whether you're just starting in the channel or scaling a serious technology practice, there's a tier built for your stage.",
    distApplyEyebrow: "Reseller Application",
    distApplyHeading: "Become a Reseller",
    distApplySub: "Fill out the form and our Business Development team will be in touch within 2 business days to discuss the right partnership tier for your business.",
    distApplyTalkFirst: "Prefer to talk first?",
    distFormCompany: "Company Name",
    distFormContact: "Contact Person",
    distFormEmail: "Email Address",
    distFormPhone: "Phone Number",
    distFormTerritory: "Territory / Region",
    distFormTier: "Partnership Tier of Interest",
    distFormTierDefault: "Select a tier",
    distFormInterest: "Solution Area of Interest",
    distFormInterestDefault: "Select a solution area",
    distFormMessage: "Tell Us About Your Business",
    distFormMessagePh: "Brief description of your company, current clients, and why you want to partner with Proxynet…",
    distSubmit: "Submit Application",
    distSuccessTitle: "Application Received",
    distSuccessMsg: "Thank you for your interest in the Proxynet Reseller Programme. Our Business Development team will be in touch within 2 business days.",
    // Cloud & Managed Services page
    cmPageTitle: "Cloud & Managed Services — Proxynet Group",
    cmPageDesc: "Proxynet provides managed IT services including remote access solutions, VPN, 24/7 server monitoring, managed security administration, and intrusion detection across Nigeria and West Africa.",
    cmHeroEyebrow: "Managed & Cloud",
    cmHeroTitle: "Cloud & Managed Services",
    cmHeroSub: "24/7 monitoring, managed security, remote access, and infrastructure management — giving you enterprise-grade IT without the overhead of building it in-house.",
    cmCtaPrimary: "Request a Proposal",
    cmCtaSecondary: "Our Services",
    cmServicesEyebrow: "What We Manage",
    cmServicesHeading: "Managed Services",
    cmServicesSub: "From remote access to 24/7 security monitoring — Proxynet takes responsibility for the health, security, and availability of your IT infrastructure.",
    cmBenefitsEyebrow: "Why Managed Services",
    cmBenefitsHeading: "Benefits of Outsourcing IT Management",
    cmBenefitsSub: "Managed services give you predictable costs, expert resources, and round-the-clock support without the complexity of building and maintaining an in-house IT operations team.",
    cmProcessEyebrow: "How It Works",
    cmProcessHeading: "Our Managed Services Process",
    cmProcessSub: "A structured, transparent onboarding and delivery process — from initial assessment to ongoing 24/7 management and monthly reporting.",
    cmFormEyebrow: "Get Started",
    cmFormHeading: "Request a Managed Services Proposal",
    cmFormSub: "Tell us about your infrastructure and requirements, and we'll send you a tailored proposal with scope, SLA terms, and monthly costs within 48 hours.",
    cmFormName: "Full Name",
    cmFormCompany: "Company",
    cmFormEmail: "Email Address",
    cmFormPhone: "Phone Number",
    cmFormService: "Service of Interest",
    cmFormServiceDefault: "Select a service",
    cmFormNotes: "Infrastructure Details",
    cmFormNotesPh: "Number of users, number of servers, current infrastructure (on-premise/cloud), locations, and any specific challenges or requirements…",
    cmSubmit: "Submit Request",
    cmSuccessTitle: "Proposal Request Submitted",
    cmSuccessMsg: "Our managed services team will review your requirements and send you a detailed proposal within 48 hours.",
    // Network Infrastructure page
    netPageTitle: "Network Infrastructure & Systems Integration — Proxynet Group",
    netPageDesc: "Proxynet designs and deploys enterprise LAN, WAN, wireless networks and structured cabling across Nigeria and West Africa.",
    netHeroEyebrow: "AV & Infrastructure",
    netHeroTitle: "Network Infrastructure & Systems Integration",
    netHeroSub: "LAN, WAN, wireless networks and structured cabling — designed, deployed and supported by Proxynet across Nigeria and West Africa.",
    netCtaPrimary: "Request a Quote",
    netCtaSecondary: "Our Capabilities",
    netCapEyebrow: "What We Do",
    netCapHeading: "End-to-End Network Capabilities",
    netCapSub: "From a single office Wi-Fi refresh to a multi-site WAN deployment across six states — we scope, design and deliver.",
    netDeploymentsEyebrow: "Track Record",
    netDeploymentsHeading: "Featured Deployments",
    netDeploymentsSub: "Selected network infrastructure projects delivered across Nigeria and West Africa.",
    netGalleryEyebrow: "Project Gallery",
    netGalleryHeading: "WHO Colleges of Nursing — Site Photos",
    netGallerySub: "Images from the wireless network deployment across nursing colleges in six Nigerian states.",
    netProcessEyebrow: "How We Work",
    netProcessHeading: "Our Delivery Process",
    netProcessSub: "A structured process — from site survey to long-term support — built around zero surprises.",
    netBrandsEyebrow: "Technology Partners",
    netBrandsHeading: "Brands We Deploy",
    netBrandsSub: "Sourced through authorised channels with full manufacturer warranty and support.",
    netFormEyebrow: "Get a Quote",
    netFormHeading: "Request a Network Proposal",
    netFormSub: "Tell us about your project and we'll send you a detailed proposal within 24 hours.",
    netFormName: "Full Name",
    netFormCompany: "Company",
    netFormEmail: "Email Address",
    netFormPhone: "Phone Number",
    netFormType: "Type of Project",
    netFormNotes: "Project Details",
    netSubmit: "Submit Enquiry",
    netSuccessTitle: "Enquiry Submitted",
    netSuccessMsg: "Our network team will review your requirements and get back to you within 24 hours.",
    // Cybersecurity page
    cyberPageTitle: "IT Security & Cybersecurity — Proxynet Group",
    cyberPageDesc: "Proxynet deploys BeyondTrust, INETCO, and Comforte security solutions across Nigeria and West Africa — intrusion detection, PAM, fraud detection, and data security.",
    cyberHeroEyebrow: "AV & Infrastructure",
    cyberHeroTitle: "IT Security & Cybersecurity",
    cyberHeroSub: "Firewalls, intrusion detection, privileged access management, fraud monitoring, and data security — deployed and managed by Proxynet across Nigeria and West Africa.",
    cyberCtaPrimary: "Request a Security Assessment",
    cyberCtaSecondary: "Our Security Partners",
    cyberCapEyebrow: "What We Do",
    cyberCapHeading: "Security Capabilities",
    cyberCapSub: "A layered approach to protecting your organisation — from perimeter firewalls to privileged access management and real-time transaction monitoring.",
    cyberBrandsEyebrow: "Security Technology Partners",
    cyberBrandsHeading: "Best-in-Class Security Platforms",
    cyberBrandsSub: "Proxynet is an authorised deployer for three specialist security platforms — each solving a distinct and critical challenge for enterprise organisations.",
    cyberDeploymentsEyebrow: "Track Record",
    cyberDeploymentsHeading: "Featured Security Deployments",
    cyberDeploymentsSub: "Selected cybersecurity projects delivered across Nigeria and West Africa.",
    cyberProcessEyebrow: "How We Work",
    cyberProcessHeading: "Our Security Delivery Process",
    cyberProcessSub: "A structured, repeatable process — from initial assessment to ongoing managed security services.",
    cyberFormEyebrow: "Get Started",
    cyberFormHeading: "Request a Security Assessment",
    cyberFormSub: "Tell us about your environment and we'll come back with a tailored security proposal within 48 hours.",
    cyberFormName: "Full Name",
    cyberFormCompany: "Company",
    cyberFormEmail: "Email Address",
    cyberFormPhone: "Phone Number",
    cyberFormInterest: "Area of Interest",
    cyberFormNotes: "Project Details",
    cyberSubmit: "Submit Enquiry",
    cyberSuccessTitle: "Enquiry Submitted",
    cyberSuccessMsg: "Our security team will review your requirements and get back to you within 48 hours.",
    
    // New Events - 11 additional events with dates and locations
    gitexKenyaName: "Proxynet @ GITEX Kenya",
    gitexKenyaVenue: "Sarit Expo Centre, Nairobi, Kenya",
    gitexKenyaCategory: "Industry Exhibition",
    gitexKenyaDesc: "Proxynet showcased enterprise solutions at East Africa's premier technology event, connecting with technology leaders from across the continent.",
    gitexKenyaPhotoCaption: "GITEX Kenya Team Photo",
    
    roboXplore2Name: "Robo-Xplore 2.0",
    roboXplore2Venue: "Proxynet HQ, Lagos",
    roboXplore2Category: "Kids Tech Event",
    roboXplore2Date: "May 30, 2026",
    roboXplore2Desc: "The biggest kids tech event in Lagos returns — bigger, bolder, and more exciting. Children aged 5–17 drive real robots, try AI face recognition, build mini-robots, compete in Battle Bots, explore VR, and learn to code.",
    
    zenithTechFairName: "Proxynet @ Zenith Tech Fair 2025",
    zenithTechFairVenue: "TBD",
    zenithTechFairCategory: "Industry Exhibition",
    zenithTechFairDesc: "Proxynet showcased latest technology solutions at the Zenith Tech Fair, demonstrating our commitment to advancing enterprise technology adoption in West Africa.",
    
    beyondTrustEventName: "Proxynet and BeyondTrust Event",
    beyondTrustEventVenue: "TBD",
    beyondTrustEventCategory: "Cybersecurity Partnership",
    beyondTrustEventDate: "November 12, 2025",
    beyondTrustEventDesc: "An exclusive cybersecurity partnership event showcasing BeyondTrust's privileged access management solutions and advanced security technologies.",
    
    huaweiClearanceName: "Huawei Clearance Sales Event",
    huaweiClearanceVenue: "TBD",
    huaweiClearanceCategory: "Sales Event",
    huaweiClearanceDesc: "Special clearance sales event featuring discounted Huawei enterprise solutions, networking equipment, and collaboration tools.",
    
    gitexNigeriaDay1Name: "Proxynet @ GITEX Nigeria 2025 — Day 1",
    gitexNigeriaDay1Venue: "Eko Hotel and Suites, Lagos",
    gitexNigeriaDay1Category: "Industry Exhibition",
    gitexNigeriaDay1Date: "September 3, 2025",
    gitexNigeriaDay1Desc: "Day 1 of Proxynet's participation at GITEX Nigeria 2025, West Africa's largest technology exhibition and conference, held at Eko Hotel and Suites, Lagos.",
    
    proxynetUniluminExpName: "Proxynet-Unilumin Experience",
    proxynetUniluminExpVenue: "Proxynet HQ, Lagos",
    proxynetUniluminExpCategory: "Product Experience",
    proxynetUniluminExpDate: "July 31, 2026",
    proxynetUniluminExpDesc: "An immersive experience showcasing Unilumin's latest LED display technology innovations in collaboration with Proxynet, featuring live demonstrations and technical workshops.",
    
    huaweiS3LaunchName: "Huawei S3 Launch",
    huaweiS3LaunchVenue: "TBD",
    huaweiS3LaunchCategory: "Product Launch",
    huaweiS3LaunchDate: "May 6, 2026",
    huaweiS3LaunchDesc: "Official launch event for the Huawei IdeaHub S3 series, showcasing next-generation collaboration and video conferencing solutions for enterprise clients.",

    huaweiS3AbujaName: "Huawei IdeaHub S3 Abuja Launch",
    huaweiS3AbujaVenue: "Abuja",
    huaweiS3AbujaCategory: "Product Launch",
    huaweiS3AbujaDate: "July 30, 2026",
    huaweiS3AbujaDesc: "Proxynet hosted the official Huawei IdeaHub S3 launch in Abuja, bringing next-generation smart collaboration technology to enterprise clients in Nigeria's capital.",

    yealinkEventName: "Yealink Partner Event",
    yealinkEventVenue: "TBD",
    yealinkEventCategory: "Partner Event",
    yealinkEventDesc: "Proxynet hosted a Yealink partner event showcasing the latest in IP telephony, video conferencing, and unified communications solutions.",

    huawei2025ExpName: "Huawei 2025 Lagos Experience",
    huawei2025ExpVenue: "Four Points by Sheraton, Victoria Island, Lagos",
    huawei2025ExpCategory: "Product Experience",
    huawei2025ExpDate: "March 12, 2025",
    huawei2025ExpDesc: "Experience the Future of Collaboration — Proxynet hosted the Huawei 2025 Lagos Experience, showcasing smart office and smart classroom solutions including the Huawei eKit, IdeaHub S2 and B3, and all-in-one collaboration tools designed for every scenario.",
    
    uniluminLedTrainingName: "Unilumin LED Training",
    uniluminLedTrainingVenue: "TBD",
    uniluminLedTrainingCategory: "Training Workshop",
    uniluminLedTrainingDate: "April 28, 2026",
    uniluminLedTrainingDesc: "Comprehensive technical training on Unilumin LED display solutions, installation best practices, and maintenance procedures for partners and technicians.",

    roboXplore1Name: "Robo-Xplore",
    roboXplore1Venue: "Proxynet HQ, Lagos",
    roboXplore1Category: "Kids Tech Event",
    roboXplore1Date: "April 28, 2026",
    roboXplore1Desc: "Proxynet's first Robo-Xplore event — a hands-on kids technology experience where children explored robotics, coding, AI, and innovation at Proxynet HQ, Lagos.",
  },
  fr: {
    // Nav
    getInTouch: "Nous Contacter",
    search: "Rechercher Proxynet…",
    home: "Accueil",
    about: "À Propos",
    solutions: "Solutions",
    casestudies: "Études de Cas",
    events: "Événements",
    support: "Assistance",
    community: "Communauté",
    blog: "Blog",
    connectivity: "Connectivité",
    infrastructure: "Infrastructure",
    managedServices: "Services Gérés",
    internetServices: "Services Internet",
    vsatSolutions: "Solutions VSAT",
    dataCentre: "Centre de Données",
    cybersecurity: "Cybersécurité",
    itSupport: "Support IT",
    cloudServices: "Services Cloud",
    // Solutions (real)
    solAV: "Solutions AV Professionnelles",
    solCybersecurity: "Sécurité IT & Cybersécurité",
    solNetworking: "Infrastructure Réseau & Intégration",
    solEnterpriseSoftware: "Solutions Logicielles d'Entreprise",
    solUnifiedComms: "Communications Unifiées",
    solCloud: "Cloud & Services Gérés",
    solCAD: "Services CAO",
    solIoT: "IoT & Infrastructure Intelligente",
    solProVMS: "Gestion des Visiteurs — ProVMS",
    solProSkool: "Gestion Scolaire — ProSkool",
    solERP: "Solutions ERP",
    solDistribution: "Distribution & Revendeurs",
    // Software
    softwareSolutions: "Solutions Logicielles",
    customDev: "Développement Logiciel Sur Mesure",
    webApps: "Applications Web",
    mobileApps: "Applications Mobiles",
    erp: "Solutions ERP",
    // Rentals & Billboard
    rentals: "Location d'Équipement AV",
    rentalsDesc: "Équipement AV de classe mondiale pour événements.",
    billboardSolutions: "Affichage & Signalétique Numérique",
    billboardDesc:
      "Déploiements de signalétique numérique intérieure et extérieure.",
    // EdTech
    edtech: "EdTech & Écoles Intelligentes",
    edtechDesc:
      "Solutions d'écoles intelligentes, programmes d'alphabétisation numérique et formations technologiques.",
    // Footer
    footerTagline:
      "Connecter l'avenir du Nigeria avec une infrastructure technologique de classe mondiale et des services gérés.",
    company: "Entreprise",
    aboutUs: "À Propos",
    ourTeam: "Notre Équipe",
    careers: "Carrières",
    newsPress: "Actualités & Presse",
    partners: "Partenaires",
    resources: "Ressources",
    whitepapers: "Livres Blancs & Synthèses de Solutions",
    datasheets: "Fiches Techniques & Fiches Produits",
    onboardingGuides: "Guides d'Intégration",
    technicalGuides: "Guides Techniques",
    clientForms: "Formulaires & Téléchargements Clients",
    supportCentre: "Centre d'Assistance",
    faqs: "FAQ",
    contact: "Contact",
    stayUpdated: "Restez informé",
    emailPlaceholder: "Votre adresse email",
    thankYou: "Merci pour votre inscription!",
    privacyPolicy: "Politique de Confidentialité",
    cookiePolicy: "Politique des Cookies",
    terms: "Conditions Générales",
    copyright: `© ${new Date().getFullYear()} Proxynet Group Ltd. RC 472270. Tous droits réservés.`,
    // Home
    heroEyebrow: "Solutions Technologiques d'Entreprise",
    heroTitle: "Propulser l'Avenir",
    heroTitleAccent: "Numérique de l'Afrique",
    heroSub:
      "Connectivité, infrastructure et services gérés de classe mondiale pour les entreprises à travers l'Afrique — fiables et conçus pour la croissance.",
    exploreSolutions: "Explorer les Solutions",
    // Final CTA
    finalCtaHeading: "Prêt à Transformer Votre Infrastructure IT?",
    finalCtaSub:
      "Parlez à notre équipe et obtenez une solution adaptée à vos besoins.",
    // Projects
    projectsEyebrow: "Projets en Vedette",
    projectsHeading: "Des Réalisations dont Nous Sommes Fiers",
    // Blog
    latestInsights: "Dernières Actualités",
    viewAll: "Voir tous les articles",
    readMore: "Lire la suite",
    // Support CTA
    supportEyebrow: "Succès Client",
    supportHeading: "Nous ne faisons pas que déployer, nous vous accompagnons.",
    supportSub:
      "Notre relation ne s'arrête pas à l'installation. Nous fournissons un support continu, une surveillance et une maintenance pour que votre technologie continue de fonctionner.",
    supportCTALabel: "Visiter notre Centre d'Assistance",
    supportPillar1: "Surveillance et réponse aux incidents 24h/24 7j/7",
    supportPillar2: "Ingénieurs support dédiés disponibles",
    supportPillar3: "Partenariats à long terme, pas des projets ponctuels",
    // Industries
    industriesEyebrow: "Secteurs que Nous Servons",
    industriesHeading:
      "Conçu pour les Secteurs qui Propulsent l'Économie Africaine",
    industriesSub:
      "Nous avons livré des solutions technologiques dans de nombreux secteurs — chacun avec ses propres exigences et défis.",
    indFinancial: "Services Financiers",
    indFinancialDesc:
      "Réseaux sécurisés et infrastructure conforme pour banques et fintechs.",
    indOilGas: "Pétrole & Gaz",
    indOilGasDesc:
      "Connectivité robuste et systèmes de surveillance pour les opérations pétrolières.",
    indManufacturing: "Industrie Manufacturière",
    indManufacturingDesc:
      "Intégration de systèmes et solutions réseau pour les usines et chaînes d'approvisionnement.",
    indTelecoms: "Télécommunications",
    indTelecomsDesc:
      "Réseaux d'entreprise et services gérés pour les opérateurs télécoms.",
    indGovernment: "Gouvernement",
    indGovernmentDesc:
      "Infrastructure IT sécurisée et évolutive pour les agences du secteur public.",
    indEducation: "Éducation",
    indEducationDesc:
      "Réseaux de campus, salles de classe intelligentes et infrastructure e-learning.",
    indHealthcare: "Santé",
    indHealthcareDesc:
      "Connectivité fiable et sécurité des données pour hôpitaux et cliniques.",
    indRetail: "Commerce de Détail",
    indRetailDesc:
      "Affichage dynamique, réseaux PDV et infrastructure numérique pour la vente au détail.",
    // What We Do
    whatWeDoEyebrow: "Ce Que Nous Faisons",
    whatWeDoHeading:
      "Nous Construisons et Gérons l'Infrastructure Technologique",
    whatWeDoClarity:
      "Nous concevons, déployons et supportons les systèmes technologiques qui font fonctionner votre entreprise.",
    justSoYouKnow: "Pour info",
    whatWeDoExplainer:
      "Proxynet est une entreprise de solutions technologiques — pas un organisateur d'événements. Nous aidons les entreprises africaines à construire une infrastructure IT fiable, sécuriser leurs réseaux et développer des logiciels.",
    lfdSignage: "LFD & Affichage Dynamique",
    lfdSignageDesc:
      "Systèmes d'affichage grand format pour salles de réunion et espaces publics.",
    lfdSignageDetail:
      "Nous concevons et installons des solutions d'affichage grand format (LFD) et de signalétique numérique — des configurations de salle de réunion aux réseaux d'affichage multi-zones.",
    systemsIntegration: "Intégration de Systèmes",
    systemsIntegrationDesc:
      "Connecter votre matériel, logiciels et réseaux en un système unifié.",
    systemsIntegrationDetail:
      "Nous intégrons des systèmes technologiques disparates pour qu'ils communiquent et fonctionnent ensemble — réduisant les processus manuels et éliminant les silos de données.",
    enterpriseSoftware: "Développement Logiciel d'Entreprise",
    enterpriseSoftwareDesc:
      "Applications métier personnalisées construites autour de vos flux de travail.",
    enterpriseSoftwareDetail:
      "Des systèmes ERP aux outils internes sur mesure, nous développons des logiciels d'entreprise qui s'adaptent à votre organisation.",
    enterpriseNetworking: "Réseaux d'Entreprise",
    enterpriseNetworkingDesc:
      "Solutions LAN, MAN et WAN conçues pour la performance et la fiabilité.",
    enterpriseNetworkingDetail:
      "Nous concevons et mettons en œuvre une infrastructure réseau évolutive — réseaux locaux, étendus et tout ce qui se trouve entre les deux.",
    networkSecurity: "Sécurité Réseau",
    networkSecurityDesc:
      "Protéger votre infrastructure contre les menaces internes et externes.",
    networkSecurityDetail:
      "Notre équipe de sécurité met en œuvre des pare-feux, des systèmes de détection d'intrusion, des solutions antivirus et des VPN.",
    disasterRecovery: "Reprise après Sinistre",
    disasterRecoveryDesc:
      "Garder vos données en sécurité et votre entreprise opérationnelle en cas de problème.",
    disasterRecoveryDetail:
      "Nous planifions, mettons en œuvre et testons régulièrement des stratégies de reprise après sinistre pour une récupération rapide.",
    enterpriseNetworkingWan: "Accès à Distance & VPN",
    enterpriseNetworkingWanDesc:
      "Connectivité sécurisée pour les équipes travaillant de partout.",
    enterpriseNetworkingWanDetail:
      "Nous mettons en œuvre des solutions d'accès à distance et une infrastructure VPN pour une connexion sécurisée depuis n'importe quel endroit.",
    mobileAppsDesc: "Applications iOS et Android conçues pour les entreprises.",
    mobileAppsDetail:
      "Nous développons des applications mobiles qui étendent vos capacités aux smartphones et tablettes.",
    // Industries CTAs
    findYourSolution: "Trouver Votre Solution",
    contactSales: "Contacter les Ventes",
    // Cookie Banner
    cookieTitle: "Nous utilisons des cookies",
    cookieBody:
      'Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies conformément à notre',
    cookieAnd: "et",
    cookieCompliance:
      "Ce site est conforme au Règlement Nigérian sur la Protection des Données (NDPR) et au RGPD.",
    cookieDecline: "Refuser",
    cookieAccept: "Tout Accepter",
    // Testimonials / Partners placeholders
    testimonialsHeading: "Témoignages",
    partnersHeading: "Nos Partenaires Technologiques",
    partnersEyebrow: "Alliances Technologiques Mondiales",
    partnersSub:
      "Nous sommes distributeurs agréés et partenaires des meilleures marques technologiques mondiales — vous donnant accès aux meilleurs produits, soutenus par l'expertise locale de Proxynet.",
    partnersBecome: "Devenir Revendeur",
    partnersViewAll: "Voir Tous les Partenaires",
    partnersFooterText:
      "Intéressé par la revente de solutions Proxynet ou par un partenariat technologique dans votre région ?",
    // Partner card types (shared)
    partnerTypeAuthorisedPartner: "Partenaire Agréé",
    partnerTypeAuthorisedDistributor: "Distributeur Agréé",
    partnerTypeAuthorisedB2BPartner: "Partenaire B2B Agréé",
    partnerTypeAuthorisedDistributorIntegrator: "Distributeur Agréé & Intégrateur",
    // Partner card descriptions
    partnerDescSamsung: "Écrans grand format, murs vidéo, signalétique intelligente et solutions AV commerciales.",
    partnerDescLogitech: "Collaboration vidéo, périphériques et solutions d'espace de travail d'entreprise.",
    partnerDescMicrosoft: "Logiciels d'entreprise, services cloud et licences Microsoft 365.",
    partnerDescCanon: "Imprimantes, scanners, appareils photo et solutions de gestion documentaire.",
    partnerDescYealink: "Téléphones IP, vidéoconférence et communications unifiées.",
    partnerDescDahua: "CCTV, caméras IP, systèmes NVR et surveillance de sécurité.",
    partnerDescVT: "Casques professionnels et appareils de communication en Afrique de l'Ouest.",
    partnerDescSennheiser: "Solutions audio premium, casques professionnels et appareils de communication.",
    partnerDescMaxhub: "Solutions d'affichage interactif et technologie d'espace de travail collaboratif.",
    partnerDescMakeblock: "Robotique, plateformes IoT et solutions d'automatisation éducative.",
    partnerDescBeyondTrust: "Gestion des accès privilégiés et solutions avancées de cybersécurité.",
    partnerDescInetco: "Infrastructure IT financière et expertise en systèmes de paiement.",
    partnerDescKramer: "Intégration AV professionnelle, commutation et solutions de gestion de signal.",
    partnerDescHuawei: "Infrastructure de télécommunications et solutions de réseau d'entreprise.",
    partnerDescAcebott: "Automatisation industrielle, robotique et solutions alimentées par l'IA.",
    partnerDescIBM: "Infrastructure IT d'entreprise, cloud computing et technologies IA.",
    partnerDescZoom: "Vidéoconférence, webinaires et plateformes de communication unifiée.",
    partnerDescPeerless: "Systèmes de montage AV professionnels et solutions d'installation.",
    partnerDescFireEye: "Cybersécurité avancée, détection des menaces et réponse aux incidents.",
    partnerDescNorden: "Solutions IT et services gérés pour environnements d'entreprise.",
    partnerDescHikvision: "Vidéosurveillance, caméras IP et systèmes de sécurité avancés.",
    partnerDescBosch: "Sécurité des bâtiments, systèmes de communication et solutions intégrées.",
    partnerDescPanasonic: "Imagerie professionnelle, solutions d'affichage et équipements AV.",
    partnerDescCrestron: "Systèmes de contrôle AV intégrés et technologie d'automatisation des bâtiments.",
    partnerDescBelkin: "Réseaux, solutions de chargement et produits de connectivité IT.",
    partnerDescExtron: "Intégration de systèmes AV professionnels et solutions de contrôle.",
    partnerDescBiamp: "Systèmes audio professionnels, conférence et renforcement sonore.",
    partnerDescPolycom: "Vidéoconférence, voix et systèmes de communication unifiée.",
    partnerDescSharp: "Imagerie multifonction, impression et solutions d'affichage.",
    partnerDescAbsen: "Systèmes d'affichage LED et technologie de visualisation.",
    partnerDescUnilumin: "Écrans LED, signalétique numérique et solutions de visualisation.",
    partnerDescSonos: "Systèmes audio premium et technologie d'enceintes intelligentes.",
    partnerDescDLink: "Infrastructure réseau et solutions de connectivité IT.",
    partnerDescHanwha: "Systèmes de surveillance, caméras et infrastructure de sécurité.",
    partnerDescLumens: "Projecteurs professionnels, imagerie et solutions d'affichage.",
    partnerDescZKTeco: "Systèmes de contrôle d'accès, solutions biométriques et dispositifs de sécurité.",
    partnerDescLeyard: "Murs vidéo LED, écrans grand format et solutions de visualisation pour les marchés verticaux exigeants.",
    partnerDescCisco: "Réseaux d'entreprise, commutation, routage et infrastructure de sécurité.",
    partnerDescCleverTouch: "Écrans interactifs, logiciels de collaboration et solutions de salles de classe intelligentes.",
    partnerDescLG: "Écrans commerciaux, grands formats et solutions de signalétique numérique.",
    partnerDescCyxtera: "Infrastructure de centre de données, co-localisation et services de connectivité sécurisée.",
    partnerDescYubico: "Clés de sécurité matérielles et authentification multi-facteurs résistante au phishing.",
    partnerDescNetskope: "Sécurité cloud, SASE et solutions d'accès réseau à confiance zéro.",
    // Partnerships page
    partnershipsNav: "Partenariats",
    partnershipsPageTitle:
      "Partenariats — Soutenu par les Meilleures Marques Technologiques",
    partnershipsPageDesc:
      "Proxynet Group est distributeur agréé et partenaire de Samsung, Logitech, Microsoft, Canon, Yealink, Dahua et plus. Rejoignez notre programme revendeur.",
    partnershipsEyebrow: "Alliances Technologiques & Programme Revendeur",
    partnershipsHeroTitle:
      "Soutenu par les Meilleures Marques Technologiques Mondiales",
    partnershipsHeroSub:
      "Nous sommes distributeurs agréés et partenaires certifiés des meilleures marques technologiques mondiales. Rejoignez notre réseau de revendeurs et développez votre activité avec Proxynet.",
    partnershipsCta1: "Devenir Revendeur",
    partnershipsCta2: "Voir Nos Partenaires",
    partnershipsLogosEyebrow: "Nos Partenaires Technologiques",
    partnershipsLogosHeading: "Marques Mondiales. Expertise Locale.",
    partnershipsLogosSub:
      "Nous détenons le statut de distributeur agréé et de partenaire certifié auprès des principales marques technologiques mondiales.",
    partnershipsDistributor: "Distributeur Agréé",
    partnershipsResellerEyebrow: "Programme Revendeur",
    partnershipsResellerHeading: "Développez Votre Activité avec Proxynet",
    partnershipsResellerSub:
      "Notre programme revendeur donne aux entreprises technologiques, consultants IT et intégrateurs de systèmes accès au portefeuille complet de produits Proxynet.",
    partnershipsApplyEyebrow: "Candidature Revendeur",
    partnershipsApplyHeading: "Postuler pour Devenir Revendeur",
    partnershipsApplySub:
      "Remplissez le formulaire et notre équipe de développement commercial vous contactera dans les 2 jours ouvrables.",
    partnershipsApplyBullet1:
      "Accès au catalogue complet Proxynet aux prix revendeur",
    partnershipsApplyBullet2:
      "Formation commerciale, support technique et ressources co-marketing",
    partnershipsApplyBullet3:
      "Responsable de compte dédié et revues trimestrielles",
    partnershipsFieldCompany: "Nom de l'Entreprise",
    partnershipsFieldContact: "Personne de Contact",
    partnershipsFieldTerritory: "Territoire / Région",
    partnershipsFieldInterest: "Domaine de Solution d'Intérêt",
    partnershipsFieldInterestDefault: "Sélectionnez un domaine",
    partnershipsFieldMessage: "Parlez-nous de Votre Entreprise",
    partnershipsFieldMessagePlaceholder:
      "Brève description de votre entreprise, clients actuels et pourquoi vous souhaitez vous associer à Proxynet…",
    partnershipsSuccessTitle: "Candidature Reçue",
    partnershipsSuccessMsg:
      "Merci pour votre intérêt. Notre équipe de développement commercial vous contactera dans les 2 jours ouvrables.",
    // Featured Projects CTAs
    startAProject: "Démarrer un Projet",
    viewCaseStudies: "Voir les Études de Cas",
    // About CTA
    readyToWorkWithUs: "Prêt à travailler avec nous ?",
    aboutCtaSub:
      "Parlez à notre équipe de vos besoins technologiques — nous construirons une solution autour de votre entreprise.",
    contactUs: "Nous Contacter",
    viewOurSolutions: "Voir Nos Solutions",
    // Contact page
    contactNav: "Contact",
    contactPageTitle: "Contactez-Nous — Parlons Technologie",
    contactPageDesc:
      "Contactez Proxynet Group. Rejoignez nos équipes commerciales, support, partenariats ou carrières. Bureaux à Lagos, Abuja, Accra, Abidjan et Dubaï.",
    contactHeroTitle: "Parlons Technologie",
    contactHeroSub:
      "Que vous soyez prêt à démarrer un projet, que vous ayez besoin d'un support technique, ou que vous souhaitiez simplement explorer les possibilités — notre équipe est prête à vous aider.",
    contactCtaPrimary: "Envoyer une Demande",
    contactCtaSecondary: "Appelez-Nous",
    contactResponseTime:
      "Nous répondons à toutes les demandes dans les 4 heures ouvrables. Les problèmes de support critiques sont traités 24h/24.",
    contactFormEyebrow: "Envoyer un Message",
    contactFormHeading: "Comment Pouvons-Nous Vous Aider ?",
    contactSuccessTitle: "Demande Envoyée",
    contactSuccessMsg:
      "Merci de nous avoir contactés. Notre équipe vous répondra dans les 4 heures ouvrables.",
    contactFieldName: "Nom Complet",
    contactFieldCompany: "Entreprise",
    contactFieldEmail: "Adresse Email",
    contactFieldPhone: "Numéro de Téléphone",
    contactFieldType: "Type de Demande",
    contactFieldTypeDefault: "Sélectionnez le type de demande",
    contactTypeSales: "Commercial",
    contactTypeSupport: "Support Technique",
    contactTypePartnership: "Partenariats",
    contactTypeCareers: "Carrières",
    contactTypeGeneral: "Général",
    contactFieldMessage: "Message",
    contactFieldMessagePlaceholder:
      "Parlez-nous de votre projet, défi ou question…",
    contactSubmit: "Envoyer la Demande",
    contactDirectEyebrow: "Contacts Directs",
    contactDirectHeading: "Rejoindre la Bonne Équipe",
    contactPhone: "Ligne Principale",
    contactPhoneAlt: "Ligne Secondaire",
    contactEmail: "Email",
    contactFollowUs: "Suivez-Nous",
    // Locations
    contactThisOffice: "Contacter ce Bureau",
    viewOnMap: "Voir sur la Carte",
    // Not Found
    pageNotFound: "Page Introuvable",
    pageNotFoundSub:
      "La page que vous recherchez n'existe pas ou a été déplacée. Laissez-nous vous remettre sur la bonne voie.",
    backToHomepage: "Retour à l'Accueil",
    goBack: "Retour",
    // Careers
    viewOpenRoles: "Voir les Postes Ouverts",
    learnAboutCulture: "Découvrir Notre Culture",
    applyForGraduate: "Postuler au Programme Diplômé",
    applyForInternship: "Postuler au Stage",
    apply: "Postuler",
    submitApplication: "Soumettre la Candidature",
    // Careers hero
    careersHeroTitle: "Construire l'Avenir de la Technologie en Afrique de l'Ouest",
    careersHeroSub: "Rejoignez une équipe d'ingénieurs, d'innovateurs et de résolveurs de problèmes qui livrent une infrastructure technologique de classe mondiale à travers l'Afrique.",
    // Life at Proxynet
    lifeEyebrow: "La Vie chez Proxynet",
    lifeHeading: "Pourquoi les Gens Adorent Travailler Ici",
    lifeSub: "Nous construisons une technologie qui compte — et nous le faisons avec une équipe qui se soucie vraiment les uns des autres et du travail.",
    lifePerk1Title: "Travail Porteur de Sens",
    lifePerk1Desc: "Chaque projet sur lequel vous travaillez impacte directement la façon dont les entreprises à travers l'Afrique fonctionnent et se développent.",
    lifePerk2Title: "Croissance Rapide",
    lifePerk2Desc: "Nous avançons vite. Vous prendrez de vraies responsabilités dès le premier jour et évoluerez plus rapidement qu'ailleurs.",
    lifePerk3Title: "Culture Collaborative",
    lifePerk3Desc: "Pas de silos. Nous travaillons comme une seule équipe — partageant les connaissances, résolvant les problèmes ensemble et célébrant les victoires.",
    lifePerk4Title: "Développement de Carrière",
    lifePerk4Desc: "Des parcours d'apprentissage structurés, des certifications et du mentorat pour vous aider à atteindre votre plein potentiel.",
    // Graduate Programme
    gradEyebrow: "Programme Diplômé",
    gradHeading: "Commencez Votre Carrière au Sommet",
    gradSub: "Notre Programme Diplômé est conçu pour propulser les jeunes talents exceptionnels vers des carrières technologiques. Vous ferez des rotations entre départements, travaillerez sur des projets réels et serez encadré par des experts du secteur.",
    gradEligibilityHeading: "Éligibilité",
    gradGainsHeading: "Ce Que Vous Gagnez",
    gradEligibility1: "Diplômé récent (dans les 2 ans) en Informatique, Ingénierie, IT ou domaine connexe",
    gradEligibility2: "Minimum Licence avec mention Bien (2:1) ou équivalent",
    gradEligibility3: "Solides compétences analytiques et de résolution de problèmes",
    gradEligibility4: "Passion pour la technologie et désir d'apprendre",
    gradGain1: "Rotation structurée de 12 mois dans les départements clés",
    gradGain2: "Mentorat par des ingénieurs seniors et des managers",
    gradGain3: "Certifications professionnelles sponsorisées par Proxynet",
    gradGain4: "Salaire de diplômé compétitif et avantages sociaux",
    gradGain5: "Offre à temps plein à la fin du programme réussi",
    // Internship Programme
    internEyebrow: "Programme de Stage",
    internHeading: "Apprendre par la Pratique",
    internSub: "Notre programme de stage offre aux étudiants et jeunes diplômés une expérience pratique en travaillant aux côtés de professionnels expérimentés sur de vrais projets clients.",
    internDeptsHeading: "Départements Disponibles & Durée",
    internDept1Name: "Ingénierie Réseau",
    internDept2Name: "Cybersécurité",
    internDept3Name: "Développement Logiciel",
    internDept4Name: "AV & Intégration de Systèmes",
    internDept5Name: "Ventes & Développement Commercial",
    internDept6Name: "Support IT",
    internDuration1: "3–6 mois",
    internDuration2: "3–6 mois",
    internDuration3: "3–6 mois",
    internDuration4: "3–6 mois",
    internDuration5: "3 mois",
    internDuration6: "3 mois",
    // Open Roles
    openRolesEyebrow: "Postes Ouverts",
    openRolesHeading: "Opportunités Actuelles",
    openRolesPostedLabel: "Publié le",
    openRolesFullTime: "Temps plein",
    openRole1Title: "Ingénieur Réseau",
    openRole1Dept: "Ingénierie",
    openRole2Title: "Analyste en Cybersécurité",
    openRole2Dept: "Sécurité",
    openRole3Title: "Technicien Systèmes AV",
    openRole3Dept: "Ingénierie",
    openRole4Title: "Développeur Logiciel",
    openRole4Dept: "Logiciel",
    openRole5Title: "Spécialiste Support IT",
    openRole5Dept: "Support",
    openRole6Title: "Chargé(e) de Ventes",
    openRole6Dept: "Ventes",
    // Application Form
    appFormEyebrow: "Postuler Maintenant",
    appFormHeading: "Soumettre Votre Candidature",
    appFormSub: "Remplissez le formulaire ci-dessous et joignez votre CV. Nous vous répondrons dans les 5 jours ouvrables.",
    appFormName: "Nom Complet",
    appFormEmail: "Adresse E-mail",
    appFormPhone: "Numéro de Téléphone",
    appFormRole: "Poste Souhaité",
    appFormCV: "Télécharger le CV (PDF, DOC, DOCX)",
    appFormCVChoose: "Choisir un fichier",
    appFormNote: "Lettre de Motivation (Facultatif)",
    appFormNotePlaceholder: "Dites-nous pourquoi vous souhaitez rejoindre Proxynet...",
    appFormSuccessTitle: "Candidature Soumise !",
    appFormSuccessMsg: "Merci pour votre candidature. Notre équipe RH examinera votre dossier et vous répondra dans les 5 jours ouvrables.",
    // Support
    raiseATicket: "Soumettre un Ticket",
    callSupportNow: "Appeler le Support",
    requestAccess: "Demander l'Accès",
    submitRequest: "Soumettre la Demande",
    // Blog
    readLatestPosts: "Lire les Derniers Articles",
    subscribeForUpdates: "S'abonner aux Mises à Jour",
    subscribe: "S'abonner",
    // EdTech
    partnerWithUs: "Devenir Partenaire",
    viewProgrammes: "Voir les Programmes",
    visitEdTechWebsite: "Visiter le Site EdTech",
    submitEnquiry: "Soumettre la Demande",
    // EdTech page content
    edtechDivision: "Division EdTech de Proxynet",
    edtechHeroTitle: "Former la Prochaine Génération de Talents Technologiques",
    edtechHeroSub: "Nous collaborons avec des écoles, universités et institutions à travers l'Afrique de l'Ouest pour déployer des solutions de salles de classe intelligentes, des programmes d'alphabétisation numérique et une infrastructure ICT.",
    edtechOverviewEyebrow: "Ce Que Nous Faisons",
    edtechOverviewHeading: "Solutions Scolaires Intelligentes pour l'Éducation Moderne",
    edtechOverviewBody1: "Proxynet EdTech est la division éducation technologique de Proxynet Group. Nous travaillons avec des écoles primaires, secondaires, des universités et des agences gouvernementales d'éducation pour transformer les environnements d'apprentissage grâce à la technologie.",
    edtechOverviewBody2: "De l'installation d'écrans interactifs dans les salles de classe à la construction de réseaux Wi-Fi à l'échelle du campus et à l'organisation d'ateliers d'alphabétisation numérique — nous fournissons des solutions technologiques de bout en bout conçues spécifiquement pour l'éducation.",
    edtechProgrammesEyebrow: "Programmes de Formation",
    edtechProgrammesHeading: "Ce Que Nous Proposons",
    edtechInstitutionsEyebrow: "Institutions Partenaires",
    edtechInstitutionsHeading: "Écoles & Institutions avec Lesquelles Nous Avons Travaillé",
    edtechGalleryEyebrow: "Galerie d'Événements",
    edtechGalleryHeading: "L'EdTech en Action",
    edtechPartnerEyebrow: "Devenez Partenaire",
    edtechPartnerHeading: "Apportez l'EdTech à Votre Institution",
    edtechPartnerSub: "Remplissez le formulaire et notre équipe EdTech vous contactera dans les 2 jours ouvrables.",
    edtechSuccessTitle: "Demande Soumise",
    edtechSuccessMsg: "Notre équipe EdTech vous contactera dans les 2 jours ouvrables.",
    edtechFieldName: "Nom Complet",
    edtechFieldInstitution: "Nom de l'Institution",
    edtechFieldRole: "Votre Rôle",
    edtechFieldEmail: "Email",
    edtechFieldPhone: "Téléphone",
    edtechFieldInterest: "Domaine d'Intérêt",
    edtechFieldInterestDefault: "Sélectionnez un domaine",
    edtechFieldNotes: "Notes Supplémentaires",
    edtechInterest1: "Configuration de Salle de Classe Intelligente",
    edtechInterest2: "Infrastructure Réseau Scolaire",
    edtechInterest3: "Configuration de Salle Informatique",
    edtechInterest4: "Formation en Alphabétisation Numérique",
    edtechInterest5: "Formation Technologique des Enseignants",
    edtechInterest6: "Programmes de Certification ICT",
    edtechInterest7: "Autre",
    // Programme names & descriptions
    progWebDevName: "Développement Web",
    progWebDevDuration: "4-12 semaines",
    progWebDevAudience: "Étudiants & Jeunes Professionnels",
    progWebDevFormat: "Cours + pratique",
    progWebDevDesc: "Développement web full-stack couvrant HTML, CSS, JavaScript et les frameworks modernes. Les étudiants construisent de vrais projets dès le premier jour.",
    progWebDesignName: "Design Web",
    progWebDesignDuration: "2-6 semaines",
    progWebDesignAudience: "Étudiants & Créatifs",
    progWebDesignFormat: "Cours + pratique",
    progWebDesignDesc: "Principes UI/UX, maquettage, prototypage et design visuel pour le web avec des outils professionnels.",
    progDigLitName: "Alphabétisation Numérique",
    progDigLitDuration: "1-5 jours",
    progDigLitAudience: "Étudiants & Enseignants",
    progDigLitFormat: "Cours + pratique",
    progDigLitDesc: "Compétences numériques pratiques couvrant les bases informatiques, la sécurité sur internet, les outils de productivité et la navigation dans le monde numérique.",
    progGraphicsName: "Design Graphique",
    progGraphicsDuration: "2-8 semaines",
    progGraphicsAudience: "Étudiants & Créatifs",
    progGraphicsFormat: "Cours + pratique",
    progGraphicsDesc: "Communication visuelle, image de marque, typographie et design avec des outils professionnels. Des logos aux supports marketing.",
    progRoboticsName: "Robotique",
    progRoboticsDuration: "4-8 semaines",
    progRoboticsAudience: "Primaire, Secondaire & Supérieur",
    progRoboticsFormat: "Atelier pratique",
    progRoboticsDesc: "Introduction à la robotique, l'électronique et la programmation à travers la construction et la programmation de vrais robots. Axé STEM et basé sur des projets.",
    progAIName: "Intelligence Artificielle",
    progAIDuration: "4-12 semaines",
    progAIAudience: "Secondaire & Supérieur",
    progAIFormat: "Cours + pratique",
    progAIDesc: "Fondements de l'IA, concepts d'apprentissage automatique et applications pratiques. Les étudiants explorent comment l'IA transforme les industries.",
    progIoTName: "Internet des Objets (IoT)",
    progIoTDuration: "4-8 semaines",
    progIoTAudience: "Secondaire & Supérieur",
    progIoTFormat: "Atelier pratique",
    progIoTDesc: "Connexion d'appareils, capteurs et systèmes. Les étudiants construisent des projets IoT qui résolvent des problèmes réels avec du matériel et du code.",
    progDataSciName: "Science des Données",
    progDataSciDuration: "6-12 semaines",
    progDataSciAudience: "Supérieur & Professionnels",
    progDataSciFormat: "Cours + pratique",
    progDataSciDesc: "Collecte, nettoyage, analyse et visualisation de données. Couvre Python, les statistiques et des ensembles de données réels des marchés africains.",
    progDataAnalyticsName: "Analyse de Données",
    progDataAnalyticsDuration: "4-8 semaines",
    progDataAnalyticsAudience: "Étudiants & Professionnels",
    progDataAnalyticsFormat: "Cours + pratique",
    progDataAnalyticsDesc: "Transformer les données brutes en informations exploitables avec des outils comme Excel, Power BI et SQL. Programme pratique axé sur les affaires.",
    // Events page content
    eventsNav: "Événements",
    eventsEyebrow: "Présence Industrielle & Engagement Communautaire",
    eventsHeroTitle: "Où la Technologie Rencontre la Communauté",
    eventsHeroSub: "Des lancements de produits aux sommets de partenaires — Proxynet est au centre de la conversation technologique en Afrique de l'Ouest.",
    eventsRegisterNext: "S'inscrire au Prochain Événement",
    eventsViewGallery: "Voir la Galerie",
    eventsFeaturedEyebrow: "Événements en Vedette",
    eventsFeaturedHeading: "Faits Saillants Récents",
    eventsGalleryEyebrow: "Galerie Photos",
    eventsGalleryHeading: "Tous les Événements",
    eventsFilterCategory: "Catégorie",
    eventsFilterYear: "Année",
    eventsClear: "Effacer",
    eventsUpcomingEyebrow: "À Venir",
    eventsUpcomingHeading: "Événements à Venir",
    eventsRegisterInterest: "Manifester son Intérêt",
    eventsCtaEyebrow: "Restez Informé",
    eventsCtaHeading: "Ne Manquez Jamais un Événement Proxynet",
    eventsCtaSub: "Abonnez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux pour être le premier informé des événements à venir, des lancements de produits et des sommets de partenaires.",
    eventsCtaPrimary: "S'inscrire au Prochain Événement",
    eventsCtaSecondary: "Suivre sur LinkedIn",
    eventsViewGallery: "Voir la Galerie",
    eventsPhotos: "photos",
    eventsComingSoon: "Bientôt Disponible",
    // Event data — past
    event1Name: "Session Petit-Déjeuner avec Proxynet & Comforte",
    event1Venue: "Radisson Blue, Lagos",
    event1Category: "Événement Partenaire",
    event1Desc: "Une session petit-déjeuner exclusive réunissant des responsables technologiques d'entreprise pour discuter des solutions de sécurité des données et de conformité avec Comforte AG.",
    event1PhotoCaption: "Session Petit-Déjeuner avec Proxynet & Comforte au Radisson Blue",
    event2Name: "Expérience Huawei Port Harcourt",
    event2Venue: "Port Harcourt, Rivers State",
    event2Category: "Événement Partenaire",
    event2Desc: "Proxynet a apporté l'expérience technologique Huawei à Port Harcourt, présentant des solutions d'entreprise pour les secteurs pétrolier, gazier et manufacturier.",
    event2PhotoCaption: "Expérience Huawei Port Harcourt",
    event3Name: "Unilumin Lagos Experience 2026",
    event3Venue: "Marriot Hotel, 122 Joel Ogunnaike Street, Ikeja GRA, Lagos",
    event3Category: "Lancement de Produit",
    event3Theme: "Clarté Rencontre Performance",
    event3Date: "19 Mar 2026 · 10h00 WAT",
    event3Desc: "Une vitrine exclusive des technologies d'affichage LED haute performance d'Unilumin — des salles de réunion d'entreprise et salles de contrôle aux centres commerciaux, lieux de culte, studios de diffusion et affichages architecturaux extérieurs. Proxynet est le Distributeur Officiel Unilumin au Nigeria.",
    // Event data — upcoming
    upcoming1Name: "GITEX Kenya 2026",
    upcoming1Date: "Bientôt",
    upcoming1Venue: "Nairobi, Kenya",
    upcoming1Category: "Exposition Sectorielle",
    upcoming1Desc: "Proxynet Group exposera au GITEX Kenya — l'événement technologique phare d'Afrique de l'Est. Rencontrez notre équipe, explorez nos solutions et connectez-vous avec des leaders technologiques du continent.",
    upcoming2Name: "Robo-Xplore 2.0",
    upcoming2Date: "30 mai 2026 · 10h00 – 14h00",
    upcoming2Venue: "Nesama House, 5B Adedeji Close, Opebi Rd, Ikeja, Lagos",
    upcoming2Category: "Événement Tech Enfants",
    upcoming2Audience: "Enfants de 5 à 17 ans",
    upcoming2Desc: "Le plus grand événement tech pour enfants de Lagos est de retour — plus grand, plus audacieux et plus passionnant. Les enfants de 5 à 17 ans pilotent de vrais robots, essaient la reconnaissance faciale par IA, construisent des mini-robots, s'affrontent en Battle Bots, explorent la VR et apprennent à coder. Frais d'entrée à partir de ₦5 000.",
    // Success Stories
    edtechStoriesEyebrow: "Témoignages de Réussite",
    edtechStoriesHeading: "L'Avis des Étudiants et des Institutions",
    edtechStoriesSub: "Témoignages vidéo d'étudiants et d'institutions — spécifiquement demandés dans notre enquête interne.",
    edtechStoriesComingSoon: "Témoignages vidéo à venir",
    edtechStoriesComingSoonBody: "Nous collectons des témoignages vidéo auprès des étudiants et des institutions partenaires. Revenez bientôt.",
    // Billboard Solutions page
    bbEyebrow: "ProBoard par Proxynet",
    bbHeroTitle: "Rendez Votre Message Inoubliable",
    bbHeroSub:
      "Signalétique numérique intérieure et extérieure, murs LED et déploiements de panneaux publicitaires qui captent l'attention et livrent des résultats.",
    bbUseCasesEyebrow: "Cas d'Usage",
    bbUseCasesHeading: "Où Nous Déployons",
    bbRetailName: "Commerce de Détail",
    bbRetailDesc:
      "Signalétique numérique en magasin, vitrines et écrans promotionnels qui stimulent les ventes.",
    bbCorporateName: "Halls d'Entreprise",
    bbCorporateDesc:
      "Murs LED impressionnants et systèmes d'affichage pour les espaces d'accueil et les salles de réunion.",
    bbEventsName: "Événements & Activations",
    bbEventsDesc:
      "Murs LED à fort impact et écrans extérieurs pour événements, concerts et activations de marque.",
    bbOutdoorAdName: "Publicité Extérieure",
    bbOutdoorAdDesc:
      "Panneaux LED extérieurs résistants aux intempéries pour la publicité en bord de route et dans les zones à fort trafic.",
    bbSpecsEyebrow: "Spécifications Techniques",
    bbSpecsHeading: "Conçu pour Performer",
    bbOutdoorEyebrow: "Réseau Publicitaire Extérieur",
    bbOutdoorHeading: "Emplacements des Panneaux Proxynet",
    bbOutdoorSub:
      "Proxynet Communications propose des solutions de publicité extérieure à travers un réseau de panneaux numériques et statiques stratégiquement situés dans des zones à fort trafic et haute visibilité au Nigeria.",
    bbLagosDesc:
      "Atteignant les professionnels, les navetteurs et les décideurs d'entreprise dans l'un des corridors commerciaux les plus fréquentés du Nigeria.",
    bbEnuguDesc:
      "Connectant les marques avec un public régional croissant dans le Sud-Est.",
    bbPHDesc:
      "Captant l'attention des dirigeants d'entreprise et des résidents dans le dynamique hub du Sud-Sud.",
    bbOutdoorCta: "Annoncez sur Nos Panneaux",
    bbFormEyebrow: "Obtenir un Devis",
    bbFormHeading: "Demander un Devis",
    bbFormSub:
      "Parlez-nous de votre projet et nous vous enverrons une proposition détaillée dans les 24 heures.",
    bbFieldLocation: "Localisation",
    bbFieldUseCase: "Cas d'Usage",
    bbFieldUseCaseDefault: "Sélectionnez un cas d'usage",
    bbFieldDetails: "Détails du Projet",
    bbFieldDetailsPlaceholder:
      "Taille de l'écran, quantité, intérieur/extérieur, calendrier...",
    bbSuccessTitle: "Demande de Devis Soumise",
    bbSuccessMsg:
      "Notre équipe commerciale vous enverra une proposition détaillée dans les 24 heures.",
    requestAQuote: "Demander un Devis",
    requestARental: "Demander une Location",
    viewEquipment: "Voir l'Équipement",
    // Rentals page
    rentalsHeroTitle: "Équipement AV de Classe Mondiale pour Vos Événements",
    rentalsHeroSub: "Des configurations de salle de réunion intimes aux événements extérieurs à grande échelle, nous fournissons, installons et opérons des équipements AV professionnels au Nigeria et en Afrique de l'Ouest.",
    rentalsEquipEyebrow: "Catalogue d'Équipements",
    rentalsEquipHeading: "Ce Que Nous Offrons",
    rentalsEquip1Name: "Murs Vidéo",
    rentalsEquip1Specs: "Panneaux LED modulaires, configurations 2x2 à 6x4, intérieur/extérieur",
    rentalsEquip1Uses: "Conférences, lancements de produits, expositions, concerts",
    rentalsEquip2Name: "Écrans Simples",
    rentalsEquip2Specs: "Écrans commerciaux 43 à 98 pouces, résolution 4K, portrait/paysage",
    rentalsEquip2Uses: "Présentations, orientation, activations de marque, commerce de détail",
    rentalsEquip3Name: "Écrans Tactiles",
    rentalsEquip3Specs: "Écrans tactiles interactifs 55 à 86 pouces, multi-touch, Windows/Android",
    rentalsEquip3Uses: "Kiosques interactifs, démonstrations de produits, sessions de formation",
    rentalsEquip4Name: "Systèmes Audio",
    rentalsEquip4Specs: "Systèmes line array, sonorisation, microphones sans fil, mixeurs",
    rentalsEquip4Uses: "Événements d'entreprise, activations extérieures, conférences",
    rentalsSpecsLabel: "Spécifications :",
    rentalsUseCasesLabel: "Cas d'Usage :",
    rentalsGalleryEyebrow: "Galerie Événements",
    rentalsGalleryHeading: "Déploiements Passés",
    rentalsGalleryNote: "Photos bientôt disponibles, revenez après notre prochain événement.",
    rentalsHowEyebrow: "Comment Ça Marche",
    rentalsHowHeading: "Simple. Rapide. Professionnel.",
    rentalsStep1Title: "Demande",
    rentalsStep1Desc: "Parlez-nous de votre événement, date, lieu, taille du public et équipement nécessaire.",
    rentalsStep2Title: "Nous Configurons",
    rentalsStep2Desc: "Notre équipe conçoit la configuration AV optimale pour votre événement et vous envoie une proposition détaillée.",
    rentalsStep3Title: "Nous Déployons & Supportons",
    rentalsStep3Desc: "Nous livrons, installons et opérons l'équipement sur site. Nous restons jusqu'à la fin de l'événement.",
    rentalsFormEyebrow: "Demande de Location",
    rentalsFormHeading: "Demander une Location",
    rentalsFormSub: "Remplissez le formulaire et notre équipe opérationnelle vous répondra dans les 4 heures.",
    rentalsFieldName: "Nom Complet",
    rentalsFieldCompany: "Entreprise",
    rentalsFieldDate: "Date de l'Événement",
    rentalsFieldLocation: "Lieu de l'Événement",
    rentalsFieldEquipment: "Équipement Nécessaire",
    rentalsFieldEquipmentPlaceholder: "ex. mur vidéo 2x2, sonorisation, 2x écrans tactiles",
    rentalsFieldNotes: "Notes Supplémentaires",
    rentalsSuccessTitle: "Demande Soumise",
    rentalsSuccessMsg: "Nous vous contacterons dans les 4 heures pour discuter de vos besoins.",
    // Navbar solutions mega menu categories
    catAVInfra: "AV & Infrastructure",
    catSoftwareApps: "Logiciels & Applications",
    catManagedCloud: "Géré & Cloud",
    catSpecialist: "Spécialiste",
    // Featured Projects content
    proj1Solution: "Solution NOC 15 Écrans",
    proj1Category: "NOC & Centre de Commandement",
    proj1Outcome:
      "Déploiement d'un centre d'opérations réseau de 15 écrans permettant une surveillance en temps réel de l'infrastructure UBA.",
    proj2Solution: "Videowall 4x2 46 Pouces avec Solution de Surveillance NOC",
    proj2Category: "Videowall & NOC",
    proj2Outcome:
      "Installation d'un videowall haute résolution de 8 panneaux pour la surveillance centralisée du réseau et de la sécurité.",
    proj3Solution:
      "Solution Centre de Commandement pour la Surveillance des Liens et de l'Infrastructure",
    proj3Category: "Conception, Déploiement & Support",
    proj3Outcome:
      "Solution de centre de commandement de bout en bout pour la surveillance des liens et de l'infrastructure sur le campus universitaire.",
    proj4Solution: "Solution NOC 32 Écrans",
    proj4Category: "NOC & Centre de Commandement",
    proj4Outcome:
      "Déploiement d'un centre d'opérations réseau de 32 écrans pour Access Bank DIG, permettant une surveillance complète de l'infrastructure.",
    proj5Solution: "Videowall NOC avec Support de Sol Peerless",
    proj5Category: "Videowall & NOC",
    proj5Outcome:
      "Installation d'un videowall NOC haute résolution avec support de sol Peerless au siège de FCMB Lagos.",
    proj6Solution:
      "Solution Centre de Commandement pour la Surveillance de l'Infrastructure",
    proj6Category: "Conception, Déploiement & Support",
    proj6Outcome:
      "Déploiement d'une solution de centre de commandement pour la surveillance de l'infrastructure dans les bureaux d'ePROCESS à Accra, Ghana.",
    proj7Solution: "Solution Logitech VC Multi-Sites",
    proj7Category: "AV & Collaboration",
    proj7Outcome:
      "Mise en œuvre d'une solution de vidéoconférence Logitech multi-sites à Lagos, Bonny, Port Harcourt et Abuja.",
    proj8Solution: "Installation Videowall Studio & Caméras 4K",
    proj8Category: "Diffusion & AV",
    proj8Outcome:
      "Réinstallation des écrans videowall et installation de caméras Canon 4K pour le studio de la Ghana Broadcasting Corporation.",
    proj9Solution: "2 Unités de Videowall 3x2 + Solution Audio & Sécurité",
    proj9Category: "Videowall, Audio & CCTV",
    proj9Outcome:
      "Déploiement de 2 unités de videowall 3x2 avec solution audio complète, système de discussion Bosch et CCTV pour l'Assemblée de l'État de Lagos.",
    proj10Solution: "Déploiement de Gestion de Contenu Numérique & Signalétique",
    proj10Category: "Gestion de Contenu Numérique & Signalétique",
    proj10Outcome:
      "Remplacement de 8 boîtiers Android défectueux par de nouveaux H96 et rechargement du CMS Reels sur tous les écrans à Sundry Foods GRA Junction, Port Harcourt — restauration de l'affichage de contenu de marque sur chaque écran.",
    proj11Solution: "Déploiement de 10 × Huawei IdeaHub 86\"",
    proj11Category: "Vidéoconférence & Collaboration",
    proj11Outcome:
      "10 unités Huawei IdeaHub 86\" installées et mises en service dans les bureaux de PwC Nigeria. Salles couvertes : 6e étage (8 personnes) et 8e étage (12 personnes × 2, 8 personnes × 1).",
    proj12Solution: "Déploiement Videowall & Activation Licence Osbase",
    proj12Category: "Videowall & Signalétique Numérique",
    proj12Outcome:
      "Videowall déployé et licence Osbase activée avec succès chez Arik Air, avec diffusion de contenu en direct sur tous les écrans.",
    projWHOSolution: "Projet Réseau des Écoles de Nursing",
    projWHOCategory: "Infrastructure Réseau · Santé",
    projWHOOutcome:
      "Déploiement de réseau sans fil dans des écoles de nursing dans six États nigérians — points d'accès Ubiquiti, câblage, activation et remédiation dans environ 13 établissements. Livré en 2026 pour l'OMS Nigeria.",
    // About page
    aboutUs: "À Propos",
    aboutHeroTitle: "Qui Nous Sommes",
    aboutHeroSub:
      "Deux décennies à construire l'infrastructure technologique qui propulse les organisations les plus ambitieuses d'Afrique.",
    // SubNav
    subNavWhoWeAre: "Qui Nous Sommes",
    subNavHistory: "Histoire",
    subNavLeadership: "Direction",
    subNavAwards: "Récompenses",
    subNavLocations: "Bureaux",
    // Company Overview
    overviewEyebrow: "Qui Nous Sommes",
    overviewHeading:
      "Nous ne sommes pas un fournisseur. Nous sommes votre partenaire technologique.",
    overviewBody1:
      "Proxynet Group est une entreprise de solutions technologiques fondée au Nigeria en 2004. Nous concevons, déployons et supportons l'infrastructure IT qui maintient les entreprises en activité — des réseaux d'entreprise et la cybersécurité aux systèmes d'affichage intelligents et aux logiciels personnalisés.",
    overviewBody2:
      "Nous travaillons avec des banques, des raffineries, des agences gouvernementales, des opérateurs télécoms et des multinationales au Nigeria, au Ghana, en Côte d'Ivoire et au-delà. Notre mission est de rendre la technologie complexe simple, fiable et durable.",
    overviewBody3:
      "Nous existons parce que les entreprises africaines méritent une infrastructure technologique de classe mondiale — livrée par des personnes qui comprennent le contexte local, les défis d'infrastructure et ce qu'il faut pour maintenir les systèmes en fonctionnement dans cet environnement.",
    // Mission & Vision
    ourMission: "Notre Mission",
    missionStatement:
      "Atteindre et maintenir le leadership dans l'industrie des TIC grâce à la fourniture du service de la plus haute qualité qui donnera à nos clients une valeur inégalée de manière rentable et responsable — apportant de la valeur à la communauté dans son ensemble.",
    ourVision: "Notre Vision",
    visionStatement:
      "Être une définition du vrai succès dans la livraison et le support de solutions TIC à l'échelle mondiale — grâce à la réalisation d'une technologie supérieure pour notre base de clients en s'alignant constamment sur les dynamiques de l'ère de l'information tout en établissant et maintenant des normes.",
    // Core Values
    coreValuesEyebrow: "Nos Valeurs",
    coreValuesSub:
      "Sept principes qui guident chaque décision, chaque projet et chaque relation chez Proxynet.",
    cvPurposeTitle: "Orienté Objectif",
    cvPurposeDesc:
      "Tout ce que nous faisons est ancré dans un objectif clair — fournir une technologie qui crée une valeur réelle et durable pour nos clients et communautés.",
    cvAccountabilityTitle: "Responsabilité",
    cvAccountabilityDesc:
      "Nous assumons nos engagements. Quand nous disons que nous livrerons, nous livrons — et quand les choses tournent mal, nous les corrigeons sans excuses.",
    cvIntegrityTitle: "Intégrité",
    cvIntegrityDesc:
      "Nous faisons ce qui est juste même quand personne ne regarde. Nos clients nous confient leur infrastructure critique — nous prenons cela au sérieux.",
    cvDisciplineTitle: "Discipline",
    cvDisciplineDesc:
      "L'excellence n'est pas un accident. Nous suivons des processus éprouvés, maintenons des normes élevées et nous tenons à une performance constante.",
    cvStewardshipTitle: "Intendance",
    cvStewardshipDesc:
      "Nous traitons les ressources de nos clients comme les nôtres — en prenant des décisions qui protègent leurs investissements et créent de la valeur à long terme.",
    cvOnenessTitle: "Unité",
    cvOnenessDesc:
      "Nous travaillons en équipe — en interne et avec nos clients. La collaboration, pas les silos, est notre façon de résoudre des problèmes complexes.",
    cvExemplaryTitle: "Exemplaire",
    cvExemplaryDesc:
      "Nous établissons la norme. Dans notre industrie, nos communautés et notre conduite — nous visons à être l'exemple que les autres suivent.",
    // Timeline
    timelineEyebrow: "Notre Histoire",
    timelineHeading: "Deux Décennies de Progrès",
    tm2004Title: "Fondation",
    tm2004Desc:
      "Proxynet Communications fondée à Lagos, Nigeria avec la mission de fournir des solutions IT de classe mondiale.",
    tm2008Title: "Premier Grand Contrat Entreprise",
    tm2008Desc:
      "Premier projet de réseau d'entreprise à grande échelle avec une banque nigériane de premier rang.",
    tm2010Title: "Expansion Régionale",
    tm2010Desc:
      "Ouverture d'opérations à Abuja pour servir le gouvernement fédéral et les clients du secteur public.",
    tm2012Title: "Partenariat Samsung",
    tm2012Desc:
      "Devenu partenaire Samsung B2B agréé, s'étendant aux solutions d'affichage grand format et de signalétique intelligente.",
    tm2014Title: "Prix Samsung B2B",
    tm2014Desc:
      "Reconnu avec le Prix Samsung B2B pour des performances exceptionnelles et la livraison client.",
    tm2016Title: "Expansion en Afrique de l'Ouest",
    tm2016Desc:
      "Établissement d'une présence au Ghana et en Côte d'Ivoire, servant des clients à travers l'Afrique de l'Ouest.",
    tm2019Title: "Bureau de Dubaï",
    tm2019Desc:
      "Ouverture d'un bureau au Moyen-Orient à Dubai Silicon Oasis pour servir les clients internationaux et les partenaires technologiques.",
    tm2024Title: "20 Ans de Succès",
    tm2024Desc:
      "Célébration de deux décennies d'excellence technologique — 500+ projets, 6 pays, 50+ partenaires mondiaux.",
    // Leadership team
    leaderCEOTitle: "Directeur Général",
    leaderCEOBio:
      "Leader visionnaire avec plus de 20 ans d'expérience dans la transformation technologique en Afrique. A fondé Proxynet en 2004 avec la mission de combler le fossé infrastructurel.",
    leaderHRTitle: "Responsable des Ressources Humaines",
    leaderHRBio:
      "Leader centré sur les personnes qui construit et nourrit les talents qui alimentent l'excellence de livraison de Proxynet en Afrique de l'Ouest.",
    leaderCOOTitle: "Directeur des Opérations",
    leaderCOOBio:
      "Spécialiste des opérations avec une expertise approfondie en gestion de projets et livraison de services. Garantit que chaque engagement client répond aux normes de qualité de Proxynet.",
    leaderCFOTitle: "Responsable Financier",
    leaderCFOBio:
      "Gère la santé financière de Proxynet et construit les cadres commerciaux qui soutiennent une croissance durable sur tous les marchés.",
    leaderSalesTitle: "Responsable Commercial",
    leaderSalesBio:
      "Pilote la croissance commerciale de Proxynet en Afrique de l'Ouest, en développant des relations d'entreprise et en dirigeant l'équipe commerciale pour des performances constantes.",
    // Leadership
    leadershipHeading: "L'Équipe Derrière Proxynet",
    // Awards
    awardsEyebrow: "Reconnaissance",
    awardsHeading: "Prix & Certifications",
    awardsSub:
      "Nos partenariats et accréditations reflètent la confiance que les leaders technologiques mondiaux accordent à Proxynet.",
    // Locations
    locationsEyebrow: "Où Nous Sommes",
    locationsHeading: "Nos Bureaux",
    locationsSub:
      "De notre siège à Lagos aux bureaux à travers l'Afrique de l'Ouest et le Moyen-Orient — nous sommes proches des clients que nous servons.",
    // Tax Compliance
    taxTitle: "Enregistré & Conforme aux Obligations Fiscales",
    taxBody:
      "Proxynet Group Ltd est une société nigériane dûment enregistrée (RC 472270) constituée en vertu de la loi sur les sociétés et les questions connexes (CAMA). Nous sommes entièrement conformes aux obligations fiscales, détenons un numéro d'identification fiscale valide (TIN: 00775065-0001) et déposons toutes les déclarations statutaires auprès du Service fédéral des impôts intérieurs (FIRS). Toutes les factures émises par Proxynet sont légalement valides à des fins d'approvisionnement et d'audit.",
    // Awards body text
    award1Body:
      "Reconnu par Samsung pour des performances de vente B2B exceptionnelles et l'excellence de la livraison client au Nigeria.",
    award2Body:
      "Partenaire Samsung B2B certifié pour les écrans grand format, la signalétique intelligente et les solutions AV d'entreprise.",
    award3Body:
      "Partenaire Microsoft agréé pour les logiciels d'entreprise, les services cloud et les solutions de licences.",
    award4Body:
      "Distributeur Canon agréé pour les imprimantes, scanners, appareils photo et solutions de gestion documentaire.",
    award5Body:
      "Distributeur Yealink agréé pour les téléphones IP, la vidéoconférence et les communications unifiées.",
    award6Body:
      "Intégrateur système Yealink certifié pour les déploiements UC à l'échelle de l'entreprise et les services gérés.",
    award7Body:
      "Partenaire Logitech agréé pour la collaboration vidéo, les périphériques et les solutions d'espace de travail d'entreprise.",
    award8Body:
      "Distributeur officiel de casques professionnels et d'appareils de communication VT en Afrique de l'Ouest.",
    award9Body:
      "Distributeur Dahua agréé pour les systèmes CCTV, caméras IP, NVR et solutions de surveillance de sécurité.",
    award10Body:
      "Système de management de la qualité certifié par TNV (Cert No. SBSCKTSI20251120NGAQM10U). Valide jusqu'au 19/11/2028.",
    // Team certifications
    teamCertsTitle: "Certifications Techniques de l'Équipe",
    teamCertsSub:
      "Nos ingénieurs et techniciens détiennent des certifications reconnues dans les domaines des réseaux, de la cybersécurité, du câblage structuré et de la conception.",
    // Support page
    supportHeroTitle:
      "Support 24h/24, Parce que Votre Entreprise Ne S'arrête Jamais",
    supportHeroSub:
      "Notre équipe de support est disponible 24h/24 pour maintenir votre technologie opérationnelle. Soumettez un ticket, appelez-nous ou contactez-nous sur WhatsApp — nous répondons rapidement.",
    supportOptRaiseTicket: "Soumettre un Ticket",
    supportOptRaiseDesc:
      "Soumettez une demande de support et suivez-la jusqu'à sa résolution.",
    supportOptCall: "Appeler le Support",
    supportOptCallDesc:
      "Parlez directement avec un ingénieur support. Disponible 24h/24.",
    supportOptWhatsApp: "Support WhatsApp",
    supportOptWhatsAppDesc:
      "Envoyez un message à notre équipe sur WhatsApp pour des réponses rapides.",
    supportOptChatAction: "Discuter sur WhatsApp",
    supportOptEmail: "Support par Email",
    supportOptEmailDesc:
      "Envoyez-nous un email et nous répondrons dans les 4 heures ouvrables.",
    slaEyebrow: "Normes de Service",
    slaHeading: "Nos Engagements SLA",
    slaSub:
      "Nous publions ouvertement nos délais de réponse et de résolution. Vous savez toujours à quoi vous attendre.",
    slaPriority: "Priorité",
    slaDescription: "Description",
    slaResponse: "Délai de Réponse",
    slaResolution: "Objectif de Résolution",
    slaCritical: "Critique",
    slaCriticalDesc:
      "Panne complète du système ou violation de sécurité affectant les opérations commerciales.",
    slaHigh: "Élevée",
    slaHighDesc:
      "Fonctionnalité majeure altérée. Impact significatif sur les opérations commerciales.",
    slaMedium: "Moyenne",
    slaMediumDesc:
      "Fonctionnalité partielle altérée. Solution de contournement disponible.",
    slaLow: "Faible",
    slaLowDesc:
      "Problème mineur ou demande générale. Aucun impact commercial significatif.",
    slaServiceWindow: "Fenêtre de Service",
    slaServiceWindowVal: "24 heures / 7 jours par semaine / 365 jours par an",
    slaEscalation: "Chemin d'Escalade",
    slaEscalationVal:
      "Ingénieur Support → Ingénieur Senior → Responsable Support → CTO",
    csEyebrow: "Succès Client",
    csHeading: "Nous Restons avec Vous Après le Lancement",
    csBody1:
      "Notre programme de Succès Client est un engagement continu — pas un projet ponctuel. Dès que votre solution est en ligne, notre équipe travaille activement pour s'assurer qu'elle continue à créer de la valeur.",
    csBody2:
      "Ce n'est pas seulement un support réactif. C'est une relation proactive et structurée conçue pour protéger votre investissement et aider votre technologie à évoluer avec votre entreprise.",
    csProactiveTitle: "Surveillance Proactive",
    csProactiveDesc:
      "Nous surveillons vos systèmes en continu — identifiant et résolvant les problèmes avant qu'ils n'impactent votre entreprise.",
    csDedicatedTitle: "Responsable de Compte Dédié",
    csDedicatedDesc:
      "Chaque client a un responsable de compte nommé qui connaît votre infrastructure et est votre premier point de contact.",
    csReviewsTitle: "Revues Trimestrielles",
    csReviewsDesc:
      "Nous effectuons des revues de service régulières pour évaluer les performances, planifier les mises à niveau et s'aligner sur vos objectifs.",
    csPartnershipTitle: "Partenariat à Long Terme",
    csPartnershipDesc:
      "Nous ne disparaissons pas après le déploiement. Notre relation grandit avec votre entreprise — pour des années, pas des mois.",
    onboardEyebrow: "Centre de Ressources",
    onboardHeading: "Ressources & Téléchargements",
    onboardSub:
      "Fiches techniques, livres blancs, guides techniques, supports d'intégration et formulaires clients — tout en un seul endroit.",
    onboard1Title: "Guide de Démarrage",
    onboard1Desc:
      "Guide étape par étape pour les nouveaux clients — du premier contact au lancement.",
    onboard1Type: "Guide PDF",
    onboard2Title: "Vidéos de Présentation du Système",
    onboard2Desc:
      "Tutoriels vidéo couvrant vos systèmes installés et comment les utiliser.",
    onboard2Type: "Série Vidéo",
    onboard3Title: "Manuels Utilisateur",
    onboard3Desc:
      "Manuels détaillés pour toutes les solutions matérielles et logicielles déployées.",
    onboard3Type: "Documentation",
    onboard4Title: "Modèles de Configuration",
    onboard4Desc:
      "Modèles de configuration prédéfinis pour accélérer la configuration et standardiser les déploiements.",
    onboard4Type: "Modèles",
    ticketEyebrow: "Maintenance & Support",
    ticketHeading: "Soumettre un Ticket",
    ticketSub:
      "Soumettez une demande de support ou planifiez une visite de maintenance. Notre équipe confirmera dans votre fenêtre SLA.",
    ticketSuccess: "Ticket Soumis",
    ticketSuccessMsg:
      "Votre demande a été enregistrée. Nous répondrons dans votre fenêtre SLA. Référencez votre email pour les mises à jour.",
    faqEyebrow: "FAQ",
    faqHeading: "Questions Fréquemment Posées",
    faqOnboarding: "Intégration",
    faqTechnical: "Technique",
    faqBilling: "Facturation",
    faqAccount: "Compte",
    // Support — form field labels
    supportFieldName: "Nom Complet",
    supportFieldEmail: "Email",
    supportFieldPhone: "Téléphone",
    supportFieldSite: "Site / Localisation",
    supportFieldDate: "Date Préférée (pour maintenance planifiée)",
    supportFieldIssue: "Description du Problème",
    supportFieldIssuePlaceholder: "Décrivez le problème ou la maintenance requise...",
    // Onboarding resource types & descriptions
    onboardTypePDF: "Téléchargements PDF",
    onboardTypePDFReports: "PDF & Rapports",
    onboardTypeTechDocs: "Docs Techniques",
    onboardTypeGuidesVideos: "Guides & Vidéos",
    onboardTypeForms: "Formulaires & Modèles",
    onboardDatasheetsDesc: "Fiches produits, spécifications techniques et datasheets pour toutes les solutions Proxynet et produits partenaires.",
    onboardWhitepapersDesc: "Synthèses de solutions approfondies, livres blancs technologiques et documents de leadership éclairé de l'équipe Proxynet.",
    onboardTechGuidesDesc: "Guides techniques étape par étape, manuels de configuration et documentation de déploiement pour les systèmes installés.",
    onboardOnboardingDesc: "Tout ce dont les nouveaux clients ont besoin pour démarrer — du premier contact au lancement, en un seul endroit.",
    onboardFormsDesc: "Formulaires de demande de support, calendriers de maintenance, accords SLA et autres documents clients à télécharger.",
    // Support FAQs
    supportFaq1q: "Combien de temps dure l'intégration après la livraison d'un projet ?",
    supportFaq1a: "L'intégration prend généralement 1 à 5 jours ouvrables selon la complexité de la solution. Votre responsable de compte vous guidera tout au long du processus et fournira toute la documentation nécessaire.",
    supportFaq2q: "Vais-je recevoir une formation sur les systèmes installés ?",
    supportFaq2a: "Oui. Tous les déploiements incluent une session de transfert et une formation utilisateur. Nous fournissons également des guides écrits et des tutoriels vidéo le cas échéant.",
    supportFaq3q: "Que dois-je faire si mon système tombe en panne en dehors des heures de bureau ?",
    supportFaq3a: "Appelez notre ligne de support 24h/24 au +234 703 264 7755 ou envoyez un message WhatsApp. Les problèmes critiques sont escaladés immédiatement quelle que soit l'heure.",
    supportFaq4q: "Comment soumettre un ticket de support ?",
    supportFaq4a: "Utilisez le formulaire de ticket sur cette page, envoyez un email à info@proxynetgroup.com ou appelez notre ligne de support. Tous les tickets sont enregistrés et suivis jusqu'à résolution.",
    supportFaq5q: "Proxynet peut-il prendre en charge des systèmes qu'il n'a pas installés à l'origine ?",
    supportFaq5a: "Oui, dans de nombreux cas. Contactez notre équipe de support avec les détails de votre infrastructure existante et nous évaluerons si nous pouvons fournir un support.",
    supportFaq6q: "Les services de support sont-ils inclus dans mon contrat ?",
    supportFaq6a: "Cela dépend de votre accord de service. La plupart des clients sont sous contrat de services gérés qui inclut des heures de support définies. Contactez votre responsable de compte pour plus de détails.",
    supportFaq7q: "Comment demander une facture ou un reçu ?",
    supportFaq7a: "Envoyez un email à info@proxynetgroup.com avec le nom de votre entreprise et la période de projet ou de service concernée. Nous émettrons la documentation dans les 2 jours ouvrables.",
    supportFaq8q: "Comment mettre à jour mes coordonnées dans vos fichiers ?",
    supportFaq8a: "Envoyez un email à info@proxynetgroup.com avec vos coordonnées mises à jour et votre responsable de compte mettra à jour vos dossiers.",
    supportFaq9q: "Qui est mon responsable de compte dédié ?",
    supportFaq9a: "Votre responsable de compte est assigné au début de votre engagement. Si vous n'êtes pas sûr, envoyez un email à info@proxynetgroup.com et nous vous mettrons en contact avec la bonne personne.",
    // CSR page
    csrHeroTitle: "Une Technologie Qui Redonne",
    csr: "RSE & Communauté",
    csrReadImpact: "Lire Nos Histoires d'Impact",
    csrHeroSub:
      "Chez Proxynet, nous croyons que la technologie devrait bénéficier à tous — pas seulement à ceux qui peuvent se le permettre. Notre programme RSE met cette conviction en action.",
    csrFocusEyebrow: "Nos Domaines d'Action",
    csrFocusHeading: "Où Nous Avons un Impact",
    csrImpactEyebrow: "Histoires d'Impact",
    csrImpactHeading: "Ce Que Nous Avons Accompli",
    csrPartnersEyebrow: "Organisations Partenaires",
    csrPartnersHeading: "Avec Qui Nous Travaillons",
    csrReportEyebrow: "Rapport RSE",
    csrReportHeading: "Télécharger Notre Rapport RSE",
    csrReportSub:
      "Notre rapport RSE annuel détaille nos initiatives, nos indicateurs d'impact et nos engagements pour l'année à venir.",
    csrRequestReport: "Demander le Rapport",
    csrGetInvolved: "S'Impliquer",
    csrOutcomeLabel: "Résultat",
    // Blog page
    blogHeroTitle:
      "Perspectives Technologiques de la Principale Entreprise TIC d'Afrique de l'Ouest",
    blogHeroSub:
      "Leadership éclairé, analyse sectorielle, actualités de l'entreprise et mises à jour des partenaires de l'équipe Proxynet.",
    blogNewsletterEyebrow: "Restez Informé",
    blogNewsletterHeading: "Abonnez-vous pour des Insights Hebdomadaires",
    blogNewsletterSub:
      "Recevez les dernières perspectives technologiques, actualités de l'entreprise et analyses sectorielles dans votre boîte de réception chaque semaine.",
    blogSubscribeSuccess:
      "Merci pour votre abonnement ! Vérifiez votre boîte de réception pour une confirmation.",
    blogBackToBlog: "Retour au Blog",
    blogShareArticle: "Partager cet article",
    blogAuthorBio:
      "L'équipe Proxynet partage des perspectives issues de plus de 20 ans de livraison de solutions technologiques en Afrique de l'Ouest.",
    blogRelatedArticles: "Articles Connexes",
    articleComingSoon: "Article Complet Bientôt Disponible",
    articleComingSoonSub:
      "Nous travaillons sur la version complète de cet article. Revenez bientôt ou abonnez-vous à notre newsletter pour être notifié lors de sa publication.",
    blogReadMore: "Lire la suite",
    // Blog categories
    blogCatAll: "Tout",
    blogCatTechInsights: "Perspectives Technologiques",
    blogCatCompanyNews: "Actualités de l'Entreprise",
    blogCatPartnerUpdates: "Mises à Jour Partenaires",
    blogCatIndustryFocus: "Focus Sectoriel",
    blogCatEdTech: "EdTech",
    // Blog post metadata
    post1Title:
      "Pourquoi la Cybersécurité N'est Plus Optionnelle pour les Entreprises Africaines",
    post1Excerpt:
      "Alors que l'adoption numérique s'accélère sur le continent, le paysage des menaces évolue rapidement. Voici ce que chaque entreprise doit savoir pour protéger son infrastructure.",
    post2Title: "L'État des Réseaux d'Entreprise en Afrique de l'Ouest en 2026",
    post2Excerpt:
      "Du SD-WAN aux déploiements de fibre, nous analysons les tendances d'infrastructure qui façonnent la connectivité des grandes organisations dans la région.",
    post3Title:
      "Construire un Plan de Reprise après Sinistre qui Fonctionne Vraiment",
    post3Excerpt:
      "La plupart des plans de reprise échouent non pas à cause d'une mauvaise technologie, mais d'une mauvaise planification. Notre équipe partage le cadre que nous utilisons avec nos clients.",
    post4Title: "Proxynet Organise le Lancement du Huawei IdeaHub S3 à Lagos",
    post4Excerpt:
      "Proxynet Communications a organisé le lancement officiel du Huawei IdeaHub S3 au Four Points by Sheraton, Victoria Island, Lagos.",
    post5Title:
      "Comment les Salles de Classe Intelligentes Transforment l'Éducation au Nigeria",
    post5Excerpt:
      "Proxynet EdTech a déployé des solutions de salles de classe intelligentes dans des écoles de l'État de Lagos. Voici ce que nous avons appris sur ce qui fonctionne.",
    post6Title: "Proxynet Renouvelle son Partenariat Samsung B2B pour 2026",
    post6Excerpt:
      "Proxynet Communications a renouvelé son partenariat Samsung B2B, poursuivant une relation qui a débuté il y a plus d'une décennie.",
    slide0Eyebrow: "Solutions Technologiques d'Entreprise",
    slide0Title: "Propulser l'Avenir",
    slide0Accent: "Numérique de l'Afrique",
    slide0Sub:
      "Connectivité, infrastructure et services gérés de classe mondiale pour les entreprises à travers l'Afrique — fiables et conçus pour la croissance.",

    slide1Eyebrow: "Événement à Venir — 6 Mai 2026",
    slide1Title: "Huawei IdeaHub S3",
    slide1Accent: "Lancement",
    slide1Sub:
      "Découvrez l'Avenir de la Collaboration Intelligente. Rejoignez-nous au Four Points by Sheraton, VI, Lagos. 10h00 WAT.",
    slide1EventDate: "6 Mai 2026",
    slide1EventTime: "10h00 WAT",
    slide1EventVenue: "Four Points by Sheraton, VI, Lagos",
    slide1EventCta: "S'inscrire",

    slide2Eyebrow: "Solutions pour Écoles Intelligentes",
    slide2Title: "Former la Prochaine",
    slide2Accent: "Génération de Talents",
    slide2Sub:
      "Proxynet EdTech déploie des salles de classe intelligentes, des programmes d'alphabétisation numérique et des infrastructures TIC dans les écoles d'Afrique de l'Ouest.",

    slide3Eyebrow: "NOC & Centres de Commandement",
    slide3Title: "Surveillance en Temps Réel",
    slide3Accent: "à Grande Échelle",
    slide3Sub:
      "Des solutions NOC à 15 écrans aux centres de commandement complets — nous concevons et déployons l'infrastructure qui garde vos opérations visibles.",

    slide4Eyebrow: "Intégration de Systèmes",
    slide4Title: "Une Technologie Qui",
    slide4Accent: "Fonctionne Ensemble",
    slide4Sub:
      "Nous connectons votre matériel, vos logiciels et vos réseaux en un système unifié — éliminant les silos et améliorant l'efficacité opérationnelle.",

    slide5Eyebrow: "Solutions AV & Videowalls",
    slide5Title: "Des Écrans Qui",
    slide5Accent: "Captent l'Attention",
    slide5Sub:
      "Des videowalls de salle de réunion aux événements AV à grande échelle — nous concevons, déployons et supportons des solutions d'affichage de classe mondiale.",

    slide6Eyebrow: "Cybersécurité",
    slide6Title: "Protéger Votre",
    slide6Accent: "Infrastructure",
    slide6Sub:
      "Pare-feux, détection d'intrusion, VPN et reprise après sinistre — nous sécurisons votre entreprise contre les menaces internes et externes.",
    projectsDelivered: "Projets Réalisés",
    countriesServed: "Pays Desservis",
    globalPartners: "Partenaires Technologiques Mondiaux",
    yearsInOperation: "Années d'Expérience",
    // Case Studies page
    caseStudiesPageTitle: "Études de Cas — Proxynet Group",
    caseStudiesPageDesc:
      "Déploiements technologiques réels par Proxynet Group — solutions NOC, videowalls, cybersécurité et signalétique numérique à travers l'Afrique.",
    caseStudiesEyebrow: "Succès Clients",
    caseStudiesHeroTitle: "Défis Réels. Solutions Prouvées.",
    caseStudiesHeroSub:
      "Des centres de commandement NOC à la cybersécurité d'entreprise — voici comment nous avons aidé des organisations à travers l'Afrique à résoudre de vrais défis technologiques.",
    caseStudiesReadStudy: "Lire l'Étude de Cas",
    caseStudiesBack: "Retour aux Études de Cas",
    caseStudiesViewAll: "Voir Toutes les Études de Cas",
    caseStudiesRelated: "Plus d'Études de Cas",
    caseStudiesClientLabel: "Client",
    caseStudiesSolutionLabel: "Domaine de Solution",
    caseStudiesCtaEyebrow: "Démarrer un Projet",
    caseStudiesCtaHeading: "Prêt à Construire Quelque Chose de Similaire ?",
    caseStudiesCtaSub:
      "Parlez à notre équipe de votre défi technologique — nous concevrons une solution adaptée à vos besoins.",
    caseStudiesSideCtaHeading: "Intéressé par une Solution Similaire ?",
    caseStudiesSideCtaBody:
      "Notre équipe peut concevoir et déployer une solution adaptée à votre organisation.",
    caseStudiesConsentTitle: "Contenu en Attente d'Approbation Client",
    caseStudiesConsentBody:
      "Cette étude de cas attend actuellement le consentement écrit du client avant d'être publiée. Revenez bientôt.",
    // Filter bar
    csFilterSolution: "Solution",
    csFilterIndustry: "Secteur",
    csFilterCountry: "Pays",
    csFilterClear: "Effacer les filtres",
    csResultSingular: "étude de cas",
    csResultPlural: "études de cas",
    csNoResults: "Aucune étude de cas ne correspond à vos filtres.",
    csSimilarSolution: "Demander une Solution Similaire",
    // Case study section headings
    csClientOverview: "Présentation du Client",
    csChallenge: "Le Défi",
    csSolution: "Notre Solution",
    csTechnologies: "Technologies Utilisées",
    csResults: "Résultats & ROI",
    csRelatedSolutions: "Solutions Associées",
    csGalleryComingSoon: "Galerie Bientôt Disponible",
    // Case study titles & metadata
    cs1Title: "Déploiement NOC UBA — Centre de Commandement 15 Écrans",
    cs1Category: "NOC & Centre de Commandement",
    cs1Excerpt:
      "Un centre d'opérations réseau de 15 écrans permettant une surveillance en temps réel de l'infrastructure UBA.",
    cs2Title: "Access Bank Videowall — Agence Ikota",
    cs2Category: "Videowall & Signalétique Numérique",
    cs2Excerpt:
      "Un videowall 4x2 de 46 pouces avec capacités de surveillance NOC déployé à l'agence Access Bank Ikota.",
    cs5Title: "Sundry Foods Port Harcourt — Gestion de Contenu Numérique & Signalétique",
    cs5Category: "Gestion de Contenu Numérique & Signalétique",
    cs5Excerpt:
      "Huit boîtiers Android défectueux remplacés et le CMS Reels rechargé sur tous les écrans à Sundry Foods GRA Junction, Port Harcourt — restauration de l'affichage de contenu pour chaque marque.",
    cs6Title: "Stanbic Bank HQ — Installation Huawei IdeaHub B3",
    cs6Category: "Vidéoconférence & Collaboration",
    cs6Excerpt:
      "Unités Huawei IdeaHub B3 installées et configurées dans les suites des directeurs généraux au siège de Stanbic Bank à Accra, Ghana.",
    cs7Title: "PIL — Déploiement Microsoft Teams Rooms & Yealink",
    cs7Category: "Vidéoconférence & Collaboration",
    cs7Excerpt:
      "Déploiement complet Microsoft Teams Rooms pour PIL, incluant Yealink MCore, configuration du RoomPanel et mise en service — avant leur grande inauguration.",
    cs8Title: "Union Africaine — Déploiement Microsoft Teams Rooms",
    cs8Category: "Vidéoconférence & Collaboration",
    cs8Excerpt:
      "Déploiement complet Microsoft Teams Rooms à l'Union Africaine en Éthiopie — rejoindre une réunion en un clic, partage de contenu sans fil via Wpp30, suivi automatique de caméra et gestion de câbles.",
    cs9Title: "PwC Nigeria — Déploiement Huawei IdeaHub 86\" Multi-Salles",
    cs9Category: "Vidéoconférence & Collaboration",
    cs9Excerpt:
      "10 unités Huawei IdeaHub 86\" installées et mises en service dans les bureaux de PwC Nigeria aux 6e et 8e étages.",
    cs10Title: "ArcelorMittal — Installation Yealink MeetingBoard Pro",
    cs10Category: "Vidéoconférence & Collaboration",
    cs10Excerpt:
      "MeetingBoard Pro Yealink 65 pouces monté, mis en service et formation du personnel effectuée chez ArcelorMittal. Installation complète.",
    cs11Title: "Arik Air — Déploiement Videowall & Activation Osbase",
    cs11Category: "Videowall & Signalétique Numérique",
    cs11Excerpt:
      "Videowall déployé avec succès chez Arik Air avec la licence Osbase activée et le contenu diffusé en direct.",
    cs12Title: "PIL — Installation Système Yealink MVC860",
    cs12Category: "Vidéoconférence & Collaboration",
    cs12Excerpt:
      "Système Yealink MVC860 entièrement installé chez PIL — MCore Pro, RCH40, MSpeaker et MTouch tous connectés et mis en service.",
    // Case study content — clientOverview, solution, technologies, results
    // Access Bank
    cs2ClientOverview: "Access Bank est l'une des plus grandes institutions financières du Nigeria, avec des opérations dans plusieurs pays africains. Leur agence Ikota avait besoin d'une solution videowall à fort impact pour leur hall bancaire.",
    cs2Solution: "Proxynet a déployé un videowall 4x2 de 46 pouces avec des capacités de surveillance NOC à l'agence Access Bank Ikota. La solution comprenait des écrans commerciaux Samsung, un système de gestion de contenu centralisé et une infrastructure de surveillance à distance.",
    cs2Technologies: ["Écrans Commerciaux Samsung 46\"", "Contrôleur Videowall", "Système de Gestion de Contenu", "Logiciel de Surveillance à Distance", "Infrastructure Réseau"],
    cs2Results: ["8 panneaux haute résolution déployés", "Gestion de contenu centralisée sur plusieurs zones", "Surveillance en temps réel et diagnostics à distance", "99,8% de disponibilité depuis l'installation", "Expérience client améliorée dans le hall bancaire"],
    // Sundry Foods
    cs5ClientOverview: "Sundry Foods est une chaîne de restauration rapide opérant à travers le Nigeria, avec des points de vente dans des zones commerciales et résidentielles à fort trafic. Leur emplacement GRA Junction de Port Harcourt héberge plusieurs concessions de marques, nécessitant des écrans de signalétique numérique dédiés pour l'affichage des menus et le contenu promotionnel.",
    cs5Challenge: "Huit boîtiers de lecteur multimédia Android à l'outlet Sundry Foods GRA Junction avaient dysfonctionné, causant l'obscurcissement des écrans ou l'affichage de contenu incorrect. Les trois boîtiers H96 Android restants fonctionnaient avec des configurations CMS Reels obsolètes avec un contenu périmé. Le client avait besoin d'un remplacement urgent et d'une actualisation du contenu pour restaurer un affichage de signalétique précis sur chaque écran.",
    cs5Solution: "L'équipe terrain de Proxynet a déployé huit nouveaux boîtiers H96 Android pour remplacer toutes les unités défectueuses. Sur les trois boîtiers H96 restants, le CMS Reels a été entièrement rechargé et reconfiguré. Un nouveau contenu à jour a été téléchargé et mappé aux écrans désignés de chaque marque. Les onze boîtiers ont été testés de bout en bout avant la réception.",
    cs5Technologies: ["Lecteurs Multimédia Android H96", "Reels CMS", "Écrans de Signalétique Numérique", "Planification & Zonage de Contenu", "Déploiement & Configuration Sur Site"],
    cs5Results: ["8 boîtiers Android défectueux remplacés par de nouveaux H96", "CMS Reels rechargé et reconfiguré sur les 3 H96 conservés", "Nouveau contenu de marque téléchargé et mappé par zone", "11 boîtiers Android opérationnels après déploiement", "Contenu affiché sur tous les écrans à GRA Junction", "Déploiement entièrement complété et réceptionné"],
    // Stanbic Bank
    cs6ClientOverview: "Stanbic Bank est l'une des principales institutions financières du Ghana, faisant partie du groupe Standard Bank — la plus grande banque d'Afrique par actifs. Leur siège à Accra sert de hub opérationnel pour la direction senior et les équipes exécutives du pays.",
    cs6Technologies: ["Huawei IdeaHub B3", "Montage Mural & Câblage", "Configuration Réseau", "Provisionnement des Appareils"],
    cs6Results: ["Unités Huawei IdeaHub B3 installées dans les suites des directeurs généraux", "Configuration complète des appareils et provisionnement réseau effectués", "Projection sans fil et capacité de réunion cloud activées", "Déploiement réceptionné et entièrement opérationnel au siège Stanbic Bank, Accra"],
    // PIL Teams Rooms
    cs7ClientOverview: "PIL est une organisation moderne préparant un lancement opérationnel majeur. Ses nouvelles installations disposent de salles de réunion et de cours conçues pour la collaboration hybride, nécessitant une solution Microsoft Teams Rooms entièrement intégrée pour connecter les participants sur site et à distance.",
    cs7Technologies: ["Système Microsoft Teams Rooms Yealink MCore", "Yealink RoomPanel", "Écran Grand Format", "Microsoft Teams Rooms", "Câblage Structuré & Gestion des Câbles"],
    cs7Results: ["Yealink MCore rechargé et entièrement mis en service", "RoomPanel connecté et configuré pour la planification des salles", "Appel de test réussi", "Câbles gérés et rangés derrière l'écran", "Déploiement complet et réceptionné"],
    // African Union
    cs8ClientOverview: "L'Union Africaine est la première organisation intergouvernementale du continent, dont le siège est à Addis-Abeba, en Éthiopie. Ses installations de conférence servent des chefs d'État, des diplomates et des hauts fonctionnaires de 55 États membres — exigeant les plus hauts standards de fiabilité et de facilité d'utilisation dans les technologies de collaboration.",
    cs8Technologies: ["Microsoft Teams Rooms", "Contrôleur Yealink Tab", "Pod de Présentation Sans Fil Yealink Wpp30", "Caméra PTZ à Suivi Automatique", "Réseau de Microphones Plafond/Salle", "Câblage Structuré & Gestion des Câbles"],
    cs8Results: ["Rejoindre une réunion en un clic depuis le contrôleur Tab — entièrement opérationnel", "Partage de contenu sans fil vers les réunions via Yealink Wpp30 confirmé fonctionnel", "Performance du microphone vérifiée — audio clair dans toute la salle", "Caméra à suivi automatique mise en service — suivi testé et performant", "Tous les câbles gérés et rangés pour une installation propre", "Déploiement complet et réceptionné"],
    // PwC Nigeria
    cs9ClientOverview: "PwC Nigeria est l'un des cabinets de services professionnels leaders du pays, fournissant des services d'audit, de fiscalité et de conseil. Leurs bureaux avaient besoin d'une mise à niveau à grande échelle de l'infrastructure de collaboration dans plusieurs salles de réunion aux 6e et 8e étages.",
    cs9Technologies: ["Huawei IdeaHub 86\" (× 10 unités)", "Montage Mural & Installation Structurale", "Configuration & Provisionnement des Appareils", "Mise en Service des Salles"],
    cs9Results: ["10 × unités Huawei IdeaHub 86\" installées et mises en service", "Salle 4, 6e étage (capacité 8 personnes) — terminée", "Salle 2, 8e étage (capacité 12 personnes) — terminée", "Salle 3, 8e étage (capacité 8 personnes) — terminée", "Salle 4, 8e étage (capacité 12 personnes) — terminée", "Toutes les salles entièrement opérationnelles"],
    // ArcelorMittal
    cs10ClientOverview: "ArcelorMittal est le leader mondial de l'acier et des mines, avec une présence significative en Afrique. Leur bureau au Nigeria avait besoin d'une solution de collaboration moderne pour les réunions, présentations et travail hybride.",
    cs10Technologies: ["Yealink MeetingBoard Pro (65\")", "Montage Mural & Installation Structurale", "Mise en Service & Configuration des Appareils", "Formation du Personnel"],
    cs10Results: ["MeetingBoard Pro Yealink 65\" monté et installé avec succès", "Appareil entièrement mis en service et configuré", "Formation du personnel effectuée sur site", "Installation réceptionnée comme complète"],
    // Arik Air
    cs11ClientOverview: "Arik Air est l'une des principales compagnies aériennes commerciales du Nigeria, opérant des vols domestiques et internationaux en Afrique et au-delà. Ses installations avaient besoin d'une installation videowall moderne pour améliorer la communication visuelle et les capacités d'affichage opérationnel.",
    cs11Technologies: ["Système d'Affichage Videowall", "Licence de Gestion de Contenu Osbase", "Montage & Câblage des Écrans", "Configuration & Activation du Contenu"],
    cs11Results: ["Videowall déployé et installé avec succès", "Licence Osbase activée et opérationnelle", "Contenu diffusé en direct sur tous les écrans", "Déploiement complet et réceptionné"],
    // PIL MVC860
    cs12ClientOverview: "PIL est une organisation moderne préparant un lancement opérationnel majeur. Ses nouvelles installations disposent de salles de réunion et de conférence conçues pour la collaboration hybride, nécessitant une solution Microsoft Teams Rooms entièrement intégrée.",
    cs12Technologies: ["Système Microsoft Teams Rooms Yealink MVC860", "Yealink MCore Pro", "Yealink RCH40", "Yealink MSpeaker", "Yealink MTouch", "Câblage Structuré & Intégration Matérielle"],
    cs12Results: ["MCore Pro installé et entièrement connecté", "Caméra RCH40 installée et connectée", "Système audio MSpeaker installé et connecté", "Contrôleur MTouch installé et connecté", "Toutes les connexions matérielles vérifiées et complètes", "Système entièrement mis en service et opérationnel"],
    // Creamer Media Kerio
    csCreamClientOverview: "Creamer Media est un fournisseur de premier plan d'intelligence commerciale et de services d'information axés sur les marchés africains, notamment dans les secteurs minier, ingénierie et infrastructure. En tant qu'organisation médiatique technophile, un accès réseau fiable et sécurisé est essentiel à ses opérations quotidiennes.",
    csCreamSolution: "L'équipe de Creamer Media avait besoin d'un moyen de mieux gérer la bande passante réseau pour optimiser l'utilisation de leur connexion internet. Ils avaient également besoin d'une solution VPN fiable pour assurer l'accès sécurisé des clients et partenaires à leurs ressources locales. Proxynet a apporté à Creamer Media une solution qui a évolué d'un simple pare-feu vers une solution UTM complète — fournissant le contrôle de la bande passante, l'optimisation internet et la connectivité VPN sécurisée dans une seule plateforme.",
    csCreamTechnologies: ["Kerio Control", "Gestion Unifiée des Menaces (UTM)", "Gestion de Bande Passante", "VPN — Accès Distant Sécurisé", "Pare-feu"],
    csCreamResults: ["Bande passante réseau optimisée pour tous les utilisateurs", "Utilisation de la connexion internet améliorée via la gestion du trafic", "Accès VPN sécurisé établi pour les clients et partenaires", "Évolué d'un pare-feu autonome vers une plateforme UTM complète"],
    // Altech West Africa
    csAltechClientOverview: "Altech West Africa est une société de solutions technologiques opérant en Afrique de l'Ouest dans les secteurs FMCG et entreprise, nécessitant une protection robuste pour son infrastructure réseau et ses opérations critiques.",
    csAltechSolution: "Proxynet a déployé le FireEye Web Malware Protection System (WebMPS) — stoppant les attaques web que les pare-feux traditionnels, IPS, antivirus et passerelles web manquent. La solution protège contre les exploits web zero-day et les rappels multi-protocoles pour sécuriser les données sensibles et les systèmes.",
    csAltechTechnologies: ["FireEye Web Malware Protection System (WebMPS)", "Prévention des Exploits Zero-Day", "Blocage des Rappels Multi-Protocoles"],
    csAltechResults: ["Vecteurs d'attaque web bloqués au périmètre", "Protection contre les exploits web zero-day déployée", "Intégrité du réseau et données sensibles sécurisées"],
    // NETCO UAC
    csNetcoClientOverview: "NETCO et UAC sont des entreprises nigérianes établies nécessitant une sécurité de niveau entreprise pour protéger leurs actifs critiques et données sensibles dans des infrastructures IT complexes.",
    csNetcoSolution: "Proxynet a mis en œuvre McAfee Security Connected — le premier cadre ouvert de l'industrie pour intégrer les technologies de sécurité. La solution a fourni une visibilité en temps réel, des analyses prédictives via McAfee Global Threat Intelligence, et a permis l'utilisation sécurisée du Web 2.0, de la virtualisation, du cloud et des appareils mobiles sur le réseau d'entreprise.",
    csNetcoTechnologies: ["McAfee Security Connected", "McAfee Global Threat Intelligence", "Sécurité des Points de Terminaison", "Analyses en Temps Réel"],
    csNetcoResults: ["Visibilité des menaces en temps réel déployée", "Intégration Global Threat Intelligence activée", "Politique BYOD et appareils mobiles sécurisée", "Actifs critiques et données sensibles protégés"],
    // Summary-only case study titles/categories/excerpts (FR)
    csCreamTitle: "Creamer Media — Solution UTM Kerio Control",
    csCreamCategory: "Cybersécurité · UTM · VPN",
    csCreamExcerpt: "Proxynet a livré une solution UTM complète pour Creamer Media — évoluant d'un pare-feu autonome vers une plateforme UTM complète avec gestion de bande passante et accès VPN sécurisé.",
    csAltechTitle: "Altech West Africa — Protection Web FireEye contre les Malwares",
    csAltechCategory: "Cybersécurité",
    csAltechExcerpt: "Déployé FireEye WebMPS pour stopper les attaques web manquées par les pare-feux, IPS et AV traditionnels — protégeant contre les exploits web zero-day et les rappels multi-protocoles.",
    csNetcoTitle: "NETCO & UAC — McAfee Security Connected",
    csNetcoCategory: "Cybersécurité",
    csNetcoExcerpt: "Mise en œuvre de McAfee Security Connected — fournissant une visibilité des menaces en temps réel, Global Threat Intelligence et sécurité des points de terminaison sur le web, la virtualisation, le cloud et les environnements mobiles.",
    csIndFinancial: "Services Financiers",
    csIndMedia: "Médias & Édition",
    csIndFoodBeverage: "Alimentation & Boissons",
    csIndBanking: "Banque & Finance",
    csIndAviation: "Aviation",
    // Case study countries
    csCountryNigeria: "Nigéria",
    csCountryGhana: "Ghana",
    csCountryGambia: "Gambie",
    csCountryCoteDIvoire: "Côte d'Ivoire",
    csCountryUAE: "Émirats Arabes Unis",
    csCountryEthiopia: "Éthiopie",

    // Industry pages
    industriesNav: "Secteurs",
    breadcrumbIndustries: "Secteurs",
    indPageRoleEyebrow: "Notre Rôle",
    indPageRoleHeading: "Comment Proxynet Vous Aide",
    indPageRoleBullet1:
      "Conception & Déploiement — Nous architecturons et mettons en œuvre la bonne pile technologique pour votre environnement.",
    indPageRoleBullet2:
      "Support Continu — Surveillance 24h/24, maintenance et support garanti par SLA après le lancement.",
    indPageRoleBullet3:
      "Partenariat Technologique — Une relation à long terme qui évolue avec votre entreprise.",
    indPageSolutionsEyebrow: "Solutions Clés",
    indPageSolutionsHeading: "Ce Que Nous Livrons",
    indPageCaseEyebrow: "Succès Client",
    indPageCaseHeading: "Étude de Cas en Vedette",
    indPageCaseComing: "Étude de cas bientôt disponible",
    indPageCaseComingSub:
      "Nous préparons actuellement une étude de cas pour ce secteur. Revenez bientôt.",
    indPageCaseReadMore: "Lire l'Étude de Cas",
    indPageClientsEyebrow: "Clients que Nous Servons",
    indPageClientsHeading: "La Confiance des Leaders du Secteur",
    indPageCtaHeading: "Prêt à Transformer Vos Opérations ?",
    indPageCtaSub:
      "Parlez à notre équipe de vos défis technologiques — nous concevrons une solution adaptée à votre secteur.",
    // Financial Services
    indFinancialEyebrow: "Services Financiers",
    indFinancialHeroTitle: "Technologie Conçue pour les Services Financiers",
    indFinancialHeroSub:
      "Infrastructure IT sécurisée, conforme et haute disponibilité pour les banques, fintechs et institutions financières nigérianes.",
    indFinancialOverview:
      "Le secteur des services financiers exige les plus hauts standards de fiabilité, sécurité et conformité. Les temps d'arrêt ne sont pas une option. Les violations de données sont catastrophiques. Les exigences réglementaires sont strictes et évolutives. Proxynet est un partenaire technologique de confiance pour les institutions financières nigérianes et ouest-africaines depuis plus de 20 ans.",
    indFinancialRole:
      "Nous concevons, déployons et gérons l'infrastructure technologique qui maintient les institutions financières opérationnelles — des réseaux centraux et la cybersécurité aux centres de commandement NOC, solutions videowall et logiciels d'entreprise.",
    indFinancialCaseTitle: "Access Bank Videowall — Agence Ikota",
    indFinancialCaseOutcome:
      "Déploiement d'un videowall haute résolution 4x2 de 46 pouces avec capacités de surveillance NOC intégrées à l'agence Access Bank Ikota, permettant une visibilité en temps réel des opérations réseau et de sécurité.",
    // Oil & Gas
    indOilGasEyebrow: "Pétrole & Gaz",
    indOilGasHeroTitle: "Technologie Robuste pour les Opérations Pétrolières",
    indOilGasHeroSub:
      "De la connectivité des têtes de puits aux centres de commandement de raffinerie — des solutions technologiques fiables pour le secteur pétrolier nigérian.",
    indOilGasOverview:
      "Les opérations pétrolières et gazières exigent une technologie qui fonctionne dans des environnements difficiles, des sites éloignés et sous une pression opérationnelle extrême. Proxynet a livré des solutions technologiques aux opérateurs en amont et en aval à travers le Nigeria et l'Afrique de l'Ouest.",
    indOilGasRole:
      "Nous fournissons une infrastructure technologique de bout en bout pour les opérations pétrolières et gazières — de la connectivité des sites distants et l'intégration SCADA aux solutions de centres de commandement et à la cybersécurité pour les environnements de technologie opérationnelle (OT).",
    indOilGasCaseTitle:
      "Solution VC Logitech Multi-Sites — Opérateur Pétrolier",
    indOilGasCaseOutcome:
      "Mise en œuvre d'une solution de vidéoconférence Logitech multi-sites reliant les bureaux de Lagos, Bonny, Port Harcourt et Abuja pour un grand opérateur pétrolier et gazier.",
    // Manufacturing
    indManufacturingEyebrow: "Industrie Manufacturière",
    indManufacturingHeroTitle:
      "Intégration de Systèmes pour la Fabrication Moderne",
    indManufacturingHeroSub:
      "Connecter les ateliers, les chaînes d'approvisionnement et les systèmes de gestion — une infrastructure technologique qui stimule l'efficacité manufacturière.",
    indManufacturingOverview:
      "Les opérations manufacturières dépendent d'une connectivité transparente entre les systèmes de production, la gestion de la chaîne d'approvisionnement et les applications d'entreprise. Proxynet travaille avec des fabricants à travers le Nigeria et l'Afrique de l'Ouest pour concevoir et déployer les solutions d'infrastructure réseau et d'intégration de systèmes.",
    indManufacturingRole:
      "Du réseau d'atelier à l'intégration ERP et aux solutions de centres de commandement — Proxynet fournit l'épine dorsale technologique pour les opérations manufacturières modernes. Nous connectons les machines, capteurs et systèmes de gestion dans une vue opérationnelle unifiée.",
    indManufacturingCaseTitle:
      "Réseau d'Usine & Intégration de Systèmes — Fabricant FMCG",
    indManufacturingCaseOutcome:
      "Conception et déploiement d'une infrastructure réseau à l'échelle de l'usine connectant les lignes de production, la gestion des entrepôts et les systèmes ERP pour un fabricant FMCG nigérian de premier plan.",
    // Telecommunications
    indTelecomsEyebrow: "Télécommunications",
    indTelecomsHeroTitle:
      "Technologie d'Entreprise pour les Opérateurs Télécoms",
    indTelecomsHeroSub:
      "Infrastructure réseau, solutions NOC et services gérés pour les opérateurs télécoms et fournisseurs de services en Afrique de l'Ouest.",
    indTelecomsOverview:
      "Les opérateurs télécoms ont besoin de partenaires technologiques qui comprennent les exigences des environnements réseau toujours actifs et à haut débit. La visibilité NOC, la réponse rapide aux incidents et une infrastructure évolutive sont non négociables.",
    indTelecomsRole:
      "Des centres de commandement NOC multi-écrans aux réseaux d'entreprise et communications unifiées — Proxynet fournit l'infrastructure technologique qui maintient les opérations télécoms en marche. Nous concevons des solutions pour l'échelle et la complexité des environnements télécoms.",
    indTelecomsCaseTitle: "Centre de Commandement NOC — Opérateur Télécoms",
    indTelecomsCaseOutcome:
      "Déploiement d'un centre de commandement NOC multi-écrans à grande échelle pour un grand opérateur télécoms ouest-africain, permettant une surveillance réseau en temps réel et réduisant le temps moyen de résolution de 60%.",
    // Government
    indGovernmentEyebrow: "Gouvernement & Secteur Public",
    indGovernmentHeroTitle: "Infrastructure IT Sécurisée pour le Gouvernement",
    indGovernmentHeroSub:
      "Solutions technologiques conformes, sécurisées et fiables pour les agences gouvernementales fédérales et étatiques, ministères et institutions publiques au Nigeria.",
    indGovernmentOverview:
      "Les agences gouvernementales ont besoin d'une infrastructure technologique qui répond à des exigences strictes de sécurité et de conformité, supporte des opérations à grande échelle et fournit un service fiable aux citoyens et au personnel. Proxynet a livré des solutions technologiques à des ministères fédéraux, des agences gouvernementales étatiques et des institutions publiques à travers le Nigeria.",
    indGovernmentRole:
      "De l'infrastructure réseau sécurisée et des centres de commandement aux logiciels d'entreprise et à la transformation numérique — Proxynet est un partenaire technologique de confiance pour le secteur public nigérian. Nous comprenons les processus d'approvisionnement gouvernementaux et les exigences de sécurité.",
    indGovernmentCaseTitle:
      "Centre de Commandement — Agence Gouvernementale Fédérale",
    indGovernmentCaseOutcome:
      "Conception et déploiement d'un centre de commandement et de contrôle multi-écrans pour une agence gouvernementale fédérale, intégrant les flux de sécurité, la surveillance de l'infrastructure et les communications dans une vue opérationnelle unifiée.",
    // Education
    indEducationEyebrow: "Éducation",
    indEducationHeroTitle: "Solutions EdTech pour Écoles & Universités",
    indEducationHeroSub:
      "Transformer les environnements d'apprentissage grâce à la technologie de classe intelligente, aux réseaux de campus et aux programmes d'alphabétisation numérique.",
    indEducationOverview:
      "Les établissements d'enseignement sont en pleine transformation numérique. Les salles de classe intelligentes, la connectivité à l'échelle du campus et les outils d'apprentissage numérique deviennent une infrastructure essentielle. Grâce à notre division EdTech dédiée, Proxynet a déployé des solutions de salles de classe intelligentes et des réseaux de campus dans des écoles et universités.",
    indEducationRole:
      "Nous fournissons des solutions technologiques éducatives de bout en bout — des écrans interactifs et du Wi-Fi de campus à la configuration de laboratoires informatiques, la formation à l'alphabétisation numérique et les programmes de certification TIC.",
    indEducationCaseTitle:
      "Déploiement de Salles de Classe Intelligentes — Écoles de l'État de Lagos",
    indEducationCaseOutcome:
      "Déploiement de solutions de salles de classe intelligentes dans plusieurs écoles de l'État de Lagos, équipant plus de 200 salles de classe avec des écrans interactifs, un câblage structuré et une connectivité Internet.",
    // Healthcare
    indHealthcareEyebrow: "Santé",
    indHealthcareHeroTitle:
      "Technologie Fiable pour les Prestataires de Soins de Santé",
    indHealthcareHeroSub:
      "L'infrastructure technologique qui maintient les hôpitaux, cliniques et réseaux de santé opérationnels — en toute sécurité et fiabilité.",
    indHealthcareOverview:
      "Les défaillances technologiques dans le secteur de la santé peuvent avoir des conséquences vitales. La connectivité fiable, la sécurité des données et la disponibilité des systèmes sont des exigences critiques. Proxynet travaille avec des hôpitaux, cliniques et réseaux de santé pour livrer l'infrastructure réseau, la cybersécurité et les solutions de communication qui soutiennent les soins aux patients.",
    indHealthcareRole:
      "De l'infrastructure réseau hospitalière et la sécurité des données patients aux communications unifiées et à la signalétique numérique — Proxynet fournit des solutions technologiques conçues pour les environnements de santé. Nous comprenons la sensibilité des données patients et le besoin d'une infrastructure sans temps d'arrêt.",
    indHealthcareCaseTitle:
      "Infrastructure Réseau Hospitalière — Hôpital Universitaire",
    indHealthcareCaseOutcome:
      "Conception et déploiement d'une infrastructure réseau à l'échelle du campus pour un grand hôpital universitaire de Lagos, connectant les systèmes cliniques, les bureaux administratifs et les salles de patients.",
    // Retail
    indRetailEyebrow: "Commerce de Détail",
    indRetailHeroTitle:
      "Technologie Retail Intelligente pour les Grandes Marques Nigérianes",
    indRetailHeroSub:
      "Signalétique numérique, réseaux PDV et infrastructure retail intelligente pour les principales entreprises de commerce de détail et blue chip du Nigeria.",
    indRetailOverview:
      "Le commerce de détail moderne exige une technologie transparente — des expériences numériques en magasin et la connectivité PDV aux systèmes back-office et à l'infrastructure de sécurité. Proxynet travaille avec des chaînes de distribution, des entreprises FMCG et des organisations blue chip pour livrer l'infrastructure technologique qui stimule l'expérience client.",
    indRetailRole:
      "De la signalétique numérique et des réseaux PDV aux logiciels d'entreprise et aux systèmes de sécurité — Proxynet fournit l'épine dorsale technologique pour les opérations retail modernes. Nous concevons des solutions multi-sites qui évoluent avec votre réseau de magasins.",
    indRetailCaseTitle:
      "Réseau de Signalétique Numérique — Chaîne de Distribution",
    indRetailCaseOutcome:
      "Déploiement d'un réseau de signalétique numérique centralisé dans 12 points de vente pour une chaîne de distribution nigériane de premier plan, permettant la gestion du contenu promotionnel en temps réel.",
    // Billboard Solutions (bb)
    bbEyebrow: "ProBoard par Proxynet",
    bbHeroTitle: "Rendez Votre Message Incontournable",
    bbHeroSub:
      "Signalétique numérique intérieure et extérieure, murs LED et déploiements de panneaux publicitaires qui captent l'attention et livrent des résultats.",
    bbUseCasesEyebrow: "Cas d'Usage",
    bbUseCasesHeading: "Où Nous Déployons",
    bbRetailName: "Commerce de Détail",
    bbRetailDesc:
      "Signalétique numérique en magasin, vitrines et écrans promotionnels qui stimulent les ventes.",
    bbCorporateName: "Halls d'Entreprise",
    bbCorporateDesc:
      "Murs LED impressionnants et systèmes d'affichage pour les espaces d'accueil et les salles de réunion.",
    bbEventsName: "Événements & Activations",
    bbEventsDesc:
      "Murs LED à fort impact et écrans extérieurs pour les événements, concerts et activations de marque.",
    bbOutdoorName: "Publicité Extérieure",
    bbOutdoorDesc:
      "Panneaux LED extérieurs résistants aux intempéries pour la publicité en bord de route et dans les zones à fort trafic.",
    bbOutdoorNetworkEyebrow: "Réseau Publicitaire Extérieur",
    bbOutdoorNetworkHeading: "Emplacements des Panneaux Proxynet",
    bbOutdoorNetworkSub:
      "Proxynet Communications propose des solutions de publicité extérieure via un réseau de panneaux numériques et statiques stratégiquement situés dans des zones à fort trafic et haute visibilité au Nigeria.",
    bbLocLagosCity: "Lagos",
    bbLocLagosDetail: "Bonny Camp & Slot HQ à Ikeja",
    bbLocLagosDesc:
      "Atteignant les professionnels, les navetteurs et les décideurs d'entreprise dans l'un des corridors commerciaux les plus fréquentés du Nigeria.",
    bbLocEnuguCity: "Enugu",
    bbLocEnuguDetail: "Route d'Abakaliki",
    bbLocEnuguDesc:
      "Connectant les marques avec un public régional croissant dans le Sud-Est.",
    bbLocPHCity: "Port Harcourt",
    bbLocPHDetail: "Route Peter Odili",
    bbLocPHDesc:
      "Captant l'attention des dirigeants d'entreprise et des résidents dans le dynamique hub du Sud-Sud.",
    bbAdvertiseCta: "Annoncez sur Nos Panneaux",
    bbSpecsEyebrow: "Spécifications Techniques",
    bbSpecsHeading: "Conçu pour Performer",
    bbSpecIndoorPitchLabel: "Pas LED Intérieur",
    bbSpecIndoorPitchValue: "Pas de pixel P1.5 à P4",
    bbSpecOutdoorPitchLabel: "Pas LED Extérieur",
    bbSpecOutdoorPitchValue: "Pas de pixel P6 à P16",
    bbSpecResolutionLabel: "Résolution",
    bbSpecResolutionValue: "Jusqu'à 4K UHD",
    bbSpecBrightnessIndoorLabel: "Luminosité (Intérieur)",
    bbSpecBrightnessIndoorValue: "800 à 1500 nits",
    bbSpecBrightnessOutdoorLabel: "Luminosité (Extérieur)",
    bbSpecBrightnessOutdoorValue: "5000 à 10000 nits",
    bbSpecCMSLabel: "Gestion de Contenu",
    bbSpecCMSValue: "CMS cloud, planification à distance",
    bbSpecInstallLabel: "Installation",
    bbSpecInstallValue: "Fixation murale, pied de sol, plafond, autoportant",
    bbSpecWarrantyLabel: "Garantie",
    bbSpecWarrantyValue: "2 ans pièces et main-d'œuvre",
    bbFormEyebrow: "Obtenir un Devis",
    bbFormHeading: "Demander un Devis",
    bbFormSub:
      "Parlez-nous de votre projet et nous vous enverrons une proposition détaillée dans les 24 heures.",
    bbFieldName: "Nom Complet",
    bbFieldCompany: "Entreprise",
    bbFieldLocation: "Localisation",
    bbFieldUseCase: "Cas d'Usage",
    bbSelectUseCase: "Sélectionnez un cas d'usage",
    bbSelectCorporateLobby: "Hall d'Entreprise",
    bbSelectEventActivation: "Événement / Activation",
    bbSelectOther: "Autre",
    bbFieldProjectDetails: "Détails du Projet",
    bbProjectDetailsPlaceholder:
      "Taille d'écran, quantité, intérieur/extérieur, calendrier…",
    bbSuccessTitle: "Demande de Devis Soumise",
    bbSuccessMsg:
      "Notre équipe commerciale vous enverra une proposition détaillée dans les 24 heures.",
    // Unified Communications page
    ucPageTitle: "Communications Unifiées — Proxynet Group",
    ucPageDesc: "Proxynet fournit et déploie les téléphones IP Yealink (séries T3/T4/T5), le système audio Sky Sound, les salles Teams et les casques professionnels VT au Nigeria et en Afrique de l'Ouest.",
    ucHeroEyebrow: "Géré & Cloud",
    ucHeroTitle: "Communications Unifiées",
    ucHeroSub: "Téléphones IP, audio de conférence Sky Sound, salles Microsoft Teams et casques professionnels — fournis et déployés par Proxynet. Distributeur agréé Yealink et VT en Afrique de l'Ouest.",
    ucCtaPrimary: "Demander un Devis",
    ucCtaSecondary: "Voir les Produits",
    ucBrandLabel: "Distributeur Agréé & Intégrateur",
    ucCapEyebrow: "Ce Que Nous Faisons",
    ucCapHeading: "Nos Capacités UC",
    ucCapSub: "D'un seul téléphone de bureau à un déploiement complet de salles Teams multi-sites — nous gérons la fourniture, l'installation, le provisionnement et le support.",
    ucYealinkEyebrow: "Téléphones IP",
    ucYealinkHeading: "Gamme T-Series Yealink",
    ucYealinkSub: "Les séries T3, T4 et T5 couvrent tous les niveaux de l'organisation — des réceptions aux utilisateurs exécutifs — avec la voix HD et une large compatibilité de plateforme.",
    ucRangeNote: "Ceci est une sélection des téléphones IP Yealink que nous distribuons. Contactez-nous pour la gamme complète et les tarifs.",
    ucSkySoundEyebrow: "Audio de Conférence",
    ucSkySoundHeading: "Yealink Sky Sound",
    ucSkySoundSub: "Une solution audio plafonnière complète conçue exclusivement pour les salles Microsoft Teams — combinant des réseaux de microphones à formation de faisceau, un DSP premium et un suivi intelligent des intervenants.",
    ucVTEyebrow: "Casques Professionnels",
    ucVTHeading: "Gamme de Casques VT",
    ucVTSub: "Les casques VT sont conçus pour les centres de contact et les environnements UC — réduction de bruit, confort toute la journée et compatibilité avec toutes les grandes plateformes UC.",
    ucDeploymentsEyebrow: "Bilan",
    ucDeploymentsHeading: "Déploiements Phares",
    ucDeploymentsSub: "Projets UC sélectionnés réalisés au Nigeria et sur le continent africain.",
    ucFormEyebrow: "Obtenir un Devis",
    ucFormHeading: "Demander une Proposition UC",
    ucFormSub: "Dites-nous ce dont vous avez besoin et nous vous enverrons des recommandations de produits et une proposition détaillée dans les 24 heures.",
    ucFormName: "Nom Complet",
    ucFormCompany: "Entreprise",
    ucFormEmail: "Adresse E-mail",
    ucFormPhone: "Numéro de Téléphone",
    ucFormInterest: "Domaine d'Intérêt",
    ucFormInterestDefault: "Sélectionnez une option",
    ucFormNotes: "Détails du Projet",
    ucFormNotesPh: "Nombre d'utilisateurs, type d'environnement (bureau, centre de contact, salle de réunion), lieu et exigences spécifiques…",
    ucSubmit: "Soumettre la Demande",
    ucSuccessTitle: "Demande Soumise",
    ucSuccessMsg: "Notre équipe UC examinera vos besoins et vous répondra dans les 24 heures.",
    // Distribution & Reseller page
    distPageTitle: "Distribution & Services Revendeurs — Proxynet Group",
    distPageDesc: "Proxynet Group est distributeur agréé pour Samsung, Logitech, Canon, Yealink, Dahua et bien d'autres. Rejoignez notre programme revendeur et développez votre activité technologique en Afrique de l'Ouest.",
    distHeroEyebrow: "Géré & Cloud",
    distHeroTitle: "Distribution & Services Revendeurs",
    distHeroSub: "Proxynet est distributeur agréé des meilleures marques technologiques mondiales. Nous approvisionnons consultants IT, intégrateurs et revendeurs au Nigeria et en Afrique de l'Ouest avec des produits authentiques, des prix compétitifs et un soutien technique complet.",
    distCtaPrimary: "Devenir Revendeur",
    distCtaSecondary: "Ce Que Nous Distribuons",
    distBrandLabel: "Distributeur Agréé",
    distPortfolioEyebrow: "Portefeuille Produits",
    distPortfolioHeading: "Ce Que Nous Distribuons",
    distPortfolioSub: "Notre portefeuille couvre huit catégories technologiques, fourni via des canaux agréés avec garantie fabricant et support complet.",
    distViewAll: "Voir Tous les Partenaires Technologiques",
    distBenefitsEyebrow: "Pourquoi Nous Rejoindre",
    distBenefitsHeading: "Avantages du Programme Revendeur",
    distBenefitsSub: "Tout ce dont votre entreprise a besoin pour vendre des technologies en toute confiance — approvisionnement, support et croissance.",
    distTiersEyebrow: "Niveaux de Partenariat",
    distTiersHeading: "Trouvez le Niveau Adapté à Votre Entreprise",
    distTiersSub: "Que vous débutiez dans le canal ou que vous développiez une activité technologique sérieuse, il existe un niveau conçu pour vous.",
    distApplyEyebrow: "Candidature Revendeur",
    distApplyHeading: "Devenir Revendeur",
    distApplySub: "Remplissez le formulaire et notre équipe de développement commercial vous contactera dans les 2 jours ouvrables pour discuter du niveau de partenariat adapté.",
    distApplyTalkFirst: "Vous préférez d'abord parler ?",
    distFormCompany: "Nom de l'Entreprise",
    distFormContact: "Personne de Contact",
    distFormEmail: "Adresse E-mail",
    distFormPhone: "Numéro de Téléphone",
    distFormTerritory: "Territoire / Région",
    distFormTier: "Niveau de Partenariat Souhaité",
    distFormTierDefault: "Sélectionnez un niveau",
    distFormInterest: "Domaine de Solution Souhaité",
    distFormInterestDefault: "Sélectionnez un domaine",
    distFormMessage: "Parlez-Nous de Votre Entreprise",
    distFormMessagePh: "Brève description de votre entreprise, clients actuels et raisons pour lesquelles vous souhaitez vous associer à Proxynet…",
    distSubmit: "Soumettre la Candidature",
    distSuccessTitle: "Candidature Reçue",
    distSuccessMsg: "Merci pour votre intérêt pour le Programme Revendeur Proxynet. Notre équipe de développement commercial vous contactera dans les 2 jours ouvrables.",
    // Cloud & Managed Services page
    cmPageTitle: "Cloud & Services Gérés — Proxynet Group",
    cmPageDesc: "Proxynet fournit des services informatiques gérés incluant des solutions d'accès distant, VPN, surveillance de serveurs 24/7, administration de sécurité gérée et détection d'intrusion au Nigeria et en Afrique de l'Ouest.",
    cmHeroEyebrow: "Géré & Cloud",
    cmHeroTitle: "Cloud & Services Gérés",
    cmHeroSub: "Surveillance 24/7, sécurité gérée, accès distant et gestion d'infrastructure — vous offrant des services informatiques de qualité entreprise sans les coûts de construction interne.",
    cmCtaPrimary: "Demander une Proposition",
    cmCtaSecondary: "Nos Services",
    cmServicesEyebrow: "Ce Que Nous Gérons",
    cmServicesHeading: "Services Gérés",
    cmServicesSub: "De l'accès distant à la surveillance de sécurité 24/7 — Proxynet prend en charge la santé, la sécurité et la disponibilité de votre infrastructure informatique.",
    cmBenefitsEyebrow: "Pourquoi les Services Gérés",
    cmBenefitsHeading: "Avantages de l'Externalisation de la Gestion Informatique",
    cmBenefitsSub: "Les services gérés vous offrent des coûts prévisibles, des ressources expertes et un support 24/7 sans la complexité de construire et maintenir une équipe informatique interne.",
    cmProcessEyebrow: "Comment Ça Marche",
    cmProcessHeading: "Notre Processus de Services Gérés",
    cmProcessSub: "Un processus d'intégration et de prestation structuré et transparent — de l'évaluation initiale à la gestion continue 24/7 et aux rapports mensuels.",
    cmFormEyebrow: "Commencer",
    cmFormHeading: "Demander une Proposition de Services Gérés",
    cmFormSub: "Parlez-nous de votre infrastructure et de vos besoins, et nous vous enverrons une proposition sur mesure avec la portée, les termes SLA et les coûts mensuels dans les 48 heures.",
    cmFormName: "Nom Complet",
    cmFormCompany: "Entreprise",
    cmFormEmail: "Adresse E-mail",
    cmFormPhone: "Numéro de Téléphone",
    cmFormService: "Service d'Intérêt",
    cmFormServiceDefault: "Sélectionnez un service",
    cmFormNotes: "Détails de l'Infrastructure",
    cmFormNotesPh: "Nombre d'utilisateurs, nombre de serveurs, infrastructure actuelle (sur site/cloud), localisations et tout défi ou exigence spécifique…",
    cmSubmit: "Soumettre la Demande",
    cmSuccessTitle: "Demande de Proposition Soumise",
    cmSuccessMsg: "Notre équipe de services gérés examinera vos besoins et vous enverra une proposition détaillée dans les 48 heures.",
    // Network Infrastructure page
    netPageTitle: "Infrastructure Réseau & Intégration de Systèmes — Proxynet Group",
    netPageDesc: "Proxynet conçoit et déploie des réseaux LAN, WAN, sans fil et le câblage structuré d'entreprise au Nigeria et en Afrique de l'Ouest.",
    netHeroEyebrow: "AV & Infrastructure",
    netHeroTitle: "Infrastructure Réseau & Intégration de Systèmes",
    netHeroSub: "LAN, WAN, réseaux sans fil et câblage structuré — conçus, déployés et supportés par Proxynet au Nigeria et en Afrique de l'Ouest.",
    netCtaPrimary: "Demander un Devis",
    netCtaSecondary: "Nos Capacités",
    netCapEyebrow: "Ce Que Nous Faisons",
    netCapHeading: "Capacités Réseau Complètes",
    netCapSub: "D'un simple rafraîchissement Wi-Fi à un déploiement WAN multi-sites dans six États — nous concevons et livrons.",
    netDeploymentsEyebrow: "Bilan",
    netDeploymentsHeading: "Déploiements Phares",
    netDeploymentsSub: "Projets d'infrastructure réseau sélectionnés livrés au Nigeria et en Afrique de l'Ouest.",
    netGalleryEyebrow: "Galerie du Projet",
    netGalleryHeading: "OMS Écoles de Nursing — Photos de Site",
    netGallerySub: "Images du déploiement de réseau sans fil dans des écoles de nursing dans six États nigérians.",
    netProcessEyebrow: "Comment Nous Travaillons",
    netProcessHeading: "Notre Processus de Livraison",
    netProcessSub: "Un processus structuré — de l'étude de site au support à long terme — sans surprises.",
    netBrandsEyebrow: "Partenaires Technologiques",
    netBrandsHeading: "Marques Que Nous Déployons",
    netBrandsSub: "Approvisionnement via des canaux agréés avec garantie fabricant et support complet.",
    netFormEyebrow: "Obtenir un Devis",
    netFormHeading: "Demander une Proposition Réseau",
    netFormSub: "Parlez-nous de votre projet et nous vous enverrons une proposition détaillée dans les 24 heures.",
    netFormName: "Nom Complet",
    netFormCompany: "Entreprise",
    netFormEmail: "Adresse E-mail",
    netFormPhone: "Numéro de Téléphone",
    netFormType: "Type de Projet",
    netFormNotes: "Détails du Projet",
    netSubmit: "Soumettre la Demande",
    netSuccessTitle: "Demande Soumise",
    netSuccessMsg: "Notre équipe réseau examinera vos besoins et vous répondra dans les 24 heures.",
    // Cybersecurity page
    cyberPageTitle: "Sécurité IT & Cybersécurité — Proxynet Group",
    cyberPageDesc: "Proxynet déploie des solutions de sécurité BeyondTrust, INETCO et Comforte au Nigeria et en Afrique de l'Ouest — détection d'intrusion, PAM, détection de fraude et sécurité des données.",
    cyberHeroEyebrow: "AV & Infrastructure",
    cyberHeroTitle: "Sécurité IT & Cybersécurité",
    cyberHeroSub: "Pare-feux, détection d'intrusion, gestion des accès privilégiés, surveillance des fraudes et sécurité des données — déployés et gérés par Proxynet au Nigeria et en Afrique de l'Ouest.",
    cyberCtaPrimary: "Demander une Évaluation de Sécurité",
    cyberCtaSecondary: "Nos Partenaires Sécurité",
    cyberCapEyebrow: "Ce Que Nous Faisons",
    cyberCapHeading: "Capacités de Sécurité",
    cyberCapSub: "Une approche en couches pour protéger votre organisation — des pare-feux périmétrique à la gestion des accès privilégiés et à la surveillance des transactions en temps réel.",
    cyberBrandsEyebrow: "Partenaires Technologiques Sécurité",
    cyberBrandsHeading: "Plateformes de Sécurité de Premier Plan",
    cyberBrandsSub: "Proxynet est un déployeur agréé de trois plateformes de sécurité spécialisées — chacune résolvant un défi distinct et critique pour les entreprises.",
    cyberDeploymentsEyebrow: "Bilan",
    cyberDeploymentsHeading: "Déploiements Sécurité Phares",
    cyberDeploymentsSub: "Projets de cybersécurité sélectionnés livrés au Nigeria et en Afrique de l'Ouest.",
    cyberProcessEyebrow: "Comment Nous Travaillons",
    cyberProcessHeading: "Notre Processus de Sécurité",
    cyberProcessSub: "Un processus structuré et répétable — de l'évaluation initiale aux services de sécurité gérés en continu.",
    cyberFormEyebrow: "Commencer",
    cyberFormHeading: "Demander une Évaluation de Sécurité",
    cyberFormSub: "Parlez-nous de votre environnement et nous vous proposerons une proposition de sécurité sur mesure dans les 48 heures.",
    cyberFormName: "Nom Complet",
    cyberFormCompany: "Entreprise",
    cyberFormEmail: "Adresse E-mail",
    cyberFormPhone: "Numéro de Téléphone",
    cyberFormInterest: "Domaine d'Intérêt",
    cyberFormNotes: "Détails du Projet",
    cyberSubmit: "Soumettre la Demande",
    cyberSuccessTitle: "Demande Soumise",
    cyberSuccessMsg: "Notre équipe sécurité examinera vos besoins et vous répondra dans les 48 heures.",
    
    // New Events - 11 additional events with dates and locations (French)
    gitexKenyaName: "Proxynet @ GITEX Kenya",
    gitexKenyaVenue: "Sarit Expo Centre, Nairobi, Kenya",
    gitexKenyaCategory: "Exposition Industrielle",
    gitexKenyaDesc: "Proxynet a présenté des solutions d'entreprise lors du premier événement technologique d'Afrique de l'Est, se connectant avec des leaders technologiques de tout le continent.",
    gitexKenyaPhotoCaption: "Photo d'Équipe GITEX Kenya",
    
    roboXplore2Name: "Robo-Xplore 2.0",
    roboXplore2Venue: "Siège Proxynet, Lagos",
    roboXplore2Category: "Événement Tech Enfants",
    roboXplore2Date: "30 Mai 2026",
    roboXplore2Desc: "Le plus grand événement tech pour enfants de Lagos revient — plus grand, plus audacieux et plus excitant. Les enfants de 5 à 17 ans pilotent de vrais robots, essaient la reconnaissance faciale IA, construisent des mini-robots, participent aux Battle Bots, explorent la VR et apprennent à coder.",
    
    zenithTechFairName: "Proxynet @ Zenith Tech Fair",
    zenithTechFairVenue: "À déterminer",
    zenithTechFairCategory: "Exposition Industrielle",
    zenithTechFairDesc: "Proxynet a présenté les dernières solutions technologiques au Zenith Tech Fair, démontrant notre engagement à faire avancer l'adoption de la technologie d'entreprise en Afrique de l'Ouest.",
    
    beyondTrustEventName: "Événement Proxynet et BeyondTrust",
    beyondTrustEventVenue: "À déterminer",
    beyondTrustEventCategory: "Partenariat Cybersécurité",
    beyondTrustEventDate: "12 Novembre 2025",
    beyondTrustEventDesc: "Un événement exclusif de partenariat cybersécurité présentant les solutions de gestion d'accès privilégiés de BeyondTrust et les technologies de sécurité avancées.",
    
    huaweiClearanceName: "Événement Ventes Déstockage Huawei",
    huaweiClearanceVenue: "À déterminer",
    huaweiClearanceCategory: "Événement Ventes",
    huaweiClearanceDesc: "Événement spécial de ventes déstockage proposant des solutions d'entreprise Huawei à prix réduits, équipements réseau et outils de collaboration.",
    
    gitexNigeriaDay1Name: "Proxynet @ GITEX Nigeria 2025 Jour 1",
    gitexNigeriaDay1Venue: "Eko Hotel and Suites, Lagos",
    gitexNigeriaDay1Category: "Exposition Industrielle",
    gitexNigeriaDay1Date: "3 Septembre 2025",
    gitexNigeriaDay1Desc: "Couverture du Jour 1 de la participation de Proxynet au GITEX Nigeria 2025, la plus grande exposition et conférence technologique d'Afrique de l'Ouest.",
    
    proxynetUniluminExpName: "Expérience Proxynet-Unilumin",
    proxynetUniluminExpVenue: "Siège Proxynet, Lagos",
    proxynetUniluminExpCategory: "Expérience Produit",
    proxynetUniluminExpDate: "31 Juillet 2026",
    proxynetUniluminExpDesc: "Une expérience immersive présentant les dernières innovations technologiques d'affichage LED d'Unilumin en collaboration avec Proxynet, avec des démonstrations en direct et des ateliers techniques.",
    
    huaweiS3LaunchName: "Lancement Huawei S3",
    huaweiS3LaunchVenue: "À déterminer",
    huaweiS3LaunchCategory: "Lancement de Produit",
    huaweiS3LaunchDate: "6 Mai 2026",
    huaweiS3LaunchDesc: "Événement de lancement officiel de la série Huawei IdeaHub S3, présentant les solutions de collaboration et vidéoconférence de nouvelle génération pour les clients d'entreprise.",

    huaweiS3AbujaName: "Lancement Huawei IdeaHub S3 Abuja",
    huaweiS3AbujaVenue: "Abuja",
    huaweiS3AbujaCategory: "Lancement de Produit",
    huaweiS3AbujaDate: "30 Juillet 2026",
    huaweiS3AbujaDesc: "Proxynet a organisé le lancement officiel du Huawei IdeaHub S3 à Abuja, apportant la technologie de collaboration intelligente de nouvelle génération aux clients d'entreprise dans la capitale du Nigeria.",

    yealinkEventName: "Événement Partenaire Yealink",
    yealinkEventVenue: "À déterminer",
    yealinkEventCategory: "Événement Partenaire",
    yealinkEventDesc: "Proxynet a organisé un événement partenaire Yealink présentant les dernières solutions de téléphonie IP, vidéoconférence et communications unifiées.",

    huawei2025ExpName: "Huawei 2025 Lagos Experience",
    huawei2025ExpVenue: "Four Points by Sheraton, Victoria Island, Lagos",
    huawei2025ExpCategory: "Expérience Produit",
    huawei2025ExpDate: "12 Mars 2025",
    huawei2025ExpDesc: "Vivez le Futur de la Collaboration — Proxynet a organisé le Huawei 2025 Lagos Experience, présentant des solutions de bureau intelligent et de salle de classe intelligente, notamment le Huawei eKit, IdeaHub S2 et B3, et des outils de collaboration tout-en-un conçus pour chaque scénario.",
    
    uniluminLedTrainingName: "Formation LED Unilumin",
    uniluminLedTrainingVenue: "À déterminer",
    uniluminLedTrainingCategory: "Atelier de Formation",
    uniluminLedTrainingDate: "28 Avril 2026",
    uniluminLedTrainingDesc: "Formation technique complète sur les solutions d'affichage LED Unilumin, les meilleures pratiques d'installation et les procédures de maintenance pour les partenaires et techniciens.",

    roboXplore1Name: "Robo-Xplore",
    roboXplore1Venue: "Siège Proxynet, Lagos",
    roboXplore1Category: "Événement Tech Enfants",
    roboXplore1Date: "28 Avril 2026",
    roboXplore1Desc: "Le premier événement Robo-Xplore de Proxynet — une expérience technologique pratique pour enfants où ils ont exploré la robotique, le codage, l'IA et l'innovation au siège de Proxynet, Lagos.",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
