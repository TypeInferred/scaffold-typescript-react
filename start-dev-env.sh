#!/bin/bash

docker run -it -v $(pwd):/home/dev/src --expose 3000 -p 3000:3000 --entrypoint /bin/bash env/vim/ts
