import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { SERVICES, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | EIS" }] };
    return {
      meta: [
        { title: `${s.short} | Electryon International Solutions` },
        { name: "description", content: s.summary.slice(0, 155) },
        { property: "og:title", content: `${s.title} | EIS` },
        { property: "og:description", content: s.tagline },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-24 text-center">
        <h1 className="heading-track text-2xl text-navy">Service introuvable</h1>
        <Link to="/services" className="btn-outline mt-8">Retour aux services</Link>
      </div>
    </SiteLayout>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img src={service.image} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/95 to-navy/60" />
        <div className="container-x relative py-20 md:py-28">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary-foreground/70 hover:text-primary-foreground">
            <ArrowLeft size={14} /> Tous les services
          </Link>
          <div className="eyebrow mt-8 text-primary-foreground/60">Service EIS</div>
          <h1 className="heading-track mt-3 max-w-3xl text-3xl leading-[1.12] sm:text-4xl md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg italic text-primary-foreground/85">{service.tagline}</p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <p className="max-w-3xl border-l-2 border-electric pl-6 text-lg italic leading-relaxed text-navy md:text-xl">
          {service.detail.hook}
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="heading-track text-sm text-electric">Le problème</h2>
              <p className="mt-4 leading-relaxed text-foreground">{service.detail.problem}</p>
            </div>
            <div>
              <h2 className="heading-track text-sm text-electric">Notre approche</h2>
              <p className="mt-4 leading-relaxed text-foreground">{service.detail.approach}</p>
            </div>
          </div>

          <aside className="h-fit border border-border bg-sand p-8">
            <h2 className="heading-track mb-6 text-sm text-electric">Ce que vous obtenez</h2>
            <ul className="space-y-4">
              {service.detail.gains.map((g) => (
                <li key={g} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-navy" />
                  <span className="text-sm leading-relaxed text-foreground">{g}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <Link to="/contact" className="btn-primary">
            {service.ctaLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>


      <section className="border-t border-border bg-background">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <div className="eyebrow mb-2 text-electric">Service suivant</div>
            <div className="heading-track text-xl text-navy">{next.short}</div>
          </div>
          <Link to="/services/$slug" params={{ slug: next.slug }} className="btn-outline">
            Découvrir <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
