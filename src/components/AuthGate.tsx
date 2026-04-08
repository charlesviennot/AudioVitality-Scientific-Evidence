import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { LoginPage } from './LoginPage';
import { TermsPage } from './TermsPage';

export const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setHasAcceptedTerms(userDoc.data().acceptedTerms);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <LoginPage />;
  if (!hasAcceptedTerms) return <TermsPage onAccept={async () => {
    await setDoc(doc(db, 'users', user.uid), { email: user.email, acceptedTerms: true });
    setHasAcceptedTerms(true);
  }} />;

  return <>{children}</>;
};
