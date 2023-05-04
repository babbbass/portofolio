import React from "react"
import styles from "./styles.module.css"
import { Img } from "@/components/Image"
import twitter from "@/public/images/twitter.png"

export function Footer() {
  return (
    <div className={styles.container}>
      <span>© 2023 - Babbbass</span>
      <span className={styles.link}>
        <Img src={twitter} alt='babbbass twitter' height='20' />
        <a
          href='https://twitter.com/babbbass_'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.highlight}
        >
          babbbass
        </a>
      </span>
    </div>
  )
}
