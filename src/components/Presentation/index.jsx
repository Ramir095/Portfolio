import perfil from "../../assets/perfil.png";

const Presentation = () => {
  return (
    <div className="h-screen max-w-full flex justify-center items-center flex-col md:flex-row-reverse md:justify-center md:mr-[11rem]">
        {/* flex-wrap */}
          <div
            className="md:relative md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-700  md:border-l-2 md:border-l-[#2E3140] md:w-[35rem] md:h-[34rem] md:right-[-12rem] md:top-[4rem] md:ml-[-8rem]"
          >
            <div className="relative rounded-full w-[16rem] h-[16rem] border-solid border-t-2 border-r-2 border-gray-600 border-l-2 border-l-[#2E3140] mt-10 md:h-[29rem] md:w-[29rem] md:right-[-2.5rem] md:top-1 ">
              <div className="md:relative md:w-[30rem] md:h-[24rem] md:rounded-full md:border-solid md:border-t-[1px] md:border-r-[1px] md:border-gray-700 md:border-l-8 md:border-l-[#2E3140] md:right-[5rem] md:top-12">
                <img
                  src={perfil}
                  alt="perfil"
                  className="w-60 h-[22rem] ml-[-40px] absolute bottom-[-2rem] md:w-[30rem] md:h-[36rem] md:top-[-8rem]"
                />

                <div>
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    className="absolute right-[4.5rem] top-[-1.2rem] bg-[#2E3140] md:w-[3.8rem] md:h-[3.8rem] md:rounded-full md:border-solid md:border-2 md:border-gray-600 md:flex md:items-center md:justify-center md:right-[5rem] md:top-[-4.5rem]"
                  >
                    <img
                      src="https://icongr.am/fontawesome/linkedin.svg?size=35&color=F2F2F2"
                      alt="linkedin"
                      className="md:w-[1.6rem] md:mb-1"
                    />
                  </a>
                  <a
                    className="absolute right-2 top-6 bg-[#2E3140] md:w-[3.8rem] md:h-[3.8rem] md:rounded-full md:border-solid md:border-2 md:border-gray-600 md:flex md:items-center md:justify-center md:right-[-2.5rem] md:top-2"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/github.svg?size=35&color=F2F2F2"
                      alt="Github"
                    />
                  </a>
                  <a
                    className="absolute right-[-1rem] top-[6.5rem] bg-[#2E3140] md:w-[3.8rem] md:h-[3.8rem] md:rounded-full md:border-solid md:border-2 md:border-gray-600 md:flex md:items-center md:justify-center md:right-[-5.5rem] md:top-[9.7rem]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/twitter.svg?size=35&color=F2F2F2"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    className="absolute right-2 top-[11.8rem] bg-[#2E3140] md:w-[3.8rem] md:h-[3.8rem] md:rounded-full md:border-solid md:border-2 md:border-gray-600 md:flex md:items-center md:justify-center md:right-[-2.5rem] md:top-[18.5rem]"
                    href="https://www.example.com"
                    target="_blank"
                  >
                    <img
                      src="https://icongr.am/fontawesome/address-book.svg?size=35&color=F2F2F2"
                      alt="Cualquiera"
                      className="md:w-[1.7rem]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-40 mt-14 items-center text-center md:h-full md:mt-0 md:pt-8 md:justify-evenly md:items-start md:text-start md:w-auto">
            <div className="font-['Cormorant']">
              <h1 className="text-5xl md:text-6xl">¡Hola! Soy</h1>
              <h1 className="text-5xl text-[#8EBF45] md:text-8xl">Ramiro Aduviri</h1>
              <h2 className="text-2xl pt-3 font-['Poppins']">Full Stack Developer</h2>
            </div>

            <div className="flex justify-start items-center mt-8">
              <a
                href="#curriculum"
                className="w-[242px] h-[85px] border-solid border-[1px] border-[#3b3d49] rounded-[42px] flex justify-center items-center hover:bg-[#2A2C39] transition-all duration-[0.5s] hover:border-none"
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
  )
}

export default Presentation