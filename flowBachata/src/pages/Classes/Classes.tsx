import { useNavigate } from "react-router-dom";

export default function Classes() {
  const navigate = useNavigate();

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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 text-white">

      {/* HEADER */}
      <div className="relative flex items-center justify-center p-6">

        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-white via-yellow-100 to-orange-200 text-transparent bg-clip-text drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
          🎓 Academias de baile
        </h1>

        {/* BUTTONS */}
        <div className="absolute right-6 flex gap-3">

          <button
            onClick={() => navigate("/")}
            className={buttonStyle}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className={buttonStyle}
          >
            Dashboard
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex items-center justify-center min-h-[80vh]">

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full px-6">

          {/* COME TO DANCE */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg text-center">

            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-orange-500 font-bold text-sm">CTD</span>
            </div>

            <h2 className="text-xl font-bold mb-2">ComeToDance</h2>
            <p className="text-white/70 mb-4">
              Bachata Sensual · Lady Style · Presencial
            </p>

            <a
              href="https://come-to-dance-escola-de-ball.ueniweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition"
            >
              Visitar web
            </a>
          </div>

          {/* SOC DANSA */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg text-center">

            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-orange-500 font-bold text-sm">SD</span>
            </div>

            <h2 className="text-xl font-bold mb-2">Soc Dansa</h2>
            <p className="text-white/70 mb-4">
              Bachata Fusión · Presencial
            </p>

            <a
              href="https://socdansa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition"
            >
              Visitar web
            </a>
          </div>

          {/* V DANCE CLUB */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg text-center">

            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-orange-500 font-bold text-sm">VD</span>
            </div>

            <h2 className="text-xl font-bold mb-2">VdanceClub</h2>
            <p className="text-white/70 mb-4">
              Bachata Sensual · Lady Style · Online
            </p>

            <a
              href="https://vdanceclub.com/es/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition"
            >
              Visitar web
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}