import { useContext, createContext } from "react";

const AuthorContext = createContext({
  authors: [],
});

export const useAuthor = () => useContext(AuthorContext);

export const AuthorProvider = ({ authors, children }) => {
  return (
    <AuthorContext.Provider value={{ authors: authors }}>
      {children}
    </AuthorContext.Provider>
  );
};
