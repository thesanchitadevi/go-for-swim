import React from 'react';
import img from '../../image/woman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const Details = () => {
    return (
        <div className='bg-gray-100 p-5'>

            <div className='flex'>
                <img style={{ borderRadius: '100%', backgroundColor: 'white' ,height:'52px'}} src={img} alt="" />
                <div className='pl-2'>
                    <h1 className='text-xl font-semibold p-0 m-0'>Sanchita Devi</h1>
                    <h1 className="text-gray-400"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka ,Bangladesh</h1>
                </div>
            </div>

            <div className='flex my-10 '>
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

            {/* break */}
            <div className='my-8'>
                <h1 className='text-xl font-semibold my-8'>Add a break</h1>
                <div className='flex text-center '>
                    <button className='font-medium bg-sky-100 rounded-full p-2 mr-3'>10s</button>
                    <button className='font-medium bg-sky-100 rounded-full p-2 mr-3'>20s</button>
                    <button className='font-medium bg-sky-100 rounded-full p-2 mr-3'>30s</button>
                    <button className='font-medium bg-sky-100 rounded-full p-2 mr-3'>40s</button>
                    <button className='font-medium bg-sky-100 rounded-full p-2'>50s</button>
                </div>
            </div>

            {/* Exercise Details */}
            <ExerciseDetails></ExerciseDetails>
        </div>
    );
};

export default Details;