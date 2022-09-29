import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';



const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [times, setTimes] = useState([]);


   

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    // console.log(activities);

    const handleAddToDetails = (clicked) => {
        const newTime = [...times,clicked]
        setTimes(newTime);
    }


    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:overflow-hidden'>
                <div className='grid lg:col-span-3 lg:grid-cols-3 md:col-span-2 sm:col-span-1 md:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto gap-4 items-center'>           
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToDetails={handleAddToDetails}
                            ></Activity>)
                        }
                </div>
                <div className='grid'>
                       
                    <Details times={times} ></Details>
                </div>
            </div>
        </div>
    );
};

export default Activities;