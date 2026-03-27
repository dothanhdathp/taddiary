#!/usr/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: foreach_git <git command>"
    return 1
fi

for file in $*; do
    if [ -f ./docs/$file ]; then
        code ./docs/$file
    else
        touch ./docs/$file
        code ./docs/$file
    fi;
done;