import React from "react";
import "./Styles/Button.css";
const Button = (props) => {
  const { text, onclick } = props;

  return (
    <div className="buttondiv">
      <button className="button" onClick={onclick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
