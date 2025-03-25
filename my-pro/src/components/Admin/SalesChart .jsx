import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartOptions = {
    chart: {
      id: "sales-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    colors: ["#007bff"],
    stroke: {
      curve: "smooth",
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [4500, 5200, 6100, 7000, 8300, 9200, 10800, 11900, 13500, 14200, 15000, 16000],
    },
  ];

  return <Chart options={chartOptions} series={chartSeries} type="line" height={300} />;
};

export default SalesChart;
