import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li>{hero.superhero}</li>
      ))}
    </ul>
  );
};
