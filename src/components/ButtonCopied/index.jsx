import React, { useState } from 'react';

export const ButtonCopied = () => {
  const [copied, setCopied] = useState(false);
  console.log({copied});

  const handleClick = (id) => {
    console.log({id});
    setCopied(true);
    window.navigator.clipboard.writeText(id);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button 
      onClick={() => handleClick("contacto@rama-dev.com")} 
      aria-label='Copiar correo electronico en papelera'
      className="w-5 h-5 ml-2 relative active:bg-[#8EBF45] active:opacity-80 active:transition-all hover:rounded-md"
      // 
    >
      {
        copied && <p className='font-bold text-[0.8rem] bg-[white] text-[#000000] absolute bottom-7 left-[-1.95rem] 2xl:left-[-1.8rem] p-2 rounded-xl'>¡Copiado!</p>
      }
      <img 
        src="https://icongr.am/fontawesome/copy.svg?size=128&color=F2F2F2"
        alt='copy'
        aria-label='Copiado'
      />
    </button>
  );
};
                    
    