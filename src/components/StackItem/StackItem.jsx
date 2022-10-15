import './StackItem.css';

const StackItem = ({ children }) => {
  return <li className="project__stack-item">{children}</li>;
};

export default StackItem;
