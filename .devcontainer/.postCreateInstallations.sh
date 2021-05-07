#!/usr/bin/bash

echo 'Executing post-creation installations'
# Install CF multiapps plugins
# cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
cf install-plugin multiapps -f

#Install CF defaultEnv plugin. TODO: Get dynamic latest version
wget -P /home/node https://github.com/saphanaacademy/DefaultEnv/releases/download/v1.0.0/DefaultEnv.linux64
cf install-plugin /home/node/DefaultEnv.linux64 -f

# Copy own scripts to user directory for easy access
cp -R -v .devcontainer/scripts /home/node/