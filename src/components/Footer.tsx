import { Scale, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  const services = [
    "Contratos",
    "Responsabilidade Civil",
    "Direito de Família",
    "Sucessões",
    "Direito Empresarial",
  ];

  return (
    <footer className="bg-navy-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/20 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">
                  Dra. Maria Fernanda
                </span>
                <span className="text-sm opacity-80">
                  Advocacia Civil
                </span>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed">
              Advocacia especializada em Direito Civil com mais de 10 anos 
              de experiência. Atendimento personalizado e soluções jurídicas eficazes.
            </p>

            <div className="space-y-3">
              <div className="text-sm font-semibold">OAB/SP - Registro Ativo</div>
              <div className="text-xs opacity-80">
                Compromisso com a ética e excelência profissional
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">
              Navegação
            </h3>
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

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">
              Áreas de Atuação
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">
              Contato
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 opacity-80" />
                <a 
                  href="tel:+5511999999999"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 opacity-80" />
                <a 
                  href="mailto:contato@mariafernanda.adv.br"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  contato@mariafernanda.adv.br
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 opacity-80 mt-0.5" />
                <span className="text-sm opacity-80 leading-relaxed">
                  Rua Augusta, 123<br />
                  Consolação, São Paulo/SP<br />
                  CEP 01305-000
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        {/* Bottom Section */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © {currentYear} Dra. Maria Fernanda Santos. Todos os direitos reservados.
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