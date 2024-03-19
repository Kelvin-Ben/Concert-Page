const speakers = document.querySelector(".speakers");
const speakerList = document.querySelector(".speakers__list");
const program = document.querySelector("#items");
const ProgramList = document.querySelector(".items");

const mainPrograms = [
  {
    imageSrc: "images/conference.png",
    title: "Lecture",
    description:
      "Listen to speakers from various countrues about the messeges of sharing and opening.",
  },
  {
    imageSrc: "images/exhibition.png",
    title: "CC Exhibition",
    description:
      "Appreciate various creations applying CC license of artists, organized from Art Centre Nabi.",
  },
  {
    imageSrc: "images/forum.png",
    title: "Forum",
    description:
      "Have the time to share your thoughts and opinions with experts for each topic.",
  },
  {
    imageSrc: "images/workshop.png",
    title: "Workhop",
    description:
      "Try creating your own work using open source license rather than just watching at it.",
  },
  {
    imageSrc: "images/ignite.png",
    title: "CC Ignite",
    description:
      "Get opportunities to network with CC affiliates around the world, also after the summit.",
  },
];

const featuredSpeakers = [
  {
    imageSrc: "images/speaker_01.png",
    name: "yochai benkler",
    profession:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Benkler Studies commons-based peer production, and published his seminal book. The Wealth of NetWorks in 2006",
  },
  {
    imageSrc: "/images/speaker_02.png",
    name: "kilnam chon",
    profession: "",
    description:
      "Kilnam Chon helped bring the Internet to Asia and is an outspokeb advccate for open web digital commons. In 2012, he was inducted into te inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
  },
  {
    imageSrc: "images/speaker_03.png",
    name: "SohYeong Noh",
    profession: "Director of Art Center Nabi and a board member of CC Korea",
    description:
      "As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
  {
    imageSrc: "images/speaker_04.png",
    name: "julia leda",
    profession: "President of Young Pirates of Europe",
    description:
      "European ingetration, political democracy and participation of youth through online as her major condem, Reda's report outlining potential changes to EU copyright law was approved by the parliament in july.",
  },
  {
    imageSrc: "images/speaker_05.png",
    name: "lila tretikov",
    profession: "Executive director of Wikimedia Foundation",
    description:
      "Lila Tretikov is the Executive Director of the wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a bilion peopke around the world every month.",
  },
  {
    imageSrc: "images/speaker_06.png",
    name: "ryan merkley",
    profession: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
    description:
      "Ryan has been leading open-source projects at the Mozilla Foundation such as the open source movement.",
  },
];
featuredSpeakers.forEach((speaker) => {
  const speakerItem = document.createElement("li");
  speakerItem.classList.add("speakers__detail");
  speakerItem.innerHTML = `
        <img src="${speaker.imageSrc}" alt="Photo of Yochai" class="speakers__photo"/>
        <span class="more-info">
          <h4 class="speaker-name">${speaker.name}</h4>
          <h5 class="speaker-profession">${speaker.profession}</h5>
          <p class="more-about">${speaker.description}</p>
        </span> `;
  speakerList.appendChild(speakerItem);
});

mainPrograms.forEach((mainProgram) => {
  const programItem = document.createElement("li");
  programItem.classList.add("programs__list");
  programItem.innerHTML = `
  <img src="${mainProgram.imageSrc}" alt="lecture" />
              <span class="programs__details">
                <h3>${mainProgram.title}</h3>
                <p class="programs__description">
                ${mainProgram.description}
                </p>
              </span>
  `;
  ProgramList.appendChild(programItem);
});
