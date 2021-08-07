import Image from "next/image";
import { Popover } from "../Popover";
import { WalletCard } from "./components/WalletCard";

import { NewWalletButton, Container, WalletButton } from "./styles";

export const TopMenu = () => {
  return (
    <Container>
      <WalletCard>
        <WalletButton type="button">
          <Image
            src="/images/Component-3.svg"
            alt="Total da carteira"
            width="25"
            height="25"
          />
        </WalletButton>
      </WalletCard>

      <Popover message="Nova alocação">
        <NewWalletButton type="button">
          <Image
            src="/images/PlusCircle.svg"
            alt="Adicionar Carteira"
            width="25"
            height="25"
          />
        </NewWalletButton>
      </Popover>
    </Container>
  );
};
