import Container from "../../Container";
import InnerContainer from "../../InnerContainer";
import BestCostomers from "./BestCostomers";
import OrdersTable from "./OrdersTable";
import StatsOverview from "./StatsOverview";
import SummarySales from "./SummarySales";
import VisitsStats from "./VisitsStats";

const OverviewBody = () => {
  return (
    <>
      <Container >
        <StatsOverview />
        <InnerContainer>
          <SummarySales />
          <OrdersTable />
          <div className="flex justify-around items-center flex-wrap">
            <VisitsStats />
            <BestCostomers />
          </div>
        </InnerContainer>
      </Container>
    </>
  );
};

export default OverviewBody;
