import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
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
            <div className='grid grid-cols-4 '>
                <div className='grid col-span-3 grid-cols-3  w-10/12 mx-auto gap-4'>           
                    <div className='grid col-span-3 '>
                        <Title></Title>
                        <h1 className='w-10/12 font-semibold text-xl mt-8'>Select today’s exercise</h1>
                    </div>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
                <div className='grid'>
                    <Details></Details>
                </div>
            </div>
        </div>
    );
};

export default Activities;