import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Cas Clients & Réussites | Electryon International Solutions" },
      { name: "description", content: "Missions industrielles menées par EIS : redressement de sites, transitions dirigeantes, partenariats franco-marocains." },
      { property: "og:title", content: "Cas Clients & Réussites | EIS" },
      { property: "og:description", content: "Exemples de missions industrielles conduites par nos équipes." },
    ],
  }),
  component: CasClientsPage,
});

const CASES = [
  {
    sector: "Automobile, Europe",
    title: "Redressement qualité d'un site de rang 1",
    body: "Mission de direction qualité en transition. Réduction du taux de non-conformité client et sécurisation des livraisons OEM en moins de 12 mois.",
    metrics: ["-40% NC client", "0 arrêt de ligne OEM", "12 mois"],
  },
  {
    sector: "Aéronautique, Maroc",
    title: "Structuration d'un partenariat industriel",
    body: "Sourcing et qualification d'un sous-traitant marocain pour un donneur d'ordre européen. Montage du contrat, mise en place des contrôles qualité et supervision locale.",
    metrics: ["-30% coût unitaire", "Certif. livrée", "Supervision continue"],
  },
  {
    sector: "Électronique, Franco-Marocain",
    title: "Direction générale d'une filiale industrielle",
    body: "Direction générale en transition d'une filiale d'un groupe européen implanté à Casablanca. Restauration de la rentabilité et transmission structurée au successeur permanent.",
    metrics: ["EBITDA restauré", "Équipe stabilisée", "Transmission réussie"],
  },
  {
    sector: "Industrie multisectorielle",
    title: "Programme de formation management atelier",
    body: "Conception et animation d'un cycle de formation pour chefs d'équipe et agents de maîtrise. Contenu 100% terrain, évaluation post-formation à 6 mois.",
    metrics: ["48 managers formés", "Cycle 4 modules", "Ancrage 6 mois"],
  },
];

function CasClientsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cas Clients & Réussites"
        title="Des missions réelles, des résultats mesurables"
        intro="Pour préserver la confidentialité de nos clients, les entreprises ne sont pas nommées. Chaque mission résumée ci-dessous correspond à une intervention réellement conduite par nos équipes."
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.title} className="flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-navy">
              <div className="eyebrow text-electric">{c.sector}</div>
              <h3 className="heading-track mt-4 text-lg leading-[1.2] text-navy">{c.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">{c.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span key={m} className="border border-navy/25 bg-sand px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-navy p-10 md:flex-row md:items-center">
          <div>
            <h2 className="heading-track text-xl text-navy">Votre projet mérite le même niveau d'engagement</h2>
            <p className="mt-2 text-sm text-steel">Consultation gratuite, réponse sous 48h.</p>
          </div>
          <Link to="/contact" className="btn-primary">Nous contacter <ArrowRight size={14} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
