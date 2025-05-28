import React from "react";
import { motion } from "framer-motion";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";

const iconSets = {
  MdDashboard: MdIcons.MdDashboard,
  FiInfo: FiIcons.FiInfo,
  FiExternalLink: FiIcons.FiExternalLink,
};

export default function AnimatedButton({ label, to, icon }) {
  const IconComponent = iconSets[icon] || null;

  const isExternal = to && to.startsWith("http");

  return (
    <motion.a
      href={to}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="button flex items-center gap-3"
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #646cff" }}
      whileTap={{ scale: 0.95 }}
    >
      {IconComponent && (
        <IconComponent className="text-xl text-indigo-400" aria-hidden="true" />
      )}
      <span>{label}</span>
    </motion.a>
  );
}
