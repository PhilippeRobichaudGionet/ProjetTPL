import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    nom: '',
    motDePasse: '',
    image: null,
    audio: null,
    couleur: 'aquamarine',
  });

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};
