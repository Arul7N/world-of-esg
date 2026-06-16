import type { NavItem, SolutionCard, TeamMember, IndustryCard, Framework, PartnerCard, WhyUsItem } from '@/types'

export const APP_VERSION = '1.1.0'

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Frameworks', href: '#frameworks' },
  { name: 'Impact', href: '#impact' },
  { name: 'Partners', href: '#partners' }
]

export const SOLUTIONS: SolutionCard[] = [
  {
    id: 'strategy',
    index: 1,
    title: 'ESG Strategy & Advisory',
    subtitle: 'Strategy',
    description: 'Helping organizations build future-ready climate strategies, grounded in policy and science.',
    features: [
      'Decoding Policies (BRSR, EPR, SWM)',
      'Science-Based Targets (SBTi)',
      'ESG Governance',
      'Stakeholder Engagement',
      'Climate Risk Assessments',
      'Net-Zero Pathways'
    ],
    color: '#1D6B43'
  },
  {
    id: 'platform',
    index: 2,
    title: 'SaaS Carbon Intelligence Platform',
    subtitle: 'Technology',
    description: 'One platform for all your ESG data, reporting, and compliance.',
    features: [
      'Carbon Accounting',
      'Automated Reporting',
      'PCF Calculator',
      'LCA Tools',
      'Carbon Credits',
      'GRI / BRSR Engine',
      'CBAM Compliance',
      'Analytics & AI'
    ],
    color: '#0FA37F'
  },
  {
    id: 'capability',
    index: 3,
    title: 'ESG Skill Development',
    subtitle: 'Capability',
    description: 'Closing the talent gap — for corporates and universities alike.',
    features: [
      'Leadership bootcamps',
      'Reporting workshops',
      'Supply chain training',
      'Carbon accounting certification',
      'ESG curriculum design',
      'Faculty development',
      'Guest lectures',
      'Student consulting projects'
    ],
    color: '#7430A4'
  },
  {
    id: 'implementation',
    index: 4,
    title: 'Decarbonization Implementation',
    subtitle: 'Decarbonization',
    description: 'Turning strategy into measurable impact on the ground.',
    features: [
      'Baseline Assessments',
      'Roadmap Design',
      'Technology Deployment',
      'Monitoring & Verification',
      'Renewable transitions',
      'Industrial decarbonization',
      'Scope 3 reduction programs',
      'Nature-based solutions'
    ],
    color: '#1D6B43'
  },
  {
    id: 'research',
    index: 5,
    title: 'ESG Research',
    subtitle: 'Research',
    description: 'Cutting-edge research and insights driving sustainable innovation.',
    features: [
      'Climate risk assessment',
      'Sustainable finance',
      'Carbon markets',
      'Nature-based solutions',
      'White papers',
      'Market insights',
      'Policy analysis',
      'Best practices'
    ],
    color: '#CBBE8A'
  },
  {
    id: 'legal',
    index: 6,
    title: 'Legal Aspects of Environment',
    subtitle: 'Legal',
    description: 'Comprehensive legal guidance for environmental compliance and governance.',
    features: [
      'Environmental law compliance',
      'Regulatory framework navigation',
      'Contract drafting & review',
      'Litigation support'
    ],
    color: '#3A4DB8'
  }
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    initials: 'AM',
    linkedIn: '#',
    background: 'linear-gradient(165deg, #0F3A27, #1D6B43)'
  },
  {
    name: 'Priya Nair',
    role: 'Head of ESG Strategy',
    initials: 'PN',
    linkedIn: '#',
    background: 'linear-gradient(165deg, #0E2348, #3447B8)'
  },
  {
    name: 'Ravi Krishnaswamy',
    role: 'Chief Technology Officer',
    initials: 'RK',
    linkedIn: '#',
    background: 'linear-gradient(165deg, #2A1150, #55309A)'
  },
  {
    name: 'Kavya Reddy',
    role: 'Head of Capability Building',
    initials: 'KR',
    linkedIn: '#',
    background: 'linear-gradient(165deg, #103A28, #117C50)'
  }
]

