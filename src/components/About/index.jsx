import { ButtonCopied } from "../ButtonCopied";
import leftAbout from '../../assets/leftAbout.webp'

const About = () => {
  return (
    <div
      className="w-full min-h-[90vh] md:h-[65vh] lg:h-[100vh] xl:h-[90vh] bg-[#2A2C39] text-white flex justify-center items-center overflow-hidden"
      id="about"
    >
      <div className="flex flex-col w-[90%] space-y-0 md:space-y-3 lg:space-y-0 xl:space-y-5 2xl:space-y-8">
        <h1 className="font-['Cormorant'] text-4xl md:text-6xl md:mb-4 flex justify-center">Sobre Mi</h1>

        <div className="flex h-[90%]">
          <div className="hidden xl:flex md:w-[49%] 2xl:w-[45%] justify-center items-center">
            <figure className='w-[27rem]'>
              <img src={leftAbout} alt='Imagen recreativa de mi trabajando' />
            </figure>
          </div>

          <div className=" md:h-[50%] md:w-full xl:w-[51%] 2xl:w-[55%] flex justify-center">

            <div className="space-y-7 lg:space-y-3 xl:space-y-5 2xl:space-y-5 md:px-0 md:mt-5">

              <h1 className="hidden md:block text-2xl md:text-4xl font-['Cormorant']">Ramiro Aduviri</h1>

              <div className="space-y-2 w-[95%] md:w-full m-auto md:m-0">             
                <div className="flex items-center md:justify-center">
                  <img
                    src="https://icongr.am/fontawesome/map-marker.svg?size=128&color=F2F2F2"
                    alt="location"
                    className="w-8 h-8"
                  />
                  <span>Buenos Aires, Argentina</span>
                </div>

                <div className="flex items-center md:justify-center">
                  <img
                    src="https://icongr.am/fontawesome/envelope.svg?size=128&color=F2F2F2"
                    alt="envelope"
                    className="w-8 h-7 mr-1.5"
                  />
                  <a href="mailto:contacto@rama-dev.com">contacto@rama-dev.com</a>
                  <ButtonCopied />
                </div>

                <div className="flex items-center md:justify-center space-x-2 md:space-x-3">
                  <figure className="text-3xl">
                    <i className='fa-solid fa-graduation-cap'></i>
                  </figure>
                  <span>Full Stack Developer. Henry Bootcamp. 700 horas de cursado teórico-práctico.</span>
                </div>
              </div>


              <ul className="space-y-7 lg:space-y-4 xl:space-y-6 2xl:space-y-7 p-2">
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
