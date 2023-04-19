import Proyect from '../../components/Proyect';
import { proyect } from '../../constants/proyect';

const Proyects = () => {
  return (
    <div className="w-full min-h-screen bg-[#2A2C39] text-white" id='proyects'>
      <div className="text-center flex justify-center h-full">
        <div className="w-[90%] space-y-10 my-20">
         {
          proyect && proyect?.map(p => (
            <Proyect img={p.img} title={p.title} description={p.description} buttons={p.buttons} />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Proyects