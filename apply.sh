#!/bin/bash

read -p 'Project Path: ' path
read -p 'Description Language(ko/en): ' lang

cp ./$lang/.cz-config.js $path/
cp ./prepare-commit-msg.sh $path/.git/hooks/

mv $path/.git/hooks/prepare-commit-msg.sh $path/.git/hooks/prepare-commit-msg

chmod +x $path/.git/hooks/prepare-commit-msg

cd $path

npm install -g commitizen cz-customizable

echo "Add configurations to package.json:\n
\"scripts\": {
    ...
    \"commit\": \"git-cz\"
},
\"config\": {
    \"commitizen\": {
        \"path\": \"cz-customizable\"
    }
},
"