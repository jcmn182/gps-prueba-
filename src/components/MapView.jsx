import {MapContainer,TileLayer} from 'react-leaflet';
import  'leaflet/dist/leaflet.css';
import { Mark } from './Mark.jsx';
import {useState,useEffect} from 'react';

export const MapView = () => {
const [coordinates, setCoordinates] = useState({lat:'',lng:''});
const [loading, setLoading] = useState(false)

    const {lat,lng} = coordinates
      
    useEffect(() => {

      const getLocation = () => {
        if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser');
        } 
        else {
          navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({lat:position.coords.latitude,lng:position.coords.longitude})  
          setLoading(true)
          }, () => {
          console.log('Unable to retrieve your location');
          });
        }
      }

      getLocation()

      
      }, [])

    return (
        <>
        { loading?<>{console.log(coordinates)}
        <MapContainer center={{lat:lat, lng:lng}} zoom={13} scrollWheelZoom={false}>>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Mark lat={lat} lng={lng}/>
        </MapContainer></>:<p>Something is wrong</p>}
        </>
    )
}
