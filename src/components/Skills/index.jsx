import { CardSkills } from "../CardSkills";
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="w-full 2xl:h-screen my-10 md:my-16 space-y-10 md:space-y-16 2xl:my-0 bg-[#2E3140] text-white flex justify-center items-center font-['Cormorant'] flex-col xl:space-y-16 2xl:space-y-16" id="skills">
     <h1 className="text-4xl md:text-6xl">Mis Habilidades</h1>
     <div className="flex space-y-5 lg:space-y-0 flex-col md:items-center lg:flex-row lg:justify-between w-[90%] flex-wrap">
       {
        skills && skills.map((s, i) => (
          <CardSkills key={i} data={s} />
        ))
       }
     </div>
    </div>
  );
};
// lg:right-[-2.9rem] lg:top-[0.9rem]
export default Skills;
