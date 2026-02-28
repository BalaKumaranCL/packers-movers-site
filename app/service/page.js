import Link from "next/link";
import styles from "../page.module.css";

export default function Service() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Our Professional Services</h1>
          <p>
            We offer a complete range of packing and moving services designed 
            to meet all your relocation needs:
          </p>
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Residential Moving</h3>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Commercial Relocation</h3>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Professional Packing</h3>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Storage Solutions</h3>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Long Distance Moving</h3>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>• Furniture Assembly</h3>
          </div>
          <p>
            All services come with insurance coverage and our satisfaction guarantee.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link href="/about" className={styles.primary}>
            Learn More
          </Link>
          <Link href="/" className={styles.secondary}>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}