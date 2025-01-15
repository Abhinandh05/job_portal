import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium'>No. 1 Job Portal Website</span>
                <h1 className='text-5xl font-extrabold text-gray-900'>Search, Apply & <br /> Get Your <span className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600'>Dream Jobs</span></h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-xl border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full rounded-l-full p-2 text-gray-700'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-gradient-to-r from-teal-500 to-blue-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-700 text-white">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
