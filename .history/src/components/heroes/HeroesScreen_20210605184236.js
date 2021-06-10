import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroesScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div>
      <h1>Heroes Screen</h1>
    </div>
  );
};
