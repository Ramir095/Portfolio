import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className="bg-white w-32 h-screen flex flex-col items-center justify-between py-10">
      <div className="space-y-6 h-full">
        <div>
          <img 
            src="https://icongr.am/fontawesome/laptop.svg?size=128&color=9da5ac" 
            alt="img de laptop"
            className="w-14 cursor-pointer"
          />
          <p>Home</p>
        </div>
        <div className=" flex flex-col items-center space-y-4">
          <img 
            src="https://icongr.am/fontawesome/briefcase.svg?size=128&color=9da5ac"
            alt="img de portafolio"
            className="w-8 cursor-pointer"
          />
          <img 
            src="https://icongr.am/fontawesome/file-code-o.svg?size=128&color=9da5ac"
            alt="img de habilidades"
            className="w-8 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-3 w-full items-center">
        
        {
          new Array(6).fill(0).map(_dot => <div className="border-4 border-[#9da5ac00] rounded-xl hover:border-[#9da5ac] cursor-pointer transition-all duration-100  hover:bg-[#9da5ac]">
          <div className="w-3 h-3 bg-[#9da5ac] rounded-lg"></div>
        </div>)
        }
      </div>
    </div>
  )
}

export default Header