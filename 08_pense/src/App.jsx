import React from "react";
import {
  AlwaysOnline,
  Brands,
  Chart,
  Demo,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Products,
  SaveCost,
  Testimonials,
  UseAnytime,
} from "./containers";
import styles from "./styles";
const App = () => (
  <main className="w-full bg-white overflow-hidden">
    <Navbar />
    <div className={`${styles.paddingX} ${styles.flexStart} pt-24`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Chart />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Brands />
        <AlwaysOnline />
      </div>
    </div>
    <div className={`${styles.paddingX} bg-[#FFFAF8]`}>
      <div className={`${styles.boxWidth}`}>
        <SaveCost />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <UseAnytime />
        <Products />
      </div>
    </div>
    <div className={`${styles.paddingX} bg-[#FFFAF8]`}>
      <div className={`${styles.boxWidth}`}>
        <Pricing />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        <Demo />
        <Footer />
      </div>
    </div>
  </main>
);
export default App;
