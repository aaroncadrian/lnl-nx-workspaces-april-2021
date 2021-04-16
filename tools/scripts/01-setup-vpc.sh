#!/bin/bash

# Create VPC libs

## Feature Shell
nx g @nrwl/react:lib feature-shell --directory=vpc --tags=scope:vpc,type:feature --pascalCaseFiles=true --routing=true --appProject=aws-console

## Create Dashboard

nx g @nrwl/react:lib feature-dashboard --directory=vpc --tags=scope:vpc,type:feature --pascalCaseFiles=true --routing=true

## Create subnets libs

### shell
nx g @nrwl/react:lib feature-shell --directory=vpc/subnets --tags=scope:vpc,type:feature --pascalCaseFiles=true --routing=true

### list
nx g @nrwl/react:lib feature-list --directory=vpc/subnets --tags=scope:vpc,type:feature --pascalCaseFiles=true --routing=false

### create
nx g @nrwl/react:lib feature-create --directory=vpc/subnets --tags=scope:vpc,type:feature --pascalCaseFiles=true --routing=false

### data-access
nx g @nrwl/workspace:lib data-access --directory=shared/subnets --tags=scope:shared,type:data-access

nx g @nrwl/react:redux subnets --project=shared-subnets-data-access --directory=+state --appProject=aws-console
