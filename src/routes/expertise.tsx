import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Car, Plane, CircuitBoard, Factory, Globe2, LineChart } from "lucide-react";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Notre Expertise | Electryon International Solutions" },
      { name: "description", content: "Automobile, aéronautique, électronique, 30 ans d'expertise multisectorielle, méthodes éprouvées, résultats chiffrés." },
      { property: "og:title", content: "Notre Expertise | EIS" },
      { property: "og:description", content: "Une expertise industrielle multisectorielle au service de votre performance." },
    ],
  }),
  component: ExpertisePage,
});

const DOMAINS = [
  { icon: Car, title: "Automobile", body: "Assemblage, qualité, industrialisation. Environnements grande série et fournisseurs de rang." },
  { icon: Plane, title: "Aéronautique", body: "Rigueur documentaire, traçabilité, exigences clients grands comptes." },
  { icon: CircuitBoard, title: "Électronique", body: "Assemblage PCB, mécatronique, sous-ensembles techniques et co-conception." },
  { icon: Factory, title: "Management industriel", body: "Direction d'usine, qualité, production, méthodes, dans les environnements les plus exigeants." },
  { icon: LineChart, title: "Marketing B2B industriel", body: "Positionnement, branding, contenus techniques, présence digitale, salons et outils de vente." },
  { icon: Globe2, title: "Interculturel Europe · Maroc", body: "Interface franco-marocaine structurée : langue, culture métier, standards qualité." },
];

function ExpertisePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Notre Expertise"
        title="Une expertise industrielle multisectorielle"
        intro="30 ans d'expérience terrain en environnements exigeants, automobile, aéronautique, électronique. Une approche orientée résultats, avec des objectifs chiffrés à chaque étape."
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <div key={d.title} className="border border-border bg-card p-8 transition-colors hover:border-navy">
              <span className="grid h-12 w-12 place-items-center rounded-sm bg-navy text-primary-foreground">
                <d.icon size={20} />
              </span>
              <h3 className="heading-track mt-6 text-sm text-navy">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-primary-foreground md:py-20">
        <div className="container-x">
          <div className="eyebrow mb-4 text-primary-foreground/60">Méthode</div>
          <h2 className="heading-track max-w-3xl text-2xl leading-[1.2] md:text-3xl">
            Une méthode éprouvée en quatre temps
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Diagnostic", d: "Audit terrain, données chiffrées, points de friction identifiés." },
              { n: "02", t: "Plan d'action", d: "Feuille de route claire, KPI, jalons, responsables." },
              { n: "03", t: "Mise en œuvre", d: "Accompagnement opérationnel, présence terrain, ajustements." },
              { n: "04", t: "Mesure & transfert", d: "Résultats mesurés, compétences transmises, autonomie assurée." },
            ].map((p) => (
              <div key={p.n} className="border-l-2 border-primary-foreground/30 pl-5">
                <div className="heading-track text-xs text-primary-foreground/60">{p.n}</div>
                <div className="heading-track mt-2 text-sm">{p.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
