import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!soloLetras(nombre) || nombre.length < 3) {
      setError('El nombre debe contener solo letras y más de 3 caracteres');
      return;
    }

    if (!soloLetras(apellido) || apellido.length < 3) {
      setError('El apellido debe contener solo letras y más de 3 caracteres');
      return;
    }

    if (!correo.endsWith('@gmail.com')) {
      setError('El correo debe terminar en @gmail.com');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Si todo es válido
    setError('');
    console.log('Usuario registrado:', { nombre, apellido, correo });
    // Aquí podrías enviar los datos a tu backend

    // Redirigir, si es necesario
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Registro de Usuario</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-2 mb-3 border rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="w-full p-2 mb-3 border rounded"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo @gmail.com"
            className="w-full p-2 mb-3 border rounded"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repetir contraseña"
            className="w-full p-2 mb-4 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Registrar
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mt-2"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Register;
