import { useState } from "react";

import { LastAmount } from "./components/LastAmount";

import { AiOutlinePrinter } from "react-icons/ai";
import { RiFileDownloadLine } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";

import {
  Bottom,
  Container,
  DropdownContent,
  DropdownContainer,
  TitleDiv,
} from "./styles";
import { AmountField } from "./components/AmountField";
import { DonwloadModal } from "./components/DownloadModal";

export const HomeSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleIsDropdownOpen() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleIsModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <Container>
      <TitleDiv>
        <h2>Saldo Bancário</h2>
        <Bottom type="button">
          <AiOutlinePrinter />
        </Bottom>
        <Bottom type="button" onClick={handleIsModalVisible}>
          <RiFileDownloadLine />
        </Bottom>

        <DropdownContainer>
          <Bottom type="button" onClick={handleIsDropdownOpen}>
            <BiShareAlt />
          </Bottom>

          <DropdownContent isDropdownOpen={isDropdownOpen}>
            <li>
              <p>Enviar por e-mail</p>
            </li>
            <li>
              <p>Enviar por WhatsApp</p>
            </li>
            <li>
              <p>Enviar por opção 3</p>
            </li>
          </DropdownContent>
        </DropdownContainer>
      </TitleDiv>

      <LastAmount />

      <AmountField />

      <DonwloadModal visible={isModalVisible.toString()} />
    </Container>
  );
};
