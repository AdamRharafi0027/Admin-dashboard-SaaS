import ProductsStats from "./ProductsStats";
import InnerContainer from "../../InnerContainer";
import Container from "../../Container";
import ProductsTable from "./ProductsTable";
import ProductsCharts from "./ProductsCharts/ProductsCharts";


const ProductsBody = () => {
  return (
    <>
      <Container>
        <ProductsStats />
        <InnerContainer>
         <ProductsTable/>
         <ProductsCharts />
        </InnerContainer>
      </Container>
    </>
  );
};

export default ProductsBody;
