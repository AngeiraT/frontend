"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="p-4 flex justify-between items-center bg-black text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">Superhero Café</h1>
      </Link>
      
      <Link href="/order" className="relative">
        🛒 Order
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
