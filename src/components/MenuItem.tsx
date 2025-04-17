"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MenuItem = ({ id, name, image, price }: { id: string; name: string; image: string; price: string }) => {
    const router = useRouter();
  return (
    <motion.div
      className="relative w-64 h-80 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => router.push(`/menu/${id}`)}
    >
      <img src={image} alt={name} className="w-full h-full object-cover opacity-90 hover:opacity-100" />
      {/* <div className="absolute bottom-0 bg-black/70 text-white w-full text-center p-4"> */}
      < div className="absolute inset-0 bg-[url('/images/superhero-bg1.jpg')] bg-cover bg-center superhero-bg">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-yellow-400">${price}</p>
      </div>
    </motion.div>
  );
};
export default MenuItem;
