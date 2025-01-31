import { useState } from "react";
import ApexCharts from "react-apexcharts";

const Chart = ({ title }) => {
  const [chartData, setChartData] = useState([5, 10, 12, 3]);

  const getChartOptions = () => ({
    series: chartData,
    colors: ["#603f8b", "#a16ae8", "#efdcf9", "#ab729f"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Initiated",
              fontFamily: "Inter, sans-serif",
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `${sum}k`;
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: (value) => `${value}k`,
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Initiated", "Pending", "Signed", "Expired"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}k`,
      },
    },
    xaxis: {
      labels: {
        formatter: (value) => `${value}k`,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  return (
    <div className=" max-w-md bg-white rounded-lg shadow-lg p-2 md:p-4 w-[100%]">
      <div className="flex justify-start p-1 items-center w-[100%]">
        <p className="text-md font-semibold text-gray-700">{title}</p>
      </div>

      {/* Donut Chart */}
      <div className="py-2" id="donut-chart">
        <ApexCharts
          options={getChartOptions()}
          series={chartData}
          type="donut"
          height={150}
        />
      </div>
    </div>
  );
};

export default Chart;
