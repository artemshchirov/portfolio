import './Title.scss';

const Title = ({ Tag = 'h2', className, children }) => {
  let finalClassName = 'title';
  if (className) finalClassName += ` ${className}`;

  return <Tag className={finalClassName}>{children}</Tag>;
};

export default Title;
