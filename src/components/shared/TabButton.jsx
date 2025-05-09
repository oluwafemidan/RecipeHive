export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li className="wood-5">
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
