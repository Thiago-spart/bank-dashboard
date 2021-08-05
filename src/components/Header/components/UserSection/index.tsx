import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";

import { Container, IconButton, ImageContainer, SearchButton } from "./styles";

export const UserSection = () => {
  return (
    <Container>
      <SearchButton placeholder="Pesquisar"></SearchButton>
      <RiSearchLine />
      <IconButton>
        <Image src="/images/ChatText.svg" alt="Chat" width="24" height="24" />
      </IconButton>

      <IconButton>
        <Image
          src="/images/Calendar.svg"
          alt="Calendário"
          width="24"
          height="24"
        />
      </IconButton>

      <IconButton>
        <Image
          src="/images/Bell.svg"
          alt="Notificações"
          width="24"
          height="24"
        />
      </IconButton>

      <ImageContainer />
    </Container>
  );
};
