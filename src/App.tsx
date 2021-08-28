import useAuth from 'hooks/useAuth';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';

const App = (): React.ReactElement => {
  const { user } = useAuth();
  console.log(user);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
