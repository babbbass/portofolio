/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { Technologies } from "../components/technologies/technologies"
import { Contact } from "../components/Contact"
import { Projets } from "../components/Projets"

export default function Home() {
  return (
    <>
      <Head>
        <title>Babbbass développeur Javascript</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <section className={styles.mainContainer}>
          <p className={styles.presentation}>
            Bienvenue!
            <br />
            <br />
            Développeur PHP/Symfony avec plus de 10 ans d'expérience dans le
            développement de sites Web.
            <br />
            <br />
            Au fil des années, j'ai travaillé avec des{" "}
            <span className={styles.highlight}>startups </span>dans l'
            <span className={styles.highlight}>e-commerce</span>, ainsi que des{" "}
            <span className={styles.highlight}>grands groupes</span>.
            <br />
            <br />
            J'ai créé de nombreux sites Web avec une expertise en développement.
            J'ai acquis des compétences solides en utilisant Typescript avec la
            librairie <span className={styles.highlight}>ReactJs</span> et le
            framework <span className={styles.highlight}>NextJs</span>.
            <br />
            <br />
            Si votre équipe{" "}
            <span className={styles.highlight}>
              recherche un développeur
            </span>{" "}
            compétent et motivé pour{" "}
            <span className={styles.highlight}>
              travailler sur votre projet
            </span>
            , n'hésitez pas à me contacter. Je suis impatient de discuter avec
            vous de vos projets futurs.
          </p>
          <Contact />
          <hr />
          <Technologies
            technologies={[
              "NextJs",
              "ReactJs",
              "TypeScript",
              "Module Css",
              "Tailwind",
              "Styled-Compo.",
              "JavaScript",
              "Jest",
              "React-Testing-library",
              "Git/GitHub/BitBucket",
              "Redux",
            ]}
          />
          <hr />
          <Projets />
        </section>
      </main>
    </>
  )
}
