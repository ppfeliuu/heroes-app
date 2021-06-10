import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

import batman from "../../assets/heroes/batman.jpg";

const heroesImgs = require.context("../../assets/heroes", true);

export const HeroesScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  // const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  //console.log(hero);

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {alter_ego} </b>
          </li>

          <li className="list-group-item">
            <b>Publisher: {publisher} </b>
          </li>

          <li className="list-group-item">
            <b>First appearance: {first_appearance} </b>
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
