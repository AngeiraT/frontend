
// import MenuItem from "@/components/MenuItem";
// import { useCart } from "@/context/CartContext";
// import { notFound } from "next/navigation";
// import ItemPageClient from "./ItemPageClient";

// const menuItems = {
//   espresso: { name: "Espresso", image: "/images/espresso.jpg", price: "3.99", description: "Strong and rich espresso shot." },
//   latte: { name: "Latte", image: "/images/latte.jpg", price: "4.99", description: "Smooth espresso with steamed milk." },
//   "iced-latte": { name: "Iced Latte", image: "/images/iced-latte.jpg", price: "5.49", description: "Chilled espresso with milk." },
//   croissant: { name: "Croissant", image: "/images/croissant.jpg", price: "2.99", description: "Flaky, buttery pastry." },
// };

// // export const generateMetadata = async ({ params }: { params: { id: string } }) => {
// //     const item = menuItems[params.id as keyof typeof menuItems];
// //     if (!item) return { title: "Item Not Found" };
// //     return { title: `${item.name} - Superhero Café` };
// // }

// // export default function ItemPage({ params }: { params: { id: string } }) {
// //     return <ItemPageClient params={params} /> 
// // }

// // export const generateMetadata = ({ params }: { params: { id: string } }) => {
// //     console.log(params.id)

// //     if (!params || !params.id) {
// //         return { title: "Item Not Found" };
// //     }
// //     const item = menuItems[params.id as keyof typeof menuItems];

// //     if (!item) return { title: "Item Not Found" };
// //     return { title: `${item.name} - Superhero Café` };
// // };

// // export default function ItemPage({ params }: { params: { id: string } }) {
// //     return <ItemPageClient params={params} /> 
// // }

// // export const generateStaticParams = async () => {
// //     return Object.keys(menuItems).map((id) => ({ id }));
// // };

// // export const generateMetadata = async ({ params }: { params: { id: string } }) => {
// //     const itemId = await Promise.resolve(params.id); // Ensuring it's awaited
// //     const item = menuItems[itemId as keyof typeof menuItems];

// //     if (!item) return { title: "Item Not Found" };
// //     return { title: `${item.name} - Superhero Café` };
// // };

// // export const generateMetadata = async ({ params }: { params: { id: string } }) => {
// //     console.log("Fetching metadata for:", params); // Debugging step

// //     if (!params || !params.id) {
// //         return { title: "Item Not Found" };
// //     }

// //     // ✅ Ensure params.id is awaited if needed
// //     const itemId = await Promise.resolve(params.id); // Ensuring it's awaited properly
// //     const item = menuItems[itemId as keyof typeof menuItems];

// //     if (!item) return { title: "Item Not Found" };
// //     return { title: `${item.name} - Superhero Café` };
// // };
// // Generate Metadata for Dynamic Route
// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//     // Ensure params.id is correctly awaited and used within async context
//     if (!params?.id) {
//         return { title: "Item Not Found" };
//     }

//     // Static data lookup
//     const item = menuItems[params.id as keyof typeof menuItems];

//     // If item exists, return title; otherwise, return fallback
//     return item ? { title: `${item.name} - Superhero Café` } : { title: "Item Not Found" };
// };











// // ✅ Ensure static paths are generated correctly
// export const generateStaticParams = async () => {
//     return Object.keys(menuItems).map((id) => ({ id }));
// };

// // ✅ Add the missing default export!
// // Main Dynamic Item Page Component
// export default function ItemPage({ params }: { params: { id: string } }) {
//     // Check if the item exists in the menu data
//     const item = menuItems[params.id as keyof typeof menuItems];
    
//     if (!item) {
//       return notFound(); // Handles the 404 page for missing items
//     }
  
//     return <ItemPageClient params={params} />;
//   }


// // const ItemPage = ({ params }: { params: { id: string } }) => {
// //     const { addToCart } = useCart();
// //     const item = menuItems[params.id as keyof typeof menuItems];

// //     if (!item) return notFound();

// //     return (
// //         <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg">
// //         <h1 className="text-5xl font-extrabold uppercase text-yellow-400">{item.name}</h1>
// //         <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mt-6 rounded-lg shadow-lg" />
// //         <p className="text-lg mt-4 max-w-2xl">{item.description}</p>
// //         <p className="text-yellow-400 text-xl mt-2">${item.price}</p>

// //         <button
// //             className="superhero-button mt-6"
// //             onClick={() => addToCart({ id: params.id, name: item.name, price: item.price, image: item.image, quantity: 1 })}
// //         >
// //             Add to Order
// //         </button>
// //         </section>
// //     );
// // };

// // export default ItemPage;

import { notFound } from "next/navigation";
import ItemPageClient from "./ItemPageClient";
import { menuItems } from "@/app/lib/menu-data";

