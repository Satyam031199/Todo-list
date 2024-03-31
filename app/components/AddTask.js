"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import axios from "axios";

const AddTask = ({tasks}) => {
  const [modalOpen,setModalOpen] = useState(false)
  const [newTask,setNewTask] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:3001/tasks",{
      id: String(Number(tasks.length)+1),
      text: newTask
    })
    setNewTask('')
    setModalOpen(prev => !prev)
  }
  return (
    <div>
      <button
        className="btn btn-primary w-full uppercase text-white"
        onClick={() => setModalOpen(prev => !prev)}
      >
        add new task
        <FaPlus size={18} className="ml-2" color="white" />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input type="text" placeholder="Type here..." className="input input-bordered w-full" onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
            <button className="btn bg-black text-white" type="submit">Submit</button>
          </div>          
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
