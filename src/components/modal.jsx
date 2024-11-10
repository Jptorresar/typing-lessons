import "../styles/modal.css";

const Modal = (props) => {
  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{props.text}</p>
        <button className="button-3" onClick={props.onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
