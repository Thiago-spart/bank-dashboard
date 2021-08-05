import Image from "next/image";
import { AccountSection } from "./components/AccountSection";
import { UserSection } from "./components/UserSection";

import { Container, ContainerContent, Logo } from "./styles";

export const Header = () => {
  return (
    <Container>
      <ContainerContent>
        <Logo>
          <Image
            src="/images/logo.svg"
            alt="Dualbank logo"
            width="130"
            height="21"
          />
        </Logo>
        <AccountSection />
        <UserSection />
      </ContainerContent>
    </Container>
  );
};
