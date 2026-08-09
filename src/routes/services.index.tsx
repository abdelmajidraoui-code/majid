import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Reveal, Tilt } from "@/components/motion";
import { SERVICES } from "@/data/services";


export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Nos Services | Electryon International Solutions" },
      { name: "description", content: "Conseil stratégique, management de transition, formation, audit technique, sous-traitance industrielle au Maroc, marketing B2B industriel." },
      { property: "og:title", content: "Nos Services | EIS" },
      { property: "og:description", content: "Six domaines d'expertise pour transformer vos défis industriels en résultats mesurables." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos Services"
        title="Nos domaines d'intervention clés"
        intro="ELECTRYON INTERNATIONAL SOLUTIONS propose une gamme complète de services pour répondre aux besoins spécifiques de votre entreprise, que vous cherchiez à optimiser vos opérations, sécuriser une transition ou vous implanter au Maroc."
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 110} className="h-full">
              <Tilt max={6} className="h-full">
                <article className="group flex h-full flex-col border border-border bg-card transition-all duration-500 hover:border-navy hover:shadow-2xl">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1008}
                      height={704}
                      loading="lazy"
                      className="filmic h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="heading-track text-base leading-tight text-navy" style={{ minHeight: "2.6em" }}>
                      {s.short}
                    </h3>
                    <p className="mt-2 text-xs italic text-electric">{s.tagline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">{s.summary}</p>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="btn-outline mt-6 w-full">
                      En savoir plus <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

      </section>
    </SiteLayout>
  );
}
