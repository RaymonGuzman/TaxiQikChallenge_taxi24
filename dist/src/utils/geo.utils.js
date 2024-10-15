"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geo = void 0;
class Geo {
    static calculateDistance(lat1, lon1, lat2, lon2) {
        const lat1Rad = this.degreesToRadians(lat1);
        const lon1Rad = this.degreesToRadians(lon1);
        const lat2Rad = this.degreesToRadians(lat2);
        const lon2Rad = this.degreesToRadians(lon2);
        const deltaLat = lat2Rad - lat1Rad;
        const deltaLon = lon2Rad - lon1Rad;
        const a = Math.sin(deltaLat / 2) ** 2 +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                Math.sin(deltaLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = this.EARTH_RADIUS_KM * c;
        return distance;
    }
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}
exports.Geo = Geo;
Geo.EARTH_RADIUS_KM = 6371;
//# sourceMappingURL=geo.utils.js.map