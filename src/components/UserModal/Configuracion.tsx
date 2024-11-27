import React from "react";

const Configuracion: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Configuración y Seguridad</h3>
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Cambio de Contraseña</h4>
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Contraseña Actual
        </label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña actual"
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 mb-4"
        />
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Nueva Contraseña
        </label>
        <input
          type="password"
          placeholder="Ingresa una nueva contraseña"
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 mb-4"
        />
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          placeholder="Confirma tu nueva contraseña"
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 mb-4"
        />
        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
          Cambiar Contraseña
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
