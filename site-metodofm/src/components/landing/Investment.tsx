import { useTranslation } from "react-i18next";

import { CtaButton } from "./CtaButton";
import { Reveal } from "./shared";

export const Investment = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            {t("landing.investment.title")}
          </h2>
          <p className="mt-8 font-display text-5xl font-semibold tracking-tight text-accent sm:text-7xl">
            {t("landing.investment.price")}
          </p>
          <p className="mt-7 text-lg text-background/80">{t("landing.investment.line1")}</p>
          <p className="mx-auto mt-2 max-w-md text-base text-background/60">
            {t("landing.investment.line2")}
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton variant="accent" label={t("landing.investment.cta")} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
