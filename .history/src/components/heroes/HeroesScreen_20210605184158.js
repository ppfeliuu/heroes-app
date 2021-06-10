import React from "react";
import { useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroesScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  console.log(hero);

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div>
      <h1>Heroes Screen</h1>
    </div>
  );
};
