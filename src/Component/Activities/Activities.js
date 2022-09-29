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
            <div className='grid grid-cols-4 '>
                <div className='grid col-span-3 grid-cols-3  w-10/12 mx-auto gap-4'>           
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToDetails={handleAddToDetails}
                            ></Activity>)
                        }
                </div>
                <div className='grid'>
                       
                    <Details times={times}></Details>
                </div>
            </div>
        </div>
    );
};

export default Activities;