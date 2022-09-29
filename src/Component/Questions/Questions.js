import React from 'react';

const Questions = () => {
    return (
        <div className=' w-10/12 mx-auto my-10'>
            <h1 className='text-2xl font-semibold text-center'>Questions and Answers</h1>
            {/* questios and answers */}
            <div className="collapse mt-10 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-blue-400  peer-checked:bg-blue-500 font-semibold text-lg text-white ">
                    How does React Work?
                </div>
                <div className="collapse-content bg-blue-200 ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse mt-5 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-blue-400  peer-checked:bg-blue-500 font-semibold text-lg text-white ">
                    Differences between state and props.
                </div>
                <div className="collapse-content bg-blue-200 ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse mt-5 rounded-md mb-10">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-blue-400  peer-checked:bg-blue-500 font-semibold text-lg text-white ">
                    What others uses of useEffect except loading data from api?
                </div>
                <div className="collapse-content bg-blue-200 ">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;