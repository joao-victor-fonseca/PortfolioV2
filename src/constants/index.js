export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    name: 'Trabalhos',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contato',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Radar Econômico - Plataforma de aumento de investimento',
    desc: 'Radar Econômico é uma plataforma inovadora projetada para aumentar a atratividade de investimentos em cidades de pequeno e médio porte. Por meio de análise de dados econômicos e insights de mercado, o aplicativo ajuda gestores públicos e investidores a identificarem oportunidades de desenvolvimento.',
    subdesc:
      'Desenvolvido com tecnologias modernas, incluindo Next.js, Tailwind CSS, Prisma, e PostgreSQL, o Radar Econômico oferece desempenho otimizado e insights detalhados para usuários e investidores.',
    href: 'https://economic-radar-umber.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/radareconomico-logo.svg',
    logoStyle: {
      backgroundColor: '#1D3A4D',
      border: '0.2px solid #0E2A3B',
      boxShadow: '0px 0px 60px 0px #2B6E9E4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma.svg',
      },
      {
        id: 5,
        name: 'PostgreeSql',
        path: '/assets/postgreesql.png',
      },
    ],
  },
  {
    title: 'Car Showcase - Explore o Universo Automotivo',
    desc: 'Car Showcase é um site que apresenta uma ampla variedade de veículos, exibindo informações detalhadas sobre cada modelo em uma interface elegante e organizada. O site oferece suporte avançado para filtragem e paginação, permitindo que os usuários encontrem facilmente os carros que desejam explorar.',
    subdesc:
      'Construído com React.js, TypeScript, Redux Toolkit e Tailwind CSS, o Car Showcase proporciona uma experiência de usuário intuitiva e eficiente, com carregamento rápido e layout responsivo.',
    href: 'https://github.com/joao-victor-fonseca/Car_Showcase',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/carhub.png',
    logoStyle: {
      backgroundColor: '#20232A',
      border: '0.2px solid #1F1F1F',
      boxShadow: '0px 0px 60px 0px #3D3D3D4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Redux Toolkit',
        path: '/assets/redux.png',
      },
    ],
  },
  {
    title: 'Upload.AI - Inteligência Artificial para Criação de Conteúdo',
    desc: 'Upload.AI é uma aplicação inovadora que utiliza inteligência artificial para transformar vídeos em conteúdo otimizado e de alto impacto. A plataforma gera automaticamente títulos chamativos e descrições com boa indexação, ajudando criadores de conteúdo a alcançarem melhores resultados de visibilidade.',
    subdesc:
      'Construído com tecnologias de ponta como OpenAI, Prisma, React, shadcn/ui, Tailwind CSS e Fastify, o Upload.AI combina IA e desempenho robusto para criar uma experiência eficiente e prática para uploads e geração de conteúdo.',
    href: 'https://github.com/joao-victor-fonseca/Upload.AI',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/apload-ai.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Openai',
        path: '/assets/openai.png',
      },
      {
        id: 5,
        name: 'Fastify',
        path: '/assets/fastify.svg',
      },
    ],
  },
  {
    title: 'Gragas Solution - Gestão de Estoque para Fabricação de PLCs',
    desc: 'Gragas Solution é uma aplicação voltada para o gerenciamento eficiente de estoque em empresas que produzem Controladores Lógicos Programáveis (PLCs). Projetado para otimizar o controle de componentes essenciais, o sistema assegura que os níveis de estoque estejam dentro dos limites operacionais, facilitando o reabastecimento e garantindo uma produção contínua.',
    subdesc:
      'Desenvolvido com C#, .NET e MySQL, o Gragas Solution oferece uma interface robusta e funcionalidades personalizadas para atender às necessidades do setor industrial de manufatura de PLCs.',
    href: 'https://github.com/joao-victor-fonseca/GragasSolution',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/gragas_solution_logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'C sharp',
        path: '/assets/csharp.png',
      },
      {
        id: 2,
        name: 'Dotnet',
        path: 'assets/dotnet.svg',
      },
      {
        id: 3,
        name: 'MySql',
        path: '/assets/mysql.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelancer',
    pos: 'Desenvolvedor de Software',
    duration: '2022 - Present',
    title:
      'Trabalho em projetos de desenvolvimento de software como freelancer, focando em entender necessidades do cliente e entregar soluções customizadas. Fortaleço minhas habilidades técnicas e aplico boas práticas de desenvolvimento e usabilidade.',
    icon: '/assets/freelancer.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'EderCar',
    pos: 'Vendedor de Veículos',
    duration: '02/2023 - 08/2023',
    title:
      'Fortaleci habilidades de comunicação e negociação, que facilitam a colaboração em equipes e o entendimento de requisitos de clientes e stakeholders.',
    icon: '/assets/edercar.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Epos',
    pos: 'Auxiliar Administrativo',
    duration: '09/2021 - 01/2023',
    title:
      'Desenvolvi competências em organização e atenção aos detalhes, fundamentais para gestão de documentos, preparação de relatórios e suporte administrativo. Essa experiência se aplica à documentação técnica e organização em projetos de software.',
    icon: '/assets/epos.png',
    animation: 'salute',
  },
];

