"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const OrderPage = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const router = useRouter();
    return (
        <section className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Order</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your order is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-yellow-400">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <button className="text-red-500 font-bold" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          
          <button className="superhero-button w-full mt-6" onClick={() => {
            clearCart();
            router.push("/checkout");
          }}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
    //   <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
    //     <h1 className="text-5xl font-extrabold uppercase text-yellow-400">🚀 Order Your Superhero Meal!</h1>
    //     <p className="text-lg mt-4 max-w-2xl">
    //       Select your favorite meals and drinks. Get ready for an epic experience!
    //     </p>
  
    //     <button className="superhero-button mt-6">Checkout</button>
    //   </section>
    );
  };
  
  export default OrderPage;