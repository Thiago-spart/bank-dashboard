import Image from "next/image";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { formatValues } from "../../../../utils/formatValues";

import { Container } from "./styles";

export const AmountField = () => {
  const [visibility, setVisibility] = useState(true);

  function handleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <Container onClick={handleVisibility} visibility={visibility.toString()}>
      <Image src="/images/shield.svg" alt="Seguro" width={24} height={24} />

      <div>
        <h4>Saldo disponível</h4>
        <p>{formatValues(40000)}</p>
      </div>

      {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </Container>
  );
};
