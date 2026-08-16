import { useNavigate } from "react-router-dom";
import styles from "./contacts.module.css";

export default function Contacts() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Контакты:</h1>
      <button onClick={() => navigate("/")}>Перейти на главную страницу</button>
    </div>
  );
}
