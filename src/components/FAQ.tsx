import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { faqItems } from "@/content/faq";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-primary/10 text-navy-primary px-4 py-2 rounded-full text-sm font-medium">
            <HelpCircle className="h-4 w-4" />
            Perguntas Frequentes
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-navy-primary leading-tight">
            Dúvidas sobre
            <span className="block text-gray-primary">Atendimento Jurídico</span>
          </h2>

          <p className="text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed">
            Respostas claras sobre consultas, documentos, prazos e áreas de
            atuação do escritório de advocacia em Guarulhos/SP.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border border-gray-light rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-navy-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-primary leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
