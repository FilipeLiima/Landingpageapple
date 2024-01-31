import React from "react";

const MainSection = () => {
  const imgSlider = (image) => {
    document.querySelector("#phone").src = image;
  };

  const circleChange = (color) => {
    const circle = document.querySelector(".circle");
    if (circle) {
      circle.style.background = color;
    }
  };

  return (
    <main>
      <section>
        <div className="main-img">
          <img src="assets/black.png" alt="Imagem" id="phone" />
          <hr />
          <p>
            Precisa de ajuda para comprar?{" "}
            <a className="link" href="#">
              Converse agora pelo chat
            </a>{" "}
            ou ligue para 0800-761-0867
          </p>
        </div>
        <div className="main-text">
          <h3>Comprar Airpods Max</h3>
          <div className="text">
            <h2>Cor:</h2>
          </div>
          <div className="content">
            <span
              id="cinza"
              onClick={() => {
                imgSlider("assets/black.png");
                circleChange("#445c42");
              }}
            ></span>
            <span
              id="rosa"
              onClick={() => {
                imgSlider("assets/pink.png");
                circleChange("#ffc9cf");
              }}
            ></span>
            <span
              id="verde"
              onClick={() => {
                imgSlider("assets/green.png");
                circleChange("#0b839e");
              }}
            ></span>
            <span
              id="prateado"
              onClick={() => {
                imgSlider("assets/white.png");
                circleChange("#092732");
              }}
            ></span>
            <span
              id="azul"
              onClick={() => {
                imgSlider("img/blue.png");
                circleChange("#e0dbd7");
              }}
            ></span>
          </div>
          <h2>Som de Alta Fidelidade</h2>
          <p>
            Apresentamos os AirPods Max. A combinação perfeita entre som de
            altíssima fidelidade e a magia intuitiva dos AirPods. Você nunca
            ouviu nada assim.
          </p>
          <h5>R$ 6.590,00 </h5>
          <p>
            <a className="link" href="#">
              Em até 12x de R$ 549,17
            </a>{" "}
            <br /> R$ 5.931,00 à vista (10% de desconto)
          </p>
          <hr />
          <h6>
            Envio em:
            <br /> 1 - 2 Semanas <br /> Frete grátis
          </h6>
          <a href="#" className="btn">
            Colocar na sacola
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
