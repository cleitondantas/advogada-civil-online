import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const menuItems = [
    { href: sectionHref("home"), label: "Início", isRoute: false },
    { href: sectionHref("about"), label: "Sobre", isRoute: false },
    { href: sectionHref("testimonials"), label: "Depoimentos", isRoute: false },
    { href: sectionHref("faq"), label: "FAQ", isRoute: false },
    { href: sectionHref("contact"), label: "Contato", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-light">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-navy-primary">
                Bruna Neri Dantas
              </span>
              <span className="text-xs text-gray-secondary font-medium">
                Advocacia Civil & Consumidor
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.slice(0, 2).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-primary hover:text-navy-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-primary hover:text-navy-primary transition-colors duration-300 font-medium text-sm"
                aria-expanded={isAreasOpen}
                onClick={() => setIsAreasOpen(!isAreasOpen)}
              >
                Áreas de Atuação
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-gray-light rounded-xl shadow-elegant py-2 min-w-[220px]">
                  {siteConfig.areas.map((area) => (
                    <Link
                      key={area.path}
                      to={area.path}
                      className="block px-4 py-2 text-sm text-gray-primary hover:text-navy-primary hover:bg-muted/50"
                    >
                      {area.label}
                    </Link>
                  ))}
                  <a
                    href={sectionHref("services")}
                    className="block px-4 py-2 text-sm text-gray-secondary hover:text-navy-primary border-t border-gray-light mt-1"
                  >
                    Ver todas na home
                  </a>
                </div>
              </div>
            </div>

            {menuItems.slice(2).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-primary hover:text-navy-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${siteConfig.phoneE164}`}>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </Button>
            </a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[32rem] pb-6" : "max-h-0"
          )}
        >
          <div className="pt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-primary hover:text-navy-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="space-y-2 pt-2 border-t border-gray-light">
              <p className="text-xs font-semibold text-gray-secondary uppercase tracking-wide">
                Áreas de Atuação
              </p>
              {siteConfig.areas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="block text-gray-primary hover:text-navy-primary py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {area.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 space-y-3">
              <a href={`tel:${siteConfig.phoneE164}`} className="block">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </Button>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="cta" size="sm" className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
