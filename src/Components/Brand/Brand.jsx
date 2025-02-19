import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useQuery } from "react-query";

const Brand = () => {

  // get all brands 
  async function allBrands() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }


  const { isLoading, data } = useQuery('brands', allBrands);

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


  return (
    <>
      <div className="p-4 ">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <h1 className="text-4xl text-center py-10 text-blue-700 font-bold">All Brands</h1>
          <div className="grid grid-cols-4 gap-4 mb-4 w-[90%] mx-auto">
            {data?.data?.data?.map((brand, idx) => (
              <div key={idx} className="w-full">
                <div
                  className="h-[300px] hover:shadow-2xl transition-all duration-500 hover:shadow-blue-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <img className="w-full h-[80%]" src={brand.image} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl pb-5 font-bold tracking-tight text-center text-black dark:text-white">
                      {brand.name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;