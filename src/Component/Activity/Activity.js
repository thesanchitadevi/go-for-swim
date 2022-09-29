import React from 'react';

const Activity = (props) => {
    // console.log(props.activity);
    const { activity, handleAddToDetails } = props;
    const { name, details, age, img, time } = activity;
    
    
    
    // console.log(times);


    return (
        <div>
            <div className="card w-74 h-100 bg-base-100 shadow-xl">
                <figure className="px-8 pt-10">
                    <img style={{height:'120px', width:'200px'}} src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{details.slice(0,75)+'...'}</p>
                    <p className='font-medium'>Age Limit: {age}</p>
                    <p className='font-medium'>Time Required: {time}min</p>
                    <div className="card-actions">
                        <button onClick={()=>handleAddToDetails(activity)} className="btn bg-blue-500 hover:bg-blue-600 border-none px-16">
                            Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;