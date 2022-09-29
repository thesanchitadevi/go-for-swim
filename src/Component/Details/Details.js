import React, { useEffect, useState } from 'react';
import img from '../../image/woman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {   
    const { times } = props;
    
    /* exercise time */
    let time = 0;
    for (const activity of times) {
        time = time + activity.time;

    }

    /* toast */
    const showToastMessage = () => {
        toast.success('Activity Completed !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    /* local storage */
    const [value, setValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("value");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value));
    }, [value]);

    /* get break time */
    const numbers = [10, 20, 30, 40, 50];
   
    const handleClick = event => {
        setValue(event.currentTarget.value);

    }




    return (
        <div className=' p-5 pt-10 shadow-xl mx-3 bg-slate-100  mt-5 rounded-lg '>

            <div className='flex justify-center'>
                <img style={{ borderRadius: '100%', backgroundColor: 'white', height: '52px' }} src={img} alt="" />
                <div className='pl-2'>
                    <h1 className='text-xl font-semibold p-0 m-0'>Sanchita Devi</h1>
                    <h1 className="text-gray-400"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka ,Bangladesh</h1>
                </div>
            </div>

            <div className='flex my-10 justify-center'>
                <div className='px-4 text-center'>
                    <h1 className='text-xl font-semibold'>50<small className='text-gray-400'>kg</small></h1>
                    <h1 className='font-medium'>Weight</h1>
                </div>
                <div className='px-4 text-center'>
                    <h1 className='text-xl font-semibold pb-0.5'>5.3</h1>
                    <h1 className='font-medium'>Height</h1>
                </div>
                <div className='px-4 text-center'>
                    <h1 className='text-xl font-semibold'>22<small className='text-gray-400  pb-1'>years</small></h1>
                    <h1 className='font-medium'>Age</h1>
                </div>
            </div>

            {/* ----------------- Exercise Details */}
            {/* break */}
            <div className='my-8'>
                <h1 className='text-xl font-semibold my-8'>Add a break</h1>                   
                <div className='flex justify-center '>
                    {
                        numbers.map(number => <button
                           
                        onClick={handleClick} value={number} className='font-medium bg-sky-100 hover:bg-blue-500 hover:text-white rounded-full p-2 mr-3'>{number}s</button>)
                    }
                    
                </div>
              
            </div>

            <div>

                {/* Exercise times */}
                <h1 className='mt-8 mb-6 font-semibold text-xl'>Exercise Details</h1>
                <div className='flex mb-5'>
                    <h1 className='text-lg font-medium pr-2'>Exercise Time : <span className='text-center text-gray-600 font-normal pl-5'> {time} min</span></h1>
                    {/* <input className='w-1/2 selection:border-none py-1 rounded text-center' type="text" placeholder='200 seconds' /> */}
                </div>

                {/* break time */}
                <div className='flex my-5'>
                    <h1 className='text-lg font-medium pr-2'>Break Time : <span className='text-center text-gray-600 font-normal pl-5'>{value} min</span></h1>
                    {/* <input className='w-1/2 border-none py-1 rounded text-center' type="text" placeholder='20 seconds' /> */}
                </div>

                {/* toast button */}
                <button onClick={showToastMessage} className='text-center text-lg font-semibold bg-blue-400 hover:bg-blue-600 px-10 py-2 mt-5 rounded-md text-white items-center'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;