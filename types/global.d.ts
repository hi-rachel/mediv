declare global {
  interface Window {
    closeNaverMapInfoWindow: (() => void) | null;
    naver: {
      maps: {
        Map: new (
          element: string | HTMLElement,
          options?: naver.maps.MapOptions
        ) => naver.maps.Map;
        LatLng: new (lat: number, lng: number) => naver.maps.LatLng;
        Marker: new (options?: naver.maps.MarkerOptions) => naver.maps.Marker;
        InfoWindow: new (
          options?: naver.maps.InfoWindowOptions
        ) => naver.maps.InfoWindow;
        Position: {
          TOP_RIGHT: any;
        };
        Event: {
          addListener: (
            instance: object,
            eventName: string,
            listener: (...args: any[]) => void
          ) => void;
        };
        Size: new (width: number, height: number) => naver.maps.Size;
      };
    };
  }
}

export {};
