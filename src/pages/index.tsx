import { HeadTitle } from "../components/HeadTitle";

import { Container } from "../../styles/home";
import { LateralMenu } from "../components/LateralMenu";

export default function Home() {
  return (
    <>
      <HeadTitle title="Home" />

      <Container>
        <LateralMenu />
      </Container>
    </>
  );
}
