import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./componenets/navbar"));
const Sidebar = lazy(() => import("./componenets/sidebar"));
const DashBoard = lazy(() => import("./componenets/dashboard"));

function App() {
  return (
    <div className="main">
      <Suspense fallback={<div className="text-center mx-5 my-5" >Head is Lodading...</div>}>
        <Navbar />
      </Suspense>
      <div
        className="row d-flex justify-content-center align-item-center"
        style={{ marginTop: "32px" }}
      >
        <Suspense fallback={<div className="text-center mx-5 my-5" >Side is Lodading...</div>}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<div className="text-center mx-5 my-5" >DashBoard is Lodading...</div>}>
          <DashBoard />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
