import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_URL, siteConfig } from "@/lib/site-config";
import {
  servicesContent,
  type ServiceContent,
} from "@/content/services";

type ServicePageProps = {
  content: ServiceContent;
};

const ServicePage = ({ content }: ServicePageProps) => {
  const pageUrl = `${SITE_URL}/${content.slug}`;

  return (
    <>
      <SEOHead
        title={content.title}
        description={content.metaDescription}
        path={`/${content.slug}`}
      />
      <StructuredData pageUrl={pageUrl} pageTitle={content.title} />

      <main className="min-h-screen">
        <Header />

        <article className="pt-28 pb-16 lg:pt-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-secondary mb-8">
              <Link to="/" className="hover:text-navy-primary">
                Início
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy-primary">{content.h1}</span>
            </nav>

            <header className="space-y-6 mb-12">
              <h1 className="font-heading font-black text-4xl lg:text-5xl text-navy-primary leading-tight">
                {content.h1}
              </h1>
              <p className="text-xl text-gray-secondary leading-relaxed">
                {content.intro}
              </p>
            </header>

            <div className="space-y-12">
              {content.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="font-heading font-bold text-2xl text-navy-primary">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-gray-primary leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <Card className="mt-16 p-8 bg-gradient-primary text-primary-foreground border-0">
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl">
                  Precisa de orientação jurídica?
                </h2>
                <p className="opacity-90 leading-relaxed">
                  Agende uma consulta com a Dra. Bruna Neri Dantas em Guarulhos/SP
                  ou online. Atendimento personalizado com mais de 10 anos de
                  experiência em {content.h1.toLowerCase()}.
                </p>
                <ul className="space-y-2">
                  {[
                    "Atendimento presencial e online",
                    "Análise documental detalhada",
                    "Orçamento transparente",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="gap-2 bg-background text-navy-primary hover:bg-background/90"
                    >
                      Falar no WhatsApp
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </a>
                  <Link to="/#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy-primary"
                    >
                      Ver contato
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <aside className="mt-16 space-y-4">
              <h2 className="font-heading font-semibold text-xl text-navy-primary">
                Outras áreas de atuação
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.relatedSlugs.map((slug) => {
                  const related = servicesContent[slug];
                  return (
                    <li key={slug}>
                      <Link
                        to={`/${slug}`}
                        className="text-gray-primary hover:text-navy-primary transition-colors"
                      >
                        {related.h1}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default ServicePage;
