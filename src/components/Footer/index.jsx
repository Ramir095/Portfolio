import React from "react";

const Footer = () => {
  return (
    <div className=" hidden w-20 h-screen lg:flex flex-col items-center justify-center sticky right-0 bg-[#2A2C39] top-0">
      <div className="z-[100] text-[#9da5ac]">
        <a
          href="mailto:contacto@rama-dev.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Enviar un correo electrónico a Ramiro'>
          <div
            className="py-5 cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 rounded-xl"
            style={{ writingMode: "vertical-lr" }}
          >
            Contacto
          </div>
        </a>

        <a
          href="https://github.com/Ramir095"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="py-5 cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 rounded-xl"
            style={{ writingMode: "vertical-lr" }}
          >
            GitHub
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ramiro-aduviri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="py-5 cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 rounded-xl"
            style={{ writingMode: "vertical-lr" }}
          >
            Linkedin
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
