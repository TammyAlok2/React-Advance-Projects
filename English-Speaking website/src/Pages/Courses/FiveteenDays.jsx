import React, { useState } from "react";
import Course from "../../Data/15Days";
import CourseProduct from "./CourseProduct";
const Fiveteen = () => {
  const [items, setItem] = useState(Course);
  

  return (
    <>
      <div className="container">
        {items.map((item) => {
          return (
            <>
              <CourseProduct key={item.id} item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Fiveteen;
