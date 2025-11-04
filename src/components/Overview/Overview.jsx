import ContentSide from "../ContentSide";
import Header from "../Header";
import OverviewBody from "./OverviewBody/OverviewBody";

const Overview = () => {
  return (
    <>
      <ContentSide>
        <Header>Overview</Header>
        <OverviewBody />
      </ContentSide>
    </>
  );
};

export default Overview;
