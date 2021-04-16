import {
  BaseNavigationDetail,
  CancelableEventHandler,
} from '@awsui/components-react/internal/events';
import { useNavigateTo } from './useNavigateTo';

export const useFollowHandler = (): CancelableEventHandler<BaseNavigationDetail> => {
  const navigateTo = useNavigateTo();

  return (e) => {
    if (e.detail.external) {
      return;
    }

    e.preventDefault();

    navigateTo(e.detail.href);
  };
};
