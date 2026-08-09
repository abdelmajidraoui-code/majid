import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import histoireImg from "@/assets/histoire.jpg";
import mission from "@/assets/mission.jpg";

export const Route = createFileRoute("/histoire")({
  head: () => ({
    meta: [
      { title: "Notre Histoire | Electryon International Solutions" },
      { name: "description", content: "L'origine d'EIS : bâtir un pont entre l'industrie internationale et le Maroc. 30 ans d'expérience terrain automobile, aéronautique et électronique." },
      { property: "og:title", content: "Notre Histoire | EIS" },
      { property: "og:description", content: "Une expertise de terrain, une vision internationale." },
    ],
  }),
  component: HistoirePage,
});

function HistoirePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Notre Histoire" title="Une expertise de terrain, une vision internationale" />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <div className="eyebrow mb-4 text-electric">Notre Origine</div>
            <h2 className="heading-track text-2xl leading-[1.2] text-navy md:text-3xl">
              Bâtir un pont entre l'industrie internationale et le Maroc
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-steel">
              <p>
                Pendant des décennies, un fossé s'est creusé entre deux réalités de l'industrie. D'un
                côté, des entreprises qui possèdent un savoir-faire réel, des équipes compétentes,
                des installations solides. De l'autre, des performances qui stagnent, des coûts qui
                grimpent, une visibilité qui ne reflète jamais la qualité du travail accompli sur le
                terrain.
              </p>
              <p>
                C'est de ce constat qu'est né ELECTRYON INTERNATIONAL SOLUTIONS : la conviction que
                le Maroc réunit tous les atouts pour combler ce fossé, une main-d'œuvre qualifiée,
                un positionnement géographique stratégique entre l'Europe, l'Afrique et l'Asie, et
                une capacité industrielle prête à accueillir des partenariats exigeants.
              </p>
              <p>
                EIS a été fondée pour bâtir ce pont : entre l'industrie internationale et le Maroc,
                entre le potentiel d'une entreprise et sa performance réelle, entre le savoir-faire
                technique et une image qui lui rend justice.
              </p>
            </div>
          </div>
          <div className="h-full">
            <img src={histoireImg} alt="Port industriel de Casablanca au coucher du soleil" width={1600} height={1200} loading="lazy" className="filmic aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[320px]" />
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x grid gap-14 py-16 md:grid-cols-2 md:py-24 md:gap-20">
          <div className="order-2 h-full md:order-1">
            <img src={mission} alt="Plans techniques et instruments de mesure en atelier" width={1408} height={1056} loading="lazy" className="filmic aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[320px]" />
          </div>
          <div className="order-1 md:order-2">
            <div className="eyebrow mb-4 text-electric">Notre Équipe</div>
            <h2 className="heading-track text-2xl leading-[1.2] text-navy md:text-3xl">
              Une double expertise industrielle et marketing
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-steel">
              <p>
                À la tête d'EIS, <strong className="text-foreground">Abdelmajid Raoui</strong> apporte
                plus de 30 ans d'expérience opérationnelle dans l'industrie automobile, aéronautique
                et électronique. Son parcours l'a mené à travers les postes les plus exigeants de la
                chaîne industrielle : Directeur Qualité, Directeur d'Usine, puis Directeur Général
                d'une filiale suisse pendant plus de 11 ans.
              </p>
              <p>
                Cette trajectoire lui a donné une compréhension complète de l'entreprise
                industrielle, du design à la fabrication, de l'assemblage à la commercialisation,
                ainsi qu'une expertise directe des environnements les plus exigeants d'Europe et
                d'Afrique du Nord.
              </p>
              <p>
                À ses côtés, <strong className="text-foreground">Zainab Raoui</strong>, Responsable
                Marketing et Ventes, diplômée en Marketing et Business Technology Management de
                l'Université d'Ottawa, complète cette expertise industrielle par une approche
                marketing moderne, pour que la performance de nos clients se voie autant qu'elle se
                mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mb-4 text-electric">Notre Mission</div>
          <h2 className="heading-track text-2xl leading-[1.25] text-navy md:text-3xl">
            Faire de vos défis des opportunités de progrès
          </h2>
          <p className="mt-6 leading-relaxed text-steel">
            Améliorer durablement vos performances industrielles tout en maîtrisant vos coûts et vos
            risques. Que vous cherchiez à redresser vos résultats, former vos équipes, sécuriser une
            transition, sous-traiter localement ou vous implanter au Maroc, nous intervenons à
            chaque étape avec des objectifs chiffrés et mesurables.
          </p>
          <p className="mt-4 leading-relaxed text-steel">
            Nous croyons qu'un pont solide entre l'industrie internationale et le Maroc profite à
            tout le monde : aux entreprises qui cherchent l'efficacité et le Best Cost marocain,
            comme aux industriels locaux qui veulent monter en gamme.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
