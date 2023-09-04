# API Documentation

Welcome to the documentation of the [`zoodiaco API`]. Here you will find information about the different collections and routes available, as well as the supported HTTP methods to interact with them.

## Base URL
```
http://127.9.63.7:3000/api/v1
```

## Available Collections

- `/animals`
- `/employees`
- `/enclosures`
- `/purchases`
- `/species`
- `/visitors`

## Supported HTTP Methods

For each of the collections mentioned above, the following HTTP methods are available:

- **GET:** Retrieve a list of items from the collection.
- **GET by ID:** Retrieve a specific item from the collection by its identifier.
- **POST:** Create a new item in the collection.
- **PATCH:** Partially update an existing item in the collection.
- **DELETE:** Delete a specific item from the collection.

### Animals

- Retrieve a list of all animals:
  ```
  GET http://127.9.63.7:3000/api/v1/animals
  ```

- Retrieve an animal by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/animals/{id}
  ```

- Create a new animal:
  ```
  POST http://127.9.63.7:3000/api/v1/animals
  ```

- Update an existing animal:
  ```
  PATCH http://127.9.63.7:3000/api/v1/animals/{id}
  ```

- Delete an animal by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/animals/{id}
  ```

### Employees

- Retrieve a list of all employees:
  ```
  GET http://127.9.63.7:3000/api/v1/employees
  ```

- Retrieve an employee by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/employees/{id}
  ```

- Create a new employee:
  ```
  POST http://127.9.63.7:3000/api/v1/employees
  ```

- Update an existing employee:
  ```
  PATCH http://127.9.63.7:3000/api/v1/employees/{id}
  ```

- Delete an employee by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/employees/{id}
  ```

### Enclosures

(Noted that the collection is named "enclosures" in English)

- Retrieve a list of all enclosures:
  ```
  GET http://127.9.63.7:3000/api/v1/enclosures
  ```

- Retrieve an enclosure by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/enclosures/{id}
  ```

- Create a new enclosure:
  ```
  POST http://127.9.63.7:3000/api/v1/enclosures
  ```

- Update an existing enclosure:
  ```
  PATCH http://127.9.63.7:3000/api/v1/enclosures/{id}
  ```

- Delete an enclosure by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/enclosures/{id}
  ```

### Purchases

- Retrieve a list of all purchases:
  ```
  GET http://127.9.63.7:3000/api/v1/purchases
  ```

- Retrieve a purchase by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/purchases/{id}
  ```

- Create a new purchase:
  ```
  POST http://127.9.63.7:3000/api/v1/purchases
  ```

- Update an existing purchase:
  ```
  PATCH http://127.9.63.7:3000/api/v1/purchases/{id}
  ```

- Delete a purchase by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/purchases/{id}
  ```

### Species

- Retrieve a list of all species:
  ```
  GET http://127.9.63.7:3000/api/v1/species
  ```

- Retrieve a species by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/species/{id}
  ```

- Create a new species:
  ```
  POST http://127.9.63.7:3000/api/v1/species
  ```

- Update an existing species:
  ```
  PATCH http://127.9.63.7:3000/api/v1/species/{id}
  ```

- Delete a species by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/species/{id}
  ```

### Visitors

- Retrieve a list of all visitors:
  ```
  GET http://127.9.63.7:3000/api/v1/visitors
  ```

- Retrieve a visitor by ID:
  ```
  GET http://127.9.63.7:3000/api/v1/visitors/{id}
  ```

- Create a new visitor:
  ```
  POST http://127.9.63.7:3000/api/v1/visitors
  ```

- Update an existing visitor:
  ```
  PATCH http://127.9.63.7:3000/api/v1/visitors/{id}
  ```

- Delete a visitor by ID:
  ```
  DELETE http://127.9.63.7:3000/api/v1/visitors/{id}
  ```

Make sure to replace `{id}` with the actual ID you want to use in your queries. These URLs will allow you to interact with each collection of your API using the different HTTP methods specified in your documentation.