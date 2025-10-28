import { motion, AnimatePresence } from "framer-motion";

export default function FlipDigit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 md:w-20 md:h-24 bg-[#082E73] text-[#B7E300] font-bold text-5xl md:text-6xl rounded-lg overflow-hidden shadow-lg">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center backface-hidden"
          >
            {String(value).padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-sm mt-2 text-[#082E73] font-semibold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
