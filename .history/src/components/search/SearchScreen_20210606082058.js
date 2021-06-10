import React from "react";

export const SearchScreen = () => {
  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form>
            <input
              type="text"
              placeholder="Find hero"
              className="form-control"
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7"></div>
      </div>
    </div>
  );
};
