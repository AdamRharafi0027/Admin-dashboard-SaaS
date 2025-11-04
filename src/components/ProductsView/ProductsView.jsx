import React from "react";
import ContentSide from "../ContentSide";
import HeaderOverview from "../HeaderOverview";
import ProductsBody from "./ProductsBody/ProductsBody";

const ProductsView = () => {
  return (
    <>
      <ContentSide>
        <HeaderOverview>Products State</HeaderOverview>
        <ProductsBody />
      </ContentSide>
    </>
  );
};

export default ProductsView;
