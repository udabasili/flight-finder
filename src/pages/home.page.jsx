import React, { Component } from "react"; 
import About from "../components/about.component";
import Explore from "../components/explore.component";
import Header from "../components/header.component";
import PreviewHotels from "../components/preview-hotels.component";

class HomePage extends Component {
  render() {
    return (
     <React.Fragment>
       <Header/>
       <Explore/>
       <About/>
       <PreviewHotels/>
     </React.Fragment>
    );
  }
}

export default HomePage;