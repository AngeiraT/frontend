"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const OrderButton= () => {
  const router = useRouter();
  return (
    <motion.button
      className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold uppercase shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push("/order")}
    >
      Order Now 🚀
    </motion.button>
  );
};
export default OrderButton
