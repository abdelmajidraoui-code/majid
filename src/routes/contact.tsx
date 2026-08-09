import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Electryon International Solutions" },
      { name: "description", content: "Contactez EIS pour une consultation personnalisée. Basés à Casablanca, Maroc. info@electryon.com, +212 661 07 79 53." },
      { property: "og:title", content: "Contact | EIS" },
      { property: "og:description", content: "Discutons de votre projet industriel. Consultation gratuite." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Contactez-nous pour une consultation personnalisée"
        intro="Décrivez-nous votre contexte industriel et vos objectifs. Nous revenons vers vous sous 48h ouvrées avec une première lecture et des pistes concrètes."
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Nom complet" name="name" required />
            <Field label="Entreprise" name="company" />
            <Field label="Adresse e-mail" name="email" type="email" required />
            <Field label="Téléphone" name="phone" type="tel" />
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                Votre projet
              </label>
              <textarea
                required
                rows={6}
                className="w-full border border-border bg-card px-4 py-3 text-sm focus:border-navy focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={sent}>
              {sent ? "Message envoyé, merci" : "Envoyer le message"}
            </button>
          </form>

          <aside className="space-y-8 border border-border bg-sand p-8">
            <div>
              <div className="eyebrow mb-4 text-electric">Notre bureau principal</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-navy" />
                  <span>Casablanca, Maroc</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-navy" />
                  <a href="mailto:info@electryon.com" className="hover:underline">info@electryon.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-navy" />
                  <a href="tel:+212661077953" className="hover:underline">+212 661 07 79 53</a>
                </li>
              </ul>
            </div>
            <div className="aspect-video w-full overflow-hidden border border-border">
              <iframe
                title="Casablanca, Maroc"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.72%2C33.53%2C-7.52%2C33.63&layer=mapnik&marker=33.5731%2C-7.5898"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy">
        {label} {required && <span className="text-electric">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-border bg-card px-4 py-3 text-sm focus:border-navy focus:outline-none"
      />
    </div>
  );
}
