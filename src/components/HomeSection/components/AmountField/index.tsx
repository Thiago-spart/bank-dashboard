import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { formatValues } from "../../../../utils/formatValues";

import { Container } from "./styles";

export const AmountField = () => {
  const [visibility, setVisibility] = useState(true);
  const Message = ["Saldo", "disponível"];

  function handleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <Container onClick={handleVisibility} visibility={visibility.toString()}>
      <div>
        <IoShieldCheckmarkOutline />

        <span>
          <h4>{visibility ? `${Message[0]} ${Message[1]}` : Message[0]}</h4>
          <p>{formatValues(40000)}</p>
        </span>
      </div>

      {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </Container>
  );
};
