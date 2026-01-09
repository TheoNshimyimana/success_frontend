import { createContext, useEffect, useState, ReactNode } from "react";

/* ================= TYPES ================= */

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

interface UserContextType {
  user: User | null;
  loading: boolean; // ✅ ADD THIS
  login: (userData: User) => void;
  logout: () => void;
}

/* ================= CONTEXT ================= */

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: true, // ✅ default true
  login: () => {},
  logout: () => {},
});

/* ================= PROVIDER ================= */

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ auth loading

  // 🔄 Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false); // ✅ VERY IMPORTANT
  }, []);

  // 🔐 Login
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
  };

  // 🚪 Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
