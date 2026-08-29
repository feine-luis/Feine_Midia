import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Formulário de aplicação do Método FM. */
export const APPLY_URL = "https://tally.so/r/nWg9kk";

type CtaButtonProps = {
  label: string;
  variant?: "ink" | "accent" | "paper";
  className?: string;
};

/** Botão-âncora premium que leva ao formulário de aplicação. */
export const CtaButton = ({ label, variant = "ink", className }: CtaButtonProps) => (
  <a
    href={APPLY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold tracking-tight transition-all duration-300",
      variant === "ink" &&
        "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
      variant === "accent" &&
        "bg-accent text-accent-foreground hover:bg-background hover:text-foreground",
      variant === "paper" &&
        "bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
      className,
    )}
  >
    {label}
    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
);
