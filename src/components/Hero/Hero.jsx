import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yair Elazar</h1>
        <p className={styles.description}>
          I'm a passionate full-stack developer with academic background in Computer Science and Mathematics.
          <br />
          Skilled in Java, Spring, React, Unity, and more.
          <br />
          Reach out if you'd like to collaborate or learn more!
        </p>
        <a href="mailto:yairelazar6090@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
  src="assets/hero/heroImage2.png"
  alt="Hero image of me"
  className={styles.heroImg}
/>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
