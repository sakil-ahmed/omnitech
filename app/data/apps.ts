export type AppPlan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
};

export type AppFeature = {
  title: string;
  description: string;
  icon: string;
};

export type AppThemeExtension = {
  name: string;
  blockName: string;
  description: string;
  setupSteps: { title: string; description: string }[];
  settings: string[];
  techNotes: string[];
};

export type App = {
  slug: string;
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  glow: string;
  status: "Live on App Store" | "Coming soon";
  iconPath: string;
  rating: number;
  reviewCount: string;
  installs: string;
  features: AppFeature[];
  highlights: string[];
  steps: { title: string; description: string }[];
  plans: AppPlan[];
  faqs: { question: string; answer: string }[];
  shopifyUrl: string;
  themeExtension?: AppThemeExtension;
};

/**
 * App catalog — add new Shopify apps here.
 *
 * 1. Copy the CartLift object below as a template.
 * 2. Set a unique slug, id, and increment num (e.g. "02").
 * 3. Pages, pricing tabs, sitemap, and homepage grid update automatically.
 */
export const apps: App[] = [
  {
    slug: "cartlift",
    id: "cartlift",
    num: "01",
    title: "CartLift",
    tagline: "AI upsells, bundles & cross-sells for Shopify",
    description:
      "AI-powered upsells across product, cart, checkout, and post-purchase—plus a beautiful cart drawer, A/B testing, and analytics to grow average order value.",
    longDescription:
      "CartLift is your full upselling funnel in one app. AI recommends the right products at every step—product pages, cart drawer, checkout, and post-purchase—while bundles and cross-sells lift revenue without extra dev work. Set up in 5 minutes, test with A/B experiments, and track performance with advanced analytics and customer segmentation.",
    color: "from-indigo-500 to-sky-600",
    glow: "group-hover:shadow-indigo-500/20",
    status: "Live on App Store",
    iconPath:
      "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    rating: 4.9,
    reviewCount: "40+",
    installs: "150+",
    features: [
      {
        title: "AI product recommendations",
        description:
          "Smart suggestions based on cart contents, browsing behavior, and purchase history—shown at the right moment.",
        icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
      },
      {
        title: "AI upsells, bundles & cross-sells",
        description:
          "Automatically surface complementary products, bundle deals, and cross-sell offers customers are most likely to accept.",
        icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      },
      {
        title: "Full upselling funnel",
        description:
          "Run offers on product pages, cart drawer, checkout, and post-purchase—one connected funnel from browse to buy again.",
        icon: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3",
      },
      {
        title: "A/B testing",
        description:
          "Test upsell layouts, copy, and product sets—see which variants drive more revenue with built-in experiments.",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
      },
      {
        title: "Advanced analytics & segmentation",
        description:
          "Track upsell revenue, conversion rates, and funnel performance—target offers by customer segment and order value.",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
      },
      {
        title: "5-minute setup & 24/7 support",
        description:
          "Go live in minutes with no code. Available on development stores—and our team is here around the clock on live chat.",
        icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
      },
    ],
    highlights: [
      "Available on development stores",
      "AI upsells & recommendations",
      "Full funnel: product to post-purchase",
      "Free plan available",
    ],
    steps: [
      {
        title: "Install CartLift",
        description: "Add the app from the Shopify App Store—free trial starts at first install on Pro or Premium.",
      },
      {
        title: "Configure your funnel",
        description: "Set AI upsells, bundles, and cross-sells for product, cart, checkout, and post-purchase.",
      },
      {
        title: "Go live in 5 minutes",
        description: "Enable the cart drawer embed and start tracking upsell revenue from your dashboard.",
      },
    ],
    plans: [
      {
        name: "Free",
        price: 0,
        description: "Up to 50 orders or $50 upsell revenue / month",
        features: [
          "Available on development stores",
          "AI product recommendations",
          "AI upsells, bundles & cross-sells",
          "Cart drawer upsells",
          "Up to 50 orders or $50 upsell revenue",
        ],
        popular: false,
      },
      {
        name: "Pro",
        price: 5,
        description: "Up to 100 orders or $100 upsell revenue / month",
        features: [
          "A/B testing & full upselling funnel",
          "AI product recommendations",
          "AI upsells, bundles & cross-sells",
          "Product, cart, checkout & post-purchase",
          "Advanced analytics & segmentation",
          "5-minute setup & 24/7 live chat support",
          "Up to 100 orders or $100 upsell revenue",
          "Free trial starts at first install",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: 10,
        description: "Up to 200 orders or $200 upsell revenue / month",
        features: [
          "Everything in Pro",
          "A/B testing & full upselling funnel",
          "AI product recommendations",
          "AI upsells, bundles & cross-sells",
          "Product, cart, checkout & post-purchase",
          "Advanced analytics & segmentation",
          "5-minute setup & 24/7 live chat support",
          "Up to 200 orders or $200 upsell revenue",
          "Free trial starts at first install",
        ],
        popular: false,
      },
    ],
    faqs: [
      {
        question: "Is CartLift available on development stores?",
        answer:
          "Yes. CartLift works on Shopify development stores so you can test the full upselling funnel before going live on your production store.",
      },
      {
        question: "What's included in the Free plan?",
        answer:
          "The Free plan includes AI recommendations, upsells, bundles, cross-sells, and cart drawer offers—up to 50 orders or $50 in upsell revenue per month, whichever comes first.",
      },
      {
        question: "What's the difference between Pro and Premium?",
        answer:
          "Pro ($5/month) unlocks the full upselling funnel, A/B testing, analytics, segmentation, and 24/7 live chat—up to 100 orders or $100 upsell revenue per month. Premium ($10/month) includes everything in Pro with higher limits: up to 200 orders or $200 upsell revenue. Both paid plans include a free trial at first install.",
      },
      {
        question: "Does CartLift slow down my store?",
        answer:
          "No. Upsell widgets and the cart drawer load asynchronously and are optimized for Core Web Vitals.",
      },
    ],
    shopifyUrl: "https://apps.shopify.com/",
    themeExtension: {
      name: "CartLift Drawer",
      blockName: "CartLift cart drawer",
      description:
        "A theme app extension that replaces the default cart with a slide-out drawer. Upsell offers, free-shipping progress, and gift tiers sync from the CartLift admin via shop metafields—merchants customize colors and copy in the theme editor.",
      setupSteps: [
        { title: "Open the theme editor", description: "Go to Online Store → Themes → Customize." },
        { title: "Open App embeds", description: "Click the App embeds icon in the left sidebar." },
        {
          title: "Enable CartLift",
          description: "Toggle on CartLift cart drawer and save your theme.",
        },
        {
          title: "Customize & save",
          description: "Adjust drawer accent color and cart icon behavior, then publish.",
        },
      ],
      settings: ["Accent color", "Cart icon selector", "Drawer heading"],
      techNotes: [
        "Extension type: theme app extension (cartlift-drawer)",
        "Embed target: global (app embed)",
        "Data source: shop.metafields.cartlift.config (JSON)",
        "Assets: cartlift.css + cartlift.js (drawer + upsell carousel)",
        "Cart API: Shopify Ajax Cart API + Storefront API",
      ],
    },
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id);
}

export const appPlansMap = Object.fromEntries(
  apps.filter((a) => a.status === "Live on App Store").map((a) => [a.id, a.plans])
);

export const liveApps = apps.filter((a) => a.status === "Live on App Store");

export const comingSoonApps = apps.filter((a) => a.status === "Coming soon");

/** CSS grid classes for app listing cards (1 → narrow, 2+ → responsive grid). */
export function getAppsGridClass(count = apps.length): string {
  if (count <= 1) return "max-w-xl";
  if (count === 2) return "sm:grid-cols-2";
  return "sm:grid-cols-2 lg:grid-cols-3";
}
