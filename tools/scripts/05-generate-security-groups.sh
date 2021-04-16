#!/bin/bash

# Create security groups libs

## Feature Shell
nx g @nrwl/react:lib feature-shell --directory=shared/security-groups --tags=scope:shared,type:feature --pascalCaseFiles=true --routing=true

### list
nx g @nrwl/react:lib feature-list --directory=shared/security-groups --tags=scope:shared,type:feature --pascalCaseFiles=true --routing=false

### create
nx g @nrwl/react:lib feature-create --directory=shared/security-groups --tags=scope:shared,type:feature --pascalCaseFiles=true --routing=false

### data-access
nx g @nrwl/workspace:lib data-access --directory=shared/security-groups --tags=scope:shared,type:data-access

nx g @nrwl/react:redux securityGroups --project=shared-security-groups-data-access --directory=+state --appProject=aws-console

### domain
nx g @nrwl/workspace:lib domain  --directory=shared/security-groups --tags=scope:shared,type:domain
