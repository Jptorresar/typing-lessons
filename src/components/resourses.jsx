import "../styles/resourses.css";

function resources() {
  return (
    <>
      <div class="contenedor-link">
        <div className="link-caja">
          <h2>How to log in?</h2>
          <a
            href="https://app.screencastify.com/v3/watch/d4En0pp2b5JtvlJHsWj6"
            class="image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's see a video
          </a>
        </div>
      </div>

      <h2 className="ob_title">visualize hand placements</h2>
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
      <div className="introduction">
        <div className="text-box">
          <h1 className="title">Sample Parent Message</h1>
          <p className="text">
            For Chromebooks to be charged, please ensure they’re plugged in the
            night before.
          </p>
        </div>
      </div>
    </>
  );
}

export default resources;
