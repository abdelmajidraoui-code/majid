import serviceConseil from "@/assets/service-conseil.jpg";
import serviceManagement from "@/assets/service-management.jpg";
import serviceFormation from "@/assets/service-formation.jpg";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceSousTraitance from "@/assets/service-sous-traitance.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

export type Service = {
  slug: string;
  short: string;
  title: string;
  tagline: string;
  image: string;
  summary: string;
  ctaLabel: string;
  detail: {
    hook: string;
    problem: string;
    approach: string;
    gains: string[];
  };
};

export const SERVICES: Service[] = [
  {
    slug: "conseil-strategique",
    short: "Conseil Stratégique",
    title: "Conseil et accompagnement stratégique",
    tagline: "Stratégies robustes, plans d'action chiffrés",
    image: serviceConseil,
    ctaLabel: "Discuter de votre projet",
    summary:
      "Nous vous aidons à élaborer des stratégies robustes et à les mettre en œuvre pour améliorer vos performances globales. Notre expertise couvre l'audit, l'analyse des processus et la définition de plans d'action clairs, avec des objectifs chiffrés à chaque étape.",
    detail: {
      hook:
        "Une stratégie robuste ne se devine pas, elle se construit sur des données, une expérience terrain, et des objectifs chiffrés.",
      problem:
        "Beaucoup d'entreprises industrielles savent qu'elles doivent évoluer, mais manquent de recul, de temps, ou d'un regard extérieur pour transformer cette intuition en plan d'action concret. Le résultat : des décisions prises dans l'urgence, sans vision d'ensemble.",
      approach:
        "Nous menons un audit complet de vos processus, de votre organisation et de vos performances actuelles. À partir de ce diagnostic, nous élaborons avec vous des stratégies robustes et réalistes, adaptées à vos moyens et à vos objectifs, à chaque étape : design, industrialisation, fabrication, assemblage, marketing et ventes.",
      gains: [
        "Un audit complet de vos processus actuels",
        "Un plan d'action clair avec des objectifs chiffrés et mesurables",
        "Un accompagnement dans la mise en œuvre, pas seulement des recommandations sur papier",
      ],
    },
  },
  {
    slug: "management-transition",
    short: "Management de Transition",
    title: "Management de transition",
    tagline: "Continuité et performance sans rupture",
    image: serviceManagement,
    ctaLabel: "Discuter de votre projet",
    summary:
      "Face à un changement de direction ou un besoin de renforcement temporaire, nos managers de transition apportent une expertise opérationnelle immédiate pour garantir la continuité et l'amélioration de vos activités sans rupture.",
    detail: {
      hook:
        "Un changement de direction ou une période critique ne doit jamais ralentir votre activité.",
      problem:
        "Départ imprévu d'un dirigeant, réorganisation, croissance rapide qui dépasse les capacités internes : ces moments de transition sont parmi les plus risqués pour une entreprise industrielle. Sans continuité de leadership, la performance et la confiance des équipes se fragilisent rapidement.",
      approach:
        "Nos managers de transition apportent une expertise opérationnelle immédiate, directement issue de plus de 30 ans d'expérience en direction d'usine et de filiale. Nous prenons en charge la continuité de vos activités le temps nécessaire, sans rupture, avec un objectif clair : stabiliser, puis transmettre.",
      gains: [
        "Une prise en charge rapide, sans période d'adaptation prolongée",
        "Une continuité opérationnelle pendant toute la durée de la transition",
        "Une transmission structurée à votre équipe permanente une fois la mission terminée",
      ],
    },
  },
  {
    slug: "formation",
    short: "Formation",
    title: "Formation et développement des compétences",
    tagline: "Programmes sur mesure, terrain et durables",
    image: serviceFormation,
    ctaLabel: "Voir nos formations",
    summary:
      "Nous concevons et animons des programmes de formation sur mesure pour vos équipes, dans les domaines techniques, organisationnels et industriels, afin de renforcer durablement leurs compétences et leur efficacité sur le terrain.",
    detail: {
      hook:
        "Une équipe bien formée est la première ligne de défense de votre performance industrielle.",
      problem:
        "Les compétences techniques et organisationnelles évoluent vite. Sans formation continue, même les équipes les plus expérimentées finissent par prendre du retard sur les meilleures pratiques du secteur, ce qui se traduit directement en pertes de productivité et de qualité.",
      approach:
        "Nous concevons et animons des programmes de formation sur mesure, adaptés à vos équipes et à vos réalités terrain, dans les domaines techniques, organisationnels et industriels. Chaque programme vise un objectif concret : renforcer une compétence précise et mesurer son impact sur le terrain.",
      gains: [
        "Des formations sur mesure, pas des modules génériques",
        "Un renforcement direct des compétences techniques et organisationnelles de vos équipes",
        "Une amélioration mesurable de l'efficacité sur le terrain",
      ],
    },
  },
  {
    slug: "audit-technique",
    short: "Audit & Assistance",
    title: "Audit et assistance technique",
    tagline: "Points faibles identifiés, solutions concrètes",
    image: serviceAudit,
    ctaLabel: "Consulter nos services",
    summary:
      "Nos audits approfondis et notre assistance technique ciblée identifient vos points faibles et implémentent des solutions concrètes pour optimiser vos processus de fabrication, d'assemblage et de design.",
    detail: {
      hook: "Vous ne pouvez pas améliorer ce que vous ne mesurez pas précisément.",
      problem:
        "Les points faibles d'un processus de fabrication, d'assemblage ou de design ne sont pas toujours visibles de l'intérieur. Sans un audit rigoureux et un regard technique externe, ces inefficacités continuent de coûter cher, souvent sans qu'on en identifie la cause exacte.",
      approach:
        "Nos audits approfondis identifient précisément vos points faibles et notre assistance technique ciblée implémente des solutions concrètes, pas seulement des recommandations théoriques. Nous intervenons directement sur vos processus de fabrication, d'assemblage et de design.",
      gains: [
        "Un diagnostic technique précis de vos processus actuels",
        "Des solutions concrètes et applicables, pas un rapport qui reste sur l'étagère",
        "Un accompagnement dans l'implémentation, jusqu'aux résultats mesurés",
      ],
    },
  },
  {
    slug: "sous-traitance",
    short: "Sous-traitance",
    title: "Sous-traitances et partenariats industriels",
    tagline: "Le Best Cost marocain, performant et local",
    image: serviceSousTraitance,
    ctaLabel: "Explorer nos partenariats",
    summary:
      "Nous proposons aux entreprises qui veulent bénéficier du Best Cost marocain une sous-traitance ou co-traitance locale performante, en particulier dans les secteurs de l'électronique, l'électrique et la mécatronique.",
    detail: {
      hook: "Le Best Cost marocain, sans compromis sur la qualité ni la fiabilité.",
      problem:
        "Trouver un partenaire de sous-traitance fiable, surtout à l'international, représente un risque réel : qualité incertaine, délais non tenus, communication difficile. Beaucoup d'entreprises hésitent à délocaliser une partie de leur production par manque de garanties.",
      approach:
        "Nous proposons aux entreprises qui veulent bénéficier du Best Cost marocain une sous-traitance ou co-traitance locale performante, en particulier dans les secteurs de l'électronique, l'électrique et la mécatronique. Notre rôle : sélectionner les bons partenaires, superviser la qualité, et sécuriser la relation à chaque étape.",
      gains: [
        "Un accès à des partenaires marocains qualifiés et vérifiés",
        "Une supervision continue de la qualité et des délais",
        "Une amélioration mesurable de vos résultats qualitatifs et financiers",
      ],
    },
  },
  {
    slug: "marketing-ventes",
    short: "Marketing & Ventes",
    title: "Développement Marketing et ventes",
    tagline: "Image industrielle, présence digitale, marché",
    image: serviceMarketing,
    ctaLabel: "Booster votre visibilité",
    summary:
      "Un support marketing solide pour améliorer votre image, votre pénétration de marché et votre présence digitale, conçu par une spécialiste formée aux stratégies de marque et de campagne.",
    detail: {
      hook:
        "Votre expertise industrielle mérite une visibilité à la hauteur de votre savoir-faire.",
      problem:
        "Beaucoup d'entreprises industrielles excellentes sur le terrain restent invisibles ou mal perçues en ligne, ce qui limite directement leur capacité à attirer de nouveaux clients et partenaires. La performance opérationnelle seule ne suffit plus à convaincre.",
      approach:
        "Un support marketing solide, conçu par une spécialiste formée aux stratégies de marque et de campagne, pour améliorer votre image, votre pénétration de marché et votre présence digitale. Nous traduisons votre expertise technique en un positionnement clair et convaincant.",
      gains: [
        "Une image de marque cohérente et professionnelle",
        "Une présence digitale renforcée",
        "Une meilleure pénétration de marché auprès de vos cibles",
      ],
    },
  },
];
