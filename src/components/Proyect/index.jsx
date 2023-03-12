import weatherApp from '../../assets/ProyectWeather.png';

const Proyect = () => {
  return (
    <div className="md:h-[25rem] md:flex bg-[#2A2C39]">
        <img src={weatherApp} alt="" className="md:w-1/2"/>
        <div className='w-full md:flex md:flex-col md:justify-center md:items-center'>
            <span className="md:w-1/2 md:text-4xl font-['Cormorant']">Proyecto del clima</span>
            <p>Mira el repositorio</p>
            <p>Mira el deploy</p>
        </div>
    </div>
  )
}

export default Proyect