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
        </div>
      </nav>
    </header>
  );
}
