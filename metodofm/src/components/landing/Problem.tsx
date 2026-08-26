import { useTranslation } from "react-i18next";

import { Eyebrow, Reveal } from "./shared";

export const Problem = () => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t("landing.problem.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            {t("landing.problem.title")}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.problem.p1")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.problem.p2")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.problem.p3")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="mx-auto mt-12 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              {t("landing.problem.quote.prefix")}
              <em className="italic text-accent">{t("landing.problem.quote.accent")}</em>
              {t("landing.problem.quote.suffix")}
            </blockquote>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-2 font-display italic text-accent">
              {t("landing.problem.signature")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
