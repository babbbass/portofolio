import React from "react"
import styles from "./styles.module.css"

export function Button({ text, link }) {
  return (
    <button className={styles.button}>
      <a href={link}>{text}</a>
    </button>
  )
}
