import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  useMemo(() => getHeroByPublisher(publisher), [publisher]);

  // const heroes = getHeroByPublisher(publisher);

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
