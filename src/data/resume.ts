export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'github';
}

export interface Education {
  school: string;
  degree: string;
  date: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  achievements: string;
}

export interface Certification {
  name: string;
  url: string;
  category: 'shopify' | 'salesforce' | 'cloud' | 'development' | 'methodology' | 'retail';
}

export interface Skill {
  name: string;
  category: 'architecture' | 'commerce' | 'development' | 'data';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  email: string;
  tagline: string;
  aboutParagraphs: string[];
  socialLinks: SocialLink[];
  education: Education[];
  work: WorkExperience[];
  skills: Skill[];
  certifications: Certification[];
  testimonials?: Testimonial[];
  projects?: Project[];
}

const resume: ResumeData = {
  name: 'Neilson Flemming',
  role: 'Principal Technical Architect',
  email: 'NeilsonFlemming@Gmail.com',
  tagline:
    '16+ years architecting commerce technology solutions for enterprise brands.',

  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/neilsonflemming/',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/NeilsonFlemming/',
      icon: 'github',
    },
  ],

  aboutParagraphs: [
    "I've spent my career creating and managing technology stacks for brands you'd recognize — Fendi, Frye Boots, J. McLaughlin, Havaianas, and plenty of others. The full technology stack: e-commerce sites, point-of-sale systems, order management, ERP integrations, you name it.",
    "I wasn't just managing these projects from a distance. I was in the trenches designing architectures, building integrations, writing SOPs, and making sure everything worked 24/7.",
    'That hands-on experience is what makes me effective today. I work with enterprise brands on their commerce technology strategy, helping them choose the right platforms, architect solutions that scale, and navigate complex transformations.',
  ],

  education: [
    {
      school: 'New York City College of Technology',
      degree: 'Bachelor of Technology: Computer Information Systems',
      date: 'May 2012',
    },
    {
      school: 'New York City College of Technology',
      degree: 'Associate of Science: Computer Science',
      date: 'May 2010',
    },
  ],

  work: [
    {
      company: 'Shopify',
      role: 'Head of Enterprise Solution Architecture, North America',
      period: 'June 2022 — Present',
      achievements:
        'Leading a team of enterprise architects who sit at the intersection of technical depth and business strategy. We work with Shopify\'s largest prospective customers — Fortune 500 retailers, iconic global brands — to design scalable solutions that prove what\'s possible on the platform. Part strategist, part technical advisor, part trusted consultant.',
    },
    {
      company: 'Salesforce',
      role: 'Technical Architect (Professional Services)',
      period: 'May 2020 — June 2022',
      achievements:
        'I built enterprise cloud solutions for Salesforce\'s largest clients, focusing on operational efficiency and helping companies modernize their tech. This meant working directly with C-level executives on strategic decisions, developing technology roadmaps, and recommending best practices they could actually implement.',
    },
    {
      company: 'Global Brands Group',
      role: 'Senior Manager, Direct To Consumer Platforms — COE',
      period: 'Jan 2015 — May 2020',
      achievements:
        'I led a three-person center of excellence responsible for the full technology stack across Global Brands Group\'s portfolio (20+ brands) of enterprise retail and e-commerce brands. My team owned architecture, implementation, and day-to-day operations — everything from platform selection to integration design to 24/7 support. We partnered directly with brand executives to build DTC roadmaps grounded in emerging tech rather than hype, identified where the business was leaving revenue on the table, and fixed it.',
    },
    {
      company: 'J.McLaughlin',
      role: 'Enterprise Architect',
      period: 'Jan 2014 — Jan 2015',
      achievements:
        "I was the IT lead for the company's core platforms: Order Management (Order Dynamics), Demand Planning (ITR), and Point-of-Sale (Celerant). This meant overseeing the helpdesk team, keeping all IT systems running smoothly, and managing projects for new features and integrations.",
    },
    {
      company: 'Havaianas',
      role: 'IT Analyst',
      period: 'Jul 2013 — Jan 2014',
      achievements:
        "I led Havaianas' direct-to-consumer launch by designing and implementing the IT infrastructure for their first six retail stores. I worked closely with store operations and design teams to create a replicable store footprint — a playbook that made opening new locations faster and more consistent.",
    },
    {
      company: 'M.X. Data',
      role: 'Retail IT Analyst',
      period: 'Nov 2011 — Jul 2013',
      achievements:
        'I was the IT Support Analyst and Project Manager for a portfolio of luxury retail clients — brands like Lanvin, Burberry, Celine, Marc Jacobs, Fendi, GANT, Carolina Herrera, Jimmy Choo, Dover Street Market, and Comme Des Garcons.',
    },
    {
      company: 'FENDI North America',
      role: 'IT Analyst',
      period: 'Nov 2010 — Nov 2011',
      achievements:
        "I was half of a two-person IT department managing all systems and hardware for FENDI's corporate offices and retail locations across the US and Mexico. I also worked closely with LVMH headquarters to roll out global IT initiatives.",
    },
  ],

  skills: [
    { name: 'Enterprise Architecture', category: 'architecture' },
    { name: 'Solution Design', category: 'architecture' },
    { name: 'System Integration', category: 'architecture' },
    { name: 'Cloud Infrastructure', category: 'architecture' },
    { name: 'E-commerce Platforms', category: 'commerce' },
    { name: 'Point of Sale', category: 'commerce' },
    { name: 'Order Management', category: 'commerce' },
    { name: 'DTC Strategy', category: 'commerce' },
    { name: 'JavaScript', category: 'development' },
    { name: 'Python', category: 'development' },
    { name: 'APIs & Integrations', category: 'development' },
    { name: 'Liquid / Shopify', category: 'development' },
    { name: 'SQL', category: 'data' },
    { name: 'Data Architecture', category: 'data' },
    { name: 'ETL & Pipelines', category: 'data' },
    { name: 'Analytics & Reporting', category: 'data' },
  ],

  certifications: [
    { name: 'Developing Apps for Shopify', url: 'https://www.credly.com/badges/eb7fa02d-4602-4ba9-97c9-f2457ac3a06f', category: 'shopify' },
    { name: 'Customizing the POS Experience', url: 'https://www.credly.com/badges/1debd3a0-d535-4875-af4f-99514c7aa715', category: 'shopify' },
    { name: 'POS Launch and Operations', url: 'https://www.credly.com/badges/78363701-8b94-4a25-b3e7-6c0814b27f3a', category: 'shopify' },
    { name: 'Liquid Storefronts for Theme Developers', url: 'https://www.credly.com/badges/b30aaddc-f0c4-4468-a773-d1c979c0381c', category: 'shopify' },
    { name: 'Headless at Shopify for Business Consultants', url: 'https://www.credly.com/badges/64c7101a-a208-49bd-9081-7b61bb89926c', category: 'shopify' },
    { name: 'Headless at Shopify for Developers', url: 'https://www.credly.com/badges/a64f5c95-3b47-43fd-8a9b-0f4328f9c9ee', category: 'shopify' },
    { name: 'Shopify Foundations', url: 'https://www.credly.com/badges/63e87f80-9cd2-4fc4-9a0a-7b457edf99f4', category: 'shopify' },
    { name: 'Demo2Win!', url: 'https://www.credential.net/02d37d57-8f80-4503-90d7-367890ab68c4#acc.km7N4gXS', category: 'methodology' },
    { name: 'Certified Administrator', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Certified Advanced Administrator', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Certified Platform App Builder', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Sharing And Visibility Designer', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Sales Cloud Consultant', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Service Cloud Consultant', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Data Architecture And Management Designer', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Platform Developer 1', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Application Architect', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'Integration Architect', url: 'https://www.salesforce.com/trailblazer/neilsonf', category: 'salesforce' },
    { name: 'AWS Certified Cloud Practitioner', url: 'https://www.credly.com/badges/8de6bd4e-136a-4f4f-b234-ff474c90146c', category: 'cloud' },
    { name: 'Google Cloud Associate Cloud Engineer', url: 'https://www.credly.com/badges/350ee9d1-783c-4384-84fa-04818a2f1f34', category: 'cloud' },
    { name: 'Microsoft Azure Fundamentals', url: 'https://learn.microsoft.com/en-us/users/neilsonflemmingmailcitytechcunyedu-5313/credentials/b6a73dc67f1bf7b1', category: 'cloud' },
    { name: 'Oracle Cloud Infrastructure AI Foundations', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B9D0ED2D5ADAD6D18DFDB2494C6EC436E5320C3E68E0899FFF6154D21D9D07E3', category: 'cloud' },
    { name: 'Oracle Database for Developers', url: 'https://drive.google.com/file/d/1iEw_EcmWhSUBEx3XoOwPbFIXo6gu4EBJ/view', category: 'cloud' },
    { name: 'VMware VCA — Data Center Virtualization', url: 'https://drive.google.com/file/d/1AzWwlK8hVC5Zm-EvJOTudUBJGK-kOegv/view', category: 'cloud' },
    { name: 'VMware VCA — Cloud', url: 'https://drive.google.com/file/d/1ghPKcVaRDnOA7MmWMvh52xSFejqctYLt/view', category: 'cloud' },
    { name: 'JavaScript Certification (General Assembly)', url: 'https://drive.google.com/file/d/1wPiWp0PVa_DOnXKjX-oBuMiY_TpBjtCB/view', category: 'development' },
    { name: 'Google Python Professional', url: 'https://drive.google.com/file/d/1qzFB-g_zugKpiBTbL2ilQWJkji6v9bnR/view', category: 'development' },
    { name: 'Google IT Support', url: 'https://drive.google.com/file/d/1IwDnMYSFTjwKj5BIb1u-pTUZxCAnRFBk/view', category: 'methodology' },
    { name: 'Certified ScrumMaster\u00AE', url: 'https://drive.google.com/file/d/1CacbBt8zcKmat-zve9Amx9jTdit7wxb7/view', category: 'methodology' },
    { name: 'ITIL Foundation V3', url: 'https://drive.google.com/file/d/1u1eZXib2c7wL4wuR00nSfglAgn0vCzyw/view', category: 'methodology' },
    { name: 'Lean Six Sigma Green Belt', url: 'https://drive.google.com/file/d/1ygv7rUSxS1ulIXqoqGkVcFUzlH6-PuPe/view', category: 'methodology' },
    { name: 'Retail Pro Applications Expert', url: 'https://drive.google.com/file/d/1MeuJfGOeA7muYwCFjFVBfRm28f7vnVA0/view', category: 'retail' },
    { name: 'Retail Pro Reports Professional', url: 'https://drive.google.com/file/d/1QENSrsYn7yNUPSZnKwP4HKeIEGfBgadO/view', category: 'retail' },
    { name: 'Retail Pro System Engineer', url: 'https://drive.google.com/file/d/1im5Vk0flbDv5gEY2WBODuaf0gF-7t7OS/view', category: 'retail' },
  ],
};

export default resume;

export const certCategories = [
  { key: 'shopify' as const, label: 'Shopify' },
  { key: 'salesforce' as const, label: 'Salesforce' },
  { key: 'cloud' as const, label: 'Cloud & Infrastructure' },
  { key: 'development' as const, label: 'Development' },
  { key: 'methodology' as const, label: 'Methodology' },
  { key: 'retail' as const, label: 'Retail Technology' },
];

export const skillCategories = [
  { key: 'architecture' as const, label: 'Architecture' },
  { key: 'commerce' as const, label: 'Commerce' },
  { key: 'development' as const, label: 'Development' },
  { key: 'data' as const, label: 'Data' },
];
