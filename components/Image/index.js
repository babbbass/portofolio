import Image from "next/image"
import styles from "./styles.module.css"

export const Img = ({ src, alt }) => {
  return <Image src={src} alt={alt} height={300} className={styles.image} />
}
