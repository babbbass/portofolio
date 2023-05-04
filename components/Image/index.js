import React, { useState } from "react"
import Image from "next/image"
import styles from "./styles.module.css"

export const Img = ({ src, alt, height = 300 }) => {
  const [zoomed, setZoomed] = useState(false)
  return (
    <div
      onClick={() => setZoomed(!zoomed)}
      className={zoomed ? styles.zoomedImg : styles.notZoomed}
    >
      <Image src={src} alt={alt} height={height} className={styles.image} />
    </div>
  )
}
