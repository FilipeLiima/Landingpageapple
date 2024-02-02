import React from "react";
import blackImage from "../assets/black.png";
import blueImage from "../assets/blue.png";
import greenImage from "../assets/green.png";
import pinkImage from "../assets/pink.png";
import whiteImage from "../assets/white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

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
          <img src={blackImage} alt="Imagem" id="phone" />
          <hr />
          <p className="help-text">
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
                imgSlider(blackImage);
                circleChange("#445c42");
              }}
            ></span>
            <span
              id="rosa"
              onClick={() => {
                imgSlider(pinkImage);
                circleChange("#ffc9cf");
              }}
            ></span>
            <span
              id="verde"
              onClick={() => {
                imgSlider(greenImage);
                circleChange("#0b839e");
              }}
            ></span>
            <span
              id="prateado"
              onClick={() => {
                imgSlider(whiteImage);
                circleChange("#092732");
              }}
            ></span>
            <span
              id="azul"
              onClick={() => {
                imgSlider(blueImage);
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
          <h6 className="shipping-info">
            <FontAwesomeIcon icon={faTruckFast} className="custom-icon" />
            <span>
              Envio em:
              <br /> 1 - 2 Semanas <br />
              Frete grátis
            </span>
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
