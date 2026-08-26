import { useTranslation } from "react-i18next";

import { CtaButton } from "./CtaButton";
import { Reveal } from "./shared";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-20 text-center sm:px-8 sm:pt-24">
        <Reveal>
          <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Método<span className="text-accent"> FM</span>
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-9 flex justify-center">
            <CtaButton variant="gold" label={t("landing.footer.cta")} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-14 border-t border-background/15 pt-8 text-sm text-background/50">
            {t("landing.footer.copyright")}
          </p>
        </Reveal>
      </div>
    </footer>
  );
};
