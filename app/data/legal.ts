import { siteConfig } from "@/app/lib/site";

export const privacyPolicy = {
  lastUpdated: "June 15, 2026",
  intro:
    "Omnitech, Inc. (\"we\", \"our\", or \"us\") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our website and Shopify applications.",
  sections: [
    {
      title: "Information we collect",
      content: [
        "When you install our Shopify apps, we receive store information authorized through Shopify's OAuth process, including store name, email, and data required for the app to function (e.g. orders, products, customers as permitted by each app).",
        "When you contact us via email or our contact form, we collect your name, email address, and message content.",
        "We automatically collect basic usage data such as app interactions, error logs, and performance metrics to improve our services.",
      ],
    },
    {
      title: "How we use your information",
      content: [
        "To provide, operate, and maintain our Shopify applications.",
        "To process billing through Shopify's billing API.",
        "To respond to support requests and communicate product updates.",
        "To improve app performance, fix bugs, and develop new features.",
        "To comply with legal obligations and Shopify App Store requirements.",
      ],
    },
    {
      title: "Data sharing",
      content: [
        "We do not sell your personal data or store data to third parties.",
        "We may share data with service providers who help us operate our apps (e.g. hosting, email delivery), bound by confidentiality agreements.",
        "We may disclose information if required by law or to protect our rights and users' safety.",
      ],
    },
    {
      title: "Data retention",
      content: [
        "We retain store data only as long as the app is installed or as needed to provide the service.",
        "Upon app uninstall, we delete store data within 48 hours in accordance with Shopify's data protection requirements, unless you request an export.",
      ],
    },
    {
      title: "Your rights",
      content: [
        `You may request access to, correction of, or deletion of your personal data by contacting ${siteConfig.email.support}.`,
        "If you are in the EU/EEA, you have rights under GDPR including data portability and the right to lodge a complaint with a supervisory authority.",
        "You can uninstall any Omnitech app at any time from your Shopify admin.",
      ],
    },
    {
      title: "Security",
      content: [
        "We use industry-standard encryption (TLS) for data in transit and encrypt sensitive data at rest.",
        "Access to production systems is restricted to authorized team members only.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Our marketing website uses essential cookies to keep the site working (for example, remembering your cookie consent choice).",
        "Optional cookie categories include analytics (usage statistics), preferences (such as theme settings), and marketing (campaign measurement).",
        "You can accept all cookies, allow only essential cookies, or customize each category from the cookie banner. Change your choices anytime using the Cookies link in the site footer.",
      ],
    },
    {
      title: "Contact us",
      content: [
        `Omnitech, Inc. · ${siteConfig.company.headquarters.street}`,
        `${siteConfig.company.headquarters.city}, ${siteConfig.company.headquarters.state} ${siteConfig.company.headquarters.zip}, ${siteConfig.company.headquarters.country}`,
        `Phone: ${siteConfig.company.phone.display}`,
        `Email: ${siteConfig.email.support} (support) · ${siteConfig.email.hello} (general)`,
        `Business hours: ${siteConfig.company.businessHours}`,
      ],
    },
  ],
};

