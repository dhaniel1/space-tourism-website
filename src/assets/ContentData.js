//Imports for destination page
import Moon from "./destination/image-moon.webp";
import Mars from "./destination/image-mars.webp";
import Titan from "./destination/image-titan.webp";
import Europa from "./destination/image-europa.webp";

//Imports for crew page
import Mark from "./crew/image-mark-shuttleworth.webp";
import Victor from "./crew/image-victor-glover.webp";
import Douglas from "./crew/image-douglas-hurley.webp";
import Ansari from "./crew/image-anousheh-ansari.webp";

//Imports for technology page
import Vehicle from "./technology/image-launch-vehicle-portrait.jpg";
import Capsule from "./technology/image-space-capsule-portrait.jpg";
import Spaceport from "./technology/image-spaceport-portrait.jpg";

export { Vehicle, Capsule, Spaceport };
export const destinationPageContent = [
  {
    header: "Moon",
    body: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: Moon,
  },
  {
    header: "Mars",
    body: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    time: "9 months",
    image: Mars,
  },
  {
    header: "Europa",
    body: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    time: "3 years",
    image: Europa,
  },
  {
    header: "Titan",
    body: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL",
    time: "7 years",
    image: Titan,
  },
];

export const crewPageContent = [
  {
    profession: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: Douglas,
  },
  {
    profession: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: Mark,
  },
  {
    profession: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: Victor,
  },
  {
    profession: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: Ansari,
  },
];

export const technologyPageContent = [
  {
    header: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: Vehicle,
  },
  {
    header: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: Spaceport,
  },
  {
    header: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: Capsule,
  },
];
