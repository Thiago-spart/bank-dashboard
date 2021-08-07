import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiFileCopyLine } from "react-icons/ri";
import { Popover } from "../../../Popover";

import {
  AccountDetails,
  Button,
  Container,
  CopyDiv,
  DropdownCard,
  AccountTitle,
} from "./styles";

export const AccountSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleIsDropdownOpen() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Container>
      <AccountTitle onClick={handleIsDropdownOpen}>
        Conta Corrente
        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </AccountTitle>
      <DropdownCard isDropdownOpen={isDropdownOpen}>
        <li>
          <h3>Conta Corrente</h3>
          <span>Ag. 00005-1 C.C. 00000000000000000020-1</span>
        </li>
        <li>
          <h3>Conta Corrente</h3>
          <span>Ag. 00005-1 C.C. 00000000000000000020-1</span>
        </li>
        <li>
          <h3>Conta Corrente</h3>
          <span>Ag. 00005-1 C.C. 00000000000000000020-1</span>
        </li>
      </DropdownCard>
      <AccountDetails>
        <Popover withIcon message="Copiar">
          <Button
            onClick={() => {
              navigator.clipboard.writeText("Ag. 00005-1");
            }}
          >
            Ag. 00005-1
          </Button>
        </Popover>

        <Popover withIcon message="Copiar">
          <Button
            onClick={() => {
              navigator.clipboard.writeText("C.C. 00000000000000000020-1");
            }}
          >
            C.C. 00000000000000000020-1
          </Button>
        </Popover>

        <Popover withIcon message="Copiar tudo" messageSize="big">
          <CopyDiv
            onClick={() => {
              navigator.clipboard.writeText(
                "Ag. 00005-1 C.C. 00000000000000000020-1"
              );
            }}
          >
            <RiFileCopyLine />
          </CopyDiv>
        </Popover>
      </AccountDetails>
    </Container>
  );
};
