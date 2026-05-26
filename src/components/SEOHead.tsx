import { Helmet } from "react-helmet-async";
import { SITE_URL, siteConfig } from "@/lib/site-config";

type SEOHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

const SEOHead = ({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path = "/",
  type = "website",
}: SEOHeadProps) => {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteConfig.ogImage} />
    </Helmet>
  );
};

export default SEOHead;
