import { NavLink, Outlet } from "react-router-dom";
import styles from "./catalog.module.css";
import { useEffect, useState } from "react";
import { getProductsList } from "../api/products";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const loadedProducts = async () => {
      try {
        const productsList = await getProductsList();
        setProducts(productsList);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    loadedProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог товаров:</h1>
      {isLoading ? (
        <div className={styles.loader}>Загрузка...</div>
      ) : error ? (
        <div className={styles.error__message}>{error}</div>
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
