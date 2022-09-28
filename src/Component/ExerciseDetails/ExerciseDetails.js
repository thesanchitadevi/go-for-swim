import React from 'react';

const ExerciseDetails = () => {
    return (
        <div>
            <h1 className='mt-8 mb-6 font-semibold text-xl'>Exercise Details</h1>
            <div className='flex mb-5'>
                <h1 className='text-lg font-medium pr-2'>Exercise Time : </h1>
                <input className='w-1/2 selection:border-none py-1 rounded text-center' type="text" placeholder='200 seconds'/>
            </div>
            <div className='flex my-5'>
                <h1 className='text-lg font-medium pr-2'>Break Time : </h1>
                <input className='w-1/2 border-none py-1 rounded text-center' type="text" placeholder='20 seconds'/>
            </div>
            <button className='text-center text-xl font-semibold bg-blue-400 hover:bg-blue-600 px-12 py-2 mt-5 rounded-md text-white'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;