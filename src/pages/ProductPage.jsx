import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";

const product = (id) =>
  ({
    1: { id: 1, name: "Телевизор", price: 29900, amount: 15 },
    2: { id: 2, name: "Смартфон", price: 13900, amount: 48 },
    3: { id: 3, name: "Планшет", price: 18400, amount: 23 },
  })[id];

export default function ProductPage() {
  const { id } = useParams();

  const { name, price, amount } = product(id);
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item}>Наименование товара: {name}</li>
        <li className={styles.item}>Цена: {price} руб.</li>
        <li className={styles.item}>На складе {amount} шт.</li>
      </ul>
    </div>
  );
}
