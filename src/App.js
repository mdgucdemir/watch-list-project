import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Watched from "./pages/watched/Watched";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watched" element={<Watched />} />        
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
