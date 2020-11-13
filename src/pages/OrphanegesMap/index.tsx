import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer} from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css'
import mapMarker from '../../images/mapMarker.svg';

import { Container, AsideBar } from './styles';

const OrphanegesMap: React.FC = () => {
 const position: LatLngTuple = [-30.0586997,-51.2284127];
  return(
    <Container>
      <AsideBar>
        <header>
          <img src={mapMarker} alt="map marker"/>
          <h1>
            Escolha um orfanato no mapa
          </h1>
          <p>
            Muitas crianças estão
            esperando a sua visita :)
          </p>

        </header>

        <div>
          <strong>Porto Alegre</strong>
          <span>Rio Grande Do Sul</span>
        </div>

      </AsideBar>

      <MapContainer center={position} zoom={15} style={{width: '100%', height: '100%'}}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </MapContainer>

      <Link to="/">
        <FiPlus size={32} color="rgba(0,0,0,.6)" />
      </Link>
    </Container>
  )
}
export default OrphanegesMap;
 