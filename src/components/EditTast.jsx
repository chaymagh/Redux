import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";

const EditTast = ({task}) => {
    const [action, setaction] = useState(task.action)
    const dispatch=useDispatch();
    const esubmit=(e)=>{e.preventDefault();
        const edited={
            id:task.id,action,isDone:task.isDone
          }
          dispatch(editTask(edited))
          closeModal()}
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return <div>

<button onClick={openModal}><FaEdit size={"35px"} className="edit" /></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={esubmit}>
          <input value={action} onChange={e=>setaction(e.target.value)}/>
          <button type="submit" id="sub-btn"><BiCheckCircle size={"19px"}/></button>
        </form>
        <button onClick={closeModal} id="close">close</button>
      </Modal>
  </div>;
};

export default EditTast;
