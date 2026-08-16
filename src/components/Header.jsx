import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <NavLink to="/" className={styles.item}>
            Главная страница
          </NavLink>
          <NavLink to="/catalog" className={styles.item}>
            Каталог
          </NavLink>
          <NavLink to="/contacts" className={styles.item}>
            Контакты
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
