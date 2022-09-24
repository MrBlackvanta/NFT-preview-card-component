import equilibrium from "./images/image-equilibrium.jpg";
import eye from "./images/icon-view.svg";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import creator from "./images/image-avatar.png";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="card-img-box">
        <img src={equilibrium} alt="Equilibrium" className="card-img" />
        <img src={eye} alt="eye icon" className="card-img-eye" />
        <div className="overlay"></div>
      </div>
      <h2 className="card-title">Equilibrium #3429</h2>
      <p className="card-description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="card-specs">
        <p className="card-specs-price">
          <span>
            <img src={ethereum} alt="ethereum" />
          </span>
          0.041 ETH
        </p>
        <p className="card-specs-date">
          <span>
            <img src={clock} alt="clock" />
          </span>
          3 days left
        </p>
      </div>
      <div className="card-owner">
        <img src={creator} alt="creator" className="card-owner-creator" />
        <p className="card-owner-description">
          Creation of <span className="card-owner-name">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
