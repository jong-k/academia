import { useEffect } from "react";
import { Map } from "./styled";

declare global {
  interface Window {
    kakao: any;
  }
}

interface ForumMapProps {
  address: string;
  place: string;
}

export default function ForumMap({ address, place }: ForumMapProps) {
  useEffect(() => {
    const { kakao } = window;
    kakao.maps.load(() => {
      const mapOption = {
        center: new kakao.maps.LatLng(37.56668, 126.978414),
        level: 3,
      };
      const map = new kakao.maps.Map(
        document.getElementById("map") as HTMLDivElement,
        mapOption,
      );
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({
            map,
            position: coords,
          });
          const infoWindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;overflow-wrap: break-word;">${place}</div>`,
          });
          infoWindow.open(map, marker);
          map.setCenter(coords);
        }
      });
    });
  }, [address, place]);

  return <Map id="map" />;
}
