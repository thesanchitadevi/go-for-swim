import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Title from '../Title/Title';

const Activities = () => {
    const [activities, setActivities] = useState([]);


    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    // console.log(activities);

    return (
        <div>
            <Title></Title>
            <h1 className='w-10/12 font-semibold text-xl mx-auto mt-8'>Select today’s exercise</h1>
            <div className='grid grid-cols-4 border'>
                <div className='grid col-span-3 grid-cols-3  w-10/12 mx-auto gap-4'>
                    
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
                <div className='grid col-span-1'>
                    <h1 className='text-4xl text-orange-400 font-bold'>activity count</h1>
                </div>
            </div>
        </div>
    );
};

export default Activities;