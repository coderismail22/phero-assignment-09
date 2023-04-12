import React from "react";
import { MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const FeaturedJobsCard = ({card}) => {
    const {id,img,title,company,type_1,type_2,location,salary} = card;
  return (
    <div className="mt-5 border border-slate-300 rounded-md p-4 leading-10 ">
        <img src={img} alt="" />
        <h1 className="font-bold text-sm mt-3">{title}</h1>
        <p className="text-sm mt-1">{company}</p>
        <div className="job-type ">
        <span className="text-pink-600 font-bold text-xs border-2 border-pink-600 mr-2 rounded-md px-2 py-1">{type_1}</span>
        <span className="text-pink-600 font-bold text-xs border-2 border-pink-600 mr-2 rounded-md px-2 py-1">{type_2}</span>
        </div>
        <p className="text-sm flex items-center"><MapPinIcon className="w-5 text-pink-500 inline-block"/> {location}</p>
        <p className="text-sm"><CurrencyDollarIcon className="w-5 text-pink-500 inline-block whitespace-nowrap"/>{salary}</p>
<Link to={`/jobdetails/${id}`}><button className="bg-gradient-to-r from-purple-400 to-pink-600 btn btn-sm btn-active btn-secondary border-none text-xs"> View Details</button></Link>
    </div>
  );
};

export default FeaturedJobsCard;
