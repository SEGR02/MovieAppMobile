import React from "react";

const useMovies = () => {
  const [movies, setMovies] = React.useState(null);
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
        },
      }
    );
    const json = await response.json();
    setMovies(json);
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);
  return { movies };
};

export default useMovies;
