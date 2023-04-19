import { Button } from "../Button";

const Proyect = ({ img, title, description, buttons }) => {
  return (
    <>
      {
        <div className="md:h-[25rem] md:flex bg-[#2E3140]">
          <img src={img} alt="" className="md:w-1/2" />
          <div className="w-full md:flex md:flex-col md:justify-center md:items-center space-y-5 md:px-10">
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
