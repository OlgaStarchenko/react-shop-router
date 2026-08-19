import { NavLink, Outlet } from "react-router-dom";
import styles from "./catalog.module.css";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((products) =>
        setTimeout(() => {
          setIsLoading(false);
          setProducts(products);
        }, 2500),
      );
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог товаров:</h1>
      {isLoading ? (
        <div className={styles.loader}>Загрузка...</div>
      ) : (
        <ul>
          {products.map(({ id, name }) => (
            <li key={id}>
              <NavLink className={styles.item} to={id}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
