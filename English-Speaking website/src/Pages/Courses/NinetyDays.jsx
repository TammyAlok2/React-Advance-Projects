import React, { useState } from "react";
import CourseProduct from "./CourseProduct";
import Course from "../../Data/90Days";
const NinetyDays = () => {
    const [items,setItem] = useState(Course);
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

export default NinetyDays;
