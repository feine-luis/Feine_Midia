import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Eyebrow, Reveal } from "./shared";

const methodItems = [
  "landing.method.items.0",
  "landing.method.items.1",
  "landing.method.items.2",
  "landing.method.items.3",
  "landing.method.items.4",
  "landing.method.items.5",
  "landing.method.items.6",
] as const;

const summaryItems = [
  "landing.method.summary.0",
  "landing.method.summary.1",
  "landing.method.summary.2",
  "landing.method.summary.3",
] as const;

export const Method = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <Eyebrow>{t("landing.method.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            {t("landing.method.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("landing.method.intro")}</p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl">
          {methodItems.map((key, index) => (
            <Reveal key={key} delay={index * 0.03}>
              <div className="flex items-start gap-6 border-t border-border py-6 last:border-b sm:gap-10 sm:py-7">
                <span className="mt-0.5 font-display text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground sm:text-xl">
                  {t(key)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="grid gap-9 rounded-2xl bg-foreground px-8 py-12 text-background shadow-premium sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
            {summaryItems.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <p className="text-base font-medium leading-snug sm:text-lg">{t(key)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
