import React from "react";

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#2E3140] text-white flex justify-center items-center">
      <div className="text-center">
        <h1>Breve presentación de mi persona y presentación mis habilidades</h1>

        <div className="flex items-center justify-center bg-red-900">
          <img 
            src="https://icongr.am/fontawesome/map-marker.svg?size=128&color=F2F2F2" alt="location"
            className="w-8 h-8" />
          <span>Buenos Aires, Argentina</span>
        </div>

        <div className="flex items-center justify-center ">
          <img src="https://icongr.am/fontawesome/envelope.svg?size=128&color=F2F2F2" alt="envelope" className="w-8 h-7 mr-1.5"/>
          <a href="mailto:contacto@rama-dev.com" >contacto@rama-dev.com</a>
          <button onClick={() => {window.navigator.clipboard.writeText("contacto@rama-dev.com")}} className="w-4 h-4 ml-2">
            <img src="https://icongr.am/fontawesome/copy.svg?size=128&color=F2F2F2" />
          </button>
        </div>

        <h1>Perfil Profesional</h1>
      </div>
    </div>
  );
};

export default Skills;
