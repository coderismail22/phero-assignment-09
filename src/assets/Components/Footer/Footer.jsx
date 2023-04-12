import React from "react";
import img from "../../images/Icons/Group 9969.png";
const Footer = () => {
  return (
    <div className="text-center p-10 bg-gray-700 text-white grid grid-cols-1 sm:grid-cols-5 gap-10 sm:text-start mt-auto">
      <div className="text-center flex flex-col gap-2 sm:col-span-2">
        <h1 className="font-bold">CareerHub</h1>
        <p>
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <img src={img} alt="Social Icons" className="w-32 block my-0 mx-auto"/>
      </div>
      <div className="company">
        <h3 className="font-bold">Company</h3>
        <div className="flex flex-col gap-1">
          <a href="#">About Us</a>
          <a href="#">Work</a>
          <a href="#">Latest News</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div className="support ">
      <h3 className="font-bold">Product</h3>
                <div className="flex flex-col gap-1">
                <a href="#">About Us</a>
                <a href="#">Work</a>
                <a href="#">Latest News</a>
                <a href="#">Careers</a>
                </div>
      </div>
      <div className="contact">
      <h3 className="font-bold">Contact</h3>
                <div className="flex flex-col gap-1">
                <a href="#">About Us</a>
                <a href="#">Work</a>
                <a href="#">Latest News</a>
                <a href="#">Careers</a>
                </div>
      </div>
      
    </div>
    
  );
};

export default Footer;
