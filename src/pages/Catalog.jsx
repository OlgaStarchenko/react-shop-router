import { NavLink, Outlet } from "react-router-dom";
import styles from "./catalog.module.css";

const products = [
  { id: "1", name: "Телевизор" },
  { id: "2", name: "Смартфон" },
  { id: "3", name: "Планшет" },
];

export default function Catalog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог товаров:</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <NavLink className={styles.item} to={id}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
