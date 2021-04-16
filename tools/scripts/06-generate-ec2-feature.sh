#!/bin/bash

# Create EC2 frontend libs

## Feature Shell
nx g @nrwl/react:lib feature-shell --directory=ec2 --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=true --appProject=aws-console

## Create Dashboard

nx g @nrwl/react:lib feature-dashboard --directory=ec2 --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=false

## Create instances libs

### shell
nx g @nrwl/react:lib feature-shell --directory=ec2/instances --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=true

### list
nx g @nrwl/react:lib feature-list --directory=ec2/instances --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=false

## Create launch wizard libs
nx g @nrwl/react:lib feature-shell --directory=ec2/launch-instance-wizard --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=true

nx g @nrwl/react:lib feature-ami-selection --directory=ec2/launch-instance-wizard --tags=scope:ec2,type:feature --pascalCaseFiles=true --routing=false

### data-access
nx g @nrwl/workspace:lib data-access-instances --directory=shared/ec2 --tags=scope:shared,type:data-access

nx g @nrwl/react:redux ec2Instances --project=shared-ec2-data-access-instances --directory=+state --appProject=aws-console

### domain
nx g @nrwl/workspace:lib domain --directory=shared/ec2 --tags=scope:shared,type:domain

# Backend

nx g @nrwl/nest:app svc-ec2

nx g @nrwl/nest:controller instances --project=svc-ec2 --flat --directory=app

