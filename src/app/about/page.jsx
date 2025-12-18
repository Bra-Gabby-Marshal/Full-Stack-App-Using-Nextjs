import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg" fill=
                    {true} alt='' className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                    <div className={styles.item}>
                        <h2 className={styles.title}>Who Are We?</h2>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ullam
                            cumque, quia repellat vitae obcaecati dolorem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto laborum ut ea. Atque ea adipisci laborum, nulla obcaecati labore, quam sed voluptas autem asperiores ex, laudantium ad recusandae dignissimos.
                        <br/><br/>
                            Rerum amet, fugiat in, quia nesciunt numquam neque sit tempore accusantium
                            ut non, voluptatibus corporis soluta.
                        </p>
                    </div>

                    <div className={styles.item}>
                        <h2 className={styles.title}>What We Do?</h2>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure beatae magni autem inventore deleniti et est a voluptatum, aperiam praesentium velit facilis enim earum cumque quae. Iste mollitia vel quaerat, sequi quae, facere blanditiis, hic assumenda adipisci molestiae placeat!
                            <br/>
                            <br/>
                            - Creative Illustrations <br/><br/>
                            - Dynamic Websites <br/><br/>
                            - Fast and Handy Mobile App <br/>
                        </p>
                        <Button url="/contact" text="Contact" />
                    </div>
                </div>

        </div>
    )
}

export default About