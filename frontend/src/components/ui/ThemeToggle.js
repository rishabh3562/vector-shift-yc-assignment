import React from "react";
import { motion } from "framer-motion";

export const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <motion.button
      className="theme-toggle-btn"
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "dark" ? "𖤓" : "☾"}
    </motion.button>

  );
};