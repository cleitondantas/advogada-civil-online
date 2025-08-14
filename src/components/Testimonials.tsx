import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      role: "Empresário",
      content: "Excelente profissional! A Dra. Bruna Neri Dantas conduziu meu caso de responsabilidade civil com muita competência e transparência. Resultado excepcional.",
      rating: 5,
      case: "Responsabilidade Civil"
    },
    {
      name: "Ana Paula Rodrigues",
      role: "Administradora",
      content: "Atendimento personalizado e humano. Me senti muito segura durante todo o processo de divórcio. Recomendo sem hesitação.",
      rating: 5,
      case: "Direito de Família"
    },
    {
      name: "Roberto Martins",
      role: "Comerciante",
      content: "Profissionalismo exemplar na elaboração dos contratos da minha empresa. Explicações claras e orientações precisas. Muito satisfeito!",
      rating: 5,
      case: "Contratos Empresariais"
    },
    {
      name: "Fernanda Costa",
      role: "Arquiteta",
      content: "Processo de inventário conduzido com eficiência e agilidade. A doutora esteve presente em todos os momentos, esclarecendo cada etapa.",
      rating: 5,
      case: "Sucessões"
    },
    {
      name: "João Pedro Oliveira",
      role: "Engenheiro",
      content: "Solução rápida e eficaz para uma questão contratual complexa. Comunicação excelente e resultados acima das expectativas.",
      rating: 5,
      case: "Análise Contratual"
    },
    {
      name: "Mariana Santos",
      role: "Médica",
      content: "Atendimento diferenciado e dedicação integral ao meu caso. A Dra. Bruna Neri Dantas é uma profissional de extrema competência.",
      rating: 5,
      case: "Consultoria Jurídica"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
            <Quote className="h-4 w-4" />
            Depoimentos
          </div>
          
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-navy-primary leading-tight">
            O que Nossos
            <span className="block text-gray-primary">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o reflexo do nosso compromisso 
            com a excelência e dedicação em cada caso.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 border-gray-light hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-navy-primary/10 rounded-xl flex items-center justify-center">
                  <Quote className="h-6 w-6 text-navy-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-primary leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="space-y-2 pt-4 border-t border-gray-light">
                  <h4 className="font-heading font-semibold text-navy-primary">
                    {testimonial.name}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-secondary text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-navy-primary text-xs font-medium bg-navy-primary/10 px-2 py-1 rounded-full inline-block">
                      {testimonial.case}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">+50</div>
              <div className="text-lg opacity-90">Casos Resolvidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">+80%</div>
              <div className="text-lg opacity-90">Taxa de Sucesso</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">+10</div>
              <div className="text-lg opacity-90">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-lg opacity-90">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;