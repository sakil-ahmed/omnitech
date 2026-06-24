import { siteConfig } from "@/app/lib/site";

const { company: co } = siteConfig;

export const company = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  tagline: siteConfig.tagline,
  companyTagline: siteConfig.companyTagline,
  description: siteConfig.description,
  shortDescription:
    "Omnitech Inc. delivers software, data, and AI consulting—and builds Shopify apps and custom themes that help merchants run better stores.",
  location: co.location,
  founded: co.founded,
  partnerLabel: co.partners.join(" · "),
  businessHours: co.businessHours,
  responseTime: "Within 24 hours on business days (Sun–Thu, BST)",
  mission:
    "Deliver tailored technology solutions—and build Shopify apps and themes that merchants actually love to use.",
  aboutTitle: `Building since ${co.founded}`,
  aboutParagraphs: [
    `Founded in ${co.founded}, Omnitech Inc. builds Shopify apps, custom themes, and software solutions from Tangail, Dhaka, Bangladesh—serving merchants and businesses worldwide. As a Microsoft Partner and Shopify App Partner, our culture centers on an eagerness to learn, humility, and a passion for solving complex problems.`,
    "We cover the full software development lifecycle—business analysis, design, development, quality assurance, and maintenance. Our Shopify studio extends that expertise to merchants worldwide: we design, build, and publish focused apps on the App Store—and craft custom Online Store 2.0 themes for brands that need a storefront built to convert.",
    "From order notifications to bulk editing, review collection, and volume discounts—each app solves one workflow exceptionally well—simple, reliable, and built with merchants in mind.",
  ],
  headquarters: co.headquarters,
  offices: co.offices,
  phone: co.phone,
  mainWebsite: co.mainWebsite,
  linkedIn: co.linkedIn,
};

export const emails = siteConfig.email;

export const companyStats = [
  { value: co.founded, label: "Founded" },
  { value: "5", label: "Shopify apps", suffix: "+" },
  { value: "1.2K+", label: "Store installs" },
  { value: "4.9★", label: "Average app rating" },
  { value: "99.9%", label: "App uptime" },
];

export const heroStats = companyStats.slice(0, 4);

export const trustItems = [
  "Microsoft Partner",
  "7-day free trial",
  "Billed via Shopify",
  "GDPR ready",
];

export const companyValues = [
  {
    title: "Eagerness to learn",
    description:
      "We stay current with Shopify APIs, Microsoft platforms, and modern engineering practices so our apps and client solutions stay ahead.",
  },
  {
    title: "Humility & partnership",
    description:
      "We listen first—whether partnering with a merchant on an app or a business on a custom software initiative.",
  },
  {
    title: "Solve complex problems",
    description:
      "From data and AI consulting to embedded Shopify apps, we focus on outcomes that save time and drive real business growth.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Research & design",
    description:
      "We study merchant pain points, review App Store gaps, and design apps that solve one workflow exceptionally well.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Build & test",
    description:
      "Using Shopify CLI, Remix, Polaris, and GraphQL—we build embedded apps tested on real dev stores before launch.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "App Store review",
    description:
      "We handle listing copy, screenshots, privacy policy, and Shopify's review process so apps go live smoothly.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "Post-launch we monitor reviews, ship updates, and provide fast support so merchants stay happy and subscribed.",
    icon: "💬",
  },
];

