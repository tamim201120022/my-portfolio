import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tamim201120022@student.ndub.edu.bd">tamim201120022@student.ndub.edu.bd</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/facebookicon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.facebook.com/Tamim Ahmed">Facebook.com/Tamim Ahmed</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/tamim201120022</a>
        </li>
      </ul>
    </footer>
  );
};
