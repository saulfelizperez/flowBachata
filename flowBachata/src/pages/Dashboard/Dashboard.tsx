import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const buttonStyle =
    `
    px-4 py-2 rounded-xl font-semibold
    bg-white text-orange-600 shadow-md
    transition-all duration-300 ease-out
    cursor-pointer select-none
    transform

    hover:scale-110
    hover:-translate-y-1
    hover:bg-orange-100
    hover:shadow-[0_15px_30px_rgba(255,120,0,0.4)]

    active:scale-95
  `;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 text-white">

      {/* HEADER */}
      <div className="relative flex items-center justify-center p-6">

        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-white via-yellow-100 to-orange-200 text-transparent bg-clip-text drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
          🔥 Dashboard FlowBachata
        </h1>

        {/* BUTTONS */}
        <div className="absolute right-6 flex gap-3">

          <button onClick={() => navigate("/")} className={buttonStyle}>
            Home
          </button>

          <button onClick={handleLogout} className={buttonStyle}>
            Log out
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex items-center justify-center h-[calc(100%-80px)]">

        <div className="text-center">

          <h2 className="text-2xl font-bold mb-2">
            Bienvenido {user?.name || "Bailarín"} 💃
          </h2>

          <p className="text-white/70">
            Explora clases, sociales y transporte
          </p>

          <div className="mt-8 flex flex-col gap-4 items-center">

            <button
              onClick={() => navigate("/classes")}
              className="px-6 py-3 rounded-xl font-semibold bg-white text-orange-600 shadow-md hover:scale-105 hover:bg-orange-100 transition"
            >
              Academias
            </button>

            <button
              onClick={() => navigate("/social")}
              className="px-6 py-3 rounded-xl font-semibold bg-white text-orange-600 shadow-md hover:scale-105 hover:bg-orange-100 transition"
            >
              Sociales
            </button>

            <button
              onClick={() => navigate("/transport")}
              className="px-6 py-3 rounded-xl font-semibold bg-white text-orange-600 shadow-md hover:scale-105 hover:bg-orange-100 transition"
            >
              Transporte
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}