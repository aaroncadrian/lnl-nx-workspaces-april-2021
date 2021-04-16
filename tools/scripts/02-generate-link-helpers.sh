nx g @nrwl/workspace:lib util-routing --directory=shared --tags=scope:shared,type:util

nx g @nrwl/react:lib ui-routing --directory=shared --tags=scope:shared,type:ui --component=false

nx g @nrwl/react:component Link --project=shared-ui-routing --export=true
