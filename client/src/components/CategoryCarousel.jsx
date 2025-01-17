import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Button } from './ui/button';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="w-full max-w-xl mx-auto my-20 overflow-hidden relative group">
            <div className="flex space-x-4 animate-scroll group-hover:animate-none w-max">
                {category.concat(category).map((cat, index) => ( // Duplicate items for infinite scrolling
                    <div
                        key={index}
                        className="flex-shrink-0 w-auto p-2"
                    >
                        <Button
                            onClick={() => searchJobHandler(cat)}
                            variant="outline"
                            className="rounded-full"
                        >
                            {cat}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCarousel;
