import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 flex items-center justify-center p-6">

      <div className="text-center text-white">

        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="text-xl mt-4 text-white/80">
          Página no encontrada
        </p>

        <p className="text-white/60 mt-2">
          Parece que te has perdido en el flow 😅
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition"
        >
          Volver al inicio
        </Link>

      </div>

    </div>
  );
}