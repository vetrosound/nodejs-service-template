## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Building a docker image

`docker build --tag node-template .`

Cleanup intermediate images
`docker image prune -f`

## Running the docker image

`docker run --detach --name node-template --publish 8443:8443 node-template`

Then visit `http://localhost:8443/chris` in a browser
