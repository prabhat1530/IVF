import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ResultPage from "./Pages/ResultPage"; 
import Home from "./Pages/HomePage"; 

function App() {
  return (
    <Router> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        
      
        <Route path="/result" element={<ResultPage />} />

        
      
      </Routes>
    </Router>
  );
}

export default App;
