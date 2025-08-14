import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-justice.jpg";
import lawyerPortrait from "@/assets/bruna.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="h-4 w-4" />
                10+ Anos de Experiência
              </div>
              
              <h1 className="font-heading font-black text-4xl lg:text-6xl text-navy-primary leading-tight">
              Dra. Bruna Neri Dantas
                <span className="block text-gray-primary font-bold text-3xl lg:text-4xl mt-2">
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-secondary font-light leading-relaxed">
                Advocacia especializada em{" "}
                <span className="text-navy-primary font-semibold">Direito Civil e Consumidor</span>
                {" "}com atendimento personalizado e soluções jurídicas eficazes.
              </p>
              
              <p className="text-lg text-gray-primary leading-relaxed">
                Mais de uma década dedicada à defesa dos seus direitos. 
                Experiência sólida em contratos, responsabilidade civil, 
                direito de família e sucessões.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-primary">+10</div>
                <div className="text-sm text-gray-secondary font-medium">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-primary">+50</div>
                <div className="text-sm text-gray-secondary font-medium">Casos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-primary">+80%</div>
                <div className="text-sm text-gray-secondary font-medium">Sucesso</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button variant="cta" size="lg" className="gap-2 text-lg px-8">
                  Agende sua Consulta
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg" className="gap-2 text-lg px-8">
                  Conheça Mais
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-secondary">
                <Users className="h-5 w-5 text-navy-primary" />
                <span className="text-sm font-medium">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-gray-secondary">
                <Clock className="h-5 w-5 text-navy-primary" />
                <span className="text-sm font-medium">Resposta em 24h</span>
              </div>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative lg:pl-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-card rounded-2xl shadow-elegant overflow-hidden">
                <img
                  src={lawyerPortrait}
                  alt="Bruna Neri Dantas Advocacia - Civil | Consumidor"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-elegant p-6 border border-gray-light">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-primary">OAB/SP</div>
                <div className="text-sm text-gray-secondary font-medium">Registro Ativo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;