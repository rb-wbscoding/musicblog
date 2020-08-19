import React, { useState } from "react";
import "./Arrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Arrow() {
  const [count, setCount] = useState(0);

  function left(e) {
    if (count > 0) {
      return setCount(count - 1);
    }
  }
  function right() {
    if (count < 4) {
      return setCount(count + 1);
    }
  }

  return (
    <div className="arrow">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={left} />
      <span>{count}</span>
      <FontAwesomeIcon icon={faArrowRight} size="lg" onClick={right} />
    </div>
  );
}