// const menuItems = {
//   espresso: { name: "Espresso", image: "/images/espresso.jpg", price: "3.99", description: "Strong and rich espresso shot." },
//   latte: { name: "Latte", image: "/images/latte.jpg", price: "4.99", description: "Smooth espresso with steamed milk." },
//   "iced-latte": { name: "Iced Latte", image: "/images/iced-latte.jpg", price: "5.49", description: "Chilled espresso with milk." },
//   croissant: { name: "Croissant", image: "/images/croissant.jpg", price: "2.99", description: "Flaky, buttery pastry." },
// };

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//     const item = menuItems[params.id as keyof typeof menuItems];
//     if (!item) return { title: "Item Not Found" };
//     return { title: `${item.name} - Superhero Café` };
// }

// export default function ItemPage({ params }: { params: { id: string } }) {
//     return <ItemPageClient params={params} /> 
// }

// export const generateMetadata = ({ params }: { params: { id: string } }) => {
//     console.log(params.id)

//     if (!params || !params.id) {
//         return { title: "Item Not Found" };
//     }
//     const item = menuItems[params.id as keyof typeof menuItems];

//     if (!item) return { title: "Item Not Found" };
//     return { title: `${item.name} - Superhero Café` };
// };

// export default function ItemPage({ params }: { params: { id: string } }) {
//     return <ItemPageClient params={params} /> 
// }

// export const generateStaticParams = async () => {
//     return Object.keys(menuItems).map((id) => ({ id }));
// };

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//     const itemId = await Promise.resolve(params.id); // Ensuring it's awaited
//     const item = menuItems[itemId as keyof typeof menuItems];

//     if (!item) return { title: "Item Not Found" };
//     return { title: `${item.name} - Superhero Café` };
// };

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//     console.log("Fetching metadata for:", params); // Debugging step

//     if (!params || !params.id) {
//         return { title: "Item Not Found" };
//     }

//     // ✅ Ensure params.id is awaited if needed
//     const itemId = await Promise.resolve(params.id); // Ensuring it's awaited properly
//     const item = menuItems[itemId as keyof typeof menuItems];

//     if (!item) return { title: "Item Not Found" };
//     return { title: `${item.name} - Superhero Café` };
// };
//Generate Metadata for Dynamic Route
// Generate metadata for the page
// Fix: Metadata function should not need async await for params.id in this case
// Async metadata function for dynamic routes
// Generate static params for dynamic routes
// export const generateStaticParams = async () => {
//   const staticParams = Object.keys(menuItems).map((id) => ({ id }));
//   console.log("🛠 Static params:", staticParams);
//   return staticParams;
//   // return Object.keys(menuItems).map((id) => ({ id }));
// };
type Props = {
  params: { id: string };
};

// export async function generateStaticParams() {
//   const ids = Object.values(menuItems)
//     .flat()
//     .map((item) => ({ id: item }));

//   return ids;
// }
// Main dynamic page component
// export default async function ItemPage({ params }: { params: { id: string } }) {
  export default async function ItemPage({ params }: Props) {
    const { id } = params;

    // Flatten the categories and find the item
    const item = Object.values(menuItems)
      .flat()
      .find((item) => item.id === id.toLowerCase());
  console.log ("✅ Received params:", params)
  // const id = params.id.toLowerCase();
  console.log("✅ Received id:", id)

  // const item = menuItems[id as keyof typeof menuItems];
  // console.log( "✅ Received item:", item)
  // const resolvedParams = await params; // 🔥 Ensure params is resolved before use
  // console.log("✅ Received params:", resolvedParams);

  // if (!resolvedParams?.id) {
  //   console.error("❌ params.id is missing!");
  //   return notFound();
  // }

  // const item = menuItems[resolvedParams.id.toLowerCase() as keyof typeof menuItems];

  if (!item) {
    // console.error("❌ No menu item found for id:", resolvedParams.id);
    return notFound();
  }

  console.log("✅ Found menu item:", item);
  // console.log("✅ Received params:", params);
  // if (!params?.id) return notFound();
  // const item = menuItems[params.id as keyof typeof menuItems];

  // if (!item) {
  //   console.error("❌ No menu item found for id:", params.id);
  //   return notFound(); // Handle 404 if item not found
  // }
  // console.log("✅ Found menu item:", item);

  return <ItemPageClient item={item} />;
  // return <ItemPageClient params={params} />;
}

// // Static generation with getStaticProps
// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const item = menuItems[params.id as keyof typeof menuItems];

//   if (!item) {
//     return {
//       notFound: true, // Return 404 if item not found
//     };
//   }

//   return {
//     props: {
//       item,
//     },
//   };
// }

// Dynamic metadata generation for dynamic routes
// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//   const item = menuItems[params.id as keyof typeof menuItems];
  
//   return item
//     ? { title: `${item.name} - Superhero Café` }
//     : { title: "Item Not Found" };
// };
