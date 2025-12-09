import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Agent } from '../types';

interface AuthContextType {
  agent: Agent | null;
  setAgent: (agent: Agent | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [agent, setAgent] = useState<Agent | null>(null);

  useEffect(() => {
    // Intentar recuperar agente del localStorage
    const savedAgent = localStorage.getItem('agent');
    if (savedAgent) {
      try {
        setAgent(JSON.parse(savedAgent));
      } catch (error) {
        console.error('Error parsing saved agent:', error);
        localStorage.removeItem('agent');
      }
    }
  }, []);

  useEffect(() => {
    // Guardar agente en localStorage cuando cambie
    if (agent) {
      localStorage.setItem('agent', JSON.stringify(agent));
    } else {
      localStorage.removeItem('agent');
    }
  }, [agent]);

  return (
    <AuthContext.Provider
      value={{
        agent,
        setAgent,
        isAuthenticated: !!agent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
