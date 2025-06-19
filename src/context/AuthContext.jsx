
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('cosmoMatchUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Fake authentication - accept any email/password
    const userData = {
      id: Date.now(),
      email: email,
      name: email.split('@')[0], // Use part before @ as name
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('cosmoMatchUser', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    
    return { success: true };
  };

  const register = (email, password, name) => {
    // Fake registration - just save the data
    const userData = {
      id: Date.now(),
      email: email,
      name: name || email.split('@')[0],
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('cosmoMatchUser', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('cosmoMatchUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (profileData) => {
    const updatedUser = { ...user, ...profileData };
    localStorage.setItem('cosmoMatchUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
    return { success: true };
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
