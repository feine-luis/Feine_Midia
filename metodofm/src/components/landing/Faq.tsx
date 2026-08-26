import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Eyebrow, Reveal } from "./shared";

type FaqItem = {
  q: string;
  a: string;
  bullets?: string[];
  a2?: string;
};

const faqItems: FaqItem[] = [
  { q: "landing.faq.1.q", a: "landing.faq.1.a" },
  { q: "landing.faq.2.q", a: "landing.faq.2.a" },
  { q: "landing.faq.3.q", a: "landing.faq.3.a" },
  { q: "landing.faq.4.q", a: "landing.faq.4.a" },
  {
    q: "landing.faq.5.q",
    a: "landing.faq.5.a",
    bullets: ["landing.faq.5.bullets.0", "landing.faq.5.bullets.1", "landing.faq.5.bullets.2"],
    a2: "landing.faq.5.a2",
  },
];

export const Faq = () => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            {t("landing.faq.title")}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="rounded-xl border border-border bg-card px-5 sm:px-7"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline">
                  {t(item.q)}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  <p>{t(item.a)}</p>
                  {item.bullets && (
                    <ul className="mt-3 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <Check className="mt-1 size-4 shrink-0 text-accent" />
                          <span>{t(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.a2 && <p className="mt-3">{t(item.a2)}</p>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
