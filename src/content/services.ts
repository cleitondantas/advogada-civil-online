import type { ServiceSlug } from "@/lib/site-config";

export type ServiceContent = {
  slug: ServiceSlug;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedSlugs: ServiceSlug[];
};

export const servicesContent: Record<ServiceSlug, ServiceContent> = {
  "direito-civil": {
    slug: "direito-civil",
    title: "Advogada de Direito Civil em Guarulhos | Bruna Neri Dantas",
    metaDescription:
      "Advocacia especializada em Direito Civil em Guarulhos/SP. Contratos, responsabilidade civil, família e sucessões. Agende consulta com a Dra. Bruna Neri Dantas.",
    h1: "Advocacia em Direito Civil em Guarulhos/SP",
    intro:
      "O Direito Civil regula as relações entre pessoas físicas e jurídicas no dia a dia: contratos, família, responsabilidade por danos, sucessões e obrigações. Com mais de 10 anos de experiência, a Dra. Bruna Neri Dantas oferece orientação jurídica clara, estratégica e personalizada para proteger seus direitos e prevenir conflitos.",
    sections: [
      {
        heading: "O que faz um advogado de Direito Civil?",
        paragraphs: [
          "O advogado civilista analisa situações jurídicas do cotidiano e indica a melhor solução: negociação, mediação, notificação extrajudicial ou ação judicial. Atua na prevenção de riscos e na defesa de interesses quando já existe um conflito.",
          "No escritório em Guarulhos, o atendimento combina experiência técnica com comunicação acessível, para que você compreenda prazos, custos e probabilidades antes de tomar qualquer decisão.",
        ],
      },
      {
        heading: "Principais demandas atendidas",
        paragraphs: [
          "Entre as demandas mais comuns estão cobranças indevidas, descumprimento contratual, indenizações, questões patrimoniais, inventários, partilhas e disputas entre vizinhos ou condomínios.",
          "Cada caso exige análise documental cuidadosa. Por isso, a consulta inicial é fundamental para mapear provas, identificar prazos prescricionais e definir a estratégia mais eficiente.",
        ],
      },
      {
        heading: "Por que buscar assessoria preventiva?",
        paragraphs: [
          "Muitos litígios poderiam ser evitados com contratos bem redigidos e orientação prévia. Investir em prevenção reduz custos, desgaste emocional e incertezas futuras.",
          "Se você já está envolvido em um conflito, quanto antes buscar orientação, maiores as chances de uma solução favorável dentro dos prazos legais.",
        ],
      },
    ],
    relatedSlugs: ["contratos", "responsabilidade-civil", "direito-de-familia"],
  },
  "direito-do-consumidor": {
    slug: "direito-do-consumidor",
    title: "Advogada do Consumidor em Guarulhos | Bruna Neri Dantas",
    metaDescription:
      "Defesa do consumidor em Guarulhos/SP. Cobranças indevidas, produtos defeituosos, cancelamentos e contratos abusivos. Consulta com advogada especializada.",
    h1: "Advogada de Direito do Consumidor",
    intro:
      "Relações de consumo envolvem desequilíbrio entre consumidor e fornecedor. A Dra. Bruna Neri Dantas atua na defesa de consumidores lesados por cobranças indevidas, produtos ou serviços defeituosos, publicidade enganosa e cláusulas abusivas em contratos de adesão.",
    sections: [
      {
        heading: "Quando procurar um advogado do consumidor",
        paragraphs: [
          "Procure assessoria quando receber cobranças indevidas, tiver plano ou assinatura cancelada sem resolução, enfrentar negativação indevida ou não obtiver reparo por produto com vício.",
          "O Código de Defesa do Consumidor prevê responsabilidade objetiva do fornecedor em diversas hipóteses, o que facilita a reparação quando há prova do dano.",
        ],
      },
      {
        heading: "Como funciona o atendimento",
        paragraphs: [
          "O primeiro passo é reunir documentos: notas fiscais, contratos, prints de conversas, protocolos de atendimento e comprovantes de pagamento. Com base nisso, avaliamos se o caso pode ser resolvido administrativamente ou judicialmente.",
          "Muitas vezes, uma notificação extrajudicial ou reclamação bem fundamentada resolve o problema sem processo. Quando necessário, a ação judicial busca restituição, cancelamento de débito, indenização e tutela de urgência.",
        ],
      },
      {
        heading: "Direitos mais buscados pelos consumidores",
        paragraphs: [
          "Cancelamento de serviços digitais e academias, contestação de compras não reconhecidas, devolução de valores pagos indevidamente e reparação por propaganda enganosa estão entre as demandas frequentes.",
          "A orientação jurídica esclarece prazos de garantia, direito de arrependimento e limites de multa contratual, evitando que o consumidor aceite soluções parciais ou abusivas.",
        ],
      },
    ],
    relatedSlugs: ["contratos", "responsabilidade-civil", "direito-civil"],
  },
  contratos: {
    slug: "contratos",
    title: "Advogada de Contratos em Guarulhos | Bruna Neri Dantas",
    metaDescription:
      "Elaboração, revisão e negociação de contratos civis e comerciais em Guarulhos/SP. Evite cláusulas abusivas. Consulte a Dra. Bruna Neri Dantas.",
    h1: "Advogada Especializada em Contratos",
    intro:
      "Contratos bem estruturados são a base de relações seguras entre pessoas e empresas. A Dra. Bruna Neri Dantas elabora, revisa e negocia contratos de prestação de serviços, locação, compra e venda, parcerias e acordos comerciais, identificando riscos antes da assinatura.",
    sections: [
      {
        heading: "Elaboração e revisão contratual",
        paragraphs: [
          "Na elaboração, definimos obrigações, prazos, multas, rescisão, foro e garantias de forma equilibrada. Na revisão, analisamos contratos prontos para apontar cláusulas abusivas, ambiguidades e lacunas que podem gerar prejuízo futuro.",
          "Esse serviço é essencial para freelancers, pequenos empresários, locadores, locatários e consumidores que assinam contratos de adesão com bancos, operadoras e plataformas digitais.",
        ],
      },
      {
        heading: "Negociação e resolução de conflitos",
        paragraphs: [
          "Quando uma das partes descumpre o acordo, avaliamos notificação, revisão de cláusula penal, execução específica ou rescisão. A estratégia depende do contrato, das provas e do valor envolvido.",
          "Em muitos casos, uma renegociação bem conduzida evita anos de litígio. Quando o acordo não é possível, o ajuizamento da ação cabível protege seu patrimônio e restabelece o equilíbrio contratual.",
        ],
      },
      {
        heading: "Tipos de contratos atendidos",
        paragraphs: [
          "Atuamos em contratos de locação residencial e comercial, prestação de serviços, compra e venda de bens, confidencialidade, parcerias, empréstimos entre particulares e aditivos contratuais.",
          "Contratos claros reduzem insegurança jurídica e demonstram profissionalismo nas relações comerciais, sendo investimento inteligente para quem deseja crescer com segurança.",
        ],
      },
    ],
    relatedSlugs: ["direito-civil", "direito-do-consumidor", "responsabilidade-civil"],
  },
  "direito-de-familia": {
    slug: "direito-de-familia",
    title: "Advogada de Família e Sucessões | Bruna Neri Dantas",
    metaDescription:
      "Divórcio, guarda, pensão alimentícia, inventário e sucessões em Guarulhos/SP. Atendimento humanizado com a Dra. Bruna Neri Dantas.",
    h1: "Advogada de Direito de Família e Sucessões",
    intro:
      "Questões familiares exigem sensibilidade e rigor técnico. A Dra. Bruna Neri Dantas conduz divórcios, guarda, pensão alimentícia, união estável, inventários e partilhas com respeito, confidencialidade e foco na solução mais adequada para cada família.",
    sections: [
      {
        heading: "Divórcio, guarda e pensão alimentícia",
        paragraphs: [
          "Divórcios consensuais podem ser resolvidos de forma mais rápida quando há acordo sobre bens e filhos. Em casos litigiosos, a atuação judicial protege direitos parentais e patrimoniais com base na melhor prova disponível.",
          "Revisional de pensão, exoneração e regulamentação de guarda compartilhada ou unilateral são acompanhadas com atenção aos interesses das crianças e à capacidade financeira das partes.",
        ],
      },
      {
        heading: "Inventário e planejamento sucessório",
        paragraphs: [
          "O inventário é necessário para transferir bens após o falecimento. Avaliamos se o procedimento pode ser extrajudicial ou judicial, prazos, documentos e possíveis conflitos entre herdeiros.",
          "Orientação preventiva sobre testamentos e organização patrimonial pode simplificar processos futuros e reduzir disputas familiares.",
        ],
      },
      {
        heading: "Atendimento humanizado",
        paragraphs: [
          "Conflitos familiares envolvem emoções e histórias pessoais. O escritório prioriza comunicação clara, realisticamente informando prazos, custos e cenários possíveis.",
          "Sempre que viável, buscamos acordos que preservem relações e reduzam desgaste, sem abrir mão da defesa firme dos direitos do cliente.",
        ],
      },
    ],
    relatedSlugs: ["direito-civil", "contratos", "responsabilidade-civil"],
  },
  "responsabilidade-civil": {
    slug: "responsabilidade-civil",
    title: "Advogada de Responsabilidade Civil | Bruna Neri Dantas",
    metaDescription:
      "Ações de indenização por danos morais e materiais em Guarulhos/SP. Acidentes, relações de consumo e responsabilidade médica. Agende consulta.",
    h1: "Advogada de Responsabilidade Civil e Indenizações",
    intro:
      "A responsabilidade civil trata da reparação de danos causados a terceiros. A Dra. Bruna Neri Dantas representa vítimas em ações de indenização por danos morais e materiais decorrentes de acidentes, relações de consumo, falhas na prestação de serviços e outros atos ilícitos.",
    sections: [
      {
        heading: "Elementos da responsabilidade civil",
        paragraphs: [
          "Para obter indenização, é necessário demonstrar conduta ilícita (ou responsabilidade objetiva), dano, nexo causal e, em alguns casos, culpa. A análise inicial identifica quais elementos já estão comprovados e quais provas ainda precisam ser produzidas.",
          "Danos materiais incluem despesas médicas, lucros cessantes e prejuízos patrimoniais. Danos morais compensam sofrimento, humilhação ou violação à dignidade.",
        ],
      },
      {
        heading: "Principais casos de indenização",
        paragraphs: [
          "Atuamos em acidentes de trânsito, quedas em estabelecimentos, negativação indevida, vazamento de dados, erro médico, produtos defeituosos e descumprimento contratual com repercussão extrapatrimonial.",
          "Cada modalidade possui particularidades probatórias. Por isso, a consulta define se convém acordo, mediação ou demanda judicial imediata.",
        ],
      },
      {
        heading: "Quanto tempo leva uma ação indenizatória",
        paragraphs: [
          "O prazo depende da complexidade, do foro e da disposição das partes em negociar. Alguns casos são resolvidos em meses; outros exigem instrução mais longa.",
          "A orientação inicial inclui estimativa realista, valor pretendido com base em jurisprudência e plano de ação para maximizar as chances de reparação justa.",
        ],
      },
    ],
    relatedSlugs: ["direito-do-consumidor", "direito-civil", "contratos"],
  },
};

export const getServiceBySlug = (slug: string): ServiceContent | undefined =>
  servicesContent[slug as ServiceSlug];
