import firebase from 'firebase/app';
import { authContext } from 'providers/AuthProvider';
import { useContext } from 'react';

type firebaseAuth = {
  user: firebase.User | null;
  signin: (email: string, password: string) => Promise<firebase.User | null | undefined>;
  signup: (email: string, password: string) => Promise<firebase.User | null | undefined>;
  signout: () => Promise<null>;
  isError: string;
};

const useAuth = (): firebaseAuth => {
  return useContext(authContext) as firebaseAuth;
};

export default useAuth;
