# TypeScript React Scaffold

This is a barebones project with support for the following:

- Yarn
- WebPack (with hot reloading development build)
- TypeScript 2
- TsLint (for linting)
- Typings (for TypeScript definitions management)
- React
- Phantom/Karma/Mocha/Chai (for testing)
- eye-oh-see (an IOC container)

## Build scripts

### To run hot-reloading development server

```
yarn start
```

### To build for production

```
yarn run build
```

### To test

```
yarn run test
```

## Development environment

To set up a docker based development environment with vim set up for TypeScript look here:

https://github.com/ZachBray/docker-dev-envs

After setting this up, you can run the following command to start the environment with port 3000 exposed:

```
./start-dev-env.sh
```
