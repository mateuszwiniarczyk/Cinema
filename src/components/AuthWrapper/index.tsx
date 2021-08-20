import { Wrapper } from './index.styles';

type Props = {
  readonly children: React.ReactChild;
};

const AuthWrapper = ({ children }: Props): JSX.Element => <Wrapper>{children}</Wrapper>;

export default AuthWrapper;
