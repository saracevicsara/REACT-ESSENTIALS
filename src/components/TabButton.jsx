export default function TabButton({ children }) {
  function handleClick() {
    console.log("hello Wordld");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
