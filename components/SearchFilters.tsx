export default function SearchFilters() {
  return (
    <section className="bg-gray-800">
      <div className="flex justify-between px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-6 w-6 fill-current text-gray-600 " xmlns="http://www.w3.org/2000/svg">
              <path d="m14.32 12.906 1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 0 1-2.122 2.122l-3-3a1.497 1.497 0 0 1-.437-1.145l-1.096-1.096a8 8 0 1 1 1.414-1.414ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" />
            </svg>
          </div>
          <input
            className="bg-gray-900 text-white focus:outline-none focus:bg-white focus:text-gray-900 rounded-lg pl-10 pr-4 py-2"
            placeholder="Search by keywords"
          />
        </div>
        <button
          className="inline-flex items-center bg-gray-700 rounded-lg shadow pl-3 pr-4 hover:bg-gray-600 focus:text-gray-900
  focus:outline-none focus:shadow-outline">
          <svg
            className="h-6 w-6 fill-current text-gray-500"
            viewBox="0 0 18 14"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z" />
          </svg>
          <span className="ml-2 text-white font-medium">Filters</span>
        </button>
      </div>
      <form>
        <fieldset className="px-4">
          <div className="flex -mx-2">
            <label className="block w-1/2 px-2">
              <span className="text-sm font-semibold text-gray-500 ">Bedrooms</span>
              <select className="form-select block w-full">
                <option>4</option>
              </select>
            </label>
            <label className="block w-1/2 px-2">
              <span className="text-sm font-semibold text-gray-500 ">Bathrooms</span>
              <select className="form-select block w-full">
                <option>2</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <span>Price Range</span>
              <select className="form-select">
                <option>Up to $2,000 /wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <div>
          <fieldset>
            <legend>Property Type</legend>
            <label>
              <input className="form-radio" type="radio" name="propertyType" value="house" />
              House
            </label>
            <label>
              <input type="radio" className="form-radio" name="propertyType" value="apartment" />
              Apartment
            </label>
            <label>
              <input type="radio" className="form-radio" name="propertyType" value="loft" />
              Loft
            </label>
            <label>
              <input type="radio" className="form-radio" name="propertyType" value="townHouse" />
              Townhouse
            </label>
          </fieldset>
          <fieldset>
            <legend>Amenities</legend>
            <label>
              <input className="form-checkbox" type="checkbox" name="balcony" />
              Balcony
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="airConditioning" />
              Air conditioning
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="pool" />
              Pool
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="beach" />
              Beach
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="petFriendly" />
              Pet friendly
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="kidFriendly" />
              Kid friendly
            </label>
            <label>
              <input type="checkbox" className="form-checkbox" name="parking" />
              Parking
            </label>
          </fieldset>
          <div>
            <button>Update results</button>
          </div>
        </div>
      </form>
    </section>
  );
}
