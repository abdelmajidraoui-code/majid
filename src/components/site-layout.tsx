import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-x py-16 md:py-24">
        {eyebrow && <div className="eyebrow mb-4 text-electric">{eyebrow}</div>}
        <h1 className="heading-track max-w-4xl text-3xl leading-[1.15] text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel md:text-lg">{intro}</p>
        )}
      </div>
    </section>
  );
}
