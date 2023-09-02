import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Vocabs from "../../Data/Vocabs";
const VocabSingle = () => {
  const Vocabulary = Vocabs;
  const { vocabId } = useParams();
  console.log(vocabId);

  const Data = Vocabulary.find((item) => item.id === vocabId);

  console.log(Data);
  const { id, hindi, example, date } = Data || {};
  return (
    <>
      <div className="container">
        <img
          src="https://www.awalenglish.com/wp-content/uploads/2023/06/Sentence-Of-The-Day.png"
          alt="alok"
          height={400}
        />
        <div className="id"> Sentence of the Day : {id}</div>
        <div className="hindi">In Hindi : {hindi}</div>
        <div className="example">Example: {example}</div>
        <span>{date}</span>
      </div>
    </>
  );
};

export default VocabSingle;
