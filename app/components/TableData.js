import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import Modal from "./Modal";

const TableData = ({ text, id }) => {
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [newTask, setNewTask] = useState(text);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`http://localhost:3001/tasks/${id}`, {
      id: id,
      text: newTask,
    });
    setNewTask("");
    setModalOpenEdit((prev) => !prev);
  };
  const handleDelete = async (e) => {
    e.preventDefault()
    const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
  };
  return (
    <tr>
      <td className="w-full text-base">{text}</td>
      <td className="flex gap-4">
        <FiEdit
          size={20}
          className="cursor-pointer"
          onClick={() => setModalOpenEdit((prev) => !prev)}
        />
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form onSubmit={handleUpdate}>
            <h3 className="font-bold text-lg">Update task</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="Type here..."
                className="input input-bordered w-full"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
              />
              <button className="btn bg-black text-white" type="submit">
                Update
              </button>
            </div>
          </form>
        </Modal>
        <MdDelete
          size={25}
          color="red"
          onClick={() => setModalOpenDelete((prev) => !prev)}
          className="cursor-pointer"
        />
        <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
          <form onSubmit={handleDelete}>
            <div className="modal-action flex justify-between items-center">
              <h2 className="font-bold text-lg">
                Are you sure you want to delete?
              </h2>
              <button className="btn bg-red-700 text-white" type="submit">
                Delete
              </button>
            </div>
          </form>
        </Modal>
      </td>
    </tr>
  );
};

export default TableData;
