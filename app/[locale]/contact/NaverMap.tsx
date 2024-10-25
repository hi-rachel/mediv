import { useEffect } from "react";

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(
          36.60803023458623,
          127.46526322990302
        ),
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
        mapDataControl: false,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map("map", mapOptions);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          36.60803023458623,
          127.46526322990302
        ),
        map: map,
      });
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-full" />;
};

export default NaverMap;
