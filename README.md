# TypeScript React Scaffold

This is a barebones project with support for the following:

- WebPack (with hot reloading development build)
- TypeScript 1.8
- TsLint (for linting)
- Typings (for TypeScript definitions management)
- React
- Phantom/Karma/Mocha/Chai (for testing)
- eye-oh-see (an IOC container)

## Build scripts

### To run hot-reloading development server

```
npm start
```

### To build for production

```
npm run build
```

### To test

```
npm run test
```

## Development environment

To set up a docker based development environment with vim set up for TypeScript look here:

https://github.com/ZachBray/docker-dev-envs

After setting this up, you can run the following command to start the environment with port 3000 exposed:

```
./start-dev-env.sh
```
