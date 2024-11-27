import React, { useState } from "react";

const PerfilSeccion: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>("/path/to/default-profile.jpg");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Mi perfil</h3>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden relative">
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer">
            <i className="material-icons text-sm">edit</i>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="ml-4 flex-grow">
          <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            defaultValue="Tomas Poblete Chamorro"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          defaultValue="ft.fernandotomas@gmail.com"
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Número de contacto
        </label>
        <input
          type="tel"
          placeholder="+56912345678"
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
          Rol Actual
        </label>
        <input
          type="text"
          value="Administrador"
          disabled
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
        />
      </div>
      <button className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
        Guardar Cambios
      </button>
    </div>
  );
};

export default PerfilSeccion;
