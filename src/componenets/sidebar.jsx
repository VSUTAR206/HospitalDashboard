import React, { useContext } from "react";
import { pateinData } from "./apiContext/data";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const {pateints ,setldata} = useContext(pateinData);
  const navigate = useNavigate();

  const onclickHandler = (values) => {
    // navigate(`/pi/${values}`);
    setldata(values)
  };
  return (
    <div className="col-md-3 sidebar">
      <div className="d-flex justify-content-between align-item-center  mb-3 mx-2">
        <div className="title"><h5> Patients</h5></div>
        <div className="serchbaricon">
          <img src="search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
      </div>
          <hr />
      <div className="lists px-2">
        <div className="">
          {pateints &&
            pateints.map((data) => {
              return (
                <div
                  key={data.name}
                  className="d-flex justify-content-evenly align-item-center my-2 pateients"
                  onClick={() => onclickHandler(data)}
                >
                  <div className="img">
                    <img src={data.profile_picture} alt="" />
                  </div>
                  <div className="details">
                    <p>{data.name}</p>
                    <p>
                      {data.gender} ,  
                       {data.age}
                    </p>
                  </div>
                  <div className="options">---</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
