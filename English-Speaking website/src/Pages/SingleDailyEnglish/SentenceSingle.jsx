import React from "react";
import { useParams } from "react-router-dom";
import Wakya from "../../Data/Wakya.js";

const SentenceSingle = () => {
  const { productId } = useParams();
  const Sentence = Wakya;
  console.log(productId);

  const Data = Sentence.find((item) => item.id === productId);
  console.log(Data);
  const { id, English, Hindi, Date, Month } = Data;

  return (
    <>
      <div>SentenceSingle</div>

      <div className="date">{Date}</div>

      <span className="month">{Month}</span>
      <div className="title"> Sentence of the Data | {id}</div>
      <div className="English"> {English}</div>
      <div className="hindi">Sentence of the Data |{Hindi}</div>
      <img
        src="https://www.awalenglish.com/wp-content/uploads/2023/06/Sentence-Of-The-Day.png"
        alt="hello"
        height={400}
      />
    </>
  );
};

export default SentenceSingle;
