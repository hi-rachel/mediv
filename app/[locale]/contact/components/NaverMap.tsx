import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

const NaverMap = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();
  // 사용자 언어 확인 (예: 'ko' - 한국어, 'en' - 영어) -> 언어에 따른 길이 변경을 css 스타일에 반영
  const isKorean = locale === "ko";

  useEffect(() => {
    const initMap = () => {
      const locationName = "메디브"; // 검색어로 사용할 장소 이름

      const mapOptions = {
        center: new window.naver.maps.LatLng(
          36.63677911426229,
          127.32339145208388
        ),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
        mapTypeControl: true,
        mapDataControl: false,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map("map", mapOptions);

      const marker = new window.naver.maps.Marker({
        position: mapOptions.center,
        map: map,
      });

      const contentString = `
        <div class="relative p-4 bg-white rounded-lg shadow-lg max-w-xs text-center">
          <button class="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100" onclick="window.closeNaverMapInfoWindow?.()">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h3 class="text-lg font-semibold mb-2">${t("companyName")}</h3>
          <p class="text-sm text-gray-600 mb-4">${t("address")}</p>
          <div class="flex justify-center gap-2">
            <a href="https://map.naver.com/v5/directions" target="_blank" rel="noopener noreferrer" class="flex ${
              isKorean ? "justify-around" : "justify-center"
            } ${
        isKorean ? "min-w-[100px]" : "auto"
      } items-center gap-2 px-4 py-2 rounded-md text-sm bg-green-500 text-white hover:bg-green-600 font-medium">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
              </svg>
              ${t("findDirections")}
            </a>
            <a href="https://map.naver.com/v5/search/${encodeURIComponent(
              locationName
            )}" target="_blank" rel="noopener noreferrer" class="flex ${
        isKorean ? "justify-around" : "justify-center"
      } ${
        isKorean ? "min-w-[100px]" : "auto"
      } items-center gap-2 px-4 py-2 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-600 font-medium">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.3-4.3"></path>
              </svg>
              ${t("searchMap")}
            </a>
          </div>
        </div>
      `;

      const infowindow = new window.naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        backgroundColor: "transparent",
        borderColor: "transparent",
        anchorSize: new window.naver.maps.Size(0, 0),
      });

      window.closeNaverMapInfoWindow = () => {
        infowindow.close();
      };

      window.naver.maps.Event.addListener(marker, "click", function () {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });

      window.naver.maps.Event.addListener(map, "resize", () => {
        map.setCenter(mapOptions.center);
      });
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      window.closeNaverMapInfoWindow = null;
    };
  }, [t]);

  return <div id="map" className="w-full h-full" />;
};

export default NaverMap;
