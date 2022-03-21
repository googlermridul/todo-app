import logo from "../images/reminder.png";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import search from "../images/search.png";
import plus from "../images/plus.png";
import clock from "../images/clock.png";
import check from "../images/check.png";
import trash from "../images/trash.png";
import pencil from "../images/pencil.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TodoBox = () => {
   const [todos, setTodos] = useState([]);

   interface TodoType {
      id?: number;
      todo: string;
      category: string;
      date: string;
      note: string;
   }

   useEffect(() => {
      const items = JSON.parse(localStorage.getItem("todos")!);
      if (items) {
         setTodos(items);
      }
   }, []);

   console.log(todos);

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
               {todos.map((todo: TodoType) => (
                  <div key={todo.id} className="task-box">
                     <div className="date-box">
                        <span className="bar">Fri</span> <br />
                        <span className="tarikh">{todo.date.slice(3, 5)}</span>
                     </div>
                     <div className="txt">
                        <h3 className="task">{todo.todo}</h3>
                        <span className="time">
                           <img src={clock} alt="" /> <span>{todo.date}</span>
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
               ))}
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
