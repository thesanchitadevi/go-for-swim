import React from 'react';
import logo from '../../image/swimmer.png'

const Title = () => {
    return (
        <div className='flex w-10/12 mt-8 mx-auto justify-center'>
            <img style={{height:'35px'}} src={logo} alt="" />
            <h1 className=' text-3xl text-sky-500 font-semibold px-3'>Go-For-Swim</h1>
        </div>
    );
};

export default Title;