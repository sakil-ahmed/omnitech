export type ThemeFeature = {
  title: string;
  description: string;
  icon: string;
};

export type Theme = {
  slug: string;
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  glow: string;
  status: "Available" | "Coming soon" | "Custom build";
  category: string;
  highlights: string[];
  features: ThemeFeature[];
  sections: string[];
  templates: string[];
  faqs: { question: string; answer: string }[];
  demoUrl?: string;
};

export const themeStudio = {
  eyebrow: "Shopify themes",
  title: "Custom themes that convert",
  description:
    "Beyond apps, we design and build Shopify Online Store 2.0 themes—fast, brand-aligned storefronts with sections merchants can customize without touching code.",
  highlights: [
    "Online Store 2.0",
    "Core Web Vitals optimized",
    "App block ready",
    "Merchant-friendly sections",
  ],
};

export type ThemeCapability = {
  title: string;
  description: string;
  icon: string;
};

export const themeCapabilities: ThemeCapability[] = [
  {
    title: "Online Store 2.0",
    description:
      "JSON templates, flexible sections, and app blocks—built on Shopify's modern theme architecture.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    title: "Performance first",
    description:
      "Lean Liquid, optimized assets, and lazy loading—storefronts tuned for speed and Core Web Vitals.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Brand & UX design",
    description:
      "From wireframes to polished product pages—we match your brand and guide shoppers to checkout.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245A4.5 4.5 0 008.25 20.25H14.5a4.5 4.5 0 003.772-2.03 2.25 2.25 0 01-2.4-2.245 3 3 0 00-5.78-1.128 3 3 0 00-4.382-2.97 2.25 2.25 0 01-2.4-2.245A4.5 4.5 0 003.75 6.75h13.5a4.5 4.5 0 013.772 2.03 2.25 2.25 0 01-2.4 2.245 3 3 0 00-4.382 2.97z",
  },
  {
    title: "App extension ready",
    description:
      "Themes built to work with our apps and third-party extensions—no fragile Liquid overrides.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
];

export const themes: Theme[] = [
  {
    slug: "amara",
    id: "amara",
    num: "01",
    title: "Amara",
    tagline: "Editorial fashion & lifestyle",
    description:
      "A refined Online Store 2.0 theme for fashion and lifestyle brands—editorial layouts, lookbooks, and quick-buy product cards.",
    longDescription:
      "Amara is built for brands that lead with storytelling. Editorial hero sections, shoppable lookbooks, and size-guide modals help fashion merchants showcase collections beautifully—while staying fast, accessible, and easy to customize in the theme editor.",
    color: "from-rose-500 to-fuchsia-600",
    glow: "group-hover:shadow-rose-500/20",
    status: "Available",
    category: "Fashion & apparel",
    highlights: [
      "Shoppable lookbook sections",
      "Size guide & fit finder",
      "Quick add on collection grids",
      "OS 2.0 app blocks",
    ],
    features: [
      {
        title: "Editorial hero",
        description: "Full-bleed imagery with split layouts, video support, and collection CTAs.",
        icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
      },
      {
        title: "Lookbook grid",
        description: "Tag products on lifestyle imagery so shoppers discover outfits in context.",
        icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
      },
      {
        title: "Variant swatches",
        description: "Color and pattern swatches on product and collection pages with sold-out states.",
        icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245A4.5 4.5 0 008.25 20.25H14.5a4.5 4.5 0 003.772-2.03 2.25 2.25 0 01-2.4-2.245 3 3 0 00-5.78-1.128 3 3 0 00-4.382-2.97 2.25 2.25 0 01-2.4-2.245A4.5 4.5 0 003.75 6.75h13.5a4.5 4.5 0 013.772 2.03 2.25 2.25 0 01-2.4 2.245 3 3 0 00-4.382 2.97z",
      },
      {
        title: "Sticky add to cart",
        description: "Mobile-first sticky bar with variant picker and express checkout buttons.",
        icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      },
      {
        title: "Mega menu",
        description: "Promotional columns, featured collections, and image tiles in the navigation.",
        icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",
      },
      {
        title: "Performance tuned",
        description: "Lazy-loaded media, critical CSS, and optimized fonts for Core Web Vitals.",
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
      },
    ],
    sections: [
      "Editorial hero",
      "Featured collection",
      "Lookbook grid",
      "Image with text",
      "Testimonials",
      "Instagram feed",
      "Newsletter signup",
      "Rich footer",
    ],
    templates: ["Home", "Collection", "Product", "Blog", "Article", "Cart", "Search", "404"],
    faqs: [
      {
        question: "Is Amara built on Online Store 2.0?",
        answer:
          "Yes. Amara uses JSON templates, section groups, and app blocks throughout—merchants customize everything from the theme editor without editing Liquid.",
      },
      {
        question: "Does Amara support app blocks?",
        answer:
          "Yes. Product, collection, and cart templates include app block areas compatible with review widgets, upsells, and our TierBloom volume tiers block.",
      },
      {
        question: "Can I request custom sections?",
        answer:
          "Absolutely. Amara is available as a base theme—we can extend it with bespoke sections, brand styling, and integrations for your store.",
      },
    ],
  },
  {
    slug: "meridian",
    id: "meridian",
    num: "02",
    title: "Meridian",
    tagline: "Minimal DTC storefront",
    description:
      "Clean, conversion-focused layouts for direct-to-consumer brands—hero storytelling, social proof, and streamlined checkout paths.",
    longDescription:
      "Meridian strips away distraction so your products shine. Built for DTC merchants who want a premium feel without complexity—modular sections, trust badges, and comparison tables that help shoppers decide faster.",
    color: "from-slate-600 to-zinc-800",
    glow: "group-hover:shadow-slate-500/20",
    status: "Available",
    category: "Direct-to-consumer",
    highlights: [
      "Conversion-first product pages",
      "Comparison tables",
      "Trust & review blocks",
      "Subscription-ready layout",
    ],
    features: [
      {
        title: "Split hero",
        description: "Product-forward hero with dual CTAs, star ratings, and benefit bullets.",
        icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75",
      },
      {
        title: "Comparison table",
        description: "Side-by-side variant or plan comparison with highlighted recommended option.",
        icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
      },
      {
        title: "Social proof bar",
        description: "Scrolling logos, review snippets, and press mentions above the fold.",
        icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
      },
      {
        title: "FAQ accordion",
        description: "Product and landing page FAQs with schema markup for rich results.",
        icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
      },
      {
        title: "Bundle upsell",
        description: "Pre-cart bundle selector with dynamic pricing on the product page.",
        icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
      },
      {
        title: "Accessible by default",
        description: "Keyboard navigation, focus states, and WCAG-conscious color contrast.",
        icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    sections: [
      "Split hero",
      "Logo bar",
      "Feature grid",
      "Comparison table",
      "Testimonials",
      "FAQ",
      "CTA banner",
      "Minimal footer",
    ],
    templates: ["Home", "Landing", "Product", "Collection", "Cart", "Page", "404"],
    faqs: [
      {
        question: "Is Meridian good for single-product stores?",
        answer:
          "Yes. Meridian includes a dedicated landing template with long-form sections ideal for hero products and subscription offers.",
      },
      {
        question: "Can I use Meridian with subscription apps?",
        answer:
          "Yes. Product templates include app block zones for Recharge, Skio, and other subscription widgets.",
      },
    ],
  },
  {
    slug: "nova",
    id: "nova",
    num: "03",
    title: "Nova",
    tagline: "Bold tech & electronics",
    description:
      "High-impact visuals and spec-driven product pages for electronics, gadgets, and hardware brands.",
    longDescription:
      "Nova pairs bold typography with spec tables, comparison charts, and video demos—helping tech merchants explain complex products clearly. Dark mode styling and gradient accents give hardware brands a modern edge.",
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/20",
    status: "Available",
    category: "Electronics & hardware",
    highlights: [
      "Spec & comparison tables",
      "Video product demos",
      "Dark mode styling",
      "Compatible devices grid",
    ],
    features: [
      {
        title: "Spec table",
        description: "Sortable technical specifications with expandable detail rows.",
        icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-13.5V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125M9.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m1.125-1.125v-1.5m-1.125 1.125H9.375m1.125 0H12m-1.125 0v1.5m0-1.5v-1.5m0 1.5h1.125",
      },
      {
        title: "Video hero",
        description: "Autoplay-safe background video with overlay CTAs and product hotspots.",
        icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z",
      },
      {
        title: "Device compatibility",
        description: "Icon grid showing supported devices, OS versions, and connectors.",
        icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      },
      {
        title: "Dark mode",
        description: "Built-in dark palette with automatic section contrast adjustments.",
        icon: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
      },
      {
        title: "Warranty block",
        description: "Highlight warranty terms, returns, and support links on product pages.",
        icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
      },
      {
        title: "Cross-sell carousel",
        description: "Accessories and compatible products carousel on PDP and cart.",
        icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
      },
    ],
    sections: [
      "Video hero",
      "Feature highlights",
      "Spec table",
      "Compatibility grid",
      "Comparison chart",
      "Support CTA",
      "Related products",
      "Dark footer",
    ],
    templates: ["Home", "Product", "Collection", "Compare", "Support", "Cart", "404"],
    faqs: [
      {
        question: "Does Nova support product comparison pages?",
        answer:
          "Yes. Nova includes a compare template where shoppers can view spec differences across up to four products.",
      },
      {
        question: "Can I toggle dark mode globally?",
        answer:
          "Merchants can enable dark styling as the default or offer a customer-facing theme toggle from the header.",
      },
    ],
  },
  {
    slug: "bloom",
    id: "bloom",
    num: "04",
    title: "Bloom",
    tagline: "Beauty & wellness",
    description:
      "Soft, aspirational layouts for skincare, cosmetics, and wellness brands—with ingredient highlights and routine builders.",
    longDescription:
      "Bloom helps beauty merchants tell ingredient stories and guide customers through routines. Shade finders, before/after galleries, and subscription-friendly sections make it easy to launch a polished storefront fast.",
    color: "from-emerald-400 to-teal-600",
    glow: "group-hover:shadow-emerald-500/20",
    status: "Coming soon",
    category: "Beauty & wellness",
    highlights: [
      "Ingredient spotlight",
      "Routine builder",
      "Shade finder UI",
      "Subscription sections",
    ],
    features: [
      {
        title: "Ingredient spotlight",
        description: "Expandable ingredient cards with benefits, sourcing, and certifications.",
        icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.242 0l.879.659",
      },
      {
        title: "Routine builder",
        description: "Step-by-step morning and evening routines with add-all-to-cart.",
        icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Shade finder",
        description: "Quiz-style shade matching with recommended product variants.",
        icon: "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z",
      },
      {
        title: "Before & after",
        description: "Slider gallery section for results imagery with disclaimers.",
        icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z",
      },
      {
        title: "Subscription CTA",
        description: "Recurring purchase callouts with savings badges on product cards.",
        icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
      },
      {
        title: "Soft animations",
        description: "Subtle scroll reveals and micro-interactions tuned for beauty brands.",
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      },
    ],
    sections: [
      "Soft hero",
      "Best sellers",
      "Routine builder",
      "Ingredient grid",
      "Before & after",
      "Press quotes",
      "Subscribe & save",
      "Wellness footer",
    ],
    templates: ["Home", "Product", "Collection", "Routine", "Blog", "Cart", "404"],
    faqs: [
      {
        question: "When will Bloom launch?",
        answer:
          "We're targeting Q3 2026. Contact us to join the early access list or request a custom beauty theme built on Bloom's foundation.",
      },
      {
        question: "Does Bloom include a shade quiz?",
        answer:
          "Yes. Bloom ships with a configurable shade finder section that maps quiz answers to product variants.",
      },
    ],
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function getThemeById(id: string): Theme | undefined {
  return themes.find((theme) => theme.id === id);
}
