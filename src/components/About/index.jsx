const About = () => {
  return (
    <div
      className="w-full h-[70vh] bg-[#2A2C39] text-white flex justify-center items-center"
      id="about"
    >
      <div className="text-center md:text-start md:flex">

        <div className=" hidden md:block md:w-1/2 bg-slate-800">
          <p>Lado izquierdo</p>
        </div>

        <div className="md:w-1/2 md:flex justify-center">

          <div className="px-4 space-y-4 md:w-[70%] md:px-0">

            <h1 className="text-3xl md:text-4xl font-['Cormorant']">Perfil Profesional</h1>

            <div>
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

            <ul className="space-y-4">
              <span>Kevin Ramiro Aduviri</span>
              <li>Apasionado por el frontend, por la creación de experiencias
              visuales, atractivas y funcionales para el usuario.</li>
              <li>Enfocado en
              mejorar mis habilidades para ofrecer soluciones más efectivas a
              mis proyectos.</li>
            </ul>
            <p>
              
            </p>
            <p>
              Si estás buscando a alguien que pueda ayudarte a llevar tus proyectos al siguiente nivel, ¡no dudes en
              contactarme!.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
