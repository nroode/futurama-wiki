import { useRouter } from "next/router";
import type { NextPage } from 'next';
import { InferGetStaticPropsType, GetStaticProps } from 'next';

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

  const generateSlug = (name: string) => {
    const newSlug = name.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '-').toLowerCase();
    return newSlug;
  }

  export async function getStaticPaths() {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`);
    const data = await res.json();
    const paths = data.map((char) => ({
      params: { id: generateSlug(char.Name) }
    }));

    console.log(paths);

    return { paths, fallback: false }
    
  }

const About: NextPage = ({ characters }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query;

    console.log(characters);

    return (
        <h1>All about me { id }</h1>
        
    )
}

export default About;