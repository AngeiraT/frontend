// "use client";

// import { useCart} from "@/context/CartContext";
// import { notFound } from "next/navigation";

// const menuItems = {
//     espresso: { name: "Espresso", image: "/images/espresso.jpg", price: "3.99", description: "Strong and rich espresso shot." },
//     latte: { name: "Latte", image: "/images/latte.jpg", price: "4.99", description: "Smooth espresso with steamed milk." },
//     "iced-latte": { name: "Iced Latte", image: "/images/iced-latte.jpg", price: "5.49", description: "Chilled espresso with milk." },
//     croissant: { name: "Croissant", image: "/images/croissant.jpg", price: "2.99", description: "Flaky, buttery pastry." },
//   };

// const ItemPage = ({ params }: { params: { id: string } }) => {
//     const { addToCart } = useCart();

//     const { id } = params;

//     if (!id) {
//         return notFound(); // Handle case where there is no id
//     }

//     const item = menuItems[id as keyof typeof menuItems];

//     if (!item) {
//         return notFound(); // Handles 404 if the item does not exist
//     }
//     // Ensure params.id is handled properly
//     // const id = params?.id;

//     // if (!id || !menuItems[id as keyof typeof menuItems]) {
//     //     return notFound(); // Automatically handles 404 pages
//     // }
//     // const item = menuItems[params.id as keyof typeof menuItems];

//     // if (!item) return notFound();

//     const handleAddToCart = () => {
//         addToCart({ id: id, name: item.name, price: item.price, image: item.image, quantity: 1 });
//       };

//     return (
//         <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
//         <h1 className="text-5xl font-extrabold uppercase text-yellow-400">{item.name}</h1>
//         <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mt-6 rounded-lg shadow-lg" />
//         <p className="text-lg mt-4 max-w-2xl">{item.description}</p>
//         <p className="text-yellow-400 text-xl mt-2">${item.price}</p>

//         <button
//             className="superhero-button mt-6"
//             onClick={handleAddToCart}
//             // onClick={() => addToCart({ id: params.id, name: item.name, price: item.price, image: item.image, quantity: 1 })}
//         >
//             Add to Order
//         </button>
//         </section>
//     );
// };

// export default ItemPage;

"use client";

import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import router from "next/router";

const menuItems = {
  espresso: { name: "Espresso", image: "/images/espresso.png", price: "3.99", description: "Strong and rich espresso shot." },
  latte: { name: "Latte", image: "/images/latte.png", price: "4.99", description: "Smooth espresso with steamed milk." },
  "iced-latte": { name: "Iced Latte", image: "/images/iced-latte.png", price: "5.49", description: "Chilled espresso with milk." },
  croissant: { name: "Croissant", image: "/images/croissant.png", price: "2.99", description: "Flaky, buttery pastry." },
};
type ItemPageClientProps = {
  // params: { id: string };
  item: {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
  };
};

// const ItemPageClient = ({ params }: { params: { id: string } }) => {
//   const { addToCart } = useCart();

//   const { id } = params;

//   if (!id) {
//     return notFound(); // Handle case where there is no id
//   }

//   const item = menuItems[id as keyof typeof menuItems];

//   if (!item) {
//     return notFound(); // Handles 404 if the item does not exist
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: id,
//       name: item.name,
//       price: item.price,
//       image: item.image,
//       quantity: 1
//     });
//   };

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
//       <h1 className="text-5xl font-extrabold uppercase text-yellow-400">{item.name}</h1>
//       <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mt-6 rounded-lg shadow-lg" />
//       <p className="text-lg mt-4 max-w-2xl">{item.description}</p>
//       <p className="text-yellow-400 text-xl mt-2">${item.price}</p>

//       <button
//         className="superhero-button mt-6"
//         onClick={handleAddToCart}
//       >
//         Add to Order
//       </button>
//     </section>
//   );
// };

// export default ItemPageClient;
const ItemPageClient: React.FC<ItemPageClientProps> = ({  item }) => {
// const ItemPageClient = ({ params }: { params: { id: string } }) => {
  const { addToCart } = useCart();

  // const { id } = params;
  // if (!id) return notFound(); // Handle case where there is no id

  // const item = menuItems[id as keyof typeof menuItems];
  if (!item) return notFound(); // Handle 404 if the item doesn't exist

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
      <h1 className="text-5xl font-extrabold uppercase text-yellow-400">{item.name}</h1>
      <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mt-6 rounded-lg shadow-lg" />
      <p className="text-lg mt-4 max-w-2xl">{item.description}</p>
      <p className="text-yellow-400 text-xl mt-2">${item.price}</p>

      <button className="superhero-button mt-6" onClick={handleAddToCart}>
        Add to Order
      </button>
    </section>
    // <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
    //   <h1 className="text-5xl font-extrabold uppercase text-yellow-400">{item.name}</h1>
    //   <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mt-6 rounded-lg shadow-lg" />
    //   <p className="text-lg mt-4 max-w-2xl">{item.description}</p>
    //   <p className="text-yellow-400 text-xl mt-2">${item.price}</p>

    //   <button className="superhero-button mt-6" onClick={handleAddToCart}>
    //     Add to Order
    //   </button>
    // </section>
  );
};

export default ItemPageClient;