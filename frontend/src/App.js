import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import AddPerson from "./pages/AddPerson";
import CreateExam from "./pages/CreateExam";
import CreateSupplementary from "./pages/CreateSupplementary";
import InvigilatorScan from "./pages/InvigilatorScan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/add-person/:person" element={<AddPerson />} />
          <Route exact path="/create-exam" element={<CreateExam />} />
          <Route exact path="/create-supplementary" element={<CreateSupplementary/>} />
          <Route exact path="/invigilator-scan" element={<InvigilatorScan/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
