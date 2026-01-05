import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

// Make this async in case we ever fetch data asynchronously
async function getData(category) {
  const data = items[category];

  if (!data) {
    notFound();
  }

  return data;
}

export default async function CategoryPage({ params }) {
  // IMPORTANT: await params
  const { category } = await params;

  const data = await getData(category);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>

          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
