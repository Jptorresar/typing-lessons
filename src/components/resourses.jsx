import "../styles/resourses.css";

function resources() {
  return (
    <>
      <h1 className="ob_title">visualize hand placements</h1>
      <div className="visuals">
        <img
          className="manos"
          src={require("../imgs/hands.png")}
          alt="Descripción de la imagen"
        />
      </div>
      <div className="visuals">
      <img
          className="manos"
          src={require("../imgs/resource1.png")}
          alt="Descripción de la imagen"
        />
      </div>
    </>
  );
}

export default resources;
