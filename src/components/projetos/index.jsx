import "./style.css";
import hanoi from "./hanoi.png";
import organizai from "./organizaí.png"
import kenzieshop from "./kenzieshop.png"

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
                através do DOM (Document Object Model) e adaptado para mobile. Neste jogo o objetivo é
                mover a torre para o lado oposto. Como regra, não é possível que
                uma peça maior fique acima de uma peça menor.
              </p>
              <div id="katr">
                <button id="but"><a href="https://github.com/kefrenkennedy/Torre-de-hanoi" target="blank">Github</a></button>
                <button id="but"><a href="https://kefrenkennedy.github.io/Torre-de-hanoi/" target="blank">Visite o Projeto</a></button>
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
                Realizado num projeto em grupo no qual tive parte em apresetação, Quality Assurance e em desenvolvimento no geral. É um site completo que inclui não apenas Front-end mas também Back-End, que no caso foi utilizada uma fakeAPI para cadastro de usuários e outras features, também disponível para mobile. Neste aplicativo o usuário pode criar uma conta, logar nela, deslogar, criar eventos (desde RPG de mesa online até mesmo um churrasco ou partida de futebol), solicitar participação em evento, aceitar ou recusar participações além de ser um projeto completamente escalável.
              </p>
              <div id="katr">
              <button id="but"><a href="https://github.com/kefrenkennedy/capstone-organiza-ai" target="blank">Github</a></button>
                <button id="but"><a href="https://capstone-organiza-ai-m3-five.vercel.app/" target="blank">Visite o Projeto</a></button>
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
                Uma loja online onde o cliente pode adicionar e remover produtos do carrinho. Feito com a utilização do Redux.
              </p>
              <div id="katr">
              <button id="but"><a href="https://github.com/kefrenkennedy/Kenzie-Shop-Redux" target="blank">Github</a></button>
                <button id="but"><a href="https://kenzie-shop-redux-tau.vercel.app/" target="blank">Visite o Projeto</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
