import { Link } from "react-router-dom";
import left from "../images/left.png";
import search from "../images/search2.png";
import sun from "../images/sun.png";

const AddTodo = () => {
   return (
      <div className="container">
         <div className="add-todo shadow-xl">
            <div className="upper">
               <div className="header">
                  <div className="logo  ">
                     <Link to="/">
                        <img src={left} alt="" />
                     </Link>
                  </div>
                  <h2>Add ToDo</h2>
                  <div className="mode shadow-">
                     <img src={sun} alt="" />
                  </div>
               </div>
               <div className="input-group">
                  <img className="input-icon" src={search} alt="" />
                  <input
                     className="shadow-sm"
                     type="text"
                     placeholder="Search tasks..."
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddTodo;