export const INDUSTRIES: IndustryCard[] = [
  {
    title: 'Manufacturing & Heavy Industry',
    description: 'Steel, cement, chemicals, and automotive — building CBAM-readiness, BRSR Core compliance, and science-based decarbonization roadmaps for sectors where hard-to-abate is the real challenge.',
    icon: 'cpu',
    color: '#1D6B43',
    badges: ['CBAM', 'BRSR Core', 'SBTi']
  },
  {
    title: 'Exporters & Trade-Exposed',
    description: 'Companies exporting to the EU face CBAM carbon cost pass-through now. We map embedded emissions, calculate CBAM liability, and build the Scope 3 data systems EU buyers and regulators require.',
    icon: 'share',
    color: '#3A4DB8',
    badges: ['CBAM Liability', 'Scope 3', 'PCF']
  },
  {
    title: 'Financial Institutions & NBFCs',
    description: 'Banks, insurers, and asset managers under TCFD and green taxonomy pressure. We translate climate risk into portfolio language and build the internal governance that regulators and investors now expect.',
    icon: 'scale',
    color: '#7430A4',
    badges: ['TCFD / ISSB', 'Green Taxonomy', 'Climate Risk']
  },
  {
    title: 'Corporates & Listed Enterprises',
    description: 'SEBI-listed companies navigating BRSR mandates, investor ESG scrutiny, and integrated sustainability reporting. We make your disclosure credible, comparative, and board-ready.',
    icon: 'target',
    color: '#117C50',
    badges: ['BRSR', 'Investor ESG', 'Board-Ready']
  },
  {
    title: 'Universities & Academia',
    description: 'Co-designing ESG curricula, embedding sustainability into MBA and engineering programmes, and building campus net-zero strategies — preparing the next generation for a low-carbon economy.',
    icon: 'users',
    color: '#7430A4',
    badges: ['ESG Curricula', 'Net-Zero Campus', 'Certification']
  },
  {
    title: 'Supply Chains & Value Networks',
    description: 'Tier-2 and tier-3 supplier emissions mapping, disclosure readiness for buyer requirements, and decarbonization roadmaps that reduce Scope 3 exposure across the entire value chain.',
    icon: 'zap',
    color: '#3A4DB8',
    badges: ['Scope 3', 'Tier 2–3 Mapping', 'Disclosure']
  }
]

export const FRAMEWORKS: Framework[] = [
  {
    id: 'brsr',
    abbreviation: 'BRSR',
    fullName: 'Business Responsibility & Sustainability Reporting',
    description: 'India\'s mandatory ESG disclosure for the top 1,000 listed companies — we make it board-ready and assurance-proof.',
    category: 'india',
    badge: 'India · SEBI Mandate',
    status: 'active'
  },
  {
    id: 'eu-csrd',
    abbreviation: 'EU CSRD',
    fullName: 'Corporate Sustainability Reporting Directive',
    description: 'Europe\'s flagship sustainability directive — we run your double-materiality assessment and map you to ESRS, before the deadline.',
    category: 'eu',
    badge: 'EU · Double Materiality',
    status: 'active'
  },
  {
    id: 'cbam',
    abbreviation: 'CBAM',
    fullName: 'Carbon Border Adjustment Mechanism',
    description: 'The EU\'s carbon border tax is live — we calculate your liability per shipment and build the data EU importers demand.',
    category: 'eu',
    badge: 'EU Trade · Live Now',
    status: 'active'
  },
  {
    id: 'tcfd',
    abbreviation: 'TCFD / ISSB',
    fullName: 'Climate-Related Financial Disclosure',
    description: 'Climate risk in investor language — governance, strategy, risk, and metrics aligned to IFRS S2.',
    category: 'global',
    badge: 'Global · Investor-Focused',
    status: 'active'
  },
  {
    id: 'gri',
    abbreviation: 'GRI',
    fullName: 'Global Reporting Initiative',
    description: 'The world\'s most-used reporting standard — one report that satisfies investors, regulators, and stakeholders at once.',
    category: 'global',
    badge: 'Global · Stakeholder Standard',
    status: 'ongoing'
  },
  {
    id: 'ghg-protocol',
    abbreviation: 'GHG Protocol',
    fullName: 'Corporate GHG Accounting',
    description: 'The foundation: your full Scope 1, 2, and 3 inventory — audit-ready, defensible, and reusable across every framework.',
    category: 'global',
    badge: 'Global · Scope 1, 2, 3',
    status: 'ongoing'
  },
  {
    id: 'sbti',
    abbreviation: 'SBTi',
    fullName: 'Science Based Targets initiative',
    description: 'Science-validated net-zero targets on a 1.5°C pathway — we get you through validation and keep you there.',
    category: 'global',
    badge: 'Global · 1.5°C Aligned',
    status: 'ongoing'
  },
  {
    id: 'pcf-lca',
    abbreviation: 'PCF & LCA',
    fullName: 'Product Carbon Footprint & LCA',
    description: 'Product-level carbon accounting — the backbone of CBAM compliance and green claims that withstand third-party scrutiny.',
    category: 'global',
    badge: 'Product · Supply Chain',
    status: 'ongoing'
  },
  {
    id: 'epr-swm',
    abbreviation: 'EPR / SWM',
    fullName: 'EPR & Solid Waste Management',
    description: 'Producer responsibility across plastics, e-waste, and batteries — registrations, filings, and credible recovery channels.',
    category: 'india',
    badge: 'India · Producer Obligations',
    status: 'active'
  }
]

