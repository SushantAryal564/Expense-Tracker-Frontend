import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Transaction from "./components/Pages/Transaction";
import Report from "./components/Pages/Report";
import Categories from "./components/Pages/Categories";
import ManageAccount from "./components/Pages/ManageAccount";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/report" element={<Report />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/manageAccount" element={<ManageAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
