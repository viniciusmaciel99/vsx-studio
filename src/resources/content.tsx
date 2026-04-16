import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "VSX",
  lastName: "Studio",
  name: `VSX Studio`,
  role: "Agência de Publicidade Digital",
  avatar: "/images/VSXpurple.png",
  email: "contato@vsxstudio.com.br", // substitua pelo seu e-mail real
  location: "America/Sao_Paulo",
  languages: ["Português", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter VSX Studio</>,
  description: <>Novidades sobre marketing digital e soluções para sua empresa</>,
};

const social: Social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/vsxdesign",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@vsxdesign",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/vsxdesign",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `VSX Studio — Agência de Publicidade Digital`,
  description: `Agência focada em soluções digitais para pequenas e médias empresas`,
  headline: <>Soluções digitais que <strong>aceleram</strong> o seu negócio</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">VSX Studio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Destaque
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Somos a <Text as="span" size="xl" weight="strong">VSX Studio</Text>, agência de publicidade
      focada em PMEs. Criamos conteúdo estratégico, automatizamos processos com IA,
      gerenciamos tráfego pago e desenvolvemos sites e branding completo.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – VSX Studio`,
  description: `Conheça a VSX Studio, agência de publicidade digital fundada por Vinicius Maciel`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // substitua pelo seu link de agendamento se tiver
  },
  intro: {
    display: true,
    title: "Quem somos",
    description: (
      <>
        A VSX Studio é uma agência de publicidade focada em soluções digitais para pequenas e médias
        empresas. Acreditamos que toda empresa merece uma presença digital forte e estratégica —
        por isso desenvolvemos conteúdos, processos e tecnologia sob medida para cada cliente.
      </>
    ),
  },
  work: {
    display: true,
    title: "Nossos Serviços",
    experiences: [
      {
        company: "Conteúdo Estratégico",
        timeframe: "Serviço contínuo",
        role: "Criação de conteúdo com propósito",
        achievements: [
          <>Produção de conteúdo alinhado à identidade da marca e aos objetivos de negócio.</>,
          <>Estratégia de publicação para redes sociais, blogs e materiais institucionais.</>,
        ],
        images: [],
      },
      {
        company: "Automação com IA",
        timeframe: "Serviço contínuo",
        role: "Implementação de processos inteligentes",
        achievements: [
          <>Mapeamento e automação de fluxos operacionais com ferramentas de inteligência artificial.</>,
          <>Redução de tarefas repetitivas e aceleração da produtividade da equipe do cliente.</>,
        ],
        images: [],
      },
      {
        company: "Tráfego Pago",
        timeframe: "Serviço contínuo",
        role: "Gestão de anúncios digitais",
        achievements: [
          <>Criação e gestão de campanhas no Meta Ads e Google Ads com foco em conversão.</>,
          <>Análise de métricas e otimização contínua para maximizar o retorno sobre o investimento.</>,
        ],
        images: [],
      },
      {
        company: "Branding & Sites",
        timeframe: "Projetos sob demanda",
        role: "Identidade visual e presença digital",
        achievements: [
          <>Desenvolvimento de identidade visual completa: logo, paleta, tipografia e guia de marca.</>,
          <>Criação de sites modernos, responsivos e otimizados para SEO e conversão.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Formação",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Ferramentas",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Conteúdo sobre marketing digital e negócios",
  description: `Artigos e insights da VSX Studio sobre estratégia digital, IA e crescimento para PMEs`,
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – VSX Studio`,
  description: `Cases e projetos realizados pela VSX Studio`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria – VSX Studio`,
  description: `Trabalhos e criações da VSX Studio`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "VSX Studio trabalho",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "VSX Studio trabalho",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "VSX Studio trabalho",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "VSX Studio trabalho",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "VSX Studio trabalho",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "VSX Studio trabalho",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "VSX Studio trabalho",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "VSX Studio trabalho",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
