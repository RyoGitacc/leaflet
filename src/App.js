
import './App.css';
import {MapContainer,TileLayer,Circle,Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useRef, useState } from 'react';
import Form from './Form';
import PostOutage from './PostOutage';
import axios from 'axios';

const circleCenter = [43.653908,-79.384293]; // Latitude and Longitude
const circleOptions = {
  color: 'red', // Color of the circle border
  fillColor: 'blue', // Fill color of the circle
  fillOpacity: 0.5, // Opacity of the fill color
  radius: 2000, // Radius of the circle in meters
};

function App() {
  const mapRef=useRef();
  const [areas, setAreas]=useState([]);


  const fly=async(e)=>{
    e.preventDefault();
    const address = e.target[0].value;
    try{
      const res = await axios.get(`https://geocode.maps.co/search?q=${address}`);
      const {lat,lon} = res.data[0];
      if(mapRef.current){
      mapRef.current.flyTo([lat,lon],13)
    }
    }catch(e){
      console.log(e);
    }
  }

  const addOutageArea=async(e)=>{
    e.preventDefault();
    const radius=parseInt(e.target[1].value);
    const desc=e.target[2].value;
    const address = e.target[0].value;
    try{
      const res = await axios.get(`https://geocode.maps.co/search?q=${address}`);
      const {lat,lon} = res.data[0];
      const circle={
        center:[lat,lon],
        options:{
          color: 'green', 
          fillColor: 'green', 
          fillOpacity: 0.5,
          radius: radius,
        },
        desc,
      }
       setAreas(curr=>[...curr,circle]);
       if(mapRef.current){
        mapRef.current.flyTo([lat,lon],15)
      }
    }catch(e){
      console.log(e);
    }
    
  }
 
  
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} ref={mapRef}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   {areas.map((a,index)=>(
    <Circle center={a.center} {...a.options} key={index}>
     <Popup>
      <div>
        {a.desc}
      </div>
     </Popup>
   </Circle>
   ))}
   <Form fly={fly}/>
   <PostOutage addOutageArea={addOutageArea}/>
</MapContainer>
  );
}

export default App;
