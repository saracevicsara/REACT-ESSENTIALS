export default function TabButton({ children, onSelect }) {
  console.log("btton");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
