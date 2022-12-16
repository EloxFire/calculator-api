# Calculator API
This is a simple calculator API that can be used to perform basic arithmetic operations.

## Usage
Install the dependencies and devDependencies and start the server.

```sh
$ cd calculator-api
$ npm install
$ npm run dev
```

# API Endpoints
## Addition
### Request
`POST /add`

    {
        "values": [1, 2, 3]
    }

### Response
    {
        "result": 6
    }
`

## Subtraction
### Request
`POST /subtract`

    {
        "values": [1, 2, 3]
    }

### Response
    {
        "result": -4
    }
`

## Multiplication
### Request
`POST /multiply`

    {
        "values": [1, 2, 3]
    }

### Response
    {
        "result": 6
    }
`

## Division
### Request
`POST /divide`

    {
        "values": [1, 2, 3]
    }

### Response
    {
        "result": 0.16666666666666666
    }
`
