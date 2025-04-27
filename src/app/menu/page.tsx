// "use client";
// import { motion } from "framer-motion";
// import MenuItem from "@/components/MenuItem";
// import BackButton from "@/components/BackButton";
// import OrderButton from "@/components/OrderButton";
// const MenuPage= () => {
//     return (

//       <motion.section className="min-h-screen bg-black text-white flex flex-col items-center py-12"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.5 }}>
//         <h1 className="text-5xl font-extrabold uppercase text-yellow-400">Our Superhero Menu</h1>
//         <p className="mt-4 text-lg text-gray-300">Choose your hero meal and fuel up! ⚡</p>
  
//         {/* Menu Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
//           {/* Replace these with actual menu items */}
//           <MenuItem name="Hero Burger" image="/images/hero-burger.jpg" price="12.99" />
//           <MenuItem name="Super Pancakes" image="/images/super-pancakes.jpg" price="9.99" />
//           <MenuItem name="Power Coffee" image="/images/power-coffee.jpg" price="4.99" />
//         </div>
//         <BackButton />
//         {/* Order Button */}
//       <OrderButton />
//       </motion.section>
//     );
//   };
//   export default MenuPage;
  
"use client";

import { useState } from "react";
import MenuItem from "@/components/MenuItem";

const menuCategories = [
  { id: "hot-coffee", name: "Hot Coffee" },
  { id: "cold-coffee", name: "Cold Coffee" },
  { id: "pastries", name: "Pastries" },
];

const menuItems = {
  "hot-coffee": [
    { id: "espresso", name: "Espresso", image: "/images/espresso.png", price: "3.99" },
    { id: "latte", name: "Latte", image: "/images/latte.png", price: "4.99" },
  ],
  "cold-coffee": [
    { id: "iced-latte", name: "Iced Latte", image: "/images/iced-latte.png", price: "5.49" },
  ],
  "pastries": [
    { id: "croissant", name: "Croissant", image: "/images/croissant.png", price: "2.99" },
  ],
};

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex">
      {/* Left Side - Menu List */}
      <div className="w-1/3 p-6 bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          {menuCategories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer p-2 text-lg ${
                selectedCategory === category.id ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Show Items When Category is Selected */}
    <div className="w-2/3 p-6">
        {selectedCategory ? (
            <div className="grid grid-cols-2 gap-6">
                {menuItems[selectedCategory as keyof typeof menuItems]?.map((item) => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </div>
        ) : (
            <p className="text-center text-gray-400">Select a category to see items.</p>
        )}
    </div>
    </section>
  );
};

export default MenuPage; 