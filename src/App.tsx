import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="home" element={<Home />} />
               <Route path="addTodo" element={<AddTodo />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
