import { useState } from "react";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";

import { Container, DataInput, LoadingDiv } from "./styles";

export const LastAmount = () => {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(!loading);
  }

  return (
    <Container>
      <DataInput>
        <label>Data do Saldo</label>
        <select>
          <option value="12-07-2020">07/12/2020</option>
          <option value="05-13-2019">13/05/2019</option>
          <option value="05-05-2019">05/05/2019</option>
          <option value="04-01-2019">01/04/2019</option>
        </select>
        <IoIosArrowDown />
      </DataInput>

      <span>
        Saldo atualizado às 16:48
        {loading ? (
          <LoadingDiv onClick={handleLoading} />
        ) : (
          <Image
            onClick={handleLoading}
            src="/images/ArrowClockwise.svg"
            alt="Refrescar saldo"
            width={24}
            height={24}
          />
        )}
      </span>
    </Container>
  );
};
