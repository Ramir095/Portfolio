export const Button = ({ cn, url, text }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className='space-y-2 md:text-[#858792] md:hover:text-[#ffff] flex flex-col items-center'>
      <div className="w-20 h-20 rounded-full bg-[#2A2C39] animation-pulse flex justify-center items-center hover:transition-all hover:duration-[0.5s] transition-all duration-[0.5s]">
        <i className={cn}></i>
      </div>
      <p className='hover:transition-all hover:duration-[0.5s] transition-all duration-[0.5s]'>{text}</p>
    </a>
  );
};
