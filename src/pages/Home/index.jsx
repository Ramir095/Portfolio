import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import About from "../../components/About";
import Proyects from "../Proyects";

const Home = () => {
  return (
    <div className="md:flex bg-[#2E3140] text-[#F2F2F2] font-['Poppins']">
      <SideBar />
      <div className="md:ml-[5rem]">
        <Presentation />
        <div className="relative flex">
          <div className="w-full">
            <About />
            <Skills />
            <Proyects />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
