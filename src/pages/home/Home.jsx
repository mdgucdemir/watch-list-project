import React, { useState } from "react";
import ResultCard from "../../components/resultCard/ResultCard";



const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // console.log(results)

  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    const TMDB_TOKEN =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMDB_TOKEN,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((err) => console.error(err));
  }

  return (
    <div className="home">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>
              Millions of Movies And TV Shows, Series, Actors and Actress.
            </h2>
            <h2>Discover Now</h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search Movie, Series, Actors and Actress"
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
       
        </div>
        

      </div>
    </div>
  );
};

export default Home;
