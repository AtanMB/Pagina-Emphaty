import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h4>Sobre Nosotros</h4>
        <p>Somos un emprendimiento dedicado a crear libretas personalizadas únicas para ti.</p>
      </div>
      <div className={styles.contact}>
        <p>📧 contacto@mynotebook.com</p>
        <p>📞 +57 123 456 7890</p>
        <p>🌐 Síguenos en redes sociales</p>
      </div>
    </footer>
  );
}