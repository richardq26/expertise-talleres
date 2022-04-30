// Formula de haversine para hallar 25 más cercanos y luego llevarlo a matrix api
module.exports = (x1, y1, x2, y2) => {
    /// x1 =lat1, y1=long1, x2=lat2, y2=long2
  
    const toRadian = (angle) => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_KM = 6371;
  
    const dLat = distance(x2, x1);
    const dLon = distance(y2, y1);
  
    var lat1 = toRadian(x1);
    var lat2 = toRadian(x2);
  
    // Haversine Formula
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.asin(Math.sqrt(a));
    return RADIUS_OF_EARTH_IN_KM * c;

  };
  