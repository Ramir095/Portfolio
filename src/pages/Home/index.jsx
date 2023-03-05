import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Proyects from "../../components/Proyects";
import SideBar from "../../components/SideBar";
import About from "../../components/About";

const Home = () => {
  // const ref = useRef(null);
  // const entry = useIntersectionObserver(ref, {});
  // const isVisible = !!entry?.isIntersecting;

  // useEffect(() => {
  //   console.log(isVisible);
  // }, [isVisible]);

  return (
    <div className="md:flex bg-[#2E3140] text-[#F2F2F2] font-['Poppins']">
      <SideBar />
      <div className="w-screen h-screen md:ml-[6rem]">
        <Presentation />
        <div className="relative flex w-full">
          <div className="w-full">
            <About />
            <Skills />
            <Proyects />
          </div>
          <Footer />
          {/* {!isVisible && <Footer />} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
