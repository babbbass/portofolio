import React from "react"
import styles from "./styles.module.css"

export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <p>
        Twitter -{" "}
        <a
          href='https://twitter.com/babbbass_'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.highlight}
        >
          https://twitter.com/babbbass_
        </a>
      </p>
      <p>
        Projets -{" "}
        <a
          href='https://github.com/babbbass'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.highlight}
        >
          Github
        </a>
      </p>
      <p>
        Carrière -{" "}
        <a
          href='https://www.linkedin.com/in/sebastien-savan-76597040/'
          className={styles.highlight}
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
      </p>
    </div>
  )
}
