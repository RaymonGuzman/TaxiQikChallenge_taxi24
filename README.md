# TaxiQikChallenge

## Table of contents  
1. [Instalación](#Instalación)
    1. [Configuración del ambiente](#Configuración-del-ambiente) 
3. [Uso de la API](#Uso-de-la-API)  



## Instalación


#### Lo primero que vamos a hacer es verificar si tenemos docker y docker compose instalado. Para esto podemos ejecutar el siguiente comando
```bash
docker -v
# Docker version 27.3.1, build ce12230
```


```bash
docker compose version
# Docker Compose version v2.29.7
```





### Configuración del ambiente
##### Lo siguiente es configurar el .env, para esto ejecutarmos el siguiente comando dentro de la carpeta del proyecto

```bash
cp .env.example .env
```

#### A esto le debemos agregar los mismo datos para la conexión que hemos colocado en nuestro Docker Compose .yml
#este por ejemplo es el que utilizo yo DATABASE_URL="postgresql://postgres:password@qik_postgres.postgres:5432/qik_taxidb?schema=public"

#### Dependiendo del sistema operativo que poseas, será necesario que le des permiso de ejecución al setup script

```bash
chmod +x ./docker/service/setup.sh
```
--

#### Ahora procederemos a ejecutar los servicios con Docker, para esto ejecutamos el siguiente comando:

```bash
docker compose up -d --build
```

#### Luego de que se construyan los contenederos y los mismos estén arriba, podemos verlo con el siguiente comando:
```bash
docker ps
```

#### Podemos acceder dentro del contenedor con el siguiente comando:
```bash
docker exec -it <Nombre del Contenedor> ash
```

#Luego en la carpeta raíz del proyecto ejecutamos:
```bash
yarn install o npm install
```
--


### Uso de la API

#### Puedes testear la API usando POSTMAN, también puedes testearla a través de la consola con el comando curl, a continuación algunos ejemplos:
##### Para conductores
Drivers - GET 

#Para obtener todos los conductores
/drivers
curl --location 'http://localhost:3000/drivers'

#Para obtener un conducto en específico por su id
/drivers/:id
curl --location 'http://localhost:3000/drivers/1'

#Para obtener los conductores por su estado
/drivers?status=(PENDING, ACTIVE, INACTIVE, ONLINE, BUSY)
curl --location 'http://localhost:3000/drivers?status=PENDING'


# A continuación el endpoint para crear un coonductor
/drivers - POST
curl --location 'http://localhost:3000/drivers' \
--header 'Content-Type: application/json' \
--data '{
      "firstName": "Conductor 10",
      "lastName": "Apellido 10",
      "email": "conductor10@example.com",
      "phone": "1849320990",
      "companyId": 1,
      "document": "0011982845",
      "documentType": "C",
      "currentLat": 18.461638480046954, 
      "currentLon": -69.93607038842656,
      "vehicleId": 1
}'

--

Passenger
/passenger - GET

#Para obtener todos los pasajeros
curl --location 'http://localhost:3000/passengers'

#Para obtener un pasajero por su id
/passengers/:id
curl --location 'http://localhost:3000/passengers/1'

#Para obtener los conductores cerca de ese pasajero, en este caso, cerca de esa longitud y latitud
/passengers/trip?latitude=(longitude)&longitude=(latitude)&distance=(distance in km)
curl --location 'http://localhost:3000/passengers/trip?latitude=18.480023716974017&longitude=-69.89138258140852&distance=3'

--

#Para obtener todos los viajes
Trips
/trips - GET
/trips?status=REQUESTED,IN_PROGRESS
curl --location 'http://localhost:3000/trips?status=REQUESTED,IN_PROGRESS'

#Método POST con el body para crear un viaje, en el postman collection se debe de seleccionar el content-type: Application/json en la parte de headers
/trips/request - POST
curl --location 'http://localhost:3000/trips/request' \
--header 'Content-Type: application/json' \
--data '{
    "driverId": 1,
    "passengerId": 2,
    "fromLatitude": 18.45256586581231,
    "fromLongitude": -69.96985064150694,
    "toLatitude": 18.463101265411417,
    "toLongitude": -69.96723786741612
}'

# Para actualizar un viaje
/trips - PUT
/trips/:id/:status=(REQUESTED, IN_PROGRESS, COMPLETED, CANCELLED)
curl --location --request PUT 'http://localhost:3000/trips/2/COMPLETED'
