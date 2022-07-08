<!-- @format -->

# Erros

## `Backend - Handler Cases`

| Method - Route             | Error - Description                               | Error Code | Message sended                 |
| -------------------------- | ------------------------------------------------- | ---------- | ------------------------------ |
| `ROUTE ==== /customer/`    |                                                   |            |                                |
| POST                       | Data format is not correct                        | `400`      | Format is not correct          |
| POST                       | Errow with the database                           | `500`      | Database Error                 |
| GET, DELETE, PUT, PATCH    | Methods not allow in this route                   | `405`      | Method Not Allow In This Route |
| `ROUTE ==== /customer/:id` |                                                   |            |                                |
| GET                        | Data format is not correct, it must be an integer | `400`      | CustomerId must be a number    |
| GET                        | CustomerId Not Found                              | `404`      | Customer Not Found             |
| POST                       | Errow with the database                           | `500`      | Database Error                 |
| POST, DELETE, PUT, PATCH   | This methos is not allow in this route            | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ROUTE ==== /signin`       |                                                   |            |                                |
| POST                       | The user is not found                             | `404`      | User Not Found                 |
| POST                       | The password is incorrect                         | `400`      | Password Incorrect             |
| POST                       | A problen with the token generation               | `500`      | Internal Error                 |
| GET, DELETE, PUT, PATCH    | This methos is not allow in this route            | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ROUTE ==== /signup`       |                                                   |            |                                |
| POST                       | The user is already in the database               | `409`      | User Already Exist             |
| POST                       | Problen with the token generation or the database | `500`      | Internal Error                 |
| GET, DELETE, PUT, PATCH    | Methods not allow in this route                   | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ALL OTHER ROUTES ==== `   | Rutes are not available                           | `405`      | Route not found                |

## `Backend - Not Network`

| Method - Route         | Error - Description                              | Error Code | Message Display   |
| ---------------------- | ------------------------------------------------ | ---------- | ----------------- |
| GET - /movie_score/:id | The Backend is not running / there is not server | `500`      | Networks Problems |
| POST - /movie_score    | The Backend is not running / there is not server | `500`      | Networks Problems |

# Loggin

If the request header doest have a x-correlation-id, the server will generate one that will be mapped to the response header.

# Authentication
