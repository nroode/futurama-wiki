import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from 'next';
import { InferGetStaticPropsType, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`);
    const data = await res.json();
    return {
      props: { characters: data }
    }
  }

  export async function getStaticPaths() {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`);
    const data = await res.json();
    const paths = data.map((char, i) => ({
      params: { id: String(i) }
    }));

    console.log(paths);

    return { paths, fallback: false }
    
  }

const About: NextPage = ({ characters }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query;
    const { Name, Species, Age, Planet, Profession, Status, FirstAppearance, PicUrl } = characters[id];

    console.log(characters);

    return (
      <div>
        <img src={PicUrl} alt={Name} />
        <h1>All about me { Name }</h1>
        <p>{ Species }</p>
        <p>{ Age }</p>
        <p>{ Planet }</p>
        <p>{ Profession }</p>
        <p>{ Status }</p>
        <p>{ FirstAppearance }</p>
        
        <Link href='/'>
          <button>Back</button>
        </Link>
      </div>
        
    )
}

export default About;