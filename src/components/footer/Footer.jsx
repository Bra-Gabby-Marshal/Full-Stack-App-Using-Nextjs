import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        &copy; {new Date().getFullYear()} GabbyMay. All rights reserved.
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon}  alt="facebook"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="instagram"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="skype"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="youtube"/>
      </div>
    </div>
  )
}

export default Footer
