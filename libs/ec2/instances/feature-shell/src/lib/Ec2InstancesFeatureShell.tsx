import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ListInstancesPage = React.lazy(
  () => import('@aws/ec2/instances/feature-list')
);

export function Ec2InstancesFeatureShell() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} component={ListInstancesPage} />
    </Switch>
  );
}

export default Ec2InstancesFeatureShell;
