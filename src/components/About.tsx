import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Scale, Heart } from "lucide-react";
import officeImage from "@/assets/law-office.jpg";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Graduada em Direito pela Universidade de São Paulo (USP). Pós-graduação em Direito Civil e Processo Civil."
    },
    {
      icon: Scale,
      title: "Especialização",
      description: "Especialista em Direito Civil, com foco em contratos, responsabilidade civil e direito de família."
    },
    {
      icon: Award,
      title: "Experiência",
      description: "Mais de 10 anos de atuação em escritórios renomados e casos de alta complexidade."
    },
    {
      icon: Heart,
      title: "Filosofia",
      description: "Compromisso com a ética, transparência e dedicação integral aos interesses dos clientes."
    }
  ];

  const values = [
    "Atendimento personalizado e humanizado",
    "Transparência em todos os processos",
    "Dedicação integral a cada caso",
    "Ética profissional irrepreensível",
    "Comunicação clara e acessível",
    "Resultados eficazes e sustentáveis"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
                <Scale className="h-4 w-4" />
                Sobre a Dra. Maria Fernanda
              </div>
              
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-navy-primary leading-tight">
                Experiência e Dedicação a 
                <span className="text-gray-primary"> Serviço da Justiça</span>
              </h2>
              
              <p className="text-lg text-gray-secondary leading-relaxed">
                Com mais de uma década de experiência em Direito Civil, 
                construí minha carreira com base na excelência técnica, 
                ética profissional e dedicação integral aos meus clientes.
              </p>
              
              <p className="text-gray-primary leading-relaxed">
                Minha trajetória inclui a representação em casos de alta 
                complexidade, sempre priorizando soluções eficazes e 
                sustentáveis. Acredito que cada cliente merece atenção 
                personalizada e orientação clara sobre seus direitos.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-navy-primary">
                Valores e Compromissos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-navy-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-primary text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Office Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-10 blur-xl"></div>
              <div className="relative bg-card rounded-2xl shadow-elegant overflow-hidden">
                <img
                  src={officeImage}
                  alt="Escritório de Advocacia - Ambiente Profissional"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 border-gray-light hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-navy-primary/10 rounded-xl flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 text-navy-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-lg text-navy-primary">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-secondary text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;