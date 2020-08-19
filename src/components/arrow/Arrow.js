import React, { useState } from "react";
import Styles from "./Arrow.module.css";
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
    if (count < 3) {
      return setCount(count + 1);
    }
  }

  return (
    <div className={Styles.arrow}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={left} />
      <span>Page: {count}</span>
      <FontAwesomeIcon icon={faArrowRight} size="lg" onClick={right} />
    </div>
  );
}
