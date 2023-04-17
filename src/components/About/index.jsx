const About = () => {
  return (
    <div
      className="w-full h-[90vh] bg-[#2A2C39] text-white flex justify-center items-center"
      id="about"
    >
  
      <div className="flex flex-col w-[95%] h-[70%]">
        <span className="h-[10%] flex items-center text-4xl md:w-full justify-center">
          <h1 className="w-[81%] font-['Cormorant'] md:text-center md:text-6xl">Perfil Profesional</h1>
        </span>

        <div className="flex h-[90%]">
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <p>Lado izquierdo</p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-10">

            <div className="px-4 space-y-7 w-[90%] md:px-0">

              <h1 className="text-2xl md:text-4xl font-['Cormorant']">Kevin Ramiro Aduviri</h1>

              <div >
                
                <div className="flex items-center justify-center">
                  <img
                    src="https://icongr.am/fontawesome/map-marker.svg?size=128&color=F2F2F2"
                    alt="location"
                    className="w-8 h-8"
                  />
                  <span>Buenos Aires, Argentina</span>
                </div>

                <div className="flex items-center justify-center ">
                  <img
                    src="https://icongr.am/fontawesome/envelope.svg?size=128&color=F2F2F2"
                    alt="envelope"
                    className="w-8 h-7 mr-1.5"
                  />
                  <a href="mailto:contacto@rama-dev.com">contacto@rama-dev.com</a>
                  <button
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        "contacto@rama-dev.com"
                      );
                    }}
                    className="w-4 h-4 ml-2"
                  >
                    <img src="https://icongr.am/fontawesome/copy.svg?size=128&color=F2F2F2" />
                  </button>
                </div>
              </div>


              <ul className="space-y-7">
                <li>Apasionado por el frontend, por la creación de experiencias
                visuales atractivas y funcionales para el usuario.</li>
                <li>Enfocado en
                mejorar mis habilidades para ofrecer soluciones más efectivas a
                mis proyectos.</li>
                <li>Si estás buscando a alguien que pueda ayudarte a llevar tus proyectos al siguiente nivel, ¡no dudes en
                contactarme!.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
