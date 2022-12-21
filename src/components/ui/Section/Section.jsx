import './Section.scss';

const Section = ({ children, className }) => {
  let finalClassName = 'section';
  if (className) finalClassName += ` ${className}`;

  return <section className={finalClassName}>{children}</section>;
};

export default Section;
