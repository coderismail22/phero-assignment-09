import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const dynamicId = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/jobDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id == dynamicId.id);
        setJob(jobData);
      });
  }, []);
  return (
    <div className="p-20">
      <div className="container flex flex-col md:flex-row md:justify-center items-center  gap-5 text-sm">
        <div>
          <h1>
            <span className="font-bold">Job Description:</span>
            {job.job_desc}
          </h1>
          <h1 className="mt-3">
            <span className="font-bold">Job Responsibility:</span>
            {job.job_responsibility}
          </h1>
          <h1 className="mt-3">
            <span className="font-bold">Educational Requirements:</span>
            {job.education}
          </h1>
          <h1 className="mt-3">
            <span className="font-bold">Experiences:</span>
            {job.experience}
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="p-5 max-w-sm max-h-sm bg-pink-300 rounded-md">
            <h1 className="font-bold ">Job Details</h1>
            <hr className="w-44 bg-gray-700" />
            <h1>Salary:{job.salary}</h1>
            <h1>Job Title:{job.job_title}</h1>
            <h1 className="font-bold">Contact Information</h1>
            <hr className="w-44 bg-gray-700" />
            <h1>Phone:{job.phone}</h1>
            <h1>Email:{job.email}</h1>
            <h1>Address:{job.address}</h1>
          </div>
          <div>
            <Link to='/applied'>
              <button className="bg-gradient-to-r from-purple-400 to-pink-600 btn btn-sm btn-active btn-secondary border-none text-xs w-full mt-2">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
