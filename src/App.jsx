import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componenets/navbar";
import Sidebar from "./componenets/sidebar";
import DashBoard from "./componenets/dashboard";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="row d-flex justify-content-center align-item-center" style={{marginTop:"32px"}}>
        <Sidebar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
