import { Button } from "../Button";

const Proyect = ({ img, title, description, buttons, left, background }) => {
  return (
    <>
      {
        <div className={`md:h-[25rem] md:w-full md:flex bg-[#2E3140] ${!left ? 'md:flex-row-reverse' : '' }`}>
          <figure className="md:w-1/2 flex items-center justify-center relative overflow-hidden z-10">
            <div className='bg-[#252734f2] w-full h-full absolute' />
            <div className='-z-10 absolute'>
              <img className='w-[70%] -rotate-45' src={background} alt='Fondo de pantalla' />
            </div>
            <img src={img} alt={`Imagen del proyecto ${title}`} className='md:w-[80%] md:h-[70%] z-10' />
          </figure>
          <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center space-y-5 md:px-10">
            <span className="md:text-4xl font-['Cormorant']">
              {title}
            </span>
            <p>{description}</p>
            <div className="flex space-x-10 justify-center items-center">
              {buttons &&
                buttons.map((b) => (
                  <Button cn={b.cn} url={b.url} text={b.text} />
                ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Proyect;
