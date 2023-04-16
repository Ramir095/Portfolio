import Circle from "../Circle";

import perfil from "../../assets/perfil.png";
import download from "../../assets/download.svg";
import curriculum from "../../assets/Kevin_Aduviri_CV.pdf"
import profile from "../../assets/portrait.webp"


const commonClass = "bg-[#2E3140] md:w-[3.8rem] md:h-[3.8rem] md:rounded-full md:border-solid md:border-2 md:border-gray-600 md:flex md:items-center md:justify-center md:hover:bg-slate-50 md:hover:text-[black] hover:md:border-slate-50 transition-all"


const Presentation = () => {
  return (
    <div className=" h-screen max-w-full flex justify-center items-center flex-col md:flex-row-reverse md:justify-center md:mr-[11rem] flex-wrap" id="home">

      <Circle big={"md:top-[-21rem] md:left-[-11rem]"} medium={"top-[-15.3rem] left-[-6rem]"} small={"top-[-14.3rem] left-[-5rem]"} />

      <Circle big={"md:bottom-[-21rem] md:left-[-11rem]"} medium={"bottom-[-15.3rem] left-[-6rem]"} small={"bottom-[-14.3rem] left-[-5rem]"}/>

      <div className="md:relative md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-700  md:border-l-2 md:border-b-[1px] md:border-l-[#2E3140] md:w-[35rem] md:h-[34rem] md:right-[-12rem] md:top-[4rem] md:ml-[-8rem]">

        <div className="relative rounded-full w-[16rem] h-[16rem] border-solid border-t-2 border-r-2 border-gray-600 border-l-2 border-l-[#2E3140] mt-10 md:h-[29rem] md:w-[29rem] md:right-[-2.5rem] md:top-1 ">

          <div className="md:relative md:w-[30rem] md:h-[24rem] md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-700 md:border-l-8 md:border-l-[#2E3140] md:border-b-[1px] md:right-[5rem] md:top-12">

            <img
              src={perfil}
              alt="perfil"
              className="w-60 h-[22rem] ml-[-40px] absolute bottom-[-2rem] md:w-[30rem] md:h-[42rem] md:top-[-7rem]"
            />

            <div>
              <a
                href="https://www.linkedin.com/in/ramiro-aduviri/"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute right-[4.6rem] top-[-1.1rem] md:right-[5rem] md:top-[-4.5rem] ${commonClass}`}
              >
               <i className="fa-brands fa-linkedin-in text-[2.1rem] md:text-[1.65rem] md:mb-0.5"></i>
              </a>

              <a
                className={`absolute right-0.5 top-8 md:right-[-2.8rem] md:top-2 ${commonClass}`}
                href="https://github.com/Ramir095"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-[2rem] md:text-[2rem]"></i>
              </a>

              <a
                className={`absolute right-[-1.2rem] top-[6.9rem] md:right-[-5.5rem] md:top-[9.7rem] ${commonClass}`}
                href="https://twitter.com/KeduDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter text-[2rem] md:text-[1.7rem] md:mt-0.5"></i>
              </a>
              <a
                className={`absolute right-2 top-[11.7rem] md:right-[-2.5rem] md:top-[18.5rem] ${commonClass}`}
                href="mailto:contacto@rama-dev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope-circle-check text-[1.7rem]
                md:text-[1.5rem] md:ml-1 md:mb-0.5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        
      <div className="flex flex-col h-40 mt-14 items-center text-center md:h-full md:mt-0 md:pt-8 md:justify-evenly md:items-start md:text-start">
        <div className="font-['Cormorant'] z-0">
          <h1 className="text-5xl md:text-6xl">¡Hola! Soy</h1>

          <h2 className="flex text-5xl text-[#8EBF45] md:text-8xl">
            Ramiro
            <span className="block pl-[0.57rem] md:pl-[1.14rem]">
              Aduviri
              <div className="hidden md:block absolute w-[19rem] ml-[-1rem] h-5 bg-[url('https://htmldemo.net/lendex/lendex/assets/images/icon/hero-name-mark-shape.png')] mt-[-0.2rem]">
              </div>
            </span> 
          </h2>
          <h2 className="text-2xl pt-3 font-['Poppins']">
            Full Stack Developer
          </h2>
        </div>

        <div className="flex justify-start items-center mt-8 z-0">
          <a
            href={curriculum}
            download="Kevin_Aduviri_CV.pdf"
            className="w-[242px] h-[85px] border-solid border-[1px] border-[#3b3d49] rounded-[42px] flex justify-center items-center bg-[#2E3140] hover:bg-[#2A2C39] transition-all duration-[0.5s] hover:border-none"
          >
            <p>Ver Curriculum</p>
            <img
              src={download}
              alt="download curriculum"
              className="w-4 h-4 ml-3 "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
