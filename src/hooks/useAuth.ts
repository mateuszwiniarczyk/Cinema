import firebase from 'firebase/app';
import { authContext } from 'providers/AuthProvider';
import { useContext } from 'react';

interface FirebaseAuth {
  user: firebase.User | null;
  signin: (email: string, password: string) => Promise<firebase.User | null | undefined>;
  signup: (email: string, password: string) => Promise<firebase.User | null | undefined>;
  signout: () => Promise<null>;
  isError: string;
}

const useAuth = (): FirebaseAuth => {
  const context = useContext(authContext) as FirebaseAuth;

  if (!context) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return context;
};

export default useAuth;
