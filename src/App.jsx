import "./App.css";
import { useEffect } from "react";
import Work from "./components/Work";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stripes from "./components/Stripes";
import Marques from "./components/Marques";
import Products from "./components/Products";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="w-full h-full bg-zinc-900 text-white font-['Times New Roman']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer /> 
    </div>
  );
};

export default App;
