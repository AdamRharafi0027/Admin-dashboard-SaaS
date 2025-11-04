import ContentSide from "../ContentSide";
import HeaderOverview from "../HeaderOverview";
import OverviewBody from "./OverviewBody/OverviewBody";

const Overview = () => {
  return (
    <>
      <ContentSide>
        <HeaderOverview>Overview</HeaderOverview>
        <OverviewBody />
      </ContentSide>
    </>
  );
};

export default Overview;
