import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle 
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Retornaremos o contato em até 24 horas.",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      href: "tel:+5511999999999",
      description: "Atendimento de segunda a sexta"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@mariafernanda.adv.br",
      href: "mailto:contato@mariafernanda.adv.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Augusta, 123 - Consolação\nSão Paulo, SP - CEP 01305-000",
      href: "https://maps.google.com",
      description: "Próximo ao metrô Consolação"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 12h",
      description: "Atendimento presencial e online"
    }
  ];

  const features = [
    "Resposta em até 24 horas",
    "Primeira consulta sem compromisso",
    "Atendimento presencial e online",
    "Orçamento personalizado",
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="h-4 w-4" />
            Entre em Contato
          </div>
          
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-navy-primary leading-tight">
            Agende sua
            <span className="block text-gray-primary">Consulta</span>
          </h2>
          
          <p className="text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ouvir sua necessidade e oferecer a melhor 
            solução jurídica para o seu caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-gray-light hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-navy-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-heading font-semibold text-navy-primary">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-primary hover:text-navy-primary transition-colors duration-300 block whitespace-pre-line"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-primary whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                      <p className="text-gray-secondary text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Features */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground border-0">
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg">
                  Por que escolher nosso atendimento?
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="cta" size="lg" className="w-full gap-2 text-lg">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-gray-light shadow-soft">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-navy-primary">
                    Envie sua Mensagem
                  </h3>
                  <p className="text-gray-secondary">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-primary">
                        Nome Completo *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        required
                        className="border-gray-light focus:border-navy-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-primary">
                        E-mail *
                      </label>
                      <Input 
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="border-gray-light focus:border-navy-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-primary">
                        Telefone *
                      </label>
                      <Input 
                        placeholder="(11) 99999-9999"
                        required
                        className="border-gray-light focus:border-navy-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-primary">
                        Área de Interesse
                      </label>
                      <select className="w-full h-10 px-3 rounded-md border border-gray-light bg-background text-gray-primary focus:border-navy-primary focus:outline-none">
                        <option value="">Selecione uma área</option>
                        <option value="contratos">Contratos</option>
                        <option value="responsabilidade">Responsabilidade Civil</option>
                        <option value="familia">Direito de Família</option>
                        <option value="sucessoes">Sucessões</option>
                        <option value="empresarial">Direito Empresarial</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-primary">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Descreva brevemente sua necessidade jurídica..."
                      rows={5}
                      required
                      className="border-gray-light focus:border-navy-primary resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full gap-2 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-gray-secondary text-sm text-center">
                    * Campos obrigatórios. Seus dados estão protegidos pela LGPD.
                  </p>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="p-4 border-gray-light overflow-hidden">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-navy-primary mx-auto" />
                <h3 className="font-heading font-semibold text-navy-primary">
                  Localização do Escritório
                </h3>
                <p className="text-gray-secondary">
                  Rua Augusta, 123 - Consolação, São Paulo/SP
                </p>
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="mt-4">
                    Ver no Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;