import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Category = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  // ALL Categories
  async function allCategory() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  // Sub Categories
  async function SubCategories(categoryId) {
    try {
      const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories?category=${categoryId}`);
      setSubcategories(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const { isLoading, error, data, isFetching } = useQuery('products', allCategory);


  if (isLoading) {
    return (
      <div className='h-screen bg-blue-700 flex flex-wrap justify-center items-center'>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    await SubCategories(categoryId);
  };

  return (
    <>
      <div className="p-4 ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4 w-[90%] mx-auto">
            {data?.data?.data?.map((category, idx) => (
              <div key={idx} className="w-full">
                <div
                  className="h-[400px] hover:shadow-2xl transition-all duration-500 hover:shadow-blue-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <img className="w-full h-[80%]" src={category.image} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-blue-700 dark:text-white">
                      {category.name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory && (
        <div className="p-4">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-4xl text-center font-bold py-3 text-blue-700">Subcategories</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {subcategories.length > 0 ? (
                subcategories.map((subcategory, idx) => (
                  <div key={idx} className=" hover:shadow-xl hover:shadow-blue-700 transition-all duration-500 flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-black dark:text-gray-500">{subcategory.name}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No subcategories available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;