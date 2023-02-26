import React from "react";

const Footer = () => {
  return (
    <div className=" w-20 h-screen flex flex-col items-center justify-center absolute right-0">
      <div className="fixed z-[100] text-[#9da5ac]">
        <div
          className="py-5 cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 rounded-xl"
          style={{ writingMode: "vertical-lr" }}
        >
          Contacto
        </div>
        <a
          href="https://github.com/Ramir095"
          target={"_blank"}
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
          href="https://www.linkedin.com/in/kevin-aduviri-b9b964234/"
          target={"_blank"}
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
