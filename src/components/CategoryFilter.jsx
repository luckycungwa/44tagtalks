import React, { useState, useEffect } from "react";
import { Chip } from '@nextui-org/react';
import { getCategories } from '../services/api';

const CategoryFilter = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories([{ id: 'all', name: 'All' }, ...fetchedCategories.docs]);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);
    
    const handleFilter = (categoryId) => {
        console.log("Filtered by:", categoryId);
        // Implement filtering logic here
    };
    
    return (
        <>
            <div className='flex gap-2 flex-wrap justify-center font-light text-sm'>
                {categories.map((category) => (
                <Chip key={category.id} color="default" variant="bordered" size='sm' onClick={() => handleFilter(category.id)} className="!cursor-pointer">
                    {category.name}
                </Chip>
            ))}
            </div>
        </>
    );
}

export default CategoryFilter;
