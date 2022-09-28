import React from 'react';
import img from '../../image/woman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

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

            <div className='flex mt-10'>
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
            <div>
                <h1>Add a break</h1>
            </div>

        </div>
    );
};

export default Details;