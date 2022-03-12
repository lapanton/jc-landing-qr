import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const Ymaps = () => (
  <YMaps>
    <div style={{ filter: "invert(100%)" }}>
      <Map defaultState={{ center: [55.681712, 37.516449], zoom: 15}} width="100%" height="400px" >
        <Placemark geometry={[55.681712, 37.516449]} />
      </Map>
    </div>
  </YMaps>
);