"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShieldCheck, FileText, RotateCcw } from "lucide-react";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";

type LegalType = "privacy" | "terms" | "refund";

const documents: Record<
  LegalType,
  {
    title: string;
    updated: string;
    icon: typeof ShieldCheck;
    sections: { heading: string; body: string }[];
  }
> = {
  privacy: {
    title: "Your Privacy Matters",
    updated: "October 2026",
    icon: ShieldCheck,
    sections: [
      {
        heading: "1. Introduction",
        body: 'This Privacy Policy explains how personal information is handled when you visit the website for "The Silence Behind Reality", an e-book by Lucian Verren. It applies to information collected through the website, checkout, and related communications.',
      },
      {
        heading: "2. Information We Collect",
        body: "Depending on how you interact with the website, information may include technical data such as your IP address, browser type, device information, and pages visited. If you purchase the e-book, transaction-related information may be processed by Polar as the merchant of record. Payment card details are handled by the relevant payment processing providers rather than stored directly by this website.",
      },
      {
        heading: "3. How Information Is Used",
        body: "Information may be used to operate and secure the website, facilitate purchases and digital delivery, respond to support requests, prevent fraudulent transactions, and comply with applicable legal obligations. Analytics or marketing information is used only where the relevant tools are enabled and applicable requirements are met.",
      },
      {
        heading: "4. Third-Party Services",
        body: "Purchases are facilitated through Polar. The website may also rely on hosting, security, and analytics providers. These services may process relevant information under their own privacy terms. Please review the applicable provider policies before making a purchase.",
      },
      {
        heading: "5. Data Retention and Security",
        body: "Information is retained only for as long as reasonably necessary for the purposes described in this policy, including legitimate business needs and legal obligations. Reasonable technical and organizational measures are used to protect information, although no internet transmission or storage system can be guaranteed to be completely secure.",
      },
      {
        heading: "6. Your Rights",
        body: "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information. You may also have the right to lodge a complaint with a relevant data protection authority. Requests can be made through the website's designated support contact, once provided.",
      },
      {
        heading: "7. Policy Updates",
        body: "This policy may be updated when website functionality, service providers, or legal requirements change. The latest version will be published on this website with its effective date.",
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    updated: "October 2026",
    icon: FileText,
    sections: [
      {
        heading: "1. Agreement",
        body: 'These terms govern your use of the website and the purchase or use of "The Silence Behind Reality", a digital e-book by Lucian Verren. By using the website, you agree to follow these terms and applicable laws.',
      },
      {
        heading: "2. The Digital Product",
        body: "The Silence Behind Reality is offered as a digital reading product. The available format, price, included files, and delivery method are those described at checkout. As a digital product, it does not include a physical printed book unless explicitly stated.",
      },
      {
        heading: "3. Orders and Payment",
        body: "Orders are processed through Polar, which acts as the merchant of record for applicable transactions. The final price, applicable taxes, and payment terms are displayed during checkout. An order may be subject to verification or cancellation in accordance with the applicable checkout terms and law.",
      },
      {
        heading: "4. Digital Access and Delivery",
        body: "Following a successful purchase, access to the e-book is provided through the configured digital delivery process. You are responsible for providing accurate checkout information and maintaining access to the email address or delivery method used for your order. If you do not receive your purchase, contact the relevant transaction support service.",
      },
      {
        heading: "5. Intellectual Property",
        body: "The e-book, its text, cover artwork, branding, and other original materials are protected by applicable intellectual property laws. Your purchase grants you a personal, non-exclusive, non-transferable right to access and read the purchased copy. Unless expressly authorized by the rights holder or permitted by law, you may not reproduce, republish, redistribute, resell, or commercially exploit the work.",
      },
      {
        heading: "6. Acceptable Use",
        body: "You may not use the website to engage in unlawful activity, interfere with its operation, attempt unauthorized access, or infringe the rights of the author or other parties.",
      },
      {
        heading: "7. Disclaimers",
        body: "The e-book is provided for reading and informational or entertainment purposes. Any philosophical interpretations or ideas presented in the work are not a guarantee of particular outcomes. To the extent permitted by applicable law, the website is provided on an as-available basis.",
      },
      {
        heading: "8. Consumer Rights and Liability",
        body: "Nothing in these terms excludes or limits any consumer rights that cannot lawfully be excluded. Any limitations of liability apply only to the extent permitted by applicable law.",
      },
      {
        heading: "9. Changes to These Terms",
        body: "These terms may be revised when necessary. The version published on this website applies from its stated effective date, subject to any mandatory legal requirements.",
      },
    ],
  },

  refund: {
    title: "Refund Policy",
    updated: "October 2026",
    icon: RotateCcw,
    sections: [
      {
        heading: "1. Digital Purchases",
        body: '"The Silence Behind Reality" by Lucian Verren is a digital e-book delivered electronically. Please review the product description and checkout information carefully before placing an order.',
      },
      {
        heading: "2. Refund Requests",
        body: "If you experience a duplicate charge, an unauthorized transaction, a missing download, a corrupted file, or another issue with your purchase, contact Polar's transaction support through the relevant order confirmation or checkout support channel. Include your order details and a description of the problem.",
      },
      {
        heading: "3. Eligibility",
        body: "Refund requests are reviewed under the applicable checkout terms, this policy, and mandatory consumer protection laws. Where a purchase was not properly delivered or the file is defective, the available remedy will be assessed in accordance with those requirements. A refund may also be considered in cases of duplicate or fraudulent transactions.",
      },
      {
        heading: "4. Digital Content and Legal Rights",
        body: "Depending on the consumer's jurisdiction and the circumstances of the transaction, special rules may apply to digital content delivered immediately after purchase. Any consent, acknowledgement, or waiver required by law must be obtained through the checkout process where applicable. Nothing in this policy removes a statutory right that cannot lawfully be waived.",
      },
      {
        heading: "5. Processing",
        body: "If a refund is approved, it is handled through the original payment provider or transaction process. The time it takes for the funds to appear depends on the payment method and financial institution.",
      },
      {
        heading: "6. Delivery Problems",
        body: "If you have paid but cannot access the e-book, first check your order confirmation and spam folder. If the problem persists, contact transaction support so the order and delivery status can be reviewed.",
      },
    ],
  },
};

const legalLinks: { key: LegalType; label: string }[] = [
  { key: "privacy", label: "Privacy Policy" },
  { key: "terms", label: "Terms of Service" },
  { key: "refund", label: "Refund Policy" },
];

export default function LegalModals() {
  const [active, setActive] = useState<LegalType | null>(null);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  const current = active ? documents[active] : null;
  const Icon = current?.icon;

  return (
    <>
      <nav
        aria-label="Legal information"
        className="flex flex-wrap items-center gap-x-5 gap-y-3"
      >
        {legalLinks.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className="text-[11px] font-medium tracking-wide text-white/45 transition-colors duration-300 hover:text-[#d4b06a] sm:text-xs"
          >
            {label}
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {active && current && Icon && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setActive(null);
              }
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080a0d] shadow-[0_25px_100px_rgba(0,0,0,0.6)]"
            >
              <div
                className="h-px w-full shrink-0"
                style={{
                  background: `linear-gradient(to right, transparent, ${GOLD}90, ${BLUE}70, transparent)`,
                }}
              />

              <header className="flex items-start justify-between gap-5 border-b border-white/[0.07] px-5 py-5 sm:px-8 sm:py-7">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Icon size={15} color={GOLD} />

                    <span className="text-[9px] uppercase tracking-[0.28em] text-[#d4b06a]/80">
                      Lucian Verren · Legal
                    </span>
                  </div>

                  <h2
                    id="legal-modal-title"
                    className="font-serif text-2xl tracking-tight text-[#e9e1d3] sm:text-3xl"
                  >
                    {current.title}
                  </h2>

                  <p className="mt-2 text-[10px] text-white/30">
                    The Silence Behind Reality · Updated {current.updated}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close legal information"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.09] text-white/50 transition-colors hover:border-[#d4b06a]/40 hover:text-[#d4b06a]"
                >
                  <X size={16} />
                </button>
              </header>

              <div className="legal-scrollbar min-h-0 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
                <p className="mb-8 max-w-xl font-serif text-sm italic leading-7 text-white/45">
                  {active === "privacy" &&
                    "Your trust matters. This policy explains how information may be handled when you explore or purchase the book."}

                  {active === "terms" &&
                    "Please review these terms before purchasing or using your digital copy of The Silence Behind Reality."}

                  {active === "refund" &&
                    "We want your digital reading experience to be clear and straightforward. Here is how purchase issues and refund requests are handled."}
                </p>

                <div className="space-y-7">
                  {current.sections.map((section, index) => (
                    <article key={section.heading}>
                      <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7f9bab]">
                        {section.heading}
                      </h3>

                      <p className="text-[13px] leading-7 text-white/55">
                        {section.body}
                      </p>

                      {index < current.sections.length - 1 && (
                        <div className="mt-6 h-px bg-white/[0.045]" />
                      )}
                    </article>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/[0.07] pt-6">
                  <p className="text-[11px] leading-6 text-white/30">
                    For purchase or delivery issues, please use the transaction
                    support details provided with your order. These policies do
                    not limit any rights that apply under mandatory consumer
                    protection laws.
                  </p>
                </div>
              </div>

              <footer className="flex shrink-0 items-center justify-between gap-4 border-t border-white/[0.07] px-5 py-4 sm:px-8">
                <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Perception · Influence · Truth
                </span>

                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-[#d4b06a]/25 px-5 py-2 text-[9px] uppercase tracking-[0.2em] text-[#d4b06a] transition-colors hover:bg-[#d4b06a]/10"
                >
                  Close
                </button>
              </footer>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
