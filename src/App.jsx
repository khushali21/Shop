import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonial/Testimonials";
const App = () => {
  return (
    <div>
      <NavBar />
      <Products />
      <Testimonials />
    </div>
  );
};

export default App;
