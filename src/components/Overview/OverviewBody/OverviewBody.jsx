import BestCostomers from "./BestCostomers"
import OrdersTable from "./OrdersTable"
import StatsOverview from "./StatsOverview"
import SummarySales from "./SummarySales"
import VisitsStats from "./VisitsStats"


const OverviewBody = () => {
  return (
    <>
        <div className="container bg-[#F2F2F2] rounded-lg py-10 px-10 mt-10 ">
            <StatsOverview />
            <main className="bg-white rounded-lg mt-10 pl-5 pb-10">
              <div className="flex items-center justify-around">
                  <SummarySales />
                <VisitsStats />
              </div>
               <div className="flex items-center justify-between">
                  <OrdersTable />
                <BestCostomers />
              </div>
            </main>
        </div>
    </>
  )
}

export default OverviewBody