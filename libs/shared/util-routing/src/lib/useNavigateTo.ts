import { useHistory } from 'react-router-dom';

export const useNavigateTo = () => {
  const history = useHistory();

  return (href: string) => {
    history.push(href);
  };
};
