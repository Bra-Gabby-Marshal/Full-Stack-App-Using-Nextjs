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
                <div className={styles.textContainer}>
                    <div className={styles.item}>
                        <h1 className={styles.title}>Who Are We?</h1>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ullam cumque, quia repellat vitae obcaecati dolorem? Aperiam iste quod inventore necessitatibus animi, quis nobis ratione cum impedit porro aut sunt laboriosam? Repellat eius omnis cum. Rerum amet,
                            <br />
                            <br />
                            fugiat in, quia nesciunt numquam neque sit tempore accusantium ut non, voluptatibus corporis soluta. Reprehenderit earum necessitatibus magnam eos sed quasi at praesentium.</p>
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.title}>What We Do?</h1>
                        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius asperiores nulla illo eum iure modi suscipit
                            <br />
                            <br />
                            nihil, quisquam reiciendis dolores excepturi fugiat adipisci facere aliquam.</p>
                        <Button url="/contact" text="Contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About