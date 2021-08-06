import { NavBar, NavLink } from "./styles";

export const LateralMenu = () => {
  return (
    <NavBar>
      <NavLink href="#nome" type="button">
        a
      </NavLink>
      <NavLink href="#nome1" type="button" onSelect={() => alert("poha")}>
        b
      </NavLink>
    </NavBar>
  );
};
