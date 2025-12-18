import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, voluptate.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam nesciunt vitae, error labore earum ratione temporibus nostrum unde qui perferendis cum voluptas quidem officia sint? Illum perferendis dolores minus.
          </p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" alt="" width={40} height={40} className={styles.avatar}/>
            <span className={styles.username}>Sodey H. Gabriel</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg" fill={true} alt=""  className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus, laboriosam accusamus odio, incidunt eligendi illo asperiores laborum reprehenderit nihil, mollitia autem expedita magni eos quo deserunt numquam explicabo ut eveniet aperiam minima animi ex tempora? Amet voluptatum at sequi ipsum inventore, fugit eaque ad nam libero, maiores eum quo animi. Fugit adipisci accusamus quibusdam laborum ipsam quo amet exercitationem?</p>
      </div>
    </div>
  )
}

export default BlogPost
