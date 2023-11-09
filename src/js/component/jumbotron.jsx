import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="p-4 m-3 custom-bg rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.title}</h1>
        <p className="col-md-8 fs-4">
          {props.content}
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export { Jumbotron };
