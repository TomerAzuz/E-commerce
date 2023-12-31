import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/products/category/${category.name}`, {
        state: { category: category,
        query: null }
    });
  };

  return (
    <div
      key={category.id}
      className='h-[350px] w-full md:w-[300px] relative overflow-hidden 
                group transition mx-auto'
    >
      <div
        className='w-full h-full flex flex-col items-center justify-center'
        onClick={handleCategoryClick}
      >
        <div className='w-[200px] mx-auto cursor-pointer'>
          <img
            className='max-h-[160px] group:hover:scale-110 transition duration-300'
            src={category.imageUrl}
            alt={category.name}
            loading="lazy"
          />
        </div>
        <h2 className='text-center font-semibold text-xl mt-3 cursor-pointer mx-auto'>
          {category.name}
        </h2>
      </div>
    </div>
  );
};

export default Category;