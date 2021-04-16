#!/bin/bash

# Install @awsui

yarn add @awsui/global-styles @awsui/components-react

# Create shared navbar

nx g @nrwl/react:lib ui-services-navbar --directory=shared --tags=scope:shared,type:ui --component=false

nx g @nrwl/react:component ServicesNavbar --project=shared-ui-services-navbar --export=true
