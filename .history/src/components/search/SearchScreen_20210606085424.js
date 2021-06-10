import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange, reset] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  // const heroesFiltered = getHeroByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    history.push(`?q=${searchText}`);

    reset();
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
