import React from "react"
import styles from "./styles.module.css"
import { Site as SiteUrl } from "@/components/Projets/site"
import { Img } from "@/components/Image"
import { InfosSite } from "@/components/InfosSite"
import RunEngine from "@/public/images/run-engine.webp"

import InfosAthletes from "@/public/images/infos-athletes.webp"
import InfosAthletes2 from "@/public/images/infos-athletes-2.webp"
import InfosAthletes3 from "@/public/images/infos-athletes-3.webp"

export function Projets() {
  return (
    <>
      <h2>Mes projets ( en cours / Test ) </h2>
      <SiteUrl name='Run Engine' link='https://run-engine.vercel.app/' />
      <div className={styles.container}>
        <p>
          Progressive Web App
          <br />
          <br />- Calcul ta vitesse,
          <br /> - Temps que tu réaliseras du 400m au marathon
        </p>
        <Img src={RunEngine} alt='Run engine temps et vitesse sur course' />
        <InfosSite technologies='NextJs, Module Css' />
      </div>
      <SiteUrl name='Infos-athletes' link='https://infos-athletes.web.app/' />
      <div className={styles.container}>
        <p>Application Web avec informations sur différents sports</p>
        <Img src={InfosAthletes} alt='infos-athletes projets babbbass' />
        <Img src={InfosAthletes2} alt='infos-athletes projets babbbass' />
        <Img src={InfosAthletes3} alt='infos-athletes projets babbbass' />
        <InfosSite technologies='ReactJs, React Query, Jest, Redux' />
      </div>
    </>
  )
}
