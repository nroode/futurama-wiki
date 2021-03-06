import type { NextPage } from 'next'
import CharacterCard from '../components/card'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import  { InferGetStaticPropsType, GetStaticProps } from 'next';

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export const getStaticProps: GetStaticProps = async () => {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`);
  const data = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { characters: data }
  }
}

const Home: NextPage = ({ characters }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(characters);
  const generateSlug = (name: string) => {
    const newSlug = name.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '-').toLowerCase();
    return newSlug;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Futurama Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
        </style>
      </Head>

      <main className={styles.main}>
        <h1>Character Wiki</h1>

        <CharacterGrid>
          {characters.map((character, i) => (
              <CharacterCard 
                name={character.Name}
                key={generateSlug(character.Name)}
                id={generateSlug(character.Name)}
                picture={character.PicUrl}
                href={`/about/${i}`}
              />
          ))}
        </CharacterGrid>
      </main>

    </div>
  )
}

export default Home