export const certificates = [
  {
    title: 'Ciência da Computação',
    company_name: 'Centro Universitário Una',
    icon: '/assets/una.svg',
    iconBg: '#fff',
    borderBottomModel: '#e90d2c',
    date: ' 2023 -  2027',
    points: [
      'Desenvolvi uma sólida compreensão dos fundamentos da ciência da computação, incluindo algoritmos, estruturas de dados, teoria da computação e linguagens de programação. Essa base abrangente permitirá que você aborde uma variedade de desafios tecnológicos.',
      'A formação em Ciência da Computação promove habilidades avançadas de resolução de problemas e pensamento analítico. A capacidade de analisar, decompor e resolver problemas complexos é uma habilidade essencial que você desenvolverá ao longo do curso.',
      'Participei de projetos práticos e aplicados que simulem situações do mundo real. Isso proporciona uma experiência valiosa no desenvolvimento de software, colaboração em equipe e implementação de soluções inovadoras.',
      'Fiquei atualizado com as últimas tendências e avanços tecnológicos. A educação em Ciência da Computação prepara você para se adaptar rapidamente a novas tecnologias, linguagens de programação e abordagens inovadoras, garantindo que você esteja sempre à frente no dinâmico cenário da tecnologia.',
    ],
  },
  {
    title: 'Discover',
    company_name: 'RockeSeat',
    icon: '/assets/rocketseat.svg',
    iconBg: '#1a1a1e',
    borderBottomModel: '#1a1a1e',
    date: ' 2021 - 2022',
    points: [
      'Desenvolvimento, fundamentos da programação, HTML, CSS, Javascript.',
      'Implementando design responsivo e garantindo compatibilidade entre navegadores.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'RockeSeat',
    icon: '/assets/rocketseat.svg',
    iconBg: '#1a1a1e',
    borderBottomModel: '#1a1a1e',
    date: '2022',
    points: [
      'Estudei nessa plataforma completa onde aprendi programação com o objetivo de tornar-me Full Stack e me especializar em diversas tecnologias',
      'Fundamentos da programação web HTML, CSS, Git, banco de dados, back-end e front-end.',
      'Trilhas de React, React Native e Node.js com ferramentas e tecnologias alinhadas com o mercado.',
      'Além de aprender com professores especialistas em diversas tecnologias.',
    ],
  },
  {
    title: 'Cloud Foundations',
    company_name: 'Amazon Web Services (AWS)',
    icon: '/assets/aws.svg',
    iconBg: '#fff',
    borderBottomModel: '#ff9900',
    date: '2023',
    points: [
      'Aquisição de conhecimento e habilidades essenciais para a computação em nuvem: O curso fornece uma base sólida nos conceitos e serviços essenciais da AWS, que são essenciais para profissionais que desejam trabalhar com computação em nuvem.',
      'Experiência prática com os serviços da AWS: O curso inclui laboratórios práticos que permitem aos alunos aplicar os conceitos aprendidos em um ambiente real.',
    ],
  },
  {
    title: 'Cibersecurity Essentials',
    company_name: 'Cisco Networking Academy®',
    icon: '/assets/cisco.svg',
    iconBg: '#fff',
    borderBottomModel: '#c72131',
    date: '2023',
    points: [
      'Descrever as táticas, técnicas e procedimentos utilizados por cibercriminosos.',
      'Descrever os princípios de confidencialidade, integridade e disponibilidade conforme se relacionam com os estados dos dados e as contramedidas de cibersegurança.',
      'Descrever as tecnologias, produtos e procedimentos usados para proteger a confidencialidade, garantir a integridade e fornecer alta disponibilidade.',
      'Explicar como os profissionais de cibersegurança usam as tecnologias, processos e procedimentos para defender todos os componentes da rede.',
    ],
  },
  {
    title: 'Javascript',
    company_name: 'Cisco Networking Academy®',
    icon: '/assets/cisco.svg',
    iconBg: '#fff',
    borderBottomModel: '#c72131',
    date: '2024',
    points: [
      'Domínio Avançado de JavaScript: Exploração de conceitos avançados para desenvolvimento web dinâmico.',
      'Manipulação de Eventos e DOM: Aprender técnicas avançadas para interações dinâmicas com elementos da página.',
      'Desenvolvimento de Aplicações Interativas: Dominar a criação de aplicações web interativas e responsivas.',
      'Programação Assíncrona e Promises: Compreender e aplicar princípios de programação assíncrona para lidar com operações não bloqueantes.',
    ],
  },
  {
    title: 'Java Foundations',
    company_name: 'Oracle Academy',
    icon: '/assets/oracle.svg',
    iconBg: '#fff',
    borderBottomModel: '#e72e15',
    date: '2024',
    points: [
      'Fundamentos do Java: Aprendi os conceitos fundamentais da linguagem Java, incluindo manipulação de variáveis, estruturas de controle e conceitos de orientação a objetos.',
      'Desenvolvimento de Aplicações Básicas: Desenvolvi habilidades na criação de programas Java básicos para resolver problemas do mundo real.',
      'Manipulação de Dados e Estruturas de Dados: Aprofundei-me na manipulação de dados e aprendi sobre diferentes estruturas de dados em Java.',
      'Boas Práticas de Programação: Adotei boas práticas de programação e desenvolvi habilidades de resolução de problemas.',
    ],
  },
  {
    title: 'Oracle Database Foundations Learner',
    company_name: 'Oracle Academy',
    icon: '/assets/oracle.svg',
    iconBg: '#fff',
    borderBottomModel: '#e72e15',
    date: '2024',
    points: [
      'Fundamentos de Bancos de Dados: Adquiri uma compreensão sólida dos princípios fundamentais dos bancos de dados, incluindo conceitos como modelagem de dados, normalização e integridade referencial.',
      'SQL Básico e Avançado: Desenvolvi habilidades essenciais em SQL (Structured Query Language) para consulta, manipulação e gerenciamento de dados em um ambiente de banco de dados Oracle.',
      'Design e Administração de Bancos de Dados: Aprendi sobre os princípios de design e administração de bancos de dados, incluindo criação de tabelas, índices, visões e procedimentos armazenados.',
      'Segurança e Integridade de Dados: Explorei técnicas para garantir a segurança e a integridade dos dados em um banco de dados Oracle.',
    ],
  },
  {
    title: 'Citizen Developer Practitioner Micro-Credential',
    company_name: 'PMI (Project Management Institute)',
    icon: '/assets/pmi.svg',
    iconBg: '#fff',
    borderBottomModel: '#05bfe0',
    date: '2024',
    points: [
      'Metodologias Ágeis: Aprendi os princípios e práticas das metodologias ágeis, como Scrum, Kanban e Extreme Programming (XP), que enfatizam a entrega iterativa e incremental de software, colaboração próxima com o cliente e adaptação contínua aos requisitos em mudança.',
      'Desenvolvimento de Aplicativos: Adquiri conhecimentos sobre os fundamentos do desenvolvimento de aplicativos, incluindo a criação de interfaces de usuário intuitivas e funcionais.',
      'Automação de Processos: Explorei técnicas para automatizar processos de negócios por meio do desenvolvimento de aplicativos e integrações.',
      'Análise de Dados: Desenvolvi habilidades em análise de dados para extrair insights e informar a tomada de decisões baseada em dados.',
    ],
  },
];
