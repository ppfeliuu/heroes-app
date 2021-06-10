import React from "react";
import { useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroesScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  return (
    <div>
      <h1>Heroes Screen</h1>
    </div>
  );
};
