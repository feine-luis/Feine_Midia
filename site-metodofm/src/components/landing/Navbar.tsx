import { useTranslation } from "react-i18next";

import { APPLY_URL } from "./CtaButton";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center">
          <img
            src="/logo.png"
            alt="Método FM"
            className="h-11 w-auto sm:h-12"
          />
        </a>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          {t("landing.nav.cta")}
        </a>
      </div>
    </header>
  );
};
