import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundemental", "Core", "Crucial"];
function genRandmInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandmInt(2)];
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
