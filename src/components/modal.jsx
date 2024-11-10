import "../styles/modal.css";
import { useState } from 'react';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="button-2" onClick={openModal}>{props.name}</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{props.text}</p>
            <button className="button-3" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
