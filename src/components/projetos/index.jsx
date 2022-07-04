import "./style.css";
import hanoi from "./hanoi.png";
import organizai from "./organizaí.png";
import kenzieshop from "./kenzieshop.png";

import {
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

export default function Projetos() {
  return (
    <>
      <div id="containerProjetos">
        <h1 id="myProj">Meus Projetos</h1>

        <div id="contProj">
          <h1 id="ast">1# Torre de Hanoi</h1>
          <div id="flexHereToo">
            <img src={hanoi} alt="hanoi" id="kliu"></img>
            <div id="vs">
              <p id="jub">
                Meu primeiro jogo desenvolvido em Javascript completamente
                através do DOM (Document Object Model) e adaptado para mobile.
                Neste jogo o objetivo é mover a torre para o lado oposto. Como
                regra, não é possível que uma peça maior fique acima de uma peça
                menor.
              </p>
              <div id="katr">
                <button id="but">
                  <a
                    href="https://github.com/kefrenkennedy/Torre-de-hanoi"
                    target="blank"
                  >
                    Github
                  </a>
                </button>
                <button id="but">
                  <a
                    href="https://kefrenkennedy.github.io/Torre-de-hanoi/"
                    target="blank"
                  >
                    Visite o Projeto
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="contProj">
          <h1 id="ast">2# Organiza Aí</h1>
          <div id="flexHereToo">
            <img src={organizai} alt="OrganizaAi" id="kliu"></img>
            <div id="vs">
              <p id="jub">
                Realizado num projeto em grupo no qual tive parte em
                apresetação, Quality Assurance e em desenvolvimento no geral. É
                um site completo que inclui não apenas Front-end mas também
                Back-End, que no caso foi utilizada uma fakeAPI para cadastro de
                usuários e outras features, também disponível para mobile. Neste
                aplicativo o usuário pode criar uma conta, logar nela, deslogar,
                criar eventos (desde RPG de mesa online até mesmo um churrasco
                ou partida de futebol), solicitar participação em evento,
                aceitar ou recusar participações além de ser um projeto
                completamente escalável.
              </p>
              <div id="katr">
                <button id="but">
                  <a
                    href="https://github.com/kefrenkennedy/capstone-organiza-ai"
                    target="blank"
                  >
                    Github
                  </a>
                </button>
                <button id="but">
                  <a
                    href="https://capstone-organiza-ai-m3-five.vercel.app/"
                    target="blank"
                  >
                    Visite o Projeto
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="contProj">
          <h1 id="ast">3# KenzieShop</h1>
          <div id="flexHereToo">
            <img src={kenzieshop} alt="kenzieshop" id="kliu"></img>
            <div id="vs">
              <p id="jub">
                Uma loja online onde o cliente pode adicionar e remover produtos
                do carrinho. Feito com a utilização do Redux.
              </p>
              <div id="katr">
                <button id="but">
                  <a
                    href="https://github.com/kefrenkennedy/Kenzie-Shop-Redux"
                    target="blank"
                  >
                    Github
                  </a>
                </button>
                <button id="but">
                  <a
                    href="https://kenzie-shop-redux-tau.vercel.app/"
                    target="blank"
                  >
                    Visite o Projeto
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 id="myProj">TECNOLOGIAS</h1>
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
      </div>
      
    </>
  );
}
