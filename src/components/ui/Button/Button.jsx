import './Button.scss';

const Button = ({
  type = 'button',
  className,
  onClick = () => {},
  children,
  ...props
}) => {
  let finalClassName = 'button';
  if (className) finalClassName += ` ${className}`;

  return (
    <button type={type} className={finalClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
