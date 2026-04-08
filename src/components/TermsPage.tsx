import React from 'react';

export const TermsPage = ({ onAccept }: { onAccept: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-8">Please accept the terms to continue.</p>
      <button onClick={onAccept} className="bg-green-500 text-white p-4 rounded">
        Accept
      </button>
    </div>
  );
};
