import BestCostomers from "./BestCostomers";
import OrdersTable from "./OrdersTable";
import StatsOverview from "./StatsOverview";
import SummarySales from "./SummarySales";
import VisitsStats from "./VisitsStats";

const OverviewBody = () => {
  return (
    <>
      <div className="container bg-[#F2F2F2] rounded-lg py-10 px-10 mt-10 ">
        <StatsOverview />
        <main className="bg-white rounded-lg mt-10 p-10 flex flex-col gap-20">
          <SummarySales />
          <OrdersTable />
          <div className="flex justify-around items-center flex-wrap">
            <VisitsStats />
            <BestCostomers />
          </div>
        </main>
      </div>
    </>
  );
};

export default OverviewBody;
