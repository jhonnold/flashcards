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
#### Get a set
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
#### Update a set
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
#### Delete a set
```javascript
DELETE /api/sets/:id
returns: 204
```

## Flashcard Endpoints

#### Get all flashcards
```javascript
GET /api/flashcards // Supported query params are setId and limit
returns: [
  {
    id: integer,
    setId: integer,
    frontside: string,
    backside: string,
    order: integer,
    createdAt: string,
  },
  ...
]
```
#### Get all flashcards
```javascript
GET /api/flashcards
returns: [
  {
    id: integer,
    setId: integer,
    frontside: string,
    backside: string,
    order: integer,
    createdAt: string,
  },
  ...
]
```
#### Create a flashcard
```javascript
POST /api/flashcards
params: {
  setId: integer,     // Required
  frontside: string,
  backside: string,
  order: integer,     // Required
}
returns: {
  id: integer,
  setId: integer,
  frontside: string,
  backside: string,
  order: integer,
  createdAt: string,
}
```
#### Create a batch of flashcards
```javascript
POST /api/flashcards/batch
params: {
  flashcards: [
    {
      setId: integer,     // Required
      frontside: string,
      backside: string,
      order: integer,     // Required
    },
    ...
  ]
}
returns: [
  {
    id: integer,
    setId: integer,
    frontside: string,
    backside: string,
    order: integer,
    createdAt: string,
  },
  ...
]
```
#### Get a flashcard
```javascript
GET /api/flashcards/:id
returns: {
  id: integer,
  setId: integer,
  frontside: string,
  backside: string,
  order: integer,
  createdAt: string,
}
```
#### Update a flashcard
```javascript
PUT /api/flashcards/:id
params: {   
  frontside: string,
  backside: string,
  order: integer,
}
returns: {
  id: integer,
  setId: integer,
  frontside: string,
  backside: string,
  order: integer,
  createdAt: string,
}
```
#### Delete a flashcard
```javascript
DELETE /api/flashcards/:id
returns: 204
```
