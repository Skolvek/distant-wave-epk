# distant-wave-epk.git

This repo contains all of the source for the Distant Wave Electronic Press Kit website

## General Information
the Distant Wave Website/EPK is simply an angular web application that is deployed to run **somewhere** in a container.

## Development Container
see `dev.sh` for running the development contianer, the system dependencies are only `podman >= 3.0.1`. You might be able to develop on windows... but I recommend using a linux distribution instead.

Instead of going through the trouble of installing node and angular directly on your host, simply build the developer container and develop out of there.

General usage:
```
# Build the development image
./dev.sh -b

# Run the container
./dev.sh -r

# connect to the container
./dev.sh -c
```

The container mounts the `./src` directory, so any `npm` commands can be run in the container and file changes will persist on the local disk.


## Repo structure
The distant-wave-epk repo is structured as follows:

`infra/` : all infrastructure code
`code/`  : all source is here, this is where the root of the angular application lives
`dev.sh` : The script for driving the developer container


## Development workflow
1. Start the development container and attach to it
2. change directories to `code/dw-epk-app` and build the application with `ng build`
3. test your changes by running `ng serve` and navigating to `http://localhost:4200`


Any commands like `ng generate` or `ng add` or `npm install` **MUST** be run within the `dw-epk-app` directory.

## Useful Links
Angular material documenation (not using bootstrap): 
https://material.angular.io/