#!/usr/bin/bash

# Define the function for confirmation
confirm_action() {
    while true; do
        read -r -p "$1 (y/N): " response
        response=${response,,}
        case "$response" in
            [y][e][s]|[y]) 
                return 0 
                ;;
            [n][o]|[n]|"") 
                return 1 
                ;;
            *)
                echo "Invalid input. Please enter 'y' for Yes or 'n' for No."
                ;;
        esac
    done
}

# Call the function and check its return status
if confirm_action "Do you want create a new linux-venv?"; then
    echo "Remove old python venv"
    sudo rm -rf linux-venv
fi

# main
echo "Start python env"
python3 -m venv linux-venv
source linux-venv/bin/activate
echo "Install requeriment"
pip install click==8.0.4
pip install mkdocs
pip install pymdown-extensions
pip install mkdocs-material
pip install mkdocs_puml
pip install mkdocs-network-graph-plugin
deactivate
