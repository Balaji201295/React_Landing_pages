import React from "react";
import { Navbar } from "./components";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
} from "./containers";
import "./App.css";
import SpecialMenu from "./containers/Menu/SpecialMenu";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};
export default App;
