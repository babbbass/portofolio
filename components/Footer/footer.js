import React from "react"
import styles from "./styles.module.css"

export function Footer() {
  return (
    <div className={styles.container}>
      <span>© 2023 - Babbbass</span>
      <span className={styles.parcours}>
        <a href='/SAVANSebastien2022.docx' download>
          Parcours détaillé
        </a>
      </span>
    </div>
  )
}
