import Link from "next/link";
import React, { FunctionComponent } from "react";

interface Character {
  name: string;
  quote: string;
  href: string;
}

export const Card: FunctionComponent<Character> = ({ name, quote, href }) => {
  return (
    <Link href={href}>
      <a>
        <div>
          <h3>{name}</h3>
          <p>{quote}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
