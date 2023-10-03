# Node-API

This is a test Restful CRUD API created using node.js, fastify and mongoose for modeling MongoDB!

## Table of Contents
- [Installation](#installation)
- [Requests](#requests)

### Prerequisites
- Node.js 18.x or higher
- Windows, macOS, or Linux operating system

## Installation

1. Clone the repository:

```
git clone https://github.com/JoaoFelipe4/Node-API.git
```
```
cd Node-API
```
```
npm start
```
for dev use:

```
npm run dev
```

## Requests
It has 5 http requests for modeling data in a Mongodb database.

### Post Request

1. http://api.example.com/product

Registers a new product in DB with the payload bellow:

```
{
"name": "example"
"quantity": 2
"price": 2.20
"image": "https://imgur.com/gallery/AbCdEfG"
}
```

### Get Request

1. http://api.example.com/product

It returns all products registered as shown bellow:

```
[
	{
		"_id": "64ee207ddeb793b1a1887ed5",
		"name": "abc",
		"quantity": 3,
		"price": 3,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:44:45.708Z",
		"updatedAt": "2023-08-29T16:44:45.708Z",
		"__v": 0
	},
	{
		"_id": "64ee20c113cf6a0d1267a2c7",
		"name": "ddd",
		"quantity": 4,
		"price": 0,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:45:53.370Z",
		"updatedAt": "2023-08-29T16:45:53.370Z",
		"__v": 0
	}
]
```

2. http://api.example.com/product/:id

It returns just the product specified by the id:

```
	{
		"_id": "64ee207ddeb793b1a1887ed5",
		"name": "fffff",
		"quantity": 3,
		"price": 3,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:44:45.708Z",
		"updatedAt": "2023-08-29T16:44:45.708Z",
		"__v": 0
	}
```
### Put Request

1. http://api.example.com/product/:id

It updates the product specified by the id and return it back. It's possible to update just one parameter of each object

Object:
```
	{
		"_id": "64ee207ddeb793b1a1887ed5",
		"name": "fffff",
		"quantity": 3,
		"price": 3,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:44:45.708Z",
		"updatedAt": "2023-08-29T16:44:45.708Z",
		"__v": 0
	}
```

PayLoad:

```
{
"name": "ball"
}
```

Return:

```
	{
		"_id": "64ee207ddeb793b1a1887ed5",
		"name": "ball",
		"quantity": 3,
		"price": 3,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:44:45.708Z",
		"updatedAt": "2023-08-29T16:44:45.708Z",
		"__v": 0
	}
```

### Delete Request

1. http://api.example.com/product/:id

Deletes a object by it's id and returns the deleted object

```
	{
		"_id": "64ee207ddeb793b1a1887ed5",
		"name": "ball",
		"quantity": 3,
		"price": 3,
		"image": "https://url-image.com",
		"createdAt": "2023-08-29T16:44:45.708Z",
		"updatedAt": "2023-08-29T16:44:45.708Z",
		"__v": 0
	}
```
