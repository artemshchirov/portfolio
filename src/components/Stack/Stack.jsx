import './Stack.css';
import StackItem from '../StackItem/StackItem';

function Stack({ items }) {
  return (
    <ul className="project__stack">
      {items.map((item) => (
        <StackItem key={item}>{item}</StackItem>
      ))}
    </ul>
  );
}

export default Stack;
