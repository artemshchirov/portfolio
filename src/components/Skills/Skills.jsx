import './Skills.scss';

const Skill = ({ children }) => {
  return (
    <li className="skills__list-item button button_type_plain">{children}</li>
  );
};

const Skills = ({ items }) => {
  return (
    <ul className="skills__list">
      {items.map((item) => (
        <Skill key={item}>{item}</Skill>
      ))}
    </ul>
  );
};

export default Skills;
