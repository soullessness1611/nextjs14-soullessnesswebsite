import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import logoPic from "@/lib/images/ZenMonk.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <Link href="/" className={styles.alink}>
            <Image
              className={styles.logo}
              src={logoPic}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className={styles.logoText1}>
            <Link href="/" className={styles.alink}>
              <span>ZEN 禪 禅 선 Thiền</span>
            </Link>
          </div>
          <div className={styles.logoText2}>
            <Link href="/" className={styles.alink}>
              <span>SouLLesSNesS.com</span>
            </Link>
          </div>
        </div>
        <div>
          <Links />
        </div>
      </div>
    </>
  );
};

export default Navbar;
