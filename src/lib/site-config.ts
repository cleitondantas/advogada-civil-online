export const SITE_URL = "https://www.brunaneridantas.adv.br";

export const siteConfig = {
  name: "Bruna Neri Dantas Advocacia",
  shortName: "Bruna Neri Dantas",
  tagline: "Advocacia Civil e Consumidor",
  defaultTitle: "Bruna Neri Dantas | Advocacia Civil e Consumidor",
  defaultDescription:
    "Advocacia em Direito Civil, contratos e família. +10 anos de experiência. Agende sua consulta em Guarulhos/SP.",
  email: "brunaneridantas@gmail.com",
  phone: "(11) 98709-7600",
  phoneE164: "+5511987097600",
  whatsappUrl:
    "https://wa.me/+5511987097600?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta",
  address: {
    street: "R. Léo de Oliveira, 33",
    neighborhood: "Vila Moreira",
    city: "Guarulhos",
    state: "SP",
    postalCode: "07021-080",
    country: "BR",
    formatted:
      "R. Léo de Oliveira, 33 - Vila Moreira, Guarulhos - SP, 07021-080",
  },
  geo: {
    latitude: -23.4599,
    longitude: -46.5333,
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
  oab: "OAB/SP",
  ogImage: `${SITE_URL}/og-image.svg`,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+L%C3%A9o+de+Oliveira,+33,+Vila+Moreira,+Guarulhos+-+SP,+07021-080",
  areas: [
    { label: "Direito Civil", path: "/direito-civil" },
    { label: "Direito do Consumidor", path: "/direito-do-consumidor" },
    { label: "Contratos", path: "/contratos" },
    { label: "Direito de Família", path: "/direito-de-familia" },
    { label: "Responsabilidade Civil", path: "/responsabilidade-civil" },
  ],
} as const;

export const serviceSlugs = [
  "direito-civil",
  "direito-do-consumidor",
  "contratos",
  "direito-de-familia",
  "responsabilidade-civil",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
