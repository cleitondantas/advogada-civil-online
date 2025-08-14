import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Greyce Kelly",
      content: "Tive alguns problemas para cancelar uma matrícula na faculdade Bookplay, a Dra. Bruna Neri foi essencial nesse processo, muito educada, inteligente e humana, soube me orientar com clareza e praticidade, uma profissional da mais exímia qualidade, a recomendo sem medo, Com certeza voltaria a utilizar seus serviços em outras situações judiciais.",
      rating: 5
    },
    {
      name: "Renata Ribas",
      content: "Uma profissional totalmente comprometida com o seu trabalho, com um atendimento excelente, esclarecendo todas as dúvidas de forma muito atenciosa, direta, clara e humana, desenvolvendo um trabalho com seriedade e competência. Obrigada por tudo Dra. Bruna!",
      rating: 5
    },
    {
      name: "Ana Paula Gomes",
      content: "Doutora Bruna, é incrível , muito competente, atenciosa e sempre a disposição para nossas dúvidas, indico quantas vezes for necessário.",
      rating: 5
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