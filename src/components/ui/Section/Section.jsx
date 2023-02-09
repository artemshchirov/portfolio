import './Section.scss';

function Section({ children, className, id }) {
  let finalClassName = 'section';
  if (className) finalClassName += ` ${className}`;

  return (
    <section className={finalClassName} id={id}>
      {children}
    </section>
  );
}

export default Section;
