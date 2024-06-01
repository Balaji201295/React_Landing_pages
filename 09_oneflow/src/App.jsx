import React from "react";
import {
  Blogs,
  Brands,
  Collaborate,
  Contracts,
  Demo,
  Footer,
  Hero,
  Integrations,
  MoreOneFlow,
  Navbar,
  Platforms,
  Testimonials,
  Video,
} from "./containers";
const App = () => (
  <div className="w-full overflow-hidden bg-white">
    <Navbar />
    <Hero />
    <Brands />
    <Contracts />
    <Collaborate />
    <Video />
    <Platforms />
    <Demo />
    <Testimonials />
    <Integrations />
    <Blogs />
    <MoreOneFlow />
    <Footer />
  </div>
);
export default App;
