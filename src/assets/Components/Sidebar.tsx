import { Link } from "react-router-dom";
import { FiBook, FiUser } from "react-icons/fi";

function Sidebar() {
  return (

    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <Link to="/dashboard">
        <h2 className="text-2xl font-bold mb-6 hover:text-gray-300 cursor-pointer">
          Portafolio
        </h2>
      </Link>

      <nav className="flex flex-col space-y-4">
        <ul>
          <li>
            <Link
              to="practicas"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FiBook className="text-xl" />
              <span>Prácticas</span>
            </Link>
          </li>
          <li>
            <Link
              to="acerca-de-mi" // Cambiado a "acerca-de-mi"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FiUser className="text-xl" />
              <span>Acerca de mí</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
