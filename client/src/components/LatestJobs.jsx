import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center mb-10'>
                <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    allJobs.length <= 0 ? <span className='text-center text-gray-500'>No Jobs Available</span> : allJobs?.slice(0, 6).map((job) => (
                        <div key={job._id} className='transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6A38C2]/30 rounded-md'>
                            <LatestJobCards key={job._id} job={job} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestJobs;
