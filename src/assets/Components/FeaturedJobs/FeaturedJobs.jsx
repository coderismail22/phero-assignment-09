import React, { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const FeaturedJobs = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  });

  const [showAll,setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="px-20">
      <div>
        <h1 className="font-bold text-3xl text-center">Featured Jobs</h1>
        <p className="text-sm text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
        {cards.slice(0, showAll ? 6 : 4).map((card) => (
          <FeaturedJobsCard key={card.id} card={card}></FeaturedJobsCard>
        ))}
      </div>
      {
        <button onClick={handleShowAll} className="bg-gradient-to-r from-purple-400 to-pink-600 btn btn-md w-36 btn-active btn-secondary border-none text-md my-5 mx-auto block">See More</button>
      }
    </div>
  );
};

export default FeaturedJobs;
