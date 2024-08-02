import React from "react";

const Navbar = () => {
  return (
    <div className="col-md-12 nav card shadow">
      <div className="row">
        <div className="col-md-3">
          <img src="TestLogo.svg" alt="Logo" style={{height:"48px" , width:"210px" ,padding:"5px"}}/>
        </div>
        <div className="col-md-6 d-flex justify-content-evenly align-item-center ">
          <div className="navlinks">
            <img src="home_FILL0_wght300_GRAD0_opsz24.svg" alt="home" />
            <span className="mx-2">OverView </span>
          </div>
          <div className="navlinks">
            <img src="group_FILL0_wght300_GRAD0_opsz24.svg" alt="home" />
            <span className="mx-2">Patients </span>
          </div>
          <div className="navlinks">
            <img
              src="calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
              alt="home"
            />
            <span className="mx-2">Schedule</span>
          </div>
          <div className="navlinks">
            <img src="chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="home" />
            <span className="mx-2">Messeage </span>
          </div>
          <div className="navlinks">
            <img src="credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="home" />
            <span className="mx-2">Transaction </span>
          </div>
        </div>
        <div className="col-md-3  d-flex justify-content-evenly align-item-center ">
          <div className="profileimage">
            <img
              src="senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
              alt=""
              style={{ height: "44px", width: "44px" }}
            />
          </div>
          <div className="details">
            <div className="name">Dr.Jose Simmons</div>
            <div className="title">General Practitioner</div>
          </div>
          <div className="settings">
            <img
              src="settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="setting"
              style={{ height: "20px", width: "19px", marginRight: "16px" ,marginTop:"12px" }}
            />
            <img
              src="more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="details"
              style={{ height: "18px", width: "3px",marginTop:"12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
