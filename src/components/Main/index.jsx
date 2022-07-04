import {
  StyledHeader,
  AnimatedIMG,
  AnimatedIMGReversed,
  AnimatedIMGHTMLCSSLOGO,
  AnimatedIMGReversedREACT,
} from "./styles";
import "./style.css";

import BEMLOGO from "./assets/BEMLOGO.png";
import CLEANCODELOGO from "./assets/CLEANCODELOGO.png";
import CONVENTIONALCOMMITSLOGO from "./assets/CONVENTIONALCOMMITSLOGO.png";
import DOMLOGO from "./assets/DOMLOGO.png";
import FIGMALOGO from "./assets/FIGMALOGO.png";
import GITLOGO from "./assets/GITLOGO.png";
import HTMLCSSLOGO from "./assets/HTMLCSSLOGO.png";
import INSOMNIALOGO from "./assets/INSOMNIALOGO.png";
import JSLOGO from "./assets/JSLOGO.png";
import KENZIELOGO from "./assets/KENZIELOGO.png";
import OOPLOGO from "./assets/OOPLOGO.png";
import REACTLOGO from "./assets/REACTLOGO.png";
import REDUXLOGO from "./assets/REDUXLOGO.png";
import SCRUMLOGO from "./assets/SCRUMLOGO.png";
import VSCODELOGO from "./assets/VSCODELOGO.png";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1 className="text-flicker-in-glow">Kefren Kennedy</h1>
        <h2>
          {" "}
          <a href="https://github.com/kefrenkennedy" target="blank">GitHub</a>{" "}
        </h2>
        <h2>
          {" "}
          <a href="https://www.linkedin.com/in/kefren-kennedy-015763239/" target="blank">
            Linkedin
          </a>
        </h2>
      </StyledHeader>

      <div className="imgsContainer">
        <AnimatedIMGReversed src={KENZIELOGO} alt="img11"></AnimatedIMGReversed>

        <AnimatedIMGReversedREACT
          src={REACTLOGO}
          alt="img13"
        ></AnimatedIMGReversedREACT>

        <AnimatedIMG src={REDUXLOGO} alt="img14"></AnimatedIMG>
        <AnimatedIMGHTMLCSSLOGO
          className="hmtlcsslogo"
          src={HTMLCSSLOGO}
          alt="img8"
        ></AnimatedIMGHTMLCSSLOGO>
        <AnimatedIMG src={JSLOGO} alt="img10"></AnimatedIMG>

        <AnimatedIMG src={OOPLOGO} alt="img12"></AnimatedIMG>
        <AnimatedIMG src={DOMLOGO} alt="img4"></AnimatedIMG>
      </div>

      <div className="imgsContainer2">
        <AnimatedIMGReversed src={FIGMALOGO} alt="img5"></AnimatedIMGReversed>
        <AnimatedIMGReversed src={GITLOGO} alt="img7"></AnimatedIMGReversed>

        <AnimatedIMGReversed src={SCRUMLOGO} alt="img15"></AnimatedIMGReversed>
        <AnimatedIMG src={BEMLOGO} alt="img2"></AnimatedIMG>
        <AnimatedIMG src={CLEANCODELOGO} alt="img6"></AnimatedIMG>
        <AnimatedIMGReversed
          src={CONVENTIONALCOMMITSLOGO}
          alt="img3"
        ></AnimatedIMGReversed>

        <AnimatedIMG src={VSCODELOGO} alt="img16"></AnimatedIMG>
        <AnimatedIMGReversed
          src={INSOMNIALOGO}
          alt="img9"
        ></AnimatedIMGReversed>
      </div>

      <h1 className="text-flicker-in-glow" id="frontend">
        DESENVOLVEDOR FRONT END
      </h1>

      <h1 className="sobreMin"> SOBRE MIN</h1>
    </>
  );
}
