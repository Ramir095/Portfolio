import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-white w-20 h-screen flex flex-col items-center justify-center">
    <div className="py-5 cursor-pointer" style={{writingMode: "vertical-lr"}}>Home</div>
    <div className="py-5 cursor-pointer" style={{writingMode: "vertical-lr"}}>GitHub</div>
    <div className="py-5 cursor-pointer" style={{writingMode: "vertical-lr"}}>Linkedin</div>
  </div>
  )
}

export default Footer