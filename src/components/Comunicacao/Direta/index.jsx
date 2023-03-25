import React from "react";
import Filho from "./components/Filho";

function Direta(props) {
  return (
    <div>
      <Filho {...props}>João</Filho>
      <Filho sobrenome={props.sobrenome}>Maria</Filho>
      <Filho sobrenome="Silva">Pedro</Filho>
    </div>
  )
}
export default Direta