"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    clearCart();
    router.push("/success");
  };

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Checkout</h1>

      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg">
        <label className="block text-white">Full Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 rounded mt-2"
          required
        />

        <label className="block text-white mt-4">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 rounded mt-2"
          required
        />

        <button 
          className="superhero-button w-full mt-6"
          onClick={handleCheckout}
        >
          Confirm & Pay
        </button>
      </div>
    </section>
  );
};

export default CheckoutPage;
