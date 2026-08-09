import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eis-logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Nos Services" },
  { to: "/histoire", label: "Notre Histoire" },
  { to: "/expertise", label: "Notre Expertise" },
  { to: "/realisations", label: "Cas Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="EIS logo" className="h-16 w-auto shrink-0 self-center object-contain sm:h-20" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="heading-track truncate text-[13px] text-navy sm:text-sm">Electryon</span>
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground xl:overflow-visible">
              International Solutions
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-sm px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-steel transition-colors hover:text-navy data-[status=active]:text-navy"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-3">
            Consultation
          </Link>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-sm border border-border lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="border-b border-border/50 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-steel data-[status=active]:text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
