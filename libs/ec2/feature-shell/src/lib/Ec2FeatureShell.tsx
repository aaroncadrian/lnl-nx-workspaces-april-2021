import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { AppLayout, SideNavigation } from '@awsui/components-react';
import { useFollowHandler } from '@aws/shared/util-routing';

const Ec2InstancesFeatureShell = React.lazy(
  () => import('@aws/ec2/instances/feature-shell')
);

const LaunchInstanceWizard = React.lazy(
  () => import('@aws/ec2/launch-instance-wizard/feature-shell')
);

const SharedSecurityGroupsFeatureShell = React.lazy(
  () => import('@aws/shared/security-groups/feature-shell')
);

const Ec2Dashboard = React.lazy(() => import('@aws/ec2/feature-dashboard'));

function Ec2FeatureShellRoutes() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        path={`${match.path}/instances`}
        component={Ec2InstancesFeatureShell}
      />

      <Route
        path={`${match.path}/launch-instance-wizard`}
        component={LaunchInstanceWizard}
      />

      <Route
        path={`${match.path}/security-groups`}
        component={SharedSecurityGroupsFeatureShell}
      />

      <Route path={match.path} component={Ec2Dashboard} />
    </Switch>
  );
}

export function Ec2FeatureShell() {
  const match = useRouteMatch();

  const onFollow = useFollowHandler();

  return (
    <AppLayout
      toolsHide
      navigation={
        <SideNavigation
          onFollow={onFollow}
          header={{ text: 'EC2', href: `${match.url}` }}
          items={[
            {
              type: 'link',
              text: 'Dashboard',
              href: `${match.url}`,
            },
            {
              type: 'link',
              text: 'Instances',
              href: `${match.url}/instances`,
            },
            {
              type: 'link',
              text: 'Security Groups',
              href: `${match.url}/security-groups`,
            },
          ]}
        />
      }
      content={<Ec2FeatureShellRoutes />}
    />
  );
}

export default Ec2FeatureShell;
