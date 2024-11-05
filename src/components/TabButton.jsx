export default function TabButton({ children, isSelect, ...props }) {
  console.log("btton");
  return (
    <li>
      <button className={isSelect ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
