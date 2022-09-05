interface TeamMember {
  name: string;
  title: string;
  photo: string;
  contribution: string;
  github: string;
  githubName: string;
}

const TeamList: TeamMember[] = [
  {
    name: "Nastasya",
    title: "Front-end developer",
    photo: `https://tlum.ru/uploads/0e598cdb5f0475250f883a9f4643b834c28558ded7916db5685908075d0133ff.jpeg`,
    contribution: "Make authorization part",
    github: `https://github.com/Anastasia-pro`,
    githubName: "Anastasia-pro",
  },
  {
    name: "Dmitry",
    title: "Front-end developer",
    photo: `https://otvet.imgsmail.ru/download/u_15fa06a658f1b256c74d2021b7895d14_800.jpg`,
    contribution: "Work with a server (deployed the server and wrote functions for working with api). Helps with applying api functions",
    github: `https://github.com/PDmitryY`,
    githubName: "PDmitryY",
  },
  {
    name: "Pavel",
    title: "Front-end developer",
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTG6iR9uXtLR5w5_7lF_FK9bo0UzNoNP__g&usqp=CAU`,
    contribution: "Team Lead. Сreated tasks in Trello. Started ReactApp and supporting it. Make UI of main page, text book, sprint game and command description. Make functionality of sprint game and textbook.",
    github: `https://github.com/anvianvi`,
    githubName: "anvianvi",
  },
];

export default TeamList;