export const platformFeatures = [
  {
    title: "Shopify-native design",
    description:
      "Every app uses Polaris UI and embeds directly in Shopify admin—so merchants feel right at home.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    title: "One-click install",
    description:
      "Merchants install from the Shopify App Store, authorize permissions, and start using—no complex setup.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Secure & compliant",
    description:
      "GDPR-ready data handling, encrypted tokens, and privacy policies that pass Shopify App Store review.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Built on Shopify APIs",
    description:
      "GraphQL Admin API, webhooks, Billing API, theme app extensions, and Liquid—we use the full Shopify platform.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    title: "Custom theme development",
    description:
      "We build Online Store 2.0 themes from scratch—performance-tuned, brand-aligned, and ready for app blocks.",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    title: "Engineering you can trust",
    description:
      "Backed by Omnitech Inc.—a software and Shopify engineering team based in Bangladesh since 2026.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    title: "Regular updates",
    description:
      "We ship bug fixes, new features, and Shopify API updates so apps stay compatible and reliable.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
];

export const faqs = [
  {
    question: "How do I install your Shopify apps?",
    answer:
      "Visit the Shopify App Store, search for the app (e.g. OrderNotify Pro), and click Install. Authorize the requested permissions and the app opens inside your Shopify admin—ready to configure in minutes.",
  },
  {
    question: "How does billing work?",
    answer:
      "All subscriptions are billed through Shopify's billing API. Charges appear on your regular Shopify invoice. Paid plans include a 7-day free trial, and you can cancel anytime from Apps → Manage in your admin.",
  },
  {
    question: "Will the app slow down my store?",
    answer:
      "No. Our apps run as embedded admin tools and use lightweight storefront scripts only when needed (e.g. review widgets). We follow Shopify performance best practices and test on live stores.",
  },
  {
    question: "Do you offer custom Shopify app development?",
    answer:
      `Yes. Omnitech Inc. builds public apps for the App Store and private apps for agencies and brands. Contact us at ${emails.hello} or call ${company.phone.display} with your requirements.`,
  },
  {
    question: "Do you build custom Shopify themes?",
    answer:
      `Yes. We design and develop Online Store 2.0 themes—custom sections, performance optimization, and app block support. Contact us at ${emails.hello} or call ${company.phone.display} to discuss your storefront.`,
  },
  {
    question: "What happens when I uninstall an app?",
    answer:
      "Your subscription stops immediately. Per Shopify policy, we delete store data within 48 hours of uninstall unless you request an export. You can reinstall anytime.",
  },
  {
    question: "How can I get support?",
    answer:
      `Email ${emails.support} or call ${company.phone.display}. We respond within 24 hours on business days (Sun–Thu, BST). Pro plan customers get priority support.`,
  },
  {
    question: "Where is Omnitech based?",
    answer:
      `Omnitech Inc. is headquartered at ${company.headquarters.street}, ${company.headquarters.city}, ${company.headquarters.state} ${company.headquarters.zip}, ${company.headquarters.country}. We serve merchants worldwide through the Shopify App Store.`,
  },
];

export const blogPosts = [
  {
    title: "How to pass Shopify App Store review on the first try",
    excerpt:
      "A checklist for listing quality, privacy policies, OAuth scopes, and common rejection reasons—and how to avoid them.",
    date: "Jun 10, 2026",
    category: "App Store",
    gradient: "from-emerald-500/20 to-teal-500/10",
    status: "Coming soon" as const,
  },
  {
    title: "Shopify embedded apps with Remix: a practical guide",
    excerpt:
      "Set up Shopify CLI, authenticate sessions, use Polaris components, and deploy your first embedded app to production.",
    date: "Jun 3, 2026",
    category: "Development",
    gradient: "from-blue-500/20 to-indigo-500/10",
    status: "Coming soon" as const,
  },
  {
    title: "Choosing the right pricing model for your Shopify app",
    excerpt:
      "Compare free, freemium, usage-based, and flat-rate billing—and how Shopify's Billing API handles each model.",
    date: "May 28, 2026",
    category: "Business",
    gradient: "from-amber-500/20 to-orange-500/10",
    status: "Coming soon" as const,
  },
];

export const marqueeItems = [
  "Microsoft Partner",
  "Shopify App Store",
  "Shopify Themes",
  "Online Store 2.0",
  "Polaris UI",
  "GraphQL Admin API",
  "Custom Software",
  "AI Solutions",
  "Data & BI",
  "Shopify CLI",
  "GDPR Compliant",
];

const hqLine = `${company.headquarters.street}, ${company.headquarters.city}, ${company.headquarters.state} ${company.headquarters.zip}, ${company.headquarters.country}`;

export const contactMethods = [
  {
    title: "Phone",
    value: company.phone.display,
    href: `tel:${company.phone.tel}`,
    description: company.businessHours,
  },
  {
    title: "Email",
    value: emails.support,
    href: `mailto:${emails.support}`,
    description: "App support, billing, partnerships, and general inquiries.",
  },
  {
    title: "Headquarters",
    value: hqLine,
    href: null,
    description: company.businessHours,
  },
  {
    title: company.offices[1].label,
    value: `${company.offices[1].street}, ${company.offices[1].city}, ${company.offices[1].state} ${company.offices[1].zip}, ${company.headquarters.country}`,
    href: null,
    description: `Secondary office · ${company.offices[1].city}`,
  },
];

export const contactSubjects = [
  "App support",
  "Billing question",
  "Refund request",
  "Custom app development",
  "Custom theme development",
  "Custom software / consulting",
  "Partnership",
  "Stock Alert waitlist",
  "Other",
];

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Apps", href: "/apps" },
  { label: "Our Themes", href: "/themes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerResourceLinks = [
  { label: "Help & support", href: "/contact" },
  { label: "Omnitech main site", href: company.mainWebsite, external: true },
  { label: "Shopify App Store", href: "https://apps.shopify.com/", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export const pricingNotes = {
  trial: "7-day free trial on all paid plans",
  billing: "Billed through Shopify",
  cancel: "Cancel anytime from your Shopify admin",
  annualDiscountPercent: 17,
};
