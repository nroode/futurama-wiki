import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Character {
  name: string;
  quote: string;
  picture: string;
  href: string;
}

export const Card: FunctionComponent<Character> = ({
  name,
  quote,
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
          <p>{quote}</p>
        </CardBorder>
      </a>
    </Link>
  );
};

export default Card;

const Name = styled.h3`
  text-transform: uppercase;
`;

const CardBorder = styled.div`
  border: 10px solid black;
`;

export const CharacterCard = styled(Card)`
  text-align: center;
  color: red;
  background-color: red;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
