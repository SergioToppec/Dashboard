import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 relative">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Iniciar sesión
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="email"
                placeholder="Correo"
                required
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-gray-700"></i>
            </div>
            <div className="mb-6 relative">
              <input
                className="w-full px-3 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="password"
                placeholder="Contraseña"
                required
              />
              <i className="fas fa-lock absolute right-3 top-3 text-gray-700"></i>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-500">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
