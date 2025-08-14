import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Áreas de Atuação" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-light">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-primary hover:text-navy-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+551198709-7600">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                (11) 98709-7600
              </Button>
            </a>
            <a
              href="https://wa.me/+5511987097600?text=Olá, gostaria de agendar uma consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
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
            <div className="pt-4 space-y-3">
              <a href="tel:+551198709-7600" className="block">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  (11) 98709-7600
                </Button>
              </a>
              <a
                href="https://wa.me/+5511987097600?text=Olá, gostaria de agendar uma consulta"
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