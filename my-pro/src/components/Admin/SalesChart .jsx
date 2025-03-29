import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const [salesData, setSalesData] = useState(Array(12).fill(0)); // Initialize with 12 months of 0 sales

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/orders");
        const orders = await response.json();

        // Process orders to calculate monthly sales
        const monthlySales = Array(12).fill(0);

        orders.forEach((order) => {
          const date = new Date(order.date); // Assuming `order.date` is a valid date string
          const month = date.getMonth(); // Get month (0-11)
          monthlySales[month] += order.totalAmount; // Assuming `order.totalAmount` holds the sales value
        });

        setSalesData(monthlySales);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

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
      data: salesData,
    },
  ];

  return <Chart options={chartOptions} series={chartSeries} type="line" height={300} />;
};

export default SalesChart;
