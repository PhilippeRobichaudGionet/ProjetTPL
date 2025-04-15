import React, { createContext, useState } from 'react';

export const ProfilContext = createContext();

export const ProfilProvider = ({ children }) => {
  const [User, setUser] = useState({
    nom: '',
    motDePasse: '',
    image: null,
    audio: null,
    couleur: 'aquamarine',
  });

  return (
    <ProfilContext.Provider value={{ User, setUser }}>
      {children}
    </ProfilContext.Provider>
  );
};
