#!/bin/bash
#
# Stephen Kolvek
# 4-22-23
#
# Script for driving the developer container
#

show_usage () {
    echo "Usage: $(basename $BASH_SOURCE) [option]"
    echo " -b|--build    Build the development container image"
    echo " -r|--run      Run the development container image"
    echo " -c|--connect  Connect to the development container"
    echo " -h|--help     Show this message"
    echo ""
}

build-dev () {

    buildah bud -t dw-epk-dev --layers infra/Containerfile.dev .

}

run-dev () {

    # NOTE: Using host network and exposing port 4200 to allow access to the developer preview
    podman run -it -d -v ./code:/code -p 4200:4200 --network=host --name dwepk_dev localhost/dw-epk-dev:latest /bin/bash

}

connect-dev () {

    podman attach dwepk_dev

}

main () {

    # Parse CLI args
    while [[ $# -gt 0 ]]; do

        case $1 in
            (-b|--build)
                build-dev || { echo "An error occured!"; exit 1; }
                exit 0;
            ;;
            (-r|--run)
                run-dev || { echo "An error occured!"; exit 1; }
                exit 0;
            ;;
            (-c|--connect)
                podman attach dwepk_dev
                exit 0;
            ;;
            (-h|--help)
                show_usage
                exit 0;
            ;;
            (*)
                show_usage
                echo "No option provided!"
                exit 1;
            ;;
        esac

        # Shift over to next CLI position
        shift

    done

}

#
# Pass CLI args to main
#
main $@