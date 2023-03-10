import weatherApp from '../../assets/ProyectWeather.png';
import recipesApp from '../../assets/RecipesApp.png';
import citasApp from '../../assets/CitasApp.png'

const Proyects = () => {
  return (
    <div className="w-full min-h-screen bg-[#2E3140] text-white" id='proyects'>

      <div className="text-center flex justify-center h-full pb-10">

        <div className="w-[90%] space-y-10 md:w-[95%]">

          <div className="md:h-[25rem] md:flex bg-[#2A2C39]">
            <img src={weatherApp} alt="" className="md:w-1/2"/>
            <div className='w-full md:flex md:flex-col md:justify-center md:items-center'>
              <span className="md:w-1/2 md:text-4xl font-['Cormorant']">Proyecto del clima</span>
              <p>Mira el repositorio</p>
              <p>Mira el deploy</p>
            </div>
          </div>

          
          <div className="flex flex-col-reverse md:flex-row md:h-[25rem] bg-[#2A2C39]">
            <div className='md:w-full md:flex md:flex-col md:justify-center md:items-center'>
              <span className="md:w-1/2 md:text-4xl font-['Cormorant']">Proyecto del clima</span>
              <p>Mira el repositorio</p>
              <p>Mira el deploy</p>
            </div>
            <img className="md:w-1/2" src={recipesApp} alt="imagen de mi aplicacion de recetas" />
          </div>

          <div className="md:h-[25rem] md:flex bg-[#2A2C39]">
            <img className='md:w-1/2' src={citasApp} alt="imagen de mi aplicacion de citas" />
            <div className='w-full md:flex md:flex-col md:justify-center md:items-center'>
              <span className="md:w-1/2 md:text-4xl font-['Cormorant']">Proyecto del clima</span>
              <p>Mira el repositorio</p>
              <p>Mira el deploy</p>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Proyects