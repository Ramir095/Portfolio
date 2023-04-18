import code from '../../assets/service-icon-2.webp'
import arrowsRigth from '../../assets/arrowsRight.svg'
import Circle from '../Circle'
export const CardSkills = ({ data }) => {
  const { img, title, skill } = data;
  return (
    <div className='w-[22rem] h-[32.2rem] bg-[#2A2C39] relative overflow-hidden'>
      <Circle big={"bottom-[22rem] left-[10.7rem]"} wid={'md:w-[25rem] md:h-[25rem]'} medium={"bottom-[24.2rem] left-[12.9rem]"} small={'bottom-[27rem] left-[15.8rem]'} />
      <Circle big={"top-[22rem] left-[10.7rem]"} wid={'md:w-[25rem] md:h-[25rem]'} medium={"top-[24.2rem] left-[12.9rem]"} small={'top-[27rem] left-[15.8rem]'} />
      <header className='flex w-full h-full justify-center items-center'>
        <div className=' space-y-8'>
          <img className='w-14' src={img} alt='Imagen de la las etiquetas' />
          <h1 className='text-3xl'>{title}</h1>
          <div className='space-y-2'>
            {
              skill && skill.map((s, i) => (
                <section className='flex items-center space-x-2' key={i}>
                  <div className='w-3'>
                    <img src={arrowsRigth} alt='Flechas en dirección a la derecha' />
                  </div>
                  <p className='text-[1rem]'>{s}</p>
                </section>
              ))
            }
          </div>
        </div>
      </header>
    </div>
  )
}
