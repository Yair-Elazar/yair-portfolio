import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:yairelazar6090@gmail.com">yairelazar6090@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com">linkedin.com/in/your-profile</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="GitHub Icon" />
          <a href="https://github.com/Yair-Elazar">github.com/Yair-Elazar</a>
        </li>
      </ul>
    </footer>
  );
};
