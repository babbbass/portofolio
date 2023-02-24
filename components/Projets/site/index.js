import React from "react"
import styles from "./styles.module.css"

import Link from "next/link"

export function Site({ link, name }) {
  return (
    <>
      <Link href={link}>
        <h3 className={styles.highlight}>{name}</h3>
      </Link>
    </>
  )
}
