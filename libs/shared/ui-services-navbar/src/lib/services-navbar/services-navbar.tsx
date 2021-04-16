import React from 'react';
import { SpaceBetween } from '@awsui/components-react';
import { Link } from '@aws/shared/ui-routing';

export function ServicesNavbar() {
  return (
    <header
      style={{
        backgroundColor: 'rgb(37,47,60)',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
      }}
    >
      <SpaceBetween direction={'horizontal'} size={'m'}>
        <Link href={'/'}>AWS</Link>

        <Link href={'/vpc'}>VPC</Link>

        <Link href={'/ec2'}>EC2</Link>
      </SpaceBetween>
    </header>
  );
}

export default ServicesNavbar;
