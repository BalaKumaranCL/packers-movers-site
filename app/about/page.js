import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>About Our Moving Company</h1>
          <p>
            With over 15 years of experience in the moving industry, we are 
            committed to providing exceptional packing and moving services. 
            Our team of trained professionals ensures your belongings are 
            handled with the utmost care and precision.
          </p>
          <p>
            We understand that moving can be stressful, which is why we offer 
            comprehensive solutions tailored to your specific needs. From 
            residential relocations to commercial moves, we have the expertise 
            and equipment to make your move seamless and worry-free.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link href="/service" className={styles.primary}>
            View Services
          </Link>
          <Link href="/" className={styles.secondary}>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}