import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import AddPerson from "./pages/AddPerson";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<DashBoard />} />

          <Route exact path="/add-person/:person" element={<AddPerson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
