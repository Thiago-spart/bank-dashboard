import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

import navMenu from "./menu.json";

import { ExpandButton, NavBar, NavLink, NavStyles } from "./styles";

interface NavMenuProps {
  linkName: string;
  path: string;
  iconPath: string;
  isActive: boolean;
  isSelected?: boolean;
}

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
      <NavStyles>
        <ExpandButton type="button">
          <RiArrowRightSLine />
        </ExpandButton>
      </NavStyles>
    </NavBar>
  );
};
