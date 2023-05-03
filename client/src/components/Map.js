import React from 'react'
import Navbar from './Navbar'
export default function Map() {
  const myStyle = {
    backgroundImage:"url('https://wallpapersmug.com/download/1440x900/d0155e/bridge-cityscape-pixel-art.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (

    <div className='map' style={myStyle}>
      <Navbar />
      <div className="container py-20 mx-auto ">
        <div className="flex flex-wrap pl-1">
          <div className="p-4 lg:w-2/4">
            <iframe title="Mumbai" src="https://www.google.com/maps/d/u/0/embed?mid=1k0MjAeJOjxmYg7jq0RMmhRC4dP1UDzQ&ehbc=2E312F" width="500" height="510"></iframe>
          </div>
          <div className="p-4 lg:w-2/4">
            <iframe title="Bangalore" src="https://www.google.com/maps/d/u/0/embed?mid=1qLzD-3GaEAWLfEp85G622zafnpX_oiw&ehbc=2E312F" width="500" height="510"></iframe>
          </div>
          <div className="p-4 lg:w-2/4">
            <iframe title="Chennai" src="https://www.google.com/maps/d/u/0/embed?mid=1t1gAwHDfwEeF9MUI-u9wbH5md9mdb68&ehbc=2E312F" width="500" height="510"></iframe>
          </div>
          <div className="p-4 lg:w-2/4">
            <iframe title="Delhi" src="https://www.google.com/maps/d/u/0/embed?mid=1YVA2NnmaWk2A_MAHqAr2crvSjC7-F7Y&ehbc=2E312F" width="500" height="510"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
