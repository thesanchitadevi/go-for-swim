import React from 'react';
import logo from '../../image/swimmer.png'

const Title = () => {
    return (
        <div className='flex w-10/12 mt-8 mx-auto'>
            <img style={{height:'40px'}} src={logo} alt="" />
            <h1 className='text-4xl text-sky-500 font-semibold px-5'>Go-For-Swim</h1>
        </div>
    );
};

export default Title;