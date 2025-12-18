#!/usr/bin/bash

echo "Start python env"
python3 -m venv linux-venv
source linux-venv/bin/activate
mkdocs build
mkdocs gh-deploy --force
deactivate
