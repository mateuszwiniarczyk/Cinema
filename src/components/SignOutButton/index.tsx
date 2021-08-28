import { ReactComponent as SignOutIcon } from 'assets/icons/signout.svg';
import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';

import { Button } from './index.styles';

const SignOutButton = (): JSX.Element => {
  const { signout } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    signout();

    history.push('/');
  };

  return (
    <Button type="button" onClick={handleSignOut}>
      <SignOutIcon />
    </Button>
  );
};

export default SignOutButton;
