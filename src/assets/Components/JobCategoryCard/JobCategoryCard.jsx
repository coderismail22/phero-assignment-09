import React, { useState } from "react";

const JobCategoryCard = ({ card }) => {
  const { id, job_title, availability, img } = card;
  return (
      <div className="bg-slate-300 p-3 m-5 w-48 rounded-md">
        <img src={img} alt="job-img" />
        <div>
            <h3 className="font-bold text-sm ">{job_title}</h3>
            <h5 className="text-sm">{availability}</h5>
        </div>
      </div>
  );
};

export default JobCategoryCard;
