import React from "react";
import "./imageform.css";

const ImageForm = ({ onInput, onSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This will detect faces , Just put image link here."}
      </p>
      <div>
        <div className="pa4 center br3 bg shadow-5">
          <input
            className="f4 pa2 w-70 center"
            placeholder="Paste your link here"
            type="text"
            onChange={onInput}
          />
          <button
            onClick={onSubmit}
            className="f4 w-30 pointer grow link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
