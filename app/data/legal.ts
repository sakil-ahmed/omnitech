import { siteConfig } from "@/app/lib/site";

export const privacyPolicy = {
  lastUpdated: "June 21, 2026",
  intro:
    'This Privacy Policy explains how Omnitech, Inc. ("we," "us," or "our") collects, uses, discloses, and protects the personal information of users ("you" or "users") when you access and use our apps from the Shopify App Store or our website. We are committed to protecting your privacy and ensuring the security of your personal information. By using our website and our apps, you consent to the practices described in this Privacy Policy.',
  scope:
    `This policy applies to all Omnitech Shopify App Store apps (including CartLift), our website (${siteConfig.url.replace(/^https?:\/\//, "")}), and embedded app experiences within Shopify Admin. Specific apps may collect additional data only as needed for their features (for example, product and order data used by CartLift to power upsell recommendations, described below).`,
  sections: [
    {
      title: "Information we collect",
      content: [
        "Personal information: When you install one of our apps from the Shopify App Store or when you register for an account or contact us through our website, we may collect personal information such as your name, email address, and Shopify store URL. We require this information to provide you with access to our services and to communicate with you regarding your account.",
        "Store and app data: When you install our Shopify apps, we receive store information authorized through Shopify's OAuth process, including store name, email, and data required for each app to function (for example, products, orders, customers, and cart activity as permitted by the app's access scopes and your subscription plan).",
        "Usage data: We may automatically collect certain information about your usage of our apps and website, such as your IP address, device information, browser type, and operating system. This information is used to analyze trends, administer the site, track user movements, and gather demographic information for aggregate use.",
      ],
    },
    {
      title: "How we use your information",
      content: [
        "Account management: We use your personal information to manage your account, provide access to our services, and communicate with you regarding your account status and updates.",
        "Improve user experience: The usage data we gather is used to analyze user patterns and preferences, allowing us to optimize our apps and services and tailor features and content to better suit merchant needs.",
        "Provide customer support: We may use your information to respond to your inquiries, provide technical support, and assist you with any issues you may encounter while using our apps or website.",
        "Billing and subscriptions: We use store and billing data to process subscriptions through Shopify's billing API and to deliver the features included in your plan.",
        "Marketing communications: With your explicit consent, we may send you marketing communications about our products, services, promotions, and relevant updates. You can opt out of these communications at any time.",
      ],
    },
    {
      title: "Sharing your information",
      content: [
        "We do not sell your personal data or store data to third parties.",
        "Third-party service providers: We may share your personal information with trusted third-party service providers who assist us in delivering our services and improving in-app functionality (for example, cloud hosting, error monitoring, and email delivery). These providers are bound by confidentiality agreements and are not authorized to use your information for any other purpose.",
        "Legal requirements: We may disclose your personal information if required by law or in response to valid legal requests, such as subpoenas or court orders.",
      ],
    },
    {
      title: "Data security",
      content: [
        "Security measures: We implement reasonable and appropriate technical and organizational security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. We use industry-standard encryption (TLS) for data in transit and encrypt sensitive data at rest where applicable.",
        "Data retention: We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Store data is retained only while an app is installed or as needed to provide the service. Upon app uninstall, we delete store data within 48 hours in accordance with Shopify's data protection requirements, unless you request an export. We will securely delete or anonymize personal information once it is no longer needed.",
      ],
    },
    {
      title: "Cookies and tracking",
      content: [
        "We use cookies and similar tracking technologies on our marketing website to enhance your browsing experience, track website usage, and collect analytics data. By using our website, you consent to our use of these cookies in accordance with your preferences set in our cookie banner.",
        "Our website may use cookies from the following third-party services (when you opt in to the relevant categories):",
      ],
      bullets: [
        "Shopify (App Store installs and billing, when applicable)",
        "Google Analytics (website usage and UX improvements, analytics cookies)",
        "Essential site cookies (cookie consent, theme preferences, and core functionality)",
      ],
    },
    {
      title: "Your rights",
      content: [
        `You may request access to, correction of, or deletion of your personal data by contacting ${siteConfig.email.support}.`,
        "If you are in the EU/EEA, you have rights under GDPR including data portability and the right to lodge a complaint with a supervisory authority.",
        "You can uninstall any Omnitech app at any time from your Shopify admin. You can also change cookie preferences anytime using the Cookies link in the site footer.",
      ],
    },
    {
      title: "Children's privacy",
      content: [
        "Our apps and website are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have unintentionally collected data from a child, please contact us immediately, and we will take appropriate steps to remove the information from our records.",
      ],
    },
    {
      title: "Changes to this Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The most recent version will always be available on our website. We encourage you to review this page periodically.",
      ],
    },
    {
      title: "Contact us",
      content: [
        `If you have any questions or concerns regarding this Privacy Policy, please contact us at ${siteConfig.email.support}.`,
        `Omnitech, Inc. · ${siteConfig.company.headquarters.street}`,
        `${siteConfig.company.headquarters.city}, ${siteConfig.company.headquarters.state} ${siteConfig.company.headquarters.zip}, ${siteConfig.company.headquarters.country}`,
        `Phone: ${siteConfig.company.phone.display}`,
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
