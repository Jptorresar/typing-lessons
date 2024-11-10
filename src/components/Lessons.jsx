import "../styles/lessons.css";
import Modal from "./modal";
import Data from "../data/days.json"

function Lessons() {
  return (
    <>
      <h1 className="title">Lesson Plan Overview</h1>
      <div class="info-container">
      {Data.map((item)=>(
          <Modal name={item.name} text={item.text}/>
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
