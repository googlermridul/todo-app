import logo from "../images/reminder.png";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import search from "../images/search.png";
import plus from "../images/plus4.png";
import time from "../images/time2.png";
import check from "../images/check.png";
import trash from "../images/trash.png";
import pencil from "../images/pencil.png";
import { Link } from "react-router-dom";

const TodoBox = () => {
   return (
      <div className="container">
         <div className="todo-box shadow-xl">
            <div className="upper">
               <div className="header">
                  <div className="logo  ">
                     <img src={logo} alt="" />
                  </div>
                  <h2>ToDo List</h2>
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
            <div className="middle">
               <div className="task-box">
                  <div className="date-box">
                     <span className="bar">Fri</span> <br />
                     <span className="tarikh">08</span>
                  </div>
                  <div className="txt">
                     <h3 className="task">Chomolokko biriyani</h3>
                     <span className="time">
                        <img src={time} alt="" /> <span>12am - 1pm</span>
                     </span>
                  </div>
                  <div className="actions">
                     <button className="shadow-lg">
                        <img src={check} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={trash} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={pencil} alt="" />
                     </button>
                  </div>
               </div>
               <div className="task-box">
                  <div className="date-box">
                     <span className="bar">Fri</span> <br />
                     <span className="tarikh">08</span>
                  </div>
                  <div className="txt">
                     <h3 className="task">Chomolokko biriyani</h3>
                     <span className="time">
                        <img src={time} alt="" /> <span>12am - 1pm</span>
                     </span>
                  </div>
                  <div className="actions">
                     <button className="shadow-lg">
                        <img src={check} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={trash} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={pencil} alt="" />
                     </button>
                  </div>
               </div>
               <div className="task-box">
                  <div className="date-box">
                     <span className="bar">Fri</span> <br />
                     <span className="tarikh">08</span>
                  </div>
                  <div className="txt">
                     <h3 className="task">Chomolokko biriyani</h3>
                     <span className="time">
                        <img src={time} alt="" /> <span>12am - 1pm</span>
                     </span>
                  </div>
                  <div className="actions">
                     <button className="shadow-lg">
                        <img src={check} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={trash} alt="" />
                     </button>
                     <button className="shadow-lg">
                        <img src={pencil} alt="" />
                     </button>
                  </div>
               </div>
            </div>
            <div className="add shadow-lg">
               <Link to="addTodo">
                  <img src={plus} alt="" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default TodoBox;
