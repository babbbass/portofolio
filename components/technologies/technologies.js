/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "./styles.module.css"

export function Technologies({ technologies }) {
  return (
    <>
      <h2 className={styles.technologieTitle}>
        Technologies sur lequelles j'ai travaillé
      </h2>
      <ul className={styles.myTechnologies}>
        {technologies.map((techno) => (
          <li key={`${techno}-key`} className={styles.technoName}>
            {techno}
          </li>
        ))}
      </ul>
    </>
  )
}
