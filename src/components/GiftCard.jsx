import React from "react";
import paytm from "../images/paytm.png";

export default function GiftCard() {
  return (
    <div className="GiftCard">
      <div className="GiftCard__Container">
        <img className="GiftCard__Container--Img" src={paytm} alt="" />
        <div className="GiftCard__Container--Content">
          <div className="GiftCard__Container--Content__Col1">
            <div className="GiftCard__Container--Content__Col1--Para1">Gift</div>
            <div className="GiftCard__Container--Content__Col1--Para2">Card</div>
          </div>
          <div className="GiftCard__Container--Content__Col2">
            <div className="GiftCard__Container--Content__Col2--Para1">₹</div>
            <div className="GiftCard__Container--Content__Col2--Para2">200</div>
          </div>
        </div>
      </div>
    </div>
  );
}
