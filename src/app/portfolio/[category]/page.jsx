import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from 'next/image'

export default async function Category({ params }) {
  const { category } = await params;

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button  text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button  text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button  text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button  text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" alt=""/>
        </div>
      </div>
    </div>
  );
}

