# SERVER API

This is a basic RESTful server.

## Sets Endpoints

#### Get all sets 
```javascript
GET /api/sets
returns: [
  {
    id: integer,
    creator: string,
    name: string,
    description: string,
    createdAt: string,
  },
  ...
]
```
#### Create a set :
```javascript
POST /api/sets
params: {
  creator: string,      // Required
  name: string,         // Required
  description: string,  // Required
}
returns: {
  id: integer,
  creator: string,
  name: string,
  description: string,
  createdAt: string,
}
```
#### Get a speicific set
```javascript
GET /api/sets/:id
returns: {
  id: integer,
  creator: string,
  name: string,
  description: string,
  createdAt: string,
}
```
#### Update a specific set
```javascript
PUT /api/sets/:id
params: {
  creator: string,
  name: string,
  description: string,
}
returns: {
  id: integer,
  creator: string,
  name: string,
  description: string,
  createdAt: string,
}
```
#### Delete a specific set
```javascript
DELETE /api/sets/:id
returns: 204
```
