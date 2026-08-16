import { useNavigate } from "react-router-dom";
import styles from "./mainPage.module.css";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Контент главной страницы</h1>
      <button onClick={() => navigate("/contacts")}>Перейти в контакты</button>
    </div>
  );
}
