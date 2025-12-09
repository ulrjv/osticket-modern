import React from 'react';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Panel de Control
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tickets Abiertos
            </h3>
            <p className="text-3xl font-bold text-blue-600">--</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tickets Contestados
            </h3>
            <p className="text-3xl font-bold text-green-600">--</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tickets Cerrados
            </h3>
            <p className="text-3xl font-bold text-gray-600">--</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
