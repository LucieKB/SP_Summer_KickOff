export type TriviaQuestions = {
  id: number;
  category: string;
  question: string;
  choicesK: [string, string];
  choicesE: [string, string, string, string];
  choicesM: string;
  answer: string;
};

export const triviaQuestions = [
  {
    id: 1,
    category: " 👾 Videogames 👾",
    question: "What year was the official release date of Minecraft?",
    choicesK: ["1991", "2011"],
    choicesE: ["1991", "2001", "2011", "2021"],
    choicesM: "Right answer +- 3 years",
    answer: "2011",
  },

  {
    id: 2,
    category: "🦊 Pokémon 🐱",
    question:
      "What is the only Pokémon type that has never been super-effective against any other type?",
    choicesK: ["Water type", "Normal type"],
    choicesE: ["Water type", "Normal type", "Fairy type", "Poison type"],
    choicesM: "No choice, give the right answer !",
    answer: "Normal type",
  },

  {
    id: 3,
    category: " 👾 Videogames 👾",
    question: "In Super Mario Bros. 3 what power-up item allows Mario to fly?",
    choicesK: [
      "The Super Leaf that transforms him into Racoon Mario",
      "The Rocket that transforms him into the Flying Missile",
    ],
    choicesE: [
      "The Super Leaf that transforms him into Racoon Mario",
      "The Rocket that transforms him into the Flying Missile",
      "The Star that transforms him into Invincible Flying Mario",
      "The Bell that transforms him into Super Cat",
    ],
    choicesM: "No choice, give the right answer !",
    answer: "The Super Leaf that transforms him into Racoon Mario",
  },

  {
    id: 4,
    category: " 👾 Videogames 👾",
    question:
      "What is the average age of a video game player according to recent studies?",
    choicesK: ["14", "34"],
    choicesE: ["14", "24", "34", "44"],
    choicesM: "Find the right answer +- 5 years",
    answer: "34",
  },

  {
    id: 5,
    category: "🥇 Olympics 🥇",
    question: "What is the distance of a marathon race in the Olympic Games?",
    choicesK: ["13.1 miles", "26.2 miles"],
    choicesE: ["13 miles", "20.1 miles", "26.2 miles", "32.4 miles"],
    choicesM: "Right answer +- 4 miles",
    answer: "26.2 miles",
  },

  {
    id: 6,
    category: " 👾 Videogames 👾",
    question:
      "How many blocks does a player have to mine to craft a full set of diamond armor?",
    choicesK: ["24", "144"],
    choicesE: ["Right answer +- 5 blocks", "", "", ""],
    choicesM: "Right answer +- 2 blocks",
    answer: "24",
  },

  {
    id: 7,
    category: " 👾 Videogames 👾",
    question: "What is the best-selling video game of all time?",
    choicesK: ["Mario Kart", "Minecraft"],
    choicesE: ["Grand Theft Auto", "Mario Kart", "Minecraft", "Tetris"],
    choicesM: ["Grand Theft Auto", "Mario Kart", "Minecraft", "Tetris"],
    answer: "Minecraft with 300 million sales",
  },

  {
    id: 8,
    category: "🥇 Olympics 🥇",
    question:
      "What is the only new sport to make its debut in the Paris Olympics this summer?",
    choicesK: ["Breakdancing", "Climbing"],
    choicesE: ["Breakdancing", "Climbing", "Surfing", "Skateboarding"],
    choicesM: "No choice, you have to find the right answer!",
    answer: "Breakdancing",
  },

  {
    id: 9,
    category: " 👾 Videogames 👾",
    question:
      "What was the original name of Mario when he first appeared 43 years ago, in the 1981 arcade game Donkey Kong?",
    choicesK: ["Plumber Man", "Jump Man"],
    choicesE: ["Plumber Man", "Alberto", "Jump Man", "Leonardo"],
    choicesM: "Plumber Man - Alberto - Jump Man - Leonardo",
    answer: "Jump Man",
  },

  {
    id: 10,
    category: "🥇 Olympics 🥇",
    question: "Which country has hosted the most Summer Olympics?",
    choicesK: ["USA", "Greece"],
    choicesE: ["USA", "Greece", "France", "Italy"],
    choicesM: "No choice, sorry. But 2 chances to find the right answer.",
    answer: "USA",
  },

  {
    id: 11,
    category: "🥇 Olympics 🥇",
    question: "How old was the youngest Olympic medalist?",
    choicesK: [
      "Nadia Comǎneci in gymnastics at 14 y.o",
      "Dimitrios Loundras in team parallel bars at 10 y.o",
    ],
    choicesE: [
      "Nadia Comǎneci in gymnastics at 14 y.o",
      "Dimitrios Loundras in team parallel bars at 10 y.o",
      "Ye Shiwen in swimming at 16 y.o",
      "Marjorie Gestring in springboard diving at 13 y.o",
    ],
    choicesM: [
      "Nadia Comǎneci in gymnastics at 14 y.o",
      "Dimitrios Loundras in team parallel bars at 10 y.o",
      "Ye Shiwen in swimming at 16 y.o",
      "Marjorie Gestring in springboard diving at 13 y.o",
    ],
    answer: "Dimitrios Loundras in team parallel bars at 10 y.o",
  },
];
