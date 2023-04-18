const Circle = ({big, medium, small, wid, hover}) => {
  return (
    <div>
        <span className={`hidden md:block md:absolute md:rounded-full md:border-solid md:border-2 md:border-r-2 ${hover ? hover : 'md:border-gray-700'} ${wid ? wid : 'md:w-[35.5rem] md:h-[35.5rem]'} ${big}`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 ${wid ? wid : 'w-[25.5rem] h-[25.5rem]'} ${medium}`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 w-[20.5rem] h-[20.5rem] ${small}`}>
        </span>
    </div>
  )
}

export default Circle