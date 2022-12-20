function StackItem({ children }) {
  return <li className="project__stack-item">{children}</li>;
}

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
