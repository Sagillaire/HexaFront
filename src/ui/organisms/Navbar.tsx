import { useGlobalContext } from "../providers/GlobalContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <nav>
      <span>Current Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};
