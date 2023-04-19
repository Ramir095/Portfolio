import { CardSkills } from "../CardSkills";
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#2E3140] text-white flex justify-center items-center font-['Cormorant'] flex-col space-y-20 2xl:space-y-16" id="skills">
     <h1 className="text-4xl md:text-6xl" >Mis Habilidades</h1>
     <div className="flex justify-between w-[90%]">
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
