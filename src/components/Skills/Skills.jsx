import Skill from '../Skill/Skill';

const Skills = ({ items }) => {
  return (
    <ul className="skills__list">
      {items.map((item) => (
        <Skill>{item}</Skill>
      ))}
    </ul>
  );
};

export default Skills;
