import Image from "next/image";

import navMenu from "./menu.json";

import { NavBar, NavLink, NavStyles } from "./styles";

interface NavMenuProps {
  linkName: string;
  path: string;
  iconPath: string;
  isActive: boolean;
  isSelected?: boolean;
}

console.log(navMenu);

export const LateralMenu = () => {
  return (
    <NavBar>
      {navMenu.navMenu.map(
        ({ linkName, path, iconPath, isActive, isSelected }: NavMenuProps) => (
          <NavStyles key={linkName}>
            <NavLink href={path} isActive={isActive} isSelected={isSelected}>
              <Image src={iconPath} alt={linkName} width="24" height="24" />
            </NavLink>
          </NavStyles>
        )
      )}
    </NavBar>
  );
};
