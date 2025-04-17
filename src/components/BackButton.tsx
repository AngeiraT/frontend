"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const BackButton = () => {
  const router = useRouter();

  return (
    <motion.button
      className="mt-6 bg-gray-700 hover:bg-gray-900 px-6 py-3 rounded-lg text-lg font-bold uppercase transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.back()}
    >
      ⬅ Back
    </motion.button>
  );
};
export default BackButton;
