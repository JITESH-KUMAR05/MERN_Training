# Todays Topics
### 1. Projections
### 2. Unique Properties
### 3. Saving Password
### 4. Authentication
### 5. Public and Protected Routes

#### One important point :
* The validators will run before inserting or updating any data in the database.
* So if any validation fails the data will not be inserted or updated in the database.
* on the update operation will not run the validators by default.
* To run the validators on update operation we need to set the runValidators option to true.

#### How Error handling works in Express :
* In Express, error handling is done using default error Handler middleware functions.


## Projections:
* Projections are retrieving only specific fields from a document in the database.
* Field level filtering is called Projections.
* when we call functions like find(), findOne() etc we can pass second argument as projection.
* Projections can be specified in two ways:
  1. As an object with field names as keys and 1 or 0 as values.
  2. As a space-separated string of field names.


## Unique Properties:
* Unique properties are used to ensure that a field in a document is unique across all documents in a collection.
* We can set a field as unique by setting the unique property to true in the schema definition.

## Saving Password:
* We should never save passwords in plain text in the database.
* there are two ways to save passwords securely:
  1. Hashing : this is a one-way process. once the password is hashed it cannot be converted back to the original password. so it is secure.
  2. Encryption : this is not recommended for saving passwords. as it is done with the help of secret key which can be compromised. so it is a reversible process. and not secure. 
* We should always hash the passwords before saving them in the database.
* We can use libraries like bcrypt.js to hash the passwords.
* in this we have no of rounds or cost factor or salt which makes the hashing process more secure.
* generally we use 8 to 12 rounds for hashing the passwords.

## Authentication:
* Authentication is the process of verifying the identity of a user.
* Every API has Two types of routes:
  1. Public Routes : these routes can be accessed by anyone without authentication.
  2. Protected Routes : these routes can be accessed only by authenticated users.
* User authentication means submitting the credentials and getting the tocken, it is same as pay the amount and get the ticket.
* Once a user has tocken, he is said to be authenticated.
### Steps for user Authentication:
#### After receiving the user credentials:
1. API verifies the username
2. if username is matched then it compares the password
3. if password is matched then it generates a tocken and sends it to the user


#### JWT Authentication Flow:
1. once the user credentials are verified, server generates a JWT token and sends it to the user.


* There are two types of authentication:
  1. Session-based authentication
  2. Token-based authentication