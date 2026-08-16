import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <Link to="/" className={styles.item}>
            Главная страница
          </Link>
          <Link to="/catalog" className={styles.item}>
            Каталог
          </Link>
          <Link to="/contacts" className={styles.item}>
            Контакты
          </Link>
        </div>
      </nav>
    </header>
  );
}
