import React from "react";
import cardImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return (
      <div className="card" style={{ width: '100%', margin: '15px', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    );
  }

  const CardContainer = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
  
  export { CardContainer };