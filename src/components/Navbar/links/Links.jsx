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
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  // Temp soultion session check authen
  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink key={link.name} items={link} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLink
                  key="Admin"
                  items={{ name: "Admin", path: "/admin" }}
                />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink items={{ name: "Login", path: "/login" }} />
          )}
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
