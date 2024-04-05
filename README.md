# CRUD NODE

The code in the index.js file implements a basic RESTful API using Node.js and Express.js for CRUD (Create, Read, Update, Delete) operations on a JSON data file. Here's how each operation works:

- **Create (POST)**: When a POST request is made to the `/items` endpoint, the server receives data for a new item in the request body. It checks if the request body is empty and sends a 400 response if it is. Then it reads the existing data from the JSON file, parses it into an array, adds the new item to the array, and writes the updated array back to the file. Finally, it sends a 201 response indicating that the item was created successfully.

- **Read (GET)**: When a GET request is made to the root URL `/`, the server responds with "Hello World". There is no specific read operation for items in this code snippet, but you can add it by defining a route for retrieving items from the JSON file.

- **Update (PUT/PATCH)**: This code snippet does not include an update operation. To implement it, you would need to define a route that accepts PUT or PATCH requests and handles updating existing items in the JSON file.

- **Delete (DELETE)**: Similarly, there is no delete operation implemented in this code. You can add a route to handle DELETE requests, where you would remove items from the JSON file based on some identifier (e.g., ID).

Overall, this code provides a basic framework for creating items and storing them in a JSON file using Node.js and Express.js.

## To setup the project

```bash
npm init -y
npm i mongoose express
```

To run the server.

```bash
node --watch index.js
```
