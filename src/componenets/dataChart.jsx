import { useEffect, useState, useContext, lazy, Suspense } from "react";
// import Chart from "react-apexcharts";
import { pateinData } from "./apiContext/data";
const Grafe = lazy(() => import("./Graph"));

const DataChart = () => {
  const { ldata } = useContext(pateinData);

  const labTest = ldata?.diagnosis_history?.reverse();
  const disval = labTest && labTest[0]?.blood_pressure?.diastolic?.value;
  const dislev = labTest && labTest[0]?.blood_pressure?.diastolic?.levels;
  const sysval = labTest && labTest[0]?.blood_pressure?.systolic?.value;
  const syslev = labTest && labTest[0]?.blood_pressure?.systolic?.levels;

  // console.log(labTest);
  // console.log(disval);
  // console.log(sysval);

  // const [data, setData] = useState({
  //   series: [
  //     { name: "Systolic", data: sysval },
  //     { name: "Diastolic", data: disval },
  //   ],
  //   options: {
  //     chart: {
  //       height: "350",
  //       type: "area",
  //       toolbar: {
  //         show: true,
  //       },
  //     },
  //     markers: {
  //       size: 2,
  //     },
  //     colors: ["#FF0000", "#00FF00"],
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shadeIntensity: 1,
  //         opacityFrom: 0.3,
  //         opacityTo: 0.4,
  //         stops: [0, 90, 100],
  //       },
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       width: 2,
  //     },
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     xaxis: {
  //       categories: months,
  //       title: {
  //         text: "Month",
  //       },
  //     },
  //   },
  // });

  return (
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-md-9">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mx-3">Blood Pressure</h4>
          <select name="" id="">
            <option value="">Last 6 Months</option>
          </select>
        </div>
        <div className="chart">
          <Suspense fallback={<div className="text-center">LOading...</div>}>
            <Grafe userData={ldata} />
          </Suspense>
        </div>
      </div>
      <div className="col-md-3">
        <div className="col-md-6">
          <h5>Diastoli.</h5>
          <span className="f">
            {disval ? disval : <p>No Patient Is Selected .</p>}
          </span>
          <br />
          {dislev}
        </div>
        <hr />
        <div className="col-md-6">
          <h5>Systolic.</h5>
          <span className="g">
            {sysval ? sysval : <p>No Patient Is Selected .</p>}
          </span>
          <br />
          {syslev}
        </div>
      </div>
    </div>
  );
};

export default DataChart;
