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
	  <Navbar
    mainItem="Start Bootstrap"
    />
	  <Jumbotron
    title="A Warm Welcome!"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    button="Call to Action!"
    />
	  <CardContainer />
	  <Footer
    content="Copyright © Damiano's Website 2023"
    />
    </>
  );
};

export default Home;
