import React from "react";

const Notificaciones: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Notificaciones y Alertas</h3>
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Preferencias de Notificaciones</h4>
        <div className="mb-4 flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Consultas realizadas
          </span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Alertas de seguridad
          </span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
