import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Home, 
  Shield, 
  Briefcase, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração, análise e revisão de contratos comerciais e civis.",
      features: [
        "Contratos de compra e venda",
        "Contratos de prestação de serviços",
        "Contratos de locação",
        "Análise de cláusulas",
        "Negociação de termos"
      ],
      highlight: "Mais Procurado"
    },
    {
      icon: Shield,
      title: "Responsabilidade Civil",
      description: "Ações de indenização por danos morais e materiais.",
      features: [
        "Danos morais e materiais",
        "Acidentes de trânsito",
        "Responsabilidade médica",
        "Danos causados por produtos",
        "Indenizações trabalhistas"
      ]
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Questões familiares tratadas com sensibilidade e eficiência.",
      features: [
        "Divórcio consensual e litigioso",
        "Guarda de menores",
        "Pensão alimentícia",
        "União estável",
        "Adoção"
      ]
    },
    {
      icon: Home,
      title: "Sucessões",
      description: "Inventários e partilhas de bens com agilidade e segurança.",
      features: [
        "Inventário judicial",
        "Inventário extrajudicial",
        "Testamentos",
        "Partilha de bens",
        "Sucessão empresarial"
      ]
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas e empresários.",
      features: [
        "Constituição de empresas",
        "Contratos empresariais",
        "Recuperação judicial",
        "Dissolução societária",
        "Compliance empresarial"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
            <Briefcase className="h-4 w-4" />
            Áreas de Atuação
          </div>
          
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-navy-primary leading-tight">
            Soluções Jurídicas
            <span className="block text-gray-primary">Especializadas</span>
          </h2>
          
          <p className="text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed">
            Oferecemos atendimento especializado em diversas áreas do Direito Civil, 
            sempre com foco na resolução eficaz dos seus problemas jurídicos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative p-8 border-gray-light hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group bg-card"
            >
              {service.highlight && (
                <div className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-navy-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-navy-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-navy-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl text-navy-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-navy-primary">
                    Serviços inclusos:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-navy-primary flex-shrink-0" />
                        <span className="text-gray-primary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full gap-2 group-hover:bg-navy-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl">
              Precisa de Orientação Jurídica?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Agende uma consulta personalizada e descubra como podemos 
              ajudar você a resolver sua questão jurídica de forma eficaz.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2 text-lg px-8 bg-background text-navy-primary hover:bg-background/90"
              >
                Agendar Consulta
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a 
              href="https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre os serviços jurídicos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy-primary"
              >
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;