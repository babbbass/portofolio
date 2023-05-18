import React, { useState } from "react"
import styles from "./styles.module.css"
import { Site as SiteUrl } from "@/components/Projets/site"
import { Img } from "@/components/Image"
import { InfosSite } from "@/components/InfosSite"
import { Button } from "@/components/Projets/button/index"
import RunEngine from "@/public/images/run-engine.webp"
import pLeagueAssisters from "@/public/images/pLeagueAssisters.webp"
import pLeaguePlayer from "@/public/images/pLeaguePlayer.webp"
import pLeagueSquad from "@/public/images/pLeagueSquad.webp"

import InfosAthletes from "@/public/images/infos-athletes.webp"
import InfosAthletes2 from "@/public/images/infos-athletes-2.webp"
import InfosAthletes3 from "@/public/images/infos-athletes-3.webp"

export function Projets() {
  return (
    <>
      <h2>Projets ( en cours / terminés ) </h2>
      <SiteUrl
        name='Premier League Next'
        link='https://premier-league-next.vercel.app'
      />
      <div className={styles.container}>
        <p>Site sur le football Anglais</p>
        <Img src={pLeagueAssisters} alt='Babbbass portofolio' />
        <Img src={pLeaguePlayer} alt='Babbbass portofolio' />
        <Img src={pLeagueSquad} alt='Babbbass portofolio' />
        <div className={styles.buttonContainer}>
          <Button
            text='Code'
            link='https://github.com/babbbass/Premier-league-next'
          />
          <Button text='Site' link='https://premier-league-next.vercel.app/' />
        </div>
        <InfosSite technologies='Next, TypeScript, React-testing-library' />
      </div>
      <SiteUrl name='Run Engine' link='https://run-engine.vercel.app/' />
      <div className={styles.container}>
        <p>
          Progressive Web App
          <br />
          <br />- Calcul vitesse moyenne et allure en course à pied,
          <br />
          <br /> - Temps réalisé du 400m au marathon
        </p>
        <Img src={RunEngine} alt='Run engine temps et vitesse sur course' />
      </div>
      <InfosSite technologies='NextJs, Module Css' />
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
