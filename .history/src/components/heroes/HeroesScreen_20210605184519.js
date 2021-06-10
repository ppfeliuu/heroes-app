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
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`./assets/heroes/${heroId}.jpg`}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
    </div>
  );
};
