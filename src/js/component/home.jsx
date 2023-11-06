import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CardContainer } from "./cardcontainer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />,
	  <Jumbotron />,
	  <CardContainer />,
	  <Footer />,
    </>
  );
};

export default Home;