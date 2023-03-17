import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Chart() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const categoryNames = categories.map((category) => category.name);
  const categoryValues = categories.map((category) => category.value);

  const chartData = {
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categoryNames,
      },
      yaxis: {
        title: {
          text: "총 권수",
        },
      },
      title: {
        text: "카테고리",
        align: "center",
      },
      colors: ['#FF5733', '#C70039', '#900C3F', '#581845']
    },
    series: [
      {
        data: categoryValues,
      },
    ],
  };

  return (
    <div id="chart">
      {categories.length ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="400"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Chart;