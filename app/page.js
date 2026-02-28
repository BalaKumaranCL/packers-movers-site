import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Professional Packer & Movers Services</h1>
          <p>
            Your trusted partner for safe, reliable, and efficient moving solutions. 
            We provide comprehensive packing and moving services for residential and 
            commercial relocations with care and precision.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link href="/service" className={styles.primary}>
            Our Services
          </Link>
          <Link href="/about" className={styles.secondary}>
            About Us
          </Link>
        </div>
      </main>
    </div>
  );
}
