"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const currentDate = new Date();
    const plus1hourDate = new Date(currentDate.getTime() + (60 * 60 * 1000));
    await prisma.brand.createMany({
        data: [
            {
                logo: "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
                name: "Abarth"
            },
            {
                logo: "https://www.car-logos.org/wp-content/uploads/2011/09/audi1.png",
                name: "Audi"
            },
            {
                logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ford1.png",
                name: "Ford"
            },
        ],
    });
    await prisma.company.createMany({
        data: [
            {
                name: "Transporte Ejecutivos S.A.",
                rnc: 3456789,
                status: "ACTIVE",
                address: "Av. Winston Churchill, Santo Domingo, República Dominicana",
            },
            {
                name: "Taxi Rapido S.R.L.",
                rnc: 3456790,
                status: "ACTIVE",
                address: "Calle 50, Bella Vista, Santo Domingo, República Dominicana",
            },
        ],
    });
    const passenger1 = await prisma.passenger.create({
        data: {
            firstName: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            phone: "8091234567",
            document: "00123456789",
            documentType: "C",
        },
    });
    const passenger2 = await prisma.passenger.create({
        data: {
            firstName: "Ana",
            lastName: "Sánchez",
            email: "ana.sanchez@example.com",
            phone: "8097654321",
            document: "98765432101",
            documentType: "P",
        },
    });
    await prisma.driver.createMany({
        data: [
            {
                firstName: "Carlos",
                lastName: "Gómez",
                email: "carlos.gomez@transportes.com",
                phone: "8091122334",
                companyId: 1,
                document: "00111223344",
                documentType: "C",
                status: "ACTIVE",
                currentLat: 18.460849695987598,
                currentLon: -69.920673029112,
                vehicleId: 1,
            },
            {
                firstName: "Pedro",
                lastName: "Martínez",
                email: "pedro.martinez@taxirapido.com",
                phone: "8092233445",
                companyId: 2,
                document: "00222334455",
                documentType: "C",
                status: "ACTIVE",
                currentLat: 18.482678066040734,
                currentLon: -69.93907456345791,
                vehicleId: 2,
            },
            {
                firstName: "Luis",
                lastName: "Rodríguez",
                email: "luis.rodriguez@transportes.com",
                phone: "8093344556",
                companyId: 1,
                document: "00333445566",
                documentType: "C",
                status: "ACTIVE",
                currentLat: 18.461638480046954,
                currentLon: -69.93607038842656,
                vehicleId: 3,
            },
            {
                firstName: "Jorge",
                lastName: "Ramírez",
                email: "jorge.ramirez@taxirapido.com",
                phone: "8094455667",
                companyId: 2,
                document: "00444556677",
                documentType: "C",
                status: "INACTIVE",
                currentLat: 0,
                currentLon: 0,
                vehicleId: 4,
            },
        ],
    });
    await prisma.vehicle.createMany({
        data: [
            {
                driverId: 1,
                color: "Rojo",
                brandId: 1,
                vin: "VIN123456781",
                year: 2021,
            },
            {
                driverId: 2,
                color: "Azul",
                brandId: 2,
                vin: "VIN10006782",
                year: 2017,
            },
            {
                driverId: 3,
                color: "Blanco",
                brandId: 3,
                vin: "VIN123456783",
                year: 2019,
            },
            {
                driverId: 4,
                color: "Negro",
                brandId: 2,
                vin: "VIN10006784",
                year: 2023,
            },
        ],
    });
    const trip1 = await prisma.trip.create({
        data: {
            driverId: 1,
            passengerId: passenger1.id,
            status: "COMPLETED",
            startedAt: currentDate,
            endedAt: plus1hourDate,
            fromLatitude: 18.45243530963858,
            fromLongitude: -69.96983455812554,
            toLatitude: 18.46358726813364,
            toLongitude: -69.96861002974642,
        },
    });
    const trip2 = await prisma.trip.create({
        data: {
            driverId: 1,
            passengerId: passenger1.id,
            status: "CANCELLED",
            cancelledAt: currentDate,
            fromLatitude: 18.45243530963858,
            fromLongitude: -69.96983455812554,
            toLatitude: 18.46358726813364,
            toLongitude: -69.96861002974642,
        },
    });
    const trip3 = await prisma.trip.create({
        data: {
            driverId: 1,
            passengerId: passenger1.id,
            status: "REQUESTED",
            fromLatitude: 18.5000,
            fromLongitude: -69.9400,
            toLatitude: 18.5100,
            toLongitude: -69.9300,
        },
    });
    const trip4 = await prisma.trip.create({
        data: {
            driverId: 2,
            passengerId: passenger2.id,
            status: "IN_PROGRESS",
            startedAt: currentDate,
            fromLatitude: 18.5200,
            fromLongitude: -69.9500,
            toLatitude: 18.5300,
            toLongitude: -69.9600,
        },
    });
    await prisma.invoice.create({
        data: {
            tripId: trip1.id,
            amount: 150.0,
            taxes: 27.0,
            status: "PAID",
            paymentMethod: "CASH",
        },
    });
    await prisma.invoice.create({
        data: {
            tripId: trip3.id,
            amount: 300.0,
            taxes: 54.0,
            status: "PENDING",
            paymentMethod: "CASH",
        },
    });
    await prisma.invoice.create({
        data: {
            tripId: trip4.id,
            amount: 250.0,
            taxes: 45.0,
            status: "PENDING",
            paymentMethod: "CARD",
        },
    });
    await prisma.invoice.create({
        data: {
            tripId: trip2.id,
            amount: 200.0,
            taxes: 36.0,
            status: "CANCELLED",
            paymentMethod: "CARD",
        },
    });
    console.log("Datos de migración creados exitosamente!");
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map