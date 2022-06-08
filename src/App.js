import "./App.css";
import {ToastContainer} from  "react-toastify"
import 'react-toastify/dist/ReactToastify.minimal.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <ToastContainer />
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
      </Routes>
      
        
    </Router>
    </div>
  );
}

export default App;
