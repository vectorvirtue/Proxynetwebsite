export const getCategories = (t) => [
  t.blogCatAll,
  t.blogCatTechInsights,
  t.blogCatCompanyNews,
  t.blogCatPartnerUpdates,
  t.blogCatIndustryFocus,
  t.blogCatEdTech,
]

// Article body content stays in English (long-form content)
const postContent = {
  'why-cybersecurity-matters-african-businesses': `
## The Growing Threat Landscape

Cybersecurity incidents in Africa have increased by over 200% in the past three years. As businesses digitise their operations, they become increasingly attractive targets for cybercriminals.

## Why African Businesses Are Vulnerable

Many organisations across West Africa are running legacy systems, lack dedicated IT security teams, and have not implemented basic security hygiene practices. This creates significant exposure.

## What You Can Do

1. **Conduct a security audit** — understand your current exposure
2. **Implement multi-factor authentication** — on all critical systems
3. **Train your staff** — human error is the leading cause of breaches
4. **Deploy endpoint protection** — on all devices
5. **Have a response plan** — know what to do when (not if) an incident occurs

## How Proxynet Can Help

Our cybersecurity team provides end-to-end security assessments, implementation, and ongoing monitoring. Contact us to discuss your security posture.
  `,
  'state-of-enterprise-networking-west-africa-2026': `
## The Connectivity Revolution

West Africa is experiencing a connectivity revolution. Submarine cable landings, fibre rollouts, and 5G deployments are transforming what is possible for enterprise networking.

## Key Trends in 2026

### SD-WAN Adoption
Software-defined WAN is becoming the standard for multi-site organisations, offering better performance, lower costs, and centralised management.

### Fibre to the Enterprise
More organisations are moving away from microwave and satellite links to dedicated fibre connections, driven by falling costs and improved availability.

### Network Security Convergence
The lines between networking and security are blurring, with SASE (Secure Access Service Edge) gaining traction among larger enterprises.

## What This Means for Your Business

If your organisation is still running legacy WAN infrastructure, now is the time to evaluate your options. The cost of upgrading has never been lower, and the performance benefits are significant.
  `,
  'building-disaster-recovery-plan-that-works': `
## Why Most DR Plans Fail

A disaster recovery plan is only as good as its last test. Most organisations create a DR plan, file it away, and never revisit it — until disaster strikes.

## The Proxynet DR Framework

### 1. Risk Assessment
Identify your critical systems, data, and processes. Understand what failure would cost your business per hour.

### 2. Recovery Objectives
Define your RTO (Recovery Time Objective) and RPO (Recovery Point Objective) for each critical system.

### 3. Backup Strategy
Implement the 3-2-1 rule: 3 copies of data, on 2 different media, with 1 offsite.

### 4. Test Regularly
A DR plan that has never been tested is not a DR plan. Schedule quarterly tests.

### 5. Document Everything
Ensure multiple people know how to execute the plan — not just the IT manager.

## Getting Started

Contact our team for a free DR assessment. We will help you identify gaps and build a plan that actually works.
  `,
  'huawei-ideahub-s3-launch-lagos': `
## A New Era of Smart Collaboration

On May 6, 2026, Proxynet Communications hosted the official Nigerian launch of the Huawei IdeaHub S3 at Four Points by Sheraton, Victoria Island, Lagos.

## What is the IdeaHub S3?

The Huawei IdeaHub S3 is an all-in-one smart collaboration board designed for modern meeting rooms. It combines a 4K display, built-in camera, microphone array, and collaboration software in a single device.

## Event Highlights

The event brought together IT decision-makers, procurement teams, and technology enthusiasts from across Lagos. Attendees experienced live demonstrations of the IdeaHub S3's capabilities.

## Availability

The Huawei IdeaHub S3 is now available through Proxynet Communications. Contact our sales team for pricing and installation details.
  `,
  'smart-classrooms-transforming-education-nigeria': `
## The Smart Classroom Revolution

Technology is transforming how students learn across Nigeria. Interactive displays, digital content, and connected classrooms are no longer a luxury — they are becoming a necessity.

## What We Have Learned

After deploying smart classroom solutions in over 20 schools across Lagos State, our EdTech team has identified the key factors that determine success.

### Teacher Training is Critical
Technology without training is just expensive furniture. Every deployment must include comprehensive teacher training.

### Infrastructure First
Before installing displays and devices, schools need reliable power and internet connectivity. We always assess infrastructure before recommending solutions.

### Content Matters
The best hardware is useless without quality digital content. We work with content partners to ensure schools have access to curriculum-aligned digital resources.

## Partner With Us

If your school or institution is interested in smart classroom solutions, contact our EdTech team.
  `,
  'samsung-b2b-partnership-proxynet': `
## A Decade of Partnership

Proxynet Communications has renewed its Samsung B2B partnership for 2026, continuing a relationship that has spanned over a decade and delivered hundreds of display and AV solutions across West Africa.

## What This Means for Our Clients

As a Samsung B2B partner, Proxynet clients benefit from:

- Access to the full Samsung B2B product range
- Priority support and warranty services
- Competitive pricing on large format displays, videowalls, and commercial screens
- Technical training and certification

## Samsung B2B Products We Supply

- Large Format Displays (LFD)
- Videowalls
- Interactive Displays
- Commercial Monitors
- Digital Signage Solutions

Contact our sales team to discuss your Samsung display requirements.
  `,
}

export const getPosts = (t) => [
  {
    slug: 'why-cybersecurity-matters-african-businesses',
    title: t.post1Title,
    category: t.blogCatTechInsights,
    author: 'Proxynet Team',
    date: 'April 12, 2026',
    readTime: '5 min read',
    excerpt: t.post1Excerpt,
    content: postContent['why-cybersecurity-matters-african-businesses'],
  },
  {
    slug: 'state-of-enterprise-networking-west-africa-2026',
    title: t.post2Title,
    category: t.blogCatIndustryFocus,
    author: 'Proxynet Team',
    date: 'March 28, 2026',
    readTime: '7 min read',
    excerpt: t.post2Excerpt,
    content: postContent['state-of-enterprise-networking-west-africa-2026'],
  },
  {
    slug: 'building-disaster-recovery-plan-that-works',
    title: t.post3Title,
    category: t.blogCatTechInsights,
    author: 'Proxynet Team',
    date: 'March 10, 2026',
    readTime: '6 min read',
    excerpt: t.post3Excerpt,
    content: postContent['building-disaster-recovery-plan-that-works'],
  },
  {
    slug: 'huawei-ideahub-s3-launch-lagos',
    title: t.post4Title,
    category: t.blogCatCompanyNews,
    author: 'Proxynet Team',
    date: 'May 6, 2026',
    readTime: '3 min read',
    excerpt: t.post4Excerpt,
    content: postContent['huawei-ideahub-s3-launch-lagos'],
  },
  {
    slug: 'smart-classrooms-transforming-education-nigeria',
    title: t.post5Title,
    category: t.blogCatEdTech,
    author: 'Proxynet EdTech Team',
    date: 'February 20, 2026',
    readTime: '5 min read',
    excerpt: t.post5Excerpt,
    content: postContent['smart-classrooms-transforming-education-nigeria'],
  },
  {
    slug: 'samsung-b2b-partnership-proxynet',
    title: t.post6Title,
    category: t.blogCatPartnerUpdates,
    author: 'Proxynet Team',
    date: 'January 15, 2026',
    readTime: '2 min read',
    excerpt: t.post6Excerpt,
    content: postContent['samsung-b2b-partnership-proxynet'],
  },
]
