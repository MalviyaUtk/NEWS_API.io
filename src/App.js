import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";


function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/general" element={<FetchData cat="general"/>}/>
          <Route  path="/business" element={<FetchData cat="business"/>}/>
          <Route  path="/entertainment" element={<FetchData cat="entertainment"/>}/>
          <Route  path="/health" element={<FetchData cat="health"/>}/>
          <Route  path="/science" element={<FetchData cat="science"/>}/>
          <Route  path="/technology" element={<FetchData cat="technology"/>}/>
          <Route  path="/science" element={<FetchData cat="science"/>}/>
          <Route  path="/sports" element={<FetchData cat="sports"/>}/>      
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
