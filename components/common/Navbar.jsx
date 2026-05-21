"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/common/Navbar.module.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left Side: Brand Text */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <h1 className={styles.logoText}>
            ONE<span>HOME</span>
          </h1>
        </Link>

        {/* Right Side: Desktop Navigation Links */}
        <ul className={styles.navMenu}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Burger Icon for Mobile */}
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.active : ""}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;