export const termsOfService = {
  lastUpdated: "June 15, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your use of Omnitech's website and Shopify applications. By installing or using our apps, you agree to these Terms.",
  sections: [
    {
      title: "Acceptance of terms",
      content: [
        "By accessing our website or installing any Omnitech Shopify app, you agree to be bound by these Terms and our Privacy Policy.",
        "If you do not agree, do not use our services.",
      ],
    },
    {
      title: "Our services",
      content: [
        "Omnitech provides Shopify applications available through the Shopify App Store. Features and availability may vary by app and subscription plan.",
        "We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice when possible.",
      ],
    },
    {
      title: "Account & eligibility",
      content: [
        "You must have a valid Shopify store and be authorized to install apps on that store.",
        "You are responsible for maintaining the security of your Shopify account and for all activity under your store.",
      ],
    },
    {
      title: "Billing & subscriptions",
      content: [
        "Paid plans are billed through Shopify's billing system and appear on your Shopify invoice.",
        "Subscriptions renew automatically unless cancelled before the renewal date.",
        "Free trials, where offered, convert to paid plans unless cancelled before the trial ends.",
        "See our Refund Policy for information on refunds.",
      ],
    },
    {
      title: "Acceptable use",
      content: [
        "You may not use our apps for any unlawful purpose or to violate Shopify's Terms of Service.",
        "You may not attempt to reverse engineer, copy, or resell our applications.",
        "You may not use our apps to send spam or unsolicited messages to customers.",
      ],
    },
    {
      title: "Intellectual property",
      content: [
        "All Omnitech apps, code, designs, and branding remain our intellectual property.",
        "You receive a limited, non-exclusive license to use our apps for your Shopify store while your subscription is active.",
      ],
    },
    {
      title: "Limitation of liability",
      content: [
        "Our apps are provided \"as is\" without warranties of any kind, to the fullest extent permitted by law.",
        "Omnitech is not liable for indirect, incidental, or consequential damages arising from use of our apps.",
        "Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.",
      ],
    },
    {
      title: "Governing law",
      content: [
        "These Terms are governed by the laws of Bangladesh, without regard to conflict of law principles.",
        "Any disputes shall be resolved in the courts of Dhaka, Bangladesh.",
      ],
    },
    {
      title: "Contact",
      content: [
        `Omnitech, Inc. · ${siteConfig.company.headquarters.street}`,
        `${siteConfig.company.headquarters.city}, ${siteConfig.company.headquarters.state} ${siteConfig.company.headquarters.zip}, ${siteConfig.company.headquarters.country}`,
        `Phone: ${siteConfig.company.phone.display}`,
        `Email: ${siteConfig.email.support} (support) · ${siteConfig.email.hello} (general)`,
        `Business hours: ${siteConfig.company.businessHours}`,
      ],
    },
  ],
};

export const refundPolicy = {
  lastUpdated: "June 15, 2026",
  intro:
    "We want you to be satisfied with Omnitech apps. This Refund Policy explains when refunds are available for our Shopify app subscriptions.",
  sections: [
    {
      title: "7-day free trial",
      content: [
        "Most Omnitech apps include a 7-day free trial on paid plans. You will not be charged if you cancel before the trial period ends.",
        "To cancel during the trial, go to Shopify Admin → Settings → Apps and sales channels → [App name] → Uninstall or manage subscription.",
      ],
    },
    {
      title: "14-day refund window",
      content: [
        "If you are not satisfied with an app, you may request a full refund within 14 days of your first paid charge (after the free trial, if applicable).",
        "Refunds are available for first-time subscriptions only—not for renewal charges.",
      ],
    },
    {
      title: "How to request a refund",
      content: [
        `Email ${siteConfig.email.support} with your store URL, app name, and reason for the refund request.`,
        "We process approved refunds within 5–7 business days. Refunds are issued through Shopify's billing system.",
      ],
    },
    {
      title: "Non-refundable cases",
      content: [
        "Renewal charges after the initial 14-day refund window.",
        "Apps used in violation of our Terms of Service.",
        "Refund requests made more than 14 days after the first paid charge.",
        "Partial refunds for unused time within a billing period (subscriptions are not prorated).",
      ],
    },
    {
      title: "Cancelling your subscription",
      content: [
        "You can cancel anytime from your Shopify admin. Cancellation stops future charges but does not automatically trigger a refund outside the refund window above.",
        "After cancellation, you retain access until the end of the current billing period.",
      ],
    },
    {
      title: "Contact",
      content: [
        `Omnitech, Inc. · ${siteConfig.company.headquarters.street}`,
        `${siteConfig.company.headquarters.city}, ${siteConfig.company.headquarters.state} ${siteConfig.company.headquarters.zip}, ${siteConfig.company.headquarters.country}`,
        `Phone: ${siteConfig.company.phone.display}`,
        `Email: ${siteConfig.email.support}`,
        "We aim to respond within 24 hours on business days (Sun–Thu, BST).",
      ],
    },
  ],
};
