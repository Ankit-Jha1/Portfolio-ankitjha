import styles from "../../styles/Home.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
      <nav id="navbar" className={styles.navGrid}>
        <Link href="/">
          <h1 className={styles.navbarContent}>Home</h1>
        </Link>
        <Link href="projects">
          <h1 className={styles.navbarContent}>Projects</h1>
        </Link>
        <Link href="about">
          <h1 className={styles.navbarContent}>About</h1>
        </Link>
        <Link href="contact">
          <h1 className={styles.navbarContent}>Contact</h1>
        </Link>
      </nav>
    </div>
      <hr className={styles.line} />
      </>
  );
};

export default Navbar;
