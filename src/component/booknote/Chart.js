import ReactApexChart from "react-apexcharts";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Chart() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios.get("/api/category").then((response) => {
      setDate(response.data);
    });
  }, []);

  const datename = date.map((v) => v.name);
  const nodate = date.map((v) => v.value);

  const arr = new Array(nodate);
  // const arrZero = arr[0];

  // const arrUni = arrZero.filter((val, idx) => {
  //   return arrZero.indexOf(val) === idx;
  // })

  const donutData = {
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: date,
                label: "총 권수",
                fontSize: "12px",
                color: "red",
              },
              value: {
                fontSize: "22px",
                show: true,
                color: "blue",
              },
            },
          },
        },
      },
      labels: datename,

      title: {
        text: "목표도서",
        align: "center",
      },
    },
  };

  return (
    <div id="chart" style={{ width: "400px" }}>
    
      <ReactApexChart
        options={donutData.options}
        series={nodate}
        type="donut"
        width="350"
      />
    </div>
  );
}

export default Chart;
