import './Button.scss';

function Button({ type = 'button', className, onClick = () => {}, children }) {
  let finalClassName = 'button';
  if (className) finalClassName += ` ${className}`;

  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
