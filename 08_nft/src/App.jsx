import React from "react";
import styles from "./styles";
import {
  Brand,
  CTA,
  ExploreCategories,
  Footer,
  Header,
  HowItWorks,
  LiveAuctions,
  Navbar,
  PopularCollections,
  TopCreators,
} from "./containers";
const App = () => (
  <div className="bg-dark w-full overflow-hidden">
    <Navbar />
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
        <Brand />
        <LiveAuctions />
        <HowItWorks />
        <PopularCollections />
        <ExploreCategories />
        <TopCreators />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
