import React, { useState } from "react";
import Vocabs from "../../Data/Vocabs";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination.js";
const DailyVocabs = () => {
  const [Vocab, setVocab] = useState(Vocabs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Vocab.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="container">
        <div className="main">
          {Vocab.slice(firstPostIndex, lastPostIndex).map((main) => {
            return (
              <>
                <Link to={`/vocab/${main.id}`} className="title">
                  <div className="title">Sentence of the Day | {main.id}</div>
                </Link>
                <div className="id">{main.id}</div>
                <img src="Sentence.png" alt="alok" height={150} />
                <div className="hindi"> Hindi Meaning : {main.hindi}</div>
                <div className="example"> Example: {main.example}</div>
              </>
            );
          })}
        </div>
      </div>
      <Pagination
        totalPosts={Vocab.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default DailyVocabs;
