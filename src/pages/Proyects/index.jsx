import Proyect from '../../components/Proyect';
import { proyect } from '../../constants/proyect';

const Proyects = () => {
  return (
    <div className="w-full min-h-screen bg-[#2A2C39] text-white" id='proyects'>
      <div className="text-center flex justify-center h-full">
        <div className="w-[90%] md:space-y-24 2xl:space-y-14 md:my-[6.8rem] 2xl:my-[4.7rem]">
          <h1 className="'text-4xl md:text-6xl font-['Cormorant'] 2xl:mb-[4.8rem]" >Mis proyectos</h1>
         {
          proyect && proyect?.map(p => (
            <Proyect img={p.img} title={p.title} description={p.description} buttons={p.buttons} left={p.left} background={p.background} />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Proyects