interface Me {
  name: string;
  about: string;
  role: string;
  email: string;
  howCanIHelp: string;
  gitHub: string;
  youtube: string;
  linkedin: string;
  image: string;
  projects: {
    name: string;
    link: string;
    tags: string[];
    description?: string;
    thumbnail: string;
  }[];
}

export const Me: Me = {
  name: "Brandon Cardoso",
  role: "Estudante de Ciência de Dados e Inteligência Artificial",
  email: "devbrandondev@gmail.com",
  linkedin: "https://www.linkedin.com/in/brandon-saraiva-006a4823b/",
  youtube: "https://www.youtube.com/channel/UC816MtD2bxL3uoIV0zdaneA",
  gitHub: "https://github.com/BrandonSaraiva",
  about: `Atualmente estou no terceiro semestre da faculdade de Data Science and Artificial Intelligence pelo centro universitário IESB. Descobri na área de Ciência de Dados uma forma de unir minha paixão por tecnologia e minha curiosidade em entender o mundo. Hoje na era da (des)informação o profissional de Dados se faz cada vez mais importante seja para empresas, governos ou até mesmo para o cidadão comum, por isso me sinto honrado em poder contribuir de alguma forma para o desenvolvimento da sociedade através dessa área. No atual momento estou me desenvolvendo no conjunto de ferramentas ELK (Elasticsearch, Logstash, Kibana) para o tratamento dos dados e desenvolvimento de dashboards.`,
  howCanIHelp: `Ja fiz diversos projetos em diferentes áreas da programação, desde o desenvolvimento web utilizando HTML, CSS e JavaScript, criação de aplicativos utilizando KIVY, até a construção e tratamento de bancos de dados utilizando SQL e Python. Ter tido contato com diversas tecnologias de áreas diferentes me ajudou a ter uma base sólida seja para aprender coisas novas ou para começar/continuar um projeto. Gosto de trabalhos em equipe tanto quanto gosto de trabalhos individuais, não tenho medo de fazer perguntas e procuro sempre entender minuciosamente o que deve ser feito para poder fazer um trabalho bem feito além de poder ajudar quem ainda não entendeu`,
  image: "https://brandonsaraiva.github.io/devportfolio/images/avatar.jpeg",
  projects: [
    {
      name: "Bot Telegram LotoFácil",
      link: "https://github.com/BrandonSaraiva/Projeto-bot-telegram-Lotof-cil",
      description:
        "Um bot em Python que utiliza dados históricos de sorteios da loteria para analisar os números mais frequentemente sorteados em uma determinada data ao longo dos anos. Com base nessa análise, o bot gera uma previsão dos números com maior probabilidade de serem sorteados no dia atual. Essa ferramenta permite aumentar suas chances de acertar os números da loteria.",
      tags: ["Google colab", "Telegram", "Bot", "Web Scraping"],
      thumbnail: "/lottery.jpeg",
    },
    {
      name: "Bot Telegram Home pc",
      link: "https://github.com/BrandonSaraiva/Bot-Faz-Tudo",
      description:
        "App em Python para automatizar tarefas diárias. Com comandos simples, posso receber boletos, enviar arquivos para o Google Drive e acessar informações úteis, como previsão do tempo e últimos e-mails. Além disso, implementei funcionalidades para controlar remotamente o PC e reprodução de vídeos no YouTube.",
      tags: ["Google colab", "Telegram", "Bot", "Web Scraping"],
      thumbnail:
        "https://wallpapers.com/images/high/antivirus-gtca5r11sslm65nl.webp",
    },
    {
      name: "Site cartoes presente",
      link: "https://github.com/BrandonSaraiva/Site-Cartoes",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      description:
        "Um site que permite a geração de cartões presente personalizados de forma rápida e fácil. O site está conectado a uma base de dados criada com MongoDB, proporcionando um controle eficiente sobre os cartões registrados. Com essa ferramenta simples, é possível criar cartões presente únicos para diversas ocasiões, garantindo uma experiência especial para quem os recebe.",
      thumbnail: "credit-card.jpeg",
    },

    {
      name: "Projeto eleicoes gerais - IESB",
      link: "https://github.com/BrandonSaraiva/Projeto-Ciencia-de-Dados-IESB",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      description:
        "Desenvolvi um projeto de análise descritiva dos dados das Eleições Gerais Ordinárias no Brasil em 2022, focado no Distrito Federal. Utilizamos PostgreSQL como banco de dados e Python/SAS para a análise. identificamos padrões, tendências e insights relevantes nos resultados eleitorais.",
      thumbnail:
        "https://brandonsaraiva.github.io/devportfolio/images/thumbs/facul.jpg",
    },
    {
      name: "Aplicativo pomodoro para celular",
      link: "https://github.com/BrandonSaraiva/APK-POMODORO",
      description:
        "Aplicativo de Pomodoro personalizado para uso pessoal que criei após ficar frustrado com opções disponíveis na Play Store. A interface é propositalmente única e simples. O aplicativo está disponível para download em formato .pkg para uso no celular. Transformar o código Python em um executável .pkg foi desafiador, mas após aproximadamente 9 horas de trabalho, consegui fazer funcionar.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "timer.jpeg",
    },
    {
      name: "Projeto internacoes e obitos - IESB",
      link: "https://github.com/BrandonSaraiva/pi3-internacoes",
      description:
        "Aplicação que investiga a relação entre internações, duração da estadia hospitalar e mortalidade. Utilizando dados públicos do Ministério da Saúde para analisar o número de internações, mortes e a duração média da hospitalização por procedimento em cada município brasileiro.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "/hospital.jpeg",
    },
    {
      name: "Projeto webscraping pi3 - IESB",
      link: "https://github.com/BrandonSaraiva/data_science_bot",
      description:
        "Automatizacão de processos de análise de dados. Utilizei diversas bibliotecas, como pyautogui, selenium e pandas. O bot gera slides com base em informações fornecidas e cria gráficos a partir de um banco de dados baixado. O projeto inclui interações sonoras e acesso a recursos que exigem login. Um destaque é a utilização do Google Colab para manipulação dos dados.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "/web.jpg",
    },
   {
      name: "Envio automatizado de mensagens",
      link: "https://github.com/BrandonSaraiva/automated_messages",
      description:
        "Este projeto teve como objetivo automatizar o envio de mensagens em horários programados e permitir o agendamento para qualquer dia desejado. Além disso, ele também realiza a coleta diária das moedas na plataforma Shopee. A proposta é oferecer uma solução simples e eficiente para essas tarefas específicas. Com esse bot, é possível automatizar o processo de envio de mensagens e garantir que as moedas sejam coletadas diariamente, sem a necessidade de intervenção manual.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "https://wallpapers.com/images/featured/whatsapp-3d9aa7qsppakwbww.webp",
    }
  ],
};
