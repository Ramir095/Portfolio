import { CardSkills } from "../CardSkills";
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="w-full md:h-screen my-10 space-y-10 md:my-0 bg-[#2E3140] text-white flex justify-center items-center font-['Cormorant'] flex-col md:space-y-24 2xl:space-y-16" id="skills">
     <h1 className="text-4xl md:text-6xl" >Mis Habilidades</h1>
     <div className="flex space-y-5 md:space-y-0 flex-col md:flex-row md:justify-between w-[90%] flex-wrap">
       {
        skills && skills.map((s, i) => (
          <CardSkills key={i} data={s} />
        ))
       }
     </div>
    </div>
  );
};

export default Skills;
