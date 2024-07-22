import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Data } from './Data';
import { BarChart } from './BarChart';

Chart.register(CategoryScale);

export default function Test() {
  const chartRef = useRef(null);

  const [chartData, setChartData] = useState({
    labels: Data.map(item => item.year),
    datasets: [
      {
        label: 'User Gain',
        data: Data.map(item => item.userGain),
        backgroundColor: '', 
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 14,
        // b
        yAxisID: 'y',
      },
    ],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx; // Accessing the context correctly

      // Create the gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    //   background: linear-gradient(165.54deg,  -9.83%, # 49.32%, # 110.99%);

        gradient.addColorStop(0, '#47E2EC');
        gradient.addColorStop(0.4932, '#5C98DF');
        gradient.addColorStop(1, '#A314D5');

      // Update the chart data with the gradient
      setChartData(prevData => ({
        ...prevData,
        datasets: prevData.datasets.map(dataset => ({
          ...dataset,
          backgroundColor: gradient,
        })),
      }));
    }
  }, [chartRef]);

  return (
    <div className="App">
      <BarChart chartData={chartData} ref={chartRef} />
    </div>
  );
}
