"use client";
import React from "react";
import styles from "@/styles/landingpage/Contact.module.scss";
import { LetsWorkTogether } from "../ui/letsWork";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className={styles.container}
    >
      <motion.div variants={itemVariants}>
        <LetsWorkTogether />
        <div className={styles.decor}></div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;