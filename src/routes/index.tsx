import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, Target, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Parallax, Reveal, RotatingSeal, Tilt } from "@/components/motion";
import hero from "@/assets/hero-industrial.jpg";
import mission from "@/assets/mission.jpg";
import whyUs from "@/assets/why-us.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electryon International Solutions | Excellence industrielle depuis Casablanca" },
      { name: "description", content: "EIS accompagne les entreprises industrielles pour améliorer leurs performances, réduire leurs coûts et sécuriser leur croissance. Conseil, management de transition, sous-traitance au Maroc." },
      { property: "og:title", content: "Electryon International Solutions | Excellence industrielle depuis Casablanca" },
      { property: "og:description", content: "EIS accompagne les entreprises industrielles pour améliorer leurs performances, réduire leurs coûts et sécuriser leur croissance. Conseil, management de transition, sous-traitance au Maroc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <div className="absolute inset-0">
          <Parallax strength={70} className="h-full w-full">
            <img
              src={hero}
              alt="Ligne d'assemblage automobile en production"
              width={1920}
              height={1088}
              className="h-[115%] w-full object-cover opacity-45"
            />
          </Parallax>
        </div>
        <div className="filmic absolute inset-0 bg-gradient-to-br from-navy-deep via-navy/92 to-navy/60" />
        <div className="container-x relative py-24 md:py-36">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow mb-5 flex items-center gap-3 text-primary-foreground/70">
                <span className="inline-block h-px w-10 origin-left bg-primary-foreground/50" />
                Casablanca · Maroc
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-track text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
                Electryon International Solutions
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg font-light italic text-primary-foreground/85 md:text-xl">
                Votre partenaire stratégique pour l'excellence industrielle.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
                EIS accompagne les entreprises industrielles qui veulent améliorer leurs performances,
                réduire leurs coûts et sécuriser leur croissance. Basée à Casablanca, notre équipe combine
                plus de 30 ans d'expérience terrain en automobile, aéronautique et électronique avec une
                expertise marketing dédiée à votre visibilité.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary bg-primary-foreground !text-navy hover:bg-white">
                  Découvrir nos services <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn-outline border-primary-foreground/40 !text-primary-foreground hover:!bg-primary-foreground hover:!text-navy">
                  Nous contacter
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-16 right-16 hidden place-items-center rounded-full border border-primary-foreground/15 p-4 text-primary-foreground/45 lg:grid">
          <RotatingSeal text="· EXCELLENCE INDUSTRIELLE · CASABLANCA · DEPUIS 30 ANS " />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-background">
        <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {[
            { k: "30+", v: "années d'expérience terrain" },
            { k: "3", v: "secteurs : auto, aéro, électronique" },
            { k: "Best Cost", v: "sourcing marocain qualifié" },
            { k: "Europe · Afrique", v: "positionnement stratégique" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 90}>
              <div className="heading-track text-2xl text-navy md:text-3xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sand">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28 md:gap-16">
          <Reveal>
            <div className="eyebrow mb-4 text-electric">Notre Mission</div>
            <h2 className="heading-track text-3xl leading-[1.15] text-navy md:text-4xl">
              Transformer vos défis en succès mesurables
            </h2>
            <p className="mt-6 leading-relaxed text-steel">
              EIS réunit une expertise rare : un dirigeant industriel avec 30 ans d'expérience
              opérationnelle (Directeur Qualité, Directeur d'Usine, Directeur Général) et une
              spécialiste marketing formée à l'Université d'Ottawa. Nous intervenons à chaque étape
              de votre chaîne de valeur, du design à l'industrialisation, de la fabrication à la
              commercialisation.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              Un objectif simple : des résultats chiffrés et un retour sur investissement tangible.
            </p>
            <Link to="/histoire" className="btn-outline mt-8">
              Notre histoire <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <Tilt max={7} className="relative h-full">
              <img
                src={mission}
                alt="Plans de production et instruments de mesure sur un établi d'usine"
                width={1408}
                height={1056}
                loading="lazy"
                className="filmic aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[320px]"
              />
              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 border-4 border-navy md:block" />
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-28">
          <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4 text-electric">Nos Services</div>
              <h2 className="heading-track text-3xl leading-[1.15] text-navy md:text-4xl">
                Nos domaines d'intervention clés
              </h2>
              <p className="mt-5 leading-relaxed text-steel">
                Une gamme complète de services pour répondre aux besoins spécifiques de votre
                entreprise, que vous cherchiez à optimiser vos opérations, sécuriser une transition
                ou vous implanter au Maroc.
              </p>
            </div>
            <Link to="/services" className="btn-outline">
              Tous les services <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-navy text-primary-foreground">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28 md:gap-16">
          <Reveal className="order-2 h-full md:order-1">
            <Tilt max={7} className="h-full">
              <img
                src={whyUs}
                alt="Carte électronique en gros plan"
                width={1408}
                height={1056}
                loading="lazy"
                className="filmic aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[320px]"
              />
            </Tilt>
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal>
              <div className="eyebrow mb-4 text-primary-foreground/60">Pourquoi EIS</div>
              <h2 className="heading-track text-3xl leading-[1.15] md:text-4xl">
                Pourquoi choisir Electryon International Solutions ?
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Factory, t: "30 ans d'expérience multisectorielle", d: "Automobile, aéronautique, électronique, environnements les plus exigeants." },
                { icon: Target, t: "Approche orientée résultats", d: "Des objectifs chiffrés et mesurables à chaque étape, pas de livrables théoriques." },
                { icon: TrendingUp, t: "Vision globale et locale", d: "Capacité d'intervenir localement au Maroc comme à l'international." },
              ].map((f, i) => (
                <Reveal as="li" key={f.t} delay={100 + i * 110} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-primary-foreground/25 bg-primary-foreground/5 transition-transform duration-500 hover:rotate-90">
                    <f.icon size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.12em]">{f.t}</div>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder credibility */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4 text-electric">Signature Fondateur</div>
            <h2 className="heading-track text-2xl leading-[1.25] text-navy md:text-3xl">
              « Notre engagement : ne livrer que ce que nous savons faire réussir. »
            </h2>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-steel">
              Abdelmajid Raoui, Fondateur, EIS
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              30 ans d'expérience, Directeur Qualité, Directeur d'Usine, Directeur Général
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              "Directions industrielles opérationnelles en Europe et en Afrique du Nord",
              "Redressement de sites automobiles et aéronautiques",
              "Structuration de partenariats industriels franco-marocains",
            ].map((line, i) => (
              <Reveal key={line} delay={i * 110}>
                <Tilt max={6} glare={false}>
                  <div className="flex h-full items-start gap-3 border-l-2 border-electric bg-background p-6">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-electric" />
                    <p className="text-sm leading-relaxed text-steel">{line}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-24">
          <Reveal className="flex flex-col items-start justify-between gap-8 border border-navy p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-xl">
              <h2 className="heading-track text-2xl leading-[1.2] text-navy md:text-3xl">
                Discutons de votre projet industriel
              </h2>
              <p className="mt-4 text-steel">
                Consultation personnalisée avec l'un de nos experts, sans engagement.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              Prendre contact <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
