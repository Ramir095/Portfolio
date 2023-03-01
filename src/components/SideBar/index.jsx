import { useState } from "react";
import dev from "../../assets/dev.png";

const SideBar = ({circle}) => {
 

  return (
    <div className="bg-[#2A2C39] w-full h-16 fixed z-10">

      <div className="flex h-full justify-between items-center px-4 text-[1rem]">

        <img className="w-[2.5rem] h-[2.5rem]" src={dev} alt="logo en construccion" />

        <div className="flex items-center w-[15rem] justify-between">
          <div>
            {circle && (
              <img
                src="https://icongr.am/fontawesome/laptop.svg?size=128&color=9da5ac"
                alt="img de laptop"
                className="w-11"
              />
            )}

            <a href="#home">
              <p>Contacto</p>
            </a>
          </div>
          <div>
            {circle && <img
                src="https://icongr.am/fontawesome/briefcase.svg?size=128&color=9da5ac"
                alt="img de portafolio"
                className="w-8 cursor-pointer"
              />
            }
            <a href="#portafolio">
              <p>Portafolio</p>
            </a>
          </div>

          <div>
           <img
              src="https://icongr.am/fontawesome/file-code-o.svg?size=128&color=9da5ac"
              alt="img de habilidades"
              className="hidden w-8 cursor-pointer"
            />
            <a href="#habilidades">
              <p>Habilidades</p>
            </a>
          </div>
        </div>
      </div>
        <div className="hidden md:block">
          {new Array(6).fill(0).map((_dot) => (
            <div>
              <div className="w-3 h-3 bg-[#9da5ac] rounded-lg"></div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default SideBar;
