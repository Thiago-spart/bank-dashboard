import { formatValues } from "../../utils/formatValues";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import {
  Container,
  Amount,
  DetailContainer,
  Title,
  ImgContainer,
} from "./styles";
import { useState } from "react";

interface MoneyDetailsProps {
  titleSize: string;
  amountSize: string;
  title: string;
  amount: string;
  moneyImg?: boolean;
  imgTheme?: number;
}

export const MoneyDetails = ({
  titleSize,
  amountSize,
  title,
  amount,
  moneyImg,
  imgTheme = 1,
}: MoneyDetailsProps) => {
  const [viewMoney, setViewMoney] = useState(false);

  function toggleViewMoney() {
    setViewMoney(!viewMoney);
  }

  return (
    <Container>
      {moneyImg && <ImgContainer imgTheme={imgTheme}>{title[0]}</ImgContainer>}

      <DetailContainer onClick={toggleViewMoney}>
        <Title TitleSize={titleSize}>
          {title}
          {viewMoney ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </Title>
        <Amount AmountSize={amountSize} visibility={viewMoney.toString()}>
          {formatValues(Number(amount))}
        </Amount>
      </DetailContainer>
    </Container>
  );
};
