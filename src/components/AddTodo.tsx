import { Link } from "react-router-dom";
import left from "../images/left-arrow.png";
import tag from "../images/tag.png";
import bell from "../images/bell.png";
import moon from "../images/crescent-moon.png";
import pushpin from "../images/pushpin.png";

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
                     <img src={moon} alt="" />
                  </div>
               </div>
               <div className="input-group">
                  <label htmlFor="plan">What are your planning?</label>
                  <input type="text" id="plan" />
               </div>
               <div className="input-group2">
                  <img className="input-icon" src={tag} alt="" />
                  <input className="" type="text" placeholder="Category" />
               </div>
               <div className="input-group2">
                  <img className="input-icon" src={bell} alt="" />
                  <input className="" type="text" placeholder="May 29, 2022" />
               </div>
               <div className="input-group2">
                  <img className="input-icon" src={pushpin} alt="" />
                  <input className="" type="text" placeholder="Add note" />
               </div>
               <button className="submit-btn">Add Todo</button>
            </div>
         </div>
      </div>
   );
};

export default AddTodo;
