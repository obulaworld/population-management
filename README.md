# population-management
An application that contains a list of locations and the total number of residents in each location broken down by gender.

## Project Structure

The project structure follows the **MVC** (Model-View-Controller) pattern.
```
├── src
│   ├── __tests__
│   │   ├── __mockData__
│   │   │   └── index.js
│   │   └── index.test.js
│   ├── config
│   │   └── database.js
│   │   └── environment.js
│   ├── controllers
│   │   └── PopulationController
│   │   │      └── index.js
│   │   │      └── PopulationController.js
│   │   └── index.js
│   ├── helpers
│   │   └── Error.js
│   ├── index.js
│   ├── middlewares
│   │   └── PopulationValidator.js
│   ├── database
│   │   └── migrations
│   │        └── 20190617121320-create-population-management.js
│   │   └── seeders
│   │   └── models
│   │        └── index.js
│   │        └── populationmanagement.js
│   └── routes
│       ├── index.js
│       └── locationRoutes.js
```

## Requirements

* Node.js
* npm
* PostgresDB
* Sequelize

## Getting Started

```
$ git clone https://github.com/obulaworld/population-management.git
$ cd population-management
$ npm install
$ npm run server                  # For development purpose
```

You should now be able to access the API via http://localhost:port/api/v1/

**NOTE:** Create a `.env` file configuration following the `.env.sample`.

## Project Details
`locations:`
 - create population for a location
 - get population for a location
 - update a location
 - delete a location

## API Endpoints

<table>
<tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th><th>QUERY</th></tr>
<tr><td>GET</td><td>/api/v1/locations</td><td>Gets a location</td><td></td></tr>
<tr><td>POST</td><td>/api/v1/locations</td><td>Creates locations</td><td></td></tr>
<tr><td>PUT</td><td>/api/v1/locations/:locationId</td><td>Updates a location</td><td></td></tr>
<tr><td>DELETE</td><td>/api/v1/locations/:locationId</td><td>Deletes a location</td><td></td></tr>

