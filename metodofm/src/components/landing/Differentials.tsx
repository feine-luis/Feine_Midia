import { useTranslation } from "react-i18next";

import { Eyebrow, Reveal } from "./shared";

export const Differentials = () => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t("landing.differential.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            {t("landing.differential.title")}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center">
          <Reveal delay={0.05}>
            <p className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {t("landing.differential.p1")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.differential.p2")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.differential.p3")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("landing.differential.p4")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
