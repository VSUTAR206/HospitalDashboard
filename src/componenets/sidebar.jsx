import React, { useContext } from "react";
import { pateinData } from "./apiContext/data";

const Sidebar = () => {
  const { pateints, setldata } = useContext(pateinData);

  const onclickHandler = (values) => {
    // navigate(`/pi/${values}`);
    pateinData? setldata(values) : null
  };
  return (
    <div className="col-md-3 sidebar">
      <div className="d-flex justify-content-between align-item-center  mb-3 mx-2">
        <div className="title">
          <h5> Patients</h5>
        </div>
        <div className="serchbaricon">
          <img src="search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
      </div>
      <hr />
      <div className="lists px-2">
        <div className="">
          {pateints &&
            pateints?.map((data) => {
              return (
                <div
                  key={data.name}
                  className="row d-flex justify-content-between align-item-center my-1 mx-1 pateients cp"
                  onClick={() => onclickHandler(data)}
                >
                  <div className="img  my-2 col-3">
                    <img src={data.profile_picture} alt="" />
                  </div>
                  <div className="col-9 d-flex justify-content-between align-item-center ">
                    <div className="details my-1 ">
                      <p>{data.name}</p>
                      <p>
                        {data.gender} ,{data.age}
                      </p>
                    </div>
                    <div
                      className="options my-1"
                      style={{ display: "flex", right: "5px" }}
                    >
                      <img
                        src="more_vert_FILL0_wght300_GRAD0_opsz24.svg"
                        alt=""
                        className=""
                        style={{ width: "3px" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
