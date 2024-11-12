import { Link } from "react-scroll"; 
import dev from "../../assets/dev.png";
import skills from "../../assets/skills.svg";
import about from "../../assets/about.svg";
import proyects from "../../assets/proyects.svg";

const SideBar = () => {
  return (
    <div
      className="bg-[#2A2C39] w-full  fixed h-16 z-50 flex justify-between items-center px-4 text-[1rem] lg:w-[5rem] lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-6"
    >
          <Link
            to="home" href="#home" spy={true} smooth={true} offset={-150} duration={500}
          >
            <div className="cursor-pointer lg:flex lg:w-[3.2rem] lg:h-14 lg:overflow-hidden lg:hover:w-36 lg:duration-300 lg:transition-all lg:hover:bg-[#2A2C39] lg:hover:rounded-xl lg:hover:ml-[5.7rem]">
              <img
                src={dev}
                alt="logo de mi página"
                className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-14"
              />
              <p className="hidden hover:text-[#8EBF45] lg:flex lg:items-center lg:ml-4 lg:text-lg">
                Inicio
              </p>
            </div>
          </Link>

        <div className="flex items-center w-[15rem] justify-between lg:flex-col lg:space-y-3">

          <Link
            to="about" href="#about" spy={true} smooth={true} offset={-50} duration={500}
          >
            <div className="cursor-pointer lg:flex lg:w-[2.1rem] lg:h-[2.1rem] lg:overflow-hidden lg:cursor-pointer lg:hover:w-44 lg:duration-300 lg:transition-all lg:hover:bg-[#2A2C39] lg:hover:rounded-xl lg:hover:ml-[8.9rem]">
              <img
                src={about}
                alt="img de habilidades"
                className="hidden lg:block cursor-pointer"
              />
              <p className="hover:text-[#8EBF45] lg:flex lg:items-center lg:ml-9 lg:text-lg">
                Datos
              </p>
            </div>
          </Link>

          <Link
            to="skills" href="#skills" spy={true} smooth={true} offset={0} duration={500}
          >
            <div className="cursor-pointer lg:flex lg:w-7 lg:h-7 lg:overflow-hidden lg:hover:w-44 lg:duration-300 lg:transition-all lg:hover:bg-[#2A2C39] lg:hover:rounded-xl lg:hover:ml-[9.2rem]">
              <img
                src={skills}
                alt="img de portafolio"
                className="hidden lg:block cursor-pointer"
              />

              <p className="hover:text-[#8EBF45] lg:flex lg:items-center lg:ml-5 lg:text-lg">
                Habilidades
              </p>
            </div>
          </Link>

          <Link
            to="proyects" href="#proyects" spy={true} smooth={true} offset={50} duration={500}
          >
            <div className="cursor-pointer lg:flex lg:w-8 lg:h-8 lg:overflow-hidden lg:cursor-pointer lg:hover:w-44 lg:duration-300 lg:transition-all lg:hover:bg-[#2A2C39] lg:hover:rounded-xl lg:hover:ml-[9rem]">
              <img
                src={proyects}
                alt="img de habilidades"
                className="hidden lg:block cursor-pointer"
              />
              <p className="hover:text-[#8EBF45] lg:flex lg:items-center lg:ml-6 lg:text-lg">
                Proyectos
              </p>
            </div>
          </Link>
        </div>
    </div>  
  );
};

export default SideBar;