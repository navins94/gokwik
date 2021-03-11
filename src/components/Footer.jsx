import React from "react";
import gokwik from "../images/gokwik.jfif";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Row1">Powered by</div>
      <img className="Footer__Img" src={gokwik} alt="" />
      <div className="Footer__Row2">GoKwik</div>
    </div>
  );
}
