import { useState } from "react";
import { GrClose, GrPause, GrPlay } from "react-icons/gr";
import { LoadingDiv } from "../LastAmount/styles";

import { Container, Button } from "./styles";

interface DownloadModalProps {
  visible: string;
}

export const DonwloadModal = ({ visible }: DownloadModalProps) => {
  const [playDownload, setPlayDownload] = useState(true);

  function handlePlayDownload() {
    setPlayDownload(!playDownload);
  }
  return (
    <Container visible={visible}>
      <span>
        Baixando <LoadingDiv /> 201kb
      </span>
      <span> Saldo %NomeDadoParaAConta% %DataDaConsulta%.pdf</span>
      <Button onClick={handlePlayDownload}>
        {playDownload ? <GrPause /> : <GrPlay />}
      </Button>
      <Button>
        <GrClose />
      </Button>
    </Container>
  );
};