export const PARTNERS: PartnerCard[] = [
  {
    title: 'Academic Partnerships',
    description: 'Business schools and research universities co-designing ESG curricula, running joint climate studies, and embedding sustainability into MBA and engineering programmes.',
    icon: 'users',
    borderColor: '#1D6B43'
  },
  {
    title: 'Registry & Standards Integration',
    description: 'Deep alignment with GHG Protocol, SBTi verification bodies, and BRSR assurance frameworks — ensuring every disclosure we support meets the evidentiary standards of global registries.',
    icon: 'scale',
    borderColor: '#117C50'
  },
  {
    title: 'Carbon Market Access',
    description: 'Connections into voluntary carbon markets, offset verification programmes, and compliance carbon market channels — helping clients access credible, high-integrity offset opportunities.',
    icon: 'globe',
    borderColor: '#2FA66A'
  },
  {
    title: 'Technology & Implementation',
    description: 'Cloud infrastructure, AI/ML data analytics, and enterprise integrations that power our SaaS platform — selected for reliability, security, and performance at institutional scale.',
    icon: 'cpu',
    borderColor: '#3A4DB8'
  }
]

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: '360° Integration',
    description: 'Strategy, technology, training, and execution in one continuous system — not siloed services handed off between different firms.',
    icon: 'infinity',
    color: '#1D6B43',
    backgroundColor: 'rgba(29,107,67,.10)'
  },
  {
    title: 'Purpose-Built Technology',
    description: 'Built from the ground up for climate and ESG intelligence — not a generic platform with sustainability bolted on as an afterthought.',
    icon: 'cpu',
    color: '#117C50',
    backgroundColor: 'rgba(17,124,80,.10)'
  },
  {
    title: 'Domain Expertise',
    description: 'Credentialed climate scientists, carbon accountants, policy specialists, and technologists — not generalists with a sustainability pitch deck.',
    icon: 'users',
    color: '#3A4DB8',
    backgroundColor: 'rgba(58,77,184,.10)'
  },
  {
    title: 'Speed to Compliance',
    description: 'Pre-built framework templates and automated data pipelines reduce first-year reporting time by up to 70% versus manual approaches.',
    icon: 'zap',
    color: '#2FA66A',
    backgroundColor: 'rgba(47,166,106,.12)'
  },
  {
    title: 'Ecosystem Partnerships',
    description: 'Academic, technology, certification body, and industry association partnerships that extend our reach and reinforce your credibility.',
    icon: 'share',
    color: '#7430A4',
    backgroundColor: 'rgba(116,48,164,.10)'
  },
  {
    title: 'Measurable Outcomes',
    description: 'Every engagement starts with a verified baseline. Every deliverable maps to a climate outcome you can report to boards, investors, and regulators.',
    icon: 'target',
    color: '#1D6B43',
    backgroundColor: 'rgba(29,107,67,.10)'
  }
]

export const MARKET_STATS = [
  { value: '53', label: 'Global ESG advisory market by 2028.', prefix: '$', suffix: 'B' },
  { value: '7', label: 'Green investment needed by 2030.', prefix: '$', suffix: 'T' },
  { value: '50', label: 'Companies under mandatory reporting.', prefix: '', suffix: 'K+' },
  { value: '2.4', label: 'ESG talent gap by 2030.', prefix: '', suffix: 'M', decimals: 1 }
]

export const IMPACT_METRICS = [
  { value: '70', label: 'of reporting time, reclaimed.', suffix: '%' },
  { value: '500', label: 'learners', suffix: '+' },
  { value: '20', label: 'platform modules', suffix: '+' },
  { value: '6', label: 'pillars, one system', suffix: '' }
]