import {Marker} from 'react-leaflet';
import  icon from '../assets/icon.svg';
import L from 'leaflet';
export const Mark = ({lat,lng}) => {
  console.log(lat,lng)
    const greenIcon = L.icon({
        iconUrl: icon,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [35, 35],
    });
    return (
        <Marker position={{lat:lat, lng:lng}} icon={greenIcon}/> 
    )
}
