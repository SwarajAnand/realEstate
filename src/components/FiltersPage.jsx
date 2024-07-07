import { useContext, useState } from "react";
import { RealEstate } from "../dataContext/DataContext";

const FiltersPage = () => {
  const {handleSearch, resetSearch} = useContext(RealEstate);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [property, setProperty] = useState("all");

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 xsm:gap-0">
        <h1 className="sm:text-4xl text-2xl font-semibold">Search properties to rent</h1>
        <input
          type="text"
          placeholder="Search Properties"
          className="border outline-none py-2 px-8 rounded-md w-full xsm:w-[300px]"
        />
      </div>

      <div className="sm:flex justify-evenly items-center mt-8">
        <div>
          <p>Enter City</p>
          <input
            type="text"
            className="outline-none py-2 sm:w-[150px] w-full px-2 rounded-md"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <p>Date</p>
          <input
            type="date"
            className="outline-none py-2 sm:w-[150px] w-full px-2 rounded-md"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p>Price</p>
          <select className="py-2 sm:w-[150px] w-full px-2 rounded-md" onChange={(e) => setPrice(e.target.value)}>
            <option value="500">
              Rs. 0 - 500
            </option>
            <option value="1000">Rs. 500 - 1000</option>
            <option value="1500">Rs. 1000 - 1500</option>
            <option value="2000">Rs. 1500 - 2000</option>
            <option value="2500">Rs. 2000 - 2500</option>
            <option value="3000">Rs. 2500 - 3000</option>
          </select>
        </div>
        <div>
          <p>Property Type</p>
          <select className="py-2 sm:w-[150px] w-full px-2 rounded-md" onChange={(e) => setProperty(e.target.value)}>
            <option value="all">All</option>
            <option value="house">House</option>
            <option value="farm-house">Farm houses</option>
            <option value="villa">Villa</option>
            <option value="outdore">Outdore</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-4 sm:mt-0">
        <button className="border border-[#4444dd] py-1 px-3 rounded-md w-full sm:w-[100px]" onClick={() => handleSearch(city, date, price, property)}>Submit</button>
        <button className="border border-[#4444dd] py-1 px-3 rounded-md w-full sm:w-[100px]" onClick={() => resetSearch()}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPage;
