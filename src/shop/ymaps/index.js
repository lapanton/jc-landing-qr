import { YMaps, Map, Placemark } from 'react-yandex-maps';
// https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Placemark.html
export const Ymaps = () => (
  <YMaps>
    <div style={{ filter: "invert(100%)", overflow: "hidden" }}>
      <Map defaultState={{ center: [55.681712, 37.516449], zoom: 15}} width="100%" height="400px" >
        <Placemark
          geometry={[55.681712, 37.516449]}
          properties={{iconCaption: "JewelCocktail"}}
        />
      </Map>
    </div>
  </YMaps>
);