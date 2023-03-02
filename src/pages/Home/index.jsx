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
      <SideBar />

      <div className="w-full h-screen">
        <div className="h-screen w-full flex justify-center items-center flex-col md:flex-row-reverse">

          <div className=" md:relative md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-500 md:w-[35rem] md:h-[34rem] md:right-[-12rem] md:top-[4rem]">

            <div className="relative rounded-full w-[16rem] h-[16rem] border-solid border-t-2 border-r-2 border-gray-500 border-l-2 border-l-[#2E3140] mt-10 md:h-[28rem] md:w-[28rem] md:right-[-3rem] md:top-3">
              
              <div className="md:relative md:w-[20rem] md:h-[20rem] md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-500 md:right-[-3rem] md:top-16">

                <img
                  src={perfil}
                  alt="perfil"
                  className="w-60 h-[22rem] ml-[-40px] absolute bottom-[-2rem] md:w-[28rem] md:h-[36rem] md:top-[-10rem]"
                />

                <div>
                  <a
                    className="absolute right-[4.5rem] top-[-1.2rem] bg-[#2E3140]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/linkedin.svg?size=35&color=F2F2F2"
                      alt="linkedin"
                    />
                  </a>
                  <a
                    className="absolute right-2 top-6 bg-[#2E3140]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/github.svg?size=35&color=F2F2F2"
                      alt="Github"
                    />
                  </a>
                  <a
                    className="absolute right-[-1rem] top-[6.5rem] bg-[#2E3140]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/twitter.svg?size=35&color=F2F2F2"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    className="absolute right-2 top-[11.8rem] bg-[#2E3140]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/address-book.svg?size=35&color=F2F2F2"
                      alt="Cualquiera"
                    />
                  </a>
                </div>

              </div>

            </div>

          </div>

          <div className="flex flex-col h-40 mt-14 items-center text-center">
            <div>
              <h1 className="text-5xl">¡Hola! Soy</h1>
              <h1 className="text-5xl text-[#8EBF45]">Ramiro Aduviri</h1>
              <h2 className="text-2xl pt-3">Full Stack Developer</h2>
            </div>

            <div className="flex justify-start items-center mt-8">
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
        <Skills />
        <Portfolio />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
