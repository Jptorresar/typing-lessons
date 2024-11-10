import Introduction from "./introduction";
import homeData from "../data/home.json";
import "../styles/home.css";

function Home() {
  return (
    <>
      {homeData.map((item) => (
        <Introduction key={item.id} img={item.img} text={item.text} />
      ))}
      <div className="objetives">
        <h1 className="ob_title">Main Goal:</h1>
        <h2 className="ob_subtitle">
          {" "}
          Achieve a 90% increase in typing proficiency among students
        </h2>
      </div>
      <h1 className="ob_title">Learning Outcomes:</h1>
        <div className="info-container">
          <div className="secction">
            <p className="ob_text">
              -Familiarity with key functions (shift, caps lock, symbols).
            </p>
          </div>
          <div className="secction">
            <p className="ob_text">
              -Improved speed and accuracy on basic typing tasks.
            </p>
          </div>
          <div className="secction">
            <p className="ob_text">
              -Ability to complete typing tasks independently.
            </p>
          </div>
        </div>
    </>
  );
}

export default Home;
