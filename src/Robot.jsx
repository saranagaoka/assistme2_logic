import "./robot.css";

function Robot({ isDisabled, isError }) {
  return (
    <div className="Robot">
      <div className="skecth-board-con">
        <div className="sketch-board">
          <div className="head">
            <div className="lens">
              <div className="upper-shadow"></div>
              <div className="rect"></div>
              <div className={isDisabled ? "eyes_loading " : isError ? "red_eyes" : "eyes"}></div>
            </div>
          </div>
          <div className="ear">
            <div className="ear-antena"></div>
          </div>
          <div className="small-cap"></div>
          <div className="body">
            <div className="shadow-box"></div>
            <div className="pocket-area">
              <div className="pocket"></div>
            </div>
          </div>
          <div className="hands">
            <div className="hand"></div>
            <div className="hand"></div>
          </div>
        </div>

        <div className="robot-shadow"></div>
      </div>
    </div>
  );
}

export default Robot;
