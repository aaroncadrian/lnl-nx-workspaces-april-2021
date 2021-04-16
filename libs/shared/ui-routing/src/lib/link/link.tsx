import React from 'react';

import AwsLink, {
  LinkProps as AwsLinkProps,
} from '@awsui/components-react/link';

import './link.module.scss';
import { useFollowHandler } from '@aws/shared/util-routing';

export type LinkProps = AwsLinkProps;

export function Link(props: LinkProps) {
  const onFollow = useFollowHandler();

  return (
    <AwsLink onFollow={onFollow} {...props}>
      {props.children}
    </AwsLink>
  );
}

export default Link;
