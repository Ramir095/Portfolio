import { CardSkills } from "../CardSkills";
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#2E3140] text-white flex justify-center items-center font-['Cormorant'] flex-col" id="skills">
     <h1 className="md:text-6xl" >Mis Habilidades</h1>
     <div>
       {
        skills && skills.map((s, i) => (
          <CardSkills key={i} data={s} />
        ))
       }
     </div>
     <h2></h2>
    </div>
  );
};

export default Skills;
