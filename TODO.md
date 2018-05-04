Basing on existing code, please to implement service methods for `UserService` (`/app/services/users-service.js`).

## Steps

1. Clone this repository (`https://github.com/funkydev/nodejs-challenge`).
2. Read README.md file, which containst instruction how to run the application.
3. To run database server, you can use prepared docker-compose file, by executing `docker-compose up` command in terminal. 
4. Run application with `DB_CONNECTION_STRING` environment variable. If you're using prepared docker-compose file it should be `postgres://api@localhost/api`
5. Read already written code, and complete task described below.

## Requirements

Methods should be created based on existing service (PostsService).
Remember to create correct error codes, which should be return by service.

### createUser()

Method which adds a new user to the database (using sequelize library)

API consumes next params:
- email - user's email
- firstName - user's first name
- lastName - user's last name
- password - user's password (not encrypted)

Validation of these properties has been implemented.
The database user model has been described in file: `/app/models/database/user.js`.


### getUsersList()

Method should gets existing users from the database. It should include pagination properties.

API consumes next params:
- page - page number
- pageSize - count of elements on page

Validation of these properties has been implemented.
The database user model has been described in file: `/app/models/database/user.js`.


### getSingleUser()

Method should gets the existing user from the database by given identifier.

API consumes next param:
- userId - user identifier (in uuid format)

Validation of these properties has been implemented.
The database user model has been described in file: `/app/models/database/user.js`.

## Contact

If you'll have any question, you can contact with author of the task:
- https://www.facebook.com/obrzut.kacper
