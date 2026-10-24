import { useState } from "react";
import { coffees, type Coffee } from "./data";
import { ENV } from "./env.constants";
import coffeePhoto from "./assets/coffee.jpg";

export const App = () => {
  const [cart, setCart] = useState<Coffee[]>([]);

  return (
    <main>
      {ENV.SHOW_OFFERS && <p className="offer-banner">Envío gratis este mes</p>}
      <h2 className="my-4 text-2xl font-bold">{ENV.SHOP_NAME} · Cafés del mes</h2>
      <img src={coffeePhoto} alt="" className="mb-6 rounded-lg" />
      <ul className="grid gap-4 sm:grid-cols-3">
        {coffees.map((coffee) => (
          <li key={coffee.id} className="rounded-lg border border-stone-200 bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold">{coffee.name}</h3>
            <p className="mb-3 text-stone-600">{coffee.price.toFixed(2)} €</p>
            <button
              className="rounded bg-amber-700 px-4 py-2 font-bold text-white hover:bg-amber-800"
              onClick={() => setCart((prev) => [...prev, coffee])}
            >
              Añadir
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-6">Bolsas en el carrito: {cart.length}</p>
      <small className="text-stone-500">API: {ENV.API_BASE}</small>
    </main>
  );
};
