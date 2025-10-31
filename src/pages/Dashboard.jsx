import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Overview from "../components/Overview/Overview";

const Dashboard = () => {
  return (
    <>
      <section className="flex gap-20 ">
        <Overview />
      </section>
    </>
  );
};

export default Dashboard;
