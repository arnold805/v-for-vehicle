#! /bin/bash

CURRENT_DIR=$PWD
export INFRASTRUCTURE_PROJECT=../project_infrastructure
export PLAYBOOK_NAME=deploy-latest-v-for-vehicle

cd $INFRASTRUCTURE_PROJECT

ansible-playbook "$INFRASTRUCTURE_PROJECT/playbooks/$PLAYBOOK_NAME.yml" -v

cd $CURRENT_DIR
