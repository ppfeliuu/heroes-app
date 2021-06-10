import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} incorrect`);
  }

  return heroes.filter((heroe) => hero.publisher === publisher);
};
