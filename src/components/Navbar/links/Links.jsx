"use client";

import NavLink from "./navLink/navLink";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import styles from "./links.module.css";
import { useState } from "react";

const Links = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Insight", path: "/insight" },
    { name: "Books", path: "/books" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink key={link.name} items={link} />
          ))}
        </div>
      </div>
      <FaBars
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div
          className={styles.mobilelinks}
          onClick={() => setOpen((prev) => !prev)}
        >
          <GrClose
            className={styles.menuButton}
            onClick={() => setOpen((prev) => prev)}
          />
          {links.map((link) => (
            <NavLink key={link.name} items={link} />
          ))}
        </div>
      )}
    </>
  );
};
export default Links;
