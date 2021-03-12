[![Build Status](https://travis-ci.com/vetrosound/nodejs-service-template.svg?branch=main)](https://travis-ci.com/vetrosound/nodejs-service-template)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vetrosound-nodejs-service-template&metric=alert_status)](https://sonarcloud.io/dashboard?id=vetrosound-nodejs-service-template)

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

## Building and running the docker image

`docker-compose up -d`

Cleanup intermediate images
`docker image prune -f`

Then visit `http://localhost:8080/chris` in a browser.
