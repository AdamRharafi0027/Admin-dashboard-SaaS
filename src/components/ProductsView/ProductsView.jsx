import React from "react";
import ContentSide from "../ContentSide";
import Header from "../Header";
import ProductsBody from "./ProductsBody/ProductsBody";

const ProductsView = () => {
  return (
    <>
      <ContentSide>
        <Header>Products State</Header>
        <ProductsBody />
      </ContentSide>
    </>
  );
};

export default ProductsView;
