import { FaRegCopyright } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.foot__text}>
          Copyright{<FaRegCopyright />}
          2024 - SouLLesSNesS | All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
