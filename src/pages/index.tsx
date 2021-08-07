import { HeadTitle } from "../components/HeadTitle";
import { LateralMenu } from "../components/LateralMenu";
import { TopMenu } from "../components/TopMenu/indes";

import { Container } from "../../styles/home";

export default function Home() {
  return (
    <>
      <HeadTitle title="Home" />

      <Container>
        <LateralMenu />
        <TopMenu />
      </Container>
    </>
  );
}
