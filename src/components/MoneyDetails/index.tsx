import { formatValues } from "../../utils/formatValues";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Amount, Container, Title } from "./styles";
import { useState } from "react";

interface MoneyDetailsProps {
  titleSize: string;
  amountSize: string;
  title: string;
  amount: string;
}

export const MoneyDetails = ({
  titleSize,
  amountSize,
  title,
  amount,
}: MoneyDetailsProps) => {
  const [viewMoney, setViewMoney] = useState(false);

  function toggleViewMoney() {
    setViewMoney(!viewMoney);
  }

  return (
    <Container onClick={toggleViewMoney}>
      <Title TitleSize={titleSize}>
        {title}
        {viewMoney ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </Title>
      <Amount AmountSize={amountSize}>
        {viewMoney ? "Saldo" : formatValues(Number(amount))}
      </Amount>
    </Container>
  );
};
