import React from "react";
import PropTypes from 'prop-types'

const Card = (props) => {
    return (
      <div className="card" style={{ width: '100%', margin: '15px', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    );
  }

  Card.propTypes = {
    content: PropTypes.string,
  };

  export default Card;