import React from "react";
import ClientsJoinedBarChart from "./ClientsJoinedBarChart";
import ClientsByCountryPieChart from "./ClientsByCountryPieChart";
import ActiveClientsLineChart from "./ActiveClientsLineChart";
import Container from "../../../Container";

const ClientsCharts = () => {
  return (
    <>
      <Container classname={"flex flex-col gap-10"}>
        <ClientsJoinedBarChart />
        <ClientsByCountryPieChart />
        <ActiveClientsLineChart />
      </Container>
    </>
  );
};

export default ClientsCharts;
