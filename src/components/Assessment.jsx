import "../styles/Assessment.css";

function Assessment() {
  return (
    <div className="assessment-feedback">
      <h1 className="title">Formative and Summative Assessment</h1>
      <div class="info-container">
        <div class="info-caja">
          <h2>Formative Assessment</h2>
          <p>
            {" "}
            Observational notes on finger positioning and comfort level during
            initial practice.
          </p>
        </div>
        <div class="info-caja">
          <h2>Summative Assessment</h2>
          <ul>
            <li>Typetastic level completion.</li>
            <li>Small-group typing assessments focused</li>
            <li>on accuracy and key function.</li>
            <a
              className="link"
              href="https://new.express.adobe.com/id/urn:aaid:sc:US:33c3fc39-dbbf-490c-a755-79c2a148f6c3?category=search&learn=for-you"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </ul>
        </div>
        <div class="info-caja">
          <h2>Exit ticket</h2>
          <ul>
            <li>What was your favorite part of today’s lesson?</li>
            <li>Which key do you find hardest to remember?</li>
          </ul>
        </div>
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
    </div>
  );
}
export default Assessment;
