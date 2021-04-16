import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ListSecurityGroupsPage = React.lazy(
  () => import('@aws/shared/security-groups/feature-list')
);

const CreateSecurityGroupPage = React.lazy(
  () => import('@aws/shared/security-groups/feature-create')
);

export function SharedSecurityGroupsFeatureShell() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        path={`${match.path}/create`}
        component={CreateSecurityGroupPage}
      />

      <Route path={match.path} component={ListSecurityGroupsPage} />
    </Switch>
  );
}

export default SharedSecurityGroupsFeatureShell;
