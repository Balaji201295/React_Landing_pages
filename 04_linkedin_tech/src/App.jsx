import React from "react";
import {
  AboutProducts,
  Brand,
  CTA,
  Footer,
  Header,
  Navbar,
  NewProducts,
  NewShop,
  Offers,
  Products,
} from "./containers";
import "./App.css";
const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Brand />
    <Products />
    <Offers />
    <AboutProducts />
    <NewProducts />
    <NewShop />
    <CTA />
    <Footer />
  </div>
);
export default App;
