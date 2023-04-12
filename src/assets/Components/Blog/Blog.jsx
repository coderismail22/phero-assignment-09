import React from "react";

const Blog = () => {
  return (
    <div className="ml-5 flex flex-col gap-4">
      <div>
        <h1 className="font-bold">Q1: What is React ?</h1>
        <p>
          Ans: React is a declarative, efficient, and flexible JavaScript
          library for building user interfaces or UI components.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Q2: What is Context API ? </h1>
        <p>
          Ans: The Context API is a React structure that enables you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Q3: What is Props Drilling in React?</h1>
        <p>
          Ans: Prop drilling in react is the process of passing data from one
          component via several interconnected components to the component that
          needs it.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Q4: What is React Router ?</h1>
        <p>
          Ans: React Router is a JavaScript framework that lets us handle client
          and server-side routing in React applications.
        </p>
      </div>
    </div>
  );
};

export default Blog;
