import * as React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import backward from "../images/backward.png";
import tag from "../images/tag.png";
import bell from "../images/bell.png";
import moon from "../images/moon.png";
import pushpin from "../images/pushpin.png";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const AddTodo = () => {
   type Todos = {
      id: number;
      todo: string;
      category: string;
      date: Date | null;
      note: string;
      status: string;
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<Todos>();

   const [date, setDate] = React.useState<Date | null>(new Date());
   const [category, setCategory] = React.useState("");

   const onSubmit: SubmitHandler<Todos> = (data) => {
      const todoList = JSON.parse(localStorage.getItem("todos") || "[]");
      data.id = todoList.length;
      data.date = date;
      data.status = "active";
      todoList.push(data);
      localStorage.setItem("todos", JSON.stringify(todoList));
      console.log(todoList);
   };

   return (
      <div className="container">
         <div className="add-todo shadow-xl">
            <div className="upper">
               <div className="header">
                  <div className="backward">
                     <Link to="/">
                        <img src={backward} alt="" />
                     </Link>
                  </div>
                  <h2>Add ToDo</h2>
                  <div className="mode shadow-">
                     <img src={moon} alt="" />
                  </div>
               </div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group">
                     <label htmlFor="plan">What are your planning?</label>
                     <input
                        className="form-control"
                        {...register("todo", {
                           required: true,
                           maxLength: 30,
                        })}
                     />
                     {errors.todo && (
                        <span className="error">This field is required</span>
                     )}
                  </div>
                  <div className="input-group2">
                     <img className="input-icon" src={tag} alt="" />
                     <FormControl>
                        <Select
                           value={category}
                           displayEmpty
                           inputProps={{ "aria-label": "Without label" }}
                           className="form-control"
                           {...register("category", { required: true })}
                           onChange={(event: SelectChangeEvent) => {
                              setCategory(event.target.value);
                           }}
                        >
                           <MenuItem value="">Select category</MenuItem>
                           <MenuItem value={"personal"}>Personal</MenuItem>
                           <MenuItem value={"business"}>Business</MenuItem>
                           <MenuItem value={"important"}>Important</MenuItem>
                        </Select>
                     </FormControl>
                     {errors.category && (
                        <span className="error">This field is required</span>
                     )}
                  </div>
                  <div className="input-group2">
                     <img className="input-icon" src={bell} alt="" />
                     <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                           renderInput={(props) => <TextField {...props} />}
                           value={date}
                           // {...register("date", { required: true })}
                           onChange={(newValue) => {
                              setDate(newValue);
                           }}
                        />
                     </LocalizationProvider>
                     {/* {errors.date && (
                        <span className="error">This field is required</span>
                     )} */}
                  </div>

                  <div className="input-group2">
                     <img className="input-icon" src={pushpin} alt="" />
                     <input
                        className="form-control"
                        placeholder="Add note"
                        {...register("note", {
                           required: true,
                           maxLength: 20,
                        })}
                     />

                     {errors.note && (
                        <span className="error">This field is required</span>
                     )}
                  </div>
                  <button className="submit-btn">Add Todo</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddTodo;
