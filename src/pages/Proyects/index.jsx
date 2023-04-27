import Proyect from '../../components/Proyect';
import { proyect } from '../../constants/proyect';

const Proyects = () => {
  return (
    <div className="w-full min-h-screen bg-[#2A2C39] text-white" id='proyects'>
      <div className="text-center flex justify-center h-full">
        <div className="w-[90%] my-10 space-y-10 md:space-y-16 lg:space-y-24 xl:space-y-16 2xl:space-y-14 md:my-16 lg:my-[5rem] xl:my-16 2xl:my-16">
          <h1 className="text-4xl md:text-6xl font-['Cormorant'] 2xl:mb-[4.8rem]" >Mis proyectos</h1>
         {
          proyect && proyect?.map((p, i) => (
            <Proyect key={i} img={p.img} imgPhone={p.imgPhone} title={p.title} description={p.description} buttons={p.buttons} left={p.left} background={p.background} />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Proyects