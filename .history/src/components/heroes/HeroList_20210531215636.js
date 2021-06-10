import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";

export const HeroList = ({ publisher }) => {
  console.log(publisher);
  const heroes = getHeroByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
