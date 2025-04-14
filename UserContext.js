export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nom: '',
    motDePasse: '',
    image: null,
    audio: null,
    couleurFond: '#ffffff',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};