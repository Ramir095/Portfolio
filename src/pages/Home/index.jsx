import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Portfolio from "../../components/Portfolio";
import perfil from "../../assets/perfil.png";
import SideBar from "../../components/SideBar";
import { useState } from "react";

const Home = () => {

  const [circle, setCircle] = useState(false);

  console.log({ circle });

  return (
    <div className="md:flex bg-[#2E3140] text-[#F2F2F2]">
      {/* <Header circle={circle} /> */}
        <SideBar circle={circle}/>

      <div className="w-full h-screen">

        <div>

          <div className="h-screen w-full flex justify-center items-center flex-col text-center">

            <img
              src={perfil}
              alt="perfil"
              className="w-60 h-[22rem]"
            />

            <div className="flex flex-col h-40 mt-14 items-center">

              <div>
                <h1 className="text-5xl">¡Hola! Soy</h1>
                <h1 className="text-5xl">Ramiro Aduviri</h1>
                <h2 className="text-2xl pt-3">Full Stack Developer</h2>
              </div>

              <div className="flex justify-start items-center mt-10">
                <a
                  href="#curriculum"
                  className="w-[242px] h-[85px] border-solid border-[1px] border-[#3b3d49] rounded-[42px] flex justify-center items-center hover:bg-[#2E303D] transition-all duration-[0.5s]"
                >
                  <p>Ver Curriculum</p>
                  <img
                    src="https://icongr.am/fontawesome/download.svg?size=128&color=F2F2F2"
                    alt="download curriculum"
                    className="w-4 h-4 ml-3"
                  />
                </a>
              </div>

            </div>


          </div>

        </div>
        <Skills />
        <Portfolio />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
