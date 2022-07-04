import myPhoto from "./myPhoto.jpg";
import "./style.css";


export default function SobreMin() {
  return (
    <>
      <div className="sobreMinContainer">
        
        <div className="sobreMinContainer">
          <img id="myPhoto" src={myPhoto} alt="myPhoto"></img>

          <div id="containerTexto">
            <p>
              Olá, me chamo Kefren! sou um desenvolvedor Front-End e em poucos
              meses estarei me formando como Full-Stack, seja muito bem-vindo ao
              meu portifólio!
            </p>
            <p>
              Na minha vida tive bastante contato com pessoas nos trabalhos e
              por isso desenvolvi muitas soft-skills relacionadas, graças às
              minha experiências com vendas e música, mas enfim, estudando por
              conta própria e por gostar muito de desenvolver minha lógica,
              descobri minha paixão pelo mundo da tecnologia e programação e cá
              estou. Sempre em busca de evoluir como pessoa e profissionalmente,
              atrás de desafios que possam me acrescentar algo à ideia que tenho
              sobre o que é dar o melhor de mim mesmo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
