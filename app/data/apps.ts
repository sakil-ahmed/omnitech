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
};

export const apps: App[] = [
  {
    slug: "ordernotify-pro",
    id: "ordernotify",
    num: "01",
    title: "OrderNotify Pro",
    tagline: "WhatsApp & SMS order alerts for Shopify",
    description:
      "Send WhatsApp & SMS alerts for new orders, shipments, and delivery updates—automatically from Shopify.",
    longDescription:
      "Keep customers informed at every step of their order journey. OrderNotify Pro connects your Shopify store to WhatsApp and SMS—sending automatic notifications when orders are placed, fulfilled, and delivered.",
    color: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-500/20",
    status: "Live on App Store",
    iconPath:
      "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
    rating: 4.9,
    reviewCount: "120+",
    installs: "500+",
    features: [
      {
        title: "Order placed alerts",
        description: "Instant WhatsApp or SMS when a customer places an order.",
        icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
      },
      {
        title: "Shipping updates",
        description: "Notify customers automatically when their order ships.",
        icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
      },
      {
        title: "Custom templates",
        description: "Personalize messages with order details and your brand voice.",
        icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
      },
      {
        title: "Abandoned cart SMS",
        description: "Recover lost sales with timed cart reminder messages.",
        icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      },
      {
        title: "Multi-language",
        description: "Send notifications in your customer's preferred language.",
        icon: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
      },
      {
        title: "Delivery confirmation",
        description: "Let customers know when their package has been delivered.",
        icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    highlights: [
      "Works with Shopify order webhooks",
      "No coding required",
      "7-day free trial",
      "GDPR compliant",
    ],
    steps: [
      { title: "Install the app", description: "Add OrderNotify Pro from the Shopify App Store in one click." },
      { title: "Connect WhatsApp/SMS", description: "Link your messaging provider and customize templates." },
      { title: "Go live", description: "Notifications send automatically on every order event." },
    ],
    plans: [
      { name: "Starter", price: 9.99, description: "Up to 500 orders/month", features: ["WhatsApp & SMS notifications", "Order, ship & delivery alerts", "Custom message templates", "1 store connection"], popular: false },
      { name: "Growth", price: 19.99, description: "Up to 2,000 orders/month", features: ["Everything in Starter", "Abandoned cart reminders", "Customer reply handling", "Priority support"], popular: true },
      { name: "Pro", price: 39.99, description: "Unlimited orders", features: ["Everything in Growth", "Multi-store support", "API access", "Dedicated onboarding"], popular: false },
    ],
    faqs: [
      { question: "Which messaging providers are supported?", answer: "We support Twilio, MessageBird, and direct WhatsApp Business API integration. Setup takes under 5 minutes from the app dashboard." },
      { question: "Can I customize message templates?", answer: "Yes. Use variables like {{order_number}}, {{customer_name}}, and {{tracking_url}} in every template." },
      { question: "Does it work with Shopify POS?", answer: "Yes. Orders from online store, POS, and draft orders all trigger notifications." },
    ],
    shopifyUrl: "https://apps.shopify.com/",
  },
  {
    slug: "bulk-product-editor",
    id: "bulkedit",
    num: "02",
    title: "Bulk Product Editor",
    tagline: "Edit hundreds of products in seconds",
    description:
      "Edit prices, tags, vendors, and inventory across hundreds of products in seconds—right inside Shopify admin.",
    longDescription:
      "Stop editing products one by one. Bulk Product Editor lets you update prices, compare-at prices, tags, vendors, inventory, and more across your entire catalog—from a single spreadsheet-style interface inside Shopify admin.",
    color: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/20",
    status: "Live on App Store",
    iconPath:
      "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
    rating: 4.8,
    reviewCount: "85+",
    installs: "300+",
    features: [
      { title: "Bulk price edits", description: "Update prices and compare-at prices across selected products.", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.242 0l.879.659" },
      { title: "Tag & vendor updates", description: "Add, remove, or replace tags and vendors in bulk.", icon: "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" },
      { title: "CSV import/export", description: "Export your catalog, edit in Excel, and import changes back.", icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" },
      { title: "Inventory sync", description: "Adjust stock levels across variants and locations at once.", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
      { title: "Scheduled changes", description: "Set price changes to go live at a specific date and time.", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" },
      { title: "Undo support", description: "Made a mistake? Roll back your last bulk edit with one click.", icon: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" },
    ],
    highlights: ["Polaris-native UI", "Filter by collection or tag", "Preview before saving", "7-day free trial"],
    steps: [
      { title: "Select products", description: "Filter by collection, tag, vendor, or search." },
      { title: "Make bulk edits", description: "Update fields inline or upload a CSV." },
      { title: "Review & apply", description: "Preview changes and apply to your store instantly." },
    ],
    plans: [
      { name: "Basic", price: 7.99, description: "Edit up to 500 products", features: ["Bulk price & compare-at edits", "Tag & vendor updates", "CSV import/export", "Undo last action"], popular: false },
      { name: "Pro", price: 14.99, description: "Unlimited products", features: ["Everything in Basic", "Inventory bulk updates", "Scheduled price changes", "Collection management"], popular: true },
    ],
    faqs: [
      { question: "How many products can I edit at once?", answer: "Basic plan supports up to 500 products per bulk action. Pro plan has no limits." },
      { question: "Can I schedule a sale price?", answer: "Yes, on the Pro plan you can set start and end dates for price changes." },
      { question: "Is there an undo feature?", answer: "Yes. Every bulk edit can be rolled back from the history tab within 24 hours." },
    ],
    shopifyUrl: "https://apps.shopify.com/",
  },
  {
    slug: "smart-reviews",
    id: "reviews",
    num: "03",
    title: "Smart Reviews",
    tagline: "Photo reviews that boost conversions",
    description:
      "Collect photo reviews after purchase, display trust badges on product pages, and boost conversion rates.",
    longDescription:
      "Turn happy customers into your best marketing. Smart Reviews automatically requests reviews after delivery, collects photo and video reviews, and displays beautiful widgets on your product pages to build trust and increase sales.",
    color: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/20",
    status: "Live on App Store",
    iconPath:
      "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    rating: 4.9,
    reviewCount: "200+",
    installs: "400+",
    features: [
      { title: "Automated requests", description: "Send review requests after delivery via email or SMS.", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
      { title: "Photo & video reviews", description: "Let customers upload photos and short video clips.", icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" },
      { title: "Star rating widgets", description: "Display ratings on product pages and collection grids.", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
      { title: "Google rich snippets", description: "Show star ratings in Google search results.", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" },
      { title: "Review moderation", description: "Approve, reject, or respond to reviews before they go live.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
      { title: "Custom branding", description: "Match review widgets to your store's colors and fonts.", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245A4.5 4.5 0 008.25 20.25H14.5a4.5 4.5 0 003.772-2.03 2.25 2.25 0 01-2.4-2.245 3 3 0 00-5.78-1.128 3 3 0 00-4.382-2.97 2.25 2.25 0 01-2.4-2.245A4.5 4.5 0 003.75 6.75h13.5a4.5 4.5 0 013.772 2.03 2.25 2.25 0 01-2.4 2.245 3 3 0 00-4.382 2.97z" },
    ],
    highlights: ["Increases conversion up to 18%", "SEO-friendly schema markup", "Mobile-optimized widgets", "7-day free trial"],
    steps: [
      { title: "Install & configure", description: "Set your review request timing and email template." },
      { title: "Collect reviews", description: "Customers receive requests and submit photo reviews." },
      { title: "Display on store", description: "Widgets appear on product pages automatically." },
    ],
    plans: [
      { name: "Starter", price: 12.99, description: "Up to 100 review requests/mo", features: ["Post-purchase review emails", "Star ratings on product pages", "Photo review collection", "Basic widgets"], popular: false },
      { name: "Pro", price: 29.99, description: "Unlimited review requests", features: ["Everything in Starter", "Google rich snippets", "Review moderation", "Custom branding"], popular: true },
    ],
    faqs: [
      { question: "Will reviews slow down my store?", answer: "No. Widgets load asynchronously and are optimized for Core Web Vitals." },
      { question: "Can I import existing reviews?", answer: "Yes. Import from CSV or migrate from Judge.me, Loox, or Yotpo on the Pro plan." },
      { question: "Do you support Google rich snippets?", answer: "Yes, on the Pro plan we add structured data so stars appear in Google search." },
    ],
    shopifyUrl: "https://apps.shopify.com/",
  },
  {
    slug: "stock-alert",
    id: "stockalert",
    num: "04",
    title: "Stock Alert",
    tagline: "Never run out of stock again",
    description:
      "Get instant low-stock and out-of-stock notifications. Never miss a restock and avoid lost sales again.",
    longDescription:
      "Stay ahead of inventory issues before they cost you sales. Stock Alert monitors your Shopify inventory in real time and sends instant email, Slack, or SMS alerts when products hit your custom low-stock thresholds.",
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/20",
    status: "Coming soon",
    iconPath:
      "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    rating: 0,
    reviewCount: "0",
    installs: "—",
    features: [
      { title: "Low-stock alerts", description: "Set custom thresholds per product or variant.", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
      { title: "Out-of-stock alerts", description: "Get notified the moment a product sells out.", icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" },
      { title: "Slack & email", description: "Send alerts to your team via Slack, email, or SMS.", icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" },
      { title: "Multi-location", description: "Track inventory across all Shopify locations.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
      { title: "Daily digest", description: "Receive a summary of all inventory changes each morning.", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" },
      { title: "Restock reminders", description: "Auto-remind your team to reorder from suppliers.", icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" },
    ],
    highlights: ["Real-time webhook monitoring", "Per-variant thresholds", "Team notifications", "Coming Q3 2026"],
    steps: [
      { title: "Set thresholds", description: "Define low-stock levels per product or globally." },
      { title: "Choose channels", description: "Pick email, Slack, or SMS for your team alerts." },
      { title: "Stay in stock", description: "Reorder before you lose sales to stockouts." },
    ],
    plans: [
      { name: "Starter", price: 5.99, description: "Up to 100 SKUs", features: ["Low & out-of-stock alerts", "Email notifications", "Daily digest", "1 store"], popular: false },
      { name: "Pro", price: 12.99, description: "Unlimited SKUs", features: ["Everything in Starter", "Slack & SMS alerts", "Multi-location support", "Priority support"], popular: true },
    ],
    faqs: [
      { question: "When will Stock Alert launch?", answer: "We're targeting Q3 2026. Join the waitlist to get early access and a launch discount." },
      { question: "Will it support multiple locations?", answer: "Yes. Pro plan includes per-location inventory tracking and alerts." },
      { question: "Can I set different thresholds per product?", answer: "Absolutely. Set global defaults or override per product and variant." },
    ],
    shopifyUrl: "https://apps.shopify.com/",
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
