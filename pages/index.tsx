import type { NextPage } from 'next'
import CharacterCard from '../components/card'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`);
  const data = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { characters: data }
  }
}

const Home: NextPage = ({ characters }) => {

  console.log(characters);

  const generateSlug = (name: string) => {
    const newSlug = name.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '-').toLowerCase();
    console.log(newSlug)
    return newSlug;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Futurama Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Character Wiki</h1>

        <CharacterGrid>
          {characters.map(character => (
              <CharacterCard 
                name={character.Name}
                key={generateSlug(character.Name)}
                id={generateSlug(character.Name)}
                quote={'Once upon a time...'}
                picture={character.PicUrl}
                href={`/about/${generateSlug(character.Name)}`}
              />
          ))}
        </CharacterGrid>
      </main>

    </div>
  )
}

export default Home
