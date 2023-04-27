import arrowsRigth from '../../assets/arrowsRight.svg'

export const CardSkills = ({ data }) => {
  const { img, title, skill } = data;
  return (
    <div className='md:w-[25rem] lg:w-[15rem] xl:w-[20rem] 2xl:w-[22rem] h-[32.2rem] bg-[#2A2C39] relative overflow-hidden cardSkill'>      
      <div className="circles">
        <span className={`hidden md:block md:absolute md:rounded-full md:border-solid md:border-2 md:border-r-2 md:border-gray-700 md:w-[25rem] md:h-[25rem] bottom-[22rem] left-[10.7rem]`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 md:w-[25rem] md:h-[25rem] bottom-[24.2rem] left-[12.9rem]`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 w-[20.5rem] h-[20.5rem] bottom-[27rem] left-[15.8rem]`}>
        </span>
      </div>
      <div className="circles">
        <span className={`hidden md:block md:absolute md:rounded-full md:border-solid md:border-2 md:border-r-2 md:border-gray-700 md:w-[25rem] md:h-[25rem] top-[22rem] left-[11rem]`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 md:w-[25rem] md:h-[25rem] top-[24.2rem] left-[13.2rem]`}>
        </span>
        <span className={`hidden md:block absolute rounded-full border-solid border-2 border-r-2 border-gray-700 w-[19.5rem] h-[20.5rem] top-[27rem] left-[15.9rem]`}>
        </span>
      </div>

        <header className='flex w-full h-full justify-center items-center md:items-start md:py-[4.6rem]'>
          <div className='space-y-8'>
            <img className='w-14 h-14' src={img} alt='Imagen de la las etiquetas' />
            <h1 className='text-3xl lg:text-xl xl:text-3xl'>{title}</h1>
            <div className='space-y-2'>
              {
                skill && skill.map((s, i) => (
                  <section className='flex items-center space-x-2' key={i}>
                    <div className='w-3'>
                      <img src={arrowsRigth} alt='Flechas en dirección a la derecha' />
                    </div>
                    <p className='text-[1rem] z-0'>{s}</p>
                  </section>
                ))
              }
            </div>
          </div>
        </header>
    </div>
  )
}
