import React from "react";
import ContentSide from "../ContentSide";
import Header from "../Header";
import OrdersManagBody from "./OrdersManagBody/OrdersManagBody";

const OrdersManagment = () => {
  return (
    <>
      <ContentSide>
        <Header>Orders Management</Header>
        <OrdersManagBody />
      </ContentSide>
    </>
  );
};

export default OrdersManagment;
