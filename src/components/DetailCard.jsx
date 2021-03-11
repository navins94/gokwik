import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillGiftFill } from "react-icons/bs";

export default function DetailCard() {
  const dataArr = [
    {
      ques: "Where will I get the gift card?",
      ans: "You will receive it on Whatsapp/SMS on your mobile",
    },
    {
      ques: "When will I receive the gift card?",
      ans: "Within 48 hours, when your Man Matters order is delivered",
    },
    {
      ques: "What if I cancel the order?",
      ans: "The voucher will not delivered if you cancel the order",
    },
  ];
  return (
    <div className="DetailCard">
      {dataArr.map((data, index) => {
        return (
          <div className="DetailCard__Content" key={index}>
            {index === 0 ? (
              <RiWhatsappFill className="DetailCard__Whatsapp" />
            ) : index === 1 ? (
              <BsFillGiftFill className="DetailCard__Gift" />
            ) : (
              <AiFillCloseSquare className="DetailCard__Close" />
            )}
            <div className="DetailCard__Content--Para">
              <div className="DetailCard__Content--Para__Ques">{data.ques}</div>
              <div className="DetailCard__Content--Para__Ans">{data.ans}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
