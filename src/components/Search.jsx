import React from "react";
import { Container } from "./shared/Container";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <Container>
        <div>
          <h2 className="mt-14 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold wood-5">
            Got a Craving? Search Recipes Now!
          </h2>
        </div>

        <div id="Find-Recipe" className="search mb-14">
          <div>
            <img src="./search.svg" alt="Search" />
            <input
              type="text"
              placeholder="Search through thousands of recipes"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
