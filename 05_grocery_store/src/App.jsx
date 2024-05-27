import React from "react";
import {
  CTA,
  Footer,
  Fruits,
  FruitsCards,
  Header,
  HealthySnacks,
  Navbar,
} from "./containers";
import "./App.css";
const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <HealthySnacks />
    <Fruits />
    <FruitsCards />
    <CTA />
    <div className="section__line" />
    <Footer />
  </div>
);
export default App;
