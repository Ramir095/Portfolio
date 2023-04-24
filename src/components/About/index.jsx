import { ButtonCopied } from "../ButtonCopied";

const About = () => {
  return (
    <div
      className="w-full h-[90vh] bg-[#2A2C39] text-white flex justify-center items-center"
      id="about"
    >
      <div className="flex flex-col w-[90%] space-y-5 md:space-y-10">
        <h1 className="font-['Cormorant'] text-4xl md:text-6xl md:mb-4 flex justify-center">Perfil Profesional</h1>

        <div className="flex h-[90%]">
          <div className="hidden md:flex md:w-[49%] justify-center items-center">
            <p>Lado izquierdo</p>
          </div>

          <div className="md:w-[51%] flex justify-center">

            <div className="space-y-7 md:px-0 md:mt-5">

              <h1 className="hidden md:block text-2xl md:text-4xl font-['Cormorant']">Ramiro Aduviri</h1>

              <div className="space-y-2">             
                <div className="flex items-center justify-center">
                  <img
                    src="https://icongr.am/fontawesome/map-marker.svg?size=128&color=F2F2F2"
                    alt="location"
                    className="w-8 h-8"
                  />
                  <span>Buenos Aires, Argentina</span>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="https://icongr.am/fontawesome/envelope.svg?size=128&color=F2F2F2"
                    alt="envelope"
                    className="w-8 h-7 mr-1.5"
                  />
                  <a href="mailto:contacto@rama-dev.com">contacto@rama-dev.com</a>
                  <ButtonCopied />
                </div>
              </div>


              <ul className="space-y-7">
                <li>Apasionado por el desarrollo de software, en espacial el frontend. Enfocado en la creación de experiencias visualmente atractivas y funcionales para el usuario.</li>
                <li>Enfocado en mejorar mis habilidades para ofrecer soluciones más rapidas y efectivas en
                el menor tiempo posible a los proyectos en los que participo. <span className="text-[#8EBF45] font-bold">Mi objetivo es ser un recurso valioso y confiable para ti y para mi equipo.</span></li>
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
