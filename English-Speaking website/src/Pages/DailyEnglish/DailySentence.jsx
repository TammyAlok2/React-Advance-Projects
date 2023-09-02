import React, { useState } from "react";
import Data from "../../Data/Wakya.js";
import "./Sentence.css";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination.js";
import "./DailySentence.css";

const Sentence = () => {
  const [coinsData, setCoinsData] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="container">
        <h2>Sentence</h2>
        <div className="answer">
          {coinsData.slice(firstPostIndex, lastPostIndex).map((item) => {
            return (
              <>
                <div className="maincontainer">
                  <div className="date">{item.Date}</div>
                  <span className="month">{item.Month}</span>
                  <div className="main">
                    <Link to={`/sentence/${item.id}`} className="title">
                      <div className="title">
                        Sentence of the Day | {item.id}
                      </div>
                    </Link>
                    <div className="hindi">
                      Sentence of the Data |{item.Hindi}
                    </div>
                    <Link to={`/sentence/${item.id}`}>
                      {" "}
                      <img src={item.Image} alt="alok" height={100} />
                    </Link>

                    <Link to={`/sentence/${item.id}`}>Read more</Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <Pagination
          totalPosts={coinsData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Sentence;
