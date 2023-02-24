import React from "react"
import styles from "./styles.module.css"

export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <p>
        Mail -{" "}
        <a href='mailto:sebastien.savan@gmail.com' className={styles.highlight}>
          sebastien.savan@gmail.com
        </a>
      </p>
      <p>
        Projets -{" "}
        <a href='https://github.com/babbbass' className={styles.highlight}>
          Github
        </a>
      </p>
      <p>
        Carrière -{" "}
        <a
          href='https://www.linkedin.com/in/sebastien-savan-76597040/'
          className={styles.highlight}
        >
          Linkedin
        </a>
      </p>
    </div>
  )
}
