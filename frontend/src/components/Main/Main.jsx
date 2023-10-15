import "./Main.css";
import { useRef } from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  const ref = useRef();

  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main">
      <Promo onScroll={handleScroll} />
      <AboutProject refProps={ref} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
