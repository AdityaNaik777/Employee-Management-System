import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData]=useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    const newTaskObj={
      title:taskTitle,
      description:taskDate,
      taskDate:taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let matchedUser=null;
    const updatedUsers=userData.map((elem)=>{
      if(assignTo===elem.firstname){
        const updated={
          ...elem,
          tasks:[...elem.tasks,newTaskObj],
          taskCounts:{...elem.taskCounts,newTask:(elem.taskCounts.newTask||0)+1}
        };
        matchedUser=updated
        return updated;
      }
      return elem;
    })
    
    setUserData(updatedUsers)
    localStorage.setItem("employees",JSON.stringify(updatedUsers))



    // if the currently logged-in user is the employee we assigned to, update loggedInUser too
    try{
      const logged=JSON.parse(localStorage.getItem("loggedInUser"));
      if(logged && logged.role==="employee" && logged.data?.firstname==assignTo&&matchedUser){
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:matchedUser}))
      }
    }catch(err){
      // ignore parse errors
    }

    // clear form
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

  };
  return (
    <div className="p-10 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-wrap items-start justify-between text-white"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-3 w-4/5 rounded border"
              type="text"
              placeholder="Make a UI Design"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-3 w-4/5 rounded border"
              type="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-3 w-4/5 rounded border"
              type="text"
              placeholder="Employee name"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-3 w-4/5 rounded border"
              type="text"
              placeholder="Design, Dev"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4text-sm rounded border p-3"
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="p-1 bg-emerald-500 hover:bg-emerald-600 mt-4 rounded text-sm active:scale-95">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
