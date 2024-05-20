import React from "react";
import {
  Companies,
  Engineering,
  Footer,
  Header,
  Navbar,
  Product,
  Testimonial,
  WhyQubly,
} from "./containers";
import "./App.css";
import { BackToTop } from "./components";
const App = () => (
  <main>
    <div className="app__bg">
      <Navbar />
      <Header />
    </div>
    <WhyQubly />
    <Product />
    <Engineering />
    <Testimonial />
    <Companies />
    <Footer />
    <BackToTop />
  </main>
);
export default App;
