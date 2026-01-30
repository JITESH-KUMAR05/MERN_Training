## We will learn mongo db commands here

## create database
    > use database_name
    * This command switches to the specified database. If the database does not exist, it will be created when you insert data.
## show databases
    > show dbs
    * This command lists all the databases on the MongoDB server.
## create collection (table)
    > db.createCollection("collection_name")
    * This command creates a new collection (similar to a table in relational databases) within the current database.
## show collections (tables)
    > show collections
    * This command lists all the collections in the current database.
## create document (row)
    > db.collection_name.insertOne({key1: "value1", key2: "value2"})
    * This command inserts a new document (similar to a row in relational databases) into the specified collection.
    > db.collection_name.insertMany([{key1: "value1"}, {key2: "value2"}])
    * This command inserts multiple documents into the specified collection.
## read documents or data
    > db.collection_name.find()
    * This command retrieves all documents from the specified collection.
    > db.collection_name.find({key: "value"})
    * This command retrieves documents that match the specified criteria.
    > db.collection_name.findOne({key: "value"})
    * This command retrieves a single document that matches the specified criteria.
## update document or data
    > db.collection_name.updateOne({key: "value"}, {$set: {key: "new_value"}})
    * This command updates a single document that matches the specified criteria.
    > db.collection_name.updateMany({key: "value"}, {$set: {key: "new_value"}})
    * This command updates multiple documents that match the specified criteria.

## Delete document or data
    > db.collection_name.deleteOne({key: "value"})
    * This command deletes a single document that matches the specified criteria.
    > db.collection_name.deleteMany({key: "value"})
    * This command deletes multiple documents that match the specified criteria.


# Query operators 
## Comparison Operators
    $eq : equal to
    $ne : not equal to
    $gt : greater than
    $gte : greater than or equal to
    $lt : less than
    $lte : less than or equal to
    $in : in array
    $nin : not in array