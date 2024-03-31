import React from "react";

const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${modalOpen ? "modal-open" : "modal"}`}
    >
      <div className="modal-box">
        <div className="py-4">{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setModalOpen((prev) => !prev)}>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
