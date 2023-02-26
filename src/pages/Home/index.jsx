import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Portfolio from "../../components/Portfolio";
import perfil from "../../assets/perfil.png";

const Home = () => {
  return (
    <div className="flex bg-[#2E3140] text-[#F2F2F2]">
      <Header />

      <div className="w-full h-screen">
        <div className=" h-full w-full flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-1 w-[70%] pl-36">
            <div className="text-start  col-span-2 ">
              <h1 className="text-6xl">¡Hola! Soy</h1>
              <h1 className="text-8xl">Ramiro Aduviri</h1>
              <h2 className="text-4xl">Full Stack Developer</h2>
            </div>
            <img
              src={perfil}
              alt="perfil"
              className=" w-[428px] order-last mt-[-50px] ml-8"
            />
            <div className="flex justify-start items-center">
              <a
                href="#curriculum"
                className="w-[242px] h-[85px] border-solid border-[1px] border-[#3b3d49] rounded-[42px] flex justify-center items-center hover:bg-[#2E303D] transition-all duration-[0.5s]"
              >
                <p>Ver Curriculum</p>
                <img
                  src="https://icongr.am/fontawesome/download.svg?size=128&color=F2F2F2"
                  alt="download curriculum"
                  className="w-4 h-4 ml-3"
                />
              </a>
            </div>
          </div>
        </div>
        <Skills />
        <Portfolio />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
