export class Geo {
  static readonly EARTH_RADIUS_KM = 6371; // Earth's radius in kilometers

  /**
   * Calculates the distance between two points using the Haversine formula.
   * @param lat1 Latitude of the starting point in degrees.
   * @param lon1 Longitude of the starting point in degrees.
   * @param lat2 Latitude of the destination point in degrees.
   * @param lon2 Longitude of the destination point in degrees.
   * @returns Distance between the two points in kilometers.
   */
  static calculateDistance(
    lat1: number | undefined,
    lon1: number | undefined,
    lat2: number | undefined,
    lon2: number | undefined
  ): number {

    if (lat1 === undefined || lon1 === undefined || lat2 === undefined || lon2 === undefined) {
      return NaN; // or throw new Error('Coordinates cannot be undefined');
    }

    // Convert degrees to radians
    const lat1Rad = this.degreesToRadians(lat1);
    const lon1Rad = this.degreesToRadians(lon1);
    const lat2Rad = this.degreesToRadians(lat2);
    const lon2Rad = this.degreesToRadians(lon2);

    // Latitude and longitude differences
    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;

    // Haversine formula
    const a = Math.sin(deltaLat / 2) ** 2 +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) *
              Math.sin(deltaLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance in kilometers
    const distance = this.EARTH_RADIUS_KM * c;
    return distance;
  }

  /**
   * Converts degrees to radians.
   * @param degrees Degrees.
   * @returns Radians.
   */
  static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}