import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/#home", label: "Início" },
    { href: "/#about", label: "Sobre" },
    { href: "/#services", label: "Serviços" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#testimonials", label: "Depoimentos" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <footer className="bg-navy-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/20 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">
                  Bruna Neri Dantas
                </span>
                <span className="text-sm opacity-80">Advocacia Civil & Consumidor</span>
              </div>
            </Link>

            <p className="text-sm opacity-90 leading-relaxed">
              Advocacia especializada em Direito Civil com mais de 10 anos de
              experiência. Atendimento personalizado e soluções jurídicas eficazes.
            </p>

            <div className="space-y-3">
              <div className="text-sm font-semibold">{siteConfig.oab} - Registro Ativo</div>
              <div className="text-xs opacity-80">
                Compromisso com a ética e excelência profissional
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {siteConfig.areas.map((area) => (
                <li key={area.path}>
                  <Link
                    to={area.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">Contato</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 opacity-80" />
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 opacity-80" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 opacity-80 mt-0.5" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                >
                  {siteConfig.address.formatted}
                </a>
              </div>
            </div>

            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2 bg-primary-foreground text-navy-primary hover:bg-primary-foreground/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © {currentYear} Dra. Bruna Neri Dantas. Todos os direitos reservados.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm opacity-80">
              <span>LGPD Compliance</span>
              <span className="hidden sm:block">•</span>
              <span>Política de Privacidade</span>
              <span className="hidden sm:block">•</span>
              <span>Termos de Uso</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <div className="text-center text-xs opacity-60">
              <p>
                Este site foi desenvolvido para fins informativos. As informações contidas
                não constituem aconselhamento jurídico específico. Para orientação jurídica
                personalizada, consulte nossa advocacia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
