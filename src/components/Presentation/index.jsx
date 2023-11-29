import Circle from "../Circle";

import perfil from "../../assets/select-removebg-previewA.webp";

import download from "../../assets/download.svg";
import curriculum from "../../assets/Cv_RamiroAduviri_Full_Stack.pdf"


const commonClass = "bg-[#2E3140] w-[2.8rem] h-[2.8rem] md:w-[3rem] md:h-[3rem] lg:w-[3rem] lg:h-[3rem] xl:w-[3.8rem] xl:h-[3.8rem] rounded-full border-solid border-2 border-gray-600 flex items-center justify-center hover:bg-slate-50 hover:text-[black] hover:border-slate-50 transition-all"


const Presentation = () => {
  return (
    <div className="h-screen xl:max-w-full flex justify-center items-center flex-col lg:flex-row-reverse xl:pr-[11rem] 2xl:pr-[11.5rem] lg:space-x-0 xl:space-x-[-15rem] 2xl:space-x-[-10rem] flex-wrap space-y-2 md:space-y-0 lg:space-y-0 overflow-hidden" id="home">

      <Circle big={"lg:top-[-21rem] lg:left-[-11rem]"} medium={"top-[-15.3rem] left-[-6rem]"} small={"top-[-14.3rem] left-[-5rem]"} />

      <Circle big={"lg:bottom-[-21rem] lg:left-[-11rem]"} medium={"bottom-[-15.3rem] left-[-6rem]"} small={"bottom-[-14.3rem] left-[-5rem]"}/>

      <div className="lg:relative lg:rounded-full lg:border-solid lg:border-t-[1px] lg:border-r-[1px] lg:border-gray-700  lg:border-l-2 lg:border-b-[1px] lg:border-l-[#2E3140] lg:right-[0.5rem] lg:top-[8rem] xl:right-[-11rem] xl:top-[9.5rem] 2xl:right-[-12rem] 2xl:top-[5.2rem] lg:w-[23rem] lg:h-[24rem] xl:w-[35rem] xl:h-[35rem]">

        <div className="relative xl:block xl:absolute top-[-1rem] rounded-full w-[18rem] h-[18rem] md:top-[-2rem] md:w-[28rem] md:h-[28rem] border-solid border-t-2 border-r-2 border-gray-600 border-l-2 border-l-[#2E3140] mt-7 right-[0.2rem] md:right-[1rem] xl:right-[3rem] xl:top-1 xl:h-[31rem] xl:w-[31rem] lg:right-[-1.2rem] lg:top-[0.2rem] lg:h-[20rem] lg:w-[19rem]">

          <div className="lg:absolute lg:rounded-full lg:border-solid lg:border-t-[1px] lg:border-r-[1px] lg:border-gray-700 lg:border-l-8 lg:border-l-[#2E3140] lg:border-b-[1px] lg:right-[2.5rem] lg:top-9 xl:right-[3rem] xl:top-9 xl:w-[30rem] xl:h-[27rem] lg:w-[19rem] lg:h-[16rem]">

            <div className="left-[0.6rem] bottom-[-0.5rem] md:bottom-[-1.5rem] md:left-[1rem] ml-[-40px] absolute lg:w-[33rem] lg:h-0 xl:w-[33rem] xl:h-0 lg:top-[-10rem] lg:left-[-1rem] xl:left-[-0.5rem] xl:top-[-13.3rem]">

              <div className="absolute w-28 h-40 top-[1rem] right-[11.3rem] md:top-[8rem] md:right-[17.8rem] lg:right-[17rem] lg:top-[10rem] bg-[#2E3140] z-10" />
              <img
                src={perfil}
                alt="perfil"
                className="z-20 relative lg:absolute w-[19rem] h-[26rem] md:w-[28rem] md:h-[39rem] lg:w-[22rem] lg:h-[30rem] xl:w-[33rem] xl:h-[45rem]"
              />
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/ramiro-aduviri/"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute z-30 right-[2.6rem] top-[-0.1rem] md:right-[4.3rem] md:top-[1rem] lg:right-[2rem] lg:top-[-3.3rem] xl:right-[3.1rem] xl:top-[-2.4rem] 2xl:right-[3rem] 2xl:top-[-2.3rem] ${commonClass}`}
                aria-label='Dirigirse a Linkedin de Ramiro'
              >
               <i className="fa-brands fa-linkedin-in text-[1.3rem] md:text-[1.5rem] xl:text-[1.65rem] mb-0.5"></i>
              </a>

              <a
                className={`absolute right-[-0.5rem] top-[3.1rem] md:right-[-0.1rem] md:top-[5.6rem] lg:right-[-2.9rem] lg:top-[0.9rem] xl:right-[-3.2rem] xl:top-[3.5rem] 2xl:right-[-3.1rem] 2xl:top-[3.9rem] ${commonClass}`}
                href="https://github.com/Ramir095"
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label='Dirigirse a Github de Ramiro'
              >
                <i className="fa-brands fa-github text-[1.6rem] xl:text-[2rem]"></i>
              </a>

              <a
                className={`absolute right-[-1.4rem] top-[7.6rem] md:right-[-1.7rem] md:top-[12.3rem] lg:right-[-4.1rem] lg:top-[7.5rem] xl:right-[-5rem] xl:top-[12.5rem] 2xl:right-[-4.8rem] 2xl:top-[12.9rem] ${commonClass}`}
                href="https://twitter.com/Rama_Aduviri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Dirigirse a Twitter de Ramiro'
              >
                <i className="fa-brands fa-twitter text-[1.4rem] xl:text-[1.7rem] lg:mt-0.5"></i>
              </a>
              <a
                className={`absolute z-30 right-[-0.2rem] top-[12rem] md:right-[0.1rem] md:top-[19.2rem] lg:right-[-1rem] lg:top-[13.5rem] xl:right-[-1.5rem] xl:top-[21.1rem] ${commonClass}`}
                href="mailto:contacto@rama-dev.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Enviar un correo electrónico a Ramiro'
              >
                <i className="fa-solid fa-envelope-circle-check text-[1.3rem]
                lg:text-[1.5rem] ml-1 lg:mb-0.5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        
      <div className="flex flex-col h-40 mt-14 items-center text-center lg:h-full lg:mt-0 lg:pt-8 lg:justify-evenly lg:items-start lg:text-start">
        <div className="font-['Cormorant'] z-0">
          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl">¡Hola! Soy</h2>
          <h1 className="flex text-5xl md:text-[5rem] text-[#8EBF45] lg:text-7xl xl:text-8xl">
            Ramiro Aduviri
          </h1>
          <h2 className="text-2xl pt-3 font-['Poppins']">
            Full Stack Developer
          </h2>
        </div>

        <div className="flex justify-start items-center mt-8 z-0">
          <a
            href={curriculum}
            download="Kevin_Aduviri_CV.pdf"
            className="w-[242px] h-[85px] border-solid border-[2px] border-[#3b3d49] rounded-[42px] flex justify-center items-center bg-[#2E3140] hover:bg-[#2A2C39] transition-all duration-[0.5s] hover:border-none"
          >
            <p>Curriculum</p>
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
