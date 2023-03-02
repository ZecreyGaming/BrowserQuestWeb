import Game from "components/game";
import Layout from "components/layout";
import CenterContainer from "components/layout/center-container";
import ResultModal from "components/result-modal";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <CenterContainer headerImg="/static/image/page-banner.webp">
        <Game />
        <ResultModal />
      </CenterContainer>
    </Layout>
  );
};

export default Home;
