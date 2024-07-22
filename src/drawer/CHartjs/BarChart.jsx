import { Bar } from "react-chartjs-2";
import React, { forwardRef, useEffect, useRef } from "react";
import "./BarChart.css";

export const BarChart = forwardRef(({ chartData }, ref) => {
  return (
    <div className="chart-container">
      <Bar
        ref={ref}
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              border:{
                display:"fales",
                dash:[4,4]
              },
              type: "linear",
              position: "left",
              title: {
                display: true,
                color: "white",
                font: {
                  size: 14,
                  weight: 500,
                  family: "Quicksand",
                  lineHeight: "20px",
                },
              },
              grid: {
                tickLength: 2,
                drawOnChartArea: true,
                color: "#3C4795",
              },
              // grace:'1%',
              ticks: {
                color: "#B1BAED",
                font: {
                  size: 14,
                  weight: 500,
                  family: "Quicksand",
                  lineHeight: "20px",
                },
                max: 2.5,
                min: 0.5,
                stepSize: 0,
              },
            },
            x: {
              grid: {
                drawOnChartArea: false,
                // tickLength: 0
              },
              ticks: {
                color: "#B1BAED",
                font: {
                    size: 14,
                    weight: 500,
                    family: "Quicksand",
                    lineHeight: "20px",
                },
                align: "center",
                // maxTicksLimit: 3,
              },
            },
          },
        }}
      />
    </div>
  );
});
