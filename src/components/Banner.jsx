import React from "react";
import partyEmoji from "../images/partyEmoji.png";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__Header">
        <div className="Banner__Header--Para1">man</div>
        <div className="Banner__Header--Para2">matters</div>
      </div>
      <div className="Banner__Congo">
        <div className="Banner__Congo--Para">Congratulations</div>
        <img className="Banner__Congo--Img" src={partyEmoji} alt="" />
      </div>
    </div>
  );
}
