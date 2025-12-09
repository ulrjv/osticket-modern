import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  HomeIcon,
  UsersIcon,
  TicketIcon,
  BookOpenIcon,
  SunIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { authService } from '../services/ticketsService';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { agent, setAgent } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setAgent(null);
      toast.success('Sesión cerrada exitosamente');
    },
  });

  const navigation = [
    { name: 'Panel de Control', href: '/dashboard', icon: HomeIcon },
    { name: 'Usuarios', href: '/users', icon: UsersIcon },
    { name: 'Tickets', href: '/tickets', icon: TicketIcon },
    { name: 'Base de Conocimientos', href: '/kb', icon: BookOpenIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Bar */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                osTicket Modern
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Bienvenido, {agent?.name}
              </span>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <SunIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              <button
                onClick={() => logoutMutation.mutate()}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
