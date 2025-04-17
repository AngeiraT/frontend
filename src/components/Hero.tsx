"use client";
import { motion } from "framer-motion";
import router, { useRouter } from "next/navigation";


const Hero= () => {
    const router = useRouter();
  return (
    // <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
    <motion.section className="relative h-screen flex flex-col justify-center items-center text-center px-6 superhero-bg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}>
      <motion.h1
        className="text-6xl font-extrabold uppercase text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to The Breakroom
      </motion.h1>

      <motion.p
        className="text-lg mt-4 max-w-2xl"
        // className="text-lg mt-4 max-w-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Fuel up like a superhero! Enjoy Epic breakfast, brunch, and heroic coffee creations.
      </motion.p>

      <motion.button
        className="superhero-button mt-6"
        // className="mt-6 bg-red-600 hover:bg-red-800 px-6 py-3 rounded-lg text-lg font-bold uppercase transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/menu")}
      >
        View Menu
      </motion.button>
    </motion.section>
  );
};
export default Hero;
