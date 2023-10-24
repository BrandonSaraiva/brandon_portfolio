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
  role: "Data Science and Artificial Intelligence Student",
  email: "devbrandondev@gmail.com",
  linkedin: "https://www.linkedin.com/in/brandon-saraiva-006a4823b/",
  youtube: "https://www.youtube.com/channel/UC816MtD2bxL3uoIV0zdaneA",
  gitHub: "https://github.com/BrandonSaraiva",
  about: `I am currently in the fourth semester of the Data Science and Artificial Intelligence college at the IESB university center. I discovered in the area of Data Science a way to combine my passion for technology and my curiosity in understanding the world. Today in the era of (mis)information, Data professionals are becoming increasingly important, whether for companies, governments or even ordinary citizens, which is why I feel honored to be able to contribute in some way to the development of society through this area. . I am currently developing the ELK toolset (Elasticsearch, Logstash, Kibana) for data processing and dashboard development.`,
  howCanIHelp: `Ja fiz diversos projetos em diferentes áreas da programação, desde o desenvolvimento web utilizando HTML, CSS e JavaScript, criação de aplicativos utilizando KIVY, até a construção e tratamento de bancos de dados utilizando SQL e Python. Ter tido contato com diversas tecnologias de áreas diferentes me ajudou a ter uma base sólida seja para aprender coisas novas ou para começar/continuar um projeto. Gosto de trabalhos em equipe tanto quanto gosto de trabalhos individuais, não tenho medo de fazer perguntas e procuro sempre entender minuciosamente o que deve ser feito para poder fazer um trabalho bem feito além de poder ajudar quem ainda não entendeu`,
  image: "https://brandonsaraiva.github.io/devportfolio/images/avatar.jpeg",
  projects: [
    {
      name: "Bot Telegram LotoFácil",
      link: "https://github.com/BrandonSaraiva/Projeto-bot-telegram-Lotof-cil",
      description:
        "A Python bot that uses historical lottery drawing data to analyze the most frequently drawn numbers on a given date over the years. Based on this analysis, the bot generates a prediction of the numbers most likely to be drawn on the current day. This tool allows you to have a good view of the 'luckiest' numbers in the games.",
      tags: ["Google colab", "Telegram", "Bot", "Web Scraping"],
      thumbnail: "/lottery.jpeg",
    },
    {
      name: "Bot Telegram Home pc",
      link: "https://github.com/BrandonSaraiva/Bot-Faz-Tudo",
      description:
        "Python app to automate daily tasks. With simple commands, I can receive invoices, send files to Google Drive and access useful information, such as the weather forecast and latest emails. Additionally, I implemented features to remotely control the PC and play videos on YouTube.",
      tags: ["Google colab", "Telegram", "Bot", "Web Scraping"],
      thumbnail:
        "https://wallpapers.com/images/high/antivirus-gtca5r11sslm65nl.webp",
    },
    {
      name: "Gift card website",
      link: "https://github.com/BrandonSaraiva/Site-Cartoes",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      description:
        "A website that allows you to generate personalized gift cards quickly and easily. The website is connected to a database created with MongoDB, providing efficient control over registered cards. With this simple tool, you can create control of gift cards registered by your company. The website runs through an executable, which allows it to be accessed only locally on the computer running the server, thus providing greater security.",
      thumbnail: "credit-card.jpeg",
    },

    {
      name: "General elections project - IESB",
      link: "https://github.com/BrandonSaraiva/Projeto-Ciencia-de-Dados-IESB",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      description:
        "I developed a descriptive analysis project of data from the Ordinary General Elections in Brazil in 2022, focused on the Federal District. We use PostgreSQL as the database and Python/SAS for the analysis. We have identify relevant patterns, trends and insights in electoral results.",
      thumbnail:
        "https://brandonsaraiva.github.io/devportfolio/images/thumbs/facul.jpg",
    },
    {
      name: "Pomodoro mobile app",
      link: "https://github.com/BrandonSaraiva/APK-POMODORO",
      description:
        "Custom Pomodoro app for personal use that I created after becoming frustrated with options available on the Play Store. The interface is purposefully unique and simple. The application is available for download in .pkg format for use on your cell phone. Turning the Python code into a .pkg executable was challenging, but after approximately 9 hours of work, I managed to get it working.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "timer.jpeg",
    },
    {
      name: "Hospitalizations and deaths project - IESB",
      link: "https://github.com/BrandonSaraiva/pi3-internacoes",
      description:
        "Application that investigates the relationship between hospitalizations, length of hospital stay and mortality. Using public data from the Ministry of Health to analyze the number of hospitalizations, deaths and the average duration of hospitalization per procedure in each Brazilian municipality.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "/hospital.jpeg",
    },
    {
      name: "pi3 webscraping project - IESB,
      link: "https://github.com/BrandonSaraiva/data_science_bot",
      description:
        "Automation of data analysis processes. I used several libraries, such as pyautogui, selenium and pandas. The bot generates slides based on information provided and creates charts from a downloaded database. The project includes sound interactions where it shows the data generated and explains what it is doing at the current moment.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "/web.jpg",
    },
   {
      name: "Automated message sending",
      link: "https://github.com/BrandonSaraiva/automated_messages",
      description:
        "This project aimed to automate the sending of messages at scheduled times and allow scheduling for any desired day. In addition, it also collects coins daily on the Shopee platform. The proposal is to offer a simple and efficient solution for these specific tasks. With this bot, it is possible to automate the message sending process and ensure that coins are collected daily, without the need for manual intervention.",
      tags: ["Python", "Kivy", "Plyer"],
      thumbnail: "https://wallpapers.com/images/featured/whatsapp-3d9aa7qsppakwbww.webp",
    }
  ],
};
