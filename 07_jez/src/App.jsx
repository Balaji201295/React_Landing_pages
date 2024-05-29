import React from "react";
import styles from "./styles";
import {
  AboutUs,
  CTA,
  Footer,
  Header,
  HealthyFood,
  Menu,
  Navbar,
} from "./containers";
import { navLinks } from "./constants";
const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
        <HealthyFood />
      </div>
    </div>
    <AboutUs />
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Menu />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
