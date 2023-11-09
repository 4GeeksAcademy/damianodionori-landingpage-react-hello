import React from "react";
import Card from "./card";


  const CardContainer = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Card title="Card title" content="Is this ok, Leo? Please, accept my project. Mark it has approved!" button="Find Out More!" />
        <Card title="Card title" content="Thank you for your help, Javier!" button="Find Out More!"/>
        <Card title="Card title" content="Cras eleifend, eros ac finibus ultricies, nibh orci molestie augue, eget tempus libero dui id tortor." button="Find Out More!" />
        <Card title="Card title" content="Fusce venenatis aliquam massa, a lobortis ex condimentum eget." button="Find Out More!"/>
      </div>
    );


  }
  
  export { CardContainer };