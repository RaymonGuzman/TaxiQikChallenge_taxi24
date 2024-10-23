# TaxiQikChallenge

## Table of contents  
- [Instalación](#Instalación)
    * [Configuración del ambiente](#Configuración-del-ambiente) 
- [Uso de la API](#Uso-de-la-API)
    * [Drivers](#Drivers)
    * [Passenger](#Passenger)
    * [Trips](#Trips)
    * [Receipts](#Receipts)
      



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
```bash
DATABASE_URL="postgresql://postgres:password@qik_postgres.postgres:5432/qik_taxidb?schema=public"
```

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

#### Luego en la carpeta raíz del proyecto ejecutamos:
```bash
yarn install o npm install
```


## Uso de la API

##### Puedes testear la API usando POSTMAN, también puedes testearla a través de la consola con el comando curl, a continuación algunos ejemplos:
##### Para conductores

### Drivers

###### Drivers - GET
###### /drivers
Para obtener todos los conductores
```bash
curl --location 'http://localhost:3000/drivers'
```
###### Drivers - GET
###### /drivers/:id
##### Para obtener un conducto en específico por su id
```bash
curl --location 'http://localhost:3000/drivers/1'
```

###### Drivers - GET
##### /drivers?status=(PENDING, ACTIVE, INACTIVE, ONLINE, BUSY)
#### Para obtener los conductores por su estado
```bash
curl --location 'http://localhost:3000/drivers?status=PENDING'
```



###### Drivers - POST
###### /drivers
##### A continuación el endpoint para crear un coonductor
```bash
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
``` 


### Passenger

###### Passenger - GET
###### /passenger
##### Para obtener todos los pasajeros
```bash
curl --location 'http://localhost:3000/passengers'
```

##### /passengers/:id
#### Para obtener un pasajero por su id
```bash
curl --location 'http://localhost:3000/passengers/1'
```
###### GET - /passengers/trip?:param1&:parama2&param3
##### /passengers/trip?latitude=(longitude)&longitude=(latitude)&distance=(distance in km)
#### Para obtener los conductores cerca de ese pasajero, en este caso, cerca de esa longitud y latitud
```bash
curl --location 'http://localhost:3000/passengers/trip?latitude=18.480023716974017&longitude=-69.89138258140852&distance=3'
```


### Trips

###### trips - GET
###### /trips?status=REQUESTED,IN_PROGRESS
#### Para obtener todos los viajes
```bash
curl --location 'http://localhost:3000/trips?status=REQUESTED,IN_PROGRESS'
```

###### /trips/request - POST
#### Método POST con el body para crear un viaje, en el postman collection se debe de seleccionar el content-type: Application/json en la parte de headers
```bash
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
```

###### /trips - PUT
###### /trips/:id/:status=(REQUESTED, IN_PROGRESS, COMPLETED, CANCELLED)
#### Para actualizar un viaje
```bash
curl --location --request PUT 'http://localhost:3000/trips/2/COMPLETED'
```


### Receipts
###### /receipts - POST
#### Método POST con el body para crear una facturación, en el postman collection se debe de seleccionar el content-type: Application/json en la parte de headers
```bash
curl --location 'http://localhost:3000/trips/request' \
--header 'Content-Type: application/json' \
--data '{
    "tripId": 1,
    "taxes": 2,
    "amount": 18.45256586581231,
    "status": "PENDING",
    "paymentMethod": "CASH"
}'
```
### Entity Relation Model
![image](https://github.com/user-attachments/assets/b1e46eb6-6ab1-45c6-81bf-4b25b1ec6e65)

