import Chart from 'react-apexcharts';

const DataChart = ({ userData }) => {
  const month = userData?.diagnosis_history?.map(entry => entry.month);
  const sysval = userData?.diagnosis_history?.map(entry => entry.blood_pressure.systolic.value);
  const dysval = userData?.diagnosis_history?.map(entry => entry.blood_pressure.diastolic.value);

  const VishalChart = {
    series: [
      { name: "Systolic", data: sysval },
      { name: "Diastolic", data: dysval }
    ],
    options: {
      chart: {
        height: "350",
        type: "line",
        toolbar: {
          show: true,
        },
      },
      xaxis: {
        categories: month,
        title: {
          text: 'Month .',
        },
      },
      yaxis: {
        title: {
          text: 'Blood Pressure .',
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      colors: ["#FF0000", "#00FF00"],
    },
  };

  return (
    <div className="chart-container">
      <Chart
        options={VishalChart.options}
        series={VishalChart.series}
        type={VishalChart.options.chart.type}
        height={VishalChart.options.chart.height}
      />
    </div>
  );
};

export default DataChart;
