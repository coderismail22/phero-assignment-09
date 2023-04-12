import React from "react";
import { useEffect, useState } from 'react';
import JobCategoryCards from "../JobCategoryCard/JobCategoryCard";

const JobCategory = () => {
  const [cards,Setcard] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => Setcard(data));
  });
  return (
    <div className="px-20 mt-10 text-center">
      <div>
        <h1 className="font-bold text-3xl">Job Category List</h1>
        <p className="text-sm">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="cards flex flex-col justify-evenly items-center text-center item sm:flex-row ">
        {
            cards.map(card=><JobCategoryCards
            key={card.id}
            card={card}
            ></JobCategoryCards>)
        }
      </div>
    </div>
  );
};

export default JobCategory;
