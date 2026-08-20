import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import { useEffect, useState } from "react";
import { getProductById } from "../api/products";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setError(null);

    const loadedProductById = async () => {
      try {
        setTimeout(() => {});
        const productById = await getProductById(id);
        setProduct(productById);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadedProductById(id);
  }, [id]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>Загрузка...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul>
          <li className={styles.item}>Наименование товара: {product.name}</li>
          <li className={styles.item}>Цена: {product.price} руб.</li>
          <li className={styles.item}>На складе {product.amount} шт.</li>
        </ul>
      )}
    </div>
  );
}
