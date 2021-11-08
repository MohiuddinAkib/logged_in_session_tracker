import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export enum SessionKeys {
  WORK_DURATION = "work-duration",
}

const AuthProvider: React.FC = (props) => {
  const { set, value: isLoggedIn } = useLocalStorage("is-logged-in", false);

  const login = () => {
    set(true);
  };

  const logout = () => {
    set(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
