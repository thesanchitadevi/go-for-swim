import React from 'react';
import Exercises from '../Exercises/Exercises';
import Title from '../Title/Title';

const Activity = () => {
    return (
        <div className='my-10'>
            <Title></Title>
            <div className='grid grid-cols-4 border border-red-600'>
                <div className='grid col-span-3 grid-cols-3 border border-blue-600 w-10/12 mx-auto'>
                    <Exercises></Exercises>
                </div>
                <div className='grid col-span-1'>
                    <h1 className='text-4xl text-orange-400 font-bold'>activity count</h1>
                </div>
            </div>
        </div>
    );
};

export default Activity;