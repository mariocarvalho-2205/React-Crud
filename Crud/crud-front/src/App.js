import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx"
import Create from "./pages/Create/Create.jsx"
import Read from "./pages/Read/Read.jsx"
import Update from "./pages/Update/Update.jsx"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
