import { useState } from 'react';

export default function SearchFilters() {
  const [toogle, setToggle] = useState(false);
  return (
    <section className="bg-gray-800 xl:w-72 ">
      <div className="flex justify-between px-4 py-3 xl:hidden">
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-6 w-6 fill-current text-gray-600 " xmlns="http://www.w3.org/2000/svg">
              <path d="m14.32 12.906 1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 0 1-2.122 2.122l-3-3a1.497 1.497 0 0 1-.437-1.145l-1.096-1.096a8 8 0 1 1 1.414-1.414ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" />
            </svg>
          </div>
          <input
            className="block w-full bg-gray-900 text-white focus:outline-none focus:bg-white focus:text-gray-900 rounded-lg pl-10 pr-4 py-2"
            placeholder="Search by keywords"
          />
        </div>
        <button
          onClick={() => setToggle(!toogle)}
          className="ml-4 inline-flex items-center bg-gray-700 rounded-lg shadow pl-3 pr-4 hover:bg-gray-600 focus:text-gray-900
  focus:outline-none focus:shadow-outline">
          <svg
            className={
              toogle ? 'h-6 w-6 fill-current text-gray-100' : 'h-6 w-6 fill-current text-gray-500'
            }
            viewBox="0 0 18 14"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z" />
          </svg>
          <span className="ml-2 text-white font-medium">Filters</span>
        </button>
      </div>
      <form className={toogle ? 'block' : 'hidden' + 'xl:block'}>
        <div className="lg:flex xl:block ">
          <div className="px-4 py-4 border-t border-gray-900 xl:w-full lg:w-1/3 xl:border-t-0">
            <div className="flex flex-wrap -mx-2 ">
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500 ">Bedrooms</span>
                <select className="mt-1 form-select block w-full shadow text-white focus:bg-gray-600">
                  <option>4</option>
                </select>
              </label>

              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-500 ">Bathrooms</span>
                <select className="mt-1 form-select block w-full shadow text-white  focus:bg-gray-600">
                  <option>2</option>
                </select>
              </label>

              <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:w-full lg:mt-4">
                <span className="text-sm font-semibold text-gray-500 ">Price Range</span>
                <select className="mt-1 form-select block w-full shadow text-white  focus:bg-gray-600">
                  <option>Up to $2,000 /wk</option>
                </select>
              </label>
            </div>
          </div>

          <div className="px-4 py-4 border-t xl:w-full border-gray-900 lg:w-1/3 lg:border-l">
            <span className="block sm:px-2 text-sm font-semibold text-gray-500">Property Type</span>
            <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="house"
                />
                <span className="ml-2 text-white">House</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  type="radio"
                  className="form-radio bg-gray-900  focus:bg-gray-700"
                  name="propertyType"
                  value="apartment"
                />
                <span className="ml-2 text-white">Apartment</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  type="radio"
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  name="propertyType"
                  value="loft"
                />
                <span className="ml-2 text-white">Loft</span>
              </label>
              <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                <input
                  type="radio"
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  name="propertyType"
                  value="townHouse"
                />
                <span className="ml-2 text-white">Townhouse</span>
              </label>
            </div>
          </div>
          <div className="px-4 py-4 border-t xl:w-full border-gray-900 lg:w-1/3 lg:border-l">
            <span className="block text-sm font-semibold text-gray-500">Amenities</span>
            <div className="sm:flex sm:-mx-2 sm:flex-wrap">
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  type="checkbox"
                  name="balcony"
                />
                <span className="ml-2 text-white">Balcony</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="pool"
                />
                <span className="ml-2 text-white">Pool</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="beach"
                />
                <span className="ml-2 text-white">Beach</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="petFriendly"
                />
                <span className="ml-2 text-white">Pet friendly</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="kidFriendly"
                />
                <span className="ml-2 text-white">Kid friendly</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="parking"
                />
                <span className="ml-2 text-white">Parking</span>
              </label>

              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-900  focus:bg-gray-700"
                  name="airConditioning"
                />
                <span className="ml-2 text-white">Air conditioning</span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2  rounded-lg xl:block xl:w-full">
            Update results
          </button>
        </div>
      </form>
    </section>
  );
}

// 32/00
