import React, { useState } from 'react';
import Navbar from './Navbar'
import cityLocations from './cityLocations'

const PropertyForm = () => {
  const [prediction, setPrediction] = useState(null);
  const [rate, setRate] = useState(null);
  const [city, setCity] = useState('Mumbai');
  const [location, setLocation] = useState('');
  const [bhk, setBhk] = useState('');
  const [squareFeet, setSquareFeet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('city', city);
    formData.append('location', location);
    formData.append('bhk', bhk);
    formData.append('squareFeet', squareFeet);
    const response = await fetch('/predict', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    setPrediction(data.prediction);
    setRate(data.rate)
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setLocation('');
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleBhkChange = (e) => {
    setBhk(e.target.value);
  }

  const handleSquareFeetChange = (e) => {
    setSquareFeet(e.target.value);
  }

  return (
    <>
      <Navbar />
      <div className='body bg-[url("https://wallpapercave.com/wp/wp4110653.jpg")] bg-cover bg-center h-screen'>
        <h1 className='text-center pt-14 text-white font-bold'>Get Property prices within just a few clicks!</h1>
        <form onSubmit={handleSubmit} className="text-center mt-5 flex rounded-lg ml-10 mr-10 bg-black bg-opacity-50 p-8 flex-col">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-city">
                Select City
              </label>
            </div>
            <div className="md:w-2/5">
              <select
                value={city}
                name="city"
                onChange={handleCityChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-city"
                required
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-location">
                Select Location
              </label>
            </div>
            <div className="md:w-2/5">
              <select
                value={location}
                name="location"
                onChange={handleLocationChange}
                disabled={!city}
                id="inline-location"
                required
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              >
                <option value="">Select a location</option>
                {cityLocations[city] &&
                  cityLocations[city].map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-bhk">
                Enter Bhk
              </label>
            </div>
            <div className="md:w-2/5">
              <input
                type="number"
                name="bhk"
                value={bhk}
                onChange={handleBhkChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-bhk" 
                min= "1"
                required />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-sqfeet">
                Enter Square feet
              </label>
            </div>
            <div className="md:w-2/5">
              <input
                type="number"
                name="squareFeet"
                value={squareFeet}
                onChange={handleSquareFeetChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-sqfeet" 
                min= "120"
                required />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:transition-bg duration-500">
                Predict Price
              </button>
            </div>
          </div>

          {prediction && rate && <span className='text-dark py-3 border-gray-300 rounded bg-gray-300 text-center font-bold mt-5'>Predicted Price: <span className='text-blue-700'>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(prediction)}</span> | Rate : <span className='text-red-700'>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(rate)}/sqft</span></span>}

        </form>
      </div>
    </>
  );
}

export default PropertyForm;
