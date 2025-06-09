import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar correo
    if (!email.endsWith('@gmail.com')) {
      setError('El correo debe terminar en @gmail.com');
      return;
    }

    // Validar contraseña
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todo está bien
    setError('');
    console.log('Login exitoso con:', email, password);

    // Redirigir o hacer login real aquí
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar sesión</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Correo @gmail.com"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Entrar
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

export default Login;
