import { Button } from "../Button";

const Proyect = ({ img, title, description, buttons, left, background, imgPhone }) => {
  return (
    <>
      {
        <div className={`lg:h-[25rem] pb-5 lg:pb-0 space-y-5 lg:space-y-0 w-full lg:flex bg-[#2E3140] ${!left ? 'lg:flex-row-reverse' : '' }`}>
          <figure className="lg:w-1/2 flex items-center justify-center relative overflow-hidden z-10">
            <div className='bg-[#252734f2] w-full h-full absolute' />
            <div className='-z-10 absolute'>
              <img className='w-[70%] -rotate-45' src={background} alt='Fondo de pantalla' />
            </div>
            <img src={imgPhone} alt={`Imagen del proyecto ${title}`} className='lg:hidden z-10 h-[12rem]' />
            <img src={img} alt={`Imagen del proyecto ${title}`} className='hidden lg:block lg:w-[80%] lg:h-[70%] z-10' />
          </figure>
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center space-y-5 lg:px-10">
            <span className="text-3xl lg:text-4xl font-['Cormorant']">
              {title}
            </span>
            <p className="w-[95%] m-auto lg:w-full">{description}</p>
            <div className="flex space-x-10 justify-center items-center">
              {buttons &&
                buttons.map((b, i) => (
                  <Button key={i} cn={b.cn} url={b.url} text={b.text} />
                ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Proyect;
