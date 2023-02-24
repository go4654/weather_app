import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const location = (pos) => {
    setLat(pos.coords.latitude);
    setLon(pos.coords.longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
