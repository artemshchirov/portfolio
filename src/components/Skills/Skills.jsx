import Skill from '../Skill/Skill';

function Skills({ items }) {
  return (
    <ul className="skills__list">
      {items.map((item) => (
        <Skill key={item}>{item}</Skill>
      ))}
    </ul>
  );
}

export default Skills;
