import React from "react";

function CondicionalComIf(props) {
  if (props.numero % 2 === 0) {
    return (
      <>
        <h2>O número é {props.numero}</h2>
        <span>Par</span>
      </>
    )
  } else {
    return (
      <>
        <h2>O número é {props.numero}</h2>
        <span>Ímpar</span>
      </>
    )
  }
}

export default CondicionalComIf