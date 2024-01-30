import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ items }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={items.path}
        className={`${styles.container} ${
          pathName === items.path && styles.active
        }`}
      >
        {items.name}
      </Link>
    </>
  );
};

export default NavLink;
