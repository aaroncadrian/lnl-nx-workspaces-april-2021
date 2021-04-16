import React from 'react';

import '@awsui/global-styles/index.css';

import { ServicesNavbar } from '@aws/shared/ui-services-navbar';
import { Route, Switch } from 'react-router-dom';

const Ec2FeatureShell = React.lazy(() => import('@aws/ec2/feature-shell'));

const VpcFeatureShell = React.lazy(() => import('@aws/vpc/feature-shell'));

export function AwsConsoleRoutes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={'/vpc'} component={VpcFeatureShell} />
        <Route path={'/ec2'} component={Ec2FeatureShell} />
        <Route path={'/'} render={() => <div>Welcome!</div>} />
      </Switch>
    </React.Suspense>
  );
}

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <ServicesNavbar />

      <main
        style={{
          overflow: 'auto',
          flex: 1,
        }}
      >
        <AwsConsoleRoutes />
      </main>
    </div>
  );
}

export default App;
