import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h4>Sobre Nosotros</h4>
        <p>Somos un pequeño grupo preocupado por la sociedad.</p>
      </div>
      <div className={styles.contact}>
        <p>📧 emphatycontact@emphaty.com</p>
        <p>📞 +57 123 456 7890</p>
        <p>🌐 Síguenos en redes sociales</p>
      </div>
    </footer>
  );
}