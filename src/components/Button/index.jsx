export const Button = ({ cn, url, text }) => {
  return (
    <a href={url} className='w-20 h-20 rounded-full bg-[#2A2C39] animation-pulse space-y-2 text-[#858792] hover:text-[#ffff]'>
      <div className="w-full h-full flex justify-center items-center hover:transition-all hover:duration-[0.5s] transition-all duration-[0.5s]">
        <i className={cn}></i>
      </div>
      <p className='hover:transition-all hover:duration-[0.5s] transition-all duration-[0.5s] ml-[-0.3rem]'>{text}</p>
    </a>
  );
};
