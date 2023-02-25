import React from "react";

const Header = () => {
  return (
    <div className="w-32 h-screen flex flex-col items-center justify-between py-10 relative">
      <div className="space-y-6 h-full absolute">
        <div className="flex w-14 h-14 overflow-hidden cursor-pointer hover:w-28 hover:ml-14 duration-100 transition-all">
          <img
            src="https://icongr.am/fontawesome/laptop.svg?size=128&color=9da5ac"
            alt="img de laptop"
            className="w-14"
          />
          <a className="flex items-center p-2 text-[20px]" href="#home">
            <p>Inicio</p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">

          <div className="flex w-8 h-8 overflow-hidden cursor-pointer hover:w-32 hover:ml-24 duration-100 transition-all absolute hover:bg-yellow-100 hover:rounded-xl">
            <img
              src="https://icongr.am/fontawesome/briefcase.svg?size=128&color=9da5ac"
              alt="img de portafolio"
              className="w-8 cursor-pointer"
            />
            <a href="#portafolio">
              <p className="flex ml-2 items-center text-lg">Portafolio</p>
            </a>
          </div>

          <div className="flex w-8 h-8 overflow-hidden cursor-pointer top-[118px] hover:w-36 hover:ml-28 duration-100 transition-all absolute hover:bg-yellow-100 hover:rounded-xl">
            <img
              src="https://icongr.am/fontawesome/file-code-o.svg?size=128&color=9da5ac"
              alt="img de habilidades"
              className="w-8 cursor-pointer"
            />
            <a href="#habilidades">
              <p className="flex ml-2 items-center text-lg">Habilidades</p>
            </a>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-end space-y-3 w-full items-center absolute bottom-8">
        {new Array(6).fill(0).map((_dot) => (
          <div className="border-4 border-[#9da5ac00] rounded-xl hover:border-[#9da5ac] cursor-pointer transition-all duration-100  hover:bg-[#9da5ac]">
            <div className="w-3 h-3 bg-[#9da5ac] rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
