import { HeadTitle } from "../components/HeadTitle";
import { LateralMenu } from "../components/LateralMenu";
import { TopMenu } from "../components/TopMenu/indes";

import { Container } from "../../styles/home";
import { HomeSection } from "../components/HomeSection";

export default function Home() {
  return (
    <>
      <HeadTitle title="Home" />

      <Container>
        <LateralMenu />

        <div className="divisor">
          <TopMenu />

          <HomeSection />
        </div>
      </Container>
    </>
  );
}
