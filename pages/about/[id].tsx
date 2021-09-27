import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from 'next';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import styled from "styled-components";

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
    const { Name, Species, Age, Planet, Profession, Relatives, Status, FirstAppearance, PicUrl } = characters[id];

    console.log(characters);

    return (
      <div>
        <img src={PicUrl} alt={Name} />
        <AboutCard>
        <CharacterName>{ Name }</CharacterName>
        <p>Species: { Species }</p>
        <p>Age: { Age }</p>
        <p>Planet: { Planet }</p>
        <p>Profession: { Profession }</p>
        <p>Relatives: { Relatives }</p>
        <p>Status: { Status }</p>
        <p>First Appearance: { FirstAppearance }</p>
        </AboutCard>
        <Link href='/'>
          <BackBtn>Back</BackBtn>
        </Link>
      </div>
        
    )
}

export default About;

const AboutCard = styled.div`
  border: 2px solid black;
  display: grid;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
`;

const CharacterName = styled.h1`
  background-color: black;
  color: white;
  margin: 0px;
  padding: 10px;
  border-bottom: 2px solid white;
`;

const BackBtn = styled.button`
  background-color: transparent;
  padding: 20px 40px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px 0px;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 3px;
  `