# Install Nest plugin

yarn add -D @nrwl/nest

nx g @nrwl/nest:init

# Create VPC Backend Service

nx g @nrwl/nest:app svc-vpcs

nx g @nrwl/nest:controller subnets --project=svc-vpcs --flat --directory=app
