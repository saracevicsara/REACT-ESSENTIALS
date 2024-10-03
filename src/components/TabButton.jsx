export default function TabButton({ children, onSelect, isSelect }) {
  console.log("btton");
  return (
    <li>
      <button className={isSelect ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
