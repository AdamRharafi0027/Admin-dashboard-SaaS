import Container from '../../Container'
import OrdersManagStats from './OrdersManagStats'
import InnerContainer from '../../InnerContainer'
import SearchOrders from './SearchOrders'
import OrdersManagTable from './OrdersManagTable'
import OrdersMnageCharts from './OrdersManagCharts/OrdersMnageCharts'

const OrdersManagBody = () => {
  return (
    <>
        <Container>
            <OrdersManagStats />
            <InnerContainer>
                <SearchOrders />
                <OrdersManagTable />
                <OrdersMnageCharts />
            </InnerContainer>
        </Container>
    </>
  )
}

export default OrdersManagBody