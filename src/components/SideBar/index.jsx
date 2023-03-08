import { Link } from "react-scroll"; 
import dev from "../../assets/dev.png";
import git from "../../assets/git.svg";
import init from "../../assets/Inicio.svg";
import skills from "../../assets/skills.svg";
import about from "../../assets/about.svg";
import proyects from "../../assets/proyects.svg";

const SideBar = () => {
  return (
    <div
      className="bg-[#2A2C39] w-full fixed h-16 z-10 flex justify-between items-center px-4 text-[1rem] md:w-[6rem] md:h-screen md:flex md:flex-col md:items-center md:justify-between md:py-6"
    >
          <Link
            to="home" spy={true} smooth={true} offset={-150} duration={500}
          >
            <div className="md:flex md:w-[3.2rem] md:h-14 md:overflow-hidden md:cursor-pointer md:hover:w-36 md:duration-300 md:transition-all md:hover:bg-[#2A2C39] md:hover:rounded-xl md:hover:ml-[5.7rem]">
              <img
                src={dev}
                alt="logotico de mi pagina"
                className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-14"
              />
              <p className=" hidden hover:text-[#8EBF45] md:flex md:items-center md:ml-4 md:text-lg">
                Inicio
              </p>
            </div>
          </Link>

        <div className="flex items-center w-[15rem] justify-between md:flex-col md:space-y-3">

          <Link
            to="about" spy={true} smooth={true} offset={50} duration={500}
          >
            <div className="md:flex md:w-[2.1rem] md:h-[2.1rem] md:overflow-hidden md:cursor-pointer md:hover:w-44 md:duration-300 md:transition-all md:hover:bg-[#2A2C39] md:hover:rounded-xl md:hover:ml-[8.9rem]">
              <img
                src={about}
                alt="img de habilidades"
                className="hidden md:block cursor-pointer"
              />
              <p className="hover:text-[#8EBF45] md:flex md:items-center md:ml-9 md:text-lg">
                Datos
              </p>
            </div>
          </Link>

          <Link
            to="skills" spy={true} smooth={true} offset={0} duration={500}
          >
            <div className="md:flex md:w-7 md:h-7 md:overflow-hidden md:hover:w-44 md:duration-300 md:transition-all md:hover:bg-[#2A2C39] md:hover:rounded-xl md:hover:ml-[9.2rem]">
              <img
                src={skills}
                alt="img de portafolio"
                className="hidden md:block cursor-pointer"
              />

              <p className="hover:text-[#8EBF45] md:flex md:items-center md:ml-5 md:text-lg">
                Habilidades
              </p>
            </div>
          </Link>

          <Link
            to="proyects" spy={true} smooth={true} offset={50} duration={500}
          >
            <div className="md:flex md:w-8 md:h-8 md:overflow-hidden md:cursor-pointer md:hover:w-44 md:duration-300 md:transition-all md:hover:bg-[#2A2C39] md:hover:rounded-xl md:hover:ml-[9rem]">
              <img
                src={proyects}
                alt="img de habilidades"
                className="hidden md:block cursor-pointer"
              />
              <p className="hover:text-[#8EBF45] md:flex md:items-center md:ml-6 md:text-lg">
                Proyectos
              </p>
            </div>
          </Link>
        </div>
    </div>  
  );
};

export default SideBar;

        {/* <img
          className="md:hidden w-[2.5rem] h-[2.5rem]"
          src={dev}
          alt="logo en construccion"
        /> */}

{/* <div className="hidden md:flex flex-col justify-end space-y-3 w-full items-center absolute bottom-8">
  {new Array(6).fill(0).map((_dot) => (
    <div className="border-4 border-[#9da5ac00] rounded-xl hover:border-[#9da5ac] cursor-pointer transition-all duration-100  hover:bg-[#9da5ac]">
      <div className="w-3 h-3 bg-[#9da5ac] rounded-lg"></div>
    </div>
  ))}
</div> */}