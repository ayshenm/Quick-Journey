import { loginApi, logoutRequest } from '@/api';
import { decodeToken, getLocalStorage, removeLocalStorage, setLocalStorage } from '@/utils';
import { createContext, useState, useContext, useEffect, ReactNode, FC } from 'react';

interface User {
  username: string;
  roles: string[];
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(getLocalStorage<string>('access_token'));
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setLocalStorage('access_token', token);
      const decodedUser = decodeToken(token);
      setUser({ username: decodedUser.email, roles: [] });
    } else {
      removeLocalStorage('access_token');
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const data = await loginApi({ username, password });
      setToken(data.access_token);
      setLocalStorage('access_token', data.access_token);

      const decodedUser = decodeToken(data.access_token);
      setUser({ username: decodedUser.email, roles: [] });
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
    } catch (error) {
      console.error('Logout request failed', error);
    } finally {
      setToken(null);
      removeLocalStorage('access_tokenn');
      setUser(null);
    }
  };

  const value: AuthContextType = {
    token,
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!token
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
