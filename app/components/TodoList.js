"use client"

import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const TodoList = ({tasks}) => {
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-base-200">
            <th className="font-bold text-lg text-black">Task</th>
            <th className="font-bold text-lg text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task) => {
            return (
              <TableData key={task.id} text={task.text} id={task.id}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
