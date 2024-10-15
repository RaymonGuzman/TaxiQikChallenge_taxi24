export declare class Geo {
    static readonly EARTH_RADIUS_KM = 6371;
    static calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
    static degreesToRadians(degrees: number): number;
}
