import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/aboutImage.png"
              alt="Developer icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a Computer Science & Mathematics graduate from Netanya Academic College (2021–2025),
                with a strong foundation in backend development using Java and Spring.
                I also enjoy working with frontend technologies like React and CSS frameworks.
                In my free time, I build full-stack apps, work on game projects in Unity, and constantly explore new tools and technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/aboutImage.png"
              alt="Personal life icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>My Journey</h3>
              <p>
                Before entering tech, I served as a commander in the IDF (Combat Engineering, 2012–2015),
                then worked at Johnson & Johnson as a medical device tester (2015–2020),
                and currently work at Teva in site security and control.
                I'm driven by curiosity, discipline, and a desire to build impactful, real-world solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
