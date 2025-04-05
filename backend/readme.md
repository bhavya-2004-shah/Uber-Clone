# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response
#### Success (201 Created)
- **Description**: User successfully registered.
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

**Example Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2d3e4b0a5f6g7h8i9j0",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

#### Error (400 Bad Request)
- **Description**: Validation failed or missing required fields.
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` in the request.
- The `Authorization` header is not required for this endpoint.

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user. It validates the input data, checks the credentials, and returns a JSON Web Token (JWT) and the user details upon successful login.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response
#### Success (200 OK)
- **Description**: User successfully authenticated.
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

**Example Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2d3e4b0a5f6g7h8i9j0",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

#### Error (400 Bad Request)
- **Description**: Validation failed or missing required fields.
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Invalid email or password.
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` in the request.
- The `Authorization` header is not required for this endpoint.

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: User profile retrieved successfully.
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Authentication failed or token is missing/invalid.
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- Ensure the `Authorization` header contains a valid JWT token in the format `Bearer <token>`.

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the currently authenticated user by invalidating their token.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Response
#### Success (200 OK)
- **Description**: User successfully logged out.
- **Response Body**:
  ```json
  {
    "message": "logged out"
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Authentication failed or token is missing/invalid.
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- Ensure the `Authorization` header contains a valid JWT token in the format `Bearer <token>`.
- This endpoint also clears the authentication cookie if present.
