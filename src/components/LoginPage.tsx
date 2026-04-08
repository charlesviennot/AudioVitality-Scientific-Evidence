import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const LoginPage = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button onClick={handleLogin} className="bg-blue-500 text-white p-4 rounded">
        Sign in with Google
      </button>
    </div>
  );
};
