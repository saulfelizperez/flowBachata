import { useNavigate } from "react-router-dom";

export default function Transport() {
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

  const routeBox =
    "bg-white/10 backdrop-blur-xl border border-white/20 " +
    "rounded-2xl p-5 text-center shadow-lg hover:scale-105 transition";

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
          Cómo llegar a los Sociales 🚇💃
        </h1>

        <button
          onClick={() => navigate("/")}
          className="
            absolute right-0 px-4 py-2 rounded-xl font-semibold cursor-pointer select-none
            transition-all duration-300 ease-out transform-gpu

            bg-white text-orange-600 shadow-md

            hover:scale-125 hover:-translate-y-2
            hover:bg-orange-100
            hover:text-orange-700
            hover:shadow-[0_20px_40px_rgba(255,120,0,0.6)]

            active:scale-95 active:translate-y-0
          "
        >
          Volver
        </button>

      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* QCHIMBA (TOP 1) */}
        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">💃 Qchimba SBK</h2>
          <p className={ratingStyle}>⭐ 5.0 / 5 (Top 1)</p>

          <p className="text-white/80 mb-2">📍 Barcelona (eventos rotativos)</p>
          <p className="text-white/60 text-sm mb-2">🚇 Metro o bus</p>
          <p className="text-white/60 text-sm mb-4">⏱️ 15–25 min desde centro</p>

          <a
            href="https://www.google.com/maps/search/Qchimba+SBK+Barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Abrir en Google Maps
          </a>
        </div>

        {/* ACM (TOP 2) */}
        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">⚡ ACM City</h2>
          <p className={ratingStyle}>⭐ 4.8 / 5 (Top 2)</p>

          <p className="text-white/80 mb-2">📍 Barcelona (sala grande)</p>
          <p className="text-white/60 text-sm mb-2">🚇 Metro + bus</p>
          <p className="text-white/60 text-sm mb-4">⏱️ 20–30 min</p>

          <a
            href="https://www.google.com/maps/search/ACM+City+Barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Abrir en Google Maps
          </a>
        </div>

        {/* BACHATA STATION (TOP 3) */}
        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">🔥 Bachata Station</h2>
          <p className={ratingStyle}>⭐ 4.5 / 5 (Top 3)</p>

          <p className="text-white/80 mb-2">📍 Barcelona (zona urbana céntrica)</p>
          <p className="text-white/60 text-sm mb-2">🚇 Metro + 5-10 min caminando</p>
          <p className="text-white/60 text-sm mb-4">⏱️ 10–15 min desde centro</p>

          <a
            href="https://www.google.com/maps/search/Bachata+Station+Barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Abrir en Google Maps
          </a>
        </div>

        {/* DIO CLUB (TOP 4) */}
        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-1">🔥 Dio Club</h2>
          <p className={ratingStyle}>⭐ 4.2 / 5 (Top 4)</p>

          <p className="text-white/80 mb-2">📍 Barcelona (zona nocturna)</p>
          <p className="text-white/60 text-sm mb-2">🚇 Metro + caminata</p>
          <p className="text-white/60 text-sm mb-4">⏱️ 10–20 min</p>

          <a
            href="https://www.google.com/maps/search/Dio+Club+Barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Abrir en Google Maps
          </a>
        </div>

      </div>

      {/* TIPOS DE ACCESO */}
      <h2 className="text-2xl font-bold text-center mt-14 mb-6">
        🌟 Tipos de acceso
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className={routeBox}>
          <h3 className="text-lg font-bold">🚇 Metro</h3>
          <p className="text-white/70 text-sm mt-2">
            La opción más rápida en Barcelona.
          </p>
        </div>

        <div className={routeBox}>
          <h3 className="text-lg font-bold">🚌 Bus</h3>
          <p className="text-white/70 text-sm mt-2">
            Alternativa para zonas más alejadas.
          </p>
        </div>

        <div className={routeBox}>
          <h3 className="text-lg font-bold">🚗 Coche</h3>
          <p className="text-white/70 text-sm mt-2">
            Ideal para grupos o vuelta nocturna.
          </p>
        </div>

      </div>

      {/* ⭐ ESPECIAL */}
      <h2 className="text-2xl font-bold text-center mt-14 mb-6">
        ⭐ Especial
      </h2>

      <div className="max-w-md mx-auto">

        <div className="
          bg-white/10 backdrop-blur-xl border border-white/20
          rounded-2xl p-6 text-center shadow-lg
          hover:scale-105 transition duration-300
        ">
          <h3 className="text-xl font-bold mb-2">
            🚐 BachataVan BCN de Biden
          </h3>

          <p className="text-white/80 mb-2">
            Transporte compartido directo a los sociales.
          </p>

          <p className="text-white/70 text-sm mb-1">
            💰 Precio: 15€
          </p>

          <p className="text-white/70 text-sm mb-4">
            📞 Contacto: +34 603-19-04-76
          </p>

        </div>

      </div>

    </div>
  );
}