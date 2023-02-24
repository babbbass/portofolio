import React from "react"
import styles from "./styles.module.css"

export function Header() {
  return (
    <header>
      <nav className={styles.container}>
        <h2 className={styles.name}>Sebastien Savan 👋</h2>
        <div className={styles.link}>
          <span className={styles.headerStyle}></span>
          <span className={styles.contact}>Contact au</span>
          <a href='mailto:sebastien.savan@gmail.com'>
            sebastien.savan@gmail.com
          </a>
        </div>
      </nav>
    </header>
  )
}
