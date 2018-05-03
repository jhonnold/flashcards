# SERVER API

This is a basic RESTful server.

## Sets Endpoints

* Get all sets : `GET /api/sets`
* Create a set : `POST /api/sets`
```javascript
  {
    creator: string,
    name: string,
    description: string
  }
```
