import { ReactNode } from "react";
import { formatValues } from "../../../../utils/formatValues";

import { Card } from "./styles";

interface WalletCard {
  children: ReactNode;
}

export const WalletCard = ({ children }: WalletCard) => {
  return (
    <Card>
      {children}
      <section>
        <div>
          <h4>Disponibilizado</h4>
          <p>
            <span>{formatValues(20000)}</span> do seu saldo
          </p>
        </div>

        <div>
          <h4>Distribuído</h4>
          <p>
            <span>{formatValues(12050)}</span> (60,25%)
          </p>
        </div>

        <button type="button">alterar</button>
      </section>
    </Card>
  );
};
