import { ReactComponent as SignOutIcon } from 'assets/icons/signout.svg';
import useAuth from 'hooks/useAuth';

import { Button } from './index.styles';

const SignOutButton = (): JSX.Element => {
  const { signout } = useAuth();

  return (
    <Button type="button" onClick={signout}>
      <SignOutIcon />
    </Button>
  );
};

export default SignOutButton;
