import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

import { CtaButton } from "./CtaButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-20 text-center sm:px-8 sm:pt-28 md:pb-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <p className="eyebrow">{t("landing.hero.eyebrow")}</p>
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-foreground"
          >
            {t("landing.hero.title.prefix")}
            <em className="font-display italic text-accent">
              {t("landing.hero.title.accent")}
            </em>
            {t("landing.hero.title.suffix")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {t("landing.hero.subtitle")}
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("landing.hero.subtitle2")}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4">
            <CtaButton label={t("landing.hero.cta")} />
            <p className="text-sm text-muted-foreground">{t("landing.hero.note")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
