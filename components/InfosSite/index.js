import React from "react"
import styles from "./styles.module.css"

export function InfosSite({ technologies }) {
  return (
    <div className={styles.infosSite}>
      {" "}
      <span className={styles.builtIn}>Fait en:</span> {technologies}
    </div>
  )
}
