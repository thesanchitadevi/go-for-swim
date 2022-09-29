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
                <div className="collapse-content bg-blue-200 font-normal text-md">
                    <p className='pt-5'>React is a JavaScript library. <br />
                        It's allow developers to easily create fast user interfaces for websites and applications alike.  React implements a virtual DOM that is basically a DOM tree representation in JavaScript.</p>
                </div>
            </div>
            <div className="collapse mt-5 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-blue-400  peer-checked:bg-blue-500 font-semibold text-lg text-white ">
                    Differences between state and props.
                </div>
                <div className="collapse-content bg-blue-200 font-normal text-md">
                    <p className='pt-5'><span className='font-semibold text-lg'>State : </span> The state is a local data storage that is local to the component only and cannot be passed to other components. <br />
                        State is mutable. The state is an updatable. </p>
                    <p className='pt-5'><span className='font-semibold text-lg'>Props : </span> Props are used to pass data from one component to another. <br />
                        Props are immutable. Props are read-only components.</p>
                </div>
            </div>
            <div className="collapse mt-5 rounded-md mb-10">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-blue-400  peer-checked:bg-blue-500 font-semibold text-lg text-white ">
                    What are some other use cases of useEffect except loading data from api?
                </div>
                <div className="collapse-content bg-blue-200 font-normal text-md">
                    <p className='pt-5'>1. Validating an input while the input is being stored in a state and the validation takes place every time the input changes, giving immediate feedback to the user is a great applications of <span className='text-blue-600'>useEffect</span>. <br />
                        2. We will need a state to save input and a filter implementation inside <span className='text-blue-600'>useEffect</span> that will triggered when input is changed</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;