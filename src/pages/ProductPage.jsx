import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch(`http://localhost:3004/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки");
        }
        return response.json();
      })

      .then((product) =>
        setTimeout(() => {
          setIsLoading(false);
          setProduct(product);
        }, 2500),
      )
      .catch(() => {
        setError("Ошибка загрузки, повторите попытку");
        setIsLoading(false);
      });
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
