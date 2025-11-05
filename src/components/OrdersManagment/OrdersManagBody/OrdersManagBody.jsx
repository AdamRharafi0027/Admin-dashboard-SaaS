import Container from "../../Container";
import OrdersManagStats from "./OrdersManagStats";
import InnerContainer from "../../InnerContainer";
import SearchComponent from "../../SearchComponent";
import OrdersManagTable from "./OrdersManagTable";
import OrdersMnageCharts from "./OrdersManagCharts/OrdersMnageCharts";

const OrdersManagBody = () => {
  return (
    <>
      <Container>
        <OrdersManagStats />
        <InnerContainer>
          <SearchComponent placeholder={"Search by customer name, ID..."} />
          <OrdersManagTable />
          <OrdersMnageCharts />
        </InnerContainer>
      </Container>
    </>
  );
};

export default OrdersManagBody;
