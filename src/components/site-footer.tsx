import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/eis-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EIS" className="h-20 w-auto shrink-0 self-center object-contain brightness-0 invert" />
            <div className="leading-tight">
              <div className="heading-track text-sm">Electryon</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/60">
                International Solutions
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Partenaire stratégique des entreprises industrielles. 30 ans d'expérience terrain en
            automobile, aéronautique et électronique, au Maroc, en Europe et à l'international.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4 text-primary-foreground/60">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">Accueil</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">Nos Services</Link></li>
            <li><Link to="/histoire" className="text-primary-foreground/80 hover:text-primary-foreground">Notre Histoire</Link></li>
            <li><Link to="/expertise" className="text-primary-foreground/80 hover:text-primary-foreground">Notre Expertise</Link></li>
            <li><Link to="/realisations" className="text-primary-foreground/80 hover:text-primary-foreground">Cas Clients</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-primary-foreground/60">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-foreground/60" />
              <span>Casablanca, Maroc</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-foreground/60" />
              <a href="mailto:info@electryon.com" className="hover:underline">info@electryon.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary-foreground/60" />
              <a href="tel:+212661077953" className="hover:underline">+212 661 07 79 53</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs uppercase tracking-[0.16em] text-primary-foreground/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Electryon International Solutions</span>
          <span>Casablanca, Maroc</span>
        </div>
      </div>
    </footer>
  );
}
