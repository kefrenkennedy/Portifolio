import { StyledHeader } from "./styles";
import "./style.css";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1 className="text-flicker-in-glow">Kefren Kennedy</h1>
        <h2>
          {" "}
          <a href="https://github.com/kefrenkennedy" target="blank">
            GitHub
          </a>{" "}
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.linkedin.com/in/kefren-kennedy-015763239/"
            target="blank"
          >
            Linkedin
          </a>
        </h2>
      </StyledHeader>

      <h1 className="text-flicker-in-glow" id="frontend">
        DESENVOLVEDOR FRONT END
      </h1>

      <div id="bleg"> SOBRE MIN</div>
    </>
  );
}
