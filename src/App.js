import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
