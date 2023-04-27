const Circle = ({ big, medium, small }) => {
  return (
    <div>
        <span className={`hidden lg:block lg:absolute lg:rounded-full lg:border-solid lg:border-2 lg:border-r-2 lg:border-gray-700 lg:w-[35.5rem] lg:h-[35.5rem] ${big}`}>
        </span>
        <span className={`hidden lg:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 w-[25.5rem] h-[25.5rem] ${medium}`}>
        </span>
        <span className={`hidden lg:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 w-[20.5rem] h-[20.5rem] ${small}`}>
        </span>
    </div>
  )
}

export default Circle