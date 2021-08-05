import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiFileCopyLine } from "react-icons/ri";

import {
  AccountAgency,
  AccountDetails,
  CheckingAccount,
  Container,
  CopyDiv,
  DropdownCard,
  AccountTitle,
} from "./styles";

const Accounts = [
  {
    accountType: "Conta Corrente",
    agency: "Ag. 00005-1",
    accountNumber: "C.C. 00000000000000000020-1",
  },
  {
    accountType: "Conta Poupança",
    agency: "Ag. 00005-1",
    accountNumber: "C.C. 01010010001000010000-2",
  },
  {
    accountType: "C.C. Ed. Suzano",
    agency: "Ag. 00005-1",
    accountNumber: "C.C. 000000000000015-1",
  },
  {
    accountType: "C.C. Condomínio Guillermo",
    agency: "Ag. 00005-1",
    accountNumber: "C.C. 00000000000000017-1",
  },
  {
    accountType: "C.C. Residencial Figma Ômega",
    agency: "Ag. 00005-1",
    accountNumber: "C.C. 0000000000000000019-1",
  },
];

export const AccountSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleIsDropdownOpen() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Container>
      <AccountTitle onClick={handleIsDropdownOpen}>
        Conta Corrente
        {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
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
        <AccountAgency
          onClick={() => {
            navigator.clipboard.writeText("Ag. 00005-1");
          }}
        >
          Ag. 00005-1
        </AccountAgency>
        <CheckingAccount
          onClick={() => {
            navigator.clipboard.writeText("C.C. 00000000000000000020-1");
          }}
        >
          C.C. 00000000000000000020-1
        </CheckingAccount>
        <CopyDiv
          onClick={() => {
            navigator.clipboard.writeText(
              "Ag. 00005-1 C.C. 00000000000000000020-1"
            );
          }}
        >
          <RiFileCopyLine />
        </CopyDiv>
      </AccountDetails>
    </Container>
  );
};
