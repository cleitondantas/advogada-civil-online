import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA4_ID || !window.gtag) return;
    window.gtag("config", GA4_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  if (!GA4_ID) return null;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { anonymize_ip: true });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
