import React from 'react';
import Person from '../../images/All Images/person.png';

const Featured = () => {
    return (
        <div className='px-20 text-center p-2 grid place-items-center sm:grid-cols-2 sm:text-left'>
            <div>
                <h1 className='font-bold text-3xl mb-4'>One Step <br/> Closer To Your <br/> <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Dream Job</span> </h1>

                <p>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <button className="mt-4 bg-gradient-to-r from-purple-400 to-pink-600 btn btn-sm btn-active btn-secondary border-none">Get Started</button>

            </div>
            <div>
                <img className='w-full' src={Person} />
            </div>
        </div>
    );
};

export default Featured;