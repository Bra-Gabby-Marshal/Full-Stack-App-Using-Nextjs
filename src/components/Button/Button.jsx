import Link from "next/link";
import styles from "./button.module.css";

function Button({ text, url }) {
  return (
    <Link href={url} className={styles.container}>
      {text}
    </Link>
  );
}

export default Button;
