import React, { lazy, Suspense, useContext } from "react";
import { pateinData } from "./apiContext/data";
const DataChart = lazy(() => import("./dataChart"));

const DashBoard = () => {
  const { ldata } = useContext(pateinData);
  // console.log(ldata);
  const labTest = ldata?.lab_results;
  const diglist = ldata?.diagnostic_list;
  const dighr = ldata?.diagnosis_history?.reverse();

  const herartrate = dighr && dighr[0].heart_rate.value;
  const herartrateleve = dighr && dighr[0].heart_rate.levels;
  const temprature = dighr && dighr[0].temperature.value;
  const tempraturelevel = dighr && dighr[0].temperature.levels;
  const respiratoryrateValue = dighr && dighr[0].respiratory_rate.value;
  const respiratory_ratelevel = dighr && dighr[0].respiratory_rate.levels;

  return (
    <div className="col-md-9 dashboard">
      <div className="row">
        <div className="col-md-8 ">
          <div className="reports_box">
            <h3>Diagnosis History </h3>
            <div className="chart card pt-4">
              <Suspense
                fallback={
                  <div className="text-center mx-5 my-5">
                    Graph is Lodading...
                  </div>
                }
              >
                <DataChart />
              </Suspense>
            </div>
            <div className="row text-center">
              <div className="col-md-4 my-3">
                <div className="card" style={{ background: "#E0F3FA" }}>
                  <img src="respiratory rate.svg" alt="" className="herocard" />
                  <p className="text-start mx-3"> Respiratory rate</p>
                  <h3 className="g">{respiratoryrateValue} bpm</h3>
                  <p className="text-start mx-3">{respiratory_ratelevel}</p>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card" style={{ background: "#FFE6E9" }}>
                  <img src="temperature.svg" alt="" className="herocard" />
                  <p className="text-start mx-3">Temperature</p>
                  <h3 className="f">{temprature} &#x2109;</h3>
                  <p className="text-start mx-3">{tempraturelevel}</p>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card" style={{ background: "#FFE6F1" }}>
                  <img src="HeartBPM.svg" alt="" className="herocard" />
                  <p className="text-start mx-3">Heart rate</p>
                  <h3 className="g">{herartrate}bpm</h3>
                  <p className="text-start mx-3">{herartrateleve}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12  card p-3">
            <h1>Diagnosis List </h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {diglist ? (
                  diglist?.map((i) => {
                    return (
                      <tr className=" " key={Math.random() * 1000 + 1}>
                        <td>{i.name}</td>
                        <td>{i.description}</td>
                        <td>{i.status}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="col-md-12 my-5 card p-4 text-center">
                    <td className="g">No Patient Selected</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4 ">
          {Object.keys(ldata).length > 0 ? (
            <>
              <div className="col-md-12 card p-3 d-flex align-items-center justify-content-center ">
                <img
                  src={ldata.profile_picture}
                  alt="patientlogo"
                  className="plogo p-3"
                />
                <div className="text-start col-md-12">
                  <h4 className="text-center">{ldata.name}</h4>
                  <div className="my-2 d-flex">
                    <div>
                      <img
                        src="BirthIcon.svg"
                        alt=""
                        style={{ height: "42px", width: "42px" }}
                      />
                    </div>
                    <div className="wrapper mx-3">
                      <b>Date Of Birth</b>
                      <br />
                      {ldata.date_of_birth}
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div>
                      <img
                        src="FemaleIcon.svg"
                        alt=""
                        style={{ height: "42px", width: "42px" }}
                      />
                    </div>
                    <div className="wrapper mx-3">
                      <b>Gender</b>
                      <br />

                      {ldata.gender}
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div>
                      <img
                        src="PhoneIcon.svg"
                        alt=""
                        style={{ height: "42px", width: "42px" }}
                      />
                    </div>
                    <div className="wrapper mx-3">
                      <b>Contact info.</b>
                      <br />

                      {ldata.phone_number}
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div>
                      <img
                        src="PhoneIcon.svg"
                        alt=""
                        style={{ height: "42px", width: "42px" }}
                      />
                    </div>
                    <div className="wrapper mx-3">
                      <b>Emergency Contacts .</b>
                      <br />

                      {ldata.emergency_contact}
                    </div>
                  </div>
                  <div className="my-2 d-flex">
                    <div>
                      <img
                        src="InsuranceIcon.svg"
                        alt=""
                        style={{ height: "42px", width: "42px" }}
                      />
                    </div>
                    <div className="wrapper mx-3">
                      <b>Insurance Provider .</b>
                      <br />

                      {ldata.insurance_type}
                    </div>
                  </div>
                  <button className="btn btn-primary mx-5 my-2">
                    Show All Information.
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="col-md-12 my-5 card p-4 text-center">
              <span className="g">No Patient Selected</span>
            </div>
          )}
          <div className="col-md-12 my-4 p-3 labcard">
            <h3 className="p-3">Lab Results</h3>
            {labTest ? (
              labTest?.map((i) => {
                return (
                  <div
                    className="d-flex justify-content-between align-item-center cp"
                    key={i}
                  >
                    <span>{i}</span>
                    <span className="cp px-3 ">
                      <div className="my-2 cursur-pointer ">
                        <img
                          src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                          alt=""
                        />
                      </div>
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="col-md-12 mt-5 py-5 card  text-center">
                <span className="g">No Patient Selected</span>
              </div>
            )}
          </div>
          <div className="card p-3">
            <b>Connect Me :- </b>
            <p>
              Portfolio .: <span className="red">Comming Soon . </span>
            </p>
            <p>
              E-mail :{" "}
              <a href="mailto:vsutar206@gmail.com">
                <span className="green">vsutar206@gmail.com.</span>{" "}
              </a>
            </p>
            <p>
              Mobile No. : <span className="green"> +91 7972001963 .</span>{" "}
            </p>
            <p>
              GitHub Profile . :{" "}
              <a
                href="https://github.com/VSUTAR206"
                target={"_black"}
                className="green"
              >
                {" "}
                https://github.com/VSUTAR206 .
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
