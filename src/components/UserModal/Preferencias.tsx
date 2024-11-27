import React from "react";
import { useThemeContext } from "../../ThemeContext"; // Asegúrate de tener un contexto configurado

const Preferencias: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Preferencias</h3>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Tema
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-lg ${
              theme === "light"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            Claro
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            Oscuro
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`px-4 py-2 rounded-lg ${
              theme === "system"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            Automático
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferencias;
