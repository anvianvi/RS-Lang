interface Advantage {
  icon: string;
  title: string;
  text: string;
}

const AdvantagesList: Advantage[] = [
  {
    icon: `./icons/textbook.svg`,
    title: "Textbook",
    text: `The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented.`,
  },
  {
    icon: `./icons/dictionary.svg`,
    title: "Dictionary",
    text: `The dictionary contains lists of studied words, words that do not need to be learned, as well as those that cause difficulties. The dictionary reflects statistics for each section and student progress.`,
  },
  {
    icon: `./icons/game.svg`,
    title: "Games",
    text: `For learning words and reinforcing memorization, the application has 4 games: Savannah, Sprint, Audio Chalenge and Imaginarium, which will help you to "pump" your vocabulary in a playful way.`,
  },
  {
    icon: `./icons/statistic.svg`,
    title: "Statistics",
    text: `All the progress of training can be viewed in statistics, where data for the current day, as well as for the entire training period, are presented. The information is presented both in the form of a table and graphs, which is very convenient.`,
  },
];

export default AdvantagesList;
