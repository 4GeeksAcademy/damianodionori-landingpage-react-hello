import React from "react";
import PropTypes from 'prop-types'

const Card = (props) => {
    return (
      <div className="card" style={{ width: '100%', margin: '15px', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
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

  const CardContainer = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Card content="Is this ok, Leo? Please, accept my project. Mark it has approved!" />
        <Card content="Vivamus et felis finibus, pretium erat quis, faucibus diam." />
        <Card content="Cras eleifend, eros ac finibus ultricies, nibh orci molestie augue, eget tempus libero dui id tortor." />
        <Card content="Fusce venenatis aliquam massa, a lobortis ex condimentum eget." />
      </div>
    );
  }
  
  export { CardContainer };