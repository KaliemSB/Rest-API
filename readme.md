<h1 align="center">Rest API</h1>

Rest API using TypeScript, Express and MongoDB.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) to install the dependencies.

```bash
# yarn
$ yarn install
# npm
$ npm install
# initiate
$ npm run dev
```

## Usage

```bash
# use a GET request to get all data.

# use a POST request with body { text: String, author: String} to create new data.
localhost:8080

# use a GET request to get all data by ID.

# use a DELETE request to delete data

# use a PATCH request with the body { text: String, author: String} to update data.
localhost:8080/:_id
```

## Made with
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express JS">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">

## License
[MIT](https://choosealicense.com/licenses/mit/)