import "../styles/lessons.css";
import Modal from "./modal";
import Data from "../data/days.json"
import React, { useState } from 'react';

function Lessons() {

  const [activeModal, setActiveModal] = useState(null); // Estado para manejar qué modal está abierto

  const openModal = (id) => {
    setActiveModal(id); // Establece el modal activo
  };

  const closeModal = () => {
    setActiveModal(null); // Cierra el modal
  };

  return (
    <>
      <h1 className="title">Lesson Plan Overview</h1>
      <div className="info-container">
      {Data.map((item) => (
        <div key={item.id}> {/* Asegúrate de incluir una key única */}
          <button className="button-2" onClick={() => openModal(item.id)}>
            {item.name}
          </button>
          {activeModal === item.id && ( // Solo muestra el modal si es el activo
            <Modal name={item.name} text={item.text} onClose={closeModal} />
          )}
        </div>
      ))}
      </div>

     
      <h1 className="title">Teaching Method</h1>
      <p className="text">
        Explain the “I Do, We Do, You Do” approach for each day.
      </p>
      <div className="interactive">
        <div class="image-box">
          <img src={require("../imgs/Typetastic.png")} alt="typetastic" />
          <p>
            Primary practice tool with engaging, age-appropriate typing games.
          </p>
          <a
            href="https://typetastic.com"
            class="image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go see it
          </a>
        </div>
        <div class="image-box">
          <img src={require("../imgs/Google.png")} alt="google" />
          <p>Use pre-made slides to introduce key concepts.</p>
          <a
            href="https://docs.google.com/presentation/d/169hbOaWKTYmgIuheQlc2WeGG1ZhwdvPTxkgXE7PUfzk/edit?usp=sharing"
            class="image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go see it
          </a>
        </div>
        <div class="image-box">
          <img src={require("../imgs/Typing.png")} alt="Typing" />
          <p>Learn to Type Faster and Easier for Free.</p>
          <a
            href="https://www.typing.com/"
            class="image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go see it
          </a>
        </div>
      </div>
    </>
  );
}
export default Lessons;
