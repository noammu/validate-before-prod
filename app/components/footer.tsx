import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; {new Date().getFullYear()} Feature Vetta. All rights reserved.</p>
          <p>Empowering teams to build better software through rigorous validation.</p>
        </div>
      </div>
    </footer>
  );
}
