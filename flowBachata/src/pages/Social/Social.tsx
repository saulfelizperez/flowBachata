import { useNavigate } from "react-router-dom";

export default function Social() {
  const navigate = useNavigate();

  const cardStyle =
    "bg-white/10 backdrop-blur-xl border border-white/20 " +
    "rounded-2xl p-6 text-white shadow-lg text-center " +
    "hover:scale-105 transition duration-300";

  const btnStyle =
    "mt-4 block w-full py-2 rounded-xl font-semibold " +
    "bg-white text-orange-600 shadow-md " +
    "hover:scale-105 hover:bg-orange-100 hover:shadow-[0_10px_25px_rgba(255,120,0,0.5)] " +
    "transition";

  const ratingStyle =
    "text-yellow-300 text-sm font-semibold mb-2";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 text-white p-6">

      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-10">

        <h1 className="
          text-4xl font-extrabold px-8 py-3 rounded-2xl
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_0_30px_rgba(255,120,0,0.4)]
          bg-gradient-to-r from-white via-yellow-100 to-white
          text-transparent bg-clip-text
        ">
          Sociales de Bachata 💃🔥
        </h1>

        {/* 🔙 VOLVER A HOME */}
        <button
          onClick={() => navigate("/")}
          className="
            absolute right-0 px-4 py-2 rounded-xl font-semibold
            bg-white text-orange-600 shadow-md
            hover:scale-125 hover:-translate-y-2
            hover:bg-orange-100 hover:text-orange-700
            hover:shadow-[0_20px_40px_rgba(255,120,0,0.6)]
            transition
          "
        >
          Volver
        </button>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">💃 Qchimba SBK</h2>
          <p className={ratingStyle}>⭐ 5.0 / 5 (Top 1)</p>

          <p className="text-white/70 mb-2">
            Eventos sociales con salsa, bachata y kizomba.
          </p>

          <p className="text-white/60 text-sm mb-4">
            Ambiente muy social, ideal para practicar sin presión.
          </p>

          <a
            href="https://www.instagram.com/quechimba_sbk/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Ver Instagram
          </a>
        </div>

        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">⚡ ACM City</h2>
          <p className={ratingStyle}>⭐ 4.8 / 5 (Top 2)</p>

          <p className="text-white/70 mb-2">
            Evento grande con talleres y dos salas de baile.
          </p>

          <p className="text-white/60 text-sm mb-4">
            Muy estructurado y nivel alto de experiencia.
          </p>

          <a
            href="https://www.instagram.com/acmcity/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Ver Instagram
          </a>
        </div>

        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">🔥 Bachata Station</h2>
          <p className={ratingStyle}>⭐ 4.5 / 5 (Top 3)</p>

          <p className="text-white/70 mb-2">
            Social urbano de bachata sensual.
          </p>

          <p className="text-white/60 text-sm mb-4">
            Ambiente moderno con mucha rotación.
          </p>

          <a
            href="https://bachatastation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Ver evento
          </a>
        </div>

        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">🔥 Dio Club</h2>
          <p className={ratingStyle}>⭐ 4.2 / 5 (Top 4)</p>

          <p className="text-white/70 mb-2">
            Club nocturno con bachata y salsa.
          </p>

          <p className="text-white/60 text-sm mb-4">
            Ambiente de fiesta hasta tarde.
          </p>

          <a
            href="https://www.instagram.com/dioclub/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Ver Instagram
          </a>
        </div>

      </div>

    </div>
  );
}