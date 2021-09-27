import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Character {
  name: string;
  id: string;
  picture: string;
  href: string;
}

export const Card: FunctionComponent<Character> = ({
  name,
  id,
  picture,
  href,
}) => {
  function getImageHeight(picture) {
    const imgHeight = picture.height;
    (imgHeight > 200) ? 'contain' : 'cover';
  }

  return (
    <Link href={href}>
      <a>
        <CardBorder>
          <CharacterImage src={picture} alt={name} />
          <Name>{name}</Name>
        </CardBorder>
      </a>
    </Link>
  );
};

export default Card;

const Name = styled.div`
  color: #FFFC31;
  background-color: #111D4A;
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1;
  padding: 2px;
  margin: 0px;
  // box-shadow: 10px 5px 0px #1A2E74;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const CardBorder = styled.div`
  // border: 10px solid #FFFC31;
  // border-radius: 30px;
  background-color: white;
  overflow: hidden;
  position: relative;
  box-shadow: 5px 5px 10px black;
  height: 300px;
  display: grid;
  justify-items: center;
`;

export const CharacterCard = styled(Card)`
  text-align: center;
  color: red;
  background-color: red;
  height: 300px;
`;

const CharacterImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
