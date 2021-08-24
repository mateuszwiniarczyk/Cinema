import firebase from 'firebase/app';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from 'services/firebase';

export const authContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isError, setIsError] = useState('');

  const signin = async (email: string, password: string) => {
    try {
      console.log(email, password);
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setUser(user);
      return user;
    } catch (error) {
      setIsError(error.message);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      setUser(user);
      return user;
    } catch (error) {
      setIsError(error.message);
    }
  };

  const signout = async () => {
    try {
      const response = await auth.signOut();
      setUser(null);

      return response;
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    signin,
    signup,
    signout,
    isError
  };

  return <authContext.Provider value={authData}>{children}</authContext.Provider>;
};
