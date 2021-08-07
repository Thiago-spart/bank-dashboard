import Image from "next/image";
import { MoneyDetails } from "../MoneyDetails";
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

      <Popover messageSize="big" message="Nova alocação">
        <NewWalletButton type="button">
          <Image
            src="/images/PlusCircle.svg"
            alt="Adicionar Carteira"
            width="25"
            height="25"
          />
        </NewWalletButton>
      </Popover>

      <MoneyDetails
        titleSize="14"
        amountSize="14"
        title="principal"
        amount="10000"
        moneyImg
        imgTheme={1}
      />

      <MoneyDetails
        titleSize="14"
        amountSize="14"
        title="aluguel"
        amount="40000"
        moneyImg
        imgTheme={2}
      />

      <MoneyDetails
        titleSize="14"
        amountSize="14"
        title="alimentação"
        amount="40000"
        moneyImg
        imgTheme={3}
      />
    </Container>
  );
};
