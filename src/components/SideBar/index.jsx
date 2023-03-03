import dev from "../../assets/dev.png";

const SideBar = () => {
  return (
    <div className="bg-[#2A2C39] w-full fixed h-16 z-10 
    md:w-[6rem] md:h-screen md:flex md:flex-col md:items-center md:justify-between ">

      <div className="flex h-full justify-between items-center px-4 text-[1rem] md:space-y-6 md:h-full md:absolute">

        <img className="md:hidden w-[2.5rem] h-[2.5rem]" src={dev} alt="logo en construccion" />
        {/* md:bg-slate-300 md:w-14 md:h-14 md:overflow-hidden md:cursor-pointer md:hover:w-28 md:hover:ml-14 md:duration-300 md:flex-col */}
        <div className="flex items-center w-[17rem] justify-between md:flex-col md:space-y-4 ">
          
          <div className="md:flex md:w-11 md:h-11 md:overflow-hidden md:cursor-pointer md:hover:w-36  md:hover:ml-[6.3rem] md:duration-300 md:transition-all md:absolute md:hover:bg-[#2A2C39] md:top-[1.5rem]">
              <img
                src="https://icongr.am/fontawesome/laptop.svg?size=128&color=9da5ac"
                alt="img de laptop"
                className="hidden md:block"
              />

            <a className="hover:text-[#8EBF45] md:flex md:items-center md:ml-2 md:text-lg" href="#home">
              <p>Contacto</p>
            </a>
          </div>

          <div className="md:flex md:w-8 md:h-8 md:overflow-hidden md:cursor-pointer md:top-[4rem] md:hover:w-36 md:hover:ml-28 md:duration-300 md:transition-all md:absolute md:hover:bg-[#2A2C39] md:hover:rounded-xl">
            <img
                src="https://icongr.am/fontawesome/briefcase.svg?size=128&color=9da5ac"
                alt="img de portafolio"
                className="hidden md:block w-8 cursor-pointer"
            />
            <a className="hover:text-[#8EBF45] md:flex md:items-center md:ml-3 md:text-lg" href="#portafolio">
              <p>Proyectos</p>
            </a>
          </div>

          <div className="md:flex md:w-8 md:h-8 md:overflow-hidden md:cursor-pointer md:top-[7rem] md:hover:w-36 md:hover:ml-28 md:duration-300 md:transition-all md:absolute md:hover:bg-[#2A2C39] md:hover:rounded-xl">
           <img
              src="https://icongr.am/fontawesome/file-code-o.svg?size=128&color=9da5ac"
              alt="img de habilidades"
              className="hidden md:block w-8 cursor-pointer"
            />
            <a className="hover:text-[#8EBF45] md:flex md:items-center md:ml-2 md:text-lg" href="#habilidades">
              <p>Habilidades</p>
            </a>
          </div>
          
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-end space-y-3 w-full items-center absolute bottom-8">
        {new Array(6).fill(0).map((_dot) => (
          
          <div className="border-4 border-[#9da5ac00] rounded-xl hover:border-[#9da5ac] cursor-pointer transition-all duration-100  hover:bg-[#9da5ac]">
            
            <div className="w-3 h-3 bg-[#9da5ac] rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
