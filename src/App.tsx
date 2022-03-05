import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
   return (
      <>
         <BrowserRouter>
            <Link to={"home"}>home</Link>
            <Link to={"about"}>about</Link>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="home" element={<Home />} />
               <Route path="about" element={<About />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
