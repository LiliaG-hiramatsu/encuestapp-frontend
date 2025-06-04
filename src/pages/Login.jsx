import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar sesión</h2>
        <form>
          <input
            type="text"
            placeholder="Usuario"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
          <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mt-2"
        >
          Cancelar
        </button>
        </form>
      </div>
    </div>
  );
}